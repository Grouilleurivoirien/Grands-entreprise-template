import React from 'react';
import { SectionTag } from './ui/SectionTag';

export const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
        {/* Generic Team/Office Image */}
        <div className="w-full max-w-sm shrink-0">
          <div className="bg-accent rounded-3xl overflow-hidden relative aspect-[4/5] md:rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
             <img 
               src="https://picsum.photos/seed/teamwork/800/1000" 
               alt="Équipe Grands Entreprises" 
               className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90"
             />
          </div>
        </div>

        <div className="flex-1 pt-8">
          <SectionTag text="NOTRE ÉQUIPE" />
          <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-10 leading-tight">
            Une équipe <span className="italic font-serif">pluridisciplinaire</span> à votre service.
          </h2>
          
          <div className="flex flex-col gap-6 text-gray-400 leading-relaxed text-lg">
            <p>
              Notre équipe, jeune et dynamique, possède des compétences dans de nombreux domaines. À travers elle, nous sommes à même de vous apporter des solutions innovantes et pertinentes répondant à vos problématiques de communication.
            </p>
            <p>
              Sa créativité, matière première en abondance, vous garantit des réalisations originales tenant toujours compte de vos attentes et de vos cibles.
            </p>
            <p>
              Nous sommes engagés à fournir un travail de qualité suivant les dernières normes et avancées technologiques. Grands Entreprises collabore également avec des partenaires rigoureusement sélectionnés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};