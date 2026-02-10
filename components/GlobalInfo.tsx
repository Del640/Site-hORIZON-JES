
import React from 'react';

const GlobalInfo: React.FC = () => {
  return (
    <section className="bg-horizon-light py-16 border-t-4 border-horizon-indigo">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Bloc Accès / Gratuité */}
          <div className="bg-horizon-indigo text-white p-8 rounded-sm shadow-xl relative border-l-[10px] border-horizon-yellow flex flex-col justify-center">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-horizon-yellow">Accès Événement</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="p-4 bg-white/5 border border-white/10 text-center">
                <p className="text-[10px] text-horizon-yellow uppercase font-black mb-1 tracking-widest">Tarif Participation</p>
                <p className="text-5xl font-black text-white leading-none">GRATUIT</p>
                <p className="text-[10px] text-white/50 mt-2 font-bold uppercase">Sessions libres</p>
              </div>
              <div className="space-y-2">
                <p className="text-horizon-yellow font-black uppercase text-xs tracking-widest">Important</p>
                <p className="text-sm font-bold leading-tight">Inscrivez-vous pour nous aider à mieux organiser votre accueil.</p>
              </div>
            </div>
          </div>

          {/* Bloc Besoin d'aide */}
          <div className="bg-white border-4 border-horizon-indigo p-8 rounded-sm shadow-xl flex flex-col justify-center items-center text-center md:items-start md:text-left">
            <h4 className="font-black mb-3 text-horizon-indigo uppercase tracking-widest text-xl">Besoin d'aide ?</h4>
            <p className="text-horizon-gray font-medium mb-6">Contactez notre équipe d'accueil pour toute question relative à l'événement.</p>
            <a href="tel:+2290156851029" className="flex items-center gap-4 font-black text-horizon-indigo text-2xl hover:text-horizon-royal transition-colors group">
              <i className="fas fa-phone-alt bg-horizon-yellow p-4 rounded-full group-hover:rotate-12 transition-transform shadow-lg text-lg"></i> 
              <span className="tracking-tighter">+229 01 56 85 10 29</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalInfo;
