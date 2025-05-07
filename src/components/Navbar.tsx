
import { useState, useEffect } from 'react';
import { Menu, ChevronDown, Users, Gamepad, Ticket } from 'lucide-react';
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="font-bold text-xl md:text-2xl gradient-text">MythicScales</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('server')} className="menu-item">Server Info</button>
          <div className="relative group">
            <button className="menu-item flex items-center gap-1">
              Game Modes <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-minecraft-nearBlack/95 backdrop-blur-sm rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-minecraft-red/20">
              <button onClick={() => scrollToSection('survival')} className="block w-full text-left px-4 py-2 hover:bg-minecraft-red/10">Survival</button>
              <button onClick={() => scrollToSection('cpvp')} className="block w-full text-left px-4 py-2 hover:bg-minecraft-red/10">Crystal PvP</button>
              <button onClick={() => scrollToSection('bedwars')} className="block w-full text-left px-4 py-2 hover:bg-minecraft-red/10">Bedwars</button>
            </div>
          </div>
          <button onClick={() => scrollToSection('community')} className="menu-item flex items-center">
            <Users size={16} className="mr-1" /> Community
          </button>
          <button onClick={() => scrollToSection('support')} className="menu-item flex items-center">
            <Ticket size={16} className="mr-1" /> Support
          </button>
          <Button className="ml-4 bg-red-glow hover:opacity-90">Join Now</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-minecraft-text p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-minecraft-nearBlack/95 backdrop-blur-sm transition-all duration-300 border-t border-minecraft-red/20 ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}>
        <div className="container mx-auto py-4 flex flex-col space-y-4">
          <button onClick={() => scrollToSection('server')} className="menu-item py-2 text-left">Server Info</button>
          <div className="py-2">
            <button className="menu-item flex items-center gap-1 w-full text-left">
              Game Modes <ChevronDown size={16} />
            </button>
            <div className="pl-4 mt-2 border-l border-minecraft-red/20">
              <button onClick={() => scrollToSection('survival')} className="block w-full text-left py-2 hover:text-minecraft-red">Survival</button>
              <button onClick={() => scrollToSection('cpvp')} className="block w-full text-left py-2 hover:text-minecraft-red">Crystal PvP</button>
              <button onClick={() => scrollToSection('bedwars')} className="block w-full text-left py-2 hover:text-minecraft-red">Bedwars</button>
            </div>
          </div>
          <button onClick={() => scrollToSection('community')} className="menu-item py-2 flex items-center text-left">
            <Users size={16} className="mr-1" /> Community
          </button>
          <button onClick={() => scrollToSection('support')} className="menu-item py-2 flex items-center text-left">
            <Ticket size={16} className="mr-1" /> Support
          </button>
          <Button className="mt-2 bg-red-glow hover:opacity-90 w-full">Join Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
