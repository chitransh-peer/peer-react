/**
 * courseSchema.js — schema.org Course markup for the training pages.
 *
 * These pages describe real, instructor-led certification courses, which makes
 * them eligible for Google's course rich results. Nothing here was being
 * declared before: index.html carried the only JSON-LD on the site.
 *
 * Keyed by pathname so CourseSchemaManager in App.jsx can attach the right
 * block on navigation without editing fourteen page components.
 *
 * `name` is the course title alone (not the SEO <title>) — Google rejects
 * Course entries whose name reads as a page title with a brand suffix.
 */

const PROVIDER = {
  '@type': 'Organization',
  name: 'Peer Consulting Resources',
  url: 'https://peer-consulting.com',
  sameAs: 'https://www.linkedin.com/company/peer-consulting',
};

/** Delivery modes offered for every course in the catalog. */
const INSTANCE = [
  {
    '@type': 'CourseInstance',
    courseMode: 'Online',
    courseWorkload: 'PT16H',
  },
  {
    '@type': 'CourseInstance',
    courseMode: 'Onsite',
    courseWorkload: 'PT16H',
    location: {
      '@type': 'Place',
      name: 'Peer Consulting Resources',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '20 Jefferson Plaza',
        addressLocality: 'Princeton',
        addressRegion: 'NJ',
        postalCode: '08540',
        addressCountry: 'US',
      },
    },
  },
];

const COURSES = {
  '/itil-foundation': {
    name: 'ITIL® Foundation Certification Training',
    description:
      'Instructor-led ITIL® Foundation training covering the service value system, the four dimensions of service management, and the guiding principles, with exam preparation and voucher.',
  },
  '/itil-foundation-v5': {
    name: 'ITIL® Foundation v5 Certification Training',
    description:
      'ITIL® Foundation v5 training covering the updated service management framework, including AI governance practices, with accredited exam preparation.',
  },
  '/itil-foundation-4': {
    name: 'ITIL® 4 Foundation Certification Training',
    description:
      'ITIL® 4 Foundation training covering service value chain, practices, and guiding principles for IT service management, with accredited exam preparation.',
  },
  '/itil-foundation-bridge-v5': {
    name: 'ITIL® Foundation Bridge v5 Certification Training',
    description:
      'Bridge course for ITIL® 4 Foundation holders upgrading to v5, covering the delta content and the updated examination.',
  },
  '/itil-specialist-product-v5': {
    name: 'ITIL® Specialist: Create, Deliver and Support (Product) v5',
    description:
      'ITIL® Specialist module on designing, developing, and supporting digital products and services across the service value chain.',
  },
  '/itil-specialist-service-v5': {
    name: 'ITIL® Specialist: Drive Stakeholder Value (Service) v5',
    description:
      'ITIL® Specialist module on managing stakeholder relationships, service interactions, and customer journeys end to end.',
  },
  '/itil-specialist-experience-v5': {
    name: 'ITIL® Specialist: Experience Management v5',
    description:
      'ITIL® Specialist module on measuring, designing, and improving user and customer experience across digital services.',
  },
  '/itil-specialist-strategy-v5': {
    name: 'ITIL® Strategist: Direct, Plan and Improve (Strategy) v5',
    description:
      'ITIL® Strategist module on governance, strategic direction, continual improvement, and organizational change management.',
  },
  '/itil-specialist-transformation-v5': {
    name: 'ITIL® Specialist: Business Transformation v5',
    description:
      'ITIL® Specialist module on leading digital and organizational transformation programs using the ITIL® framework.',
  },
  '/itil-specialist-msf': {
    name: 'ITIL® 4 Specialist: Monitor, Support and Fulfil',
    description:
      'ITIL® 4 Specialist module covering the monitoring, service desk, incident, problem, and service request practices.',
  },
  '/itil-practice-pic': {
    name: 'ITIL® Practice Manager: Plan, Implement and Control',
    description:
      'ITIL® Practice Manager module covering change enablement, deployment, release, and service configuration management practices.',
  },
  '/itil-practice-cai': {
    name: 'ITIL® Practice Manager: Collaborate, Assure and Improve',
    description:
      'ITIL® Practice Manager module covering relationship, supplier, service level, continual improvement, and information security management practices.',
  },
  '/ai-certification': {
    name: 'AI for Business Professionals Certification Training',
    description:
      'Hands-on training program covering practical applications of artificial intelligence and machine learning for business professionals, with certification.',
  },
  '/ppm-agile-certification': {
    name: 'PPM & Agile Certification Training',
    description:
      'Project portfolio management and Agile certification training covering delivery frameworks, governance, and portfolio-level planning.',
  },
};

/** Build the full Course JSON-LD for a pathname, or null if it is not a course page. */
export function courseSchemaFor(pathname) {
  const course = COURSES[pathname];
  if (!course) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    url: `https://peer-consulting.com${pathname}`,
    provider: PROVIDER,
    hasCourseInstance: INSTANCE,
  };
}
