import React from 'react';

export default function StudentSidebar() {
  return (
    <aside className="bg-cyber-surface text-cyber-cyan font-mono text-xs w-20 flex-none border-r border-neutral-800 flex flex-col items-center py-4 hidden md:flex justify-between h-full">
      <div className="flex flex-col w-full gap-2">
        <a className="flex flex-col items-center justify-center bg-neutral-800 text-cyber-cyan border-r-2 border-cyber-cyan w-full py-4 active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined mb-1">terminal</span>
          <span>Terminal</span>
        </a>
        <a className="flex flex-col items-center justify-center text-neutral-400 w-full py-4 hover:bg-neutral-800 hover:text-cyber-cyan transition-all duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined mb-1">view_module</span>
          <span>Modules</span>
        </a>
        <a className="flex flex-col items-center justify-center text-neutral-400 w-full py-4 hover:bg-neutral-800 hover:text-cyber-cyan transition-all duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined mb-1">leaderboard</span>
          <span>Leaderboard</span>
        </a>
        <a className="flex flex-col items-center justify-center text-neutral-400 w-full py-4 hover:bg-neutral-800 hover:text-cyber-cyan transition-all duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined mb-1">military_tech</span>
          <span>Badges</span>
        </a>
        <a className="flex flex-col items-center justify-center text-neutral-400 w-full py-4 hover:bg-neutral-800 hover:text-cyber-cyan transition-all duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined mb-1">settings</span>
          <span>Settings</span>
        </a>
      </div>
      <div className="w-full">
        <a className="flex flex-col items-center justify-center text-neutral-400 w-full py-4 hover:bg-neutral-800 hover:text-cyber-cyan transition-all duration-200 active:scale-95" href="#">
          <span className="material-symbols-outlined mb-1">logout</span>
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}