
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Ticket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden noise-bg flex items-center">
      {/* Background glow effects */}
      <div className="hero-glow top-[10%] left-[10%] opacity-30"></div>
      <div className="hero-glow bottom-[20%] right-[5%] opacity-20"></div>
      
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">MythicScales</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-minecraft-text/90 mb-10">
            Explore. Build. Survive.
            <br />The ultimate Minecraft multiplayer experience.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="px-8 py-6 text-lg bg-red-glow hover:opacity-90 group">
              Join Server Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-minecraft-red/30 text-minecraft-text hover:bg-minecraft-red/10">
              <Ticket className="mr-2" size={18} />
              Support Ticket
            </Button>
          </div>

          <div className="mt-12 py-4 px-6 bg-minecraft-nearBlack/50 backdrop-blur-sm rounded-md inline-block">
            <span className="font-mono text-minecraft-red">SERVER IP:</span> <span className="font-bold">play.mythicscales.com</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-minecraft-text/60 mb-2">Scroll to explore</span>
          <div className="w-[2px] h-8 bg-gradient-to-b from-minecraft-red to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
