import { useMemo, useState } from 'react';

const BADGES_MOCK = [
  {
    id: 'terminal-init',
    icon: 'terminal',
    title: 'Terminal Init',
    description: 'Acessou a plataforma e iniciou sua jornada.',
    category: 'CORE',
    earned: true,
    earnedAt: '11 JUN 2026',
    color: 'text-cyber-green',
  },
  {
    id: 'bug-hunter',
    icon: 'bug_report',
    title: 'Bug Hunter',
    description: 'Encontrou e corrigiu o primeiro erro de lógica.',
    category: 'DEBUG',
    earned: true,
    earnedAt: '11 JUN 2026',
    color: 'text-purple-400',
  },
  {
    id: 'hot-streak',
    icon: 'local_fire_department',
    title: 'Hot Streak',
    description: 'Manteve uma sequência ativa de estudos.',
    category: 'FOCUS',
    earned: true,
    earnedAt: '10 JUN 2026',
    color: 'text-cyber-yellow',
  },
  {
    id: 'control-flow',
    icon: 'account_tree',
    title: 'Flow Controller',
    description: 'Dominou condicionais e repetições em uma missão.',
    category: 'MODULE',
    earned: false,
    requirement: 'Concluir 02_Control_Flow',
    color: 'text-cyber-cyan',
  },
  {
    id: 'top-50',
    icon: 'leaderboard',
    title: 'Top 50 Signal',
    description: 'Entrou no top 50 do ranking global.',
    category: 'RANKING',
    earned: true,
    earnedAt: '09 JUN 2026',
    color: 'text-cyber-cyan',
  },
  {
    id: 'boss-clear',
    icon: 'skull',
    title: 'Boss Clear',
    description: 'Finalizou um desafio BOSS sem submissão falha.',
    category: 'BOSS',
    earned: false,
    requirement: 'Finalizar 04_BOSS_Challenge',
    color: 'text-cyber-red',
  },
  {
    id: 'clean-code',
    icon: 'verified',
    title: 'Clean Code',
    description: 'Enviou uma solução aprovada com alta qualidade.',
    category: 'QUALITY',
    earned: false,
    requirement: 'Obter avaliação perfeita',
    color: 'text-cyber-green',
  },
  {
    id: 'night-ops',
    icon: 'dark_mode',
    title: 'Night Ops',
    description: 'Completou uma missão no modo concentrado.',
    category: 'SPECIAL',
    earned: false,
    requirement: 'Completar uma missão especial',
    color: 'text-purple-400',
  },
];

const FILTERS = [
  { label: 'Todos', value: 'all' },
  { label: 'Adquiridos', value: 'earned' },
  { label: 'Não adquiridos', value: 'locked' },
];

export default function BadgesPanel() {
  const [filter, setFilter] = useState('all');

  const visibleBadges = useMemo(() => {
    if (filter === 'earned') return BADGES_MOCK.filter((badge) => badge.earned);
    if (filter === 'locked') return BADGES_MOCK.filter((badge) => !badge.earned);
    return BADGES_MOCK;
  }, [filter]);

  const earnedCount = BADGES_MOCK.filter((badge) => badge.earned).length;

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-purple-400" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide font-mono">BADGES_ARCHIVE</h2>
            <p className="font-mono text-xs text-neutral-500">
              {earnedCount}/{BADGES_MOCK.length} badges desbloqueados no perfil.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`px-3 py-2 border font-mono text-[10px] tracking-widest cursor-pointer transition-all ${filter === item.value
                  ? 'bg-cyber-cyan text-black border-cyber-cyan shadow-[0_0_16px_rgba(0,219,233,0.22)]'
                  : 'bg-cyber-black text-neutral-400 border-neutral-800 hover:text-cyber-cyan hover:border-cyber-cyan/40'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mesh-cyber border border-cyber-cyan/20 p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-cyber-black/80 border border-neutral-800 px-4 py-3">
          <p className="font-mono text-[10px] text-neutral-500">ADQUIRIDOS</p>
          <p className="font-orbitron text-2xl text-cyber-cyan font-black">{earnedCount}</p>
        </div>
        <div className="bg-cyber-black/80 border border-neutral-800 px-4 py-3">
          <p className="font-mono text-[10px] text-neutral-500">PENDENTES</p>
          <p className="font-orbitron text-2xl text-neutral-300 font-black">{BADGES_MOCK.length - earnedCount}</p>
        </div>
        <div className="bg-cyber-black/80 border border-neutral-800 px-4 py-3">
          <p className="font-mono text-[10px] text-neutral-500">PROGRESSO</p>
          <p className="font-orbitron text-2xl text-cyber-yellow font-black">
            {Math.round((earnedCount / BADGES_MOCK.length) * 100)}%
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {visibleBadges.map((badge) => (
          <article
            key={badge.id}
            className={`border p-5 relative overflow-hidden transition-all ${badge.earned
                ? 'bg-cyber-black border-cyber-cyan/35 shadow-[0_0_24px_rgba(0,219,233,0.08)]'
                : 'bg-neutral-950/70 border-neutral-900 opacity-55 grayscale'
              }`}
          >
            <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full ${badge.earned ? 'bg-cyber-cyan/10' : 'bg-neutral-800/40'}`} />

            <div className="flex items-start justify-between gap-3 mb-5">
              <div
                className={`w-12 h-12 border flex items-center justify-center ${badge.earned ? 'border-current bg-white/5' : 'border-neutral-800 bg-neutral-900'
                  } ${badge.earned ? badge.color : 'text-neutral-700'}`}
              >
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: badge.earned ? "'FILL' 1" : "'FILL' 0" }}>
                  {badge.earned ? badge.icon : 'lock'}
                </span>
              </div>
              <span
                className={`font-mono text-[9px] px-2 py-1 border ${badge.earned
                    ? 'text-cyber-green border-cyber-green/30 bg-cyber-green/5'
                    : 'text-neutral-600 border-neutral-800 bg-neutral-900'
                  }`}
              >
                {badge.earned ? 'ADQUIRIDO' : 'BLOQUEADO'}
              </span>
            </div>

            <p className="font-mono text-[10px] text-neutral-500 tracking-widest">{badge.category}</p>
            <h3 className={`font-mono text-base font-bold mt-1 ${badge.earned ? 'text-white' : 'text-neutral-500'}`}>
              {badge.title}
            </h3>
            <p className="text-xs text-neutral-500 mt-3 min-h-12">{badge.description}</p>

            <div className="mt-5 pt-4 border-t border-neutral-800">
              <p className={`font-mono text-[10px] ${badge.earned ? 'text-cyber-cyan' : 'text-neutral-600'}`}>
                {badge.earned ? `UNLOCKED // ${badge.earnedAt}` : `REQ // ${badge.requirement}`}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
