import React, { useState } from 'react';
import { SectionTag } from './ui/SectionTag';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left hover:text-accent transition-colors"
        onClick={onClick}
      >
        <span className="font-medium text-lg pr-8">{question}</span>
        <div className={`bg-surface p-2 rounded-full border border-white/10 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
           <ChevronDown size={18} />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qu'est-ce que GRANDS ENTREPRISES ?",
      answer: "Grands Entreprises est un studio créatif et une agence de communication orientée 360 degrés. Notre objectif est de créer pour vous les vecteurs de communication les plus pertinents pour vos stratégies de développement."
    },
    {
      question: "Quels sont vos domaines d'expertise ?",
      answer: "Nous intervenons dans 6 domaines principaux : Conseils et Stratégie, Identité visuelle et graphique, Multimédia (Film, TV, Radio), Relation media, Internet/Digital, et l'Évènementiel."
    },
    {
      question: "Où êtes-vous situés ?",
      answer: "Nous sommes basés en Côte d'Ivoire. Vous pouvez nous contacter au +225 07 88 666 906 ou +225 27 35 999 529."
    },
    {
      question: "Proposez-vous de la production vidéo ?",
      answer: "Oui, nous réalisons des films publicitaires, institutionnels, des reportages, des publi-reportages et des podcasts."
    },
    {
      question: "Gérez-vous des événements d'entreprise ?",
      answer: "Absolument. Nous concevons et pilotons l'organisation d'événements corporate, lancements de produits, animations commerciales, salons et festivals."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <SectionTag text="FAQ" />
          <h2 className="text-4xl md:text-5xl font-serif mt-6">
            Questions <br />
            <span className="italic font-serif">Fréquentes</span>
          </h2>
          <p className="text-gray-400 mt-4">En savoir plus sur notre agence et nos services.</p>
        </div>

        <div className="bg-surface/50 border border-white/5 rounded-2xl px-8">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};