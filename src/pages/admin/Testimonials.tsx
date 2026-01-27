import React, { useState } from 'react';
import AdminLayout from '../../component/AdminLayout.tsx';
import testimonialData from '../../data/testimonailData.json';
import { testimonialsAPI } from '../../services/api';
// Helper function to get image source
const getImageSrc = (img) => {
  if (!img) return '';
  if (img.startsWith('data:') || img.startsWith('http')) return img;
  try {
    return require(`../../assets/images/testimonials/${img}`);
  } catch (e) {
    console.warn(`Image not found: ${img}`);
    return '';
  }
};
export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState(testimonialData);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    role: '',
    text: '',
    image: ''
  });
  const [imagePreview, setImagePreview] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleEdit = (testimonial) => {
    setFormData(testimonial);
    setEditingId(testimonial.id);
    setImagePreview(testimonial.image || '');
    setShowForm(true);
  };

  const handleAdd = () => {
    const newId = Math.max(...testimonials.map(t => t.id), 0) + 1;
    setFormData({
      id: newId,
      name: '',
      role: '',
      text: '',
      image: ''
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
    
    let updatedTestimonials;
    if (editingId) {
      updatedTestimonials = testimonials.map(t => t.id === editingId ? formData : t);
    } else {
      updatedTestimonials = [...testimonials, formData];
    }
    
    setTestimonials(updatedTestimonials);
    
    setSaving(true);
    try {
      await testimonialsAPI.save(updatedTestimonials);
      alert('✅ Testimonial saved successfully!');
      setShowForm(false);
      setFormData({ id: 0, name: '', role: '', text: '', image: '' });
      setEditingId(null);
    } catch (error) {
      alert('❌ Error saving testimonial.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      const updatedTestimonials = testimonials.filter(t => t.id !== id);
      setTestimonials(updatedTestimonials);
      
      setSaving(true);
      try {
        await testimonialsAPI.save(updatedTestimonials);
        alert('✅ Testimonial deleted!');
      } catch (error) {
        alert('❌ Error deleting testimonial.');
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
            <h1>Manage Testimonials</h1>
            <p>Add, edit or remove customer testimonials</p>
          </div>
          <button onClick={handleAdd} className="btn-primary">
            ➕ Add Testimonial
          </button>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-modal-content">
              <div className="form-modal-header">
                <h2>{editingId ? 'Edit Testimonial' : 'Add Testimonial'}</h2>
                <button onClick={() => setShowForm(false)} className="btn-close">✕</button>
              </div>
              
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                  <label>Client Photo</label>
                  <div className="image-upload-area circular small">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      id="avatarUpload"
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="avatarUpload" className="image-upload-label circular small">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="image-preview circular" />
                      ) : (
                        <div className="upload-placeholder">
                          <span className="upload-icon">👤</span>
                          <p>Upload Photo</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Client Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label>Client Title/Company</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="Homeowner / Business Owner"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Testimonial Text *</label>
                  <textarea
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    required
                    rows={6}
                    placeholder="Enter customer testimonial..."
                  />
                  <small>{formData.text.length} characters</small>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={() => setShowForm(false)} className="btn-secondary" disabled={saving}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary" disabled={saving}>
                    {saving ? 'Saving...' : (editingId ? 'Update Testimonial' : 'Add Testimonial')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.image ? (
                    <img 
                      src={getImageSrc(testimonial.image)} 
                      alt={testimonial.name} 
                    />
                  ) : (
                    <div className="no-avatar">👤</div>
                  )}
                </div>
                <div className="testimonial-client">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-text">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-actions">
                <button onClick={() => handleEdit(testimonial)} className="btn-edit">
                  ✏️ Edit
                </button>
                <button onClick={() => handleDelete(testimonial.id)} className="btn-delete">
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
