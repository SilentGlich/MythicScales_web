
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden noise-bg flex items-center">
      {/* Background glow effects */}
      <div className="hero-glow top-[10%] left-[10%] opacity-30"></div>
      <div className="hero-glow bottom-[20%] right-[5%] opacity-20"></div>
      
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Agonia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-agonia-text/90 mb-10">
            Enter the realm where shadows whisper and reality bends.
            <br />A journey beyond the veil of perception.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="px-8 py-6 text-lg bg-purple-glow hover:opacity-90 group">
              Discover the Story 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-agonia-purple/30 text-agonia-text hover:bg-agonia-purple/10">
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-agonia-text/60 mb-2">Scroll to explore</span>
          <div className="w-[2px] h-8 bg-gradient-to-b from-agonia-purple to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
