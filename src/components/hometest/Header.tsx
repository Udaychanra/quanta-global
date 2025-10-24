import React from 'react';
import { useScroll } from '../../hooks/useScroll';

const Header: React.FC = () => {
  const { isScrolled } = useScroll();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/SwiftAI-fav-2.png"
                alt="SwiftAI Logo"
                className="h-8 w-8"
              />
              <span className={`text-2xl font-heading transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
               
              </span>
            </a>
          </div>

          {/* Navigation with Social Links */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('studio')}
                className={`font-body text-sm font-body-medium transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-300' : 'text-white hover:text-blue-300'
                }`}
              >
                SWIFT STUDIO
              </button>
              <div className="h-4 w-px bg-gray-400"></div>
              <button 
                onClick={() => scrollToSection('edge')}
                className={`font-body text-sm font-body-medium transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-300' : 'text-white hover:text-blue-300'
                }`}
              >
                SWIFT EDGE
              </button>
              <div className="h-4 w-px bg-gray-400"></div>
              <button 
                onClick={() => scrollToSection('cloud')}
                className={`font-body text-sm font-body-medium transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-300' : 'text-white hover:text-blue-300'
                }`}
              >
                SWIFT CLOUD
              </button>
              <div className="h-4 w-px bg-gray-400"></div>
              <button 
                onClick={() => scrollToSection('squad')}
                className={`font-body text-sm font-body-medium transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-300' : 'text-white hover:text-blue-300'
                }`}
              >
                SWIFT SQUAD
              </button>
              <div className="h-4 w-px bg-gray-400"></div>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-body text-sm font-body-medium transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-300' : 'text-white hover:text-blue-300'
                }`}
              >
                CONTACT US
              </button>
              <div className="h-4 w-px bg-gray-400"></div>
            </nav>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/SwiftAI/" className={`transition-colors ${
              isScrolled ? 'text-gray-400 hover:text-blue-400' : 'text-white hover:text-blue-300'
            }`}>
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.instagram.com/swiftai/" className={`transition-colors ${
              isScrolled ? 'text-gray-400 hover:text-pink-400' : 'text-white hover:text-pink-300'
            }`}>
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="mailto:hello@swiftai.co" className={`transition-colors ${
              isScrolled ? 'text-gray-400 hover:text-gray-300' : 'text-white hover:text-gray-300'
            }`}>
              <span className="sr-only">Email</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/swiftai/" className={`transition-colors ${
              isScrolled ? 'text-gray-400 hover:text-blue-400' : 'text-white hover:text-blue-300'
            }`}>
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
