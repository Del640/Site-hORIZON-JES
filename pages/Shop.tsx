
import React from 'react';
import { PRODUCTS } from '../constants.tsx';

const Shop: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <p className="text-horizon-royal uppercase tracking-widest font-black mb-4">Official Merchandise</p>
        <h1 className="text-5xl md:text-7xl font-black mb-8 text-horizon-indigo tracking-tighter">BOUTIQUE <span className="text-horizon-yellow underline decoration-horizon-indigo">JES</span></h1>
        <p className="max-w-2xl mx-auto text-horizon-gray text-xl font-medium mb-8">
          Habillez-vous pour la gloire. Chaque achat contribue directement à l'organisation de l'événement.
        </p>
        
        {/* Nouveau lien Google Maps au début */}
        <div className="flex justify-center mb-16">
          <a 
            href="https://maps.app.goo.gl/GFZTreFLqHScRXCv9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-horizon-indigo text-white px-8 py-4 rounded-sm font-black hover:bg-horizon-royal transition-all uppercase shadow-2xl border-b-4 border-horizon-yellow active:scale-95"
          >
            <i className="fas fa-map-marker-alt text-horizon-yellow text-xl"></i>
            <span>Localiser le point de retrait des articles</span>
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white border-2 border-horizon-light rounded-sm overflow-hidden shadow-2xl group flex flex-col h-full">
            <div className="h-[300px] overflow-hidden bg-horizon-light relative">
              <div className="absolute top-4 left-4 bg-horizon-indigo text-white px-4 py-1 font-black text-xs uppercase z-10 shadow-lg">Officiel</div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col bg-white">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-black text-horizon-indigo tracking-tighter uppercase leading-tight mr-4">{product.name}</h3>
                <span className="text-lg font-black text-horizon-royal bg-horizon-yellow px-3 py-0.5 whitespace-nowrap shadow-sm">{product.price}</span>
              </div>
              <p className="text-horizon-gray mb-6 text-sm leading-relaxed italic">"{product.description}"</p>
              <a 
                href={`https://wa.me/22995591107?text=${encodeURIComponent(product.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full bg-horizon-indigo text-white py-4 rounded-sm font-black text-center hover:bg-horizon-royal transition-all uppercase tracking-widest text-sm shadow-xl"
              >
                <i className="fab fa-whatsapp mr-2 text-horizon-yellow"></i> Commander
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-horizon-yellow text-horizon-indigo p-12 rounded-sm flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
        <div className="text-left">
          <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter"><i className="fas fa-shipping-fast mr-3"></i> Livraison & Retrait</h3>
          <p className="text-horizon-indigo/80 font-bold text-lg">Retrait sur site (Cotonou) ou livraison à domicile.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="https://maps.app.goo.gl/GFZTreFLqHScRXCv9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-horizon-indigo text-white px-8 py-4 rounded-sm font-black flex items-center gap-2 hover:bg-horizon-royal transition-all uppercase shadow-lg"
          >
            <i className="fas fa-map-marker-alt text-horizon-yellow"></i> Voir sur la carte
          </a>
          <a href="https://wa.me/22995591107" className="bg-white text-horizon-indigo border-4 border-horizon-indigo px-8 py-4 rounded-sm font-black flex items-center gap-2 hover:bg-horizon-indigo hover:text-white transition-all uppercase shadow-lg">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shop;
