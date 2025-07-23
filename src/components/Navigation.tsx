import { useState, useRef } from 'react';
import { Menu, X, ChevronDown, Search, Globe, Phone, User } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Timer ref for delayed dropdown close
  const dropdownCloseTimer = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Remove Careers from dropdown navigationItems, handle as a single nav link
  const navigationItems = [
    {
      label: 'Who we are',
      items: [
        { label: 'About Us', action: () => (window.location.href = '/about') },
        { label: 'Our Team', action: () => (window.location.href = '/team') },
        // { label: 'Leadership', action: () => (window.location.href = '/leadership') },
      ]
    },
    {
      label: 'What we do',
      items: [
        { label: 'Services', action: () => (window.location.href = '/services') },
        { label: 'Solutions', action: () => (window.location.href = '/solutions') },
        { label: 'Products', action: () => (window.location.href = '/products') },
      ]
    },
    // {
    //   label: 'Our Thinking',
    //   items: [
    //     { label: 'Insights', action: () => (window.location.href = '/insights') },
    //     { label: 'Research', action: () => (window.location.href = '/research') },
    //     { label: 'Publications', action: () => (window.location.href = '/publications') },
    //   ]
    // },
  ];

  // Handlers for dropdown with 5s delay on close
  const handleDropdownMouseEnter = (label: string) => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    setActiveDropdown(label);
  };

  const handleDropdownMouseLeave = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
    }
    dropdownCloseTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 3000);
  };

  return (
    <nav className="top-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="h-16 w-auto"
            />
            <span className="text-2xl font-bold text-white">QuantaGlobal</span>
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                onMouseLeave={handleDropdownMouseLeave}
                style={{ display: 'inline-block' }}
              >
                <button className="flex items-center text-white hover:text-gray-300 transition-colors">
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50"
                    onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {item.items.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={subItem.action}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Careers as a single nav link */}
            <button
              className="flex items-center text-white hover:text-gray-300 transition-colors"
              onClick={() => (window.location.href = '/careers')}
            >
              Careers
            </button>
          </div>

          {/* Utility Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="text-white hover:text-gray-300 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="flex items-center text-white hover:text-gray-300 transition-colors">
              <Globe className="h-5 w-5 mr-1" />
              <span className="text-sm">US - EN</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button> */}
            <button
              className="text-white hover:text-gray-300 transition-colors relative"
              onClick={() => (window.location.href = '/contact')}
            >
              <Phone className="h-5 w-5" />
              <div className="absolute -top-1 -right-1">
               
              </div>
            </button>
            {/* <button className="text-white hover:text-gray-300 transition-colors">
              <User className="h-5 w-5" />
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-700">
              {navigationItems.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="px-3 py-2 text-white font-medium">
                    {item.label}
                  </div>
                  {item.items.map((subItem) => (
                    <button
                      key={subItem.label}
                      onClick={subItem.action}
                      className="block px-6 py-2 text-gray-300 hover:text-white transition-colors w-full text-left text-sm"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              ))}
              {/* Careers as a single nav link in mobile */}
              <button
                className="block w-full px-3 py-2 text-white font-medium text-left hover:text-gray-300 transition-colors"
                onClick={() => (window.location.href = '/careers')}
              >
                Careers
              </button>
              
              {/* Mobile Utility Icons */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-700">
                {/* <button className="text-white hover:text-gray-300 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
                <button className="flex items-center text-white hover:text-gray-300 transition-colors">
                  <Globe className="h-5 w-5 mr-1" />
                  <span className="text-sm">US - EN</span>
                </button> */}
                <button
                  className="text-white hover:text-gray-300 transition-colors relative"
                  onClick={() => (window.location.href = '/contact')}
                >
                  <Phone className="h-5 w-5" />
                  <div className="absolute -top-1 -right-1">
                    {/* <div className="w-3 h-3 bg-red-500 rounded-full"></div> */}
                  </div>
                </button>
                {/* <button className="text-white hover:text-gray-300 transition-colors">
                  <User className="h-5 w-5" />
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;