import React, { useState } from 'react';
import AdminLayout from '../../component/AdminLayout.tsx';
import footerData from '../../data/footerData.json';
import { footerAPI } from '../../services/api';

export default function AdminFooter() {
  const [footer, setFooter] = useState(footerData);
  const [editingLink, setEditingLink] = useState(null);
  const [editingSocial, setEditingSocial] = useState(null);
  const [linkFormData, setLinkFormData] = useState({
    id: 0,
    label: '',
    url: ''
  });
  const [socialFormData, setSocialFormData] = useState({
    id: 0,
    platform: '',
    url: '',
    icon: ''
  });
  const [showLinkForm, setShowLinkForm] = useState(false);
  const [showSocialForm, setShowSocialForm] = useState(false);
  const [saving, setSaving] = useState(false);

  // Company Info Handlers
  const handleCompanyInfoSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await footerAPI.save(footer);
      alert('✅ Company information updated successfully!');
    } catch (error) {
      alert('❌ Error updating company information.');
    } finally {
      setSaving(false);
    }
  };

  // Quick Links Handlers
  const handleEditLink = (link) => {
    setLinkFormData(link);
    setEditingLink(link.id);
    setShowLinkForm(true);
  };

  const handleAddLink = () => {
    const newId = Math.max(...footer.quickLinks.map(l => l.id), 0) + 1;
    setLinkFormData({ id: newId, label: '', url: '' });
    setEditingLink(null);
    setShowLinkForm(true);
  };

  const handleLinkSubmit = async (e) => {
    e.preventDefault();
    let updatedLinks;
    if (editingLink) {
      updatedLinks = footer.quickLinks.map(l => l.id === editingLink ? linkFormData : l);
    } else {
      updatedLinks = [...footer.quickLinks, linkFormData];
    }
    
    const updatedFooter = { ...footer, quickLinks: updatedLinks };
    setFooter(updatedFooter);
    
    setSaving(true);
    try {
      await footerAPI.save(updatedFooter);
      alert('✅ Quick link saved!');
      setShowLinkForm(false);
      setLinkFormData({ id: 0, label: '', url: '' });
      setEditingLink(null);
    } catch (error) {
      alert('❌ Error saving link.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteLink = async (id) => {
    if (window.confirm('Are you sure you want to delete this link?')) {
      const updatedLinks = footer.quickLinks.filter(l => l.id !== id);
      const updatedFooter = { ...footer, quickLinks: updatedLinks };
      setFooter(updatedFooter);
      
      setSaving(true);
      try {
        await footerAPI.save(updatedFooter);
        alert('✅ Link deleted!');
      } catch (error) {
        alert('❌ Error deleting link.');
      } finally {
        setSaving(false);
      }
    }
  };

  // Social Media Handlers
  const handleEditSocial = (social) => {
    setSocialFormData(social);
    setEditingSocial(social.id);
    setShowSocialForm(true);
  };

  const handleAddSocial = () => {
    const newId = Math.max(...footer.socialMedia.map(s => s.id), 0) + 1;
    setSocialFormData({ id: newId, platform: '', url: '', icon: '' });
    setEditingSocial(null);
    setShowSocialForm(true);
  };

  const handleSocialSubmit = async (e) => {
    e.preventDefault();
    let updatedSocial;
    if (editingSocial) {
      updatedSocial = footer.socialMedia.map(s => s.id === editingSocial ? socialFormData : s);
    } else {
      updatedSocial = [...footer.socialMedia, socialFormData];
    }
    
    const updatedFooter = { ...footer, socialMedia: updatedSocial };
    setFooter(updatedFooter);
    
    setSaving(true);
    try {
      await footerAPI.save(updatedFooter);
      alert('✅ Social media link saved!');
      setShowSocialForm(false);
      setSocialFormData({ id: 0, platform: '', url: '', icon: '' });
      setEditingSocial(null);
    } catch (error) {
      alert('❌ Error saving social link.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteSocial = async (id) => {
    if (window.confirm('Are you sure you want to delete this social link?')) {
      const updatedSocial = footer.socialMedia.filter(s => s.id !== id);
      const updatedFooter = { ...footer, socialMedia: updatedSocial };
      setFooter(updatedFooter);
      
      setSaving(true);
      try {
        await footerAPI.save(updatedFooter);
        alert('✅ Social link deleted!');
      } catch (error) {
        alert('❌ Error deleting social link.');
      } finally {
        setSaving(false);
      }
    }
  };

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="page-header">
          <h1>Footer Settings</h1>
          <p>Manage footer content, links and social media</p>
        </div>

        {/* Company Info Section */}
        <form onSubmit={handleCompanyInfoSubmit} className="admin-form wide section-form">
          <div className="form-section">
            <h2>Company Information</h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Company Name *</label>
                <input
                  type="text"
                  value={footer.companyInfo.name}
                  onChange={(e) => setFooter({
                    ...footer,
                    companyInfo: { ...footer.companyInfo, name: e.target.value }
                  })}
                  required
                  placeholder="Clean Solutions CO. LLC"
                />
              </div>

              <div className="form-group">
                <label>Tagline</label>
                <input
                  type="text"
                  value={footer.companyInfo.tagline}
                  onChange={(e) => setFooter({
                    ...footer,
                    companyInfo: { ...footer.companyInfo, tagline: e.target.value }
                  })}
                  placeholder="Professional Cleaning Services"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={footer.companyInfo.description}
                onChange={(e) => setFooter({
                  ...footer,
                  companyInfo: { ...footer.companyInfo, description: e.target.value }
                })}
                rows={3}
                placeholder="Company description..."
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  value={footer.companyInfo.address}
                  onChange={(e) => setFooter({
                    ...footer,
                    companyInfo: { ...footer.companyInfo, address: e.target.value }
                  })}
                  placeholder="Chesapeake, Virginia"
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={footer.companyInfo.phone}
                  onChange={(e) => setFooter({
                    ...footer,
                    companyInfo: { ...footer.companyInfo, phone: e.target.value }
                  })}
                  placeholder="+1 (757) 305 8237"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={footer.companyInfo.email}
                  onChange={(e) => setFooter({
                    ...footer,
                    companyInfo: { ...footer.companyInfo, email: e.target.value }
                  })}
                  placeholder="info@cleansolutionsva.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Copyright Text</label>
              <input
                type="text"
                value={footer.copyright}
                onChange={(e) => setFooter({ ...footer, copyright: e.target.value })}
                placeholder="© 2024 Clean Solutions CO. LLC. All rights reserved."
              />
            </div>

            <button type="submit" className="btn-primary" disabled={saving}>
              {saving ? 'Saving...' : 'Update Company Info'}
            </button>
          </div>
        </form>

        {/* Quick Links Section */}
        <div className="section-divider">
          <div className="page-header">
            <h2>Quick Links</h2>
            <button onClick={handleAddLink} className="btn-primary">
              ➕ Add Link
            </button>
          </div>
        </div>

        {showLinkForm && (
          <div className="form-modal">
            <div className="form-modal-content small">
              <div className="form-modal-header">
                <h2>{editingLink ? 'Edit Link' : 'Add Link'}</h2>
                <button onClick={() => setShowLinkForm(false)} className="btn-close">✕</button>
              </div>
              
              <form onSubmit={handleLinkSubmit} className="admin-form">
                <div className="form-group">
                  <label>Link Label *</label>
                  <input
                    type="text"
                    value={linkFormData.label}
                    onChange={(e) => setLinkFormData({ ...linkFormData, label: e.target.value })}
                    required
                    placeholder="Home"
                  />
                </div>

                <div className="form-group">
                  <label>URL *</label>
                  <input
                    type="text"
                    value={linkFormData.url}
                    onChange={(e) => setLinkFormData({ ...linkFormData, url: e.target.value })}
                    required
                    placeholder="/"
                  />
                </div>

                <div className="form-actions">
                  <button type="button" onClick={() => setShowLinkForm(false)} className="btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary" disabled={saving}>
                    {saving ? 'Saving...' : (editingLink ? 'Update' : 'Add')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="links-list">
          {footer.quickLinks.map((link) => (
            <div key={link.id} className="link-item">
              <div className="link-content">
                <strong>{link.label}</strong>
                <span>→ {link.url}</span>
              </div>
              <div className="link-actions">
                <button onClick={() => handleEditLink(link)} className="btn-edit">✏️</button>
                <button onClick={() => handleDeleteLink(link.id)} className="btn-delete">🗑️</button>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="section-divider">
          <div className="page-header">
            <h2>Social Media</h2>
            <button onClick={handleAddSocial} className="btn-primary">
              ➕ Add Social Link
            </button>
          </div>
        </div>

        {showSocialForm && (
          <div className="form-modal">
            <div className="form-modal-content small">
              <div className="form-modal-header">
                <h2>{editingSocial ? 'Edit Social Link' : 'Add Social Link'}</h2>
                <button onClick={() => setShowSocialForm(false)} className="btn-close">✕</button>
              </div>
              
              <form onSubmit={handleSocialSubmit} className="admin-form">
                <div className="form-group">
                  <label>Platform *</label>
                  <input
                    type="text"
                    value={socialFormData.platform}
                    onChange={(e) => setSocialFormData({ ...socialFormData, platform: e.target.value })}
                    required
                    placeholder="Facebook"
                  />
                </div>

                <div className="form-group">
                  <label>URL *</label>
                  <input
                    type="url"
                    value={socialFormData.url}
                    onChange={(e) => setSocialFormData({ ...socialFormData, url: e.target.value })}
                    required
                    placeholder="https://facebook.com/yourpage"
                  />
                </div>

                <div className="form-group">
                  <label>Icon (filename)</label>
                  <input
                    type="text"
                    value={socialFormData.icon}
                    onChange={(e) => setSocialFormData({ ...socialFormData, icon: e.target.value })}
                    placeholder="facebook.svg"
                  />
                  <small>SVG icon filename from assets/images/svg/</small>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={() => setShowSocialForm(false)} className="btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary" disabled={saving}>
                    {saving ? 'Saving...' : (editingSocial ? 'Update' : 'Add')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="social-list">
          {footer.socialMedia.map((social) => (
            <div key={social.id} className="social-item">
              <div className="social-content">
                <strong>{social.platform}</strong>
                <span>{social.url}</span>
                {social.icon && <span className="social-icon">🎨 {social.icon}</span>}
              </div>
              <div className="social-actions">
                <button onClick={() => handleEditSocial(social)} className="btn-edit">✏️</button>
                <button onClick={() => handleDeleteSocial(social.id)} className="btn-delete">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

