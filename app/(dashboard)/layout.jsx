"use client"
import React, { useState } from 'react';
import SideNav from './components/SideNav';
import TopHeader from './components/TopHeader';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex'>
      <div className={`fixed inset-y-0 z-30 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white shadow-md w-64 md:translate-x-0 md:relative md:z-auto`}>
        <SideNav />
      </div>

      <div className={`fixed inset-0 bg-black opacity-50 z-20 transition-opacity ${
          isSidebarOpen ? 'block' : 'hidden'
        } md:hidden`} onClick={() => setSidebarOpen(false)}></div>

        {/* Main Content */}
        <div className='flex-1 flex flex-col min-h-screen '>
            <TopHeader toggleSidebar={toggleSidebar} />
            {children}
        </div>
    </div>
  );
}

export default Layout;
