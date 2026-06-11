import React from 'react';
import Header from './StudentHeader';
import Sidebar from './StudentSidebar';

export default function StudentLayout({ children }) {
  return (
    <div className="bg-cyber-bg text-neutral-200 h-full w-full overflow-hidden flex flex-col font-sans">
      <Header />
      <div className="flex-1 flex overflow-hidden w-full">
        <Sidebar />
        <main className="flex-1 h-full overflow-hidden flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
