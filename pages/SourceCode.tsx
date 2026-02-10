
import React from 'react';

const CodeBlock: React.FC<{ title: string; code: string }> = ({ title, code }) => (
  <div className="mb-12">
    <div className="bg-horizon-indigo text-gray-400 px-6 py-3 rounded-t-sm text-sm font-mono border-b border-white/10 flex justify-between items-center">
      <span>{title}</span>
      <button 
        onClick={() => {
          navigator.clipboard.writeText(code);
          alert('Code copié !');
        }}
        className="hover:text-horizon-yellow transition-colors flex items-center gap-2"
        title="Copier"
      >
        <i className="fas fa-copy"></i> Copier
      </button>
    </div>
    <pre className="bg-horizon-indigo p-6 rounded-b-sm overflow-x-auto text-horizon-yellow font-mono text-sm leading-relaxed shadow-2xl custom-scrollbar">
      <code>{code}</code>
    </pre>
  </div>
);

const SourceCode: React.FC = () => {
  const indexHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horizon JES 2026</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              horizon: {
                indigo: '#0b1d51',
                yellow: '#ffde00',
                royal: '#1c52a0',
                black: '#0b1d51',
                gray: '#4a4a4a',
                light: '#f8f9fa'
              }
            },
            backgroundImage: {
              'accent-gradient': 'linear-gradient(90deg, #ffde00, #ffc107)',
              'royal-gradient': 'linear-gradient(90deg, #1c52a0, #0b1d51)',
              'hero-overlay': 'linear-gradient(135deg, rgba(28, 82, 160, 0.7) 0%, rgba(11, 29, 81, 0.95) 100%)',
            }
          }
        }
      }
    </script>
    <style>
      .gradient-text {
        background: linear-gradient(90deg, #ffde00, #ffffff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
      }
    </style>
<script type="importmap">
{
  "imports": {
    "@google/genai": "https://esm.sh/@google/genai@^1.38.0",
    "react-dom/": "https://esm.sh/react-dom@^19.2.4/",
    "react/": "https://esm.sh/react@^19.2.4/",
    "react": "https://esm.sh/react@^19.2.4"
  }
}
</script>
</head>
<body class="bg-white text-horizon-indigo font-sans">
    <div id="root"></div>
</body>
</html>`;

  return (
    <div className="animate-fade-in max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <p className="text-horizon-royal uppercase tracking-widest font-black mb-4">Architecture</p>
        <h1 className="text-5xl md:text-7xl font-black mb-8 text-horizon-indigo tracking-tighter">CODE <span className="text-horizon-yellow">SOURCE</span></h1>
        <p className="text-horizon-gray text-lg max-w-2xl mx-auto font-medium">
          Retrouvez ci-dessous la structure HTML fondamentale du site Horizon JES 2026.
        </p>
      </div>

      <CodeBlock title="index.html" code={indexHtml} />

      <div className="bg-horizon-light p-10 rounded-sm text-center mt-12 border-4 border-horizon-indigo">
        <h3 className="text-xl font-black mb-2 uppercase">Note Technique</h3>
        <p className="text-horizon-gray mb-4 font-medium max-w-xl mx-auto italic">
          Cette application est construite avec React 19 et Tailwind CSS, offrant une expérience fluide et responsive pour les participants.
        </p>
      </div>
    </div>
  );
};

export default SourceCode;
