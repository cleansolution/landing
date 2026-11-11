/**
 * City pages at /service-areas/<slug>/. Cities come from the current site's hero.
 * Each page has its own intro, local context and FAQ (anti-doorway rule).
 * Real coverage per city pending client confirmation.
 */
import type { Faq } from './services';

export interface Area {
  slug: string;
  name: string;
  /** One line for hubs and llms.txt. */
  note: string;
  title: string;
  description: string;
  answer: string;
  intro: string[];
  neighborhoods: string[];
  /** Service slugs most requested / most relevant in this city, in order. */
  focus: string[];
  localTips: { title: string; text: string }[];
  faqs: Faq[];
  isBase?: boolean;
}

export const areas: Area[] = [
  {
    slug: 'chesapeake',
    name: 'Chesapeake',
    isBase: true,
    note: 'Our home base. House cleaning, deep cleaning, move-out and commercial cleaning across the city.',
    title: 'Cleaning Services in Chesapeake, VA | Clean Solutions',
    description:
      'Chesapeake-based house cleaning, deep cleaning, move in/out and office cleaning. Serving Great Bridge, Greenbrier, Western Branch, Deep Creek and more. Free quote.',
    answer:
      'Clean Solutions is a cleaning company based in Chesapeake, Virginia. We clean homes, rentals, new construction and offices across Chesapeake, from Great Bridge and Greenbrier to Western Branch and Deep Creek.',
    intro: [
      'Chesapeake is where we started and where most of our customers live. Because our team is local, scheduling is easier and we know the city, from newer subdivisions to established neighborhoods.',
      'Chesapeake has many single-family homes with large kitchens and multiple bathrooms, plus a steady flow of military and relocation moves. That is why house cleaning, deep cleaning and move-out cleaning are our most requested services here.',
    ],
    neighborhoods: ['Great Bridge', 'Greenbrier', 'Western Branch', 'Deep Creek', 'Hickory', 'Grassfield', 'Butts Station', 'Indian River'],
    focus: ['house-cleaning', 'deep-cleaning', 'move-in-move-out-cleaning', 'commercial-cleaning', 'post-construction-cleaning'],
    localTips: [
      { title: 'Moving with a PCS order?', text: 'If you are leaving a rental near the bases, book your move-out cleaning as soon as you have the final walkthrough date. Dates near the end of the month fill first.' },
      { title: 'Pollen season', text: 'Spring pollen settles on sills, fans and floors. A deep cleaning in April or May resets the house before summer.' },
    ],
    faqs: [
      { q: 'Are you a local Chesapeake company?', a: 'Yes. Clean Solutions is based in Chesapeake, VA, and Chesapeake is our main service area.' },
      { q: 'Which Chesapeake neighborhoods do you cover?', a: 'We serve homes and businesses across the city, including Great Bridge, Greenbrier, Western Branch, Deep Creek, Hickory and Grassfield. Call us to confirm your address.' },
    ],
  },
  {
    slug: 'virginia-beach',
    name: 'Virginia Beach',
    note: 'House cleaning plus Airbnb and vacation rental turnovers near the Oceanfront.',
    title: 'House & Airbnb Cleaning in Virginia Beach, VA | Clean Solutions',
    description:
      'House cleaning, deep cleaning and Airbnb turnover cleaning in Virginia Beach: Kempsville, Princess Anne, Red Mill, Great Neck and the Oceanfront. Free quote.',
    answer:
      'Clean Solutions serves Virginia Beach with recurring house cleaning, deep cleaning, move-out cleaning and turnover cleaning for Airbnb and vacation rentals near the Oceanfront and Sandbridge.',
    intro: [
      'Virginia Beach combines busy family neighborhoods with one of the largest short-term rental markets in Virginia. We work with both: homeowners who want a reliable bi-weekly cleaning, and hosts who need consistent turnovers between guests.',
      'Sand gets everywhere at the beach. Our turnover and deep cleaning checklists put extra attention on floors, entryways, showers and outdoor-facing doors.',
    ],
    neighborhoods: ['Kempsville', 'Princess Anne', 'Red Mill', 'Great Neck', 'Oceanfront', 'Sandbridge', 'Lynnhaven', 'Salem'],
    focus: ['airbnb-cleaning', 'house-cleaning', 'deep-cleaning', 'move-in-move-out-cleaning'],
    localTips: [
      { title: 'Summer turnovers', text: 'From Memorial Day to Labor Day, Saturday turnovers book quickly. Hosts who share their calendar early get first pick of cleaning slots.' },
      { title: 'Sand and humidity', text: 'Coastal humidity and sand wear down floors and grout. A deep cleaning after the rental season keeps the property ready for next year.' },
    ],
    faqs: [
      { q: 'Do you clean vacation rentals at the Oceanfront?', a: 'Yes. We provide turnover cleaning for Airbnb and vacation rentals in Virginia Beach, depending on availability. Share your turnover window when requesting a quote.' },
      { q: 'Do you offer regular house cleaning in Virginia Beach?', a: 'Yes. Weekly, bi-weekly, monthly and one-time house cleaning are available in Virginia Beach.' },
    ],
  },
  {
    slug: 'norfolk',
    name: 'Norfolk',
    note: 'Apartments, historic homes and offices, from Ghent to Ocean View.',
    title: 'House & Office Cleaning in Norfolk, VA | Clean Solutions',
    description:
      'Norfolk, VA cleaning for apartments, historic homes and offices in Ghent, Larchmont, Colonial Place, Ocean View and Downtown. Move-out and deep cleaning.',
    answer:
      'Clean Solutions cleans homes, apartments and offices in Norfolk, Virginia, including Ghent, Larchmont, Colonial Place, Ocean View and Downtown, with house cleaning, move-out cleaning and commercial cleaning.',
    intro: [
      'Norfolk has a mix of historic homes, apartments and condos, and downtown offices. Older homes have more trim, radiators and details that collect dust, so we plan extra time for them.',
      'With many renters, students and military families, move-in and move-out cleanings are common in Norfolk. Businesses downtown book routine office cleaning.',
    ],
    neighborhoods: ['Ghent', 'Larchmont', 'Colonial Place', 'Ocean View', 'Downtown', 'Park Place', 'Wards Corner'],
    focus: ['move-in-move-out-cleaning', 'house-cleaning', 'commercial-cleaning', 'deep-cleaning'],
    localTips: [
      { title: 'Apartment move-outs', text: 'Many Norfolk leases end on the last day of the month. Book your move-out cleaning a week or two before to secure a date.' },
      { title: 'Historic homes', text: 'Older homes have detailed trim, original floors and radiators. Tell us about them in your quote request so we bring the right tools.' },
    ],
    faqs: [
      { q: 'Do you clean apartments in Norfolk?', a: 'Yes. We clean apartments, condos and houses in Norfolk, including move-in and move-out cleanings.' },
      { q: 'Do you offer office cleaning in Downtown Norfolk?', a: 'Yes. We provide routine office and commercial cleaning in Norfolk on a schedule that fits your business.' },
    ],
  },
  {
    slug: 'portsmouth',
    name: 'Portsmouth',
    note: 'House cleaning, move-out and post-renovation cleaning from Olde Towne to Churchland.',
    title: 'Cleaning Services in Portsmouth, VA | Clean Solutions',
    description:
      'House, deep, move-out and post-renovation cleaning in Portsmouth, VA: Olde Towne, Churchland, Westhaven and Cradock. Free quote from a local team.',
    answer:
      'Clean Solutions serves Portsmouth, Virginia, from neighboring Chesapeake, with house cleaning, deep cleaning, move-out cleaning and post-renovation cleaning in Olde Towne, Churchland, Westhaven and nearby areas.',
    intro: [
      'Portsmouth is right next to our Chesapeake base, so scheduling is simple. Many homes here are older and being renovated, which is why post-renovation and deep cleanings are frequent requests.',
      'We also help landlords and families with move-out cleanings between leases.',
    ],
    neighborhoods: ['Olde Towne', 'Churchland', 'Westhaven', 'Cradock', 'Port Norfolk', 'Park View'],
    focus: ['deep-cleaning', 'post-construction-cleaning', 'move-in-move-out-cleaning', 'house-cleaning'],
    localTips: [
      { title: 'After a remodel', text: 'Renovation dust from older plaster and drywall travels through the whole home. Schedule a post-construction cleaning before moving furniture back in.' },
      { title: 'Rental turnovers', text: 'Landlords can share access instructions and we will send a note when the unit is ready.' },
    ],
    faqs: [
      { q: 'Do you serve all of Portsmouth?', a: 'We serve homes and businesses across Portsmouth, including Olde Towne, Churchland and Westhaven. Call to confirm your address.' },
      { q: 'Do you clean after renovations in Portsmouth?', a: 'Yes. Our post-construction cleaning removes dust and debris after remodels and new builds.' },
    ],
  },
  {
    slug: 'suffolk',
    name: 'Suffolk',
    note: 'Larger homes and new construction in North Suffolk and Harbour View.',
    title: 'House & New-Build Cleaning in Suffolk, VA | Clean Solutions',
    description:
      'House cleaning, deep cleaning and new-construction cleaning in Suffolk, VA: Harbour View, North Suffolk, Downtown and Driver. Free quote from a Chesapeake team.',
    answer:
      'Clean Solutions serves Suffolk, Virginia, with house cleaning, deep cleaning and post-construction cleaning for new homes, focused on North Suffolk, Harbour View, Downtown Suffolk and Driver.',
    intro: [
      'Suffolk is one of the fastest-growing cities in Hampton Roads, with many new subdivisions and larger homes. New construction leaves fine dust behind, and larger homes take more time to keep clean.',
      'We help new homeowners with a post-construction cleaning before move-in and then keep the home on a recurring schedule.',
    ],
    neighborhoods: ['Harbour View', 'North Suffolk', 'Downtown Suffolk', 'Driver', 'Burbage Grant', 'Nansemond'],
    focus: ['post-construction-cleaning', 'house-cleaning', 'deep-cleaning', 'move-in-move-out-cleaning'],
    localTips: [
      { title: 'New construction homes', text: 'Builders hand over homes "broom clean", not move-in clean. A post-construction cleaning removes the dust left in vents, cabinets and window tracks.' },
      { title: 'Larger homes', text: 'For homes with three or more bathrooms, a bi-weekly schedule keeps the time and cost per visit lower than occasional deep cleanings.' },
    ],
    faqs: [
      { q: 'Do you clean new construction homes in Suffolk?', a: 'Yes. We clean new homes before move-in, removing construction dust and residue.' },
      { q: 'Which parts of Suffolk do you serve?', a: 'Mainly North Suffolk, Harbour View, Downtown and Driver. Call us to confirm coverage at your address.' },
    ],
  },
];

export const areaHref = (slug: string) => `/service-areas/${slug}/`;
export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
