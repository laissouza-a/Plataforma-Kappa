import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const NAV_ITEMS = [
  { icon: 'terminal', label: 'Terminal', path: '/dashboard' },
  { icon: 'view_module', label: 'Modules', path: '/dashboard' },
  { icon: 'leaderboard', label: 'Ranking', path: '/dashboard' },
  { icon: 'military_tech', label: 'Badges', path: '/dashboard' },
  { icon: 'settings', label: 'Settings', path: '/dashboard' },
];

export default function StudentSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <aside className="bg-cyber-surface text-cyber-cyan font-mono text-xs w-20 flex-none border-r border-neutral-800 flex flex-col items-center py-4 hidden md:flex justify-between h-full">
      <div className="flex flex-col w-full gap-2">
        {NAV_ITEMS.map(({ icon, label, path }) => {
          const active = location.pathname === path && icon === 'terminal';
          return (
            <button
              key={icon}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center justify-center w-full py-4 active:scale-95 transition-all duration-200 ${
                active
                  ? 'bg-neutral-800 text-cyber-cyan border-r-2 border-cyber-cyan'
                  : 'text-neutral-400 hover:bg-neutral-800 hover:text-cyber-cyan'
              }`}
            >
              <span className="material-symbols-outlined mb-1">{icon}</span>
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      <div className="w-full">
        <button
          onClick={logout}
          className="flex flex-col items-center justify-center text-neutral-400 w-full py-4 hover:bg-neutral-800 hover:text-cyber-cyan transition-all duration-200 active:scale-95"
        >
          <span className="material-symbols-outlined mb-1">logout</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
