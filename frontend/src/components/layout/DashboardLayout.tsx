
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string; // Optional title for the header
  headerActions?: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title, headerActions }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-soft-surface font-sans text-midnight-navy flex">
      {/* Sidebar for Desktop */}
      <Sidebar className="hidden lg:flex" />

      {/* Mobile Drawer (Overlay) */}
      <div className={`fixed inset-0 z-30 lg:hidden pointer-events-none`}>
         {/* Backdrop */}
         <div 
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 pointer-events-auto ${
              isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsSidebarOpen(false)}
         />
         {/* Sidebar */}
         <div 
            className={`absolute left-0 top-0 bottom-0 w-64 bg-midnight-navy shadow-xl transition-transform duration-300 pointer-events-auto ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
         >
            <Sidebar />
         </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:pl-64 min-h-screen transition-all duration-300">
        <Header 
          onMenuClick={() => setIsSidebarOpen(true)} 
          title={title}
          actions={headerActions}
        />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
