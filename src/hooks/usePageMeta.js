import { useEffect } from 'react';

/**
 * usePageMeta — Updates document.title, meta description, Open Graph tags,
 * Twitter Card tags, og:url, and the canonical <link> on every route change.
 * No react-helmet or any external library — pure DOM writes.
 *
 * @param {string} title       - Full page title string
 * @param {string} description - Meta description for SEO
 */

/** Helper: find or create a <meta> element by attribute selector */
function upsertMeta(selector, attrName, attrValue, content) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function usePageMeta(title, description) {
  useEffect(() => {
    // ── Title ──────────────────────────────────────────────────────────────
    if (title) {
      document.title = title;
    }

    // ── Meta description ───────────────────────────────────────────────────
    if (description) {
      upsertMeta('meta[name="description"]', 'name', 'description', description);
    }

    // ── Open Graph ─────────────────────────────────────────────────────────
    if (title) {
      upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    }
    if (description) {
      upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    }
    // og:url — always update to current full URL
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', window.location.href);

    // ── Twitter Card ────────────────────────────────────────────────────────
    if (title) {
      upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    }
    if (description) {
      upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    // ── Canonical link ──────────────────────────────────────────────────────
    // The canonical should be the clean URL without query strings / hash
    const canonicalHref = window.location.origin + window.location.pathname;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);
  }, [title, description]);
}
