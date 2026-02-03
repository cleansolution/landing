import React, { useState } from 'react';
import AdminLayout from '../../component/AdminLayout.tsx';
import featuresData from '../../data/featuresData.json';
import { featuresAPI } from '../../services/api';

export default function AdminFeatures() {
  const [features, setFeatures] = useState(featuresData?.features || []);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    desc: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleEdit = (feature) => {
    setFormData(feature);
    setEditingId(feature.id);
    setShowForm(true);
  };

  const handleAdd = () => {
    const newId = Math.max(...(features || []).map(f => f.id), 0) + 1;
    setFormData({
      id: newId,
      title: '',
      desc: ''
    });
    setEditingId(null);
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let updatedFeatures;
    if (editingId) {
      updatedFeatures = features.map(f => f.id === editingId ? formData : f);
    } else {
      updatedFeatures = [...features, formData];
    }
    
    setFeatures(updatedFeatures);
    
    setSaving(true);
    try {
      await featuresAPI.save(updatedFeatures);
      alert('✅ Feature saved successfully!');
      setShowForm(false);
      setFormData({ id: 0, title: '', desc: '' });
      setEditingId(null);
    } catch (error) {
      alert('❌ Error saving feature.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this feature?')) {
      const updatedFeatures = features.filter(f => f.id !== id);
      setFeatures(updatedFeatures);
      
      setSaving(true);
      try {
        await featuresAPI.save(updatedFeatures);
        alert('✅ Feature deleted!');
      } catch (error) {
        alert('❌ Error deleting feature.');
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
            <h1>Manage Features</h1>
            <p>Add, edit or remove company features</p>
          </div>
          <button onClick={handleAdd} className="btn-primary">
            ➕ Add Feature
          </button>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-modal-content small">
              <div className="form-modal-header">
                <h2>{editingId ? 'Edit Feature' : 'Add Feature'}</h2>
                <button onClick={() => setShowForm(false)} className="btn-close">✕</button>
              </div>
              
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                  <label>Feature Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="e.g., Professional Cleaning"
                  />
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    value={formData.desc}
                    onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                    required
                    rows={4}
                    placeholder="Enter feature description..."
                  />
                </div>

                <div className="form-actions">
                  <button type="button" onClick={() => setShowForm(false)} className="btn-secondary" disabled={saving}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary" disabled={saving}>
                    {saving ? 'Saving...' : (editingId ? 'Update Feature' : 'Add Feature')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                ✨
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
              <div className="feature-actions">
                <button onClick={() => handleEdit(feature)} className="btn-edit">
                  ✏️ Edit
                </button>
                <button onClick={() => handleDelete(feature.id)} className="btn-delete">
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
