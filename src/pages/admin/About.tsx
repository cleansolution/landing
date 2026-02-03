import React, { useState } from 'react';
import AdminLayout from '../../component/AdminLayout.tsx';
import aboutData from '../../data/aboutData.json';
import { aboutAPI } from '../../services/api';

export default function AdminAbout() {
  const initialData = {
    title: aboutData.capText || 'About Us',
    heading: aboutData.mainTitle || '',
    description: aboutData.description || '',
    image: '',
    experience: [
      { id: 1, value: String(aboutData.yearsExperience || 0), label: 'Years Experience' }
    ]
  };
  
  const [about, setAbout] = useState(initialData);
  const [imagePreview, setImagePreview] = useState(about.image);
  const [saving, setSaving] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setAbout({ ...about, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setSaving(true);
    try {
      await aboutAPI.save(about);
      alert('✅ About section saved successfully!');
    } catch (error) {
      alert('❌ Error saving about section.');
    } finally {
      setSaving(false);
    }
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...about.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setAbout({ ...about, experience: newExperience });
  };

  const addExperience = () => {
    const currentExperience = about.experience || [];
    setAbout({
      ...about,
      experience: [...currentExperience, { id: currentExperience.length + 1, value: '0', label: '' }]
    });
  };

  const removeExperience = (index) => {
    setAbout({
      ...about,
      experience: about.experience.filter((_, i) => i !== index)
    });
  };

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="page-header">
          <h1>About Section</h1>
          <p>Edit company information and about section</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-form wide">
          <div className="form-section">
            <h2>Basic Information</h2>
            
            <div className="form-group">
              <label>Section Title</label>
              <input
                type="text"
                value={about.title}
                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                placeholder="About Us"
              />
            </div>

            <div className="form-group">
              <label>Heading</label>
              <input
                type="text"
                value={about.heading}
                onChange={(e) => setAbout({ ...about, heading: e.target.value })}
                placeholder="Main heading text"
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={about.description}
                onChange={(e) => setAbout({ ...about, description: e.target.value })}
                rows={6}
                placeholder="About section description..."
              />
            </div>
          </div>

          <div className="form-section">
            <h2>About Image</h2>
            <div className="image-upload-area large">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="aboutImage"
                style={{ display: 'none' }}
              />
              <label htmlFor="aboutImage" className="image-upload-label large">
                {imagePreview ? (
                  <img src={imagePreview} alt="About" className="image-preview" />
                ) : (
                  <div className="upload-placeholder">
                    <span className="upload-icon">🖼️</span>
                    <p>Click to upload about image</p>
                    <small>PNG, JPG up to 5MB</small>
                  </div>
                )}
              </label>
            </div>
          </div>

          <div className="form-section">
            <div className="section-header">
              <h2>Experience Stats</h2>
              <button type="button" onClick={addExperience} className="btn-small">
                ➕ Add Stat
              </button>
            </div>
            
            <div className="experience-list">
              {(about.experience || []).map((exp, index) => (
                <div key={exp.id} className="experience-item">
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Value</label>
                      <input
                        type="text"
                        value={exp.value}
                        onChange={(e) => handleExperienceChange(index, 'value', e.target.value)}
                        placeholder="25"
                      />
                    </div>
                    <div className="form-group">
                      <label>Label</label>
                      <input
                        type="text"
                        value={exp.label}
                        onChange={(e) => handleExperienceChange(index, 'label', e.target.value)}
                        placeholder="Years Experience"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeExperience(index)}
                    className="btn-remove"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="form-actions sticky">
            <button type="submit" className="btn-primary large" disabled={saving}>
              {saving ? '💾 Saving...' : '💾 Save About Section'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
