const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Fetch data from API
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

// Save data to API
export const saveData = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) throw new Error('Failed to save data');
    return await response.json();
  } catch (error) {
    console.error(`Error saving ${endpoint}:`, error);
    throw error;
  }
};

// Services API
export const servicesAPI = {
  get: () => fetchData('services'),
  save: (services) => saveData('services', services),
};

// Team API
export const teamAPI = {
  get: () => fetchData('team'),
  save: (team) => saveData('team', team),
};

// Testimonials API
export const testimonialsAPI = {
  get: () => fetchData('testimonials'),
  save: (testimonials) => saveData('testimonials', testimonials),
};

// Features API
export const featuresAPI = {
  get: () => fetchData('features'),
  save: (features) => saveData('features', features),
};

// About API
export const aboutAPI = {
  get: () => fetchData('about'),
  save: (about) => saveData('about', about),
};
// Why Choose Us API
export const whyChooseUsAPI = {
  get: () => fetchData('whyChooseUs'),
  save: (whyChooseUs) => saveData('whyChooseUs', whyChooseUs),
};

// How It Works API
export const howItWorksAPI = {
  get: () => fetchData('howItWorks'),
  save: (howItWorks) => saveData('howItWorks', howItWorks),
};

// Projects API
export const projectsAPI = {
  get: () => fetchData('projects'),
  save: (projects) => saveData('projects', projects),
};

// Contact API
export const contactAPI = {
  get: () => fetchData('contact'),
  save: (contact) => saveData('contact', contact),
};

// Footer API
export const footerAPI = {
  get: () => fetchData('footer'),
  save: (footer) => saveData('footer', footer),
};