
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Program from './pages/Program';
import Sponsors from './pages/Sponsors';
import Shop from './pages/Shop';
import Inscription from './pages/Inscription';
import GlobalInfo from './components/GlobalInfo';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'program': return <Program />;
      case 'sponsors': return <Sponsors />;
      case 'shop': return <Shop />;
      case 'inscription': return <Inscription />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>

      {/* Affichage uniquement sur la page d'inscription */}
      {currentPage === 'inscription' && <GlobalInfo />}
      
      <Footer onNavigate={setCurrentPage} />

      {/* Bouton d'inscription fixe */}
      {currentPage !== 'inscription' && (
        <button 
          onClick={() => setCurrentPage('inscription')}
          className="fixed bottom-6 left-6 md:top-1/2 md:bottom-auto md:left-10 md:-translate-y-1/2 bg-horizon-yellow text-horizon-indigo px-6 py-3 rounded-full font-bold shadow-2xl z-50 hover:scale-105 transition-transform border-2 border-horizon-indigo"
        >
          <i className="fas fa-user-plus mr-2"></i>
          S'inscrire
        </button>
      )}
    </div>
  );
};

export default App;
