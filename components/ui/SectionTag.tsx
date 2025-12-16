import React from 'react';

export const SectionTag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
      {text}
    </span>
  );
};