import type { APIRoute } from 'astro';
import { business } from '../config/site';
import { services, serviceHref, generalFaqs } from '../data/services';
import { areas, areaHref } from '../data/areas';
import { pendingPaths } from '../config/indexing.mjs';

/**
 * llms.txt (https://llmstxt.org), generated from the same data as the pages,
 * so it never says more than the site does.
 */
export const GET: APIRoute = ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const live = services.filter((s) => s.status === 'confirmed' && !pendingPaths.includes(serviceHref(s.slug)));

  const body = `# ${business.shortName}

> ${business.name} is a locally owned cleaning company based in ${business.address.locality}, Virginia, with ${business.yearsInBusiness} years of experience. It provides recurring house cleaning, deep cleaning, move-in/move-out cleaning, Airbnb turnover cleaning, post-construction cleaning and commercial/office cleaning in ${business.serviceAreas.join(', ')} (South Hampton Roads, VA).

- Phone: ${business.phone.display}
- Email: ${business.email}
- Based in: ${business.address.locality}, ${business.address.region}
- Free quotes: ${abs('/contact/')}
- Frequencies: weekly, bi-weekly, monthly or one-time (most customers choose bi-weekly)
- Supplies and equipment included; safe, eco-friendly products
- Satisfaction: report any issue within 24 hours and the company will make it right

## Services

${live.map((s) => `- [${s.name}](${abs(serviceHref(s.slug))}): ${s.answer}`).join('\n')}

## Service areas

${areas.map((a) => `- [${a.name}, VA](${abs(areaHref(a.slug))}): ${a.note} Neighborhoods: ${a.neighborhoods.join(', ')}.`).join('\n')}

## FAQ

${generalFaqs.map((f) => `- ${f.q} ${f.a}`).join('\n')}

## Company

- [About](${abs('/about/')})
- [Contact and quote](${abs('/contact/')})
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
