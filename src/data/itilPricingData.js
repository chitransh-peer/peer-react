/**
 * Default ITIL programme pricing.
 * Keys match the `priceId` field on each entry in COURSES (ItilCertification.jsx).
 * The admin panel stores overrides in localStorage on top of these defaults.
 *
 * spPrice = Self-Paced / Classroom price  (currently hidden from the ITIL page)
 * olPrice = Online Live price             (the visible price on the ITIL page)
 */
export const DEFAULT_ITIL_PRICES = {
  // Foundation & AI Governance
  'itil-foundation-v5':                { spPrice: 550, olPrice: 750 },
  'itil-foundation-4':                 { spPrice: 550, olPrice: 750 },
  'itil-foundation-bridge-v5':         { spPrice: 240, olPrice: 375 },
  'itil-ai-governance':                { spPrice: 550, olPrice: 750 },

  // Specialist
  'itil-specialist-product-v5':        { spPrice: 750, olPrice: 950 },
  'itil-specialist-service-v5':        { spPrice: 750, olPrice: 950 },
  'itil-specialist-experience-v5':     { spPrice: 750, olPrice: 950 },
  'itil-specialist-strategy-v5':       { spPrice: 750, olPrice: 950 },
  'itil-specialist-transformation-v5': { spPrice: 750, olPrice: 950 },

  // Practice Manager
  'itil-specialist-msf':               { spPrice: 750, olPrice: 950 },
  'itil-practice-pic':                 { spPrice: 750, olPrice: 950 },
  'itil-practice-cai':                 { spPrice: 750, olPrice: 950 },
};

/** Human-readable display names for each course (used in the admin dashboard). */
export const ITIL_COURSE_LABELS = {
  'itil-foundation-v5':                'ITIL® Foundation (Version 5)',
  'itil-foundation-4':                 'ITIL® 4 Foundation',
  'itil-foundation-bridge-v5':         'ITIL® Foundation Bridge (V5)',
  'itil-ai-governance':                'ITIL® AI Governance',
  'itil-specialist-product-v5':        'ITIL® Specialist — Product',
  'itil-specialist-service-v5':        'ITIL® Specialist — Service',
  'itil-specialist-experience-v5':     'ITIL® Specialist — Experience',
  'itil-specialist-strategy-v5':       'ITIL® Specialist — Strategy',
  'itil-specialist-transformation-v5': 'ITIL® Specialist — Transformation',
  'itil-specialist-msf':               'Monitor, Support & Fulfill',
  'itil-practice-pic':                 'Plan, Implement & Control',
  'itil-practice-cai':                 'Collaborate, Assure & Improve',
};

/** Category groupings for the admin dashboard. */
export const ITIL_PRICE_GROUPS = [
  {
    key: 'foundation',
    label: 'Foundation & AI Governance',
    color: '#0f2e59',
    ids: [
      'itil-foundation-v5',
      'itil-foundation-4',
      'itil-foundation-bridge-v5',
      'itil-ai-governance',
    ],
  },
  {
    key: 'specialist',
    label: 'ITIL® Specialist',
    color: '#2563eb',
    ids: [
      'itil-specialist-product-v5',
      'itil-specialist-service-v5',
      'itil-specialist-experience-v5',
      'itil-specialist-strategy-v5',
      'itil-specialist-transformation-v5',
    ],
  },
  {
    key: 'practice',
    label: 'ITIL® Practice Manager',
    color: '#0ea5e9',
    ids: [
      'itil-specialist-msf',
      'itil-practice-pic',
      'itil-practice-cai',
    ],
  },
];
