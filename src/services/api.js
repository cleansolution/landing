const USE_LOCAL_SERVER = process.env.REACT_APP_USE_LOCAL_SERVER === 'true';
const API_URL = process.env.REACT_APP_API_URL || '';
const LOCAL_API_URL = API_URL || 'http://localhost:5000/api';

export const fetchData = async (endpoint) => {
  try {
    const dataMap = {
      services: require('../data/servicesData.json'),
      team: require('../data/teamData.json'),
      testimonials: require('../data/testimonailData.json'),
      features: require('../data/featuresData.json'),
      about: require('../data/aboutData.json'),
      whyChooseUs: require('../data/sectionsData.json').whyChooseUs,
      howItWorks: require('../data/sectionsData.json').howItWorks,
      projects: require('../data/projectData.json'),
      contact: require('../data/contact.json'),
      footer: require('../data/footerData.json')
    };
    return dataMap[endpoint] || null;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

export const saveData = async (endpoint, data) => {
  console.log(`ðŸ’¾ saveData called for: ${endpoint}`);
  console.log(`ðŸ”§ USE_LOCAL_SERVER: ${USE_LOCAL_SERVER}`);
  console.log(`ðŸ“¦ Data:`, data);

  if (USE_LOCAL_SERVER) {
    console.log(`â†’ Using local server: ${LOCAL_API_URL}/${endpoint}`);
    try {
      const response = await fetch(`${LOCAL_API_URL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to save data');
      return await response.json();
    } catch (error) {
      console.error(`Error saving ${endpoint}:`, error);
      throw error;
    }
  }

  const commitUrl = API_URL ? `${API_URL}/github/commit` : '/api/github/commit';
  console.log(`â†’ Using GitHub commit via Functions: ${commitUrl}`);
  try {
    const response = await fetch(commitUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ endpoint, data }),
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || 'Failed to save data via API');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error saving ${endpoint} via API:`, error);
    throw error;
  }
};

export const servicesAPI = {
  get: () => fetchData('services'),
  save: (services) => saveData('services', services),
};

export const teamAPI = {
  get: () => fetchData('team'),
  save: (team) => saveData('team', team),
};

export const testimonialsAPI = {
  get: () => fetchData('testimonials'),
  save: (testimonials) => saveData('testimonials', testimonials),
};

export const featuresAPI = {
  get: () => fetchData('features'),
  save: (features) => saveData('features', features),
};

export const aboutAPI = {
  get: () => fetchData('about'),
  save: (about) => saveData('about', about),
};

export const whyChooseUsAPI = {
  get: () => fetchData('whyChooseUs'),
  save: (whyChooseUs) => saveData('whyChooseUs', whyChooseUs),
};

export const howItWorksAPI = {
  get: () => fetchData('howItWorks'),
  save: (howItWorks) => saveData('howItWorks', howItWorks),
};

export const projectsAPI = {
  get: () => fetchData('projects'),
  save: (projects) => saveData('projects', projects),
};

export const contactAPI = {
  get: () => fetchData('contact'),
  save: (contact) => saveData('contact', contact),
};

export const footerAPI = {
  get: () => fetchData('footer'),
  save: (footer) => saveData('footer', footer),
};

export const submitContactMessage = async (payload) => {
  const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT || '/api/contact-message';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || `Request failed with status ${response.status}`);
  }

  return data;
};
