import React, { useState } from 'react';
import AdminLayout from '../../component/AdminLayout.tsx';
import servicesData from '../../data/servicesData.json';
import { servicesAPI } from '../../services/api';

// Helper function to get image source
const getImageSrc = (img) => {
  if (!img) return '';
  if (img.startsWith('data:') || img.startsWith('http')) return img;
  try {
    return require(`../../assets/images/services/${img}`);
  } catch (e) {
    console.warn(`Image not found: ${img}`);
    return '';
  }
};

export default function AdminServices() {
  const [services, setServices] = useState(servicesData?.services || []);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    desc: '',
    link: '',
    img: '',
    svg: ''
  });
  const [imagePreview, setImagePreview] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (service) => {
    setFormData(service);
    setEditingId(service.id);
    setImagePreview(service.img || '');
    setShowForm(true);
  };

  const handleAdd = () => {
    const newId = Math.max(...(services || []).map(s => s.id), 0) + 1;
    setFormData({
      id: newId,
      title: '',
      desc: '',
      link: '',
      img: '',
      svg: ''
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
        setFormData({ ...formData, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let updatedServices;
    if (editingId) {
      // Update existing service
      updatedServices = services.map(s => s.id === editingId ? formData : s);
    } else {
      // Add new service
      updatedServices = [...services, formData];
    }
    
    setServices(updatedServices);
    
    // Save to API
    setSaving(true);
    try {
      await servicesAPI.save(updatedServices);
      alert('✅ Service saved successfully!');
      setShowForm(false);
      setFormData({ id: 0, title: '', desc: '', link: '', img: '', svg: '' });
      setEditingId(null);
    } catch (error) {
      alert('❌ Error saving service. Please try again.');
      console.error('Save error:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter(s => s.id !== id);
      setServices(updatedServices);
      
      setSaving(true);
      try {
        await servicesAPI.save(updatedServices);
        alert('✅ Service deleted successfully!');
      } catch (error) {
        alert('❌ Error deleting service. Please try again.');
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
            <h1>Manage Services</h1>
            <p>Add, edit or remove cleaning services</p>
          </div>
          <button onClick={handleAdd} className="btn-primary">
            ➕ Add New Service
          </button>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-modal-content">
              <div className="form-modal-header">
                <h2>{editingId ? 'Edit Service' : 'Add New Service'}</h2>
                <button onClick={() => setShowForm(false)} className="btn-close">✕</button>
              </div>
              
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Service Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                      placeholder="e.g., Deep Cleaning"
                    />
                  </div>

                  <div className="form-group">
                    <label>Page Link</label>
                    <input
                      type="text"
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      placeholder="/deep-cleaning"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    value={formData.desc}
                    onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                    required
                    rows={4}
                    placeholder="Enter service description..."
                  />
                </div>

                <div className="form-group">
                  <label>Service Image</label>
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
                        <img src={imagePreview} alt="Preview" className="image-preview" />
                      ) : (
                        <div className="upload-placeholder">
                          <span className="upload-icon">📷</span>
                          <p>Click to upload image</p>
                          <small>PNG, JPG up to 5MB</small>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    {editingId ? 'Update Service' : 'Add Service'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                {service.img ? (
                  <img 
                    src={getImageSrc(service.img)} 
                    alt={service.title} 
                  />
                ) : (
                  <div className="no-image">No Image</div>
                )}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                {service.link && <span className="service-link">🔗 {service.link}</span>}
              </div>
              <div className="service-actions">
                <button onClick={() => handleEdit(service)} className="btn-edit">
                  ✏️ Edit
                </button>
                <button onClick={() => handleDelete(service.id)} className="btn-delete">
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
