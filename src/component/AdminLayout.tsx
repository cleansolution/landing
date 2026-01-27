import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.tsx';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Clean Solutions</h2>
          <p>Admin Dashboard</p>
        </div>
        
        <nav className="admin-nav">
          <Link to="/admin" className="nav-item">
            <span className="icon">📊</span>
            Dashboard
          </Link>
          <Link to="/admin/services" className="nav-item">
            <span className="icon">🛠️</span>
            Services
          </Link>
          <Link to="/admin/team" className="nav-item">
            <span className="icon">👥</span>
            Team
          </Link>
          <Link to="/admin/testimonials" className="nav-item">
            <span className="icon">💬</span>
            Testimonials
          </Link>
          <Link to="/admin/projects" className="nav-item">
            <span className="icon">📁</span>
            Projects
          </Link>
          <Link to="/admin/why-choose-us" className="nav-item">
            <span className="icon">✨</span>
            Why Choose Us
          </Link>
          <Link to="/admin/how-it-works" className="nav-item">
            <span className="icon">📋</span>
            How It Works
          </Link>
          <Link to="/admin/contact" className="nav-item">
            <span className="icon">📞</span>
            Contact Info
          </Link>
          <Link to="/admin/footer" className="nav-item">
            <span className="icon">🔗</span>
            Footer
          </Link>
          <Link to="/admin/features" className="nav-item">
            <span className="icon">⭐</span>
            Features
          </Link>
          <Link to="/admin/about" className="nav-item">
            <span className="icon">🏢</span>
            About
          </Link>
        </nav>

        <div className="admin-user">
          <div className="user-info">
            <span className="user-email">{user?.email}</span>
          </div>
          <button onClick={handleSignOut} className="btn-signout">
            🚪 Sign Out
          </button>
        </div>
      </aside>

      <main className="admin-content">
        {children}
      </main>
    </div>
  );
}
