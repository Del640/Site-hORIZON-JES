
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [days, setDays] = useState('--');

  useEffect(() => {
    const eventDate = new Date('2026-02-28T00:00:00');
    const update = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      const d = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDays(d > 0 ? d.toString() : '0');
    };
    update();
    const timer = setInterval(update, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[700px] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/jes-main/1920/1080" 
          alt="Horizon JES Event" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay flex flex-col items-center justify-center text-center text-white px-4">
          <div className="bg-horizon-yellow text-horizon-indigo px-4 py-1 font-black text-sm uppercase tracking-[4px] mb-8 rounded-sm shadow-lg animate-fade-in">
            Save the Date
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tighter animate-title-reveal">
            PRENDS <span className="animate-shimmer">POSSESSION</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-2xl font-black mb-12 uppercase tracking-wide opacity-0 animate-fade-in [animation-delay:0.8s] [animation-fill-mode:forwards]">
            Jeunesse Éveil Spirituel 2026 <br /> 
            <span className="text-horizon-yellow">28 Fév. — 01 Mars</span>
          </p>
          
          <div className="flex flex-col gap-6 items-center opacity-0 animate-fade-in [animation-delay:1.2s] [animation-fill-mode:forwards]">
            {/* First Row of buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onNavigate('inscription')}
                className="bg-horizon-yellow text-horizon-indigo px-10 py-5 rounded-sm font-black text-lg shadow-2xl hover:scale-105 transition-transform uppercase tracking-wider min-w-[280px]"
              >
                S'inscrire Maintenant <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button 
                onClick={() => onNavigate('program')}
                className="bg-transparent border-4 border-white px-10 py-5 rounded-sm font-black text-lg hover:bg-white hover:text-horizon-indigo transition-all uppercase tracking-wider min-w-[280px]"
              >
                Voir le Programme
              </button>
            </div>
            
            {/* Second Row of buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onNavigate('shop')}
                className="bg-white text-horizon-indigo px-10 py-5 rounded-sm font-black text-lg hover:bg-horizon-yellow transition-all uppercase tracking-wider shadow-xl min-w-[280px]"
              >
                <i className="fas fa-shopping-bag mr-2"></i> Voir la boutique
              </button>
              <button 
                onClick={() => onNavigate('sponsors')}
                className="bg-transparent border-4 border-white px-10 py-5 rounded-sm font-black text-lg hover:bg-white hover:text-horizon-indigo transition-all uppercase tracking-wider min-w-[280px]"
              >
                <i className="fas fa-handshake mr-2"></i> Devenir sponsors
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          {/* Item 1 */}
          <div className="group">
            <div className="w-20 h-20 bg-horizon-yellow rounded-full flex items-center justify-center text-horizon-indigo text-3xl mb-8 shadow-xl group-hover:rotate-12 transition-transform">
              <i className="fas fa-bullhorn"></i>
            </div>
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter text-horizon-indigo">La Vision</h3>
            <p className="text-horizon-gray leading-relaxed text-xl">
              C'est une conférence d'impact organisée par les jeunes de l'église du Chandelier d'or. 
              Une rencontre structurée par un talk-show, un temps d'enseignement et un concert explosif. 
              Près de <span className="font-black text-horizon-indigo underline decoration-horizon-yellow decoration-4">500 jeunes</span> sont attendus pour cette édition.
            </p>
          </div>
          {/* Item 2 */}
          <div className="group">
            <div className="w-20 h-20 bg-horizon-indigo rounded-full flex items-center justify-center text-horizon-yellow text-3xl mb-8 shadow-xl group-hover:-rotate-12 transition-transform">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter text-horizon-indigo">Nos Objectifs</h3>
            <p className="text-horizon-gray leading-relaxed text-xl">
              Offrir aux jeunes un cadre édifiant et distrayant. 
              Bâtir une jeunesse chrétienne forte pour atteindre ses semblables meurtris et porter un impact spirituel majeur sur toute la nation.
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 text-center bg-horizon-indigo text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-horizon-yellow"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <p className="text-horizon-yellow uppercase tracking-[6px] font-black text-sm mb-6">Compte à rebours</p>
          <div className="flex justify-center items-baseline gap-4 mb-4">
            <span className="text-8xl md:text-[12rem] font-black leading-none tracking-tighter">{days}</span>
            <span className="text-2xl md:text-4xl font-black uppercase text-horizon-yellow">Jours</span>
          </div>
          <p className="text-white/60 font-bold text-lg uppercase">Avant l'explosion spirituelle</p>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="py-24 bg-horizon-light px-4">
        <div className="max-w-6xl mx-auto bg-white border-[10px] border-horizon-indigo p-12 md:p-20 rounded-sm text-center shadow-2xl relative">
          <div className="absolute top-0 right-0 bg-horizon-yellow text-horizon-indigo px-6 py-2 font-black uppercase text-xs -mr-4 -mt-4 shadow-lg">Nouvelle Collection</div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-horizon-indigo tracking-tighter">GOODIES <span className="text-horizon-royal">OFFICIELS</span></h2>
          <p className="text-horizon-gray mb-12 max-w-2xl mx-auto text-xl font-medium italic">Soutenez la mission avec style. T-shirts et casquettes exclusifs disponibles dès maintenant.</p>
          <button 
            onClick={() => onNavigate('shop')}
            className="bg-horizon-indigo text-white px-12 py-5 rounded-sm font-black text-xl hover:bg-horizon-royal transition-all uppercase tracking-widest shadow-xl active:scale-95"
          >
            Voir la Boutique <i className="fas fa-shopping-bag ml-2 text-horizon-yellow"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
