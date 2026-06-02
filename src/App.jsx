import { useState } from 'react';

import StudentDashboard from './features/student/pages/StudentDashboard';
import SubmissionModule from './features/student/pages/SubmissionModule';

// TO DO: no futuro, quando tivermos o React Router, essas "telas" serão rotas diferentes e não precisarão ficar todas juntas aqui.
const LoginMock = () => <div className="p-10 text-center text-2xl">Tela de Login</div>;
const AdminMock = () => <div className="p-10 text-center text-2xl">Dashboard do Admin</div>;

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [currentMissionId, setCurrentMissionId] = useState(0);

  const handleNavigate = (view, data) => {
    setCurrentView(view);
    if (data && data.missionId !== undefined) {
      setCurrentMissionId(data.missionId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* MENU DE DESENVOLVIMENTO, apenas para testar as telas rapidamente.
      */}
      <div className="bg-slate-800 text-white p-4 flex gap-4 justify-center shadow-md">
        <span className="font-bold mr-4">DEV NAV:</span>
        <button 
          onClick={() => handleNavigate('login')}
          className={`px-3 py-1 rounded ${currentView === 'login' ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-500'}`}
        >
          Login
        </button>
        <button 
          onClick={() => handleNavigate('student_dashboard')}
          className={`px-3 py-1 rounded ${currentView === 'student_dashboard' ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-500'}`}
        >
          Aluno: Dashboard
        </button>
        <button 
          onClick={() => handleNavigate('submission')}
          className={`px-3 py-1 rounded ${currentView === 'submission' ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-500'}`}
        >
          Aluno: Missão
        </button>
        <button 
          onClick={() => handleNavigate('admin_dashboard')}
          className={`px-3 py-1 rounded ${currentView === 'admin_dashboard' ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-500'}`}
        >
          Admin
        </button>
      </div>
      
      <main className="flex-grow flex flex-col">
        {currentView === 'login' && <LoginMock />}
        
        {currentView === 'student_dashboard' && (
          <StudentDashboard onNavigate={handleNavigate} />
        )}
        
        {currentView === 'submission' && (
          <SubmissionModule onNavigate={handleNavigate} activeMissionId={currentMissionId} />
        )}

        {currentView === 'admin_dashboard' && <AdminMock />}
      </main>
    </div>
  );
}

export default App;