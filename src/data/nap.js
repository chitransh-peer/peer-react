/**
 * nap.js — the single source of truth for Name, Address, Phone.
 *
 * Local search ranking depends on the NAP being byte-identical everywhere it
 * appears: on the site, in the JSON-LD, on the Google Business Profile, and in
 * every third-party directory citation. The site previously rendered the phone
 * number in four different formats across four components, which weakens that
 * matching. Import from here rather than typing a number into a component.
 */

export const NAP = {
  name: 'Peer Consulting Resources',
  legalName: 'Peer Consulting Resources, Inc.',

  street: '20 Jefferson Plaza',
  city: 'Princeton',
  state: 'NJ',
  zip: '08540',
  country: 'US',

  /** Canonical display format. Must match the Google Business Profile exactly. */
  phone: '(732) 444-4645',
  /** E.164, for tel: hrefs and schema.org telephone. */
  phoneHref: 'tel:+17324444645',
  phoneE164: '+17324444645',

  email: 'contact@peer-consulting.com',
  emailHref: 'mailto:contact@peer-consulting.com',
};

/** "20 Jefferson Plaza, Princeton, NJ 08540" */
export const ADDRESS_LINE = `${NAP.street}, ${NAP.city}, ${NAP.state} ${NAP.zip}`;

/** schema.org PostalAddress built from the same values. */
export const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: NAP.street,
  addressLocality: NAP.city,
  addressRegion: NAP.state,
  postalCode: NAP.zip,
  addressCountry: NAP.country,
};
