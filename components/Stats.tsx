import React from 'react';

const StatItem = ({ number, text, subtext }: { number: string; text: string; subtext?: string }) => (
  <div className="bg-surface border border-white/5 p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
    <span className="text-4xl md:text-5xl font-bold text-accent">{number}</span>
    <div className="text-sm text-gray-400 leading-snug">
      {text}
      {subtext && <br />}
      {subtext}
    </div>
  </div>
);

export const Stats: React.FC = () => {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatItem 
          number="360°" 
          text="Approche globale" 
          subtext="Stratégie & Création" 
        />
        <StatItem 
          number="100%" 
          text="Satisfaction client" 
          subtext="et accompagnement" 
        />
        <StatItem 
          number="+50" 
          text="Campagnes et projets" 
          subtext="réalisés avec succès" 
        />
      </div>
    </section>
  );
};