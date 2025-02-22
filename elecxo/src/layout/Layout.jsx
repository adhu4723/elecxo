import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px- mb-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
