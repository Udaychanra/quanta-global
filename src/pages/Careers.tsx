import React, { useState } from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const jobs = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Build beautiful, performant UIs with React and modern web tech. Collaborate with design and backend teams.',
    emoji: '💻',
  },
  {
    id: 'smm',
    title: 'Social Media Marketing Lead',
    description: 'Drive our brand presence and engagement across all major social platforms. Creativity and analytics required.',
    emoji: '📱',
  },
  {
    id: 'pm',
    title: 'Product Manager',
    description: 'Own product vision, work with cross-functional teams, and deliver features that delight users.',
    emoji: '🚀',
  },
  {
    id: 'ux',
    title: 'UX/UI Designer',
    description: 'Design intuitive, delightful user experiences and interfaces for our products.',
    emoji: '🎨',
  },
];

const Careers = () => {
  const [applying, setApplying] = useState(null as string | null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    position: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleApply = (jobId: string, jobTitle: string) => {
    setApplying(jobId);
    setFormData(f => ({ ...f, position: jobTitle }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      <main className="section-container py-16">
        <h1 className="text-4xl font-extrabold text-center mb-2 text-gray-900">Careers at QuantaGlobal</h1>
        <p className="text-center text-lg text-gray-500 mb-10 max-w-2xl mx-auto">Join our team of innovators, creators, and leaders. Explore our open positions and help shape the future of technology and business.</p>
        <div className="mb-12">
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"><span className="inline-block w-2 h-2 bg-primary rounded-full"></span>Open Positions</h2> */}
          <div className="max-w-3xl mx-auto space-y-8">
            {jobs.map(job => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl md:text-4xl select-none">{job.emoji}</span>
                  <div>
                    <div className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">{job.title}</div>
                    <div className="text-gray-600 mt-1 mb-2 text-sm">{job.description}</div>
                  </div>
                </div>
                <Button onClick={() => handleApply(job.id, job.title)} className="w-full md:w-auto rounded-full px-8 py-3 text-lg font-bold shadow bg-primary text-white hover:bg-primary/90 transition">Apply</Button>
              </div>
            ))}
          </div>
        </div>
        {applying && (
          <div className="max-w-xl mx-auto mt-16 animate-fade-in bg-white rounded-3xl shadow-2xl p-10 border border-primary/10">
            <h2 className="text-2xl font-bold mb-4 text-center text-primary">Apply for {formData.position}</h2>
            <hr className="mb-6 border-primary/20" />
            <form
              action="https://script.google.com/macros/s/AKfycbwG-qjQsqSjGB2n8LhHt_ZV5mZkiHGFz7lUuMn80kCpTEYxGegQ6Jur1cq4o_VBzIpR/exec"
              method="POST"
              target="_blank"
              className="space-y-6"
            >
              <input type="hidden" name="position" value={formData.position} />
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition"
              />
              <Input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition"
              />
              <Textarea
                name="message"
                placeholder="Tell us about yourself and why you're a great fit..."
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition"
              />
              <div className="flex gap-4">
                <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-bold text-lg py-3 rounded-full shadow-lg transition">Submit Application</Button>
                <Button type="button" variant="outline" className="w-full rounded-full" onClick={() => setApplying(null)}>Cancel</Button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">We respect your privacy. Your information will never be shared.</p>
            </form>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Careers