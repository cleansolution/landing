const GITHUB_TOKEN = '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';
const REPO_OWNER = 'cleansolution';
const REPO_NAME = 'landing';
const BRANCH = 'main';
const USE_LOCAL_SERVER = process.env.REACT_APP_USE_LOCAL_SERVER === 'true';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

let pendingCommits = [];
let commitTimer = null;
const COMMIT_DELAY = 30000;

async function commitToGitHub(filename, content, sectionName) {
  const path = `src/data/${filename}`;
  const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`;
  
  try {
    const getResponse = await fetch(apiUrl, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    let sha = null;
    if (getResponse.ok) {
      const fileData = await getResponse.json();
      sha = fileData.sha;
    }
    
    const jsonContent = JSON.stringify(content, null, 2);
    const contentBase64 = btoa(unescape(encodeURIComponent(jsonContent)));
    const timestamp = new Date().toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    const message = `Auto-update: ${sectionName} - ${timestamp}`;
    
    const updateResponse = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message,
        content: contentBase64,
        sha: sha,
        branch: BRANCH
      })
    });
    
    if (!updateResponse.ok) {
      const error = await updateResponse.json();
      throw new Error(error.message || 'GitHub commit failed');
    }
    
    const result = await updateResponse.json();
    console.log('✅ Committed to GitHub:', result.commit.html_url);
    return result;
  } catch (error) {
    console.error('❌ GitHub commit failed:', error);
    throw error;
  }
}

function queueCommit(filename, content, sectionName) {
  const existingIndex = pendingCommits.findIndex(c => c.filename === filename);
  if (existingIndex >= 0) {
    pendingCommits[existingIndex] = { filename, content, sectionName };
  } else {
    pendingCommits.push({ filename, content, sectionName });
  }
  
  console.log(`📝 Queued: ${sectionName} (${filename})`);
  
  if (commitTimer) {
    clearTimeout(commitTimer);
  }
  
  commitTimer = setTimeout(async () => {
    await processPendingCommits();
  }, COMMIT_DELAY);
}

async function processPendingCommits() {
  if (pendingCommits.length === 0) return;
  
  const commits = [...pendingCommits];
  pendingCommits = [];
  commitTimer = null;
  
  console.log(`\n🚀 Processing ${commits.length} pending commit(s)...`);
  
  for (const commit of commits) {
    try {
      await commitToGitHub(commit.filename, commit.content, commit.sectionName);
      console.log(`✅ ${commit.sectionName} committed successfully`);
    } catch (error) {
      console.error(`❌ Failed to commit ${commit.sectionName}:`, error.message);
    }
  }
  
  console.log('🎉 All commits processed!\n');
}

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
  console.log(`💾 saveData called for: ${endpoint}`);
  console.log(`🔧 USE_LOCAL_SERVER: ${USE_LOCAL_SERVER}`);
  console.log(`📦 Data:`, data);
  
  if (USE_LOCAL_SERVER) {
    console.log(`→ Using local server: ${API_URL}/${endpoint}`);
    try {
      const response = await fetch(`${API_URL}/${endpoint}`, {
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
  } else {
    console.log(`→ Using GitHub API`);
    const fileMap = {
      services: { filename: 'servicesData.json', section: 'Services', wrapInObject: true },
      team: { filename: 'teamData.json', section: 'Team', wrapInObject: true },
      testimonials: { filename: 'testimonailData.json', section: 'Testimonials', wrapInObject: false },
      features: { filename: 'featuresData.json', section: 'Features', wrapInObject: true },
      about: { filename: 'aboutData.json', section: 'About Section', wrapInObject: false },
      whyChooseUs: { filename: 'sectionsData.json', section: 'Why Choose Us', wrapInObject: false },
      howItWorks: { filename: 'sectionsData.json', section: 'How It Works', wrapInObject: false },
      projects: { filename: 'projectData.json', section: 'Projects', wrapInObject: false },
      contact: { filename: 'contact.json', section: 'Contact Info', wrapInObject: false },
      footer: { filename: 'footerData.json', section: 'Footer', wrapInObject: false }
    };
    
    const fileInfo = fileMap[endpoint];
    if (!fileInfo) {
      throw new Error(`Unknown endpoint: ${endpoint}`);
    }
    
    let finalData = data;
    if (fileInfo.wrapInObject && Array.isArray(data)) {
      finalData = { [endpoint]: data };
    }
    
    console.log(`📝 Queueing commit for: ${fileInfo.section}`);
    queueCommit(fileInfo.filename, finalData, fileInfo.section);
    return { success: true, message: `${fileInfo.section} queued for commit` };
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
