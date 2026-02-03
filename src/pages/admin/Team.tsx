import React, { useState } from 'react';
import AdminLayout from '../../component/AdminLayout.tsx';
import teamData from '../../data/teamData.json';
import { teamAPI } from '../../services/api';

// Helper function to get image source
const getImageSrc = (img) => {
  if (!img) return '';
  if (img.startsWith('data:') || img.startsWith('http')) return img;
  try {
    return require(`../../assets/images/team/${img}`);
  } catch (e) {
    console.warn(`Image not found: ${img}`);
    return '';
  }
};

export default function AdminTeam() {
  const [team, setTeam] = useState(teamData || []);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    role: '',
    image: '',
    instagram: '',
    facebook: '',
    whatsapp: '',
    twitter: ''
  });
  const [imagePreview, setImagePreview] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (member) => {
    setFormData(member);
    setEditingId(member.id);
    setImagePreview(member.image || '');
    setShowForm(true);
  };

  const handleAdd = () => {
    const newId = Math.max(...(team || []).map(m => m.id), 0) + 1;
    setFormData({
      id: newId,
      name: '',
      role: '',
      image: '',
      instagram: 'https://www.instagram.com',
      facebook: 'https://www.facebook.com',
      whatsapp: 'https://wa.me/+1234567890',
      twitter: 'https://x.com'
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
    
    let updatedTeam;
    if (editingId) {
      updatedTeam = team.map(m => m.id === editingId ? formData : m);
    } else {
      updatedTeam = [...team, formData];
    }
    
    setTeam(updatedTeam);
    
    setSaving(true);
    try {
      await teamAPI.save(updatedTeam);
      alert('✅ Team member saved successfully!');
      setShowForm(false);
      setFormData({ id: 0, name: '', role: '', image: '', instagram: '', facebook: '', whatsapp: '', twitter: '' });
      setEditingId(null);
    } catch (error) {
      alert('❌ Error saving team member. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      const updatedTeam = team.filter(m => m.id !== id);
      setTeam(updatedTeam);
      
      setSaving(true);
      try {
        await teamAPI.save(updatedTeam);
        alert('✅ Team member deleted!');
      } catch (error) {
        alert('❌ Error deleting team member.');
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
            <h1>Manage Team</h1>
            <p>Add, edit or remove team members</p>
          </div>
          <button onClick={handleAdd} className="btn-primary">
            ➕ Add Team Member
          </button>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-modal-content">
              <div className="form-modal-header">
                <h2>{editingId ? 'Edit Team Member' : 'Add Team Member'}</h2>
                <button onClick={() => setShowForm(false)} className="btn-close">✕</button>
              </div>
              
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                  <label>Profile Photo</label>
                  <div className="image-upload-area circular">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      id="photoUpload"
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="photoUpload" className="image-upload-label circular">
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
                    <label>Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label>Position/Role *</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      required
                      placeholder="Cleaner"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3>Social Media Links</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Instagram</label>
                      <input
                        type="url"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        placeholder="https://instagram.com/..."
                      />
                    </div>

                    <div className="form-group">
                      <label>Facebook</label>
                      <input
                        type="url"
                        value={formData.facebook}
                        onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                        placeholder="https://facebook.com/..."
                      />
                    </div>

                    <div className="form-group">
                      <label>WhatsApp</label>
                      <input
                        type="url"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="https://wa.me/..."
                      />
                    </div>

                    <div className="form-group">
                      <label>Twitter/X</label>
                      <input
                        type="url"
                        value={formData.twitter}
                        onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                        placeholder="https://x.com/..."
                      />
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    {editingId ? 'Update Member' : 'Add Member'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-photo">
                {member.image ? (
                  <img 
                    src={getImageSrc(member.image)} 
                    alt={member.name} 
                  />
                ) : (
                  <div className="no-photo">👤</div>
                )}
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="social-links">
                  {member.instagram && <span>📷</span>}
                  {member.facebook && <span>📘</span>}
                  {member.whatsapp && <span>💬</span>}
                  {member.twitter && <span>🐦</span>}
                </div>
              </div>
              <div className="team-actions">
                <button onClick={() => handleEdit(member)} className="btn-edit">
                  ✏️ Edit
                </button>
                <button onClick={() => handleDelete(member.id)} className="btn-delete">
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
