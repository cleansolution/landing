import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import './App.css';
import './assets/css/swap.css';
import './assets/css/bootstrap.min.css';
import './assets/css/swiper.min.css';
import './assets/css/style.css';
import './assets/css/media_query.css';

import HomeSolid from "./pages/HomeSolid.tsx";
import NotFound from "./pages/NotFound.tsx";

import Footer from "./component/Footer.tsx";
import Header from "./component/Header.tsx";
import ScrollTopPage from './component/ScrollTopPage.tsx';
import Preloader from './component/Preloader.tsx';
import ScrollToTopButton from "./component/ScrollToTopButton.tsx";
import SmoothScroll from './hooks/SmoothScroll.ts';

// Admin imports
import { AuthProvider, useAuth } from "./contexts/AuthContext.tsx";
import AdminLogin from "./pages/admin/Login.tsx";
import AdminDashboard from "./pages/admin/Dashboard.tsx";
import AdminServices from "./pages/admin/Services.tsx";
import AdminTeam from "./pages/admin/Team.tsx";
import AdminTestimonials from "./pages/admin/Testimonials.tsx";
import AdminFeatures from "./pages/admin/Features.tsx";
import AdminAbout from "./pages/admin/About.tsx";
import AdminWhyChooseUs from "./pages/admin/WhyChooseUs.tsx";
import AdminHowItWorks from "./pages/admin/HowItWorks.tsx";
import AdminProjects from "./pages/admin/Projects.tsx";
import AdminContact from "./pages/admin/Contact.tsx";
import AdminFooter from "./pages/admin/Footer.tsx";

// Protected Route Component
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
}

// Public Layout Component
function PublicLayout({ children }) {
  return (
    <>
      <SmoothScroll />
      <ScrollTopPage />
      <Header />
      <Preloader />
      {children}
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <PublicLayout>
              <HomeSolid />
            </PublicLayout>
          } />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/services" 
            element={
              <ProtectedRoute>
                <AdminServices />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/team" 
            element={
              <ProtectedRoute>
                <AdminTeam />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/testimonials" 
            element={
              <ProtectedRoute>
                <AdminTestimonials />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/features" 
            element={
              <ProtectedRoute>
                <AdminFeatures />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/about" 
            element={
              <ProtectedRoute>
                <AdminAbout />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/why-choose-us" 
            element={
              <ProtectedRoute>
                <AdminWhyChooseUs />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/how-it-works" 
            element={
              <ProtectedRoute>
                <AdminHowItWorks />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/projects" 
            element={
              <ProtectedRoute>
                <AdminProjects />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/contact" 
            element={
              <ProtectedRoute>
                <AdminContact />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/footer" 
            element={
              <ProtectedRoute>
                <AdminFooter />
              </ProtectedRoute>
            } 
          />

          {/* 404 */}
          <Route path="*" element={
            <PublicLayout>
              <NotFound />
            </PublicLayout>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
