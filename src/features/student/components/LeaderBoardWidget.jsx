import React from 'react';

export default function LeaderboardWidget() {
  return (
    <div className="bg-cyber-black border border-neutral-800">
      <div className="p-4 border-b border-neutral-800 flex items-center gap-2">
        <span className="material-symbols-outlined text-cyber-yellow text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
        <h3 className="font-mono text-xs font-bold text-white tracking-wider">GLOBAL_LEADERBOARD</h3>
      </div>
      <div className="p-0">
        <ul className="flex flex-col">
          <li className="flex items-center justify-between p-3 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="font-mono text-neutral-500 w-4 text-right">1</span>
              <span className="text-sm text-neutral-300">Ghost_Protocol</span>
            </div>
            <span className="font-mono text-cyber-cyan text-xs">98k</span>
          </li>
          <li className="flex items-center justify-between p-3 bg-cyber-cyan/5 border-l-2 border-cyber-cyan">
            <div className="flex items-center gap-3">
              <span className="font-mono text-cyber-cyan w-4 text-right">42</span>
              <span className="text-sm font-bold text-cyber-cyan">Antônio Eduardo</span>
            </div>
            <span className="font-mono text-cyber-yellow text-xs">4.2k</span>
          </li>
        </ul>
      </div>
    </div>
  );
}