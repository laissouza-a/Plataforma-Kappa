import React from 'react';

export default function CodeEditor({ challenge, code, setCode, onSubmit }) {
  return (
    <section className="w-full h-full bg-cyber-black flex flex-col">
      <div className="h-12 border-b border-neutral-800 flex items-center justify-between px-4 bg-cyber-surface">
        <div className="flex items-center gap-2 text-neutral-400">
          <span className="material-symbols-outlined text-sm">code</span>
          <span className="text-sm font-mono">{challenge.fileName}</span>
        </div>
        <div className="text-xs font-mono bg-cyber-bg border border-neutral-800 text-white px-3 py-1 rounded">
          {challenge.language}
        </div>
      </div>

      <div className="flex-1 relative flex bg-[#1e1e1e]">
        <div className="w-12 bg-cyber-black/40 text-right pr-3 pt-4 text-neutral-600 select-none font-mono text-sm border-r border-neutral-800/50">
          1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 bg-transparent text-[#d4d4d4] font-mono text-sm p-4 outline-none resize-none leading-relaxed"
          spellCheck="false"
        />
      </div>

      {/*Estático */}
      <div className="bg-cyber-black border-t border-neutral-800 flex flex-col">
        <div className="h-10 flex items-center px-4 border-b border-neutral-800 bg-cyber-surface/50">
          <span className="text-xs font-mono text-cyber-cyan border-b-2 border-cyber-cyan pb-1">TERMINAL</span>
        </div>
        <div className="p-4 font-mono text-xs text-neutral-400">
          <div className="text-cyber-green">System initialized... Ready for sandbox input.</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-cyber-cyan">cyber_user@node-01:~$</span>
            <span className="w-2 h-4 bg-cyber-cyan animate-pulse"></span>
          </div>
        </div>
        <div className="p-4 border-t border-neutral-800 bg-cyber-surface/30 flex justify-end">
          <button 
            onClick={onSubmit}
            className="bg-cyber-cyan text-black font-mono text-xs font-bold px-6 py-2 rounded flex items-center gap-2 hover:shadow-[0_0_15px_rgba(0,219,233,0.4)] transition-all"
          >
            <span className="material-symbols-outlined text-sm font-bold">send</span>
            SUBMIT CODE
          </button>
        </div>
      </div>
    </section>
  );
}