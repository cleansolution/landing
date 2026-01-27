import React, { useState } from 'react';
import AdminLayout from '../../component/AdminLayout.tsx';
import contactData from '../../data/contact.json';
import { contactAPI } from '../../services/api';

export default function AdminContact() {
  const [contact, setContact] = useState(contactData);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setSaving(true);
    try {
      await contactAPI.save(contact);
      alert('✅ Contact information updated successfully!');
    } catch (error) {
      alert('❌ Error updating contact information. Please try again.');
      console.error('Save error:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="page-header">
          <div>
            <h1>Contact Information</h1>
            <p>Edit contact details and location</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="admin-form wide">
          <div className="form-section">
            <h2>Contact Details</h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  required
                  placeholder="+1 (757) 305 8237"
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  required
                  placeholder="info@cleansolutions.com"
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  value={contact.address}
                  onChange={(e) => setContact({ ...contact, address: e.target.value })}
                  placeholder="123 Main Street"
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  value={contact.city}
                  onChange={(e) => setContact({ ...contact, city: e.target.value })}
                  placeholder="Chesapeake"
                />
              </div>

              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  value={contact.state}
                  onChange={(e) => setContact({ ...contact, state: e.target.value })}
                  placeholder="Virginia"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary" disabled={saving}>
                {saving ? 'Saving...' : 'Update Contact Info'}
              </button>
            </div>
          </div>
        </form>

        <div className="info-card">
          <h3>📍 Current Contact Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <strong>Phone:</strong>
              <span>{contact.phone}</span>
            </div>
            <div className="info-item">
              <strong>Email:</strong>
              <span>{contact.email}</span>
            </div>
            <div className="info-item">
              <strong>Location:</strong>
              <span>{contact.city}, {contact.state}</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
