
import React, { useState } from 'react';

const Inscription: React.FC = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstNames: '',
    phone: '',
    church: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Bonjour Horizon JES 2026, je souhaite m'inscrire gratuitement :
- *Nom* : ${formData.lastName}
- *Prénoms* : ${formData.firstNames}
- *Téléphone* : ${formData.phone}
- *Église de Provence* : ${formData.church}`;

    const whatsappUrl = `https://wa.me/22995591107?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <p className="text-horizon-royal uppercase tracking-[8px] font-black mb-4">Join the Movement</p>
        <h1 className="text-5xl md:text-7xl font-black mb-8 text-horizon-indigo tracking-tighter">INSCRIPTION <span className="text-horizon-yellow">2026</span></h1>
        <div className="h-2 w-24 bg-horizon-yellow mx-auto"></div>
        <p className="mt-8 text-horizon-gray font-bold uppercase tracking-widest italic">L'inscription est totalement gratuite</p>
      </div>

      <div className="bg-white border-8 border-horizon-indigo p-10 md:p-16 rounded-sm shadow-2xl relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-horizon-yellow text-horizon-indigo px-8 py-2 font-black uppercase text-sm shadow-lg border-2 border-horizon-indigo">
          Formulaire Officiel
        </div>
        
        <h3 className="text-3xl font-black mb-12 text-horizon-indigo uppercase tracking-tighter border-b-4 border-horizon-yellow pb-4 inline-block">
          Vos Coordonnées
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-sm font-black uppercase tracking-widest text-horizon-indigo ml-1">Nom de famille</label>
              <input 
                type="text" 
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="VOTRE NOM" 
                className="w-full p-5 bg-horizon-light border-b-4 border-horizon-indigo rounded-none focus:border-horizon-yellow outline-none transition-all font-black uppercase placeholder:text-gray-300"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-black uppercase tracking-widest text-horizon-indigo ml-1">Tous les Prénoms</label>
              <input 
                type="text" 
                name="firstNames"
                required
                value={formData.firstNames}
                onChange={handleChange}
                placeholder="VOS PRÉNOMS" 
                className="w-full p-5 bg-horizon-light border-b-4 border-horizon-indigo rounded-none focus:border-horizon-yellow outline-none transition-all font-black uppercase placeholder:text-gray-300"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-widest text-horizon-indigo ml-1">Numéro WhatsApp</label>
            <input 
              type="tel" 
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="EX: 90 00 00 00" 
              className="w-full p-5 bg-horizon-light border-b-4 border-horizon-indigo rounded-none focus:border-horizon-yellow outline-none transition-all font-black placeholder:text-gray-300"
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-widest text-horizon-indigo ml-1">Église de Provenance</label>
            <input 
              type="text" 
              name="church"
              required
              value={formData.church}
              onChange={handleChange}
              placeholder="VOTRE ÉGLISE" 
              className="w-full p-5 bg-horizon-light border-b-4 border-horizon-indigo rounded-none focus:border-horizon-yellow outline-none transition-all font-black uppercase placeholder:text-gray-300"
            />
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              className="w-full bg-horizon-yellow text-horizon-indigo py-6 rounded-sm font-black text-2xl shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-4 uppercase tracking-[4px]"
            >
              Valider l'inscription <i className="fas fa-check-circle text-3xl"></i>
            </button>
            <p className="text-center text-xs font-black text-horizon-gray mt-6 uppercase tracking-widest">
              Confirmation envoyée via WhatsApp
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
