import React, { useEffect, useState, useMemo } from 'react';
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
  const initialServices = useMemo(() => {
    return Array.isArray(servicesData?.services)
      ? servicesData.services
      : Array.isArray(servicesData)
        ? servicesData
        : [];
  }, []);

  const apiEnabled = Boolean(process.env.REACT_APP_API_URL);

  const [services, setServices] = useState(initialServices);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
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

  useEffect(() => {
    let active = true;

    const loadServices = async () => {
      if (!apiEnabled) {
        setServices(initialServices);
        setLoading(false);
        return;
      }

      try {
        const apiData = await servicesAPI.get();
        const normalized = Array.isArray(apiData?.services)
          ? apiData.services
          : Array.isArray(apiData)
            ? apiData
            : [];

        if (active) {
          setServices(normalized.length ? normalized : initialServices);
        }
      } catch (err) {
        console.error('Fetch services error:', err);
        if (active) {
          setError('No se pudieron cargar los servicios, usando datos locales.');
          setServices(initialServices);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadServices();

    return () => {
      active = false;
    };
  }, [initialServices, apiEnabled]);

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
    setError('');
    
    let updatedServices;
    if (editingId !== null) {
      // Update existing service
      updatedServices = services.map(s => s.id === editingId ? formData : s);
    } else {
      // Add new service
      updatedServices = [...services, formData];
    }
    
    setServices(updatedServices);

    // Save to API if enabled; otherwise keep local state only
    if (!apiEnabled) {
      alert('✅ Servicio guardado localmente.');
      setShowForm(false);
      setFormData({ id: 0, title: '', desc: '', link: '', img: '', svg: '' });
      setEditingId(null);
      return;
    }

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
      setError('No se pudo guardar el servicio. Inténtalo de nuevo.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter(s => s.id !== id);
      setServices(updatedServices);
      
      if (!apiEnabled) {
        alert('✅ Servicio eliminado localmente.');
        return;
      }

      setSaving(true);
      try {
        await servicesAPI.save(updatedServices);
        alert('✅ Service deleted successfully!');
      } catch (error) {
        alert('❌ Error deleting service. Please try again.');
        console.error('Delete error:', error);
        setError('No se pudo eliminar el servicio.');
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
          <button onClick={handleAdd} className="btn-primary" disabled={saving}>
            ➕ Add New Service
          </button>
        </div>

        {error && (
          <div className="admin-alert warning">{error}</div>
        )}

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
                  <button type="submit" className="btn-primary" disabled={saving}>
                    {saving ? 'Saving...' : editingId ? 'Update Service' : 'Add Service'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {loading ? (
          <div className="services-grid loading">Cargando servicios...</div>
        ) : services.length === 0 ? (
          <div className="services-grid empty">No hay servicios. Agrega uno nuevo.</div>
        ) : (
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
                  <button onClick={() => handleEdit(service)} className="btn-edit" disabled={saving}>
                    ✏️ Edit
                  </button>
                  <button onClick={() => handleDelete(service.id)} className="btn-delete" disabled={saving}>
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
