import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.location.href = '/'}
            role="button"
            tabIndex={0}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.location.href = '/';
              }
            }}
          >
            <img 
              src="/lovable-uploads/e13eef68-a947-49e5-b75b-c582a24bf7c5.png" 
              alt="QUANTA Global Logo" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-gradient">QuantaGlobal</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <a
              href="/products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </a>
            <button
              onClick={() => scrollToSection('industries')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Why Us
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-corporate"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Services
              </button>
              <a
                href="/products"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Products
              </a>
              <button
                onClick={() => scrollToSection('industries')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Why Us
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-corporate w-full mt-4"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;