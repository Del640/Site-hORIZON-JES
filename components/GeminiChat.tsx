
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Bonjour ! Je suis l'assistant Horizon JES. Comment puis-je vous aider ?", isBot: true }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setIsTyping(true);

    const botMsg = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { text: botMsg || "Je n'ai pas pu générer de réponse.", isBot: true }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[1001]">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-[32px] shadow-2xl flex flex-col overflow-hidden border border-horizon-light animate-fade-in">
          {/* Header */}
          <div className="bg-horizon-black text-white p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-gradient rounded-full flex items-center justify-center text-xl">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <p className="font-bold text-sm">Assistant Horizon JES</p>
                <p className="text-[10px] text-green-400 font-bold uppercase tracking-wider">En ligne</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-horizon-light">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.isBot ? 'bg-white text-horizon-black rounded-bl-none shadow-sm' : 'bg-horizon-black text-white rounded-br-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white flex gap-2 border-t border-horizon-light">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Posez votre question..."
              className="flex-grow bg-horizon-light p-3 rounded-xl text-sm outline-none focus:ring-2 ring-horizon-black transition-all"
            />
            <button 
              onClick={handleSend}
              className="w-12 h-12 bg-horizon-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 md:w-16 md:h-16 bg-horizon-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group"
        >
          <i className="fas fa-comment-dots text-2xl md:text-3xl"></i>
          <span className="absolute right-full mr-4 bg-white text-horizon-black px-4 py-2 rounded-xl text-xs font-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-horizon-light">
            Une question ? Demandez-moi !
          </span>
        </button>
      )}
    </div>
  );
};

export default GeminiChat;
