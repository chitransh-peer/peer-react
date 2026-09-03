/**
 * pageMeta.js — SEO metadata for every route.
 * MetaManager in App.jsx reads this on every navigation and writes
 * document.title + <meta name="description"> without any external library.
 *
 * Brand suffix pattern: "<Page Topic> | Peer Consulting Resources"
 * Geo-enriched: key pages include "New Jersey / NJ / Princeton, NJ" naturally.
 */
import { SERVICE_LANDINGS } from './serviceLandings';

/**
 * Per-service landing page meta, derived from the same source that renders the
 * pages so the two can never drift apart. Spread into PAGE_META below.
 */
const SERVICE_LANDING_META = Object.fromEntries(
  SERVICE_LANDINGS.map((s) => [
    `/services/${s.slug}`,
    { title: s.title, description: s.description },
  ])
);

export const PAGE_META = {
  ...SERVICE_LANDING_META,
  '/': {
    title: 'IT Consulting & Training in New Jersey | Peer Consulting Resources',
    description:
      'Peer Consulting Resources — a Princeton, NJ-based IT consulting firm delivering ITIL® certification training, cloud transformation, software development, and IT staffing across New Jersey, New York, and Connecticut.',
  },
  '/about': {
    title: 'About Us | IT Consulting Firm in Princeton, NJ | Peer Consulting Resources',
    description:
      'Learn about Peer Consulting Resources, a women-owned IT consulting and training firm headquartered in Princeton, NJ. Over 15 years of delivering technology solutions to public and private sector clients across New Jersey and beyond.',
  },
  '/team': {
    title: 'Our Team | Peer Consulting Resources',
    description:
      'Meet the certified consultants, ITIL® trainers, and industry experts who power Peer Consulting Resources — serving clients in New Jersey, New York, and Connecticut.',
  },
  '/services': {
    title: 'IT Consulting & Technology Solutions in New Jersey | Peer Consulting Resources',
    description:
      'Explore our full portfolio of IT consulting and training services in New Jersey — ITIL® certification, cloud migration, ERP implementation, cybersecurity, data analytics, and IT staffing for NJ public and private sector organizations.',
  },
  '/blogs': {
    title: 'Blog | Peer Consulting Resources',
    description:
      'Insights, guides, and expert commentary on ITIL®, AI, Agile, and modern IT service management from the Peer Consulting team based in Princeton, NJ.',
  },
  '/careers': {
    title: 'Careers | Peer Consulting Resources — Princeton, NJ',
    description:
      'Join the Peer Consulting Resources team in Princeton, NJ. Explore open roles in IT consulting, ITIL® training delivery, and operations.',
  },
  '/contact': {
    title: 'Contact Us | IT Consulting in New Jersey | Peer Consulting Resources',
    description:
      'Get in touch with Peer Consulting Resources. Reach our Princeton, NJ team for IT consulting engagements, ITIL® training inquiries, and IT staffing needs across New Jersey, New York, and Connecticut.',
  },
  '/terms-of-use': {
    title: 'Terms of Use | Peer Consulting Resources',
    description:
      'Read the Terms of Use governing your access to and use of the Peer Consulting Resources website and services.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Peer Consulting Resources',
    description:
      'Learn how Peer Consulting Resources collects, uses, and protects your personal data in accordance with our Privacy Policy.',
  },

  // ── ITIL® Hub & Overview ──────────────────────────────────────────────────
  '/itil-certification': {
    title: 'ITIL® Certifications in New Jersey | Peer Consulting Resources',
    description:
      'Explore the full ITIL® certification pathway — Foundation, Specialist, and Practice modules — delivered by PeopleCert-accredited trainers in New Jersey. Flexible online and group training options available.',
  },
  '/itil-overview': {
    title: 'ITIL® Overview | ITIL Training NJ | Peer Consulting Resources',
    description:
      'Get a comprehensive overview of ITIL® — its history, framework structure, and how ITIL® certifications can advance your IT career. Expert training available in New Jersey and online.',
  },

  // ── ITIL® Foundation ─────────────────────────────────────────────────────
  '/itil-foundation': {
    title: 'ITIL® Foundation Certification | Training in NJ | Peer Consulting Resources',
    description:
      'Earn your ITIL® Foundation certification with Peer Consulting Resources. PeopleCert-accredited, expert-led training covering core ITIL® concepts — available in New Jersey and online.',
  },
  '/itil-foundation-v5': {
    title: 'ITIL® Foundation Version 5 | NJ Training | Peer Consulting Resources',
    description:
      'Master the latest ITIL® Foundation Version 5 framework with accredited training from Peer Consulting Resources. Ideal for IT professionals in New Jersey seeking up-to-date certification.',
  },
  '/itil-foundation-4': {
    title: 'ITIL® 4 Foundation | Peer Consulting Resources',
    description:
      'Achieve ITIL® 4 Foundation certification and learn to apply the ITIL® 4 framework to modern IT service management challenges. Accredited training available in NJ and online.',
  },
  '/itil-foundation-bridge-v5': {
    title: 'ITIL® Foundation Bridge (V5) | Peer Consulting Resources',
    description:
      'Upgrade your existing ITIL® Foundation credential to Version 5 with the ITIL® Foundation Bridge course at Peer Consulting Resources — available online and for NJ-based teams.',
  },

  // ── ITIL® Specialist (V5) ─────────────────────────────────────────────────
  '/itil-specialist-product-v5': {
    title: 'ITIL® Specialist — Product & Delivery (V5) | Peer Consulting Resources',
    description:
      'Advance your ITIL® journey with the Specialist: Product & Delivery (V5) module. Expert-led training from Peer Consulting Resources, available in New Jersey and online.',
  },
  '/itil-specialist-service-v5': {
    title: 'ITIL® Specialist — Service Design & Transition (V5) | Peer Consulting Resources',
    description:
      'Earn the ITIL® Specialist: Service Design & Transition (V5) certification with practical, accredited training from Peer Consulting Resources — serving NJ and national clients.',
  },
  '/itil-specialist-experience-v5': {
    title: 'ITIL® Specialist — Business Relationships & Experience (V5) | Peer Consulting Resources',
    description:
      'Master ITIL® Specialist: Business Relationships & Experience (V5) through structured certification training at Peer Consulting Resources.',
  },
  '/itil-specialist-strategy-v5': {
    title: 'ITIL® Specialist — Strategy, Risk & Assurance (V5) | Peer Consulting Resources',
    description:
      'Gain the ITIL® Specialist: Strategy, Risk & Assurance (V5) certification to drive governance and risk management excellence in IT service delivery.',
  },
  '/itil-specialist-transformation-v5': {
    title: 'ITIL® Specialist — Digital & IT Transformation (V5) | Peer Consulting Resources',
    description:
      'Lead digital transformation initiatives with the ITIL® Specialist: Digital & IT Transformation (V5) certification from Peer Consulting Resources.',
  },

  // ── ITIL® 4 Specialist: MSF ───────────────────────────────────────────────
  '/itil-specialist-msf': {
    title: 'ITIL® 4 Specialist: Monitor, Support & Fulfill | Peer Consulting Resources',
    description:
      'Develop expertise in service operations with the ITIL® 4 Specialist: Monitor, Support & Fulfill certification, delivered by Peer Consulting Resources.',
  },

  // ── ITIL® Practice Modules ────────────────────────────────────────────────
  '/itil-practice-pic': {
    title: 'ITIL® Practice: Plan, Implement & Control | Peer Consulting Resources',
    description:
      'Earn the ITIL® Practice: Plan, Implement & Control certificate and strengthen your IT governance and change management capabilities.',
  },
  '/itil-practice-cai': {
    title: 'ITIL® Practice: Collaborate, Assure & Improve | Peer Consulting Resources',
    description:
      'Advance with the ITIL® Practice: Collaborate, Assure & Improve certificate — focused on continual improvement, assurance, and stakeholder collaboration.',
  },

  // ── AI & Machine Learning ─────────────────────────────────────────────────
  '/ai-certification': {
    title: 'AI & Machine Learning Certification | Peer Consulting Resources',
    description:
      'Upskill in Artificial Intelligence and Machine Learning with accredited certification training from Peer Consulting Resources — available for NJ organizations and remote learners.',
  },

  // ── PPM & Agile ───────────────────────────────────────────────────────────
  '/ppm-agile-certification': {
    title: 'PPM & Agile Certification | Peer Consulting Resources',
    description:
      'Master Project Portfolio Management and Agile methodologies with certification courses from Peer Consulting Resources, serving New Jersey and national clients.',
  },

  // ── Sandbox (internal/dev) ────────────────────────────────────────────────
  '/sandbox': {
    title: 'Sandbox | Peer Consulting Resources',
    description: 'Internal component sandbox for Peer Consulting Resources development.',
  },
  '/training-info-request': {
    title: 'Request Training Info | ITIL & IT Training NJ | Peer Consulting Resources',
    description:
      'Submit a training inquiry for ITIL®, AI & Machine Learning, or PPM & Agile programs in New Jersey. Our team responds within one business day with pricing, schedules, and enrollment details.',
  },
};

/**
 * Routes with URL parameters, which therefore have no fixed key in PAGE_META.
 * MetaManager treats a path matching one of these as a real page (DEFAULT_META,
 * usually then overridden by the page itself) rather than as a 404.
 */
export const DYNAMIC_ROUTE_PATTERNS = [/^\/blog\/[^/]+$/];

/**
 * Meta for the catch-all 404 route.
 *
 * `noindex` matters here: the SPA rewrite in vercel.json serves index.html with
 * a 200 for every unknown URL, so without this every stale/spam URL still in
 * Google's index looks like a valid thin page (a soft 404) instead of one to drop.
 */
export const NOT_FOUND_META = {
  title: 'Page Not Found | Peer Consulting Resources',
  description:
    'The page you requested could not be found. Explore Peer Consulting Resources — IT consulting, ITIL® certification training, and IT staffing in Princeton, New Jersey.',
  robots: 'noindex, follow',
};

/** Fallback for any route not listed above */
export const DEFAULT_META = {
  title: 'IT Consulting & Training in New Jersey | Peer Consulting Resources',
  description:
    'Peer Consulting Resources — Princeton, NJ-based IT consulting firm delivering ITIL® training, cloud transformation, and IT staffing across New Jersey and the tri-state area.',
};

