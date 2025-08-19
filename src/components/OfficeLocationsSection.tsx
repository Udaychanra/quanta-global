import React from 'react';
import { MapPin, Leaf } from 'lucide-react';

const OfficeLocationsSection = () => {
  const locations = [
    {
      city: 'San Francisco',
      address: 'Howe St, Vancouver, BC VZS 2S8, California.',
      phone: '+1 12345 67890'
    },
    {
      city: 'New York',
      address: 'Henri Ave, Montreal, QB H2S 3S3, New York',
      phone: '+1 12345 67890'
    },
    {
      city: 'Hyderabad',
      address: 'Kingston 584 Toronto M4L 1V3, India',
      phone: '+1 12345 67890'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Office Locations</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            For more information about our training programs and how we can help transform your career, please contact us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 p-6"
            >
              <div className="flex items-start mb-4">
                <Leaf className="h-6 w-6 text-gray-700 mr-3 mt-1" />
                <h3 className="text-2xl font-bold text-gray-900">{location.city}</h3>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {location.address}
                </p>
                <p className="text-gray-700 text-sm font-medium">
                  {location.phone}
                </p>
              </div>

              <button 
                className="flex items-center gap-2 text-blue-200 border border-red-600 rounded-lg px-4 py-2 hover:bg-red-600 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocationsSection; 