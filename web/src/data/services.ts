/**
 * Service content. One entry = one page at /services/<slug>/.
 * Source: current live site (service list, FAQ answers) + standard industry scope.
 * Checklists ("includes") must be confirmed by the client — see PENDING_CLIENT_APPROVAL.md.
 */
export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  category: 'Residential' | 'Commercial';
  icon: string;
  /** File in src/assets/img (current site photo; swap when the client sends new ones). */
  image: string;
  imageAlt: string;
  /** Card text (≤ 140 chars). */
  short: string;
  title: string;
  description: string;
  h1: string;
  /** 1–2 sentence direct answer shown at the top (quotable by AI search). */
  answer: string;
  intro: string[];
  idealFor: string[];
  includes: { area: string; items: string[] }[];
  priceFactors: string[];
  faqs: Faq[];
  status: 'confirmed' | 'pending';
}

export const services: Service[] = [
  {
    slug: 'house-cleaning',
    image: 'cms-slider-img5-20260220225930.jpg',
    imageAlt: 'Cleaner wiping a bathroom counter with yellow gloves',
    name: 'House Cleaning',
    category: 'Residential',
    icon: 'home',
    short: 'Recurring or one-time house cleaning for kitchens, bathrooms, bedrooms and living areas, following a clear checklist.',
    title: 'House Cleaning in Chesapeake, VA | Clean Solutions',
    description:
      'Weekly, bi-weekly or monthly house cleaning in Chesapeake and Hampton Roads. Supplies included, checklist-based cleaning. Call (757) 305-8237 for a free quote.',
    h1: 'House Cleaning Services in Chesapeake, VA',
    answer:
      'Clean Solutions provides recurring and one-time house cleaning in Chesapeake and nearby Hampton Roads cities. Our cleaners bring their own supplies and follow the same checklist every visit, weekly, bi-weekly or monthly.',
    intro: [
      'A clean home should not take your whole weekend. Our standard house cleaning keeps kitchens, bathrooms, bedrooms and living areas consistently clean, so you come home to a space that feels finished instead of another chore list.',
      'Most families choose a bi-weekly visit, but you can book weekly, monthly or a single cleaning before guests arrive. If you are looking for a maid service or reliable house cleaners in Chesapeake, this is the service to start with.',
    ],
    idealFor: ['Busy families and working professionals', 'Homes that need regular upkeep', 'Pet owners who fight hair and dust', 'Anyone preparing for guests or a gathering'],
    includes: [
      { area: 'Kitchen', items: ['Countertops and backsplash wiped', 'Exterior of appliances and cabinets', 'Sink cleaned and polished', 'Floors vacuumed and mopped'] },
      { area: 'Bathrooms', items: ['Toilet, tub and shower cleaned', 'Mirrors and fixtures shined', 'Vanity and sink sanitized', 'Floors mopped'] },
      { area: 'Bedrooms & living areas', items: ['Dusting of reachable surfaces', 'Beds made (linens changed on request)', 'Carpets vacuumed, hard floors mopped', 'Trash emptied'] },
    ],
    priceFactors: ['Size of the home (bedrooms and bathrooms)', 'How often you book (recurring visits cost less per visit)', 'Current condition of the home', 'Pets and any add-ons you request'],
    faqs: [
      { q: 'Do I need to provide cleaning supplies?', a: 'No. We bring all the supplies and equipment. If you prefer specific products, leave them on the kitchen counter with a note and our team will use them.' },
      { q: 'How often should I schedule house cleaning?', a: 'It depends on your household. We offer weekly, bi-weekly, monthly and one-time cleanings. Most customers who want a consistently clean home choose bi-weekly.' },
      { q: 'What if I am not satisfied with the cleaning?', a: 'Let us know within 24 hours by phone or email and we will make it right.' },
      { q: 'Can I reschedule a visit?', a: 'Yes. Call or email us and we will move your appointment. We ask for 24 hours of notice for any change.' },
    ],
    status: 'confirmed',
  },
  {
    slug: 'deep-cleaning',
    image: 'slider-img4.jpg',
    imageAlt: 'Deep cleaning a toilet with a sponge',
    name: 'Deep Cleaning',
    category: 'Residential',
    icon: 'spray',
    short: 'Top-to-bottom cleaning that reaches baseboards, buildup and the corners regular cleaning skips.',
    title: 'Deep Cleaning Services in Chesapeake, VA | Clean Solutions',
    description:
      'Deep house cleaning in Chesapeake and Hampton Roads: baseboards, buildup and hard-to-reach areas. Ideal for a first visit or seasonal reset. Free quote.',
    h1: 'Deep Cleaning Services in Chesapeake, VA',
    answer:
      'A deep cleaning is a detailed, top-to-bottom cleaning that covers what a regular visit does not: baseboards, door frames, built-up grime in kitchens and bathrooms, and hard-to-reach areas. It is the recommended first visit before starting recurring service.',
    intro: [
      'When a home has gone a while without a professional cleaning, a standard visit only scratches the surface. Our deep cleaning resets the whole house so it is easier to keep clean afterward.',
      'Customers book it for spring cleaning, before the holidays, after a long illness or renovation, or as the first visit before switching to bi-weekly house cleaning.',
    ],
    idealFor: ['First-time customers before recurring service', 'Seasonal or spring cleaning', 'Homes before a holiday, event or sale', 'Kitchens and bathrooms with heavy buildup'],
    includes: [
      { area: 'Everything in house cleaning, plus', items: ['Baseboards, door frames and doors wiped', 'Light switches and handles sanitized', 'Window sills and interior window tracks', 'Ceiling fans and vents dusted'] },
      { area: 'Kitchen detail', items: ['Degreasing of stovetop and backsplash', 'Cabinet fronts hand-wiped', 'Microwave inside and out', 'Behind and under movable items'] },
      { area: 'Bathroom detail', items: ['Soap scum and hard-water buildup', 'Grout lines scrubbed', 'Shower doors and tracks', 'Behind the toilet and fixtures'] },
    ],
    priceFactors: ['Square footage and number of bathrooms', 'How long since the last professional cleaning', 'Level of buildup in kitchen and bathrooms', 'Add-ons such as inside the oven or fridge'],
    faqs: [
      { q: 'What is the difference between deep cleaning and regular cleaning?', a: 'Regular cleaning maintains a home that is already in good shape. Deep cleaning adds detail work such as baseboards, buildup removal, door frames, vents and grout, and takes longer.' },
      { q: 'How long does a deep cleaning take?', a: 'It depends on the size and condition of the home. We estimate the time when we prepare your quote.' },
      { q: 'Do you use safe products?', a: 'Our team is trained and uses safe, eco-friendly products to protect your home and belongings.' },
    ],
    status: 'confirmed',
  },
  {
    slug: 'move-in-move-out-cleaning',
    image: 'cms-slider-img1-20260220230141.jpg',
    imageAlt: 'Moving boxes in an empty living room',
    name: 'Move In / Move Out Cleaning',
    category: 'Residential',
    icon: 'box',
    short: 'Empty-home cleaning that gets a property ready for handoff, inspection or your first night in a new home.',
    title: 'Move In & Move Out Cleaning in Chesapeake, VA | Clean Solutions',
    description:
      'Move-in and move-out cleaning in Chesapeake and Hampton Roads for tenants, homeowners, landlords and realtors. Inside cabinets, appliances and closets. Free quote.',
    h1: 'Move In & Move Out Cleaning in Chesapeake, VA',
    answer:
      'Move-in and move-out cleaning is a detailed cleaning of an empty home, including inside cabinets, closets and appliances, so the property is ready for a final walkthrough, new tenants or your own move-in day.',
    intro: [
      'Moving is stressful enough without scrubbing an empty house at midnight. We clean the property while it is empty, when every cabinet, drawer and corner can be reached.',
      'Tenants use it to leave a rental ready for inspection, homeowners before listing or closing, and landlords and property managers between tenants.',
    ],
    idealFor: ['Tenants preparing for a final walkthrough', 'Homeowners selling or buying', 'Landlords and property managers between tenants', 'Realtors preparing a listing'],
    includes: [
      { area: 'Kitchen', items: ['Inside cabinets and drawers', 'Inside the refrigerator and oven', 'Countertops, sink and backsplash', 'Floors vacuumed and mopped'] },
      { area: 'Bathrooms', items: ['Toilets, tubs and showers', 'Inside vanities and medicine cabinets', 'Mirrors and fixtures', 'Floors'] },
      { area: 'Whole home', items: ['Inside closets and shelves', 'Baseboards, doors and frames', 'Window sills and tracks', 'Light switches and outlets wiped'] },
    ],
    priceFactors: ['Size of the property', 'Whether the home is fully empty', 'Condition after the move', 'Appliances to clean inside'],
    faqs: [
      { q: 'Does the home need to be empty?', a: 'It is best if furniture and boxes are already out. That way we can reach inside cabinets, closets and every floor area.' },
      { q: 'Do you work with landlords and property managers?', a: 'Yes. We clean between tenants and can coordinate access with you directly.' },
      { q: 'How soon can you come?', a: 'Same-day or urgent cleanings depend on availability. Call us as early as possible to reserve a date that matches your move.' },
    ],
    status: 'confirmed',
  },
  {
    slug: 'airbnb-cleaning',
    image: 'cms-slider-img2-20260220230257.jpg',
    imageAlt: 'Host handing over house keys',
    name: 'Airbnb & Vacation Rental Cleaning',
    category: 'Residential',
    icon: 'key',
    short: 'Fast, consistent turnovers between guests for short-term rentals, so every check-in feels five-star.',
    title: 'Airbnb Cleaning in Chesapeake & Virginia Beach | Clean Solutions',
    description:
      'Airbnb and vacation rental turnover cleaning in Chesapeake, Virginia Beach and Hampton Roads. Same checklist every turnover, quick turnaround. Free quote.',
    h1: 'Airbnb & Vacation Rental Cleaning in Hampton Roads',
    answer:
      'Our Airbnb cleaning is a turnover service for short-term rentals: we reset the property between guests with the same checklist every time, so reviews mention cleanliness for the right reasons.',
    intro: [
      'In short-term rentals, cleanliness is the review category guests notice first. One missed hair in the shower can cost a five-star rating.',
      'We clean between check-out and check-in with a repeatable checklist, staging the home the way you want it presented, and let you know if we spot damage or missing supplies.',
    ],
    idealFor: ['Airbnb and VRBO hosts', 'Vacation homes near the Oceanfront', 'Property managers with several units', 'Hosts who live out of town'],
    includes: [
      { area: 'Turnover reset', items: ['Kitchen and dishes cleaned', 'Bathrooms cleaned and sanitized', 'Beds made with fresh linens', 'Floors vacuumed and mopped'] },
      { area: 'Guest-ready details', items: ['Trash removed', 'Staging per your photos and checklist', 'Restocking of supplies you provide', 'Notes on damage or missing items'] },
    ],
    priceFactors: ['Size of the rental and number of beds', 'Turnover window between guests', 'Laundry and linen handling', 'Restocking and staging requests'],
    faqs: [
      { q: 'Can you clean between same-day check-out and check-in?', a: 'Yes, depending on availability. Share your booking calendar and turnover window when you request a quote.' },
      { q: 'Do you follow my own checklist?', a: 'Yes. Send us your checklist and staging photos and we will follow them on every turnover.' },
    ],
    status: 'confirmed',
  },
  {
    slug: 'post-construction-cleaning',
    image: 'slider-img3.jpg',
    imageAlt: 'Kitchen at the end of a renovation',
    name: 'Post-Construction Cleaning',
    category: 'Commercial',
    icon: 'hammer',
    short: 'Three-phase cleanup that removes construction dust and debris so new spaces are ready for walkthrough and move-in.',
    title: 'Post-Construction Cleaning in Chesapeake, VA | Clean Solutions',
    description:
      'Post-construction and renovation cleaning in Chesapeake and Hampton Roads. Three-phase dust and debris cleanup for builders and homeowners. Free quote.',
    h1: 'Post-Construction Cleaning in Chesapeake, VA',
    answer:
      'Post-construction cleaning removes the fine dust, debris and residue left after building or remodeling. We work in three phases so homes and commercial spaces are ready for final walkthrough, tours and move-in.',
    intro: [
      'Construction dust settles everywhere: inside vents, on top of door frames, in window tracks and on every new surface. A regular cleaning does not remove it.',
      'We coordinate with builders, contractors and homeowners to clean in phases as the project wraps up, so the space is presented the way the work deserves.',
    ],
    idealFor: ['Builders and general contractors', 'Kitchen and bathroom remodels', 'New construction homes', 'Commercial build-outs before opening'],
    includes: [
      { area: 'Phase 1 · Rough clean', items: ['Debris and leftover materials removed', 'Floors swept and vacuumed', 'Large surfaces wiped'] },
      { area: 'Phase 2 · Detail clean', items: ['Dust removed from vents, frames and fixtures', 'Windows, sills and tracks', 'Cabinets inside and out', 'Stickers and residue removed'] },
      { area: 'Phase 3 · Final touch-up', items: ['Final dusting before walkthrough', 'Floors mopped', 'Glass and fixtures polished'] },
    ],
    priceFactors: ['Square footage', 'Type of project (remodel or new build)', 'Amount of dust and debris', 'Number of phases and project timeline'],
    faqs: [
      { q: 'When should post-construction cleaning be scheduled?', a: 'Once the major work is finished. We can schedule the phases around your project timeline and final inspection.' },
      { q: 'Do you clean commercial build-outs?', a: 'Yes. We clean residential and commercial projects. Tell us the square footage and deadline when you request a quote.' },
    ],
    status: 'confirmed',
  },
  {
    slug: 'commercial-cleaning',
    image: 'project-img2.jpg',
    imageAlt: 'Cleaner vacuuming an office floor',
    name: 'Commercial & Office Cleaning',
    category: 'Commercial',
    icon: 'building',
    short: 'Routine office and commercial cleaning: workstations, restrooms, high-touch points, floors and trash.',
    title: 'Commercial & Office Cleaning in Chesapeake, VA | Clean Solutions',
    description:
      'Office and commercial cleaning in Chesapeake and Hampton Roads: workstations, restrooms, high-touch sanitizing, floors and trash. Free quote.',
    h1: 'Commercial & Office Cleaning in Chesapeake, VA',
    answer:
      'Clean Solutions provides routine commercial and office cleaning in Chesapeake and Hampton Roads, including workstations, common areas, restrooms, high-touch sanitizing, floor care and trash removal, on a schedule that fits your business.',
    intro: [
      'Clients and employees judge a business by its restrooms and lobby. A consistent cleaning schedule keeps your space presentable and healthier for everyone who walks in.',
      'We clean offices, small businesses and commercial spaces on a weekly, bi-weekly or custom schedule, and adapt the checklist to the areas that see the most traffic.',
    ],
    idealFor: ['Offices and professional suites', 'Small businesses and storefronts', 'Common areas and lobbies', 'Spaces that need high-touch sanitizing'],
    includes: [
      { area: 'Work areas', items: ['Desks and workstations dusted', 'Common areas and break rooms', 'Trash and recycling emptied', 'Floors vacuumed and mopped'] },
      { area: 'Restrooms', items: ['Toilets, sinks and mirrors cleaned', 'High-touch points sanitized', 'Floors mopped'] },
      { area: 'High-touch sanitizing', items: ['Door handles and switches', 'Shared equipment surfaces', 'Reception and entry areas'] },
    ],
    priceFactors: ['Square footage and layout', 'Number of restrooms', 'Visit frequency', 'After-hours scheduling needs'],
    faqs: [
      { q: 'Can you clean after business hours?', a: 'Tell us your preferred schedule when you request a quote and we will confirm availability.' },
      { q: 'Can we customize the cleaning plan?', a: 'Yes. We build the plan around your high-traffic areas and priorities, and quote it based on your space.' },
    ],
    status: 'confirmed',
  },

  {
    slug: 'window-cleaning',
    image: 'slider-img6.jpg',
    imageAlt: 'Squeegee cleaning a window pane',
    name: 'Window Cleaning',
    category: 'Residential',
    icon: 'home',
    short: 'Detailed interior window cleaning that removes marks and smudges and brings light back into every room.',
    title: 'Interior Window Cleaning in Chesapeake, VA | Clean Solutions',
    description:
      'Interior window cleaning in Chesapeake and Hampton Roads: glass, sills and tracks cleaned to remove marks and smudges. Add it to any cleaning or book it alone.',
    h1: 'Interior Window Cleaning in Chesapeake, VA',
    answer:
      'Our window cleaning is a detailed interior service: glass, sills and tracks are cleaned to remove marks, smudges and dust so every room looks brighter. It can be booked alone or added to a house or deep cleaning.',
    intro: [
      'Fingerprints, pet noses and pollen dust build up on windows faster than most people notice. Clean glass changes how bright a room feels.',
      'We clean the interior side of your windows, along with the sills and tracks where dust and debris collect.',
    ],
    idealFor: ['Homes with many windows or glass doors', 'Before guests, photos or a listing', 'After pollen season', 'Adding to a deep cleaning'],
    includes: [
      { area: 'Glass', items: ['Interior glass cleaned streak-free', 'Fingerprints and smudges removed', 'Glass doors and sliders'] },
      { area: 'Frames & sills', items: ['Window sills wiped', 'Tracks vacuumed and wiped', 'Frames dusted'] },
    ],
    priceFactors: ['Number and size of windows', 'Glass doors and sliders', 'Access (high or hard-to-reach windows)', 'Booked alone or with another cleaning'],
    faqs: [
      { q: 'Do you clean the outside of the windows?', a: 'Our window service focuses on interior glass, sills and tracks. Ask us about your windows when you request a quote.' },
      { q: 'Can I add window cleaning to another service?', a: 'Yes. Many customers add it to a deep cleaning or a move-out cleaning.' },
    ],
    status: 'confirmed',
  },
];

export const serviceHref = (slug: string) => `/services/${slug}/`;
export const residential = services.filter((s) => s.category === 'Residential');
export const commercial = services.filter((s) => s.category === 'Commercial');
export const servicesByPriority = services;
export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** General FAQ (home, contact). Answers taken from the current live site. */
export const generalFaqs: Faq[] = [
  { q: 'What areas do you serve?', a: 'We are based in Chesapeake, VA and serve homes and businesses in Chesapeake, Virginia Beach, Norfolk, Portsmouth and Suffolk. If you are unsure whether we cover your address, call us.' },
  { q: 'Do I need to provide cleaning supplies or equipment?', a: 'No. We bring all the supplies and equipment. If you want us to use specific products, leave them on the kitchen counter with a note.' },
  { q: 'How often should I schedule cleaning?', a: 'We offer weekly, bi-weekly, monthly and one-time cleanings. Most customers who want a consistently clean home choose bi-weekly.' },
  { q: 'What happens if I am not satisfied?', a: 'Let us know within 24 hours by phone or email and we will make it right.' },
  { q: 'Do you offer same-day cleaning?', a: 'Same-day and urgent cleanings are available depending on our schedule. Call as early as possible.' },
  { q: 'How do I book or reschedule?', a: 'Request a quote on this site, call (757) 305-8237 or email us. We ask for 24 hours of notice to reschedule.' },
];
