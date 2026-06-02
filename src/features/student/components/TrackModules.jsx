import React from 'react';

export default function TrackModules({ onNavigate }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6 border-b border-neutral-800 pb-2">
        <span className="material-symbols-outlined text-cyber-cyan">folder_special</span>
        <h2 className="text-lg font-bold text-white tracking-wide font-mono">STARTER_PACK_TRACK</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Module Card 1 (Completed) */}
        <div className="bg-cyber-black border border-neutral-800 flex flex-col relative group overflow-hidden">
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-cyber-green/10 flex items-center justify-center border border-cyber-green/30">
                <span className="material-symbols-outlined text-cyber-green">data_object</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-1 bg-cyber-green/10 text-cyber-green border border-cyber-green/20 rounded-full">EASY</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-mono">01_Variables_&_Types</h3>
            <p className="text-sm text-neutral-400 mb-6 flex-1">Establish base parameters. Learn to store, retrieve, and manipulate primitive data structures.</p>
            <button 
              onClick={() => onNavigate('submission', { missionId: 1 })}
              className="w-full py-2 border-[1.5px] border-cyber-green text-cyber-green font-mono text-xs hover:bg-cyber-green/10 transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">replay</span> REVISIT
            </button>
          </div>
        </div>

        {/* Module Card 2 (In Progress) */}
        <div className="bg-cyber-black border border-cyber-cyan flex flex-col relative group overflow-hidden shadow-[0_0_15px_rgba(0,219,233,0.1)]">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-cyan shadow-[0_0_12px_rgba(0,219,233,0.8)]"></div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-cyber-cyan/10 flex items-center justify-center border border-cyber-cyan/30">
                <span className="material-symbols-outlined text-cyber-cyan">account_tree</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-1 bg-cyber-yellow/10 text-cyber-yellow border border-cyber-yellow/20 rounded-full">MEDIUM</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-mono">02_Control_Flow</h3>
            <p className="text-sm text-neutral-400 mb-6 flex-1">Master execution paths. Implement conditional logic and iterative loops to create dynamic scripts.</p>
            
            <button 
              onClick={() => onNavigate('submission', { missionId: 0 })}
              className="w-full py-2 bg-cyber-cyan text-black font-mono text-xs font-bold hover:shadow-[0_0_15px_rgba(0,219,233,0.4)] transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">play_arrow</span> RESUME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}