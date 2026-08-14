import React, { useState } from 'react';

function App() {
  const [audioAtivo, setAudioAtivo] = useState(false);

  const iniciarSistema = () => {
    if (audioAtivo) return;

    // Inicializa o motor de áudio do navegador
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();

    // Cria o som de impedância (Onda Senoidal em 60Hz)
    const oscillator = ctx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(60, ctx.currentTime);

    // Cria um pouco de distorção (Onda Dente de Serra em baixa frequência) para dar textura
    const texture = ctx.createOscillator();
    texture.type = 'sawtooth';
    texture.frequency.setValueAtTime(55, ctx.currentTime);

    // Controle de volume mestre (0.02 = 2% do volume, muito discreto)
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.02, ctx.currentTime);

    // Conecta tudo e dá o play
    oscillator.connect(masterGain);
    texture.connect(masterGain);
    masterGain.connect(ctx.destination);

    oscillator.start();
    texture.start();

    setAudioAtivo(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0f16] flex items-center justify-center p-4 relative overflow-hidden font-sans">

      {/* Efeitos de iluminação */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Container Principal */}
      <div className="relative z-10 w-full max-w-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-10 md:p-16 shadow-[0_0_40px_rgba(8,145,178,0.1)] text-center transition-all duration-700">

        {/* Ícone Animado (Muda de cor quando ativo) */}
        <div className="flex justify-center mb-8">
          <div className={`relative flex items-center justify-center w-20 h-20 rounded-full bg-slate-800 border transition-colors duration-1000 ${audioAtivo ? 'border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.6)]' : 'border-slate-600/30'}`}>
            <div className={`absolute inset-0 rounded-full border-t-2 transition-all duration-1000 ${audioAtivo ? 'border-cyan-300 animate-spin opacity-90' : 'border-slate-500 animate-pulse opacity-40'}`}></div>
            <div className={`w-8 h-8 rounded-sm transition-all duration-1000 ${audioAtivo ? 'bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,1)]' : 'bg-slate-600'}`}></div>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold text-slate-100 tracking-wide mb-4">
          NEXUM<span className={`${audioAtivo ? 'text-cyan-400' : 'text-slate-500'} transition-colors duration-1000`}>DATA</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl font-light mb-8 max-w-lg mx-auto h-14">
          {audioAtivo
            ? "Protocolos de inicialização em andamento." <br /> "Uma nova infraestrutura de dados está sendo provisionada."
            : "Aguardando autorização manual para acionar a infraestrutura."}
        </p>

        {/* Barra de Progresso ou Botão de Ação */}
        <div className="h-12 flex items-center justify-center mb-6">
          {!audioAtivo ? (
            <button
              onClick={iniciarSistema}
              className="px-6 py-2 border border-cyan-700/50 rounded bg-cyan-950/30 text-cyan-400 text-xs font-mono uppercase tracking-widest hover:bg-cyan-900/50 hover:border-cyan-400/80 transition-all cursor-pointer"
            >
              [ Acionar Rede Elétrica ]
            </button>
          ) : (
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"></div>
            </div>
          )}
        </div>

        <div className={`flex items-center justify-center space-x-2 text-sm font-mono uppercase tracking-widest transition-colors duration-1000 ${audioAtivo ? 'text-cyan-500/80' : 'text-slate-500/60'}`}>
          <span className={`w-2 h-2 rounded-full ${audioAtivo ? 'bg-cyan-500 animate-ping' : 'bg-slate-500'}`}></span>
          <span>{audioAtivo ? 'Sistemas Operantes // Standby' : 'Sistemas em Hibernação'}</span>
        </div>
      </div>
    </div>
  );
}

export default App;