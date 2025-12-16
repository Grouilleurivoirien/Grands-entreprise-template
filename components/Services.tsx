import React from 'react';
import { SectionTag } from './ui/SectionTag';
import { ArrowUpRight } from 'lucide-react';

const ServiceRow = ({ title, description }: { title: string; description: string }) => (
  <div className="group border-b border-white/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer">
    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors w-full md:w-1/3">
      {title}
    </h3>
    <p className="text-gray-400 text-sm md:text-base max-w-xl flex-1">
      {description}
    </p>
    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all transform group-hover:-rotate-45 shrink-0">
      <ArrowUpRight size={18} />
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionTag text="NOS EXPERTISES" />
          <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-4">
            Une agence de communication <br />
            <span className="italic font-serif text-white">globale</span> et polyvalente.
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Grands Entreprises vous accompagne tout au long de votre démarche de communication et intervient à différents niveaux stratégiques et opérationnels.
          </p>
        </div>

        <div className="mt-8">
          <ServiceRow 
            title="Conseils et Stratégie"
            description="Conseil en communication, conception et mise en œuvre de la stratégie de développement."
          />
          <ServiceRow 
            title="Identité Visuelle"
            description="Création de charte graphique, logotype, packaging et tous supports imprimés (brochure, dépliant, PLV)."
          />
          <ServiceRow 
            title="Multimédia"
            description="Production de film publicitaire et institutionnel (TV et Radio), publi-reportage, podcast et contenus audiovisuels."
          />
          <ServiceRow 
            title="Relation Media"
            description="Contact media, médiaplanning, achat d'espace média et hors média, suivi des campagnes."
          />
          <ServiceRow 
            title="Internet & Digital"
            description="Création de site internet, marketing digital, référencement naturel (SEO), gestion des réseaux sociaux (Social Media)."
          />
          <ServiceRow 
            title="Évènementiel"
            description="Conception, organisation et pilotage d'événements corporate, lancement de produits, animations commerciales, festivals et salons."
          />
        </div>
      </div>
    </section>
  );
};