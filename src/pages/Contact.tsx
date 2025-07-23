import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 section-container py-16">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;