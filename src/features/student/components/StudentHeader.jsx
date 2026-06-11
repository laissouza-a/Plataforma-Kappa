import React from 'react';
import { useNavigate } from 'react-router-dom';
import { challengesData } from '../../../challengesData';
import { useAuth } from '../../../context/AuthContext';

export default function StudentHeader() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <header className="flex-none h-16 bg-cyber-bg border-b border-neutral-800 flex justify-between items-center px-6 z-50">
      <div className="flex items-center gap-6">
        <div
          className="text-xl font-bold text-cyber-cyan tracking-tighter cursor-pointer"
          onClick={() => navigate('/dashboard')}
        >
          Kappa-App
        </div>
        <div className="relative w-64 hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[18px]">search</span>
          <input
            className="w-full bg-cyber-surface border border-neutral-800 rounded py-1.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyber-cyan transition-colors placeholder:text-neutral-500 font-mono"
            placeholder="Search modules..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <select
          onChange={(e) => {
            if (e.target.value !== '') navigate(`/missao/${e.target.value}`);
          }}
          defaultValue=""
          className="bg-cyber-surface border border-neutral-800 text-sm font-mono text-cyber-cyan px-3 py-1 rounded outline-none focus:border-cyber-cyan cursor-pointer hidden md:block"
        >
          <option value="" disabled>Quick Jump...</option>
          {challengesData.map((challenge, index) => (
            <option key={challenge.id} value={index}>{challenge.title}</option>
          ))}
        </select>

        <button className="text-neutral-400 hover:text-cyber-cyan transition-colors hidden md:block">
          <span className="material-symbols-outlined">notifications</span>
        </button>

        <div className="flex items-center gap-2 bg-neutral-800/50 border border-neutral-700 px-3 py-1.5 rounded-full cursor-pointer hover:border-cyber-cyan transition-colors ml-2">
          <span className="material-symbols-outlined text-cyber-cyan text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            person
          </span>
          <span className="text-sm font-mono text-neutral-300 hidden sm:block">
            {user?.username ?? '—'}
          </span>
        </div>
      </div>
    </header>
  );
}
