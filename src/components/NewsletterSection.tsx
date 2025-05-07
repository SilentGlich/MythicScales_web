
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NewsletterSection = () => {
  return (
    <section className="py-24 relative noise-bg bg-agonia-nearBlack">
      <div className="hero-glow top-[50%] left-[30%] opacity-15"></div>
      
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 gradient-text">Enter the Realm</h2>
          <p className="text-lg text-agonia-text/80 mb-8">
            Subscribe to our newsletter to receive exclusive content, early chapter releases, 
            and updates about the world of Agonia.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 mb-6">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-agonia-darkBg border-agonia-purple/30 focus:border-agonia-purple text-agonia-text"
              required
            />
            <Button type="submit" className="bg-purple-glow hover:opacity-90 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-agonia-text/60">
            By subscribing, you agree to receive email communications from us. 
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
