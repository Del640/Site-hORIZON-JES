
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-2xl mx-auto px-4 py-16">
      <div className="bg-white border border-horizon-light p-10 rounded-[40px] shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black mb-4 gradient-text">Contactez-nous</h1>
          <p className="text-horizon-gray leading-relaxed">
            Une question sur l'événement ? Un partenariat ?<br />
            Remplissez ce formulaire et nous vous répondrons rapidement.
          </p>
        </div>

        <form action="https://formspree.io/f/mrebgarr" method="POST" className="space-y-6">
          <div className="space-y-1">
            <label className="text-sm font-bold uppercase tracking-widest text-horizon-gray">Nom complet</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Votre nom" 
              className="w-full p-4 border-2 border-horizon-light rounded-xl focus:border-horizon-black outline-none transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-bold uppercase tracking-widest text-horizon-gray">Téléphone</label>
            <input 
              type="tel" 
              name="phone" 
              required 
              placeholder="Ex: +229 01 56 85 10 29" 
              className="w-full p-4 border-2 border-horizon-light rounded-xl focus:border-horizon-black outline-none transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-bold uppercase tracking-widest text-horizon-gray">Message</label>
            <textarea 
              name="message" 
              rows={4} 
              placeholder="Comment pouvons-nous vous aider ?" 
              className="w-full p-4 border-2 border-horizon-light rounded-xl focus:border-horizon-black outline-none transition-colors resize-none"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-accent-gradient text-white font-black py-4 rounded-xl shadow-xl hover:scale-[1.02] transition-transform"
          >
            Envoyer le message <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-horizon-light text-center">
          <p className="text-horizon-gray mb-4 font-bold uppercase text-xs">Ou directement via</p>
          <div className="flex justify-center gap-4">
            <a href="tel:+2290156851029" className="p-4 bg-horizon-light rounded-2xl hover:bg-gray-200 transition-colors">
              <i className="fas fa-phone text-2xl"></i>
            </a>
            <a href="https://wa.me/22995591107" className="p-4 bg-horizon-light rounded-2xl hover:bg-gray-200 transition-colors">
              <i className="fab fa-whatsapp text-2xl text-green-500"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
