import React from 'react';
import { SectionTag } from './ui/SectionTag';
import { Star } from 'lucide-react';

const ClientCard = ({ name, type, description, color }: any) => (
  <div className={`p-8 rounded-2xl flex flex-col justify-between h-full bg-surface border border-white/5 hover:border-accent/50 transition-colors`}>
    <div>
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" className="text-accent" strokeWidth={0} />
        ))}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-black mb-6 ${color}`}>
          {type}
      </span>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionTag text="NOS PARTENAIRES" />
          <h2 className="text-4xl md:text-5xl font-serif mt-6">
            Ils nous font <span className="italic font-serif">confiance.</span>
          </h2>
          <p className="text-gray-400 mt-4">Nous accompagnons ces entreprises dans leurs défis de communication.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ClientCard 
                name="ETS AKANE" 
                type="Immobilier" 
                color="bg-red-400"
                description="Réalisation de programmes privilèges, supports de communication et identité visuelle pour la Résidence Couronne."
            />
             <ClientCard 
                name="ANAPHA-CI" 
                type="Association" 
                color="bg-green-400"
                description="Conception de supports d'adhésion, fiches techniques et campagnes d'information pour la filière Hévéa."
            />
             <ClientCard 
                name="SOLEVO" 
                type="Industrie" 
                color="bg-blue-400"
                description="Accompagnement événementiel, conception de stands et couverture média lors du SARA."
            />
             <ClientCard 
                name="PBF GPRN" 
                type="ONG / International" 
                color="bg-orange-400"
                description="Sensibilisation des communautés locales et gestion des ressources naturelles avec l'OIM et l'ONU."
            />
             <ClientCard 
                name="CITI PAYED" 
                type="Fintech" 
                color="bg-yellow-400"
                description="Réalisation de films institutionnels, spots vidéo et couverture de cérémonies officielles."
            />
             <ClientCard 
                name="COOP-CA PCN3" 
                type="Coopérative" 
                color="bg-purple-400"
                description="Société Coopérative des Producteurs de Caoutchouc Naturel. Prix d'excellence 2020."
            />
        </div>
      </div>
    </section>
  );
};