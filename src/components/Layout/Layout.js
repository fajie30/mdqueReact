import React from 'react';
// import Header from './Header';
import AppSidebar from './Sidebar';
import MainContent from './MainContent';


const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
