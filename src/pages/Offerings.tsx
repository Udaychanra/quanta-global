import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Layers, Cloud, LineChart, Boxes } from 'lucide-react';

type OfferingCategoryKey = 'SAP' | 'Finance' | 'Supply Chain' | 'Cloud';

const OFFERINGS: Record<OfferingCategoryKey, { title: string; description: string }[]> = {
  SAP: [
    { title: 'Brownfield Migration', description: 'Move to S/4HANA quickly while preserving proven processes and investments.' },
    { title: 'S/4HANA Public Cloud', description: 'Adopt a modern, scalable ERP core with clean-core guardrails.' },
    { title: 'ERP Modernization', description: 'Rationalize, simplify, and de-customize to unlock agility and resilience.' },
    { title: 'Data Migration and Quality', description: 'Clean, map, and validate data for reliable business execution.' },
    { title: 'Universal Parallel Accounting', description: 'Enable multi-ledger compliance and faster close with UPA.' },
    { title: 'Integration and Extensions', description: 'Build composable processes with BTP, APIs, and event-driven patterns.' },
  ],
  Finance: [
    { title: 'Central Finance', description: 'Create a single source of truth across disparate ERPs.' },
    { title: 'Close and Reporting Automation', description: 'Shorten the close with automated reconciliations and controls.' },
    { title: 'Predictive Planning and FP&A', description: 'Improve forecast accuracy with driver-based and AI-assisted models.' },
    { title: 'Controllership and Treasury', description: 'Strengthen risk, liquidity, and policy compliance end-to-end.' },
    { title: 'Finance Operate', description: 'Operate finance as a product with reliable run, change, and insights.' },
    { title: 'GBS for Finance', description: 'Stand up scalable shared services for efficiency and consistency.' },
  ],
  'Supply Chain': [
    { title: 'Connected Planning', description: 'Unify demand, supply, and financial plans to align decisions.' },
    { title: 'Real-time Visibility', description: 'Sense disruptions across the network and respond faster.' },
    { title: 'Adaptive Fulfillment', description: 'Route, allocate, and promise intelligently to meet SLAs.' },
    { title: 'Digital Manufacturing', description: 'Digitize plants with MES, IoT, and AI-assisted quality.' },
    { title: 'Logistics Optimization', description: 'Optimize transportation, warehousing, and last-mile orchestration.' },
    { title: 'Sustainability and Traceability', description: 'Track emissions and provenance across the value chain.' },
  ],
  Cloud: [
    { title: 'Cloud Migration', description: 'Migrate workloads with zero-trust and landing zone best practices.' },
    { title: 'Clean Core Enablement', description: 'Refactor custom code and isolate innovation on platforms.' },
    { title: 'Platform Engineering', description: 'Productize developer experience with golden paths and self-service.' },
    { title: 'DevSecOps and SRE', description: 'Automate security and reliability from build to runtime.' },
    { title: 'FinOps and Cost Optimization', description: 'Control cloud spend with showback, budgets, and rightsizing.' },
  ],
};

const categories: OfferingCategoryKey[] = ['SAP', 'Finance', 'Supply Chain', 'Cloud'];

const Offerings = () => {
  const [activeCategory, setActiveCategory] = useState<OfferingCategoryKey>('SAP');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />

      {/* Hero */}
      <section className="section-padding">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Offerings</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Composable services to modernize your core, unlock intelligence, and scale outcomes.
          </p>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="section-padding pt-0">
        <div className="section-container grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <Layers className="h-8 w-8 text-blue-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Modernize the Core</h3>
            <p className="text-gray-600 text-sm">Move to clean-core ERP and remove technical debt that slows change.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <LineChart className="h-8 w-8 text-blue-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Operate with Insight</h3>
            <p className="text-gray-600 text-sm">Automate finance, improve visibility, and steer by value, not by volume.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <Boxes className="h-8 w-8 text-blue-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Resilient Supply Chains</h3>
            <p className="text-gray-600 text-sm">Plan, make, and move with agility across the end-to-end network.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <Cloud className="h-8 w-8 text-blue-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Cloud at Pace</h3>
            <p className="text-gray-600 text-sm">Platform engineering and FinOps to scale securely and cost-effectively.</p>
          </div>
        </div>
      </section>

      {/* Interactive Panel */}
      <section className="section-padding pt-0">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="md:col-span-1 border-r border-gray-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-6 py-4 text-base md:text-lg transition-colors ${
                    activeCategory === cat ? 'bg-blue-50 text-blue-800 font-semibold' : 'hover:bg-blue-50 text-blue-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="md:col-span-2 p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">{activeCategory}</h2>
              <ul className="space-y-4">
                {OFFERINGS[activeCategory].map(({ title, description }) => (
                  <li key={title} className="">
                    <div className="font-medium text-blue-800">{title}</div>
                    <div className="text-gray-600 text-sm">{description}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding pt-0">
        <div className="section-container bg-white rounded-2xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Quanta</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Clean-core first", "Value-anchored", "Security by design"].map((h) => (
              <div key={h} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-700 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">{h}</div>
                  <div className="text-gray-600 text-sm">We align architecture, operating model, and delivery to outcomes.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="section-container text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Plan your transformation sprint</h3>
          <p className="opacity-90 mb-6">Get a 2-week accelerator plan tailored to your landscape and goals.</p>
          <a href="/contact" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl">Talk to us</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offerings;
