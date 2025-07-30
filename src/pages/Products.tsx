import { useState } from 'react';
import { ArrowRight, Brain, Zap, Target, Clock, Users, BarChart3, CheckCircle, Sparkles, Star } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  AI-Powered SAP Assistant
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                  Meet SARAH – The AI Teammate 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> SAP Has Been Missing</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Finally, SAP support that works the way you do. Not against you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-corporate text-lg px-8 py-4 shadow-xl rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  onClick={() => window.open('https://verve-app.vercel.app', '_blank')}
                >
                  Join the Private Beta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-4 shadow-lg rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 animate-pulse"></div>
                  <Brain className="w-32 h-32 text-white relative z-10" />
                  <div className="absolute top-4 right-4">
                    <Star className="h-6 w-6 text-yellow-300 animate-bounce" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Sparkles className="h-6 w-6 text-pink-300 animate-pulse" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">AI Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SARAH Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/50"></div>
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Revolutionary AI Technology
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              What is SARAH?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              SARAH AI (Smart Autonomous Responsive Assistant for Humans) is an AI-native productivity layer built for SAP—on S/4HANA, ECC, or BTP.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative text-center space-y-6 p-8 bg-white rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Productivity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Handles repetitive tasks and frees your team's time for strategic work that actually matters.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative text-center space-y-6 p-8 bg-white rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Personality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learns how your team works and adapts to your unique processes and preferences.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative text-center space-y-6 p-8 bg-white rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Precision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Surfaces insights before you even ask, anticipating your needs with intelligent automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Beta CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              Limited Time Opportunity
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
              Join the Private Beta
            </h2>
            <p className="text-xl mb-12 text-gray-700 max-w-3xl mx-auto">
              We're selecting a limited number of partners for our private beta. Be among the first to experience the future of SAP productivity.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 max-w-2xl mx-auto shadow-2xl border border-white/20">
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
                    className="bg-white/90 border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 h-12"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="bg-white/90 border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 h-12"
                  />
                </div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="bg-white/90 border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 h-12"
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your SAP challenges..."
                  rows={4}
                  className="bg-white/90 border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-bold text-lg py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Request Beta Access
                  <CheckCircle className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-gray-500 mt-2">We respect your privacy. Your information will never be shared.</p>
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