import React from 'react';

export default function RecentBadgesWidget() {
  return (
    <div className="bg-cyber-black border border-neutral-800">
      <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-purple-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          <h3 className="font-mono text-xs font-bold text-white tracking-wider">RECENT_BADGES</h3>
        </div>
        <a className="font-mono text-neutral-500 hover:text-cyber-cyan transition-colors text-[10px] cursor-pointer">VIEW ALL</a>
      </div>
      <div className="p-4 grid grid-cols-3 gap-3">
        <div className="aspect-square bg-neutral-900 border border-neutral-800 flex items-center justify-center relative cursor-help">
          <span className="material-symbols-outlined text-2xl text-cyber-green drop-shadow-[0_0_8px_rgba(42,229,0,0.5)]">terminal</span>
        </div>
        <div className="aspect-square bg-neutral-900 border border-neutral-800 flex items-center justify-center relative cursor-help">
          <span className="material-symbols-outlined text-2xl text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">bug_report</span>
        </div>
        <div className="aspect-square bg-neutral-900 border border-neutral-800 flex items-center justify-center relative cursor-help">
          <span className="material-symbols-outlined text-2xl text-cyber-yellow drop-shadow-[0_0_8px_rgba(255,240,31,0.5)]">local_fire_department</span>
        </div>
      </div>
    </div>
  );
}