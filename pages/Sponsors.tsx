
import React from 'react';
import { SPONSOR_LEVELS } from '../constants.tsx';

const Sponsors: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-24">
        <p className="text-horizon-royal uppercase tracking-[8px] font-black mb-4">Impact Together</p>
        <h1 className="text-5xl md:text-8xl font-black mb-8 text-horizon-indigo tracking-tighter">NOS <span className="text-horizon-yellow bg-horizon-indigo px-4">PARTENAIRES</span></h1>
        <p className="max-w-3xl mx-auto text-horizon-gray text-xl font-medium leading-relaxed italic">
          Devenir sponsor d'Horizon JES 2026, c'est investir dans le potentiel illimité d'une jeunesse en marche.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mb-24">
        {SPONSOR_LEVELS.map((level, idx) => (
          <div 
            key={idx}
            className={`flex flex-col border-4 rounded-sm p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-4 transition-all duration-500 ${
              level.isDiamond ? 'bg-horizon-indigo text-white border-horizon-yellow' : 'bg-white border-horizon-indigo'
            }`}
          >
            {level.isDiamond && (
              <div className="absolute top-0 right-0 p-6 opacity-10 text-[12rem] -mr-16 -mt-16 text-horizon-yellow">
                <i className="fas fa-crown"></i>
              </div>
            )}
            <div className={`mb-10 pb-8 border-b-2 ${level.isDiamond ? 'border-white/10' : 'border-horizon-indigo/10'}`}>
              <h2 className={`text-4xl font-black mb-4 uppercase tracking-tighter ${level.isDiamond ? 'text-horizon-yellow' : 'text-horizon-indigo'}`}>
                {level.level}
              </h2>
              <div className={`text-2xl font-black px-4 py-1 inline-block ${level.isDiamond ? 'bg-horizon-yellow text-horizon-indigo' : 'bg-horizon-indigo text-white'}`}>
                {level.price}
              </div>
            </div>
            
            <ul className="space-y-6 mb-12 flex-grow">
              {level.benefits.map((benefit, bIdx) => (
                <li key={bIdx} className="flex gap-4 text-lg items-start font-bold uppercase tracking-tight leading-tight">
                  <i className={`fas ${level.isDiamond ? 'fa-star text-horizon-yellow' : 'fa-check text-horizon-indigo'} mt-1 text-xl`}></i>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <a 
              href={`https://wa.me/22995591107?text=Bonjour, je souhaite en savoir plus sur le partenariat ${level.level}.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-5 rounded-sm font-black text-center text-xl transition-all uppercase tracking-widest shadow-xl active:scale-95 ${
                level.isDiamond 
                  ? 'bg-horizon-yellow text-horizon-indigo hover:bg-white hover:text-horizon-indigo' 
                  : 'bg-horizon-indigo text-white hover:bg-horizon-royal'
              }`}
            >
              Choisir {level.level}
            </a>
          </div>
        ))}
      </div>

      <div className="bg-white border-l-[15px] border-horizon-yellow p-12 md:p-20 rounded-sm shadow-2xl flex flex-col md:flex-row items-center gap-12">
        <div className="flex-grow">
          <h3 className="text-4xl font-black mb-4 text-horizon-indigo uppercase tracking-tighter">Besoin d'un partenariat sur mesure ?</h3>
          <p className="text-xl text-horizon-gray font-medium">Nous concevons des offres adaptées à vos objectifs de communication et d'image.</p>
        </div>
        <a 
          href="https://wa.me/22995591107"
          className="bg-horizon-indigo text-white px-12 py-5 rounded-sm font-black text-xl hover:bg-horizon-royal transition-all uppercase tracking-widest whitespace-nowrap flex items-center gap-4"
        >
          Contactez-nous <i className="fab fa-whatsapp text-horizon-yellow text-3xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Sponsors;
