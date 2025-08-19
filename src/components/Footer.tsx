import { Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer Section */}
      <div className="bg-[#040053] text-white px-8 pt-16 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
          {/* Left: Let's connect and first column */}
          <div className="flex-1 min-w-[220px]">
            <h2 className="text-5xl font-light mb-12">Let's connect</h2>
            <ul className="space-y-6 text-2xl font-light">
              <li><a href="/contact" className="hover:underline">Contact us</a></li>
              <li><a href="/about" className="hover:underline">About QuantaGlobal</a></li>
              <li><a href="/team" className="hover:underline">Our Team</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Middle Columns */}
          <div className="flex-[2] grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 lg:mt-0">
            <ul className="space-y-4 text-lg font-light">
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/solutions" className="hover:underline">Solutions</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
            </ul>
            <ul className="space-y-4 text-lg font-light">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              {/* <li><a href="/team" className="hover:underline">Team</a></li> */}
              <li><a href="/careers" className="hover:underline">Careers</a></li>
            </ul>
            <ul className="space-y-4 text-lg font-light">
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/solutions" className="hover:underline">Solutions</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-end justify-between min-w-[180px] mt-12 lg:mt-0">
            <div></div>
            <div className="flex flex-col items-end">
              <span className="text-sm text-white/80 mb-2">Follow us</span>
              <div className="flex space-x-4 text-white text-2xl">
                {/* Replace with actual icons as needed */}
                <a href="#" aria-label="X" className="hover:text-blue-400"><span style={{fontFamily:'monospace'}}>X</span></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-400"><Linkedin className="h-6 w-6" /></a>
                <a href="#" aria-label="YouTube" className="hover:text-blue-400"><span className="inline-block align-middle"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="currentColor" className="text-white"/><path d="M10 15.5V8.5L16 12L10 15.5Z" fill="#000"/></svg></span></a>
                <a href="#" aria-label="Instagram" className="hover:text-blue-400"><span className="inline-block align-middle"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="currentColor" className="text-white"/><circle cx="12" cy="12" r="5" stroke="#000" strokeWidth="2"/><circle cx="17" cy="7" r="1" fill="#000"/></svg></span></a>
              </div>
              </div>
            </div>
          </div>
        </div>

      {/* Legal Section */}
      <div className="bg-white text-black text-sm border-t border-gray-200 px-4">
        <div className="max-w-7xl mx-auto py-6">
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-4 font-semibold">
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Data Privacy Framework</a>
            <a href="#" className="hover:underline">Cookie Notice</a>
            <a href="#" className="hover:underline">Cookie Settings</a>
            <a href="#" className="hover:underline">Legal information for Job Seekers</a>
            <a href="#" className="hover:underline">Labor Condition Applications</a>
            <a href="#" className="hover:underline">Do Not Sell or Share My Personal Information</a>
          </div>
          <div className="mb-2">© 2025 QuantaGlobal. See <a href="#" className="text-blue-700 underline">Terms of Use</a> for more information.</div>
          <div className="text-xs text-gray-700 max-w-5xl">
            QuantaGlobal refers to one or more independent technology consulting entities. Each entity is legally separate and independent. QuantaGlobal does not provide services to clients in all jurisdictions. Certain services may not be available to attest clients under the rules and regulations of public accounting. Please see <a href="/about" className="text-blue-700 underline">our about page</a> to learn more about our global network.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;