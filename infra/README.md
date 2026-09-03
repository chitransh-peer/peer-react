# Deploying peer-consulting.com

The site is a static Vite build served from **S3 behind CloudFront**. There is
no CI pipeline; `dist/` is uploaded manually.

## Background: why the CloudFront Function exists

Until March 2025 the site ran on WordPress 6.7.2 (theme `peerconsulting`). That
install was compromised and an attacker mass-generated gambling doorway pages —
`/how-online-pokies-work/`, `/super-slots-casino-review/`, and thousands more.
The WordPress install is gone and nothing is being injected any more, but
**Google still has those URLs indexed**, and CloudFront answers every unknown
path with the SPA shell and a `200`. To a crawler each dead spam URL therefore
still looks like a live page. That is the main thing suppressing the domain in
search.

[`cloudfront-viewer-request.js`](cloudfront-viewer-request.js) answers those
URLs with **410 Gone**, which is the strongest and fastest de-indexing signal
available — considerably faster than 404, which Google re-checks for months.

Do **not** add the spam paths to `robots.txt`. A disallowed URL is never
crawled, so Google would never see the 410 and the URLs would stay indexed
indefinitely. The 410 has to be reachable.

## Routine deploy

```bash
npm run build          # runs the route test, then vite build
aws s3 sync dist/ s3://<BUCKET> --delete
aws cloudfront create-invalidation --distribution-id <DIST_ID> --paths "/*"
```

`npm run build` fails if [`../scripts/check-spam-routes.mjs`](../scripts/check-spam-routes.mjs)
fails, so a broken spam rule cannot reach production.

Note the `--delete` flag: without it, files removed from the build linger in the
bucket and stay reachable.

## One-time: attach the CloudFront Function

Only needed once, and again whenever `cloudfront-viewer-request.js` changes.

1. **CloudFront → Functions → Create function**
   - Name: `peer-consulting-viewer-request`
   - Runtime: `cloudfront-js-2.0`
2. Paste the contents of `cloudfront-viewer-request.js` into **Development**.
3. **Publish** the function.
4. **Distributions → your distribution → Behaviors → Default (`*`) → Edit**
   - Function associations → **Viewer request** → CloudFront Functions →
     `peer-consulting-viewer-request`
   - Save.
5. Wait for the distribution to finish deploying, then invalidate `/*`.

### Verify after attaching

```bash
# spam must be 410 (both forms)
curl -sI https://peer-consulting.com/how-online-pokies-work/  | head -1   # 301 -> then 410
curl -sI https://peer-consulting.com/how-online-pokies-work   | head -1   # HTTP/2 410
curl -sI https://peer-consulting.com/blackjack-side-bet-odds  | head -1   # HTTP/2 410

# WordPress probes must be 410
curl -sI https://peer-consulting.com/wp-login.php | head -1               # HTTP/2 410

# real pages must still be 200
curl -sI https://peer-consulting.com/                                    | head -1
curl -sI https://peer-consulting.com/services/it-consulting-new-jersey   | head -1
curl -sI https://peer-consulting.com/itil-foundation                     | head -1

# legacy URLs must 301
curl -sI https://peer-consulting.com/careers/          | grep -iE "^HTTP|^location"
curl -sI https://peer-consulting.com/community-support | grep -iE "^HTTP|^location"
```

**If a real page returns 410, detach the function immediately** (Behaviors →
Edit → remove the association) and report which URL. That is the one failure
mode worth watching for.

### Caveat to check on first deploy

If the distribution uses a **Custom Error Response** mapping `403/404 →
/index.html` with response code `200` (the usual SPA setup), confirm it does not
also intercept the function's 410. It should not — a CloudFront Function that
returns a response short-circuits before the origin, and custom error responses
apply to origin errors. Verify with the `curl` commands above rather than
assuming.

## Still missing: security headers

The old `vercel.json` set `X-Frame-Options`, `X-Content-Type-Options`,
`Referrer-Policy`, and `Permissions-Policy`. That file was deleted because the
site is not on Vercel — and those headers are **not currently being sent**.

To restore them: **CloudFront → Policies → Response headers → Create**, add the
four headers, then attach the policy to the default behavior. This is a
security hardening item, not an SEO one, so it is tracked separately.

## Editing the spam rules

`cloudfront-viewer-request.js` matches on gambling keywords rather than an
explicit URL list, because only ~28 of the spam URLs are enumerable from search
results while the real count is far higher.

The keyword list deliberately avoids short substrings that could appear in a
legitimate slug — bare `bet` would match `better`, bare `spin` would match
`inspiring`. Before adding a keyword, add it to the test's `LEGIT` list in a
plausible future URL and confirm the test still passes.

After **any** edit:

```bash
npm run check:routes
```

then re-publish the function and re-attach it to the behavior (step 3–4 above).
Publishing alone does not update the live association.
