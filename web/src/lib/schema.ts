/**
 * JSON-LD builders. Only facts that are visible on the page are emitted.
 * Deliberately omitted until validated: aggregateRating,
 * review, priceRange, hasCredential, sameAs (no profile URLs yet).
 */
import { business } from '../config/site';
import type { Faq, Service } from '../data/services';

type Json = Record<string, unknown>;

export const orgId = (site: URL) => new URL('/#business', site).href;
const websiteId = (site: URL) => new URL('/#website', site).href;

function postalAddress() {
  const a = business.address;
  return {
    '@type': 'PostalAddress',
    streetAddress: a.street,
    addressLocality: a.locality,
    addressRegion: a.region,
    postalCode: a.postalCode,
    addressCountry: a.country,
  };
}

export function localBusiness(site: URL): Json {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': orgId(site),
    name: business.name,
    alternateName: business.shortName,
    url: new URL('/', site).href,
    logo: new URL('/logo-512.png', site).href,
    image: new URL('/og-default.jpg', site).href,
    telephone: business.phone.e164,
    email: business.email,
    address: postalAddress(),
    areaServed: business.serviceAreas.map((city) => ({
      '@type': 'City',
      name: `${city}, VA`,
    })),
    openingHoursSpecification: business.hours
      .filter((h) => h.open)
      .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.schemaDays, opens: h.open, closes: h.close })),
    ...(business.sameAs.length ? { sameAs: business.sameAs } : {}),
  };
}

export function website(site: URL): Json {
  return {
    '@type': 'WebSite',
    '@id': websiteId(site),
    url: new URL('/', site).href,
    name: business.shortName,
    publisher: { '@id': orgId(site) },
    inLanguage: 'en-US',
  };
}

export function serviceSchema(service: Service, site: URL, pageUrl: URL, cities: readonly string[] = business.serviceAreas): Json {
  return {
    '@type': 'Service',
    '@id': `${pageUrl.href}#service`,
    name: service.name,
    serviceType: service.name,
    url: pageUrl.href,
    description: service.description,
    provider: { '@id': orgId(site) },
    areaServed: cities.map((city) => ({ '@type': 'City', name: `${city}, VA` })),
  };
}

export interface Crumb {
  name: string;
  href: string;
}

export function breadcrumbs(items: Crumb[], site: URL): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.href, site).href,
    })),
  };
}

/**
 * FAQPage markup is valid but Google limits FAQ rich results to authoritative
 * government/health sites (Aug 2023). We still emit it: it accurately describes
 * visible content and other consumers (Bing, AI search) can use it.
 */
export function faqPage(faqs: Faq[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function graph(nodes: Json[]): Json {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
