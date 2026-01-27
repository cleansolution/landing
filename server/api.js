const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

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

// Start server
app.listen(PORT, () => {
  console.log(`✅ Admin API Server running on http://localhost:${PORT}`);
  console.log(`📁 Data directory: ${dataDir}`);
});
