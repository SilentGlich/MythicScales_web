
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import QuoteSection from '@/components/QuoteSection';
import CharactersSection from '@/components/CharactersSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Update the document title
  React.useEffect(() => {
    document.title = 'MythicScales - Minecraft Server';
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <div id="server">
        <StorySection />
      </div>
      <div id="community">
        <QuoteSection />
      </div>
      <div id="support">
        <CharactersSection />
      </div>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
