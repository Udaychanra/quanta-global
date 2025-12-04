import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const IndustryEditions = () => {
  const editions = [
    {
      id: 'fs',
      label: 'Financial Services',
      title: 'Financial Services Edition',
      subtitle: 'FS-first, deep vertical',
      features: [
        'Onboarding & KYC', 'Credit evaluation & exposure insights', 'Fraud review (identity, behavioral, transactional)',
        'AML & compliance intelligence', 'Collections & restructuring', 'Claims & dispute flows',
        'Document intelligence for underwriting & servicing', 'Customer service intelligence',
        'RM and advisor copilots', 'Vendor invoicing and financial document intelligence',
        'Alignment with regulatory expectations (RBI, IRDAI, SEBI, etc.)'
      ]
    },
    {
      id: 'insurance',
      label: 'Insurance',
      title: 'Insurance Edition',
      features: [
        'Policyholder onboarding', 'Claims documentation & triage', 'Broker/agent onboarding',
        'Suitability checks', 'AML/compliance alignment', 'Customer service intelligence',
        'Invoice and payout documentation intelligence'
      ]
    },
    {
      id: 'fintech',
      label: 'Fintech',
      title: 'Digital Lenders & Fintech Edition',
      features: [
        'Digital onboarding & identity verification', 'Embedded lending checks', 'Behavioral risk intelligence',
        'Repayment intelligence', 'Document and account verification', 'Customer service & partner agent copilots'
      ]
    },
    {
      id: 'payments',
      label: 'Payments',
      title: 'Payments & Commerce Edition',
      features: [
        'Merchant onboarding & risk scoring', 'Transaction intelligence', 'Dispute handling',
        'Chargeback intelligence', 'Invoice validation & reconciliation'
      ]
    },
    {
      id: 'wealth',
      label: 'Wealth',
      title: 'Wealth & Asset Management Edition',
      features: [
        'Investor onboarding', 'Suitability intelligence', 'AML checks',
        'Portfolio context & signals', 'RM copilots', 'Document intelligence'
      ]
    },
    {
      id: 'others',
      label: 'Future Editions',
      title: 'Future Industry Editions',
      sections: [
        { name: 'Public Sector', desc: 'Citizen identity, case workflows, document intelligence, grievance management, compliance-aligned decision support.' },
        { name: 'Healthcare', desc: 'Patient onboarding, claims intelligence, provider risk, billing & invoice intelligence.' },
        { name: 'Telecom & Digital Services', desc: 'Identity, usage intelligence, dispute flows, billing assurance.' },
        { name: 'Retail & Commerce', desc: 'Seller onboarding, dispute intelligence, returns workflows, invoice verification.' }
      ]
    }
  ];

  return (
    <section id="industry-editions" className="py-32 bg-slate-950/50 border-t border-white/5">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            SARAH AI Industry Editions
          </h2>
          <p className="text-lg text-slate-400">
            Modular intelligence components adapted for regulatory and operational contexts.
          </p>
        </div>

        <Tabs defaultValue="fs" className="max-w-5xl mx-auto">
          <div className="overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <TabsList className="inline-flex w-max min-w-full justify-start md:justify-center bg-slate-900/50 border border-white/10 p-1.5 h-auto rounded-2xl backdrop-blur-sm">
              {editions.map((edition) => (
                <TabsTrigger 
                  key={edition.id} 
                  value={edition.id}
                  className="px-5 py-3 text-sm md:text-base text-slate-400 data-[state=active]:bg-teal-500 data-[state=active]:text-black data-[state=active]:font-medium rounded-xl transition-all duration-300"
                >
                  {edition.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {editions.map((edition) => (
            <TabsContent key={edition.id} value={edition.id} className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
              <Card className="bg-slate-900/50 border-white/10 backdrop-blur-md shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-b border-white/5 p-8 md:p-10">
                  <CardTitle className="text-2xl md:text-3xl text-white mb-2">{edition.title}</CardTitle>
                  {edition.subtitle && <CardDescription className="text-teal-400 text-lg font-medium">{edition.subtitle}</CardDescription>}
                </CardHeader>
                <CardContent className="p-8 md:p-10">
                  {edition.features && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {edition.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                          <div className="w-2 h-2 mt-2.5 rounded-full bg-teal-500 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                          <span className="text-slate-300 text-lg group-hover:text-white transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {edition.sections && (
                    <div className="grid md:grid-cols-2 gap-8">
                      {edition.sections.map((section, i) => (
                        <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-teal-500/30 transition-colors">
                          <h4 className="text-xl font-bold text-white mb-3">{section.name}</h4>
                          <p className="text-slate-400 leading-relaxed">{section.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default IndustryEditions;
