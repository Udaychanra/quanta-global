import React from 'react';
import { Button } from './ui/button';

const AIDataClosingCTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main Message with enhanced styling */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">Build Your Intelligent Enterprise</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Ready to turn your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">data into intelligence</span>?
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              AI & Data becomes the nervous system of enterprise orchestration, delivering foresight, simplifying complexity, and accelerating execution.
            </p>
          </div>
          
          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              className="group relative bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-105 border-0 overflow-hidden"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Button content */}
              <span className="relative flex items-center justify-center space-x-3">
                <span>Talk to Us</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </Button>
            
            <Button
              variant="outline"
              className="group relative border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden backdrop-blur-sm"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Button content */}
              <span className="relative flex items-center justify-center space-x-3">
                <span>Explore AI & Data</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </div>
          
          {/* Enhanced decorative elements */}
          <div className="pt-12 space-y-6">
            {/* Main decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto rounded-full"></div>
            
            {/* Additional decorative elements */}
            <div className="flex justify-center items-center space-x-4">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-150"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
          
          {/* Bottom accent */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default AIDataClosingCTA;
