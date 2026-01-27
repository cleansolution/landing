import React, { useState } from 'react';
import AdminLayout from '../../component/AdminLayout.tsx';
import sectionsData from '../../data/sectionsData.json';
import { whyChooseUsAPI } from '../../services/api';

export default function AdminWhyChooseUs() {
  const [whyChooseUs, setWhyChooseUs] = useState(sectionsData.whyChooseUs);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    description: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleEdit = (benefit) => {
    setFormData(benefit);
    setEditingId(benefit.id);
    setShowForm(true);
  };

  const handleAdd = () => {
    const newId = Math.max(...whyChooseUs.benefits.map(b => b.id), 0) + 1;
    setFormData({
      id: newId,
      title: '',
      description: ''
    });
    setEditingId(null);
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let updatedBenefits;
    if (editingId) {
      updatedBenefits = whyChooseUs.benefits.map(b => b.id === editingId ? formData : b);
    } else {
      updatedBenefits = [...whyChooseUs.benefits, formData];
    }
    
    const updatedData = { ...whyChooseUs, benefits: updatedBenefits };
    setWhyChooseUs(updatedData);
    
    setSaving(true);
    try {
      await whyChooseUsAPI.save(updatedData);
      alert('✅ Benefit saved successfully!');
      setShowForm(false);
      setFormData({ id: 0, title: '', description: '' });
      setEditingId(null);
    } catch (error) {
      alert('❌ Error saving benefit. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this benefit?')) {
      const updatedBenefits = whyChooseUs.benefits.filter(b => b.id !== id);
      const updatedData = { ...whyChooseUs, benefits: updatedBenefits };
      setWhyChooseUs(updatedData);
      
      setSaving(true);
      try {
        await whyChooseUsAPI.save(updatedData);
        alert('✅ Benefit deleted successfully!');
      } catch (error) {
        alert('❌ Error deleting benefit. Please try again.');
      } finally {
        setSaving(false);
      }
    }
  };

  const handleSectionUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await whyChooseUsAPI.save(whyChooseUs);
      alert('✅ Why Choose Us section updated successfully!');
    } catch (error) {
      alert('❌ Error updating section. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Why Choose Us Section</h1>
            <p>Edit the why choose us section and benefits</p>
          </div>
        </div>

        {/* Section Info Form */}
        <form onSubmit={handleSectionUpdate} className="admin-form wide section-form">
          <div className="form-section">
            <h2>Section Content</h2>
            
            <div className="form-group">
              <label>Section Title</label>
              <input
                type="text"
                value={whyChooseUs.sectionTitle}
                onChange={(e) => setWhyChooseUs({ ...whyChooseUs, sectionTitle: e.target.value })}
                placeholder="why choose us"
              />
            </div>

            <div className="form-group">
              <label>Main Title</label>
              <input
                type="text"
                value={whyChooseUs.mainTitle}
                onChange={(e) => setWhyChooseUs({ ...whyChooseUs, mainTitle: e.target.value })}
                placeholder="We Will Make Absolutely Any Place Clean..."
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={whyChooseUs.description}
                onChange={(e) => setWhyChooseUs({ ...whyChooseUs, description: e.target.value })}
                rows={4}
                placeholder="At Clean Solutions, we take pride..."
              />
            </div>

            <button type="submit" className="btn-primary" disabled={saving}>
              {saving ? 'Saving...' : 'Update Section'}
            </button>
          </div>
        </form>

        {/* Benefits List */}
        <div className="section-divider">
          <div className="page-header">
            <h2>Benefits List</h2>
            <button onClick={handleAdd} className="btn-primary">
              ➕ Add Benefit
            </button>
          </div>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-modal-content">
              <div className="form-modal-header">
                <h2>{editingId ? 'Edit Benefit' : 'Add Benefit'}</h2>
                <button onClick={() => setShowForm(false)} className="btn-close">✕</button>
              </div>
              
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                  <label>Benefit Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="Customer Focused Reviews"
                  />
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={5}
                    placeholder="Describe this benefit..."
                  />
                </div>

                <div className="form-actions">
                  <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary" disabled={saving}>
                    {saving ? 'Saving...' : (editingId ? 'Update Benefit' : 'Add Benefit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="benefits-grid">
          {whyChooseUs.benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">✓</div>
              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
              <div className="benefit-actions">
                <button onClick={() => handleEdit(benefit)} className="btn-edit">
                  ✏️ Edit
                </button>
                <button onClick={() => handleDelete(benefit.id)} className="btn-delete">
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
