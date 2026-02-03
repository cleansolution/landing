const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GITHUB_PAT;
const REPO_OWNER = process.env.GITHUB_REPO_OWNER || 'cleansolution';
const REPO_NAME = process.env.GITHUB_REPO_NAME || 'landing';
const REPO_BRANCH = process.env.GITHUB_REPO_BRANCH || 'main';

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Data directory path
const dataDir = path.join(__dirname, '..', 'src', 'data');

// Helper function to read JSON file
async function readJSON(filename) {
  try {
    const filePath = path.join(dataDir, filename);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    throw error;
  }
}

// Helper function to write JSON file
async function writeJSON(filename, data) {
  try {
    const filePath = path.join(dataDir, filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    throw error;
  }
}

const endpointConfig = {
  services: { filename: 'servicesData.json', section: 'Services', wrapKey: 'services' },
  team: { filename: 'teamData.json', section: 'Team' },
  testimonials: { filename: 'testimonailData.json', section: 'Testimonials' },
  features: { filename: 'featuresData.json', section: 'Features', wrapKey: 'features' },
  about: { filename: 'aboutData.json', section: 'About Section' },
  whyChooseUs: { filename: 'sectionsData.json', section: 'Why Choose Us', mergeKey: 'whyChooseUs' },
  howItWorks: { filename: 'sectionsData.json', section: 'How It Works', mergeKey: 'howItWorks' },
  projects: { filename: 'projectData.json', section: 'Projects' },
  contact: { filename: 'contact.json', section: 'Contact Info' },
  footer: { filename: 'footerData.json', section: 'Footer' }
};

async function fetchGitHubFile(filename) {
  const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/src/data/${filename}?ref=${REPO_BRANCH}`;
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json'
    }
  });

  if (!response.ok) {
    return { sha: null, json: null };
  }

  const fileData = await response.json();
  let json = null;

  if (fileData && fileData.content) {
    try {
      const decoded = Buffer.from(fileData.content.replace(/\n/g, ''), 'base64').toString('utf8');
      json = JSON.parse(decoded);
    } catch (error) {
      console.error('Error parsing GitHub file content:', error);
    }
  }

  return { sha: fileData.sha || null, json };
}

async function commitToGitHub(filename, content, sectionName, sha) {
  const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/src/data/${filename}`;
  const jsonContent = JSON.stringify(content, null, 2);
  const contentBase64 = Buffer.from(jsonContent, 'utf8').toString('base64');
  const timestamp = new Date().toISOString().replace('T', ' ').replace('Z', ' UTC');
  const message = `Auto-update: ${sectionName} - ${timestamp}`;

  const updateResponse = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message,
      content: contentBase64,
      sha,
      branch: REPO_BRANCH
    })
  });

  if (!updateResponse.ok) {
    const error = await updateResponse.json().catch(() => ({}));
    throw new Error(error.message || 'GitHub commit failed');
  }

  return updateResponse.json();
}

// GET endpoints - Read data
app.get('/api/services', async (req, res) => {
  try {
    const data = await readJSON('servicesData.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read services data' });
  }
});

app.get('/api/team', async (req, res) => {
  try {
    const data = await readJSON('teamData.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read team data' });
  }
});

app.get('/api/testimonials', async (req, res) => {
  try {
    const data = await readJSON('testimonailData.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read testimonials data' });
  }
});

app.get('/api/features', async (req, res) => {
  try {
    const data = await readJSON('featuresData.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read features data' });
  }
});

app.get('/api/about', async (req, res) => {
  try {
    const data = await readJSON('aboutData.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read about data' });
  }
});

// POST endpoints - Update data
app.post('/api/services', async (req, res) => {
  try {
    const services = req.body;
    await writeJSON('servicesData.json', { services });
    res.json({ success: true, message: 'Services updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update services data' });
  }
});

app.post('/api/team', async (req, res) => {
  try {
    const team = req.body;
    await writeJSON('teamData.json', team);
    res.json({ success: true, message: 'Team updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update team data' });
  }
});

app.post('/api/testimonials', async (req, res) => {
  try {
    const testimonials = req.body;
    await writeJSON('testimonailData.json', testimonials);
    res.json({ success: true, message: 'Testimonials updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update testimonials data' });
  }
});

app.post('/api/features', async (req, res) => {
  try {
    const features = req.body;
    await writeJSON('featuresData.json', { features });
    res.json({ success: true, message: 'Features updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update features data' });
  }
});

app.post('/api/about', async (req, res) => {
  try {
    const about = req.body;
    await writeJSON('aboutData.json', about);
    res.json({ success: true, message: 'About section updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update about data' });
  }
});

app.post('/api/github/commit', async (req, res) => {
  try {
    if (!GITHUB_TOKEN) {
      return res.status(500).json({ message: 'Missing GITHUB_TOKEN on server' });
    }

    const { endpoint, data } = req.body || {};
    const config = endpointConfig[endpoint];

    if (!config) {
      return res.status(400).json({ message: `Unknown endpoint: ${endpoint}` });
    }

    const { filename, section, wrapKey, mergeKey } = config;
    const { sha, json: existingJson } = await fetchGitHubFile(filename);

    let finalData = data;
    if (mergeKey) {
      const base = existingJson && typeof existingJson === 'object' ? existingJson : {};
      finalData = { ...base, [mergeKey]: data };
    } else if (wrapKey) {
      if (data && typeof data === 'object' && data[wrapKey]) {
        finalData = data;
      } else {
        finalData = { [wrapKey]: data };
      }
    }

    const result = await commitToGitHub(filename, finalData, section, sha);
    res.json({ success: true, message: `${section} committed`, url: result.commit?.html_url });
  } catch (error) {
    console.error('GitHub commit failed:', error);
    res.status(500).json({ message: error.message || 'GitHub commit failed' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Admin API Server running on http://localhost:${PORT}`);
  console.log(`Data directory: ${dataDir}`);
});
