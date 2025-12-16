import React from 'react';
import { ArrowRight, Lightbulb } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-accent">
            <Lightbulb size={12} fill="currentColor" />
            <span>Agence de communication globale</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-6">
          Votre vision, notre <br />
          <span className="italic text-accent">créativité</span> à <br />
          360 degrés.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Nous créons pour vous et avec vous, les vecteurs de communication les plus pertinents qui s'inscrivent dans vos stratégies de développement et de résultats.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <button className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all flex items-center gap-2">
            Demander un devis <ArrowRight size={18} />
          </button>
          <button className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/5 transition-all font-medium">
            Découvrir l'agence
          </button>
        </div>

        {/* Logos References */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <span className="text-xl font-bold font-sans">ETS AKANE</span>
           <span className="text-xl font-bold font-serif">SOLEVO</span>
           <span className="text-xl font-black">ANAPHA-CI</span>
           <span className="text-xl font-serif tracking-widest">CANIDANA</span>
           <span className="text-xl font-mono">SCOOPS NOVIAL</span>
        </div>
      </div>
    </section>
  );
};