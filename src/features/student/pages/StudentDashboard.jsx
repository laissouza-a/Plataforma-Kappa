import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import Layout from '../components/StudentLayout';
import TrackModules from '../components/TrackModules';
import LeaderboardWidget from '../components/LeaderBoardWidget';
import RecentBadgesWidget from '../components/RecentBadgesWidget';

export default function StudentDashboard() {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="flex-1 flex flex-col lg:flex-row w-full h-full overflow-hidden">

        <div className="flex-1 p-6 lg:p-10 overflow-y-auto w-full">

          <section className="mb-10 mesh-cyber border border-neutral-800 rounded-lg p-8 relative overflow-hidden flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
            <div className="relative z-10 flex items-center gap-6 w-full">
              <div className="w-20 h-20 rounded border-2 border-cyber-cyan/50 p-1 bg-neutral-900/80 backdrop-blur-md flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,219,233,0.3)]">
                <span className="material-symbols-outlined text-[48px] text-cyber-cyan" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-1 font-mono drop-shadow-md">
                  {user?.username ?? '—'}
                </h1>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-cyber-yellow text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-mono text-xs text-cyber-yellow tracking-widest drop-shadow-md">NOVICE CODER</span>
                </div>
                <p className="text-sm text-neutral-300 drop-shadow-md">Current objective: Complete Starter Pack modules.</p>
              </div>
            </div>
          </section>

          <TrackModules />
        </div>

        <aside className="w-full lg:w-80 shrink-0 p-6 lg:border-l border-neutral-800 bg-cyber-bg/50 flex flex-col gap-6 overflow-y-auto">
          <LeaderboardWidget />
          <RecentBadgesWidget />
        </aside>

      </div>
    </Layout>
  );
}
