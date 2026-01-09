import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Banner from './pages/Banner';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Protected Route Component
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isAdminLoggedIn');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return children;
}

// Admin Layout Component
function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'banner', name: 'Banner' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'contact', name: 'Contact Info' },
  ];

  const getActivePage = () => {
    const path = location.pathname.replace('/', '') || 'dashboard';
    return path;
  };

  const [activePage, setActivePage] = useState(getActivePage());

  useEffect(() => {
    setActivePage(getActivePage());
  }, [location.pathname]);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen}
        activePage={activePage}
        menuItems={menuItems}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          activePage={activePage}
          setActivePage={setActivePage}
        />
        
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Login Route - No Layout */}
      <Route path="/login" element={<Login />} />
      
      {/* Protected Admin Routes */}
      <Route path="/" element={
        <ProtectedRoute>
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/banner" element={
        <ProtectedRoute>
          <AdminLayout>
            <Banner />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/about" element={
        <ProtectedRoute>
          <AdminLayout>
            <About />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/services" element={
        <ProtectedRoute>
          <AdminLayout>
            <Services />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/gallery" element={
        <ProtectedRoute>
          <AdminLayout>
            <Gallery />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/contact" element={
        <ProtectedRoute>
          <AdminLayout>
            <Contact />
          </AdminLayout>
        </ProtectedRoute>
      } />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
