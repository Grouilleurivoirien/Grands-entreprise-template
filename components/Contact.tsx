import React, { useState } from 'react';
import { SectionTag } from './ui/SectionTag';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form (optionnel)
      // setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info & Context */}
          <div>
            <SectionTag text="CONTACTEZ-NOUS" />
            <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-8 leading-tight">
              Parlons de votre <br />
              <span className="italic text-accent">prochain projet.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Vous avez un projet en tête ? Remplissez le formulaire ci-contre pour obtenir un devis personnalisé. 
              Notre équipe vous recontactera sous 24h pour analyser vos besoins.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center shrink-0 text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Téléphone</h4>
                  <p className="text-gray-400">+225 07 88 666 906</p>
                  <p className="text-gray-400">+225 27 35 999 529</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center shrink-0 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <p className="text-gray-400">grandsentreprises@outlook.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center shrink-0 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Localisation</h4>
                  <p className="text-gray-400">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-surface border border-white/5 rounded-3xl p-8 md:p-10 relative">
            {isSubmitted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface rounded-3xl p-8 text-center animate-in fade-in duration-500 z-10">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message envoyé !</h3>
                <p className="text-gray-400">
                  Merci de nous avoir contactés. Notre équipe a bien reçu votre demande de devis et reviendra vers vous très rapidement.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm font-medium text-accent hover:text-white transition-colors"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className={`space-y-6 transition-opacity duration-300 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-300 ml-1">Entreprise</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre société"
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email professionnel</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemple@societe.com"
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300 ml-1">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+225 ..."
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-300 ml-1">Service souhaité</label>
                <div className="relative">
                    <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    >
                        <option value="" disabled className="text-gray-500">Sélectionnez un type de prestation</option>
                        <option value="strategie" className="text-black">Conseils & Stratégie</option>
                        <option value="identite" className="text-black">Identité Visuelle & Graphisme</option>
                        <option value="multimedia" className="text-black">Multimédia (Vidéo/Photo)</option>
                        <option value="digital" className="text-black">Site Web & Digital</option>
                        <option value="evenementiel" className="text-black">Évènementiel</option>
                        <option value="autre" className="text-black">Autre demande</option>
                    </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Parlez-nous de votre projet</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Objectifs, délais, budget estimé..."
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-hover disabled:bg-accent/70 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};