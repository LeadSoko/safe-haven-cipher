import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function ProductDetails() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <section className="bg-[#F6F9FC] py-6 border-b border-[#F6F9FC]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="flex items-center text-sm">
            <a href="/" className="text-[#0068B1] underline font-['Lexend_Deca']">Home</a>
            <svg className="w-8 h-3.5 mx-2" viewBox="0 0 33 14" fill="none">
              <path d="M20.0072 6.5625C19.986 6.52098 19.9611 6.48145 19.9328 6.44438L19.889 6.37438V6.34375L15.2909 1.53125C15.2269 1.46806 15.1511 1.41814 15.0677 1.38435C14.9844 1.35056 14.8952 1.33358 14.8053 1.33438C14.6742 1.33479 14.5459 1.3725 14.4354 1.44309C14.3249 1.51368 14.2367 1.61424 14.1812 1.73304C14.1257 1.85184 14.1051 1.98397 14.1219 2.11402C14.1387 2.24407 14.1921 2.36667 14.2759 2.4675L18.419 6.825L14.2759 11.2C14.1732 11.2926 14.1004 11.4136 14.0668 11.5477C14.0332 11.6819 14.0403 11.823 14.0872 11.953C14.1342 12.0831 14.2188 12.1962 14.3304 12.2779C14.4419 12.3597 14.5753 12.4063 14.7134 12.4119C14.817 12.411 14.9191 12.3869 15.0122 12.3415C15.1053 12.2961 15.187 12.2304 15.2515 12.1494L19.8628 7.315V7.28438L19.9065 7.21438C19.9338 7.17816 19.9587 7.14016 19.9809 7.10063C19.9947 7.06105 20.0036 7.01989 20.0072 6.97813C20.0121 6.93452 20.0121 6.89049 20.0072 6.84688C20.0117 6.80178 20.0117 6.75635 20.0072 6.71125V6.685C20.0093 6.64712 20.0093 6.60914 20.0072 6.57125V6.5625Z" fill="#516F90"/>
            </svg>
            <span className="text-[#2E475D] font-medium font-['Lexend_Deca']">Marketing Hub</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-[1112px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - UI Preview */}
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/287721565dfde9baf28a19ccda78f7ac20c319c2?width=850" 
                alt="Marketing Hub Interface"
                className="w-[425px] h-[441px] object-contain"
              />
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c9af02896439f6b0f51cc8fe2bf05e1bed1b6848?width=50" 
                  alt="Marketing Hub Logo"
                  className="w-6 h-6"
                />
                <span className="text-[22px] font-medium text-[#213343] font-['Lexend_Deca']">Marketing Hub®</span>
              </div>
              
              <h1 className="text-[36px] font-semibold leading-[46px] text-[#213343] font-['IBM_Plex_Sans']">
                AI-Powered Marketing<br />Software
              </h1>
              
              <div className="flex gap-4">
                <button className="bg-[#0F62FE] text-white px-5 py-4 text-base font-medium font-['Lexend_Deca'] hover:bg-blue-700 transition-colors">
                  Get a demo
                </button>
                <button className="border-2 border-[#0F62FE] text-[#0F62FE] bg-white px-5 py-4 text-base font-medium font-['Lexend_Deca'] hover:bg-blue-50 transition-colors">
                  Get started free
                </button>
              </div>
              
              {/* Accordion Sections */}
              <div className="space-y-4 mt-8">
                <div className="border border-[#DBE4ED] rounded-lg bg-white">
                  <button className="w-full p-6 text-left flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#213343] font-['Lexend_Deca']">Product Description</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 15" fill="none">
                      <path d="M7.55909 10.2418C7.60167 10.2207 7.64136 10.1943 7.67721 10.1631L7.74721 10.1193H7.77784L12.5903 5.52994C12.657 5.46818 12.7108 5.3939 12.7487 5.31133C12.7867 5.22877 12.808 5.13954 12.8114 5.04874C12.8149 4.95794 12.8004 4.86735 12.7689 4.78214C12.7373 4.69694 12.6893 4.61878 12.6275 4.55213C12.5658 4.48549 12.4915 4.43166 12.4089 4.39372C12.3263 4.35578 12.2371 4.33448 12.1463 4.33103C12.0555 4.32757 11.9649 4.34204 11.8797 4.3736C11.7945 4.40515 11.7164 4.45318 11.6497 4.51494L7.30096 8.65807L2.95221 4.51057C2.81703 4.38409 2.63715 4.3165 2.45213 4.32265C2.26712 4.32881 2.09212 4.4082 1.96565 4.54338C1.83917 4.67856 1.77158 4.85844 1.77773 5.04346C1.78388 5.22848 1.86328 5.40347 1.99846 5.52994L6.81096 10.1281H6.84159L6.91159 10.1718C6.94684 10.1992 6.98498 10.2227 7.02533 10.2418C7.06549 10.2535 7.10643 10.2623 7.14784 10.2681L7.27908 10.2899C7.32507 10.2858 7.37051 10.277 7.41471 10.2637H7.55034L7.55909 10.2418Z" fill="#213343"/>
                    </svg>
                  </button>
                </div>
                
                <div className="border border-[#DBE4ED] rounded-lg bg-white">
                  <button className="w-full p-6 text-left flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#213343] font-['Lexend_Deca']">Pricing Overview</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 15" fill="none">
                      <path d="M7.55909 10.2418C7.60167 10.2207 7.64136 10.1943 7.67721 10.1631L7.74721 10.1193H7.77784L12.5903 5.52994C12.657 5.46818 12.7108 5.3939 12.7487 5.31133C12.7867 5.22877 12.808 5.13954 12.8114 5.04874C12.8149 4.95794 12.8004 4.86735 12.7689 4.78214C12.7373 4.69694 12.6893 4.61878 12.6275 4.55213C12.5658 4.48549 12.4915 4.43166 12.4089 4.39372C12.3263 4.35578 12.2371 4.33448 12.1463 4.33103C12.0555 4.32757 11.9649 4.34204 11.8797 4.3736C11.7945 4.40515 11.7164 4.45318 11.6497 4.51494L7.30096 8.65807L2.95221 4.51057C2.81703 4.38409 2.63715 4.3165 2.45213 4.32265C2.26712 4.32881 2.09212 4.4082 1.96565 4.54338C1.83917 4.67856 1.77158 4.85844 1.77773 5.04346C1.78388 5.22848 1.86328 5.40347 1.99846 5.52994L6.81096 10.1281H6.84159L6.91159 10.1718C6.94684 10.1992 6.98498 10.2227 7.02533 10.2418C7.06549 10.2535 7.10643 10.2623 7.14784 10.2681L7.27908 10.2899C7.32507 10.2858 7.37051 10.277 7.41471 10.2637H7.55034L7.55909 10.2418Z" fill="#213343"/>
                    </svg>
                  </button>
                </div>
                
                <div className="border border-[#DBE4ED] rounded-lg bg-white">
                  <button className="w-full p-6 text-left flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#213343] font-['Lexend_Deca']">Features</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 15" fill="none">
                      <path d="M7.55909 10.2418C7.60167 10.2207 7.64136 10.1943 7.67721 10.1631L7.74721 10.1193H7.77784L12.5903 5.52994C12.657 5.46818 12.7108 5.3939 12.7487 5.31133C12.7867 5.22877 12.808 5.13954 12.8114 5.04874C12.8149 4.95794 12.8004 4.86735 12.7689 4.78214C12.7373 4.69694 12.6893 4.61878 12.6275 4.55213C12.5658 4.48549 12.4915 4.43166 12.4089 4.39372C12.3263 4.35578 12.2371 4.33448 12.1463 4.33103C12.0555 4.32757 11.9649 4.34204 11.8797 4.3736C11.7945 4.40515 11.7164 4.45318 11.6497 4.51494L7.30096 8.65807L2.95221 4.51057C2.81703 4.38409 2.63715 4.3165 2.45213 4.32265C2.26712 4.32881 2.09212 4.4082 1.96565 4.54338C1.83917 4.67856 1.77158 4.85844 1.77773 5.04346C1.78388 5.22848 1.86328 5.40347 1.99846 5.52994L6.81096 10.1281H6.84159L6.91159 10.1718C6.94684 10.1992 6.98498 10.2227 7.02533 10.2418C7.06549 10.2535 7.10643 10.2623 7.14784 10.2681L7.27908 10.2899C7.32507 10.2858 7.37051 10.277 7.41471 10.2637H7.55034L7.55909 10.2418Z" fill="#213343"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Count Section */}
      <section className="bg-white py-12">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-base font-semibold text-[#213343] font-['Lexend_Deca'] text-center mb-8">
            258,000+ customers in over 135 countries grow their businesses with HubSpot
          </h2>
          
          {/* Customer Logos Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center gap-8">
              <button className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none">
                  <path d="M13.5597 3.22998C13.3309 3.0173 13.0282 2.90223 12.7159 2.90924C12.4035 2.91624 12.1063 3.04476 11.8872 3.26748L4.00471 11.5175V11.57L3.92971 11.69C3.87997 11.7485 3.8395 11.8142 3.80971 11.885C3.78602 11.9528 3.77091 12.0234 3.76471 12.095H3.74971C3.74489 12.1674 3.74489 12.2401 3.74971 12.3125C3.74553 12.3899 3.74553 12.4675 3.74971 12.545C3.75745 12.6212 3.77252 12.6966 3.79471 12.77C3.83107 12.8412 3.87374 12.9089 3.92221 12.9725L3.99721 13.0925V13.13L11.8872 21.38C12.0427 21.5699 12.2531 21.7071 12.4895 21.773C12.7259 21.8389 12.977 21.8303 13.2083 21.7482C13.4396 21.6662 13.64 21.5148 13.7821 21.3147C13.9242 21.1145 14.001 20.8754 14.0022 20.63C14.0017 20.4621 13.9653 20.2963 13.8954 20.1437C13.8256 19.991 13.7239 19.8551 13.5972 19.745L6.49471 12.3275L13.5972 4.87998C13.7992 4.66151 13.9117 4.37504 13.9122 4.07748C13.912 3.9222 13.8807 3.76854 13.8202 3.62556C13.7597 3.48257 13.6711 3.35317 13.5597 3.24498V3.22998Z" fill="#213343"/>
                </svg>
              </button>
              
              <div className="flex items-center gap-8">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/6d178ca883305a36729f0aab5dce2c3319b5882d?width=200" alt="Customer Logo" className="h-10 object-contain" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/a3df2ac191d5aee02e87468e666b4be8983b73f8?width=200" alt="Customer Logo" className="h-8 object-contain" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/887e511a8cbd1c0dd77a6aee890cddaf42f5f2d4?width=200" alt="Customer Logo" className="h-11 object-contain" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/4660902b2942d2a8f0d601fd484281c311b91224?width=200" alt="Customer Logo" className="h-4 object-contain" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/bd205b1e21cbdfd06f3ddb9f260b98514b78f513?width=200" alt="Customer Logo" className="h-11 object-contain" />
              </div>
              
              <button className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none">
                  <path d="M17.4967 11.63C17.4603 11.5588 17.4176 11.4911 17.3692 11.4275L17.2942 11.3075V11.255L9.41165 3.00503C9.30197 2.8967 9.17195 2.81112 9.02909 2.7532C8.88622 2.69528 8.73331 2.66616 8.57915 2.66753C8.35437 2.66824 8.13443 2.73288 7.94499 2.85389C7.75556 2.9749 7.60445 3.14729 7.50931 3.35095C7.41416 3.5546 7.37891 3.78112 7.40765 4.00406C7.4364 4.227 7.52796 4.43717 7.67165 4.61003L14.7742 12.08L7.67165 19.58C7.49555 19.7387 7.37072 19.9462 7.3131 20.1762C7.25549 20.4061 7.26771 20.648 7.3482 20.8709C7.42869 21.0939 7.57379 21.2878 7.76499 21.4279C7.95619 21.568 8.18481 21.6479 8.42165 21.6575C8.59922 21.6559 8.7742 21.6147 8.9338 21.5369C9.0934 21.459 9.2336 21.3465 9.34415 21.2075L17.2492 12.92V12.8675L17.3242 12.7475C17.3709 12.6854 17.4135 12.6203 17.4517 12.5525C17.4753 12.4847 17.4905 12.4141 17.4967 12.3425C17.5051 12.2678 17.5051 12.1923 17.4967 12.1175C17.5045 12.0402 17.5045 11.9623 17.4967 11.885V11.84C17.5004 11.7751 17.5004 11.71 17.4967 11.645V11.63Z" fill="#213343"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca']">
                Instant insight. Lasting growth. Powered by AI.
              </h2>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                AI-driven search and rising customer expectations are changing how marketers win attention.
              </p>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                Marketing Hub pairs built-in AI with HubSpot's Smart CRM to identify high-intent leads. Tailor personalized customer experiences and launch cross-channel campaigns — all from a single, intuitive platform that maximizes your team's effectiveness with the resources you already have.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative w-[526px] h-[296px] bg-black rounded overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/df4c93b9add1ef3b68ee5fa4562fb25921b22063?width=1052" 
                  alt="Marketing Hub Video"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px] bg-[#FF7A59] rounded-full opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg width="86" height="85" viewBox="0 0 86 85" fill="none">
                    <path d="M17.9735 11.5672L72.546 41.0889C73.1404 41.4071 73.6243 42.2119 73.6243 42.8852C73.6243 43.5585 73.1404 44.3659 72.546 44.6815L17.9735 74.1953C17.7236 74.3295 17.2897 74.4399 17.0083 74.4399C15.8853 74.4399 14.9727 73.5299 14.9727 72.4069V13.3608C14.9727 12.2352 15.8853 11.3252 17.0083 11.3252C17.2923 11.3252 17.7236 11.433 17.9735 11.5672Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Challenges Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] font-['Lexend_Deca'] text-center mb-16">
            Overcome Your Toughest Marketing Challenges with Integrated AI Agents
          </h2>
          
          {/* AI Agents Carousel */}
          <div className="relative">
            <div className="flex items-center justify-between">
              <button className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none">
                  <path d="M13.5597 3.60009C13.3309 3.38742 13.0282 3.27235 12.7159 3.27935C12.4035 3.28636 12.1063 3.41487 11.8872 3.63759L4.00471 11.8876V11.9401L3.92971 12.0601C3.87997 12.1186 3.8395 12.1843 3.80971 12.2551C3.78602 12.3229 3.77091 12.3935 3.76471 12.4651H3.74971C3.74489 12.5375 3.74489 12.6102 3.74971 12.6826C3.74553 12.76 3.74553 12.8376 3.74971 12.9151C3.75745 12.9914 3.77252 13.0667 3.79471 13.1401C3.83107 13.2113 3.87374 13.279 3.92221 13.3426L3.99721 13.4626V13.5001L11.8872 21.7501C12.0427 21.94 12.2531 22.0772 12.4895 22.1431C12.7259 22.209 12.977 22.2004 13.2083 22.1184C13.4396 22.0363 13.64 21.8849 13.7821 21.6848C13.9242 21.4846 14.001 21.2455 14.0022 21.0001C14.0017 20.8322 13.9653 20.6664 13.8954 20.5138C13.8256 20.3612 13.7239 20.2252 13.5972 20.1151L6.49471 12.6976L13.5972 5.25009C13.7992 5.03163 13.9117 4.74515 13.9122 4.44759C13.912 4.29232 13.8807 4.13866 13.8202 3.99567C13.7597 3.85269 13.6711 3.72328 13.5597 3.61509V3.60009Z" fill="#213343"/>
                </svg>
              </button>
              
              <div className="flex-1 mx-12">
                <div className="flex items-center gap-12">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7e2a14f04cd318e89824ee9e019acbac2f563abc?width=300" 
                    alt="AI Agent Icon"
                    className="w-[150px] h-[150px] object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca'] mb-4">
                      Breeze Customer Agent
                    </h3>
                    <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca'] mb-6">
                      Drive marketing engagement with an AI agent that captures visitor interest 24/7, guides visitors to relevant resources, and converts website traffic into sales-ready leads.
                    </p>
                    <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca']">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              
              <button className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none">
                  <path d="M17.4967 11.9999C17.4603 11.9287 17.4176 11.8609 17.3692 11.7974L17.2942 11.6774V11.6249L9.41165 3.3749C9.30197 3.26657 9.17195 3.18099 9.02909 3.12307C8.88622 3.06515 8.73331 3.03603 8.57915 3.0374C8.35437 3.03811 8.13443 3.10275 7.94499 3.22376C7.75556 3.34477 7.60445 3.51716 7.50931 3.72082C7.41416 3.92448 7.37891 4.15099 7.40765 4.37393C7.4364 4.59687 7.52796 4.80704 7.67165 4.9799L14.7742 12.4499L7.67165 19.9499C7.49555 20.1086 7.37072 20.3161 7.3131 20.546C7.25549 20.776 7.26771 21.0178 7.3482 21.2408C7.42869 21.4638 7.57379 21.6577 7.76499 21.7978C7.95619 21.9379 8.18481 22.0178 8.42165 22.0274C8.59922 22.0258 8.7742 21.9846 8.9338 21.9067C9.0934 21.8289 9.2336 21.7164 9.34415 21.5774L17.2492 13.2899V13.2374L17.3242 13.1174C17.3709 13.0553 17.4135 12.9902 17.4517 12.9224C17.4753 12.8545 17.4905 12.784 17.4967 12.7124C17.5051 12.6376 17.5051 12.5622 17.4967 12.4874C17.5045 12.4101 17.5045 12.3322 17.4967 12.2549V12.2099C17.5004 12.145 17.5004 12.0798 17.4967 12.0149V11.9999Z" fill="#213343"/>
                </svg>
              </button>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-8 gap-2">
              <div className="w-4 h-4 rounded-full bg-[#213343]"></div>
              <div className="w-4 h-4 rounded-full bg-[#99AFC4]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/6f7fa04ac827f45f51b0c4cbea22121ec239707d?width=1052" 
                alt="Email Editor Interface"
                className="w-full h-auto rounded"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca']">
                Stop guessing, start converting.
              </h2>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                Tailor every marketing offer with HubSpot's personalization tools, then easily launch campaigns.
              </p>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                Teams using lead scoring and email marketing have seen <a href="#" className="text-[#0068B1] underline font-medium">14x more leads</a> and an <a href="#" className="text-[#0068B1] underline font-medium">+86% increase in email clickthrough rates</a>, all from one platform.
              </p>
              
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca'] inline-block">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <h3 className="text-[22px] font-semibold text-[#213343] font-['Lexend_Deca'] mb-8">
            Popular Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F6F9FC] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                Forms
              </h4>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Visitors avoid long forms. Autofill, score, and sync leads – instantly.
              </p>
            </div>
            
            <div className="bg-[#F6F9FC] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                Email Marketing
              </h4>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Emails get ignored. Personalize timing and copy to boost opens and clicks.
              </p>
            </div>
            
            <div className="bg-[#F6F9FC] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                Social Media Management
              </h4>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Social algorithms change daily. Predict and schedule posts before trends peak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Automation Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca']">
                Busywork is the enemy of growth — eliminate it with AI.
              </h2>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                Marketing Hub's AI handles the complexity so you don't have to.
              </p>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                While <a href="#" className="text-[#0068B1] underline font-medium">78% of marketers</a> report increased personalization capabilities, your team saves 2.5 hours daily on manual tasks. Spend more time on strategy, less time on execution.
              </p>
              
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca'] inline-block">
                Learn more
              </a>
            </div>
            
            <div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/198534ad1682a4f408749adb55ef5f6c8a53f3d0?width=1052" 
                alt="AI Workflow Interface"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <h3 className="text-[22px] font-semibold text-[#213343] font-['Lexend_Deca'] mb-8">
            Popular Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F6F9FC] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                AI for Marketers
              </h4>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Guesswork drains budget. Spot winning tactics and scale them on autopilot.
              </p>
            </div>
            
            <div className="bg-[#F6F9FC] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                AI Email Writer
              </h4>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Blank screens steal hours. Draft on-brand emails that drive clicks in seconds.
              </p>
            </div>
            
            <div className="bg-[#F6F9FC] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                Lookalike Lists
              </h4>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Your best customers hide in plain data. Find high-potential prospects within your contact lists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ae3053702b1eb8d30b67cda7f4fa1d9261744996?width=1052" 
                alt="Analytics Dashboard"
                className="w-full h-auto rounded"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca']">
                Data scattered? One dashboard, total clarity.
              </h2>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                Marketing Hub's predictive AI maps every touchpoint, flags winning campaigns, forecasts ROI, then instantly automates next steps.
              </p>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                Teams using marketing reporting see <a href="#" className="text-[#0068B1] underline font-medium">8x more deals,</a> while attribution reporting drives <a href="#" className="text-[#0068B1] underline font-medium">11x more inbound leads</a> — so you can double down on what drives revenue.
              </p>
              
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca'] inline-block">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <h3 className="text-[22px] font-semibold text-[#213343] font-['Lexend_Deca'] mb-8">
            Popular Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F6F9FC] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                Marketing Analytics
              </h4>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Disconnected metrics blur the truth. Unified analytics tie every dollar to its source.
              </p>
            </div>
            
            <div className="bg-[#F6F9FC] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                Dashboards & Reporting
              </h4>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Static dashboards age fast. See real-time ROI you can act on.
              </p>
            </div>
            
            <div className="bg-[#F6F9FC] rounded-lg p-4">
              <h4 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                Advanced Marketing Reporting
              </h4>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Basic reports hide growth opportunities. Identify profit-driving channels with advanced reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] font-['Lexend_Deca'] mb-4">
              Marketing Software That Grows With You
            </h2>
            <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
              Start with free tools and pay as you grow, or hit the ground running with one of our premium editions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Free Plan */}
            <div className="bg-white border border-[#DBE4ED] rounded-lg p-6">
              <h3 className="text-2xl font-medium text-[#213343] font-['Lexend_Deca'] mb-2">Free</h3>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca'] mb-2">No credit card required</p>
              <p className="text-lg font-semibold text-[#213343] font-['Lexend_Deca'] mb-6">$0/month</p>
              
              <h4 className="text-lg font-medium text-[#213343] font-['Lexend_Deca'] mb-4">Popular features</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Email marketing</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Forms</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Live chat</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Ad management</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Mobile optimization</span>
                </li>
              </ul>
            </div>

            {/* Starter Plan */}
            <div className="bg-white border border-[#DBE4ED] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-2">
                <svg width="12" height="17" viewBox="0 0 12 17" fill="none">
                  <path d="M11.3827 9.18732C12.1873 8.00901 11.2279 6.285 9.80713 6.32356H7.8667V2.86202C7.8667 2.04982 7.34214 1.33077 6.56882 1.08284C6.38085 1.02264 6.18879 0.993652 5.9987 0.993652C5.40691 0.993652 4.83584 1.27556 4.47852 1.77582L0.670039 7.10559C-0.217865 8.28117 0.717199 10.0983 2.19001 10.06H4.13028V13.5216C4.13028 14.3336 4.65492 15.0527 5.42823 15.3006C6.20118 15.5484 7.04632 15.2685 7.51854 14.6078L11.3827 9.18732Z" fill="#FFAC78"/>
                  <path d="M6.00049 4.72511C7.03198 4.72511 7.86817 3.88892 7.86817 2.85743C7.86817 1.82593 7.03198 0.989746 6.00049 0.989746C4.969 0.989746 4.13281 1.82593 4.13281 2.85743C4.13281 3.88892 4.969 4.72511 6.00049 4.72511Z" fill="#FF7A59"/>
                </svg>
                <h3 className="text-2xl font-medium text-[#213343] font-['Lexend_Deca']">Starter</h3>
              </div>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca'] mb-2">Starts at</p>
              <div className="mb-2">
                <span className="text-lg font-semibold text-[#213343] font-['Lexend_Deca']">$15/month </span>
                <span className="text-lg font-semibold text-[#213343] font-['Lexend_Deca'] line-through">20/month</span>
              </div>
              <p className="text-sm font-medium text-[#213343] font-['Lexend_Deca'] mb-6">per seat*</p>
              
              <h4 className="text-lg font-medium text-[#213343] font-['Lexend_Deca'] mb-4">Popular features</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Everything in Free</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Multiple currencies</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Email health insights</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Calls-to-action</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">No HubSpot branding</span>
                </li>
              </ul>
            </div>

            {/* Professional Plan */}
            <div className="bg-white border border-[#DBE4ED] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-2">
                <svg width="23" height="17" viewBox="0 0 23 17" fill="none">
                  <path d="M20.8156 9.29842C21.7095 7.98918 20.6435 6.07362 19.0649 6.11646H16.9089V2.2703C16.9089 1.36786 16.326 0.568909 15.4668 0.293429C15.2579 0.226549 15.0445 0.194336 14.8333 0.194336C14.1758 0.194336 13.5412 0.507563 13.1442 1.06342L8.91256 6.98539C7.926 8.29159 8.96497 10.3106 10.6014 10.2681H12.7573V14.1142C12.7573 15.0165 13.3402 15.8155 14.1994 16.0909C15.0583 16.3663 15.9973 16.0553 16.522 15.3211L20.8156 9.29842Z" fill="#FFAC78"/>
                  <path d="M11.4246 11.6008H10.6018L10.5509 11.6015C9.29444 11.6015 8.15106 10.8728 7.56698 9.69969C6.98804 8.53694 7.09198 7.19705 7.8373 6.19767L10.2382 2.83767L10.2385 2.26458C10.2385 1.11881 9.30969 0.189941 8.16388 0.189941C7.46704 0.189941 6.8745 0.503941 6.4983 1.0309C6.5042 1.02261 6.47954 1.05393 6.47308 1.06301L2.24254 6.98337C1.25624 8.28926 2.29494 10.3078 3.93094 10.2653H6.08626V14.1104C6.08626 15.0124 6.66904 15.8112 7.52806 16.0866C8.38664 16.3618 9.32544 16.051 9.85 15.3169C9.85 15.3169 10.5734 14.3024 11.4246 13.1087V11.6008Z" fill="#33475B"/>
                  <path d="M14.8359 4.34034C15.982 4.34034 16.9111 3.41124 16.9111 2.26514C16.9111 1.11904 15.982 0.189941 14.8359 0.189941C13.6898 0.189941 12.7607 1.11904 12.7607 2.26514C12.7607 3.41124 13.6898 4.34034 14.8359 4.34034Z" fill="#FF7A59"/>
                </svg>
                <h3 className="text-2xl font-medium text-[#213343] font-['Lexend_Deca']">Professional</h3>
              </div>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca'] mb-2">Starts at</p>
              <p className="text-lg font-semibold text-[#213343] font-['Lexend_Deca'] mb-2">$890/month</p>
              <p className="text-sm font-medium text-[#213343] font-['Lexend_Deca'] mb-6">(3 seats included)</p>
              
              <h4 className="text-lg font-medium text-[#213343] font-['Lexend_Deca'] mb-4">Popular features</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Everything in Starter</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Smart content</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Customer agent</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">SEO</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Social media</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-[#DBE4ED] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-2">
                <svg width="35" height="17" viewBox="0 0 35 17" fill="none">
                  <path d="M14.0886 11.5982H13.2662L13.2154 11.5989C11.9591 11.5989 10.8159 10.8703 10.2319 9.69741C9.65316 8.53487 9.7571 7.19514 10.5022 6.19589L12.9033 2.83573L12.9036 2.26459C12.9036 1.11881 11.9747 0.189941 10.8289 0.189941C10.1321 0.189941 9.53954 0.503941 9.16334 1.0309C9.16924 1.02261 9.14458 1.05393 9.13812 1.06301L4.90758 6.98337C3.92128 8.28926 4.95998 10.3078 6.59598 10.2653H8.7513V14.1104C8.7513 15.0124 9.33408 15.8112 10.1931 16.0866C11.0517 16.3618 11.9905 16.051 12.515 15.3169C12.515 15.3169 13.2379 14.3033 14.0886 13.1103V11.5982Z" fill="#7B98B6"/>
                  <path d="M30.1505 9.29842C31.0445 7.98918 29.9785 6.07362 28.3998 6.11646H26.2438V2.2703C26.2438 1.36786 25.661 0.568909 24.8017 0.293429C24.5929 0.226549 24.3795 0.194336 24.1683 0.194336C23.5107 0.194336 22.8762 0.507563 22.4792 1.06342L18.2475 6.98539C17.261 8.29159 18.2999 10.3106 19.9364 10.2681H22.0922V14.1142C22.0922 15.0165 22.6752 15.8155 23.5344 16.0909C24.3932 16.3663 25.3323 16.0553 25.857 15.3211L30.1505 9.29842Z" fill="#FFAC78"/>
                  <path d="M20.7596 11.6008H19.9367L19.8859 11.6015C18.6294 11.6015 17.486 10.8728 16.9019 9.69969C16.323 8.53694 16.4269 7.19705 17.1723 6.19767L19.5732 2.83767L19.5735 2.26458C19.5735 1.11881 18.6447 0.189941 17.4988 0.189941C16.802 0.189941 16.2095 0.503941 15.8333 1.0309C15.8392 1.02261 15.8145 1.05393 15.808 1.06301L11.5775 6.98337C10.5912 8.28926 11.6299 10.3078 13.2659 10.2653H15.4212V14.1104C15.4212 15.0124 16.004 15.8112 16.863 16.0866C17.7216 16.3618 18.6604 16.051 19.185 15.3169C19.185 15.3169 19.9084 14.3024 20.7596 13.1087V11.6008Z" fill="#33475B"/>
                  <path d="M24.1709 4.34034C25.317 4.34034 26.2461 3.41124 26.2461 2.26514C26.2461 1.11904 25.317 0.189941 24.1709 0.189941C23.0248 0.189941 22.0957 1.11904 22.0957 2.26514C22.0957 3.41124 23.0248 4.34034 24.1709 4.34034Z" fill="#FF7A59"/>
                </svg>
                <h3 className="text-2xl font-medium text-[#213343] font-['Lexend_Deca']">Enterprise</h3>
              </div>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca'] mb-2">Starts at</p>
              <p className="text-lg font-semibold text-[#213343] font-['Lexend_Deca'] mb-2">$3,600/month</p>
              <p className="text-sm font-medium text-[#213343] font-['Lexend_Deca'] mb-6">(5 seats included)</p>
              
              <h4 className="text-lg font-medium text-[#213343] font-['Lexend_Deca'] mb-4">Popular features</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Everything in Professional</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Adaptive testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Multi-touch revenue attribution</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-3 h-3 text-[#213343]" viewBox="0 0 12 13" fill="none">
                    <path d="M11.7473 2.43824C12.0662 2.75391 12.0834 3.25717 11.798 3.59308L11.7504 3.64468L4.95714 10.4385C4.63979 10.7559 4.13383 10.773 3.7962 10.4888L3.74434 10.4415L0.252566 6.98377C-0.083078 6.6514 -0.0843478 6.11125 0.24973 5.77732C0.567104 5.46009 1.07296 5.44309 1.41052 5.72715L1.46237 5.7745L4.34587 8.63027L10.5346 2.44138C10.8519 2.12406 11.3578 2.10693 11.6954 2.3909L11.7473 2.43824Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-light text-[#213343] font-['Lexend_Deca']">Customer journey analytics</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <button className="bg-[#0F62FE] text-white px-6 py-4 text-base font-medium font-['Lexend_Deca'] hover:bg-blue-700 transition-colors">
              Get a demo of premium editions
            </button>
            <button className="border-2 border-[#0F62FE] text-[#0F62FE] bg-white px-6 py-4 text-base font-medium font-['Lexend_Deca'] hover:bg-blue-50 transition-colors">
              Get started with free tools
            </button>
          </div>
          
          <div className="text-center text-sm font-light text-[#213343] font-['Lexend_Deca'] space-y-1">
            <p>*Discount available for new customers only. Offer has no set end date and can be discontinued at any time. For more detailed information on product packaging</p>
            <p>and the limits that apply, please see our <a href="#" className="text-[#0068B1] underline font-medium">pricing page</a>. Price shown in USD and subject to applicable tax.</p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] font-['Lexend_Deca'] mb-4">
              It's already easy to use. But we're still here for you.
            </h2>
            <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
              We're here to help your whole team stay ahead of the curve as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F6F9FC] rounded-lg p-6 text-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/cd3beffb87dcce2029937b026b2dd78fea656133?width=150" 
                alt="Education Icon"
                className="w-[75px] h-[75px] mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                Education
              </h3>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Grow your skills with free HubSpot Academy courses and certifications.
              </p>
            </div>
            
            <div className="bg-[#F6F9FC] rounded-lg p-6 text-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/aa472110311f4a85c046de89439756c84f78fd8a?width=150" 
                alt="Support Icon"
                className="w-[75px] h-[75px] mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                24/7 Customer Support
              </h3>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Get help by calling, chatting with, or emailing our customer support team.
              </p>
            </div>
            
            <div className="bg-[#F6F9FC] rounded-lg p-6 text-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7857e092eb06751d7e965645f76f5b73ed49bbdc?width=150" 
                alt="Apps Icon"
                className="w-[75px] h-[75px] mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-[#0068B1] font-['Lexend_Deca'] mb-2 underline">
                Apps
              </h3>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca']">
                Integrate with over 1,800 third-party apps and tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-8">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="bg-[#F6F9FC] border border-[#DBE4ED] rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-[#213343] font-['Lexend_Deca'] mb-2">
              Have a question for our sales team? Give us a call and we'll walk you through it.
            </h3>
            <a href="tel:+18884827768" className="text-lg font-medium text-[#0068B1] font-['Lexend_Deca'] underline">
              +1 888-482-7768
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] font-['Lexend_Deca'] text-center mb-16">
            After 12 months, Marketing Hub customers see:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/642ce14ff626863aed70730f0236749030a84cad?width=256" 
                alt="Email Analytics"
                className="w-32 h-32 mx-auto mb-6"
              />
              <h3 className="text-[48px] font-semibold text-[#213343] font-['Lexend_Deca'] mb-2">134%</h3>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca'] mb-4">
                increase in website traffic
              </p>
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca']">
                Download ROI report
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/2dd6aa03c1ca9a25aca8b79cce2c89752e30c56c?width=256" 
                alt="Lead Generation"
                className="w-32 h-32 mx-auto mb-6"
              />
              <h3 className="text-[48px] font-semibold text-[#213343] font-['Lexend_Deca'] mb-2">133%</h3>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca'] mb-4">
                increase in inbound leads
              </p>
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca']">
                Download ROI report
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/5ea133b882c39ec85f04a29cfb55ea44be51657c?width=256" 
                alt="Marketing Analytics"
                className="w-32 h-32 mx-auto mb-6"
              />
              <h3 className="text-[48px] font-semibold text-[#213343] font-['Lexend_Deca'] mb-2">82%</h3>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca'] mb-4">
                of users increase lead generation
              </p>
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca']">
                Download ROI report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Title */}
      <section className="bg-white py-12">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] font-['Lexend_Deca'] text-center">
            How Companies Grow Faster with AI-Powered Marketing Hub
          </h2>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-white py-8">
        <div className="max-w-[1080px] mx-auto px-6">
          {/* Tab Navigation */}
          <div className="border-b border-[#DBE4ED] mb-8">
            <div className="flex">
              <button className="px-4 py-3 text-base font-medium text-[#213343] font-['Lexend_Deca'] border-b-4 border-[#192733]">
                Sandler
              </button>
              <button className="px-4 py-3 text-base font-medium text-[#2E475D] font-['Lexend_Deca']">
                Howard University
              </button>
              <button className="px-4 py-3 text-base font-medium text-[#2E475D] font-['Lexend_Deca']">
                AirStream
              </button>
            </div>
          </div>
          
          {/* Case Study Content */}
          <div>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/275b3cf743499561d348e3fc7e3de105a6394501?width=560" 
              alt="Sandler Logo"
              className="w-[280px] h-[34px] mb-6"
            />
            
            <h3 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca'] mb-6">
              Sandler Cuts Sales Cycles in Half and Quadruples SQLs with HubSpot's AI
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-medium text-[#213343] font-['Lexend_Deca'] mb-2">The Challenge</h4>
                <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                  Facing intense competition and AI-savvy buyers, Sandler had to deliver hyper-personalized experiences at scale without sacrificing its hallmark human touch.
                </p>
              </div>
              
              <div>
                <h4 className="text-base font-medium text-[#213343] font-['Lexend_Deca'] mb-2">The Solution</h4>
                <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                  Sandler used HubSpot's AI to create tailored content, trigger real-time personalization, and unify data for faster, trust-building engagement.
                </p>
              </div>
              
              <blockquote className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca'] italic">
                "As marketers, we're always looking for ways to be more efficient, more personalized, and more scalable. Breeze has really been our ticket to do that." - Emily Davidson, Director of Enterprise Marketing
              </blockquote>
              
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca'] inline-block">
                Read the full case study
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="bg-[#F6F9FC] rounded-lg p-12 text-center relative">
            <div className="flex items-center justify-center gap-4 mb-8">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/1088263a31e5a34665a3707c02c0a351e25911de?width=140" alt="Award Badge" className="w-[70px] h-[70px]" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/31abf462e323afcb981b9fc02619d1fedad1db68?width=140" alt="Award Badge" className="w-[70px] h-[70px]" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/997c167016486d79866366fb8bd37a6d680489b3?width=140" alt="Award Badge" className="w-[70px] h-[70px]" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/5d41f594a6c1c59f01bc37badf487f2a6772894b?width=140" alt="Award Badge" className="w-[70px] h-[70px]" />
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/2f95f8bb0a967b81ca775bd52d410793000a239d?width=140" alt="Award Badge" className="w-[70px] h-[70px]" />
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/eb3d084756bd9557cb0b671c8ca336c475cc502a?width=140" alt="Award Badge" className="w-[70px] h-[70px]" />
            </div>
            
            <div className="text-left max-w-md">
              <h3 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca'] mb-4">
                Voted #1 in 571 Reports
              </h3>
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca']">
                Read case studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca']">
                Win the AI-driven market — capture high-intent leads with Marketing Hub.
              </h2>
              
              <div className="flex gap-6">
                <button className="bg-[#0F62FE] text-white px-[42px] py-[22px] text-lg font-medium font-['Lexend_Deca'] hover:bg-blue-700 transition-colors">
                  Get a demo
                </button>
                <button className="border-2 border-[#0F62FE] text-[#0F62FE] bg-white px-[42px] py-[22px] text-lg font-medium font-['Lexend_Deca'] hover:bg-blue-50 transition-colors">
                  Get started free
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ffc3e324a1f1aab5bdd4beb59e6be39b08f6f918?width=680" 
                alt="Marketing Hub CTA"
                className="w-[340px] h-[344px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] font-['Lexend_Deca'] text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {[
                "How's AI search changing the marketing landscape?",
                "What specific HubSpot tools can help me optimize for AI search?",
                "What are popular marketing software features?",
                "How much does HubSpot's marketing software cost?",
                "How much time does it take to implement marketing software?"
              ].map((question, index) => (
                <div key={index} className="bg-white border border-[#DBE4ED] rounded-lg">
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-[#213343] font-['Lexend_Deca']">
                      {question}
                    </span>
                    <svg 
                      className={`w-4 h-4 transform transition-transform ${expandedFaq === index ? 'rotate-0' : '-rotate-90'}`} 
                      viewBox="0 0 18 19" 
                      fill="none"
                    >
                      <path d="M12.8081 8.81047C12.781 8.75573 12.747 8.70469 12.7069 8.6586L12.6506 8.5686V8.52922L6.75 2.34172C6.67059 2.25603 6.57508 2.18683 6.46892 2.13805C6.36277 2.08927 6.24805 2.06188 6.1313 2.05744C6.01456 2.053 5.89809 2.0716 5.78854 2.11217C5.67898 2.15275 5.5785 2.2145 5.49281 2.29391C5.40712 2.37332 5.33791 2.46883 5.28914 2.57498C5.24036 2.68114 5.21297 2.79586 5.20853 2.9126C5.20409 3.02934 5.22269 3.14581 5.26326 3.25537C5.30383 3.36492 5.36559 3.46541 5.445 3.5511L10.7719 9.14235L5.43937 14.7336C5.27676 14.9074 5.18985 15.1387 5.19776 15.3766C5.20567 15.6144 5.30776 15.8394 5.48156 16.002C5.65536 16.1646 5.88664 16.2516 6.12451 16.2436C6.36239 16.2357 6.58738 16.1336 6.75 15.9598L12.6619 9.77235V9.73297L12.7181 9.64297C12.7534 9.59765 12.7835 9.54861 12.8081 9.49672C12.8231 9.4451 12.8344 9.39246 12.8419 9.33922L12.87 9.17047C12.8647 9.11135 12.8534 9.05292 12.8362 8.9961V8.82172L12.8081 8.81047Z" fill="#213343"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            
            {/* Right Column */}
            <div className="space-y-4">
              {[
                "Does HubSpot's marketing software integrate with Salesforce and other third-party tools?",
                "What reporting capabilities do I have with Marketing Hub?",
                "How is Marketing Hub different from other marketing software?",
                "How does Marketing Hub work with Sales Hub, Service Hub, Content Hub, and Operations Hub?"
              ].map((question, index) => (
                <div key={index + 5} className="bg-white border border-[#DBE4ED] rounded-lg">
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between"
                    onClick={() => setExpandedFaq(expandedFaq === (index + 5) ? null : (index + 5))}
                  >
                    <span className="text-lg font-semibold text-[#213343] font-['Lexend_Deca']">
                      {question}
                    </span>
                    <svg 
                      className={`w-4 h-4 transform transition-transform ${expandedFaq === (index + 5) ? 'rotate-0' : '-rotate-90'}`} 
                      viewBox="0 0 18 19" 
                      fill="none"
                    >
                      <path d="M12.8081 8.81047C12.781 8.75573 12.747 8.70469 12.7069 8.6586L12.6506 8.5686V8.52922L6.75 2.34172C6.67059 2.25603 6.57508 2.18683 6.46892 2.13805C6.36277 2.08927 6.24805 2.06188 6.1313 2.05744C6.01456 2.053 5.89809 2.0716 5.78854 2.11217C5.67898 2.15275 5.5785 2.2145 5.49281 2.29391C5.40712 2.37332 5.33791 2.46883 5.28914 2.57498C5.24036 2.68114 5.21297 2.79586 5.20853 2.9126C5.20409 3.02934 5.22269 3.14581 5.26326 3.25537C5.30383 3.36492 5.36559 3.46541 5.445 3.5511L10.7719 9.14235L5.43937 14.7336C5.27676 14.9074 5.18985 15.1387 5.19776 15.3766C5.20567 15.6144 5.30776 15.8394 5.48156 16.002C5.65536 16.1646 5.88664 16.2516 6.12451 16.2436C6.36239 16.2357 6.58738 16.1336 6.75 15.9598L12.6619 9.77235V9.73297L12.7181 9.64297C12.7534 9.59765 12.7835 9.54861 12.8081 9.49672C12.8231 9.4451 12.8344 9.39246 12.8419 9.33922L12.87 9.17047C12.8647 9.11135 12.8534 9.05292 12.8362 8.9961V8.82172L12.8081 8.81047Z" fill="#213343"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
