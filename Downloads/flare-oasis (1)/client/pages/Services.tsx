import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Services Mega Menu */}
      <section className="w-full h-[533px] bg-gray-700 relative">
        <div className="w-full h-full flex flex-col">
          
          {/* Container */}
          <div className="w-full h-[478px] bg-gray-700 relative flex">
            
            {/* Left Panel - Brand & Platform Info */}
            <div className="w-[410px] h-full bg-gray-700 flex-shrink-0">
              <div className="px-12 pt-12">
                {/* Brand Section */}
                <div className="mb-8">
                  <h1 className="text-white text-[31px] font-normal leading-10 mb-2 font-['Inter']">strobes</h1>
                  <p className="text-gray-300 text-xs font-normal uppercase tracking-wide font-['Inter']">ENTERPRISE</p>
                </div>
                
                {/* Main Title */}
                <div className="mb-24">
                  <h2 className="text-white text-[31px] font-bold leading-10 font-['Inter']">
                    Risk-based<br />
                    Vulnerability<br />
                    Management Platform
                  </h2>
                </div>
                
                {/* CTA Section */}
                <div className="mt-16">
                  <p className="text-gray-400 text-sm mb-4 font-['Inter']">LIKE TO PARTNER WITH US?</p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center border border-gray-400 bg-transparent text-gray-200 px-6 py-3 text-sm hover:bg-gray-600 transition-colors font-['Inter']"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-[1px] h-full bg-white opacity-10"></div>

            {/* Center Content - Service Categories */}
            <div className="w-[254px] px-9 pt-12 space-y-24">
              
              {/* Application Security - Highlighted */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <svg width="35" height="35" viewBox="0 0 36 36" fill="none" className="stroke-white">
                    <path d="M18.25 8.625L9.625 14.375M18.25 8.625L26.875 14.375M18.25 8.625V0M18.25 8.625L9.625 2.875L1 8.625M18.25 8.625L26.875 2.875L35.5 8.625M9.625 14.375L1 8.625M9.625 14.375V28.75M1 8.625V23L9.625 28.75M26.875 14.375L35.5 8.625M26.875 14.375V28.75M35.5 8.625V23L26.875 28.75M9.625 28.75L18.25 34.5L26.875 28.75" stroke="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-blue-500 text-base font-bold leading-8 font-['Inter']">Application Security</h3>
              </div>

              {/* Network Security */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="stroke-white">
                    <path d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z" stroke="currentColor"/>
                    <path d="M20 5L5 27.5H35L20 5ZM20 5V35M5 12.5H35" stroke="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-white text-base font-bold leading-8 font-['Inter']">Network Security</h3>
              </div>

              {/* Cloud Security */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="stroke-white">
                    <path d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z" stroke="currentColor"/>
                    <path d="M20 5L5 27.5H35L20 5ZM20 5V35M5 12.5H35" stroke="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-white text-base font-bold leading-8 font-['Inter']">Cloud Security</h3>
              </div>

              {/* Staffing Services */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="stroke-white">
                    <path d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z" stroke="currentColor"/>
                    <path d="M20 5L5 27.5H35L20 5ZM20 5V35M5 12.5H35" stroke="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-white text-base font-bold leading-8 font-['Inter']">Staffing Services</h3>
              </div>
            </div>

            {/* Right Content - Service Details */}
            <div className="w-[334px] px-6 pt-12 space-y-12">
              
              {/* Web Application Penetration Testing */}
              <div>
                <h4 className="text-blue-500 text-xl font-bold leading-8 mb-2 font-['Inter']">Web Application Penetration Testing</h4>
                <p className="text-white text-sm opacity-80 leading-6 font-['Inter']">Using threat intelligence and a combination of</p>
              </div>

              {/* Mobile Application Pentesting */}
              <div>
                <h4 className="text-blue-500 text-xl font-bold leading-8 mb-2 font-['Inter']">Mobile Application Pentesting</h4>
                <p className="text-white text-sm opacity-80 leading-6 font-['Inter']">Using threat intelligence and a combination of</p>
              </div>

              {/* Web Services & API Assessment */}
              <div>
                <h4 className="text-blue-500 text-xl font-bold leading-8 mb-2 font-['Inter']">Web Services & API Assessment</h4>
                <p className="text-white text-sm opacity-80 leading-6 font-['Inter']">Using threat intelligence and a combination of</p>
              </div>

              {/* Threat Modeling */}
              <div>
                <h4 className="text-blue-500 text-xl font-bold leading-8 mb-2 font-['Inter']">Threat Modeling</h4>
                <p className="text-white text-sm opacity-80 leading-6 font-['Inter']">Using threat intelligence and a combination of</p>
              </div>
            </div>

            {/* Featured Content Card */}
            <div 
              className="w-[298px] h-[402px] bg-cover bg-center bg-no-repeat relative ml-6 mt-11"
              style={{
                backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/2b4bb15eb4ab865c923d011ad3783b5afb02ade8?width=596')",
                backgroundPosition: "-75px -26px",
                backgroundSize: "150% 113%"
              }}
            >
              <div className="absolute inset-0 p-6">
                {/* Tags */}
                <div className="absolute top-16 left-6 flex items-center">
                  <span className="text-white text-xs font-bold uppercase tracking-wider font-['IBM_Plex_Sans']">Red Team</span>
                  <span className="text-white text-sm font-bold mx-2">·</span>
                  <span className="text-white text-sm font-bold uppercase tracking-wide font-['IBM_Plex_Sans']">Threat Simulation</span>
                </div>
                
                {/* Main Title */}
                <div className="absolute top-[89px] left-6 w-[246px]">
                  <h3 className="text-white text-xl font-bold leading-9 font-['IBM_Plex_Sans']">
                    Red team vs Blue team: A CISO's Guide to Offensive Security
                  </h3>
                </div>
                
                {/* CTA */}
                <div className="absolute bottom-[178px] left-6">
                  <Link 
                    to="/resources" 
                    className="text-yellow-400 text-base font-bold hover:text-yellow-300 transition-colors font-['IBM_Plex_Sans']"
                  >
                    Continue Reading
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Sections */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
              Comprehensive Cybersecurity Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From vulnerability management to penetration testing, we provide end-to-end security solutions 
              tailored to your organization's unique needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Application Security */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-6">
                <svg width="48" height="48" viewBox="0 0 36 36" fill="none" className="stroke-blue-500 stroke-2 w-full h-full">
                  <path d="M18.25 8.625L9.625 14.375M18.25 8.625L26.875 14.375M18.25 8.625V0M18.25 8.625L9.625 2.875L1 8.625M18.25 8.625L26.875 2.875L35.5 8.625M9.625 14.375L1 8.625M9.625 14.375V28.75M1 8.625V23L9.625 28.75M26.875 14.375L35.5 8.625M26.875 14.375V28.75M35.5 8.625V23L26.875 28.75M9.625 28.75L18.25 34.5L26.875 28.75"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Inter']">Application Security</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive testing of web and mobile applications to identify vulnerabilities before they can be exploited.
              </p>
              <Link to="/services/application-security" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            {/* Network Security */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-6">
                <svg width="48" height="48" viewBox="0 0 40 40" fill="none" className="stroke-blue-500 stroke-2 w-full h-full">
                  <path d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z"/>
                  <path d="M20 5L5 27.5H35L20 5ZM20 5V35M5 12.5H35"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Inter']">Network Security</h3>
              <p className="text-gray-600 mb-6">
                Advanced network penetration testing and infrastructure security assessments to protect your digital perimeter.
              </p>
              <Link to="/services/network-security" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            {/* Cloud Security */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-6">
                <svg width="48" height="48" viewBox="0 0 40 40" fill="none" className="stroke-blue-500 stroke-2 w-full h-full">
                  <path d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z"/>
                  <path d="M20 5L5 27.5H35L20 5ZM20 5V35M5 12.5H35"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Inter']">Cloud Security</h3>
              <p className="text-gray-600 mb-6">
                Secure your cloud infrastructure with comprehensive assessments and configuration reviews.
              </p>
              <Link to="/services/cloud-security" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            {/* Staffing Services */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="stroke-blue-500 stroke-2 w-full h-full">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Inter']">Staffing Services</h3>
              <p className="text-gray-600 mb-6">
                Expert cybersecurity professionals to augment your team and provide specialized security expertise.
              </p>
              <Link to="/smart-shore-sourcing" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Detail */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Web Application Testing */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Inter']">Web Application Penetration Testing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Using threat intelligence and a combination of automated and manual testing techniques, 
                  we identify vulnerabilities in your web applications before malicious actors can exploit them. 
                  Our comprehensive approach includes OWASP Top 10 testing, business logic flaws, and custom attack scenarios.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Inter']">Mobile Application Pentesting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive security testing for iOS and Android applications, including static and dynamic analysis, 
                  API security testing, and device-specific security assessments to ensure your mobile apps are secure 
                  across all platforms and deployment scenarios.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Inter']">Web Services & API Assessment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized testing for RESTful APIs, GraphQL endpoints, and web services to identify authentication bypasses, 
                  injection vulnerabilities, and business logic flaws that could compromise your backend systems and data integrity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Inter']">Threat Modeling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Systematic approach to identifying potential security threats and vulnerabilities in your system architecture. 
                  We help you understand your attack surface and prioritize security controls based on the most likely and 
                  impactful attack scenarios specific to your environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let our cybersecurity experts help you identify vulnerabilities and implement robust security measures 
            to protect your organization from evolving cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
