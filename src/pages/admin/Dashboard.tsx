import React from 'react';
import AdminLayout from '../../component/AdminLayout.tsx';
import servicesData from '../../data/servicesData.json';
import teamData from '../../data/teamData.json';
import testimonialData from '../../data/testimonailData.json';
import featuresData from '../../data/featuresData.json';
import projectData from '../../data/projectData.json';
import sectionsData from '../../data/sectionsData.json';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Services',
      count: servicesData.services.length,
      icon: '🛠️',
      color: '#4F46E5'
    },
    {
      title: 'Team Members',
      count: teamData.length,
      icon: '👥',
      color: '#10B981'
    },
    {
      title: 'Testimonials',
      count: testimonialData.length,
      icon: '💬',
      color: '#F59E0B'
    },
    {
      title: 'Projects',
      count: projectData.length,
      icon: '📁',
      color: '#8B5CF6'
    }
  ];

  return (
    <AdminLayout>
      <div className="admin-dashboard">
        <div className="dashboard-header">
          <h1>Dashboard Overview</h1>
          <p>Manage your cleaning service website content</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.title} className="stat-card" style={{ borderColor: stat.color }}>
              <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-info">
                <h3>{stat.count}</h3>
                <p>{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <a href="/admin/services" className="action-card">
              <span className="action-icon">🛠️</span>
              <h3>Manage Services</h3>
              <p>Add, edit or remove cleaning services</p>
            </a>
            <a href="/admin/team" className="action-card">
              <span className="action-icon">👥</span>
              <h3>Manage Team</h3>
              <p>Update team member profiles and photos</p>
            </a>
            <a href="/admin/testimonials" className="action-card">
              <span className="action-icon">💬</span>
              <h3>Manage Testimonials</h3>
              <p>Edit customer reviews and feedback</p>
            </a>
            <a href="/admin/projects" className="action-card">
              <span className="action-icon">📁</span>
              <h3>Manage Projects</h3>
              <p>Edit recent projects and portfolio</p>
            </a>
            <a href="/admin/why-choose-us" className="action-card">
              <span className="action-icon">✨</span>
              <h3>Why Choose Us</h3>
              <p>Edit benefits and reasons section</p>
            </a>
            <a href="/admin/how-it-works" className="action-card">
              <span className="action-icon">📋</span>
              <h3>How It Works</h3>
              <p>Edit process steps and workflow</p>
            </a>
            <a href="/admin/contact" className="action-card">
              <span className="action-icon">📞</span>
              <h3>Contact Info</h3>
              <p>Update contact details and location</p>
            </a>
            <a href="/admin/footer" className="action-card">
              <span className="action-icon">🔗</span>
              <h3>Footer Settings</h3>
              <p>Edit footer links and social media</p>
            </a>
            <a href="/admin/about" className="action-card">
              <span className="action-icon">🏢</span>
              <h3>Edit About Section</h3>
              <p>Update company information and features</p>
            </a>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-icon">🛠️</span>
              <div className="activity-details">
                <p className="activity-title">Services updated</p>
                <p className="activity-time">2 hours ago</p>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">👥</span>
              <div className="activity-details">
                <p className="activity-title">New team member added</p>
                <p className="activity-time">1 day ago</p>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">💬</span>
              <div className="activity-details">
                <p className="activity-title">Testimonial approved</p>
                <p className="activity-time">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
