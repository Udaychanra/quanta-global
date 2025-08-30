import { useState, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Search, Globe, Phone, User } from 'lucide-react';
import { Button } from './ui/button';

// Types for navigation structure
type NavLeaf = {
	label: string;
	action: () => void;
};

type NavGroup = NavLeaf & {
	subItems?: NavLeaf[];
};

type TopNav = {
	label: string;
	items: NavGroup[];
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  // Timer ref for delayed dropdown close
  const dropdownCloseTimer = useRef<NodeJS.Timeout | null>(null);
  const subDropdownCloseTimer = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation items with sub-items for Services, Solutions, Products, Industries, Blogs, Insights, Careers, Contact Us
  const navigationItems: TopNav[] = [
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
        {
          label: 'Services',
          action: () => { window.location.href = '/services'; },
          subItems: [
            { label: 'SAP & ERP Transformation', action: () => { window.location.href = '/services/sap-erp-transformation'; } },
            { label: 'Finance Transformation', action: () => { window.location.href = '/services/finance-transformation'; } },
            { label: 'Supply Chain Transformation', action: () => { window.location.href = '/services/supply-chain-transformation'; } },
            { label: 'Cloud & Platforms', action: () => { window.location.href = '/services/cloud-platforms'; } },
            { label: 'AI Services', action: () => { window.location.href = '/services/ai'; } },
            { label: 'Enterprise Orchestration (EO)', action: () => { window.location.href = '/services/enterprise-orchestration'; } },
          ]
        },
        {
          label: 'Solutions',
          action: () => { window.location.href = '/solutions'; },
          subItems: [
            { label: 'Transformation Control Tower', action: () => { window.location.href = '/solutions/transformation-control-tower'; } },
            { label: 'Partner Ecosystem Strategy', action: () => { window.location.href = '/solutions/partner-ecosystem-strategy'; } },
            { label: 'AI & Data for the Intelligent Enterprise', action: () => { window.location.href = '/solutions/ai-data-intelligent-enterprise'; } },
          ]
        },
        {
          label: 'Products',
          action: () => { window.location.href = '/products'; },
          subItems: [
            { label: 'SARAH AI (spotlight page)', action: () => { window.location.href = '/products/sarah-ai'; } },
          ]
        },
        {
          label: 'Industries',
          action: () => { window.location.href = '/industries'; },
          subItems: [
            { label: 'Financial Services', action: () => { window.location.href = '/industries/financial-services'; } },
            { label: 'Technology, Media & Telecom', action: () => { window.location.href = '/industries/technology-media-telecom'; } },
            { label: 'Life Sciences & Healthcare', action: () => { window.location.href = '/industries/life-sciences-healthcare'; } },
            { label: 'Manufacturing & Industrial', action: () => { window.location.href = '/industries/manufacturing-industrial'; } },
            { label: 'Consumer Goods & Retail', action: () => { window.location.href = '/industries/consumer-goods-retail'; } },
            { label: 'Energy & Utilities', action: () => { window.location.href = '/industries/energy-utilities'; } },
            { label: 'Automotive & Transportation', action: () => { window.location.href = '/industries/automotive-transportation'; } },
            { label: 'Government & Public Services', action: () => { window.location.href = '/industries/government-public-services'; } },
          ]
        },
      ]
    },
    {
      label: 'Blogs ',
      items: [
        {
          label: 'Services',
          action: () => { window.location.href = '/blogs/services'; },
          subItems: [
            { label: 'SAP & ERP Transformation', action: () => { window.location.href = '/blogs/services/sap-erp-transformation'; } },
            { label: 'Finance Transformation', action: () => { window.location.href = '/blogs/services/finance-transformation'; } },
            { label: 'Supply Chain Transformation', action: () => { window.location.href = '/blogs/services/supply-chain-transformation'; } },
            { label: 'Cloud & Platforms', action: () => { window.location.href = '/blogs/services/cloud-platforms'; } },
            { label: 'AI Services', action: () => { window.location.href = '/blogs/services/ai'; } },
            { label: 'Enterprise Orchestration (EO)', action: () => { window.location.href = '/blogs/services/enterprise-orchestration'; } },
          ]
        },
        {
          label: 'Solutions',
          action: () => { window.location.href = '/blogs/solutions'; },
          subItems: [
            { label: 'Transformation Control Tower', action: () => { window.location.href = '/blogs/solutions/transformation-control-tower'; } },
            { label: 'Partner Ecosystem Strategy', action: () => { window.location.href = '/blogs/solutions/partner-ecosystem-strategy'; } },
            { label: 'AI & Data for the Intelligent Enterprise', action: () => { window.location.href = '/blogs/solutions/ai-data-intelligent-enterprise'; } },
          ]
        },
        {
          label: 'Products',
          action: () => { window.location.href = '/blogs/products'; },
          subItems: [
            { label: 'SARAH AI (spotlight page)', action: () => { window.location.href = '/blogs/products/sarah-ai'; } },
          ]
        },
        {
          label: 'Industries',
          action: () => { window.location.href = '/blogs/industries'; },
          subItems: [
            { label: 'Financial Services', action: () => { window.location.href = '/blogs/industries/financial-services'; } },
            { label: 'Technology, Media & Telecom', action: () => { window.location.href = '/blogs/industries/technology-media-telecom'; } },
            { label: 'Life Sciences & Healthcare', action: () => { window.location.href = '/blogs/industries/life-sciences-healthcare'; } },
            { label: 'Manufacturing & Industrial', action: () => { window.location.href = '/blogs/industries/manufacturing-industrial'; } },
            { label: 'Consumer Goods & Retail', action: () => { window.location.href = '/blogs/industries/consumer-goods-retail'; } },
            { label: 'Energy & Utilities', action: () => { window.location.href = '/blogs/industries/energy-utilities'; } },
            { label: 'Automotive & Transportation', action: () => { window.location.href = '/blogs/industries/automotive-transportation'; } },
            { label: 'Government & Public Services', action: () => { window.location.href = '/blogs/industries/government-public-services'; } },
          ]
        },
      ]
    },
    {
      label: 'Insights',
      items: [
        {
          label: 'Services',
          action: () => { window.location.href = '/insights/services'; },
          subItems: [
            { label: 'SAP & ERP Transformation', action: () => { window.location.href = '/insights/services/sap-erp-transformation'; } },
            { label: 'Finance Transformation', action: () => { window.location.href = '/insights/services/finance-transformation'; } },
            { label: 'Supply Chain Transformation', action: () => { window.location.href = '/insights/services/supply-chain-transformation'; } },
            { label: 'Cloud & Platforms', action: () => { window.location.href = '/insights/services/cloud-platforms'; } },
            { label: 'AI Services', action: () => { window.location.href = '/insights/services/ai'; } },
            { label: 'Enterprise Orchestration (EO)', action: () => { window.location.href = '/insights/services/enterprise-orchestration'; } },
          ]
        },
        {
          label: 'Solutions',
          action: () => { window.location.href = '/insights/solutions'; },
          subItems: [
            { label: 'Transformation Control Tower', action: () => { window.location.href = '/insights/solutions/transformation-control-tower'; } },
            { label: 'Partner Ecosystem Strategy', action: () => { window.location.href = '/insights/solutions/partner-ecosystem-strategy'; } },
            { label: 'AI & Data for the Intelligent Enterprise', action: () => { window.location.href = '/insights/solutions/ai-data-intelligent-enterprise'; } },
          ]
        },
        {
          label: 'Products',
          action: () => { window.location.href = '/insights/products'; },
          subItems: [
            { label: 'SARAH AI (spotlight page)', action: () => { window.location.href = '/insights/products/sarah-ai'; } },
          ]
        },
        {
          label: 'Industries',
          action: () => { window.location.href = '/insights/industries'; },
          subItems: [
            { label: 'Financial Services', action: () => { window.location.href = '/insights/industries/financial-services'; } },
            { label: 'Technology, Media & Telecom', action: () => { window.location.href = '/insights/industries/technology-media-telecom'; } },
            { label: 'Life Sciences & Healthcare', action: () => { window.location.href = '/insights/industries/life-sciences-healthcare'; } },
            { label: 'Manufacturing & Industrial', action: () => { window.location.href = '/insights/industries/manufacturing-industrial'; } },
            { label: 'Consumer Goods & Retail', action: () => { window.location.href = '/insights/industries/consumer-goods-retail'; } },
            { label: 'Energy & Utilities', action: () => { window.location.href = '/insights/industries/energy-utilities'; } },
            { label: 'Automotive & Transportation', action: () => { window.location.href = '/insights/industries/automotive-transportation'; } },
            { label: 'Government & Public Services', action: () => { window.location.href = '/insights/industries/government-public-services'; } },
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

  // Handlers for dropdown with 3s delay on close
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
                  } else {
                    setActiveSubDropdown(null);
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
                    const isMega = item.items.some((i: any) => i.subItems && i.subItems.length > 0);
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

                    // Mega menu layout
                    const selectedCategory = item.items.find((i: any) => i.label === activeSubDropdown) || item.items.find((i: any) => i.subItems && i.subItems.length > 0);

                    return (
                      <div
                        className="absolute top-full left-0 mt-1 bg-white text-blue-800 rounded-md shadow-lg z-50"
                        onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="flex w-[600px] h-auto py-4">
                          {/* Left column: categories */}
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

                          {/* Right panel: links grid for active category */}
                          <div className="flex-1 px-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {selectedCategory && selectedCategory.subItems && selectedCategory.subItems.length > 0 ? (
                                selectedCategory.subItems.map((link: any) => (
                                  <button
                                    key={link.label}
                                    onClick={link.action}
                                    className="text-left px-3 py-2 rounded-md text-sm hover:bg-blue-50 hover:text-blue-800"
                                  >
                                    {link.label}
                                  </button>
                                ))
                              ) : (
                                <div className="text-sm text-blue-800 px-3 py-2"></div>
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
                        className=" px-6 py-2 text-blue-800 hover:text-blue-800 transition-colors w-full text-left text-sm flex items-center justify-between"
                      >
                        <span>{subItem.label}</span>
                        {subItem.subItems && <ChevronDown className="ml-2 h-4 w-4" />}
                      </button>
                      {/* Mobile sub-items */}
                      {subItem.subItems && (
                        <div className="pl-8">
                          {subItem.subItems.map((subSubItem) => (
                            <button
                              key={subSubItem.label}
                              onClick={subSubItem.action}
                              className="block px-4 py-2 text-blue-100 hover:text-blue-800 transition-colors w-full text-left text-xs"
                            >
                              {subSubItem.label}
                            </button>
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