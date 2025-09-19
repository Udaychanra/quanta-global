import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Navigation as NavIcon, Rocket, Users, Brain } from 'lucide-react';

type EnablerKey = 'Enterprise Navigation Office' | 'Program Planning and Execution' | 'Partner Ecosystem Strategy' | 'AI and Data for the Intelligent Enterprise';

const ENABLERS: Record<EnablerKey, { title: string; description: string }[]> = {
  'Enterprise Navigation Office': [
    { title: 'Operating Model and Governance', description: 'Define roles, decision rights, and KPIs to guide enterprise-wide change.' },
    { title: 'Portfolio and Roadmap Control', description: 'Align initiatives to strategy with funding guardrails and benefits tracking.' },
    { title: 'Value Engineering and Benefits', description: 'Quantify value, track realization, and course-correct early.' },
    { title: 'Risk and Issue Management', description: 'Identify cross-program risks and drive transparent mitigation.' },
  ],
  'Program Planning and Execution': [
    { title: 'Accelerated Planning', description: 'Blueprint rapidly with business-led playbacks and iterative design.' },
    { title: 'Intelligent Testing and QA', description: 'Shift-left testing with automation and risk-based prioritization.' },
    { title: 'Cloud Modernization and Platforms', description: 'Build shared platforms and environments to speed delivery.' },
    { title: 'Change Enablement and Adoption', description: 'Activate leaders and frontline with targeted adoption programs.' },
  ],
  'Partner Ecosystem Strategy': [
    { title: 'Current State Assessment', description: 'Map capabilities and constraints across your partner landscape.' },
    { title: 'RFI and RFP Management', description: 'Run transparent selections focused on outcomes and accountability.' },
    { title: 'Solution Fit and Integration', description: 'Engineer interfaces and handoffs to avoid value leakage.' },
    { title: 'Launch Readiness', description: 'Operationalize go-live with hypercare and success metrics.' },
    { title: 'Business Case and ROI', description: 'Model investment scenarios with sensitivity and risk.' },
    { title: 'Ecosystem Mapping', description: 'Visualize capability coverage and roadmap dependencies.' },
  ],
  'AI and Data for the Intelligent Enterprise': [
    { title: 'Data Governance and Stewardship', description: 'Establish ownership, policies, and quality controls.' },
    { title: 'Data Architecture and Integration', description: 'Design scalable pipelines and semantic layers.' },
    { title: 'Analytics and Decision Intelligence', description: 'Deliver insight products and KPI services to teams.' },
    { title: 'Applied AI and Automation', description: 'Embed copilots and automation in critical workflows.' },
    { title: 'Emerging Tech', description: 'Experiment safely with GenAI, agents, and edge intelligence.' },
    { title: 'MLOps and Model Governance', description: 'Manage the ML lifecycle with audit and performance controls.' },
    { title: 'Archiving and Retention', description: 'Reduce risk and cost with policy-driven retention.' },
  ],
};

const ENABLER_TABS: EnablerKey[] = [
  'Enterprise Navigation Office',
  'Program Planning and Execution',
  'Partner Ecosystem Strategy',
  'AI and Data for the Intelligent Enterprise',
];

const Enablers = () => {
  const [activeEnabler, setActiveEnabler] = useState<EnablerKey>('Enterprise Navigation Office');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />

      {/* Hero */}
      <section className="section-padding">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Enablers</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Governance, delivery, partnerships, and data capabilities that make transformation stick.
          </p>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="section-padding pt-0">
        <div className="section-container grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <NavIcon className="h-8 w-8 text-blue-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Navigate with Clarity</h3>
            <p className="text-gray-600 text-sm">An enterprise navigation office aligns strategy, funding, and delivery.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <Rocket className="h-8 w-8 text-blue-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Deliver at Pace</h3>
            <p className="text-gray-600 text-sm">Playbooks, automation, and environments accelerate release cycles.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <Users className="h-8 w-8 text-blue-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Ecosystem Advantage</h3>
            <p className="text-gray-600 text-sm">Right partners, clear interfaces, and shared metrics drive outcomes.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <Brain className="h-8 w-8 text-blue-700 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Intelligent Enterprise</h3>
            <p className="text-gray-600 text-sm">Operate with data products, governed AI, and meaningful KPIs.</p>
          </div>
        </div>
      </section>

      {/* Interactive Panel */}
      <section className="section-padding pt-0">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="md:col-span-1 border-r border-gray-200">
              {ENABLER_TABS.map((label) => (
                <button
                  key={label}
                  onClick={() => setActiveEnabler(label)}
                  className={`w-full text-left px-6 py-4 text-base md:text-lg transition-colors ${
                    activeEnabler === label ? 'bg-blue-50 text-blue-800 font-semibold' : 'hover:bg-blue-50 text-blue-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="md:col-span-2 p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">{activeEnabler}</h2>
              <ul className="space-y-4">
                {ENABLERS[activeEnabler].map(({ title, description }) => (
                  <li key={title}>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How we de-risk change</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Outcome-based roadmaps", "Automation-first delivery", "Transparent governance"].map((h) => (
              <div key={h} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-700 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">{h}</div>
                  <div className="text-gray-600 text-sm">Proven playbooks, measurable value, and accountability at every step.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="section-container text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Stand up your Navigation Office</h3>
          <p className="opacity-90 mb-6">Get a starter kit: governance model, KPIs, and 90-day plan.</p>
          <a href="/contact" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl">Get the kit</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enablers;
