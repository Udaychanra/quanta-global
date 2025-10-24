import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Header Section with Background Image */}
      <section
        className="relative py-20 min-h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/get-in-touch.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.45)', zIndex: 1 }}
        ></div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in touch
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto">
            Want to get in touch? We'd love to hear from you. Here's how you can reach us…
          </p>
        </div>
      </section>

      {/* Contact Cards and Form Section - Plain Background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Cards */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            {/* Talk to Sales */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Talk to sales
              </h4>
              <p className="text-gray-600 mb-6">
                Interested in our solutions? Just pick up the phone and call us.
              </p>
              <a
                href="tel:+919392834067"
                className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#A0522D] transition-colors"
              >
                +91 939-283-4067
              </a>
            </div>

            {/* Contact Support */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Contact support
              </h4>
              <p className="text-gray-600 mb-6">
                Sometimes you need a little help. Don't worry, We're here for you.
              </p>
              <button className="bg-[#8B4513] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#A0522D] transition-colors">
                CONTACT SUPPORT
              </button>
            </div>
          </div>

          {/* Ask a Question Form */}
          <div
            className="bg-white rounded-xl p-8 shadow-lg max-w-7xl mx-auto"
          >
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Ask a question
              </h4>
              <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name (required)"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email (required)"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message (required)"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2C3E50] text-white py-3 px-6 rounded-lg hover:bg-[#34495E] transition-colors font-medium"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;