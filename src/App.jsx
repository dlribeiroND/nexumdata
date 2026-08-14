import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f16] flex items-center justify-center p-4 relative overflow-hidden font-sans">

      {/* Efeitos de iluminação */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Container Principal */}
      <div className="relative z-10 w-full max-w-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-10 md:p-16 shadow-[0_0_40px_rgba(8,145,178,0.1)] text-center">

        {/* Ícone Animado */}
        <div className="flex justify-center mb-8">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-slate-800 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <div className="absolute inset-0 rounded-full border-t-2 border-cyan-400 animate-spin opacity-70"></div>
            <div className="w-8 h-8 bg-cyan-400 rounded-sm shadow-[0_0_15px_rgba(6,182,212,1)]"></div>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold text-slate-100 tracking-wide mb-4">
          NEXUM<span className="text-cyan-400">DATA</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl font-light mb-8 max-w-lg mx-auto">
          Protocolos de inicialização em andamento. <br/>
          Uma nova infraestrutura de dados está sendo provisionada.
        </p>
        {/* Barra de Progresso Falsa */}
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mb-6">
          <div className="w-2/3 h-full bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"></div>
        </div>

        <div className="flex items-center justify-center space-x-2 text-cyan-500/80 text-sm font-mono uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
          <span>Sistemas Operantes // Standby</span>
        </div>
      </div>
    </div>
  );
}

export default App;