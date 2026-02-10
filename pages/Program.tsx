
import React from 'react';

const Program: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-20">
        <p className="text-horizon-royal uppercase tracking-widest font-black mb-4">Chronologie de l'impact</p>
        <h1 className="text-5xl md:text-7xl font-black mb-8 text-horizon-indigo tracking-tighter">LE <span className="text-horizon-yellow bg-horizon-indigo px-4">PROGRAMME</span></h1>
        <div className="h-2 w-24 bg-horizon-yellow mx-auto mb-8"></div>
        <p className="text-xl text-horizon-gray max-w-3xl mx-auto font-medium">
          Deux jours d'immersion totale pour "Prendre Possession" de votre destinée. Voici le programme
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Day 1 */}
        <div className="bg-horizon-indigo text-white p-10 rounded-sm shadow-2xl relative group overflow-hidden border-b-8 border-horizon-yellow">
          <div className="absolute -right-8 -top-8 text-white/5 text-[10rem] font-black group-hover:scale-110 transition-transform">01</div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-2 text-horizon-yellow uppercase">SAMEDI 28 FÉVRIER</h2>
            <p className="text-white/70 font-bold mb-10 tracking-widest uppercase text-sm">Éveil & Enseignement</p>
            
            <div className="space-y-10">
              <Activity icon="fa-street-view" title="Évangélisation" desc="Impact communautaire et partage de la foi." light />
              <Activity icon="fa-microphone-alt" title="Talk-Show" desc="Échanges interactifs sur des sujets brûlants." light />
              <Activity icon="fa-church" title="Intervention Spirituelle" desc="Enseignement profond et transformation." light />
            </div>
          </div>
        </div>

        {/* Day 2 */}
        <div className="bg-white border-4 border-horizon-indigo p-10 rounded-sm shadow-2xl relative group overflow-hidden border-b-8 border-horizon-royal">
          <div className="absolute -right-8 -top-8 text-horizon-indigo/5 text-[10rem] font-black group-hover:scale-110 transition-transform">02</div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-2 text-horizon-indigo uppercase">DIMANCHE 1ER MARS</h2>
            <p className="text-horizon-gray font-bold mb-10 tracking-widest uppercase text-sm">Célébration & Concert</p>
            
            <div className="space-y-10">
              <Activity icon="fa-gamepad" title="Instant Gaming" desc="Distraction, jeux et cohésion fraternelle." />
              <Activity icon="fa-music" title="Grand Concert" desc="Prestations artistiques et louange explosive." />
              <Activity icon="fa-hands-clapping" title="Adoration Totale" desc="Clôture dans la présence divine." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activity: React.FC<{ icon: string, title: string, desc: string, light?: boolean }> = ({ icon, title, desc, light }) => (
  <div className="flex gap-6 items-start group">
    <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-2xl shadow-lg transition-colors ${
      light ? 'bg-horizon-yellow text-horizon-indigo' : 'bg-horizon-indigo text-horizon-yellow'
    }`}>
      <i className={`fas ${icon}`}></i>
    </div>
    <div>
      <h4 className={`font-black text-xl uppercase tracking-tighter ${light ? 'text-white' : 'text-horizon-indigo'}`}>{title}</h4>
      <p className={`text-sm mt-1 font-medium ${light ? 'text-white/60' : 'text-horizon-gray'}`}>{desc}</p>
    </div>
  </div>
);

export default Program;
