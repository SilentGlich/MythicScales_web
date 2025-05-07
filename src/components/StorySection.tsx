
import { Button } from '@/components/ui/button';

const StorySection = () => {
  return (
    <section id="story" className="py-24 relative noise-bg">
      <div className="hero-glow top-[30%] left-[60%] opacity-20"></div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 gradient-text text-center">The Story</h2>
          <p className="text-lg text-agonia-muted mb-12 text-center">A tale of mind-bending mystery and otherworldly intrigue</p>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="aspect-[3/4] bg-agonia-darkPurple/20 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-agonia-darkBg via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold mb-2">Chapter I</h3>
                    <p className="text-agonia-text/70">The Beginning</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">The Veil Thins</h3>
                <p className="text-agonia-text/90 mb-4">
                  In the quiet town of Mirkwood, where fog clings to ancient trees and whispers echo through empty streets, 
                  something stirs beyond the boundary of perception. As the veil between worlds grows thin, 
                  Eliza Blackwood finds herself drawn to shadows that shouldn't move.
                </p>
                <p className="text-agonia-text/90 mb-6">
                  Her ordinary life unravels as she begins to see glimpses of another realm—a place called Agonia, 
                  where logic bends and nightmares walk in daylight. What starts as fleeting visions soon becomes 
                  an inescapable reality.
                </p>
                <Button className="bg-purple-glow hover:opacity-90">Read Chapter I</Button>
              </div>
            </div>
            
            <div className="separator"></div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="aspect-[3/4] bg-agonia-darkPurple/20 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-agonia-darkBg via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold mb-2">Chapter II</h3>
                    <p className="text-agonia-text/70">The Descent</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Beyond the Mirror</h3>
                <p className="text-agonia-text/90 mb-4">
                  As Eliza's connection to Agonia strengthens, she discovers she is not merely an observer. 
                  The inhabitants of this twisted dimension have been watching her too—waiting for her. 
                  Mirror reflections linger too long, familiar faces wear unfamiliar expressions.
                </p>
                <p className="text-agonia-text/90 mb-6">
                  With her sanity fraying at the edges, Eliza must find others who have glimpsed beyond the veil. 
                  But in a town where everyone holds secrets, distinguishing ally from enemy becomes a dangerous game.
                </p>
                <Button className="bg-purple-glow hover:opacity-90">Read Chapter II</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
