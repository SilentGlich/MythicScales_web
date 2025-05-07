
import { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-agonia-nearBlack/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="font-bold text-xl md:text-2xl gradient-text">Agonia</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#story" className="menu-item">Story</a>
          <div className="relative group">
            <button className="menu-item flex items-center gap-1">
              Chapters <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-agonia-nearBlack/95 backdrop-blur-sm rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-agonia-purple/20">
              <a href="#chapter1" className="block px-4 py-2 hover:bg-agonia-purple/10">Chapter I - The Beginning</a>
              <a href="#chapter2" className="block px-4 py-2 hover:bg-agonia-purple/10">Chapter II - The Descent</a>
              <a href="#chapter3" className="block px-4 py-2 hover:bg-agonia-purple/10">Chapter III - The Revelation</a>
            </div>
          </div>
          <a href="#characters" className="menu-item">Characters</a>
          <a href="#about" className="menu-item">About</a>
          <Button className="ml-4 bg-purple-glow hover:opacity-90">Get the Book</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-agonia-text p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-agonia-nearBlack/95 backdrop-blur-sm transition-all duration-300 border-t border-agonia-purple/20 ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}>
        <div className="container mx-auto py-4 flex flex-col space-y-4">
          <a href="#story" className="menu-item py-2">Story</a>
          <div className="py-2">
            <button onClick={() => {}} className="menu-item flex items-center gap-1 w-full text-left">
              Chapters <ChevronDown size={16} />
            </button>
            <div className="pl-4 mt-2 border-l border-agonia-purple/20">
              <a href="#chapter1" className="block py-2 hover:text-agonia-purple">Chapter I - The Beginning</a>
              <a href="#chapter2" className="block py-2 hover:text-agonia-purple">Chapter II - The Descent</a>
              <a href="#chapter3" className="block py-2 hover:text-agonia-purple">Chapter III - The Revelation</a>
            </div>
          </div>
          <a href="#characters" className="menu-item py-2">Characters</a>
          <a href="#about" className="menu-item py-2">About</a>
          <Button className="mt-2 bg-purple-glow hover:opacity-90">Get the Book</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
