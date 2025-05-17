
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import CreativeButton from './CreativeButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-white font-display text-2xl font-bold">
          Aman<span className="text-purple-500">Pokhariya</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-purple-400 transition-colors cursor-pointer"
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-purple-400 transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection('projects')}
            className="text-white hover:text-purple-400 transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a 
            onClick={() => scrollToSection('skills')}
            className="text-white hover:text-purple-400 transition-colors cursor-pointer"
          >
            Skills
          </a>
          <CreativeButton 
            onClick={() => scrollToSection('contact')}
            className="ml-4"
          >
            Contact Me
          </CreativeButton>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-purple-400 transition-colors py-2 cursor-pointer"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-purple-400 transition-colors py-2 cursor-pointer"
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-purple-400 transition-colors py-2 cursor-pointer"
            >
              Projects
            </a>
            <a 
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-purple-400 transition-colors py-2 cursor-pointer"
            >
              Skills
            </a>
            <a 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-purple-400 transition-colors py-2 cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
