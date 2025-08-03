import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Quick Links */}
          <div>
            <h5 className="text-white font-medium text-base mb-10">Quick Links</h5>
            <nav className="space-y-3">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</Link>
              <Link to="/partners" className="block text-gray-400 hover:text-white transition-colors">Partners</Link>
              <Link to="/careers" className="block text-gray-400 hover:text-white transition-colors">Careers</Link>
              <Link to="/resources" className="block text-gray-400 hover:text-white transition-colors">Resources</Link>
              <Link to="/faq" className="block text-gray-400 hover:text-white transition-colors">FAQ</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h5 className="text-white font-medium text-base mb-10">Services</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h6 className="text-white font-medium text-sm mb-4">APPLICATION SECURITY</h6>
                <nav className="space-y-3">
                  <Link to="/services/web-vapt" className="block text-gray-400 hover:text-white transition-colors">Web Application VAPT</Link>
                  <Link to="/services/mobile-vapt" className="block text-gray-400 hover:text-white transition-colors">Mobile Application VAPT</Link>
                  <Link to="/services/code-review" className="block text-gray-400 hover:text-white transition-colors">Secure Code Review</Link>
                </nav>
                
                <h6 className="text-white font-medium text-sm mb-4 mt-8">CLOUD SECURITY</h6>
                <nav className="space-y-3">
                  <Link to="/services/deployment-review" className="block text-gray-400 hover:text-white transition-colors">Deployment Review</Link>
                </nav>
              </div>
              
              <div>
                <h6 className="text-white font-medium text-sm mb-4">NETWORK SECURITY</h6>
                <nav className="space-y-3">
                  <Link to="/services/network-vapt" className="block text-gray-400 hover:text-white transition-colors">Network VAPT</Link>
                  <Link to="/services/red-team" className="block text-gray-400 hover:text-white transition-colors">Red Team Assessment</Link>
                  <Link to="/services/voip-testing" className="block text-gray-400 hover:text-white transition-colors">VoIP Penetration Testing</Link>
                </nav>
                
                <h6 className="text-white font-medium text-sm mb-4 mt-8">BLOCKCHAIN SECURITY</h6>
                <nav className="space-y-3">
                  <Link to="/services/smart-contract" className="block text-gray-400 hover:text-white transition-colors">Smart Contract Auditing</Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Strobes & Social */}
          <div>
            <h5 className="text-white font-medium text-base mb-10">Strobes</h5>
            <nav className="space-y-3 mb-10">
              <Link to="/strobes/overview" className="block text-gray-400 hover:text-white transition-colors">Overview</Link>
              <Link to="/strobes/application-security" className="block text-gray-400 hover:text-white transition-colors">Application Security</Link>
              <Link to="/strobes/infrastructure-security" className="block text-gray-400 hover:text-white transition-colors">Infrastructure Security</Link>
              <Link to="/strobes/enterprise-security" className="block text-gray-400 hover:text-white transition-colors">Enterprise Security</Link>
              <Link to="/strobes/cains" className="block text-gray-400 hover:text-white transition-colors">CAINS</Link>
              <Link to="/strobes/devsecops" className="block text-gray-400 hover:text-white transition-colors">Managed DevSecOps</Link>
            </nav>

            <h5 className="text-white font-medium text-base mb-6">Social</h5>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.67 0.340088H1.33C0.978071 0.342705 0.641298 0.483669 0.39244 0.732528C0.143581 0.981386 0.00261668 1.31816 0 1.67009V23.0101C0.00261668 23.362 0.143581 23.6988 0.39244 23.9476C0.641298 24.1965 0.978071 24.3375 1.33 24.3401H12.82V15.0601H9.7V11.4301H12.82V8.76009C12.82 5.66009 14.71 3.97009 17.49 3.97009C18.4222 3.94687 19.3548 3.99366 20.28 4.11009V7.34009H18.37C16.86 7.34009 16.57 8.06009 16.57 9.11009V11.4201H20.17L19.7 15.0501H16.57V24.3401H22.67C23.0219 24.3375 23.3587 24.1965 23.6076 23.9476C23.8564 23.6988 23.9974 23.362 24 23.0101V1.67009C23.9974 1.31816 23.8564 0.981386 23.6076 0.732528C23.3587 0.483669 23.0219 0.342705 22.67 0.340088Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.2066 0.399935H1.79354C1.32843 0.397138 0.880702 0.576573 0.546249 0.899815C0.211797 1.22306 0.0172074 1.66441 0.00415039 2.12935V22.5924C0.0146483 23.0582 0.208438 23.5011 0.543452 23.8248C0.878466 24.1486 1.32767 24.3272 1.79354 24.3218H22.2066C22.6725 24.3272 23.1217 24.1486 23.4567 23.8248C23.7917 23.5011 23.9855 23.0582 23.996 22.5924V2.12935C23.983 1.66441 23.7884 1.22306 23.4539 0.899815C23.1195 0.576573 22.6718 0.397138 22.2066 0.399935ZM7.11174 20.803H3.59294V9.39689H7.11174V20.803ZM5.39233 7.80743C4.85207 7.80758 4.33317 7.59644 3.9465 7.21912C3.55984 6.8418 3.33608 6.32821 3.32303 5.78811C3.31324 5.51373 3.36008 5.24028 3.4606 4.98479C3.56113 4.72931 3.71321 4.49727 3.90735 4.30313C4.10148 4.10899 4.33353 3.95692 4.58901 3.85639C4.8445 3.75586 5.11795 3.70903 5.39233 3.71881C5.91499 3.7552 6.40439 3.9885 6.76177 4.37163C7.11914 4.75476 7.31789 5.25918 7.31789 5.78311C7.31789 6.30704 7.11914 6.81147 6.76177 7.19459C6.40439 7.57772 5.91499 7.81102 5.39233 7.84741V7.80743ZM20.4772 20.733H16.9984V15.1549C16.9984 13.8254 16.9984 12.096 15.139 12.096C13.2797 12.096 12.9998 13.5555 12.9998 15.025V20.6731H9.44095V9.39689H12.7598V10.8964H12.8298C13.17 10.3056 13.666 9.81971 14.2637 9.49179C14.8613 9.16387 15.5376 9.00655 16.2187 9.03701C19.8074 9.03701 20.4772 11.4362 20.4772 14.4852V20.733Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 22 18">
                  <path d="M6.92045 18.305C8.6094 18.3156 10.2837 17.9908 11.8461 17.3494C13.4085 16.7079 14.8281 15.7627 16.0224 14.5684C17.2167 13.3741 18.1619 11.9545 18.8034 10.3921C19.4448 8.82965 19.7696 7.1554 19.759 5.46645V4.87651C20.6345 4.23507 21.3923 3.44684 21.9988 2.54677C21.1744 2.90733 20.3021 3.14646 19.409 3.25669C20.3559 2.69254 21.0663 1.80452 21.4088 0.756972C20.5264 1.28635 19.5588 1.65851 18.5491 1.85685C17.8692 1.1323 16.9693 0.65204 15.9889 0.490388C15.0085 0.328737 14.0021 0.494702 13.1255 0.962604C12.2489 1.43051 11.5509 2.17426 11.1396 3.07879C10.7282 3.98332 10.6265 4.9982 10.85 5.96639C9.05623 5.87834 7.30112 5.41347 5.69894 4.60205C4.09676 3.79062 2.68346 2.65084 1.55105 1.25692C0.980034 2.24798 0.806957 3.419 1.06686 4.53287C1.32677 5.64675 2.00023 6.62024 2.95089 7.25625C2.24958 7.2292 1.5645 7.03737 0.951114 6.69631V6.7463C0.944882 7.78202 1.2938 8.78859 1.93971 9.59825C2.58562 10.4079 3.4895 10.9718 4.50072 11.1958C3.84843 11.3712 3.16516 11.3986 2.50094 11.2758C2.79369 12.1591 3.35253 12.9302 4.10081 13.4833C4.84909 14.0365 5.75017 14.3446 6.68047 14.3654C5.08986 15.6458 3.11296 16.3506 1.0711 16.3652C0.713095 16.3549 0.355928 16.3248 0.0012207 16.2752C2.06794 17.592 4.46993 18.2862 6.92045 18.275"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <h4 className="text-white font-bold text-2xl mb-2">WeSecureApp</h4>
            <p className="text-gray-400 text-sm">© 2020 WeSecureApp. All Rights Reserved.</p>
          </div>
          <div className="mt-8 lg:mt-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/ea910c935f1b780e1e7579683a9ea2b84743b980?width=376" 
              alt="Footer Image" 
              className="w-[188px] h-[124px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
