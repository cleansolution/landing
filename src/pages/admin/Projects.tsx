import React, { useState } from 'react';
import AdminLayout from '../../component/AdminLayout.tsx';
import projectData from '../../data/projectData.json';
import { projectsAPI } from '../../services/api';

// Helper function to get image source
const getImageSrc = (img) => {
  if (!img) return '';
  if (img.startsWith('data:') || img.startsWith('http')) return img;
  try {
    return require(`../../assets/images/project/${img}`);
  } catch (e) {
    console.warn(`Image not found: ${img}`);
    return '';
  }
};

export default function AdminProjects() {
  const [projects, setProjects] = useState(projectData);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    description: '',
    image: '',
    link: ''
  });
  const [imagePreview, setImagePreview] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleEdit = (project) => {
    setFormData(project);
    setEditingId(project.id);
    setImagePreview(project.image || '');
    setShowForm(true);
  };

  const handleAdd = () => {
    const newId = Math.max(...projects.map(p => p.id), 0) + 1;
    setFormData({
      id: newId,
      title: '',
      description: '',
      image: '',
      link: ''
    });
    setEditingId(null);
    setImagePreview('');
    setShowForm(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let updatedProjects;
    if (editingId) {
      updatedProjects = projects.map(p => p.id === editingId ? formData : p);
    } else {
      updatedProjects = [...projects, formData];
    }
    
    setProjects(updatedProjects);
    
    setSaving(true);
    try {
      await projectsAPI.save(updatedProjects);
      alert('✅ Project saved successfully!');
      setShowForm(false);
      setFormData({ id: 0, title: '', description: '', image: '', link: '' });
      setEditingId(null);
    } catch (error) {
      alert('❌ Error saving project. Please try again.');
      console.error('Save error:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(p => p.id !== id);
      setProjects(updatedProjects);
      
      setSaving(true);
      try {
        await projectsAPI.save(updatedProjects);
        alert('✅ Project deleted successfully!');
      } catch (error) {
        alert('❌ Error deleting project. Please try again.');
        console.error('Delete error:', error);
      } finally {
        setSaving(false);
      }
    }
  };

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Manage Projects</h1>
            <p>Add, edit or remove recent projects</p>
          </div>
          <button onClick={handleAdd} className="btn-primary">
            ➕ Add New Project
          </button>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-modal-content">
              <div className="form-modal-header">
                <div>
                  <h2>{editingId ? '✏️ Edit Project' : '➕ Add New Project'}</h2>
                  <p className="modal-subtitle">
                    {editingId 
                      ? 'Update the project details below' 
                      : 'Fill in the information for your new project'}
                  </p>
                </div>
                <button onClick={() => setShowForm(false)} className="btn-close">✕</button>
              </div>
              
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-section">
                  <h3 className="section-title">📝 Project Details</h3>
                  
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Project Title *</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                        placeholder="e.g., House Cleaning"
                      />
                    </div>

                    <div className="form-group">
                      <label>Project Link</label>
                      <input
                        type="text"
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                        placeholder="/Project1Single"
                      />
                      <small>Internal link to project details page</small>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Description *</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      rows={4}
                      placeholder="Professional residential cleaning service providing thorough and detailed home cleaning solutions."
                    />
                    <small>Provide a clear and concise description of the project</small>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="section-title">📷 Project Image</h3>
                  <div className="image-upload-area">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      id="imageUpload"
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="imageUpload" className="image-upload-label">
                      {imagePreview ? (
                        <div className="image-preview-container">
                          <img src={imagePreview} alt="Preview" className="image-preview" />
                          <div className="image-overlay-info">
                            <span>📷</span>
                            <p>Click to change image</p>
                          </div>
                        </div>
                      ) : (
                        <div className="upload-placeholder">
                          <span className="upload-icon">📷</span>
                          <p>Click to upload project image</p>
                          <small>PNG, JPG up to 5MB • Recommended: 800x600px</small>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary" disabled={saving}>
                    {saving ? '⏳ Saving...' : (editingId ? '✅ Update Project' : '➕ Add Project')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                {project.image ? (
                  <img src={getImageSrc(project.image)} alt={project.title} className="project-img" />
                ) : (
                  <div className="no-image-placeholder">
                    <span className="no-image-icon">📷</span>
                    <p>No Image</p>
                  </div>
                )}
                <div className="project-overlay">
                  <button onClick={() => handleEdit(project)} className="overlay-btn edit">
                    <span>✏️</span> Edit
                  </button>
                  <button onClick={() => handleDelete(project.id)} className="overlay-btn delete">
                    <span>🗑️</span> Delete
                  </button>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-id">ID: {project.id}</span>
                </div>
                <p className="project-description">{project.description}</p>
                {project.link && (
                  <div className="project-link-badge">
                    <span className="link-icon">🔗</span>
                    <span className="link-text">{project.link}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {(projects?.length || 0) === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📁</div>
            <h3>No Projects Yet</h3>
            <p>Start by adding your first project to showcase your work</p>
            <button onClick={handleAdd} className="btn-primary">
              ➕ Add Your First Project
            </button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
