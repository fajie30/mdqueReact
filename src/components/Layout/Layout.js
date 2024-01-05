import React from 'react';
import AppSidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 overflow-y-auto">
        <AppSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden overflow-y-auto">
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
