  import React from 'react';

const EdgeDevices: React.FC = () => {
  const features = [
    {
      icon: "🎤",
      title: "Built-in Mic & Speaker",
      description: "A two way speaker and microphone set-up will make you more than just a spectator."
    },
    {
      icon: "📹",
      title: "360° Camera",
      description: "All-round protection in Full High-Definition video. Infrared Night Vision|AI motion detection | Talkback feature | Inverted installation"
    },
    {
      icon: "👋",
      title: "Motion Sensor",
      description: "Through the integration of deep learning technology and focused optimization of the algorithms and network software, the camera is able to accurately determine when to alert you and notifies you on your phone."
    },
    {
      icon: "🔌",
      title: "Power Consumption",
      description: "Our Cameras runs on very low power. Approximately 5V."
    },
    {
      icon: "📐",
      title: "Built-in Desk",
      description: "Comes with Wall Mounting Accessory."
    },
    {
      icon: "📶",
      title: "Connectivity",
      description: "Wi-Fi IEEE 802.11 b/g/n 2.4 GHz."
    }
  ];

  return (
    <section
      className="relative py-20 min-h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/edgedevices.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Empty space for the image to show through */}
          <div className="hidden lg:block"></div>

          {/* Right side - Feature overlay */}
          <div className="bg-black bg-opacity-80 backdrop-blur-sm p-8 rounded-lg">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-subheading text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed font-body">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeDevices;
