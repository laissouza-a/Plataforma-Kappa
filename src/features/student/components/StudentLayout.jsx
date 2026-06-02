import React from 'react';
import Header from './StudentHeader';
import Sidebar from './StudentSidebar';

export default function StudentLayout({ children, onNavigate }) {
  return (
    <div className="bg-cyber-bg text-neutral-200 h-screen w-screen overflow-hidden flex flex-col font-sans">
      <Header onNavigate={onNavigate} />
      <div className="flex-1 flex overflow-hidden w-full">
        <Sidebar onNavigate={onNavigate} />
        {/* A área principal onde o conteúdo das páginas será renderizado */}
        <main className="flex-1 h-full overflow-hidden flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}