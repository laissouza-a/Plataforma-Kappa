import React, { useState, useEffect } from 'react';
import Layout from '../components/StudentLayout';
import { challengesData } from '../../../challengesData';
import MissionDetails from '../components/MissionDetails';
import CodeEditor from '../components/CodeEditor';

export default function SubmissionModule({ onNavigate, activeMissionId = 0 }) {
  // Agora usamos a missão que foi passada pelo props
  const currentChallenge = challengesData[activeMissionId] || challengesData[0];
  const [code, setCode] = useState(currentChallenge.initialCode);

  useEffect(() => {
    setCode(currentChallenge.initialCode);
  }, [activeMissionId]);

  const handleSubmit = () => {
    alert(`Enviando código da missão ${currentChallenge.title} para validação!`);
  };

  return (
    <Layout onNavigate={onNavigate}>
      <div className="flex-1 flex flex-col lg:flex-row h-full w-full overflow-hidden">
        <div className="w-full lg:w-1/2 h-full overflow-hidden border-r border-neutral-800 bg-cyber-bg">
          <MissionDetails challenge={currentChallenge} />
        </div>
        <div className="w-full lg:w-1/2 h-full overflow-hidden bg-cyber-black">
          <CodeEditor 
            challenge={currentChallenge} 
            code={code} 
            setCode={setCode} 
            onSubmit={handleSubmit} 
          />
        </div>
      </div>
    </Layout>
  );
}