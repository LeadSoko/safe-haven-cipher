import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TestIndex() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Simple Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-normal leading-tight mb-8">
              Hi, we're{" "}
              <span className="font-bold">WeSecureApp.</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto mb-8">
              We specialize in establishing a secure cyber profile by designing
              security roadmap for organizations and execute a strategic, long-
              range plan in order to meet short and long-term goals to improve
              the security posture of organizations.
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-4 bg-blue-600 border border-blue-600 text-white text-sm font-normal hover:bg-blue-700 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Application Security</h3>
              <p className="text-gray-600">Comprehensive security testing and vulnerability assessment for your applications.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Network Security</h3>
              <p className="text-gray-600">Advanced network security solutions to protect your infrastructure.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Cloud Security</h3>
              <p className="text-gray-600">Secure cloud environments and compliance management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl text-white leading-tight mb-8">
            Ready to secure your organization?
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 text-sm font-normal hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}