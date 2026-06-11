const RANKING_MOCK = [
  {
    posicao: 1,
    username: 'Ghost_Protocol',
    titulo: 'ELITE HACKER',
    xp_total: 98000,
    xp_semana: 8200,
    missoes: 48,
    status: 'ONLINE',
  },
  {
    posicao: 2,
    username: 'ShadowByte',
    titulo: 'SCRIPT MASTER',
    xp_total: 87500,
    xp_semana: 7100,
    missoes: 44,
    status: 'ONLINE',
  },
  {
    posicao: 3,
    username: 'NullPointer',
    titulo: 'DEBUG SAINT',
    xp_total: 74200,
    xp_semana: 6400,
    missoes: 39,
    status: 'IDLE',
  },
  {
    posicao: 4,
    username: 'xX_R00T_Xx',
    titulo: 'STACK RUNNER',
    xp_total: 61000,
    xp_semana: 5200,
    missoes: 35,
    status: 'OFFLINE',
  },
  {
    posicao: 42,
    username: 'Antônio Eduardo',
    titulo: 'NOVICE CODER',
    xp_total: 4200,
    xp_semana: 1200,
    missoes: 6,
    status: 'ONLINE',
    current: true,
  },
];

const podiumStyle = {
  1: 'border-cyber-yellow text-cyber-yellow shadow-[0_0_22px_rgba(255,240,31,0.16)]',
  2: 'border-neutral-500 text-neutral-200',
  3: 'border-cyber-orange text-cyber-orange',
};

function formatXp(value) {
  return value >= 1000 ? `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k` : value;
}

export default function RankingPanel({ currentUsername }) {
  const ranking = RANKING_MOCK.map((player) => ({
    ...player,
    current: player.current || player.username === currentUsername,
  }));
  const podium = ranking.slice(0, 3);
  const currentPlayer = ranking.find((player) => player.current);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-3 border-b border-neutral-800 pb-2">
        <span className="material-symbols-outlined text-cyber-yellow" style={{ fontVariationSettings: "'FILL' 1" }}>leaderboard</span>
        <div>
          <h2 className="text-lg font-bold text-white tracking-wide font-mono">RANKING_ARENA</h2>
          <p className="font-mono text-xs text-neutral-500">Classificação geral dos operadores da plataforma.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {podium.map((player) => (
          <article
            key={player.posicao}
            className={`bg-cyber-black border ${podiumStyle[player.posicao]} p-5 relative overflow-hidden`}
          >
            <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-current opacity-5" />
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="font-orbitron text-3xl font-black">#{player.posicao}</p>
                <p className="font-mono text-xs text-neutral-500 mt-1">{player.titulo}</p>
              </div>
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
            <h3 className="font-mono text-white text-lg font-bold truncate">{player.username}</h3>
            <div className="grid grid-cols-1 gap-3 mt-5">
              <div className="bg-neutral-950/70 border border-neutral-800 p-3">
                <p className="font-mono text-[10px] text-neutral-500">TOTAL_XP</p>
                <p className="font-mono text-cyber-cyan text-sm">{formatXp(player.xp_total)}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {currentPlayer && (
        <div className="mesh-cyber border border-cyber-cyan/30 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] text-cyber-cyan tracking-[0.3em]">YOUR_POSITION</p>
            <h3 className="font-orbitron text-3xl text-white font-black mt-1">#{currentPlayer.posicao}</h3>
            <p className="text-sm text-neutral-300 mt-1">
              {currentPlayer.username} // {currentPlayer.titulo}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
            <div className="bg-cyber-black/80 border border-neutral-800 px-4 py-3">
              <p className="font-mono text-[10px] text-neutral-500">XP_TOTAL</p>
              <p className="font-mono text-cyber-cyan">{formatXp(currentPlayer.xp_total)}</p>
            </div>
            <div className="bg-cyber-black/80 border border-neutral-800 px-4 py-3">
              <p className="font-mono text-[10px] text-neutral-500">XP_SEMANA</p>
              <p className="font-mono text-cyber-green">+{formatXp(currentPlayer.xp_semana)}</p>
            </div>
            <div className="bg-cyber-black/80 border border-neutral-800 px-4 py-3">
              <p className="font-mono text-[10px] text-neutral-500">MISSÕES</p>
              <p className="font-mono text-cyber-yellow">{currentPlayer.missoes}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-cyber-black border border-neutral-800 overflow-x-auto">
        <div className="min-w-[680px]">
          <div className="grid grid-cols-[64px_1fr_120px_120px_100px] gap-3 px-4 py-3 border-b border-neutral-800 font-mono text-[10px] text-neutral-500 tracking-widest">
            <span>RANK</span>
            <span>OPERADOR</span>
            <span className="text-right">XP</span>
            <span className="text-right">MISSÕES</span>
            <span className="text-right">STATUS</span>
          </div>

          {ranking.map((player) => (
            <div
              key={player.posicao}
              className={`grid grid-cols-[64px_1fr_120px_120px_100px] gap-3 px-4 py-4 border-b border-neutral-800 last:border-b-0 items-center ${
                player.current ? 'bg-cyber-cyan/5 border-l-2 border-l-cyber-cyan' : 'hover:bg-white/[0.03]'
              }`}
            >
              <span className={`font-orbitron text-sm ${player.current ? 'text-cyber-cyan' : 'text-neutral-500'}`}>
                #{player.posicao}
              </span>
              <div className="min-w-0">
                <p className={`font-mono text-sm truncate ${player.current ? 'text-cyber-cyan font-bold' : 'text-neutral-200'}`}>
                  {player.username}
                </p>
                <p className="font-mono text-[10px] text-neutral-500 truncate">{player.titulo}</p>
              </div>
              <span className="font-mono text-cyber-yellow text-right">{formatXp(player.xp_total)}</span>
              <span className="font-mono text-neutral-300 text-right">{player.missoes}</span>
              <span className="font-mono text-[10px] text-cyber-green text-right">{player.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
