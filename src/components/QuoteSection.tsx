
import React from 'react';

const QuoteSection = () => {
  return (
    <section className="py-24 relative noise-bg bg-agonia-nearBlack">
      <div className="hero-glow top-[50%] left-[50%] opacity-10"></div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl text-agonia-purple/40 mb-6">"</div>
          <p className="text-2xl md:text-3xl font-light italic text-agonia-text/90 mb-8">
            The boundary between reality and illusion is nothing more than a whisper in the dark, 
            a fragile construct waiting to be shattered by those brave enough to see.
          </p>
          <div className="text-agonia-purple">— From the Book of Mirrors</div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
