import React from 'react';

export default function MissionDetails({ challenge }) {
  return (
    <section className="w-full h-full bg-cyber-bg flex flex-col overflow-y-auto text-left">
      <div className="p-6 lg:p-10 flex flex-col gap-6 h-full">
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] leading-9 font-bold text-white tracking-tight">{challenge.title}</h1>
          <span className="text-xs font-mono px-2 py-1 rounded bg-cyber-yellow/10 text-cyber-yellow border border-cyber-yellow/20">
            {challenge.difficulty}
          </span>
        </div>
        
        <div className="text-neutral-300 text-base leading-relaxed">
          <p>{challenge.description}</p>
          <p className="mt-4">{challenge.context}</p>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">Objectives:</h3>
          <ul className="list-disc pl-5 space-y-2 text-neutral-300">
            {challenge.objectives.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-8">
          <div className="flex items-center gap-2 p-4 bg-cyber-black border border-neutral-800 rounded">
            <span className="material-symbols-outlined text-cyber-green">military_tech</span>
            <span className="text-xs font-mono text-cyber-green drop-shadow-[0_0_8px_rgba(42,229,0,0.5)]">
              +{challenge.xpReward} XP Reward
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}