import React from 'react';
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
            <a href="/" className="text-[#0068B1] underline">Home</a>
            <svg className="w-8 h-3.5 mx-2" viewBox="0 0 33 14" fill="none">
              <path d="M20.0072 6.5625C19.986 6.52098 19.9611 6.48145 19.9328 6.44438L19.889 6.37438V6.34375L15.2909 1.53125C15.2269 1.46806 15.1511 1.41814 15.0677 1.38435C14.9844 1.35056 14.8952 1.33358 14.8053 1.33438C14.6742 1.33479 14.5459 1.3725 14.4354 1.44309C14.3249 1.51368 14.2367 1.61424 14.1812 1.73304C14.1257 1.85184 14.1051 1.98397 14.1219 2.11402C14.1387 2.24407 14.1921 2.36667 14.2759 2.4675L18.419 6.825L14.2759 11.2C14.1732 11.2926 14.1004 11.4136 14.0668 11.5477C14.0332 11.6819 14.0403 11.823 14.0872 11.953C14.1342 12.0831 14.2188 12.1962 14.3304 12.2779C14.4419 12.3597 14.5753 12.4063 14.7134 12.4119C14.817 12.411 14.9191 12.3869 15.0122 12.3415C15.1053 12.2961 15.187 12.2304 15.2515 12.1494L19.8628 7.315V7.28438L19.9065 7.21438C19.9338 7.17816 19.9587 7.14016 19.9809 7.10063C19.9947 7.06105 20.0036 7.01989 20.0072 6.97813C20.0121 6.93452 20.0121 6.89049 20.0072 6.84688C20.0117 6.80178 20.0117 6.75635 20.0072 6.71125V6.685C20.0093 6.64712 20.0093 6.60914 20.0072 6.57125V6.5625Z" fill="#516F90"/>
            </svg>
            <span className="text-[#2E475D] font-medium">Marketing Hub</span>
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
                <span className="text-[22px] font-medium text-[#213343]">Marketing Hub®</span>
              </div>
              
              <h1 className="text-[36px] font-semibold leading-[46px] text-[#213343]">
                AI-Powered Marketing<br />Software
              </h1>
              
              <div className="flex gap-4">
                <button className="bg-[#0F62FE] text-white px-5 py-4 text-base font-medium hover:bg-blue-700 transition-colors">
                  Get a demo
                </button>
                <button className="border-2 border-[#0F62FE] text-[#0F62FE] bg-white px-5 py-4 text-base font-medium hover:bg-blue-50 transition-colors">
                  Get started free
                </button>
              </div>
              
              {/* Accordion Sections */}
              <div className="space-y-4 mt-8">
                <div className="border border-[#DBE4ED] rounded-lg bg-white">
                  <button className="w-full p-6 text-left flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#213343]">Product Description</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 15" fill="none">
                      <path d="M7.55909 10.2418C7.60167 10.2207 7.64136 10.1943 7.67721 10.1631L7.74721 10.1193H7.77784L12.5903 5.52994C12.657 5.46818 12.7108 5.3939 12.7487 5.31133C12.7867 5.22877 12.808 5.13954 12.8114 5.04874C12.8149 4.95794 12.8004 4.86735 12.7689 4.78214C12.7373 4.69694 12.6893 4.61878 12.6275 4.55213C12.5658 4.48549 12.4915 4.43166 12.4089 4.39372C12.3263 4.35578 12.2371 4.33448 12.1463 4.33103C12.0555 4.32757 11.9649 4.34204 11.8797 4.3736C11.7945 4.40515 11.7164 4.45318 11.6497 4.51494L7.30096 8.65807L2.95221 4.51057C2.81703 4.38409 2.63715 4.3165 2.45213 4.32265C2.26712 4.32881 2.09212 4.4082 1.96565 4.54338C1.83917 4.67856 1.77158 4.85844 1.77773 5.04346C1.78388 5.22848 1.86328 5.40347 1.99846 5.52994L6.81096 10.1281H6.84159L6.91159 10.1718C6.94684 10.1992 6.98498 10.2227 7.02533 10.2418C7.06549 10.2535 7.10643 10.2623 7.14784 10.2681L7.27908 10.2899C7.32507 10.2858 7.37051 10.277 7.41471 10.2637H7.55034L7.55909 10.2418Z" fill="#213343"/>
                    </svg>
                  </button>
                </div>
                
                <div className="border border-[#DBE4ED] rounded-lg bg-white">
                  <button className="w-full p-6 text-left flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#213343]">Pricing Overview</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 15" fill="none">
                      <path d="M7.55909 10.2418C7.60167 10.2207 7.64136 10.1943 7.67721 10.1631L7.74721 10.1193H7.77784L12.5903 5.52994C12.657 5.46818 12.7108 5.3939 12.7487 5.31133C12.7867 5.22877 12.808 5.13954 12.8114 5.04874C12.8149 4.95794 12.8004 4.86735 12.7689 4.78214C12.7373 4.69694 12.6893 4.61878 12.6275 4.55213C12.5658 4.48549 12.4915 4.43166 12.4089 4.39372C12.3263 4.35578 12.2371 4.33448 12.1463 4.33103C12.0555 4.32757 11.9649 4.34204 11.8797 4.3736C11.7945 4.40515 11.7164 4.45318 11.6497 4.51494L7.30096 8.65807L2.95221 4.51057C2.81703 4.38409 2.63715 4.3165 2.45213 4.32265C2.26712 4.32881 2.09212 4.4082 1.96565 4.54338C1.83917 4.67856 1.77158 4.85844 1.77773 5.04346C1.78388 5.22848 1.86328 5.40347 1.99846 5.52994L6.81096 10.1281H6.84159L6.91159 10.1718C6.94684 10.1992 6.98498 10.2227 7.02533 10.2418C7.06549 10.2535 7.10643 10.2623 7.14784 10.2681L7.27908 10.2899C7.32507 10.2858 7.37051 10.277 7.41471 10.2637H7.55034L7.55909 10.2418Z" fill="#213343"/>
                    </svg>
                  </button>
                </div>
                
                <div className="border border-[#DBE4ED] rounded-lg bg-white">
                  <button className="w-full p-6 text-left flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#213343]">Features</span>
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
          <h2 className="text-base font-semibold text-[#213343] text-center mb-8">
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
              <h2 className="text-2xl font-medium leading-[34px] text-[#213343]">
                Instant insight. Lasting growth. Powered by AI.
              </h2>
              
              <p className="text-base font-light leading-7 text-[#213343]">
                AI-driven search and rising customer expectations are changing how marketers win attention.
              </p>
              
              <p className="text-base font-light leading-7 text-[#213343]">
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
          <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] text-center mb-16">
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
                    <h3 className="text-2xl font-medium leading-[34px] text-[#213343] mb-4">
                      Breeze Customer Agent
                    </h3>
                    <p className="text-base font-light leading-7 text-[#213343] mb-6">
                      Drive marketing engagement with an AI agent that captures visitor interest 24/7, guides visitors to relevant resources, and converts website traffic into sales-ready leads.
                    </p>
                    <a href="#" className="text-[#0068B1] font-medium underline">
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

      <Footer />
    </div>
  );
}