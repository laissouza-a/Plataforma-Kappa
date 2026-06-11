import axios from 'axios';
import { challengesData } from '../challengesData';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' },
});

// Injeta Bearer token em toda requisição autenticada
client.interceptors.request.use((config) => {
  try {
    const saved = localStorage.getItem('kappa_auth');
    const token = saved ? JSON.parse(saved).token : null;
    if (token) config.headers.Authorization = `Bearer ${token}`;
  } catch {
    // localStorage indisponível — ignora
  }
  return config;
});

// Dados mock que espelham o shape exato dos DTOs do backend.
// Quando a integração real for ligada, só o corpo de cada função muda.

const MOCK_DELAY = 600;
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const MOCK_DASHBOARD = {
  aluno_id: 'a1b2c3d4-0000-0000-0000-000000000001',
  username: 'Antônio Eduardo',
  nivel: 1,
  xp_total: 4200,
  xp_no_nivel: 4200,
  xp_para_proximo_nivel: 800,
  xp_semana: 1200,
  dias_ofensiva: 7,
  titulo_rank: 'NOVICE CODER',
  objetivo_atual: 'Current objective: Complete Starter Pack modules.',
  missoes: [
    {
      missao_id: '0',
      titulo: '02_Control_Flow',
      dificuldade: 'MEDIUM',
      progresso_percentual: 45,
      bloqueada: false,
      motivo_bloqueio: null,
      submissao_id: 'sub-001',
      xp_recompensa: 100,
    },
    {
      missao_id: '1',
      titulo: '01_Crypto_Init',
      dificuldade: 'EASY',
      progresso_percentual: 100,
      bloqueada: false,
      motivo_bloqueio: null,
      submissao_id: 'sub-002',
      xp_recompensa: 50,
    },
    {
      missao_id: '2',
      titulo: '03_Functions',
      dificuldade: 'MEDIUM',
      progresso_percentual: 0,
      bloqueada: true,
      motivo_bloqueio: 'REQUIRES PREVIOUS MODULE',
      submissao_id: null,
      xp_recompensa: 150,
    },
    {
      missao_id: '3',
      titulo: '04_BOSS_Challenge',
      dificuldade: 'BOSS',
      progresso_percentual: 0,
      bloqueada: true,
      motivo_bloqueio: 'REQUIRES PREVIOUS MODULE',
      submissao_id: null,
      xp_recompensa: 500,
    },
  ],
  posicao_ranking: 42,
  ranking_top: [
    { aluno_id: 'r1', username: 'Ghost_Protocol', xp_total: 98000, posicao: 1 },
    { aluno_id: 'r2', username: 'ShadowByte', xp_total: 87500, posicao: 2 },
    { aluno_id: 'r3', username: 'NullPointer', xp_total: 74200, posicao: 3 },
    { aluno_id: 'r4', username: 'xX_R00T_Xx', xp_total: 61000, posicao: 4 },
    { aluno_id: 'r5', username: 'Antônio Eduardo', xp_total: 4200, posicao: 42 },
  ],
};

// ─── Auth ────────────────────────────────────────────────────────────────────

export const auth = {
  // POST /api/v1/auth/login  (rota ainda não existe no backend)
  async login(email, _password) {
    await delay(MOCK_DELAY);
    return {
      access_token: 'mock-jwt-token',
      user: {
        id: MOCK_DASHBOARD.aluno_id,
        username: MOCK_DASHBOARD.username,
        email,
        perfil: 'ALUNO',
      },
    };
  },
};

// ─── Alunos ──────────────────────────────────────────────────────────────────

export const alunos = {
  // GET /api/v1/alunos/{alunoId}/dashboard
  async getDashboard(alunoId, trilhaId) {
    await delay(MOCK_DELAY);
    void alunoId;
    void trilhaId;
    return MOCK_DASHBOARD;
  },
};

// ─── Missões ─────────────────────────────────────────────────────────────────

export const missoes = {
  // Retorna os dados de uma missão pelo índice (shape de challengesData +
  // campos do MissaoResponse do backend). Fase 3 substituirá por GET real.
  async getById(missionId) {
    await delay(MOCK_DELAY);
    const challenge = challengesData[Number(missionId)] ?? challengesData[0];
    return challenge;
  },

  // POST /api/v1/missoes/{missaoId}/submeter
  async submit(missaoId, alunoId, codigoFonte, submissaoId = null) {
    await delay(MOCK_DELAY * 2);
    void missaoId;
    void alunoId;
    void submissaoId;

    if (!codigoFonte.trim()) {
      return {
        submissao_id: 'sub-new',
        status: 'FALHA_COMPILACAO',
        xp_ganho: 0,
        level_up: false,
        novo_nivel: null,
        mensagem: 'Código vazio — falha de compilação simulada.',
      };
    }

    if (codigoFonte.includes('FAIL_TEST')) {
      return {
        submissao_id: 'sub-new',
        status: 'FALHA_TESTE',
        xp_ganho: 0,
        level_up: false,
        novo_nivel: null,
        mensagem: 'Testes falharam — lógica incorreta.',
      };
    }

    return {
      submissao_id: 'sub-new',
      status: 'FINALIZADA',
      xp_ganho: 100,
      level_up: false,
      novo_nivel: null,
      mensagem: 'Todos os testes passaram. +100 XP.',
    };
  },
};

export default client;
