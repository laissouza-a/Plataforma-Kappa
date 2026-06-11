import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { auth as authService } from '../../../services/api';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Preencha e-mail e senha.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const { access_token, user } = await authService.login(email, password);
      login(access_token, user);
      navigate('/dashboard');
    } catch {
      setError('Credenciais inválidas. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-bg mesh-cyber flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Marca */}
        <div className="text-center mb-8">
          <h1 className="font-orbitron text-4xl font-black tracking-widest text-cyber-cyan drop-shadow-[0_0_20px_rgba(0,219,233,0.6)]">
            KAPPA
          </h1>
          <p className="font-space-mono text-xs text-neutral-500 tracking-[0.3em] mt-1 uppercase">
            Platform // v1.0
          </p>
        </div>

        {/* Card glassmorphism */}
        <div className="bg-white/5 backdrop-blur-md border border-cyber-cyan/20 rounded-sm p-8 shadow-[0_0_40px_rgba(0,219,233,0.07)]">

          <h2 className="font-space-mono text-sm font-bold text-white tracking-widest mb-1">
            ACCESS TERMINAL
          </h2>
          <p className="text-neutral-500 text-xs font-mono mb-8">
            Insira suas credenciais para acessar a plataforma.
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="operative@domain.io"
                autoComplete="email"
                className="bg-cyber-black/80 border border-neutral-700 rounded-sm px-4 py-3 text-sm text-white font-mono placeholder:text-neutral-600 focus:outline-none focus:border-cyber-cyan transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className="bg-cyber-black/80 border border-neutral-700 rounded-sm px-4 py-3 text-sm text-white font-mono placeholder:text-neutral-600 focus:outline-none focus:border-cyber-cyan transition-colors duration-200"
              />
            </div>

            {error && (
              <p className="font-mono text-xs text-cyber-red border border-cyber-red/30 bg-cyber-red/5 px-3 py-2 rounded-sm">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3 bg-cyber-cyan text-black font-orbitron font-bold text-sm tracking-widest rounded-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,219,233,0.45)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  AUTENTICANDO...
                </>
              ) : (
                'ACESSAR PLATAFORMA'
              )}
            </button>

          </form>
        </div>

        <p className="text-center font-mono text-xs text-neutral-700 mt-6">
          KAPPA PLATFORM &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
