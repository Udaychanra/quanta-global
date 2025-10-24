import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800 min-h-[110px]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex flex-row justify-between items-center min-h-[90px]">
          {/* Left Section - Navigation and Copyright (tiny, spaced horizontally) */}
          <div className="flex flex-col space-y-2 leading-none justify-center h-full">
            {/* Navigation Links: very small, uppercase, spread out, condensed */}
            <nav className="flex flex-row space-x-5 mb-[5px]">
              <a
                href="#studio"
                className="text-[9px] text-gray-400 hover:text-white font-body-medium uppercase tracking-wider"
                style={{ letterSpacing: "0.13em" }}
              >
                SWIFT STUDIO
              </a>
              <span className="text-gray-500 text-[8px]">/</span>
              <a
                href="#edge"
                className="text-[9px] text-gray-400 hover:text-white font-body-medium uppercase tracking-wider"
                style={{ letterSpacing: "0.13em" }}
              >
                SWIFT EDGE
              </a>
              <span className="text-gray-500 text-[8px]">/</span>
              <a
                href="#cloud"
                className="text-[9px] text-gray-400 hover:text-white font-body-medium uppercase tracking-wider"
                style={{ letterSpacing: "0.13em" }}
              >
                SWIFT CLOUD
              </a>
              <span className="text-gray-500 text-[8px]">/</span>
              <a
                href="#squad"
                className="text-[9px] text-gray-400 hover:text-white font-body-medium uppercase tracking-wider"
                style={{ letterSpacing: "0.13em" }}
              >
                SWIFT SQUAD
              </a>
              <span className="text-gray-500 text-[8px]">/</span>
              <a
                href="#contact"
                className="text-[9px] text-gray-400 hover:text-white font-body-medium uppercase tracking-wider"
                style={{ letterSpacing: "0.11em" }}
              >
                CONTACT US
              </a>
            </nav>
            <p className="text-gray-500 text-[9px] font-normal mt-[5px]">
              Copyright 2025 © <span className="font-subheading">SwiftAI</span>
            </p>
          </div>

          {/* Right Section - Payment Methods */}
          <div className="flex flex-row space-x-3 items-center mt-0 h-full">
            {/* VISA */}
            <div className="flex items-center justify-center min-w-0 h-9 px-2">
              <svg viewBox="0 0 26 13" className="w-[30px] h-[15px] fill-none" aria-label="Visa">
                <rect width="26" height="13" rx="3" fill="#20232A"/>
                <text
                  x="13"
                  y="9.5"
                  textAnchor="middle"
                  fontSize="7"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                  fill="#f3f3f3"
                  letterSpacing="2"
                >VISA</text>
              </svg>
            </div>
            {/* PayPal */}
            <div className="flex items-center justify-center min-w-0 h-9 px-2">
              <svg viewBox="0 0 28 13" className="w-[33px] h-[15px] fill-none" aria-label="PayPal">
                <rect width="28" height="13" rx="3" fill="#20232A"/>
                <text
                  x="14"
                  y="9.5"
                  textAnchor="middle"
                  fontSize="6.7"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                  fill="#f3f3f3"
                  letterSpacing="1"
                >paypal</text>
              </svg>
            </div>
            {/* Stripe */}
            <div className="flex items-center justify-center min-w-0 h-9 px-2">
              <svg viewBox="0 0 31 13" className="w-[36px] h-[15px] fill-none" aria-label="Stripe">
                <rect width="31" height="13" rx="3" fill="#20232A"/>
                <text
                  x="15.5"
                  y="9.5"
                  textAnchor="middle"
                  fontSize="6.7"
                  fontFamily="Arial, sans-serif"
                  fontWeight="normal"
                  fill="#f3f3f3"
                  letterSpacing="1.5"
                >stripe</text>
              </svg>
            </div>
            {/* MasterCard */}
            <div className="flex items-center justify-center min-w-0 h-9 px-2">
              <svg viewBox="0 0 33 13" className="w-[38px] h-[15px] fill-none" aria-label="MasterCard">
                <rect width="33" height="13" rx="3" fill="#20232A"/>
                {/* Circles */}
                <circle cx="12" cy="6.5" r="3.7" fill="#f3c651" fillOpacity="0.4"/>
                <circle cx="17" cy="6.5" r="3.7" fill="#cb4343" fillOpacity="0.4"/>
                <text
                  x="26"
                  y="9.7"
                  textAnchor="middle"
                  fontSize="6"
                  fontFamily="Arial, sans-serif"
                  fontWeight="500"
                  fill="#f3f3f3"
                >mc</text>
              </svg>
            </div>
            {/* Cash on Delivery */}
            <div className="flex flex-col items-center justify-center min-w-0 h-9 px-3 py-[2px]">
              <span className="block text-gray-400 text-[9px] font-normal leading-[11px] tracking-tight text-center">
                CASH ON<br/>DELIVERY
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
