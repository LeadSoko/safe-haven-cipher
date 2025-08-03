import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PlaceholderPageProps {
  title?: string;
  description?: string;
}

export default function PlaceholderPage({ 
  title = "Coming Soon", 
  description = "This page is under development. Please check back later." 
}: PlaceholderPageProps) {
  const location = useLocation();
  const pageName = location.pathname.split('/').filter(Boolean).join(' / ').toUpperCase() || 'HOME';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-white py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="space-y-4 text-sm text-gray-500">
            <p>Current path: <code className="bg-gray-100 px-2 py-1 rounded">{location.pathname}</code></p>
            <p>Page: {pageName}</p>
          </div>
          <div className="mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-4 bg-[#0F62FE] border border-[#0F62FE] text-white text-sm font-normal hover:bg-blue-700 transition-colors"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
