
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
    document.title = 'CraftRealm - Minecraft Server';
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <StorySection />
      <QuoteSection />
      <CharactersSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
