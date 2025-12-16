import React from 'react';
import { Instagram, Linkedin, Youtube, Facebook, Mail, Phone, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-6">
                <div className="w-6 h-6 bg-white text-black rounded-md flex items-center justify-center">
                    G
                </div>
                <span>GRANDS ENTREPRISES</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
                Agence de communication globale. Nous créons les vecteurs de communication les plus pertinents pour votre stratégie.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2"><Phone size={14} className="text-accent" /> +225 07 88 666 906 / +225 27 35 999 529</p>
                <p className="flex items-center gap-2"><Mail size={14} className="text-accent" /> grandsentreprises@outlook.com</p>
                <p className="flex items-center gap-2"><Globe size={14} className="text-accent" /> www.grandsentreprises.com</p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Expertises</h4>
            <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-accent transition-colors">Conseils & Stratégie</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Identité Visuelle</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Multimédia & Film</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Digital & Web</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Évènementiel</a></li>
            </ul>
          </div>

          {/* Studio Column */}
          <div>
            <h4 className="font-bold text-white mb-6">L'Agence</h4>
            <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-accent transition-colors">Accueil</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Références</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="flex flex-wrap gap-6">
                <span>@grandsentreprises</span>
            </div>
            
            <div className="flex gap-4">
                <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors"><Instagram size={16} /></a>
                <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors"><Youtube size={16} /></a>
                <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors"><Linkedin size={16} /></a>
                <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors"><Facebook size={16} /></a>
            </div>
        </div>
        
        <div className="text-center text-xs text-gray-600 mt-8">
            © 2025 GRANDS ENTREPRISES. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};