import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Building2, Cpu, FlaskConical, Factory, ShoppingBag, Flame, Car, Landmark, CheckCircle } from 'lucide-react';

type Industry = {
  name: string;
  blurb: string;
  icon: JSX.Element;
};

const INDUSTRIES: Industry[] = [
  { name: 'Financial Services and Insurance', blurb: 'Modernize core systems, risk, and reporting while scaling digital channels.', icon: <Building2 className="h-6 w-6 text-blue-700" /> },
  { name: 'Technology, Media, and Telecom', blurb: 'Scale platforms, subscriptions, and data products with cost control.', icon: <Cpu className="h-6 w-6 text-blue-700" /> },
  { name: 'Life Sciences and Healthcare', blurb: 'Enable compliant, data-driven operations from R&D to patient services.', icon: <FlaskConical className="h-6 w-6 text-blue-700" /> },
  { name: 'Manufacturing and Industrial', blurb: 'Digitize plants and supply networks for resilient, efficient operations.', icon: <Factory className="h-6 w-6 text-blue-700" /> },
  { name: 'Consumer Goods and Retail', blurb: 'Plan demand, optimize fulfillment, and elevate omni-channel experiences.', icon: <ShoppingBag className="h-6 w-6 text-blue-700" /> },
  { name: 'Energy and Utilities', blurb: 'Transform asset-heavy operations with realtime visibility and safety.', icon: <Flame className="h-6 w-6 text-blue-700" /> },
  { name: 'Automotive and Transportation', blurb: 'Integrate design-to-delivery with connected, sustainable mobility.', icon: <Car className="h-6 w-6 text-blue-700" /> },
  { name: 'Government and Public Services', blurb: 'Improve mission outcomes with secure, data-informed services.', icon: <Landmark className="h-6 w-6 text-blue-700" /> },
];

const Industries = () => {
  const [active, setActive] = useState<string>(INDUSTRIES[0].name);
  const activeItem = INDUSTRIES.find(i => i.name === active)!;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />

      {/* Hero */}
      <section className="section-padding">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Industries</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tailored blueprints and accelerators for your industry’s value levers.
          </p>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="section-padding pt-0">
        <div className="section-container grid md:grid-cols-4 gap-6">
          {INDUSTRIES.slice(0, 4).map((i) => (
            <div key={i.name} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              {i.icon}
              <h3 className="font-semibold text-gray-900 mt-3 mb-2">{i.name.split(' ')[0]} Focus</h3>
              <p className="text-gray-600 text-sm">{i.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selectable List */}
      <section className="section-padding pt-0">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="md:col-span-1 border-r border-gray-200">
              {INDUSTRIES.map((i) => (
                <button
                  key={i.name}
                  onClick={() => setActive(i.name)}
                  className={`w-full text-left px-6 py-4 text-base md:text-lg transition-colors ${
                    active === i.name ? 'bg-blue-50 text-blue-800 font-semibold' : 'hover:bg-blue-50 text-blue-700'
                  }`}
                >
                  {i.name}
                </button>
              ))}
            </div>
            <div className="md:col-span-2 p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">{activeItem.icon}<span>{activeItem.name}</span></h2>
              <p className="text-gray-600 mb-6">{activeItem.blurb}</p>
              <ul className="grid md:grid-cols-2 gap-4">
                {["Value levers", "Core processes", "Data & AI", "Security & Controls"].map((k) => (
                  <li key={k} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">{k}</div>
                      <div className="text-gray-600 text-sm">Accelerators and templates tailored to {activeItem.name.toLowerCase()}.</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="section-container text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Request an industry demo</h3>
          <p className="opacity-90 mb-6">See best practices and metrics that matter for your sector.</p>
          <a href="/contact" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl">Book a session</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
