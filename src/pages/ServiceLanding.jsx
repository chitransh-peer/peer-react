import React, { useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { SERVICE_LANDING_BY_SLUG } from '../data/serviceLandings';
import usePageMeta from '../hooks/usePageMeta';
import useJsonLd, { breadcrumbSchema } from '../hooks/useJsonLd';
import { NAP, ADDRESS_LINE, POSTAL_ADDRESS } from '../data/nap';
import NotFound from './NotFound';

/**
 * ServiceLanding — renders one /services/:slug page from SERVICE_LANDINGS.
 *
 * One indexable URL per commercial theme, each with its own <h1>, meta, and
 * Service + FAQPage + BreadcrumbList schema. /services remains the hub.
 */
export default function ServiceLanding() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = SERVICE_LANDING_BY_SLUG[slug];

  usePageMeta(service?.title, service?.description, {
    robots: service ? undefined : 'noindex, follow',
  });

  const jsonLd = useMemo(() => {
    if (!service) return null;
    const url = `https://peer-consulting.com/services/${service.slug}`;
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.h1,
        description: service.description,
        url,
        serviceType: service.eyebrow,
        provider: {
          '@type': 'LocalBusiness',
          name: NAP.name,
          url: 'https://peer-consulting.com',
          telephone: NAP.phoneE164,
          address: POSTAL_ADDRESS,
        },
        areaServed: [
          { '@type': 'State', name: 'New Jersey' },
          { '@type': 'State', name: 'New York' },
          { '@type': 'State', name: 'Connecticut' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.h1} capabilities`,
          itemListElement: service.capabilities.map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name },
          })),
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: service.h1, path: `/services/${service.slug}` },
      ]),
    ];
  }, [service]);

  useJsonLd(jsonLd, 'service-landing-jsonld');

  if (!service) return <NotFound />;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#071B34] text-white relative overflow-hidden py-16 md:py-24 page-hero">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb — mirrors the BreadcrumbList schema above */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/50 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-icons-outlined text-[12px]">chevron_right</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="material-icons-outlined text-[12px]">chevron_right</span>
            <span className="text-white/70">{service.eyebrow}</span>
          </nav>

          <div className="w-14 h-14 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6 text-accent-blue">
            <span className="material-icons-outlined text-3xl">{service.icon}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">{service.h1}</h1>
          <p className="text-lg text-[#8ba3bd] leading-relaxed">{service.intro}</p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#4DA3FF] hover:bg-[#3b82f6] text-white shadow-[0_4px_15px_rgba(77,163,255,0.3)] py-3 px-8 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
            >
              Talk to our team
            </button>
            <a
              href={NAP.phoneHref}
              className="inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white hover:bg-white text-white hover:text-[#071B34] font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              {NAP.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Prose sections ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white dark:bg-background-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {service.sections.map((section) => (
            <div key={section.h2} className="mb-14 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-text dark:text-white mb-5 tracking-tight">
                {section.h2}
              </h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-5 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#0B2242]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-3">What this includes</h2>
          <div className="w-20 h-1 bg-accent-blue mb-12 rounded-full"></div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {service.capabilities.map((capability) => (
              <li key={capability} className="flex items-start text-slate-300">
                <span className="material-icons-outlined text-accent-blue text-lg mr-3 mt-0.5 shrink-0">
                  check_circle
                </span>
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ — backs the FAQPage schema ───────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#f0f4f8] dark:bg-surface-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-text dark:text-white mb-3">
            Frequently asked questions
          </h2>
          <div className="w-20 h-1 bg-accent-blue mb-12 rounded-full"></div>
          <dl className="space-y-8">
            {service.faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="text-lg font-bold text-primary-text dark:text-white mb-2">{faq.q}</dt>
                <dd className="text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Related + local NAP block ────────────────────────────────────── */}
      <section className="py-16 bg-[#071B34] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related services</h2>
          <div className="flex flex-wrap gap-3 mb-14">
            {service.related.map((rel) => (
              <Link
                key={rel.to}
                to={rel.to}
                className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 text-white/80 text-sm font-semibold hover:bg-white hover:text-[#071B34] hover:border-white transition-all duration-300"
              >
                {rel.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 pt-10">
            <p className="text-[#8ba3bd] leading-relaxed">
              <strong className="text-white">{NAP.name}</strong> — {ADDRESS_LINE} ·{' '}
              <a href={NAP.phoneHref} className="text-accent-blue hover:underline">
                {NAP.phone}
              </a>{' '}
              ·{' '}
              <a href={NAP.emailHref} className="text-accent-blue hover:underline">
                {NAP.email}
              </a>
              <br />
              Serving organizations across New Jersey, New York, and Connecticut.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
