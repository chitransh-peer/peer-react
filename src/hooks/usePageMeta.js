import { useEffect } from 'react';

/**
 * usePageMeta — Updates document.title and <meta name="description"> on every
 * route change. No react-helmet or any extra library — pure DOM writes.
 *
 * @param {string} title       - Full page title string
 * @param {string} description - Meta description for SEO
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      // Find existing <meta name="description"> or create one
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
}
