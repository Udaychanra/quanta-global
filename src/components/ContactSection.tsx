import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // No JS submit, just let the form POST to Google Apps Script

  return (
    <section id="contact" className="section-padding bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">Contact Us</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto text-center">
            Ready to start your digital transformation journey? Get in touch with our experts 
            to discuss your requirements and explore how we can help.
          </p>
        </div>
        <form
          action="https://script.google.com/macros/s/AKfycbwG-qjQsqSjGB2n8LhHt_ZV5mZkiHGFz7lUuMn80kCpTEYxGegQ6Jur1cq4o_VBzIpR/exec"
          method="POST"
          target="_blank"
          className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6"
        >
          <Input
            name="name"
            placeholder="Name*"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-base"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address*"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-base"
          />
          <Input
            name="company"
            placeholder="Company Name*"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-base"
          />
          <Textarea
            name="message"
            placeholder="How can we help?"
            rows={5}
            className="border border-gray-300 rounded-md px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-base"
            required
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-3 w-full transition-colors text-base">
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;