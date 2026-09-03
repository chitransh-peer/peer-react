import { useEffect } from 'react';

/**
 * useJsonLd — injects a <script type="application/ld+json"> block for the
 * lifetime of the component, then removes it on unmount.
 *
 * index.html carries the site-wide LocalBusiness block. This hook is for
 * page-specific structured data (Service, Course, FAQPage, BreadcrumbList),
 * which is what makes a page eligible for Google rich results.
 *
 * @param {object|object[]|null} data - One schema.org object, or an array of them.
 * @param {string} id                 - Stable DOM id so a re-render replaces
 *                                      rather than duplicates the block.
 */
export default function useJsonLd(data, id) {
  useEffect(() => {
    if (!data) return undefined;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(data);

    // Replace any block left behind by a previous render of the same page.
    document.getElementById(id)?.remove();
    document.head.appendChild(script);

    return () => script.remove();
  }, [data, id]);
}

/** Breadcrumb trail helper. `crumbs` is [{ name, path }] ending at the current page. */
export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `https://peer-consulting.com${crumb.path}`,
    })),
  };
}
