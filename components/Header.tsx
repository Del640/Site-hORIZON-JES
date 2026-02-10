
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants.tsx';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-horizon-indigo z-[1000] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <span className="text-xl md:text-2xl font-black text-white tracking-tighter">HORIZON <span className="text-horizon-yellow">JES</span></span>
          <span className="bg-horizon-yellow text-horizon-indigo text-[10px] px-2 py-0.5 rounded-sm font-black">2026</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                currentPage === item.page ? 'text-horizon-yellow border-b-2 border-horizon-yellow' : 'text-white hover:text-horizon-yellow'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('inscription')}
            className="bg-horizon-yellow text-horizon-indigo px-6 py-2 rounded-sm text-sm font-black hover:scale-105 transition-transform uppercase"
          >
            S'inscrire
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-horizon-yellow text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-horizon-indigo border-t border-white/10 animate-fade-in shadow-2xl">
          <div className="flex flex-col p-6 gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMenuOpen(false);
                }}
                className={`p-3 text-left font-black uppercase tracking-widest rounded-lg ${
                  currentPage === item.page ? 'bg-white/10 text-horizon-yellow' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('inscription');
                setIsMenuOpen(false);
              }}
              className="p-4 text-center font-black text-horizon-indigo bg-horizon-yellow rounded-sm uppercase mt-4"
            >
              S'inscrire
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
