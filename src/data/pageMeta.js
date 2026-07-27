/**
 * pageMeta.js — SEO metadata for every route.
 * MetaManager in App.jsx reads this on every navigation and writes
 * document.title + <meta name="description"> without any external library.
 *
 * Brand suffix pattern: "<Page Topic> | Peer Consulting Resources"
 */
export const PAGE_META = {
  '/': {
    title: 'Peer Consulting Resources — IT Consulting & Training',
    description:
      'Peer Consulting Resources delivers expert IT consulting, ITIL® certification training, AI, and PPM/Agile programs to help organizations transform service management.',
  },
  '/about': {
    title: 'About Us | Peer Consulting Resources',
    description:
      'Learn about Peer Consulting Resources — our mission, values, and the story behind our industry-leading IT consulting and training services.',
  },
  '/team': {
    title: 'Our Team | Peer Consulting Resources',
    description:
      'Meet the certified consultants, trainers, and industry experts who power Peer Consulting Resources.',
  },
  '/services': {
    title: 'Our Solutions | Peer Consulting Resources',
    description:
      'Explore our full portfolio of IT consulting and training solutions — from ITIL® certification to AI & Machine Learning programs.',
  },
  '/blogs': {
    title: 'Blog | Peer Consulting Resources',
    description:
      'Insights, guides, and expert commentary on ITIL®, AI, Agile, and modern IT service management from the Peer Consulting team.',
  },
  '/careers': {
    title: 'Careers | Peer Consulting Resources',
    description:
      'Join the Peer Consulting Resources team. Explore open roles in IT consulting, training delivery, and operations.',
  },
  '/contact': {
    title: 'Contact Us | Peer Consulting Resources',
    description:
      'Get in touch with Peer Consulting Resources. Reach our team for training inquiries, consulting engagements, or general questions.',
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
    title: 'ITIL® Certifications | Peer Consulting Resources',
    description:
      'Explore the full ITIL® certification pathway — Foundation, Specialist, and Practice modules — delivered by accredited trainers at Peer Consulting Resources.',
  },
  '/itil-overview': {
    title: 'ITIL® Overview | Peer Consulting Resources',
    description:
      'Get a comprehensive overview of ITIL® — its history, framework structure, and how ITIL® certifications can advance your IT service management career.',
  },

  // ── ITIL® Foundation ─────────────────────────────────────────────────────
  '/itil-foundation': {
    title: 'ITIL® Foundation Certification | Peer Consulting Resources',
    description:
      'Earn your ITIL® Foundation certification with Peer Consulting Resources. Expert-led training covering core ITIL® concepts and best practices.',
  },
  '/itil-foundation-v5': {
    title: 'ITIL® Foundation Version 5 | Peer Consulting Resources',
    description:
      'Master the latest ITIL® Foundation Version 5 framework with accredited training from Peer Consulting Resources. Ideal for IT professionals seeking up-to-date certification.',
  },
  '/itil-foundation-4': {
    title: 'ITIL® 4 Foundation | Peer Consulting Resources',
    description:
      'Achieve ITIL® 4 Foundation certification and learn to apply the ITIL® 4 framework to modern IT service management challenges.',
  },
  '/itil-foundation-bridge-v5': {
    title: 'ITIL® Foundation Bridge (V5) | Peer Consulting Resources',
    description:
      'Upgrade your existing ITIL® Foundation credential to Version 5 with the ITIL® Foundation Bridge certification course at Peer Consulting Resources.',
  },

  // ── ITIL® Specialist (V5) ─────────────────────────────────────────────────
  '/itil-specialist-product-v5': {
    title: 'ITIL® Specialist — Product & Delivery (V5) | Peer Consulting Resources',
    description:
      'Advance your ITIL® journey with the Specialist: Product & Delivery (V5) module. Expert-led training from Peer Consulting Resources.',
  },
  '/itil-specialist-service-v5': {
    title: 'ITIL® Specialist — Service Design & Transition (V5) | Peer Consulting Resources',
    description:
      'Earn the ITIL® Specialist: Service Design & Transition (V5) certification with practical, accredited training from Peer Consulting Resources.',
  },
  '/itil-specialist-experience-v5': {
    title: 'ITIL® Specialist — Business Relationships & Experience (V5) | Peer Consulting Resources',
    description:
      'Master ITIL® Specialist: Business Relationships & Experience (V5) concepts through structured certification training at Peer Consulting Resources.',
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
      'Upskill in Artificial Intelligence and Machine Learning with accredited certification training from Peer Consulting Resources.',
  },

  // ── PPM & Agile ───────────────────────────────────────────────────────────
  '/ppm-agile-certification': {
    title: 'PPM & Agile Certification | Peer Consulting Resources',
    description:
      'Master Project Portfolio Management and Agile methodologies with certification courses from Peer Consulting Resources.',
  },

  // ── Sandbox (internal/dev) ────────────────────────────────────────────────
  '/sandbox': {
    title: 'Sandbox | Peer Consulting Resources',
    description: 'Internal component sandbox for Peer Consulting Resources development.',
  },
  '/training-info-request': {
    title: 'Request Training Info | Peer Consulting Resources',
    description:
      'Submit a training inquiry for ITIL®, AI & Machine Learning, or PPM & Agile programs. Our team responds within one business day with pricing, schedules, and enrollment details.',
  },
};

/** Fallback for any route not listed above */
export const DEFAULT_META = {
  title: 'Peer Consulting Resources — IT Consulting & Training',
  description:
    'Peer Consulting Resources delivers expert IT consulting, ITIL® certification training, AI, and PPM/Agile programs.',
};
