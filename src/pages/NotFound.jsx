import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Catch-all 404 page.
 *
 * The `noindex` directive comes from NOT_FOUND_META in src/data/pageMeta.js,
 * applied by MetaManager. It is the only 404 signal a client-rendered SPA can
 * emit — the Vercel rewrite always responds 200 — so it does the work of
 * telling Google to drop stale URLs rather than index them as thin pages.
 */
export default function NotFound() {
  return (
    <section className="relative bg-[#071B34] overflow-hidden page-hero">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <p className="text-teal-400 font-semibold tracking-widest uppercase mb-4">Error 404</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          This page could not be found
        </h1>
        <p className="text-lg text-blue-100/80 mb-10">
          The link may be outdated or the page may have moved. Here is where most people are headed.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-7 py-3 rounded-lg bg-teal-400 text-[#071B34] font-semibold hover:bg-teal-300 transition-colors"
          >
            Go to homepage
          </Link>
          <Link
            to="/services"
            className="px-7 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Our services
          </Link>
          <Link
            to="/itil-certification"
            className="px-7 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            ITIL® certification
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
