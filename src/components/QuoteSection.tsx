
import React from 'react';

const QuoteSection = () => {
  return (
    <section className="py-24 relative noise-bg bg-minecraft-nearBlack">
      <div className="hero-glow top-[50%] left-[50%] opacity-10"></div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mc-border">
          <div className="text-4xl text-minecraft-red/40 mb-6">"</div>
          <p className="text-2xl md:text-3xl font-light italic text-minecraft-text/90 mb-8">
            In the depths of the mines, where darkness and danger linger,
            only the bravest adventurers find glory and riches beyond measure.
          </p>
          <div className="text-minecraft-red">— Legend of the Ancient Server</div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
