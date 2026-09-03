/**
 * check-spam-routes.mjs — regression test for infra/cloudfront-viewer-request.js
 *
 * The CloudFront Function is the only thing standing between Google and a few
 * thousand indexed gambling doorway URLs left over from the 2025 WordPress
 * compromise. It also must never 410 a real page. Both directions are easy to
 * break with a one-character edit to a regex, so both are asserted here.
 *
 * Run: npm run check:routes
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = fs.readFileSync(path.join(root, 'infra/cloudfront-viewer-request.js'), 'utf8');

// The function file must stay valid CloudFront source — no imports, no exports —
// so it is evaluated here rather than imported.
const sandbox = {};
vm.createContext(sandbox);
new vm.Script(source + '\n;this.handler = handler;').runInContext(sandbox);
const { handler } = sandbox;

const call = (uri, querystring = {}) =>
  handler({ request: { uri, querystring, headers: {} } });

/** Known spam URLs, gathered from site: queries against the live domain. */
const SPAM = [
  '/super-slots-casino-review', '/how-online-pokies-work', '/yukon-gold-casino-usd-1',
  '/casino-without-3d-secure', '/0xb436e0d9',
  '/top-online-pokies-and-casinos-welcome-bonuses-casino-royale',
  '/online-pokies-real-money-reviews', '/top-online-pokies-and-casinos-to-win-real-money',
  '/best-slot-machine-odds-at-casino', '/play-slots-win-real-money', '/most-famous-casinos',
  '/casinos-like-house-of-pokies', '/online-pokies-big-wins',
  '/gaminator-casino-review-and-free-chips-bonus', '/maple-casino-100-free-spins-bonus-2025',
  '/free-spins-no-deposit-keep-winnings', '/tip-top-bingo-casino-100-free-spins-bonus-2025',
  '/netent-casino-no-deposit-bonus-codes-for-free-spins-2025', '/blackjack-side-bet-odds',
  '/rich-palms-casino-review-and-free-chips-bonus', '/rolling-slots-casino-bonus-codes-2025',
  '/brango-casino-bonus-codes', '/20-free-spins-on-fluffy-favourites-no-deposit',
  '/scandibet-casino-review-and-free-chips-bonus', '/free-app-slots',
  '/top-online-pokies-and-casinos-and-usa', '/5-reel-pokies', '/smart-pokies-online',
];

/** Probes for the WordPress install that no longer exists. */
const WP_PROBES = ['/wp-login.php', '/wp-admin/', '/wp-json/', '/xmlrpc.php', '/wp-content/uploads/x.php'];

/**
 * Every real route, plus plausible future ones. None may ever 410.
 * Keep in sync with the routes in src/App.jsx.
 */
const LEGIT = [
  '/', '/about', '/team', '/services', '/blogs', '/careers', '/contact',
  '/terms-of-use', '/privacy-policy', '/itil-overview', '/itil-certification',
  '/itil-foundation', '/itil-foundation-v5', '/itil-foundation-4',
  '/itil-foundation-bridge-v5', '/itil-specialist-product-v5',
  '/itil-specialist-service-v5', '/itil-specialist-experience-v5',
  '/itil-specialist-strategy-v5', '/itil-specialist-transformation-v5',
  '/itil-specialist-msf', '/itil-practice-pic', '/itil-practice-cai', '/sandbox',
  '/ai-certification', '/ppm-agile-certification', '/training-info-request',
  '/peer-admin', '/blog/ai-not-strategy-people-are',
  '/services/it-consulting-new-jersey', '/services/it-staffing-new-jersey',
  '/services/cloud-digital-transformation', '/services/enterprise-erp-solutions',
  '/services/cyber-security-solutions', '/services/quality-assurance-testing',
  // plausible future routes that must not be caught by accident
  '/services/data-science-analytics', '/services/mobile-app-development',
  '/blog/why-we-chose-agile', '/blog/a-better-way-to-plan', '/case-studies',
  '/blog/inspiring-teams', '/blog/deposit-free-onboarding-lessons'.replace('deposit-', 'rapid-'),
];

let failures = 0;
const fail = (msg) => { console.log('  FAIL  ' + msg); failures++; };

// ── spam must be 410, with and without a trailing slash ──────────────────
console.log('\n1. spam URLs -> 410');
for (const uri of SPAM) {
  for (const u of [uri, uri + '/']) {
    const r = call(u);
    if (r.statusCode !== 410) fail(`${u} returned ${r.statusCode ?? 'pass-through'}, expected 410`);
  }
}
if (!failures) console.log(`  ok  all ${SPAM.length} spam URLs 410 (bare and trailing-slash)`);

// ── WordPress probes must be 410 ─────────────────────────────────────────
const before1 = failures;
console.log('\n2. WordPress probes -> 410');
for (const uri of WP_PROBES) {
  const r = call(uri);
  if (r.statusCode !== 410) fail(`${uri} returned ${r.statusCode ?? 'pass-through'}, expected 410`);
}
if (failures === before1) console.log(`  ok  all ${WP_PROBES.length} probes 410`);

// ── real routes must never 410 ───────────────────────────────────────────
const before2 = failures;
console.log('\n3. legitimate routes -> never 410');
for (const uri of LEGIT) {
  const r = call(uri);
  if (r.statusCode === 410) fail(`${uri} was 410'd — false positive`);
}
if (failures === before2) console.log(`  ok  none of the ${LEGIT.length} real routes 410`);

// ── trailing slash normalisation ─────────────────────────────────────────
const before3 = failures;
console.log('\n4. trailing slash -> 301');
for (const [input, expected] of [['/careers/', '/careers'], ['/services/', '/services'],
  ['/terms-of-use/', '/terms-of-use'], ['/blog/some-post/', '/blog/some-post']]) {
  const r = call(input);
  if (r.statusCode !== 301) fail(`${input} returned ${r.statusCode ?? 'pass-through'}, expected 301`);
  else if (r.headers.location.value !== expected) fail(`${input} -> ${r.headers.location.value}, expected ${expected}`);
}
// root must not be redirected to empty string
const rootRes = call('/');
if (rootRes.statusCode === 301) fail('/ was redirected — root must pass through');
// query strings must survive the redirect
const qsRes = call('/careers/', { ref: { value: 'linkedin' } });
if (qsRes.headers?.location?.value !== '/careers?ref=linkedin') {
  fail(`querystring lost on redirect: got ${qsRes.headers?.location?.value}`);
}
if (failures === before3) console.log('  ok  trailing slashes 301, root preserved, querystring preserved');

// ── legacy content redirect ──────────────────────────────────────────────
const before4 = failures;
console.log('\n5. legacy WordPress content -> 301');
const cs = call('/community-support');
if (cs.statusCode !== 301 || cs.headers.location.value !== '/about') {
  fail(`/community-support -> ${cs.statusCode} ${cs.headers?.location?.value}, expected 301 /about`);
}
if (failures === before4) console.log('  ok  /community-support 301s to /about');

// ── real routes must pass through to origin ──────────────────────────────
const before5 = failures;
console.log('\n6. real routes pass through to origin');
for (const uri of ['/', '/services/it-consulting-new-jersey', '/itil-foundation']) {
  const r = call(uri);
  if (r.statusCode) fail(`${uri} short-circuited with ${r.statusCode}, expected pass-through`);
  else if (r.uri !== uri) fail(`${uri} was rewritten to ${r.uri}`);
}
if (failures === before5) console.log('  ok  real routes reach the origin unchanged');

// ── CloudFront runtime constraints ───────────────────────────────────────
const before6 = failures;
console.log('\n7. CloudFront Function constraints');
const bytes = Buffer.byteLength(source, 'utf8');
if (bytes > 10240) fail(`source is ${bytes} bytes, CloudFront limit is 10240`);
// Strip comments before scanning — the file's own header documents these
// restrictions in prose and would otherwise match.
const code = source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
for (const banned of ['require(', 'import ', 'export ', 'async ', 'await ', 'fetch(']) {
  if (code.includes(banned)) fail(`source contains "${banned}" which CloudFront Functions do not support`);
}
if (failures === before6) console.log(`  ok  ${bytes} bytes, no unsupported constructs`);

console.log(failures === 0 ? '\nPASS\n' : `\n${failures} FAILURE(S)\n`);
process.exit(failures === 0 ? 0 : 1);
