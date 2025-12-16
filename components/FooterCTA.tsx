import React from 'react';
import { ArrowRight, Lightbulb, Video, Zap, MessageCircle } from 'lucide-react';

export const FooterCTA: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-8">
           <div className="w-8 h-8 bg-accent rounded-lg rotate-12 flex items-center justify-center mx-auto mb-4">
             <Lightbulb size={16} className="text-white" />
           </div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-12">
          Contactez <span className="italic text-accent">nous !</span>
        </h2>
        
        <p className="text-gray-400 mb-10 text-xl">
          Vous avez une demande précise ? Ou souhaitez avoir plus d'informations ? <br/>
          N'hésitez pas à nous contacter !
        </p>
        
        <div className="flex flex-col gap-4 items-center">
            <a href="mailto:grandsentreprises@outlook.com" className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-full transition-all flex items-center gap-2 mx-auto text-lg">
            Envoyer un email <ArrowRight size={20} />
            </a>
            <div className="text-gray-400 mt-4">
                <p>Tél : <span className="text-white font-bold">+225 07 88 666 906</span></p>
                <p>Tél : <span className="text-white font-bold">+225 27 35 999 529</span></p>
            </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 hidden md:block animate-bounce duration-[3000ms]">
         <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center rotate-[-12deg]">
            <Video size={32} fill="currentColor" className="text-white" />
         </div>
      </div>

      <div className="absolute bottom-20 left-[20%] hidden md:block animate-pulse">
         <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <Zap size={24} fill="currentColor" className="text-white" />
         </div>
      </div>
    </section>
  );
};