import { useEffect, useMemo, useRef, useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Search, Globe, Phone, User } from 'lucide-react';
import { Button } from './ui/button';
import { supabase, hasSupabaseEnv } from '@/lib/supabaseClient';

// Types for navigation structure - updated for three levels
type NavLeaf = {
	label: string;
	action: () => void;
};

type NavSubGroup = NavLeaf & {
	subItems?: NavLeaf[];
};

type NavGroup = NavLeaf & {
	subItems?: NavSubGroup[];
};

type TopNav = {
	label: string;
	items: NavGroup[];
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [activeThirdDropdown, setActiveThirdDropdown] = useState<string | null>(null);

  // Timer ref for delayed dropdown close
  const dropdownCloseTimer = useRef<NodeJS.Timeout | null>(null);
  const subDropdownCloseTimer = useRef<NodeJS.Timeout | null>(null);
  const thirdDropdownCloseTimer = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation items with three-level structure (default fallback)
  const defaultNavigationItems: TopNav[] = [
    {
      label: 'Who we are',
      items: [
        {
          label: 'Our Story',
          action: () => { window.location.href = '/our-story'; },
        },
        {
          label: 'Enterprise Orchestration (EO)',
          action: () => { window.location.href = '/enterprise-orchestration'; },
        },
        {
          label: 'Leadership',
          action: () => { window.location.href = '/leadership'; },
        },
      ]
    },
    {
      label: 'What we do',
      items: [
        // {
        //   label: 'Services',
        //   action: () => { window.location.href = '/services'; },
        //   subItems: [
        //     { label: 'SAP & ERP Transformation', action: () => { window.location.href = '/services/sap-erp-transformation'; } },
        //     { label: 'Finance Transformation', action: () => { window.location.href = '/services/finance-transformation'; } },
        //     { label: 'Supply Chain Transformation', action: () => { window.location.href = '/services/supply-chain-transformation'; } },
        //     { label: 'Cloud & Platforms', action: () => { window.location.href = '/services/cloud-platforms'; } },
        //     { label: 'AI Services', action: () => { window.location.href = '/services/ai'; } },
        //     { label: 'Enterprise Orchestration (EO)', action: () => { window.location.href = '/services/enterprise-orchestration'; } },
        //   ]
        // },
        {
          label: 'Offerings',
          action: () => { window.location.href = '/offerings'; },
          subItems: [
            {
              label: 'SAP',
              action: () => { window.location.href = '/offerings/sap'; },
              subItems: [
                { label: 'Brownfield Migration', action: () => { window.location.href = '/offerings/sap/brownfield'; } },
                { label: 'S/4HANA Public Cloud', action: () => { window.location.href = '/offerings/sap/public-cloud'; } },
                { label: 'ERP Modernization', action: () => { window.location.href = '/offerings/sap/modernization'; } },
                { label: 'Data Migration and Quality', action: () => { window.location.href = '/offerings/sap/data-migration'; } },
                { label: 'Universal Parallel Accounting', action: () => { window.location.href = '/offerings/sap/upa'; } },
                { label: 'Integration and Extensions', action: () => { window.location.href = '/offerings/sap/integration'; } },
              ]
            },
            {
              label: 'Finance',
              action: () => { window.location.href = '/offerings/finance'; },
              subItems: [
                { label: 'Central Finance', action: () => { window.location.href = '/offerings/finance/central-finance'; } },
                { label: 'Close and Reporting Automation', action: () => { window.location.href = '/offerings/finance/close-automation'; } },
                { label: 'Predictive Planning and FP&A', action: () => { window.location.href = '/offerings/finance/fpa'; } },
                { label: 'Controllership and Treasury', action: () => { window.location.href = '/offerings/finance/controllership-treasury'; } },
                { label: 'Finance Operate', action: () => { window.location.href = '/offerings/finance/operate'; } },
                { label: 'GBS for Finance', action: () => { window.location.href = '/offerings/finance/gbs'; } },
              ]
            },
            {
              label: 'Supply Chain',
              action: () => { window.location.href = '/offerings/scm'; },
              subItems: [
                { label: 'Connected Planning', action: () => { window.location.href = '/offerings/scm/connected-planning'; } },
                { label: 'Real-time Visibility', action: () => { window.location.href = '/offerings/scm/visibility'; } },
                { label: 'Adaptive Fulfillment', action: () => { window.location.href = '/offerings/scm/fulfillment'; } },
                { label: 'Digital Manufacturing', action: () => { window.location.href = '/offerings/scm/digital-mfg'; } },
                { label: 'Logistics Optimization', action: () => { window.location.href = '/offerings/scm/logistics'; } },
                { label: 'Sustainability and Traceability', action: () => { window.location.href = '/offerings/scm/traceability'; } },
              ]
            },
            {
              label: 'Cloud',
              action: () => { window.location.href = '/offerings/cloud'; },
              subItems: [
                { label: 'Cloud Migration', action: () => { window.location.href = '/offerings/cloud/migration'; } },
                { label: 'Clean Core Enablement', action: () => { window.location.href = '/offerings/cloud/clean-core'; } },
                { label: 'Platform Engineering', action: () => { window.location.href = '/offerings/cloud/platform-engineering'; } },
                { label: 'DevSecOps and SRE', action: () => { window.location.href = '/offerings/cloud/devsecops'; } },
                { label: 'FinOps and Cost Optimization', action: () => { window.location.href = '/offerings/cloud/finops'; } },
              ]
            },
          ]
        },
        // {
        //   label: 'Solutions',
        //   action: () => { window.location.href = '/solutions'; },
        //   subItems: [
        //     { label: 'Transformation Control Tower', action: () => { window.location.href = '/solutions/transformation-control-tower'; } },
        //     { label: 'Partner Ecosystem Strategy', action: () => { window.location.href = '/solutions/partner-ecosystem-strategy'; } },
        //     { label: 'AI & Data for the Intelligent Enterprise', action: () => { window.location.href = '/solutions/ai-data-intelligent-enterprise'; } },
        //   ]
        // },
        {
          label: 'Enablers',
          action: () => { window.location.href = '/enablers'; },
          subItems: [
            {
              label: 'Enterprise Navigation Office',
              action: () => { window.location.href = '/enablers/eno'; },
              subItems: [
                { label: 'Operating Model and Governance', action: () => { window.location.href = '/enablers/eno/operating-model'; } },
                { label: 'Portfolio and Roadmap Control', action: () => { window.location.href = '/enablers/eno/portfolio'; } },
                { label: 'Value Engineering and Benefits', action: () => { window.location.href = '/enablers/eno/value'; } },
                { label: 'Risk and Issue Management', action: () => { window.location.href = '/enablers/eno/risk'; } },
              ]
            },
            {
              label: 'Program Planning and Execution',
              action: () => { window.location.href = '/enablers/program'; },
          subItems: [
                { label: 'Accelerated Planning', action: () => { window.location.href = '/enablers/program/accelerated-planning'; } },
                { label: 'Intelligent Testing and QA', action: () => { window.location.href = '/enablers/program/qa-automation'; } },
                { label: 'Cloud Modernization and Platforms', action: () => { window.location.href = '/enablers/program/cloud-modernization'; } },
                { label: 'Change Enablement and Adoption', action: () => { window.location.href = '/enablers/program/change'; } },
              ]
            },
            {
              label: 'Partner Ecosystem Strategy',
              action: () => { window.location.href = '/enablers/partners'; },
          subItems: [
                { label: 'Current State Assessment', action: () => { window.location.href = '/enablers/partners/assessment'; } },
                { label: 'RFI and RFP Management', action: () => { window.location.href = '/enablers/partners/rfx'; } },
                { label: 'Solution Fit and Integration', action: () => { window.location.href = '/enablers/partners/fit'; } },
                { label: 'Launch Readiness', action: () => { window.location.href = '/enablers/partners/readiness'; } },
                { label: 'Business Case and ROI', action: () => { window.location.href = '/enablers/partners/business-case'; } },
                { label: 'Ecosystem Mapping', action: () => { window.location.href = '/enablers/partners/ecosystem'; } },
              ]
            },
            {
              label: 'AI and Data for the Intelligent Enterprise',
              action: () => { window.location.href = '/enablers/ai-data'; },
              subItems: [
                { label: 'Data Governance and Stewardship', action: () => { window.location.href = '/enablers/ai-data/governance'; } },
                { label: 'Data Architecture and Integration', action: () => { window.location.href = '/enablers/ai-data/architecture'; } },
                { label: 'Analytics and Decision Intelligence', action: () => { window.location.href = '/enablers/ai-data/analytics'; } },
                { label: 'Applied AI and Automation', action: () => { window.location.href = '/enablers/ai-data/applied-ai'; } },
                { label: 'Emerging Tech', action: () => { window.location.href = '/enablers/ai-data/emerging-tech'; } },
                { label: 'MLOps and Model Governance', action: () => { window.location.href = '/enablers/ai-data/mlops'; } },
                { label: 'Archiving and Retention', action: () => { window.location.href = '/enablers/ai-data/archiving'; } },
              ]
            },
          ]
        },
        // {
        //   label: 'Advisory',
        //   action: () => { window.location.href = '/advisory'; },
        //   subItems: [
        //     { label: 'Enterprise Operational Model Design', action: () => { window.location.href = '/advisory/operating-model'; } },
        //     { label: 'Strategic Vision and Alignment', action: () => { window.location.href = '/advisory/vision'; } },
        //     { label: 'Process Design Thinking and Innovation', action: () => { window.location.href = '/advisory/process-innovation'; } },
        //     { label: 'Intelligent Automation and AI Strategy', action: () => { window.location.href = '/advisory/ai-strategy'; } },
        //     { label: 'Risk, Controls, and Compliance', action: () => { window.location.href = '/advisory/risk-controls'; } },
        //   ]
        // },
        {
          label: 'Products',
          action: () => { window.location.href = '/products'; },
          subItems: [
            {
              label: 'SARAH AI',
              action: () => { window.location.href = '/products/sarah-ai'; },
              subItems: [
                { label: 'Finance', action: () => { window.location.href = '/products/sarah-ai/finance'; } },
                { label: 'ERP', action: () => { window.location.href = '/products/sarah-ai/erp'; } },
                { label: 'Supply Chain', action: () => { window.location.href = '/products/sarah-ai/scm'; } },
                { label: 'Cloud and Platforms', action: () => { window.location.href = '/products/sarah-ai/cloud'; } },
                { label: 'Control Tower', action: () => { window.location.href = '/products/sarah-ai/control-tower'; } },
              ]
            },
          ]
        },
        {
          label: 'Industries',
          action: () => { window.location.href = '/industries'; },
          subItems: [
            { label: 'Financial Services and Insurance', action: () => { window.location.href = '/industries/fsi'; } },
            { label: 'Technology, Media, and Telecom', action: () => { window.location.href = '/industries/tmt'; } },
            { label: 'Life Sciences and Healthcare', action: () => { window.location.href = '/industries/health'; } },
            { label: 'Manufacturing and Industrial', action: () => { window.location.href = '/industries/manufacturing'; } },
            { label: 'Consumer Goods and Retail', action: () => { window.location.href = '/industries/retail'; } },
            { label: 'Energy and Utilities', action: () => { window.location.href = '/industries/energy'; } },
            { label: 'Automotive and Transportation', action: () => { window.location.href = '/industries/auto'; } },
            { label: 'Government and Public Services', action: () => { window.location.href = '/industries/public-sector'; } },
          ]
        },
      ]
    },
    {
      label: 'Blogs',
      items: [
        // {
        //   label: 'Services',
        //   action: () => { window.location.href = '/blogs/services'; },
        //   subItems: [
        //     { label: 'SAP & ERP Transformation', action: () => { window.location.href = '/blogs/services/sap-erp-transformation'; } },
        //     { label: 'Finance Transformation', action: () => { window.location.href = '/blogs/services/finance-transformation'; } },
        //     { label: 'Supply Chain Transformation', action: () => { window.location.href = '/blogs/services/supply-chain-transformation'; } },
        //     { label: 'Cloud & Platforms', action: () => { window.location.href = '/blogs/services/cloud-platforms'; } },
        //     { label: 'AI Services', action: () => { window.location.href = '/blogs/services/ai'; } },
        //     { label: 'Enterprise Orchestration (EO)', action: () => { window.location.href = '/blogs/services/enterprise-orchestration'; } },
        //   ]
        // },
        {
          label: 'Offerings',
          action: () => { window.location.href = '/blogs/offerings'; },
          subItems: [
            {
              label: 'SAP',
              action: () => { window.location.href = '/blogs/offerings/sap'; },
              subItems: [
                { label: 'Brownfield Migration', action: () => { window.location.href = '/blogs/offerings/sap/brownfield'; } },
                { label: 'S/4HANA Public Cloud', action: () => { window.location.href = '/blogs/offerings/sap/public-cloud'; } },
                { label: 'ERP Modernization', action: () => { window.location.href = '/blogs/offerings/sap/modernization'; } },
                { label: 'Data Migration and Quality', action: () => { window.location.href = '/blogs/offerings/sap/data-migration'; } },
                { label: 'Universal Parallel Accounting', action: () => { window.location.href = '/blogs/offerings/sap/upa'; } },
                { label: 'Integration and Extensions', action: () => { window.location.href = '/blogs/offerings/sap/integration'; } },
              ]
            },
            {
              label: 'Finance',
              action: () => { window.location.href = '/blogs/offerings/finance'; },
              subItems: [
                { label: 'Central Finance', action: () => { window.location.href = '/blogs/offerings/finance/central-finance'; } },
                { label: 'Close and Reporting Automation', action: () => { window.location.href = '/blogs/offerings/finance/close-automation'; } },
                { label: 'Predictive Planning and FP&A', action: () => { window.location.href = '/blogs/offerings/finance/fpa'; } },
                { label: 'Controllership and Treasury', action: () => { window.location.href = '/blogs/offerings/finance/controllership-treasury'; } },
                { label: 'Finance Operate', action: () => { window.location.href = '/blogs/offerings/finance/operate'; } },
                { label: 'GBS for Finance', action: () => { window.location.href = '/blogs/offerings/finance/gbs'; } },
              ]
            },
            {
              label: 'Supply Chain',
              action: () => { window.location.href = '/blogs/offerings/scm'; },
              subItems: [
                { label: 'Connected Planning', action: () => { window.location.href = '/blogs/offerings/scm/connected-planning'; } },
                { label: 'Real-time Visibility', action: () => { window.location.href = '/blogs/offerings/scm/visibility'; } },
                { label: 'Adaptive Fulfillment', action: () => { window.location.href = '/blogs/offerings/scm/fulfillment'; } },
                { label: 'Digital Manufacturing', action: () => { window.location.href = '/blogs/offerings/scm/digital-mfg'; } },
                { label: 'Logistics Optimization', action: () => { window.location.href = '/blogs/offerings/scm/logistics'; } },
                { label: 'Sustainability and Traceability', action: () => { window.location.href = '/blogs/offerings/scm/traceability'; } },
              ]
            },
            {
              label: 'Cloud',
              action: () => { window.location.href = '/blogs/offerings/cloud'; },
              subItems: [
                { label: 'Cloud Migration', action: () => { window.location.href = '/blogs/offerings/cloud/migration'; } },
                { label: 'Clean Core Enablement', action: () => { window.location.href = '/blogs/offerings/cloud/clean-core'; } },
                { label: 'Platform Engineering', action: () => { window.location.href = '/blogs/offerings/cloud/platform-engineering'; } },
                { label: 'DevSecOps and SRE', action: () => { window.location.href = '/blogs/offerings/cloud/devsecops'; } },
                { label: 'FinOps and Cost Optimization', action: () => { window.location.href = '/blogs/offerings/cloud/finops'; } },
              ]
            },
          ]
        },
        // {
        //   label: 'Solutions',
        //   action: () => { window.location.href = '/blogs/solutions'; },
        //   subItems: [
        //     { label: 'Transformation Control Tower', action: () => { window.location.href = '/blogs/solutions/transformation-control-tower'; } },
        //     { label: 'Partner Ecosystem Strategy', action: () => { window.location.href = '/blogs/solutions/partner-ecosystem-strategy'; } },
        //     { label: 'AI & Data for the Intelligent Enterprise', action: () => { window.location.href = '/blogs/solutions/ai-data-intelligent-enterprise'; } },
        //   ]
        // },
        {
          label: 'Enablers',
          action: () => { window.location.href = '/blogs/enablers'; },
          subItems: [
            {
              label: 'Enterprise Navigation Office',
              action: () => { window.location.href = '/blogs/enablers/eno'; },
              subItems: [
                { label: 'Operating Model and Governance', action: () => { window.location.href = '/blogs/enablers/eno/operating-model'; } },
                { label: 'Portfolio and Roadmap Control', action: () => { window.location.href = '/blogs/enablers/eno/portfolio'; } },
                { label: 'Value Engineering and Benefits', action: () => { window.location.href = '/blogs/enablers/eno/value'; } },
                { label: 'Risk and Issue Management', action: () => { window.location.href = '/blogs/enablers/eno/risk'; } },
              ]
            },
            {
              label: 'Program Planning and Execution',
              action: () => { window.location.href = '/blogs/enablers/program'; },
          subItems: [
                { label: 'Accelerated Planning', action: () => { window.location.href = '/blogs/enablers/program/accelerated-planning'; } },
                { label: 'Intelligent Testing and QA', action: () => { window.location.href = '/blogs/enablers/program/qa-automation'; } },
                { label: 'Cloud Modernization and Platforms', action: () => { window.location.href = '/blogs/enablers/program/cloud-modernization'; } },
                { label: 'Change Enablement and Adoption', action: () => { window.location.href = '/blogs/enablers/program/change'; } },
              ]
            },
            {
              label: 'Partner Ecosystem Strategy',
              action: () => { window.location.href = '/blogs/enablers/partners'; },
          subItems: [
                { label: 'Current State Assessment', action: () => { window.location.href = '/blogs/enablers/partners/assessment'; } },
                { label: 'RFI and RFP Management', action: () => { window.location.href = '/blogs/enablers/partners/rfx'; } },
                { label: 'Solution Fit and Integration', action: () => { window.location.href = '/blogs/enablers/partners/fit'; } },
                { label: 'Launch Readiness', action: () => { window.location.href = '/blogs/enablers/partners/readiness'; } },
                { label: 'Business Case and ROI', action: () => { window.location.href = '/blogs/enablers/partners/business-case'; } },
                { label: 'Ecosystem Mapping', action: () => { window.location.href = '/blogs/enablers/partners/ecosystem'; } },
              ]
            },
            {
              label: 'AI and Data for the Intelligent Enterprise',
              action: () => { window.location.href = '/blogs/enablers/ai-data'; },
              subItems: [
                { label: 'Data Governance and Stewardship', action: () => { window.location.href = '/blogs/enablers/ai-data/governance'; } },
                { label: 'Data Architecture and Integration', action: () => { window.location.href = '/blogs/enablers/ai-data/architecture'; } },
                { label: 'Analytics and Decision Intelligence', action: () => { window.location.href = '/blogs/enablers/ai-data/analytics'; } },
                { label: 'Applied AI and Automation', action: () => { window.location.href = '/blogs/enablers/ai-data/applied-ai'; } },
                { label: 'Emerging Tech', action: () => { window.location.href = '/blogs/enablers/ai-data/emerging-tech'; } },
                { label: 'MLOps and Model Governance', action: () => { window.location.href = '/blogs/enablers/ai-data/mlops'; } },
                { label: 'Archiving and Retention', action: () => { window.location.href = '/blogs/enablers/ai-data/archiving'; } },
              ]
            },
          ]
        },
        // {
        //   label: 'Advisory',
        //   action: () => { window.location.href = '/blogs/advisory'; },
        //   subItems: [
        //     { label: 'Enterprise Operational Model Design', action: () => { window.location.href = '/blogs/advisory/operating-model'; } },
        //     { label: 'Strategic Vision and Alignment', action: () => { window.location.href = '/blogs/advisory/vision'; } },
        //     { label: 'Process Design Thinking and Innovation', action: () => { window.location.href = '/blogs/advisory/process-innovation'; } },
        //     { label: 'Intelligent Automation and AI Strategy', action: () => { window.location.href = '/blogs/advisory/ai-strategy'; } },
        //     { label: 'Risk, Controls, and Compliance', action: () => { window.location.href = '/blogs/advisory/risk-controls'; } },
        //   ]
        // },
        {
          label: 'Products',
          action: () => { window.location.href = '/blogs/products'; },
          subItems: [
            {
              label: 'SARAH AI',
              action: () => { window.location.href = '/blogs/products/sarah-ai'; },
              subItems: [
                { label: 'Finance', action: () => { window.location.href = '/blogs/products/sarah-ai/finance'; } },
                { label: 'ERP', action: () => { window.location.href = '/blogs/products/sarah-ai/erp'; } },
                { label: 'Supply Chain', action: () => { window.location.href = '/blogs/products/sarah-ai/scm'; } },
                { label: 'Cloud and Platforms', action: () => { window.location.href = '/blogs/products/sarah-ai/cloud'; } },
                { label: 'Control Tower', action: () => { window.location.href = '/blogs/products/sarah-ai/control-tower'; } },
              ]
            },
          ]
        },
        {
          label: 'Industries',
          action: () => { window.location.href = '/blogs/industries'; },
          subItems: [
            { label: 'Financial Services and Insurance', action: () => { window.location.href = '/blogs/industries/fsi'; } },
            { label: 'Technology, Media, and Telecom', action: () => { window.location.href = '/blogs/industries/tmt'; } },
            { label: 'Life Sciences and Healthcare', action: () => { window.location.href = '/blogs/industries/health'; } },
            { label: 'Manufacturing and Industrial', action: () => { window.location.href = '/blogs/industries/manufacturing'; } },
            { label: 'Consumer Goods and Retail', action: () => { window.location.href = '/blogs/industries/retail'; } },
            { label: 'Energy and Utilities', action: () => { window.location.href = '/blogs/industries/energy'; } },
            { label: 'Automotive and Transportation', action: () => { window.location.href = '/blogs/industries/auto'; } },
            { label: 'Government and Public Services', action: () => { window.location.href = '/blogs/industries/public-sector'; } },
          ]
        },
      ]
    },
    {
      label: 'Insights',
      items: [
        {
          label: 'Trending Topics',
          action: () => { window.location.href = '/insights/trending'; },
          subItems: [
            { label: 'Artificial Intelligence & Gen AI', action: () => { window.location.href = '/insights/trending/ai-genai'; } },
            { label: 'Business Resilience', action: () => { window.location.href = '/insights/trending/business-resilience'; } },
            { label: 'Case Studies', action: () => { window.location.href = '/insights/trending/case-studies'; } },
            { label: 'CEO Excellence', action: () => { window.location.href = '/insights/trending/ceo-excellence'; } },
            { label: 'Geopolitics', action: () => { window.location.href = '/insights/trending/geopolitics'; } },
            { label: 'Tariffs and Global Trade', action: () => { window.location.href = '/insights/trending/tariffs-trade'; } },
          ]
        },
        {
          label: 'Explore',
          action: () => { window.location.href = '/insights/explore'; },
          subItems: [
            { label: 'Author Talks', action: () => { window.location.href = '/insights/explore/author-talks'; } },
            { label: 'Global Surveys', action: () => { window.location.href = '/insights/explore/global-surveys'; } },
            { label: 'Quanta Explainers', action: () => { window.location.href = '/insights/explore/explainers'; } },
            { label: 'Quanta Live', action: () => { window.location.href = '/insights/explore/live'; } },
            { label: 'Quanta on Books', action: () => { window.location.href = '/insights/explore/books'; } },
            { label: 'Quanta on Lives & Legacies', action: () => { window.location.href = '/insights/explore/lives-legacies'; } },
            { label: 'Quanta Podcast', action: () => { window.location.href = '/insights/explore/podcast'; } },
            { label: 'Quanta Themes', action: () => { window.location.href = '/insights/explore/themes'; } },
            { label: 'Quanta Video', action: () => { window.location.href = '/insights/explore/video'; } },
            { label: 'Week in Charts', action: () => { window.location.href = '/insights/explore/week-in-charts'; } },
          ]
        },
        {
          label: 'Featured',
          action: () => { window.location.href = '/insights/featured'; },
          subItems: [
            { label: 'Ask Quanta', action: () => { window.location.href = '/insights/featured/ask-quanta'; } },
            { label: 'Quanta Quarterly', action: () => { window.location.href = '/insights/featured/quarterly'; } },
            { label: 'Quanta Global Institute', action: () => { window.location.href = '/insights/featured/global-institute'; } },
          ]
        },
      ]
    },
    {
      label: 'Careers',
      items: [
        {
          label: 'Careers',
          action: () => { window.location.href = '/careers'; }
        }
      ]
    },
    {
      label: 'Contact Us',
      items: [
        {
          label: 'Contact Us',
          action: () => { window.location.href = '/contact'; }
        }
      ]
    }
  ];

  const [navigationItems, setNavigationItems] = useState<TopNav[]>(defaultNavigationItems);

  useEffect(() => {
    const loadNavigation = async () => {
      if (!hasSupabaseEnv) return;
      const { data: navRows } = await supabase.from('navigation_structure').select('*');
      if (!navRows) return;

      const link = (url: string) => () => { window.location.href = url; };
      const sectionMap = new Map<string, {
        section_slug: string;
        section_url: string;
        categories: Map<string, {
          category_slug: string;
          category_url: string;
          items: Map<string, { item_slug: string; item_url: string; subitems: { label: string; slug: string; url: string }[] }>;
        }>;
      }>();

      navRows.forEach((r: any) => {
        if (!sectionMap.has(r.section_label)) {
          sectionMap.set(r.section_label, {
            section_slug: r.section_slug,
            section_url: r.section_url,
            categories: new Map()
          });
        }
        const sec = sectionMap.get(r.section_label)!;
        if (r.category_id) {
          if (!sec.categories.has(r.category_label)) {
            sec.categories.set(r.category_label, {
              category_slug: r.category_slug,
              category_url: r.category_url,
              items: new Map()
            });
          }
          const cat = sec.categories.get(r.category_label)!;
          if (r.item_id) {
            if (!cat.items.has(r.item_label)) {
              cat.items.set(r.item_label, {
                item_slug: r.item_slug,
                item_url: r.item_url,
                subitems: []
              });
            }
            const item = cat.items.get(r.item_label)!;
            if (r.subitem_id) {
              const exists = item.subitems.some(si => si.slug === r.subitem_slug);
              if (!exists) {
                item.subitems.push({ label: r.subitem_label, slug: r.subitem_slug, url: r.subitem_url });
              }
            }
          }
        }
      });

      const built: TopNav[] = [];
      sectionMap.forEach((sec, sectionLabel) => {
        const items: NavGroup[] = [];
        if (sec.categories.size === 0) {
          items.push({ label: sectionLabel, action: link(sec.section_url) });
        } else {
          sec.categories.forEach((cat, categoryLabel) => {
            const subItems: NavSubGroup[] = Array.from(cat.items.entries()).map(([itemLabel, item]) => {
              const thirdLevel: NavLeaf[] | undefined = item.subitems.length > 0
                ? item.subitems.map(si => ({ label: si.label, action: link(si.url) }))
                : undefined;
              return { label: itemLabel, action: link(item.item_url), subItems: thirdLevel } as NavSubGroup;
            });
            items.push({ label: categoryLabel, action: link(cat.category_url), subItems });
          });
        }
        built.push({ label: sectionLabel, items });
      });

      const ensureSimple = (label: string, url: string) => {
        if (!built.find(b => b.label === label)) built.push({ label, items: [{ label, action: link(url) }] });
      };
      ensureSimple('Careers', '/careers');
      ensureSimple('Contact Us', '/contact');

      const ordered = ['Who we are', 'What we do', 'Blogs', 'Insights', 'Careers', 'Contact Us'];
      built.sort((a, b) => ordered.indexOf(a.label) - ordered.indexOf(b.label));

      setNavigationItems(built);
    };
    loadNavigation();
  }, []);

  // Handlers for dropdown with delay on close
  const handleDropdownMouseEnter = (label: string) => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    setActiveDropdown(label);
  };

  const handleDropdownMouseLeave = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
    }
    dropdownCloseTimer.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
      setActiveThirdDropdown(null);
    }, 1000);
  };

  const handleSubDropdownMouseEnter = (label: string) => {
    if (subDropdownCloseTimer.current) {
      clearTimeout(subDropdownCloseTimer.current);
      subDropdownCloseTimer.current = null;
    }
    setActiveSubDropdown(label);
  };

  const handleSubDropdownMouseLeave = () => {
    if (subDropdownCloseTimer.current) {
      clearTimeout(subDropdownCloseTimer.current);
    }
    subDropdownCloseTimer.current = setTimeout(() => {
      setActiveSubDropdown(null);
      setActiveThirdDropdown(null);
    }, 2000);
  };

  const handleThirdDropdownMouseEnter = (label: string) => {
    if (thirdDropdownCloseTimer.current) {
      clearTimeout(thirdDropdownCloseTimer.current);
      thirdDropdownCloseTimer.current = null;
    }
    setActiveThirdDropdown(label);
  };

  const handleThirdDropdownMouseLeave = () => {
    if (thirdDropdownCloseTimer.current) {
      clearTimeout(thirdDropdownCloseTimer.current);
    }
    thirdDropdownCloseTimer.current = setTimeout(() => {
      setActiveThirdDropdown(null);
    }, 2000);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-3/4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl text-blue-800 z-50">
      <div className="px-12 py-3">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.location.href = '/'}
            role="button"
            tabIndex={0}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.location.href = '/';
              }
            }}
          >
            <img 
              src="/logolightlatest.png" 
              alt="QUANTA Global Logo" 
              className="h-20 w-auto"
            />
            {/* <span className="text-2xl font-bold text-blue-800">QuantaGlobal</span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  // Open dropdown and prime first sub category (for mega menu style)
                  handleDropdownMouseEnter(item.label);
                  const firstWithChildren = item.items.find((i: any) => i.subItems && i.subItems.length > 0);
                  if (firstWithChildren) {
                    setActiveSubDropdown(firstWithChildren.label);
                    // For three-level navigation, also set the first third-level item
                    const firstWithThirdLevel = firstWithChildren.subItems?.find((subI: any) => subI.subItems && subI.subItems.length > 0);
                    if (firstWithThirdLevel) {
                      setActiveThirdDropdown(firstWithThirdLevel.label);
                    } else {
                      setActiveThirdDropdown(null);
                    }
                  } else {
                    setActiveSubDropdown(null);
                    setActiveThirdDropdown(null);
                  }
                }}
                onMouseLeave={handleDropdownMouseLeave}
                style={{ display: 'inline-block' }}
              >
                <button
                  className="flex items-center text-blue-800 hover:text-blue-300 transition-colors"
                  // If Careers or Contact Us, make the button directly clickable
                  onClick={
                    (item.label === 'Careers' || item.label === 'Contact Us')
                      ? item.items[0].action
                      : undefined
                  }
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  (() => {
                    const hasThreeLevels = item.items.some((i: any) => i.subItems && i.subItems.some((subI: any) => subI.subItems && subI.subItems.length > 0));
                    const hasTwoLevels = item.items.some((i: any) => i.subItems && i.subItems.length > 0);
                    const isMega = hasThreeLevels || hasTwoLevels;
                    
                    // If Careers or Contact Us, do not show dropdown
                    if (item.label === 'Careers' || item.label === 'Contact Us') {
                      return null;
                    }
                    if (!isMega) {
                      // Simple list dropdown
                      return (
                        <div
                          className="absolute top-full left-0 mt-1 w-56 bg-white text-blue-800 rounded-md shadow-lg py-2 z-50"
                          onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          {item.items.map((subItem: any) => (
                            <button
                              key={subItem.label}
                              onClick={subItem.action}
                              className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-800 transition-colors"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      );
                    }

                    // Mega menu layout with three levels
                    const selectedCategory = item.items.find((i: any) => i.label === activeSubDropdown) || item.items.find((i: any) => i.subItems && i.subItems.length > 0);
                    const selectedThirdLevel = selectedCategory?.subItems?.find((i: any) => i.label === activeThirdDropdown);

                    return (
                      <div
                        className="absolute top-full left-0 mt-1 bg-white text-blue-800 rounded-md shadow-lg z-50"
                        onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="flex w-[800px] h-auto py-4">
                          {/* Left column: main categories */}
                          <div className="w-48 border-r border-gray-200">
                            {item.items.map((subItem: any) => {
                              const isActive = activeSubDropdown === subItem.label;
                              return (
                                <button
                                  key={subItem.label}
                                  onMouseEnter={() => handleSubDropdownMouseEnter(subItem.label)}
                                  onFocus={() => handleSubDropdownMouseEnter(subItem.label)}
                                  onClick={subItem.action}
                                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                                    isActive ? 'bg-blue-50 font-medium text-blue-800' : 'hover:bg-blue-50 hover:text-blue-800'
                                  }`}
                                >
                                  {subItem.label}
                                </button>
                              );
                            })}
                          </div>

                          {/* Middle panel: sub-categories */}
                          <div className="w-48 border-r border-gray-200">
                            {selectedCategory && selectedCategory.subItems && selectedCategory.subItems.length > 0 ? (
                              selectedCategory.subItems.map((subSubItem: any) => {
                                const isActive = activeThirdDropdown === subSubItem.label;
                                return (
                                  <button
                                    key={subSubItem.label}
                                    onMouseEnter={() => handleThirdDropdownMouseEnter(subSubItem.label)}
                                    onFocus={() => handleThirdDropdownMouseEnter(subSubItem.label)}
                                    onClick={subSubItem.action}
                                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                                      isActive ? 'bg-blue-50 font-medium text-blue-800' : 'hover:bg-blue-50 hover:text-blue-800'
                                    }`}
                                  >
                                    {subSubItem.label}
                                  </button>
                                );
                              })
                            ) : (
                              <div className="text-sm text-gray-500 px-4 py-2">No sub-categories</div>
                            )}
                          </div>

                          {/* Right panel: third level items */}
                          <div className="flex-1 px-4">
                            <div className="grid grid-cols-1 gap-2">
                              {selectedThirdLevel && selectedThirdLevel.subItems && selectedThirdLevel.subItems.length > 0 ? (
                                selectedThirdLevel.subItems.map((link: any) => (
                                  <button
                                    key={link.label}
                                    onClick={link.action}
                                    className="text-left px-3 py-2 rounded-md text-sm hover:bg-blue-50 hover:text-blue-800"
                                  >
                                    {link.label}
                                  </button>
                                ))
                              ) : (
                                <div className="text-sm text-gray-500 px-3 py-2">
                                  {selectedCategory?.subItems?.length > 0 ? 'Select a sub-category' : 'No items available'}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()
                )}
              </div>
            ))}
          </div>

          {/* Utility Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="text-blue-800 hover:text-blue-300 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="flex items-center text-blue-800 hover:text-blue-300 transition-colors">
              <Globe className="h-5 w-5 mr-1" />
              <span className="text-sm">US - EN</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button> */}
            <button
              className="text-blue-800 hover:text-blue-300 transition-colors relative"
              onClick={() => (window.location.href = '/contact')}
            >
              <Phone className="h-5 w-5" />
              <div className="absolute -top-1 -right-1">
               
              </div>
            </button>
            {/* <button className="text-blue-800 hover:text-blue-300 transition-colors">
              <User className="h-5 w-5" />
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-blue-800">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-700">
              {navigationItems.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="px-3 py-2 text-blue-800 font-medium">
                    {item.label}
                  </div>
                  {item.items.map((subItem) => (
                    <div key={subItem.label} className="space-y-1">
                      <button
                        onClick={subItem.action}
                        className="px-6 py-2 text-blue-800 hover:text-blue-800 transition-colors w-full text-left text-sm flex items-center justify-between"
                      >
                        <span>{subItem.label}</span>
                        {subItem.subItems && <ChevronDown className="ml-2 h-4 w-4" />}
                      </button>
                      {/* Mobile sub-items */}
                      {subItem.subItems && (
                        <div className="pl-8">
                          {subItem.subItems.map((subSubItem) => (
                            <div key={subSubItem.label} className="space-y-1">
                            <button
                              onClick={subSubItem.action}
                                className="block px-4 py-2 text-blue-100 hover:text-blue-800 transition-colors w-full text-left text-xs flex items-center justify-between"
                              >
                                <span>{subSubItem.label}</span>
                                {subSubItem.subItems && <ChevronRight className="ml-2 h-3 w-3" />}
                              </button>
                              {/* Mobile third level items */}
                              {subSubItem.subItems && (
                                <div className="pl-8">
                                  {subSubItem.subItems.map((thirdLevelItem) => (
                                    <button
                                      key={thirdLevelItem.label}
                                      onClick={thirdLevelItem.action}
                              className="block px-4 py-2 text-blue-100 hover:text-blue-800 transition-colors w-full text-left text-xs"
                            >
                                      {thirdLevelItem.label}
                            </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;