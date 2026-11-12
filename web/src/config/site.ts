/**
 * Business facts used across the site.
 *
 * "documented" = taken from the current live site (cleansolutionsva.com), still
 * awaiting the client's final sign-off. Anything not documented is NOT on the
 * site (no ratings, licenses, insurance, hours, street address, testimonials).
 * Full list: PENDING_CLIENT_APPROVAL.md
 */
export const business = {
  name: 'Clean Solutions CO. LLC',
  shortName: 'Clean Solutions',
  phone: {
    display: '(757) 305-8237',
    href: 'tel:+17573058237',
    e164: '+17573058237',
    sms: 'sms:+17573058237',
  },
  email: 'info@cleansolutionsva.com',
  // Address shown on the verified Google Business Profile (Notion SEO diagnosis, Oct 2026). NAP must match GBP exactly.
  address: {
    street: '4535 Bainbridge Blvd',
    locality: 'Chesapeake',
    region: 'VA',
    postalCode: '23320',
    country: 'US',
  },
  /** Documented on the current site ("5 years of experience"). Pending sign-off. */
  yearsInBusiness: 5,
  // Cities named in the current site's hero. Real coverage pending confirmation.
  serviceAreas: ['Chesapeake', 'Virginia Beach', 'Norfolk', 'Portsmouth', 'Suffolk'],
  /** Documented on the current site footer. Pending sign-off. */
  hours: [
    { days: 'Mon – Fri', open: '08:00', close: '17:00', label: '8:00 AM – 5:00 PM', schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    { days: 'Saturday', open: '08:00', close: '15:00', label: '8:00 AM – 3:00 PM', schemaDays: ['Saturday'] },
    { days: 'Sunday', open: '', close: '', label: 'Closed', schemaDays: [] as string[] },
  ],
  /** Current site says "Licensed & Insured Team" and "Insured & Bonded". Pending proof (license #, insurer). */
  credentials: 'Licensed, insured & bonded',
  // Add Google Business Profile (https://maps.google.com/?cid=...), Facebook, Yelp, BBB once confirmed.
  sameAs: [] as string[],
} as const;

export const flags = {
  allowIndexing: import.meta.env.PUBLIC_ALLOW_INDEXING === 'true',
  ga4Id: (import.meta.env.PUBLIC_GA4_ID ?? '').trim(),
  /**
   * Google reCAPTCHA v2 ("I'm not a robot" checkbox) shown inside the quote form.
   * Production: PUBLIC_RECAPTCHA_SITE_KEY (Netlify env). Without a key:
   *  - local/demo builds use Google's public TEST key (shows a "testing only" notice),
   *  - live builds fall back to FormSubmit's own captcha page after Submit.
   */
  recaptchaSiteKey:
    (import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY ?? '').trim() ||
    (import.meta.env.PUBLIC_FORM_MODE === 'live' ? '' : '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'),
  /** "live" posts to FormSubmit. "demo" only validates and never sends. */
  formMode: (import.meta.env.PUBLIC_FORM_MODE === 'live' ? 'live' : 'demo') as 'live' | 'demo',
};

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Service Areas', href: '/service-areas/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
