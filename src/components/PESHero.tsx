import React from 'react';
import { Button } from './ui/button';

const PESHero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main Heading with enhanced typography */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Partner Ecosystem Strategy</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed font-medium max-w-4xl mx-auto">
              Independent guidance to align technology and partners with enterprise vision.
            </p>
            
            {/* Animated underline */}
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              className="group relative bg-white text-slate-900 hover:bg-blue-50 px-12 py-5 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-105 border-0 overflow-hidden"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Button content */}
              <span className="relative flex items-center justify-center space-x-3">
                <span>Talk to Us</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </Button>
            
            <Button
              variant="outline"
              className="group relative border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 px-12 py-5 text-xl font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden backdrop-blur-sm"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Button content */}
              <span className="relative flex items-center justify-center space-x-3">
                <span>Explore PES</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PESHero;
