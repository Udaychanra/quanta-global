import { useState } from 'react';
import { ArrowRight, Brain, Zap, Target, Clock, Users, BarChart3, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Products = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Beta signup:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  Meet SARAH – The AI Teammate 
                  <span className="text-primary"> SAP Has Been Missing</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Finally, SAP support that works the way you do. Not against you.
                </p>
              </div>
              <Button size="lg" className="btn-corporate text-lg px-8 py-4 shadow-md rounded-full bg-primary text-white hover:bg-primary/90 transition">
                Join the Private Beta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-white shadow-lg rounded-3xl flex items-center justify-center">
                <Brain className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      {/* <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-6 p-8 bg-white rounded-2xl shadow-md">
                <div className="flex items-center space-x-4">
                  <Clock className="h-8 w-8 text-destructive" />
                  <h3 className="text-2xl font-semibold text-gray-900">Endless Hours Wasted</h3>
                </div>
                <p className="text-lg text-gray-600">
                  Your SAP system should make work easier. Instead, it demands hours of repetitive effort and leaves users digging through data.
                </p>
              </div>
              
              <div className="space-y-6 p-8 bg-white rounded-2xl shadow-md">
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-gray-900">Built from Experience</h3>
                </div>
                <p className="text-lg text-gray-600">
                  SARAH was born from years of watching this frustration play out. We knew there had to be a better way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* What is SARAH Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2 inline-block relative">
              What is SARAH?
              <span className="block w-12 h-1 bg-primary rounded-full mx-auto mt-2"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SARAH AI (Smart Autonomous Responsive Assistant for Humans) is an AI-native productivity layer built for SAP—on S/4HANA, ECC, or BTP.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6 p-8 bg-white rounded-2xl shadow-xl transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto shadow group-hover:scale-105 transition-transform">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Productivity</h3>
              <p className="text-gray-600">
                Handles repetitive tasks and frees your team's time for strategic work that actually matters.
              </p>
            </div>

            <div className="text-center space-y-6 p-8 bg-white rounded-2xl shadow-xl transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto shadow group-hover:scale-105 transition-transform">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Personality</h3>
              <p className="text-gray-600">
                Learns how your team works and adapts to your unique processes and preferences.
              </p>
            </div>

            <div className="text-center space-y-6 p-8 bg-white rounded-2xl shadow-xl transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto shadow group-hover:scale-105 transition-transform">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Precision</h3>
              <p className="text-gray-600">
                Surfaces insights before you even ask, anticipating your needs with intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Quote Section */}
      {/* <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center p-10 bg-white rounded-2xl shadow-md">
            <blockquote className="text-3xl lg:text-4xl font-medium text-gray-900 leading-relaxed italic">
              "We spent months building, breaking, and rebuilding SARAH after decades of watching SAP inefficiencies frustrate organizations. This isn't just AI. It's a teammate."
            </blockquote>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <p className="text-gray-600 font-medium">The SARAH AI Team</p>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Private Beta CTA Section */}
      <section className="section-padding bg-primary/5">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-2 text-gray-900 inline-block relative">
              Join the Private Beta
              <span className="block w-12 h-1 bg-primary rounded-full mx-auto mt-2"></span>
            </h2>
            <p className="text-xl mb-12 text-gray-700">
              We're selecting a limited number of partners for our private beta. Be among the first to experience the future of SAP productivity.
            </p>
            <div className="bg-white rounded-3xl p-10 max-w-2xl mx-auto shadow-2xl border border-primary/10">
              <form 
                action="https://script.google.com/macros/s/AKfycbwG-qjQsqSjGB2n8LhHt_ZV5mZkiHGFz7lUuMn80kCpTEYxGegQ6Jur1cq4o_VBzIpR/exec"
                method="POST"
                target="_blank"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition"
                  />
                </div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition"
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your SAP challenges..."
                  rows={4}
                  className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-white hover:bg-primary/90 font-bold text-lg py-4 rounded-full shadow-lg transition"
                >
                  Request Beta Access
                  <CheckCircle className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-gray-400 mt-2">We respect your privacy. Your information will never be shared.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;