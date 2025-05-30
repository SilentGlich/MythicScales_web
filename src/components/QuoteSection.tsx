
import React from 'react';

const QuoteSection = () => {
  return (
    <section className="py-24 relative bg-black">
      <div className="hero-glow top-[50%] left-[50%] opacity-10"></div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mc-border">
          <div className="text-4xl text-minecraft-red/40 mb-6">"</div>
          <p className="text-2xl md:text-3xl font-light italic text-minecraft-text/90 mb-8">
            In the realm of MythicScales, legends are forged through battle.
            <span id="survival" className="block mt-2">Join our Survival world to build your empire.</span>
            <span id="cpvp" className="block mt-2">Join the Crystal PvP arena to claim your glory.</span>
            <span id="bedwars" className="block mt-2">Or defend your bed in Bedwars to become a champion.</span>
          </p>
          <div className="text-minecraft-red">— The MythicScales Chronicles</div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
