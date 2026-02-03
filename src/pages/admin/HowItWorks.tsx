import React, { useState } from 'react';
import AdminLayout from '../../component/AdminLayout.tsx';
import sectionsData from '../../data/sectionsData.json';
import { howItWorksAPI } from '../../services/api';

export default function AdminHowItWorks() {
  const [howItWorks, setHowItWorks] = useState(sectionsData?.howItWorks || { steps: [] });
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: 0,
    icon: '',
    title: '',
    description: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleEdit = (step) => {
    setFormData(step);
    setEditingId(step.id);
    setShowForm(true);
  };

  const handleAdd = () => {
    const newId = Math.max(...(howItWorks?.steps || []).map(s => s.id), 0) + 1;
    setFormData({
      id: newId,
      icon: '',
      title: '',
      description: ''
    });
    setEditingId(null);
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let updatedSteps;
    if (editingId) {
      updatedSteps = howItWorks.steps.map(s => s.id === editingId ? formData : s);
    } else {
      updatedSteps = [...howItWorks.steps, formData];
    }
    
    const updatedData = { ...howItWorks, steps: updatedSteps };
    setHowItWorks(updatedData);
    
    setSaving(true);
    try {
      await howItWorksAPI.save(updatedData);
      alert('✅ Step saved successfully!');
      setShowForm(false);
      setFormData({ id: 0, icon: '', title: '', description: '' });
      setEditingId(null);
    } catch (error) {
      alert('❌ Error saving step. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this step?')) {
      const updatedSteps = howItWorks.steps.filter(s => s.id !== id);
      const updatedData = { ...howItWorks, steps: updatedSteps };
      setHowItWorks(updatedData);
      
      setSaving(true);
      try {
        await howItWorksAPI.save(updatedData);
        alert('✅ Step deleted successfully!');
      } catch (error) {
        alert('❌ Error deleting step. Please try again.');
      } finally {
        setSaving(false);
      }
    }
  };

  const handleSectionUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await howItWorksAPI.save(howItWorks);
      alert('✅ How It Works section updated successfully!');
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
            <h1>How It Works Section</h1>
            <p>Edit the how it works section and steps</p>
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
                value={howItWorks.sectionTitle}
                onChange={(e) => setHowItWorks({ ...howItWorks, sectionTitle: e.target.value })}
                placeholder="How it works"
              />
            </div>

            <div className="form-group">
              <label>Main Title</label>
              <input
                type="text"
                value={howItWorks.mainTitle}
                onChange={(e) => setHowItWorks({ ...howItWorks, mainTitle: e.target.value })}
                placeholder="Get Amazing Cleaning in 3 Simple Steps"
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={howItWorks.description}
                onChange={(e) => setHowItWorks({ ...howItWorks, description: e.target.value })}
                rows={4}
                placeholder="Description text..."
              />
            </div>

            <button type="submit" className="btn-primary" disabled={saving}>
              {saving ? 'Saving...' : 'Update Section'}
            </button>
          </div>
        </form>

        {/* Steps List */}
        <div className="section-divider">
          <div className="page-header">
            <h2>Process Steps</h2>
            <button onClick={handleAdd} className="btn-primary">
              ➕ Add Step
            </button>
          </div>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-modal-content">
              <div className="form-modal-header">
                <h2>{editingId ? 'Edit Step' : 'Add Step'}</h2>
                <button onClick={() => setShowForm(false)} className="btn-close">✕</button>
              </div>
              
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                  <label>Step Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="Pick a suitable plan"
                  />
                </div>

                <div className="form-group">
                  <label>Icon (SVG filename)</label>
                  <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    placeholder="how-to-work-svg1.svg"
                  />
                  <small>Enter the SVG icon filename from assets/images/svg/</small>
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={5}
                    placeholder="Describe this step..."
                  />
                </div>

                <div className="form-actions">
                  <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary" disabled={saving}>
                    {saving ? 'Saving...' : (editingId ? 'Update Step' : 'Add Step')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="steps-list">
          {howItWorks.steps.map((step, index) => (
            <div key={step.id} className="step-card">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {step.icon && <span className="step-icon">🎨 {step.icon}</span>}
              </div>
              <div className="step-actions">
                <button onClick={() => handleEdit(step)} className="btn-edit">
                  ✏️ Edit
                </button>
                <button onClick={() => handleDelete(step.id)} className="btn-delete">
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
