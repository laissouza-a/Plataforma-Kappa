import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './features/auth/pages/LoginPage';
import CadastroPage from './features/auth/pages/CadastroPage';
import StudentDashboard from './features/student/pages/StudentDashboard';
import SubmissionModule from './features/student/pages/SubmissionModule';

// ─── Placeholder (substituído na fase 5) ─────────────────────────────────────

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
        { label: 'Cadastro', path: '/cadastro' },
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
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
