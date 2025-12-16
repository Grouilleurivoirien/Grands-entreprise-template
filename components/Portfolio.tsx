import React from 'react';
import { SectionTag } from './ui/SectionTag';

interface ProjectProps {
  image: string;
  iconColor: string;
  category: string;
  subCategories: string;
  name: string;
  duration: string;
  accentColor: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ image, iconColor, category, subCategories, name, duration, accentColor }) => (
  <div className="group relative bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors">
    <div className="p-6">
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${iconColor}`}>
           {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-white">{category}</h4>
          <p className="text-xs text-gray-500 mt-1">{subCategories}</p>
        </div>
      </div>
      
      <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
        <div className={`absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity ${accentColor}`}></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-2xl font-serif italic text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                {name}
            </h3>
        </div>
      </div>

      <div className="flex justify-between items-end border-t border-white/5 pt-4">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Client</p>
          <p className="font-medium text-sm">{name}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Type</p>
          <p className="font-medium text-sm">{duration}</p>
        </div>
      </div>
    </div>
  </div>
);

export const Portfolio: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      image: "https://picsum.photos/seed/akane/800/600",
      iconColor: "bg-red-600",
      category: "Campagne & Print",
      subCategories: "Immobilier, Promotion",
      name: "ETS AKANE",
      duration: "Programme Privilège",
      accentColor: "bg-red-700"
    },
    {
      image: "https://picsum.photos/seed/solevo/800/600",
      iconColor: "bg-green-600",
      category: "Évènementiel",
      subCategories: "Salon, Stand, Animation",
      name: "SOLEVO",
      duration: "SARA 2019",
      accentColor: "bg-green-700"
    },
    {
      image: "https://picsum.photos/seed/anapha/800/600",
      iconColor: "bg-emerald-600",
      category: "Identité & Print",
      subCategories: "Agriculture, Association",
      name: "ANAPHA-CI",
      duration: "Infos-Hévéa",
      accentColor: "bg-emerald-700"
    },
    {
      image: "https://picsum.photos/seed/citipayed/800/600",
      iconColor: "bg-blue-600",
      category: "Film Institutionnel",
      subCategories: "Reportage, Interview",
      name: "CITI PAYED",
      duration: "Bilan & Clôture",
      accentColor: "bg-blue-700"
    },
    {
      image: "https://picsum.photos/seed/canidana/800/600",
      iconColor: "bg-pink-700",
      category: "Communication",
      subCategories: "Exposition, Branding",
      name: "CANIDANA EXPO",
      duration: "Campagne 2021",
      accentColor: "bg-pink-800"
    },
    {
      image: "https://picsum.photos/seed/pbf/800/600",
      iconColor: "bg-orange-500",
      category: "Campagne Sociale",
      subCategories: "Sensibilisation, OIM, ONU",
      name: "PBF GPRN",
      duration: "Projet Paix",
      accentColor: "bg-orange-600"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionTag text="NOS RÉFÉRENCES" />
            <h2 className="text-4xl md:text-5xl font-serif mt-6">
              Des stratégies et campagnes <br />
              <span className="italic text-white font-serif">marquantes.</span>
            </h2>
          </div>
          <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all text-sm font-medium whitespace-nowrap">
            Voir tous les projets
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};