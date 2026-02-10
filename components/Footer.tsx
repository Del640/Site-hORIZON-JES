
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white text-horizon-indigo pt-20 pb-10 px-4 border-t-[5px] border-horizon-yellow">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-gray-100 pb-16 mb-10">
        <div className="space-y-6">
          <div 
            className="text-2xl font-black cursor-pointer tracking-tighter"
            onClick={() => onNavigate('home')}
          >
            HORIZON <span className="text-horizon-royal">JES</span>
          </div>
          <p className="text-horizon-gray leading-relaxed max-w-sm">
            Conférence d'impact dédiée à la jeunesse pour un éveil spirituel transformateur. Rejoignez-nous pour bâtir une génération de leaders.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-horizon-indigo text-white rounded-full flex items-center justify-center hover:bg-horizon-royal transition-colors shadow-md"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="w-10 h-10 bg-horizon-indigo text-white rounded-full flex items-center justify-center hover:bg-horizon-royal transition-colors shadow-md"><i className="fab fa-instagram"></i></a>
            <a href="#" className="w-10 h-10 bg-horizon-indigo text-white rounded-full flex items-center justify-center hover:bg-horizon-royal transition-colors shadow-md"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-black mb-6 uppercase tracking-widest underline decoration-horizon-yellow decoration-4 underline-offset-8">Liens Rapides</h4>
          <ul className="space-y-4 text-horizon-indigo font-bold">
            <li><button onClick={() => onNavigate('home')} className="hover:text-horizon-royal transition-colors">Accueil</button></li>
            <li><button onClick={() => onNavigate('program')} className="hover:text-horizon-royal transition-colors">Programme</button></li>
            <li><button onClick={() => onNavigate('sponsors')} className="hover:text-horizon-royal transition-colors">Sponsors</button></li>
            <li><button onClick={() => onNavigate('shop')} className="hover:text-horizon-royal transition-colors">Boutique</button></li>
            <li><button onClick={() => onNavigate('inscription')} className="hover:text-horizon-royal transition-colors">Inscription</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-black mb-6 uppercase tracking-widest underline decoration-horizon-yellow decoration-4 underline-offset-8">Contact Boutique</h4>
          <div className="space-y-4 text-horizon-indigo font-bold">
            <a href="tel:+2290156851029" className="flex items-center gap-3 hover:text-horizon-royal transition-colors">
              <i className="fas fa-phone text-horizon-yellow bg-horizon-indigo p-2 rounded-full"></i> (+229) 01 56 85 10 29
            </a>
            <a href="https://wa.me/22995591107" className="flex items-center gap-3 hover:text-horizon-royal transition-colors">
              <i className="fab fa-whatsapp text-horizon-yellow bg-horizon-indigo p-2 rounded-full"></i> (+229) 95 59 11 07
            </a>
            <p className="text-sm mt-4 text-horizon-gray italic font-normal">Service disponible 7j/7</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-bold text-horizon-gray gap-4 uppercase tracking-tighter">
        <p>&copy; 2025-2026 Horizon JES. Tous droits réservés.</p>
        <p>Design & Code inspired by the Official Poster.</p>
      </div>
    </footer>
  );
};

export default Footer;
