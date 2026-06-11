import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const NAV_ITEMS = [
  { icon: 'terminal', label: 'Terminal', tab: 'terminal' },
  { icon: 'view_module', label: 'Modules', tab: 'modules' },
  { icon: 'leaderboard', label: 'Ranking', tab: 'ranking' },
  { icon: 'military_tech', label: 'Badges', tab: 'badges' },
  { icon: 'settings', label: 'Settings', tab: 'settings' },
];

export default function StudentSidebar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { logout } = useAuth();
  const activeTab = searchParams.get('tab') ?? 'terminal';

  return (
    <aside className="bg-cyber-surface text-cyber-cyan font-mono text-xs w-20 flex-none border-r border-neutral-800 flex flex-col items-center py-4 hidden md:flex justify-between h-full">
      <div className="flex flex-col w-full gap-2">
        {NAV_ITEMS.map(({ icon, label, tab }) => {
          const active = activeTab === tab;
          return (
            <button
              key={icon}
              onClick={() => navigate(tab === 'terminal' ? '/dashboard' : `/dashboard?tab=${tab}`)}
              className={`flex flex-col items-center justify-center w-full py-4 cursor-pointer active:scale-95 transition-all duration-200 ${
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
          className="flex flex-col items-center justify-center text-neutral-400 w-full py-4 cursor-pointer hover:bg-neutral-800 hover:text-cyber-cyan transition-all duration-200 active:scale-95"
        >
          <span className="material-symbols-outlined mb-1">logout</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
