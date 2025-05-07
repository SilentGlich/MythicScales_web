
import React from 'react';
import { Button } from '@/components/ui/button';

const characters = [
  {
    name: 'Eliza Blackwood',
    role: 'Protagonist',
    description: 'A perceptive young woman whose ordinary life is upended when she begins to see beyond the veil between worlds.',
  },
  {
    name: 'Marcus Thorne',
    role: 'Mentor',
    description: 'A reclusive scholar with knowledge of the otherworldly phenomenon affecting Mirkwood and a mysterious connection to Agonia.',
  },
  {
    name: 'The Mirror Watcher',
    role: 'Antagonist',
    description: 'A being not of this world who observes through reflective surfaces and orchestrates the thinning of the veil.',
  },
  {
    name: 'Reyna Voss',
    role: 'Ally',
    description: 'A local librarian with her own secrets, who forms an unlikely alliance with Eliza as strange events unfold.',
  }
];

const CharactersSection = () => {
  return (
    <section id="characters" className="py-24 relative noise-bg">
      <div className="hero-glow bottom-[10%] right-[20%] opacity-20"></div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 gradient-text text-center">The Characters</h2>
          <p className="text-lg text-agonia-muted mb-16 text-center">Meet the souls caught between realms</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {characters.map((character, index) => (
              <div key={index} className="bg-agonia-nearBlack/50 backdrop-blur-sm rounded-lg p-6 border border-agonia-purple/10 hover:border-agonia-purple/30 transition-all hover:shadow-[0_0_15px_rgba(155,135,245,0.1)] duration-300">
                <h3 className="text-xl font-semibold gradient-text mb-1">{character.name}</h3>
                <p className="text-agonia-purple/70 text-sm mb-4">{character.role}</p>
                <p className="text-agonia-text/80">{character.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-purple-glow hover:opacity-90">Explore All Characters</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
