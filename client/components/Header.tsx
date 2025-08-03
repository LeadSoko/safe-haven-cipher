import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <header className="bg-black h-[55px] flex items-center justify-between px-4 md:px-6 lg:px-8 relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center h-[30px] px-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/424fab3e36b4f763febad17a358271b9b04d573c?width=300" 
            alt="WeSecureApp Logo" 
            className="w-[150px] h-[24px]"
          />
        </Link>
      </div>

      {/* Navigation - hidden on mobile */}
      <nav className="hidden lg:flex items-center h-[48px]">
        <ul className="flex items-center">
          <li>
            <Link 
              to="/product" 
              className="flex items-center h-[48px] px-5 text-white text-sm font-normal hover:bg-gray-800 transition-colors"
            >
              Product
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <Link
              to="/services"
              className="flex items-center h-[48px] px-5 text-white text-sm font-normal hover:bg-gray-800 transition-colors"
            >
              Services
            </Link>
            
            {/* Mega Menu Dropdown */}
            {showMegaMenu && (
              <div className="absolute top-[48px] left-0 w-screen max-w-[1440px] bg-[#393939] shadow-lg">
                <div className="flex">
                  {/* Left Section - Platform Info */}
                  <div className="w-[410px] p-12 flex flex-col justify-between min-h-[478px]">
                    <div>
                      <div className="mb-8">
                        <h3 className="text-white text-[31px] font-normal leading-[40px] mb-2">strobes</h3>
                        <p className="text-gray-300 text-xs font-normal leading-5">ENTERPRISE</p>
                      </div>
                      
                      <div className="mb-8">
                        <h2 className="text-white text-[31px] font-bold leading-[40px] mb-2">Risk-based</h2>
                        <h2 className="text-white text-[31px] font-bold leading-[40px] mb-2">Vulnerability</h2>
                        <h2 className="text-white text-[31px] font-bold leading-[40px]">Management Platform</h2>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm mb-4">LIKE TO PARTNER WITH US?</p>
                      <button className="border border-gray-400 text-gray-200 px-6 py-3 text-sm hover:bg-gray-600 transition-colors">
                        Contact Us
                      </button>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="w-px bg-white opacity-10"></div>

                  {/* Middle Section - Services */}
                  <div className="flex-1 p-12">
                    <div className="grid grid-cols-1 gap-8">
                      {/* Application Security */}
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 flex-shrink-0">
                          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.25 8.625L9.625 14.375M18.25 8.625L26.875 14.375M18.25 8.625V0M18.25 8.625L9.625 2.875L1 8.625M18.25 8.625L26.875 2.875L35.5 8.625M9.625 14.375L1 8.625M9.625 14.375V28.75M1 8.625V23L9.625 28.75M26.875 14.375L35.5 8.625M26.875 14.375V28.75M35.5 8.625V23L26.875 28.75M9.625 28.75L18.25 34.5L26.875 28.75" stroke="#0F62FE"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#0F62FE] text-base font-bold leading-8 mb-2">Application Security</h3>
                        </div>
                      </div>

                      {/* Network Security */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex-shrink-0">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z" stroke="white"/>
                            <path d="M20 5L5 27.5H35L20 5ZM20 5V35M5 12.5H35" stroke="white"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white text-base font-bold leading-8 mb-2">Network Security</h3>
                        </div>
                      </div>

                      {/* Cloud Security */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex-shrink-0">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z" stroke="white"/>
                            <path d="M20 5L5 27.5H35L20 5ZM20 5V35M5 12.5H35" stroke="white"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white text-base font-bold leading-8 mb-2">Cloud Security</h3>
                        </div>
                      </div>

                      {/* Staffing Services */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex-shrink-0">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z" stroke="white"/>
                            <path d="M20 5L5 27.5H35L20 5ZM20 5V35M5 12.5H35" stroke="white"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white text-base font-bold leading-8 mb-2">Staffing Services</h3>
                        </div>
                      </div>
                    </div>

                    {/* Infrastructure Security Sections */}
                    <div className="mt-8 space-y-6">
                      <div>
                        <h3 className="text-[#0F62FE] text-xl font-bold leading-8 mb-2">Infrastructure Security</h3>
                        <p className="text-white/80 text-sm leading-6">Using threat intelligence and a combination of</p>
                      </div>
                      
                      <div>
                        <h3 className="text-[#0F62FE] text-xl font-bold leading-8 mb-2">Infrastructure Security</h3>
                        <p className="text-white/80 text-sm leading-6">Using threat intelligence and a combination of</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Featured Content */}
                  <div className="w-[298px] bg-cover bg-center bg-no-repeat relative" 
                       style={{ 
                         backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/2b4bb15eb4ab865c923d011ad3783b5afb02ade8?width=596')",
                         backgroundPosition: '-75.055px -26.056px',
                         backgroundSize: '150.372% 112.963%'
                       }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative p-6 h-full flex flex-col justify-between min-h-[402px]">
                      <div>
                        <div className="mb-4">
                          <div className="flex items-center text-white text-xs font-bold uppercase mb-2">
                            <span>Red Team</span>
                            <span className="mx-2">·</span>
                            <span>Threat Simulation</span>
                          </div>
                        </div>
                        
                        <h3 className="text-white text-xl font-bold leading-9 mb-6">
                          Red team vs Blue team: A CISO's Guide to Offensive Security
                        </h3>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-0.5 bg-[#FFE034] rounded"></div>
                        <span className="text-[#FFE034] text-base font-bold leading-7">Continue Reading</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link 
              to="/resources" 
              className="flex items-center h-[48px] px-5 text-white text-sm font-normal hover:bg-gray-800 transition-colors"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link 
              to="/careers" 
              className="flex items-center h-[48px] px-5 text-white text-sm font-normal hover:bg-gray-800 transition-colors"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="flex items-center h-[48px] px-5 text-white text-sm font-normal hover:bg-gray-800 transition-colors"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        <Link 
          to="/contact" 
          className="hidden lg:flex items-center h-[48px] px-5 text-white text-sm font-normal hover:bg-gray-800 transition-colors"
        >
          Contact
        </Link>
        <Link 
          to="/demo" 
          className="flex items-center h-[37px] px-5 bg-[#0F62FE] border border-[#0F62FE] text-white text-sm font-normal text-center hover:bg-blue-700 transition-colors"
        >
          Schedule a demo
        </Link>
        
        {/* Mobile menu button */}
        <button className="lg:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
