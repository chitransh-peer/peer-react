// CloudFront Function — viewer-request trigger for peer-consulting.com
//
// PURPOSE
// The site was a WordPress install until March 2025 and was compromised: an
// attacker mass-generated gambling doorway pages ("parasite SEO"). The
// WordPress install is long gone and nothing is being injected any more, but
// Google still holds thousands of those URLs. Because S3/CloudFront serves the
// SPA shell with HTTP 200 for every unknown path, each dead spam URL still
// looks like a valid thin page instead of a deleted one — which is what keeps
// the domain suppressed in search.
//
// This function returns 410 Gone for those URLs. 410 is a stronger and much
// faster de-indexing signal than 404, which Google re-checks for months.
//
// IMPORTANT: do not also block these paths in robots.txt. A disallowed URL is
// never crawled, so Google would never see the 410 and would keep the URLs
// indexed indefinitely.
//
// Runtime: cloudfront-js-2.0. No async, no network, no require(). Keep under 10 KB.
// Tested by scripts/check-spam-routes.mjs — run it after editing this file.

// Gambling keywords appearing in the compromised URLs. Verified against 28 known
// spam URLs (all match) and 38 legitimate routes (none match).
// Deliberately avoids short substrings that could appear in a real page slug:
// bare "bet" would match "better", bare "spin" would match "inspiring".
var SPAM = new RegExp(
  'casino|pokie|slot|betting|gambl|wager|blackjack|roulette|baccarat|poker|' +
    'bingo|jackpot|lottery|sportsbook|free-spin|free-chip|no-deposit|bonus|' +
    'payout|real-money',
  'i'
);

// Machine-generated hex slugs from the same compromise, e.g. /0xb436e0d9/
var HEX_SLUG = /^\/0x[0-9a-f]+\/?$/i;

// Probes for the WordPress install that no longer exists. Returning the SPA
// shell with a 200 tells scanners WordPress is still here; 410 says it is gone.
var WORDPRESS = /^\/(wp-admin|wp-content|wp-includes|wp-login\.php|wp-json|xmlrpc\.php|wp-cron\.php)(\/|$)/i;

// Legacy WordPress URLs that still map to real content. 301 rather than 410 —
// these have accumulated links and should pass their value to the new page.
var LEGACY_REDIRECTS = {
  '/community-support': '/about'
};

var GONE_BODY =
  '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
  '<meta name="robots" content="noindex"><title>Gone</title></head><body>' +
  '<h1>410 Gone</h1><p>This page has been permanently removed. ' +
  '<a href="https://peer-consulting.com/">Go to peer-consulting.com</a>.</p>' +
  '</body></html>';

function gone() {
  return {
    statusCode: 410,
    statusDescription: 'Gone',
    headers: {
      'content-type': { value: 'text/html; charset=utf-8' },
      // Belt and braces: the status alone is enough, but this also covers any
      // crawler that reads the header before acting on the status.
      'x-robots-tag': { value: 'noindex' },
      'cache-control': { value: 'public, max-age=3600' }
    },
    body: GONE_BODY
  };
}

function movedTo(location) {
  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: { value: location },
      'cache-control': { value: 'public, max-age=86400' }
    }
  };
}

function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // ── 1. Spam and probe URLs → 410 Gone ──────────────────────────────────
  // Checked before normalisation so both /foo/ and /foo are covered even if
  // the trailing-slash rule below is ever changed.
  if (SPAM.test(uri) || HEX_SLUG.test(uri) || WORDPRESS.test(uri)) {
    return gone();
  }

  // ── 2. Normalise trailing slashes ──────────────────────────────────────
  // Google has the old WordPress URLs indexed with a trailing slash
  // (/careers/). The React app serves /careers. Collapse to one canonical form
  // so the two are not treated as separate, duplicate pages.
  var normalised = uri;
  if (uri.length > 1 && uri.charAt(uri.length - 1) === '/') {
    normalised = uri.slice(0, -1);
    var qs = rebuildQuery(request.querystring);
    return movedTo(normalised + (qs ? '?' + qs : ''));
  }

  // ── 3. Legacy content that moved ───────────────────────────────────────
  if (LEGACY_REDIRECTS[normalised]) {
    return movedTo(LEGACY_REDIRECTS[normalised]);
  }

  // ── 4. Everything else falls through to the origin ─────────────────────
  // Real routes resolve normally; unknown paths hit the CloudFront custom error
  // response that serves index.html, where the React catch-all renders the 404
  // page with a noindex tag.
  return request;
}

// CloudFront gives querystring as an object; rebuild it for a redirect Location.
function rebuildQuery(querystring) {
  var parts = [];
  if (!querystring) {
    return '';
  }
  for (var key in querystring) {
    if (Object.prototype.hasOwnProperty.call(querystring, key)) {
      var v = querystring[key];
      if (v && v.value) {
        parts.push(key + '=' + v.value);
      } else {
        parts.push(key);
      }
    }
  }
  return parts.join('&');
}
