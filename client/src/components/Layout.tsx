import React from 'react';
import Sidebar from './navigation/Sidebar';
import MobileNav from './navigation/MobileNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop layout */}
      <div className="hidden md:flex">
        <Sidebar />
        <main className="flex-1 p-8 ml-64">{children}</main>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col md:hidden h-screen">
        <main className="flex-1 p-4 pb-20 overflow-y-auto">{children}</main>
        <MobileNav />
      </div>
    </div>
  );
};

export default Layout;