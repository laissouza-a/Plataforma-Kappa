import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import StudentDashboard from './features/student/pages/StudentDashboard';
import SubmissionModule from './features/student/pages/SubmissionModule';

// ─── Placeholders (substituídos nas fases 2 e 5) ─────────────────────────────

function LoginMock() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleMockLogin = () => {
    login('mock-jwt-token', {
      id: 'a1b2c3d4-0000-0000-0000-000000000001',
      username: 'Antônio Eduardo',
      perfil: 'ALUNO',
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-cyber-bg flex items-center justify-center">
      <div className="text-center">
        <p className="text-neutral-400 font-mono mb-6">Tela de Login — Fase 2</p>
        <button
          onClick={handleMockLogin}
          className="px-6 py-2 bg-cyber-cyan text-black font-mono font-bold rounded hover:shadow-[0_0_15px_rgba(0,219,233,0.4)] transition-all"
        >
          Entrar (mock)
        </button>
      </div>
    </div>
  );
}

function AdminMock() {
  return (
    <div className="min-h-screen bg-cyber-bg flex items-center justify-center">
      <p className="text-neutral-400 font-mono">Dashboard do Admin — Fase 5</p>
    </div>
  );
}

// ─── Barra de navegação de desenvolvimento ───────────────────────────────────

function DevNav() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="bg-slate-900 border-b border-slate-700 text-white p-3 flex gap-3 justify-center items-center flex-none text-sm">
      <span className="font-bold font-mono text-slate-400 mr-2">DEV:</span>
      {[
        { label: 'Login', path: '/login' },
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Missão 0', path: '/missao/0' },
        { label: 'Missão 1', path: '/missao/1' },
        { label: 'Admin', path: '/admin' },
      ].map(({ label, path }) => (
        <button
          key={path}
          onClick={() => navigate(path)}
          className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 transition-colors font-mono"
        >
          {label}
        </button>
      ))}
      <button
        onClick={logout}
        className="px-3 py-1 rounded bg-red-900 hover:bg-red-800 transition-colors font-mono ml-4"
      >
        Logout
      </button>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <DevNav />
      <div className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/login" element={<LoginMock />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/missao/:missionId" element={<SubmissionModule />} />
            <Route path="/admin" element={<AdminMock />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
