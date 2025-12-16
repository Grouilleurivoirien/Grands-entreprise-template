import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          setIsMobileMenuOpen(false);
      }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-black">
             G
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl tracking-widest font-bold">CRANDS</span>
            <span className="text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase">Entreprises</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Agence</a>
          <a href="#" className="hover:text-white transition-colors">Expertises</a>
          <a href="#" className="hover:text-white transition-colors">Réalisations</a>
          <a href="#contact" onClick={scrollToContact} className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button onClick={scrollToContact} className="hidden md:block bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-2.5 rounded-full transition-all text-sm">
            Demander un devis
          </button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-t border-white/10 p-6 flex flex-col gap-4">
          <a href="#" className="text-gray-300 hover:text-white">Agence</a>
          <a href="#" className="text-gray-300 hover:text-white">Expertises</a>
          <a href="#" className="text-gray-300 hover:text-white">Réalisations</a>
          <a href="#contact" onClick={scrollToContact} className="text-gray-300 hover:text-white">Contact</a>
          <button onClick={scrollToContact} className="bg-accent text-white font-semibold px-6 py-3 rounded-full w-full">
            Demander un devis
          </button>
        </div>
      )}
    </header>
  );
};