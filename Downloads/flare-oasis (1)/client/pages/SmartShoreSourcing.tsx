import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SmartShoreSourcing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0F62FE] to-[#071A3D] py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-90 mix-blend-screen"
          style={{
            backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/54638aa62cc4abee5455f39d8d7aa5227062b3f3?width=2880')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 font-['IBM_Plex_Sans']">
              Smart Shore Sourcing
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-200 leading-relaxed mb-12 font-['IBM_Plex_Sans']">
              Cybersecurity hiring made faster, simpler and affordable.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-[#FFE034] text-[#0F62FE] px-6 py-4 rounded-full font-medium hover:bg-yellow-300 transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0">
                <path d="M12.6562 1.875H11.25V0.351562C11.25 0.158203 11.0918 0 10.8984 0H9.72656C9.5332 0 9.375 0.158203 9.375 0.351562V1.875H5.625V0.351562C5.625 0.158203 5.4668 0 5.27344 0H4.10156C3.9082 0 3.75 0.158203 3.75 0.351562V1.875H2.34375C1.56738 1.875 0.9375 2.50488 0.9375 3.28125V13.5938C0.9375 14.3701 1.56738 15 2.34375 15H12.6562C13.4326 15 14.0625 14.3701 14.0625 13.5938V3.28125C14.0625 2.50488 13.4326 1.875 12.6562 1.875ZM12.4805 13.5938H2.51953C2.42285 13.5938 2.34375 13.5146 2.34375 13.418V4.6875H12.6562V13.418C12.6562 13.5146 12.5771 13.5938 12.4805 13.5938Z" fill="currentColor"/>
              </svg>
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9d9fbf7cb30fd7bdb98939e4bcd17adba692864d?width=415" 
              alt="Client Logo" 
              className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/5003841e63404d7671f60e23c2e5b6815326bcde?width=415" 
              alt="Client Logo" 
              className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/fb8e76f3fb511488af06cf52584937cb67fe12e0?width=415" 
              alt="Client Logo" 
              className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d1860adbc6d061eb1b924047ff7cbbeb265be295?width=415" 
              alt="Client Logo" 
              className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c4d6eea892e52764efdd42638662aeeb8461a101?width=415" 
              alt="Client Logo" 
              className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Three Key Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Commendable Services */}
            <div className="bg-white p-8 flex flex-col">
              <div className="w-11 h-11 mb-6">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" className="w-full h-full">
                  <g clipPath="url(#clip0_19_1254)">
                    <path d="M22.1152 43.4554C10.408 43.4554 0.884766 33.9322 0.884766 22.225C0.884766 10.5179 10.408 0.994629 22.1152 0.994629C33.8223 0.994629 43.3456 10.5179 43.3456 22.225C43.3456 33.9322 33.8223 43.4554 22.1152 43.4554ZM21.2651 42.4423C21.5471 42.4547 21.8304 42.4603 22.1152 42.4603C28.6681 42.4603 34.5037 39.3296 38.2038 34.485V16.7073H39.2004V33.06C41.1935 29.9252 42.3504 26.2085 42.3504 22.225C42.3504 19.462 41.7948 16.829 40.7885 14.4281L25.3813 5.53373L25.8789 4.67125L40.0449 12.8497C37.04 7.12601 31.3744 3.00986 24.7012 2.15428L9.29261 11.0514L8.79502 10.1889L22.9652 2.00777C22.6846 1.99533 22.3999 1.9898 22.1152 1.9898C15.5622 1.9898 9.72662 5.12184 6.0265 9.96641V27.7441H5.03133V11.3901C3.03683 14.5249 1.87994 18.2429 1.87994 22.225C1.87994 24.9866 2.43558 27.6197 3.44181 30.0219L18.8491 38.9177L18.3515 39.7788L4.18543 31.599C7.1903 37.324 12.8559 41.4402 19.5291 42.2958L34.9377 33.3986L35.4339 34.2597L21.2651 42.4423ZM14.7523 30.0703C13.6244 30.0703 12.5255 29.4857 11.9215 28.4393C11.4875 27.6874 11.3728 26.8097 11.5995 25.9666C11.8262 25.1221 12.3638 24.4186 13.1157 23.9846L20.697 19.6072C20.7979 17.5712 21.9313 15.7025 23.7047 14.6797C26.0876 13.3044 29.0952 13.7135 31.0178 15.6762C31.1256 15.7868 31.1768 15.9388 31.1561 16.0923C31.1353 16.2443 31.0455 16.3798 30.9114 16.4558L26.2756 19.1331C25.8526 19.3763 25.7089 19.9195 25.9521 20.3425C26.1981 20.7641 26.74 20.9119 27.1615 20.6659L31.7974 17.9886C31.9287 17.9112 32.0932 17.9015 32.2328 17.9582C32.3765 18.0163 32.483 18.1365 32.5244 18.2858C33.2625 20.9341 32.1139 23.7427 29.731 25.1179C27.9618 26.1421 25.7766 26.1878 23.959 25.2603L16.3791 29.6363C15.8663 29.9293 15.3051 30.0703 14.7523 30.0703ZM26.7178 14.8649C25.8567 14.8649 24.9874 15.086 24.2009 15.5408C22.6501 16.4364 21.6867 18.1061 21.6839 19.8988C21.6839 20.0757 21.5899 20.2402 21.4351 20.3287L13.6133 24.8457C13.0922 25.147 12.7177 25.6363 12.5601 26.2223C12.4025 26.8097 12.4813 27.4193 12.7826 27.9418C13.4088 29.024 14.7992 29.3972 15.8801 28.7725L23.7033 24.2555C23.8567 24.167 24.0461 24.167 24.1995 24.2555C25.7531 25.1497 27.6826 25.1484 29.2334 24.2541C31.0317 23.2161 31.9881 21.2008 31.7006 19.1897L27.6564 21.5243C26.7607 22.0426 25.608 21.733 25.0896 20.8359C24.5713 19.9375 24.8809 18.7861 25.778 18.2678L29.8209 15.9333C28.9224 15.2312 27.825 14.8649 26.7178 14.8649Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_19_1254">
                      <rect width="44.23" height="44.23" fill="white" transform="translate(0 0.109985)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-6 font-['IBM_Plex_Sans']">
                Commendable Services
              </h3>
              <p className="text-lg text-black leading-relaxed font-['IBM_Plex_Sans']">
                Offering high-end solutions for network, application, and cloud security since 2016
              </p>
            </div>

            {/* World-class Security Experts */}
            <div className="bg-white p-8 flex flex-col">
              <div className="w-11 h-11 mb-6">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" className="w-full h-full">
                  <g clipPath="url(#clip0_19_1262)">
                    <path d="M30.1838 42.9578H29.1886V39.2494C29.1886 36.4588 27.4056 34.0082 24.7518 33.1498C24.5652 33.089 24.4325 32.9273 24.4104 32.7324C24.3869 32.5389 24.4809 32.3509 24.6481 32.2487C25.7608 31.5783 26.4243 30.4131 26.4243 29.1346C26.4243 27.1221 24.7877 25.4856 22.7753 25.4856C20.7628 25.4856 19.1263 27.1221 19.1263 29.1346C19.1263 30.4131 19.7911 31.5783 20.9038 32.2487C21.071 32.3496 21.1637 32.5389 21.1402 32.7324C21.118 32.9273 20.9853 33.089 20.7988 33.1498C18.145 34.0082 16.3605 36.4602 16.3605 39.2494V42.9578H15.3654V39.2494C15.3654 38.228 15.5727 37.2453 15.9528 36.3468L10.7724 33.523C10.055 34.5168 8.88706 35.1623 7.57122 35.1623C5.39151 35.1623 3.61816 33.389 3.61816 31.2093C3.61816 29.1982 5.12751 27.5326 7.07363 27.2866V17.1621C5.12751 16.916 3.61816 15.2519 3.61816 13.2408C3.61816 11.0611 5.39151 9.28775 7.57122 9.28775C8.88844 9.28775 10.055 9.93462 10.7737 10.927L19.0931 6.38792C18.9176 5.94148 18.8222 5.45633 18.8222 4.94769C18.8222 2.76798 20.5956 0.994629 22.7753 0.994629C24.955 0.994629 26.7283 2.76798 26.7283 4.94769C26.7283 5.45633 26.6316 5.94148 26.456 6.38792L34.7768 10.9256C35.4956 9.93462 36.6635 9.28775 37.9793 9.28775C40.1591 9.28775 41.9324 11.0611 41.9324 13.2408C41.9324 15.2519 40.4217 16.9174 38.4769 17.1621V24.4904H42.1259C42.401 24.4904 42.6235 24.713 42.6235 24.988V30.5168C42.6235 33.078 40.5392 35.1609 37.9793 35.1609C36.6234 35.1609 35.4002 34.5749 34.5501 33.6433L29.5964 36.3455C29.9765 37.2425 30.1852 38.2252 30.1852 39.2481L30.1838 42.9578ZM25.9156 32.5403C27.2826 33.1775 28.3994 34.2045 29.1458 35.4595L33.9544 32.8361C33.5619 32.1547 33.3352 31.3613 33.3352 30.5182V24.9894C33.3352 24.7144 33.5577 24.4918 33.8328 24.4918H37.4818V17.1635C35.537 16.9174 34.0263 15.2533 34.0263 13.2422C34.0263 12.7335 34.123 12.247 34.2986 11.8006L25.9778 7.26285C25.2605 8.25388 24.0925 8.90074 22.7753 8.90074C21.4581 8.90074 20.2915 8.25388 19.5728 7.26147L11.2534 11.8006C11.4289 12.247 11.5243 12.7322 11.5243 13.2408C11.5243 15.2519 10.0149 16.9174 8.06881 17.1621V27.2866C10.0149 27.5326 11.5243 29.1982 11.5243 31.2093C11.5243 31.7179 11.4275 32.2044 11.252 32.6509L16.4048 35.4595C17.1525 34.2045 18.2666 33.1775 19.635 32.5403C18.6812 31.6709 18.1311 30.4504 18.1311 29.136C18.1311 26.5748 20.2141 24.4918 22.7753 24.4918C25.3365 24.4918 27.4194 26.5762 27.4194 29.136C27.4194 30.4504 26.8707 31.6709 25.9156 32.5403Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_19_1262">
                      <rect width="44.23" height="44.23" fill="white" transform="translate(0.660156 0.109985)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-6 font-['IBM_Plex_Sans']">
                World-class Security Experts
              </h3>
              <p className="text-lg text-black leading-relaxed font-['IBM_Plex_Sans']">
                Industry-certified ethical hackers and experts with certifications in CREST, OSCP, CISSP, CEH etc
              </p>
            </div>

            {/* Trusted by 200+ organizations */}
            <div className="bg-white p-8 flex flex-col">
              <div className="w-11 h-11 mb-6">
                <svg width="45" height="44" viewBox="0 0 45 44" fill="none" className="w-full h-full">
                  <g clipPath="url(#clip0_19_1270)">
                    <path d="M33.6699 42.8478H32.6747V32.4925C32.6747 27.5774 29.3381 23.3534 24.5585 22.2201C24.3512 22.1703 24.1978 21.9948 24.1784 21.7833C24.1577 21.5704 24.2766 21.3686 24.4714 21.2815C26.5682 20.3486 27.9214 18.267 27.9214 15.9795C27.9214 12.7783 25.3173 10.1729 22.1162 10.1729C18.915 10.1729 16.311 12.7769 16.311 15.9795C16.311 18.2684 17.6656 20.35 19.7609 21.2815C19.9558 21.3686 20.0733 21.5704 20.054 21.7833C20.0346 21.9948 19.8812 22.1717 19.6739 22.2201C14.8943 23.3521 11.5577 27.576 11.5577 32.4925V42.8478H10.5625V32.4925C10.5625 27.5207 13.6807 23.1973 18.282 21.5912C16.4478 20.3375 15.3145 18.2449 15.3145 15.9795C15.3145 13.2649 16.9136 10.9151 19.2191 9.82598C19.49 9.14594 19.6269 8.4272 19.6269 7.68635C19.6269 4.4852 17.0228 1.87978 13.8217 1.87978C10.6205 1.87978 8.01512 4.48382 8.01512 7.68635C8.01512 9.97387 9.36966 12.0568 11.4651 12.9884C11.6613 13.0755 11.7788 13.2773 11.7581 13.4902C11.7387 13.7016 11.5853 13.8785 11.378 13.9269C6.59838 15.0603 3.26178 19.2788 3.26178 24.1883V34.5547H2.2666V24.1883C2.2666 19.2235 5.3862 14.9028 9.98612 13.298C8.15334 12.0444 7.02133 9.95175 7.02133 7.68635C7.02133 3.93647 10.0718 0.885986 13.8217 0.885986C17.5716 0.885986 20.6221 3.93647 20.6221 7.68635C20.6221 8.26963 20.5502 8.84186 20.405 9.39611C21.4984 9.11277 22.7313 9.11277 23.8232 9.39611C23.6794 8.84186 23.6062 8.26963 23.6062 7.68635C23.6062 3.93647 26.6581 0.885986 30.4079 0.885986C34.1578 0.885986 37.2097 3.93647 37.2097 7.68635C37.2097 9.95314 36.0763 12.0458 34.2435 13.2994C38.8448 14.9041 41.9644 19.2248 41.9644 24.1897V34.5547H40.9678V24.1883C40.9678 19.2788 37.6313 15.0603 32.8516 13.9269C32.6443 13.8772 32.4909 13.7016 32.4715 13.4902C32.4508 13.2773 32.5697 13.0755 32.7646 12.9884C34.86 12.0554 36.2131 9.97387 36.2131 7.68635C36.2131 4.4852 33.6091 1.87978 30.4079 1.87978C27.2068 1.87978 24.6028 4.48382 24.6028 7.68635C24.6028 8.4272 24.7396 9.14594 25.0105 9.82598C27.3174 10.9165 28.9166 13.2649 28.9166 15.9795C28.9166 18.2463 27.7832 20.3389 25.9504 21.5925C30.5517 23.1986 33.6713 27.5221 33.6713 32.4939L33.6699 42.8478ZM26.6138 33.525L25.9089 32.82L20.7326 37.9977L18.3193 35.5844L17.6158 36.2893L20.7326 39.4048L26.6138 33.525Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_19_1270">
                      <rect width="44.23" height="44.23" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-6 font-['IBM_Plex_Sans']">
                Trusted by 200+ organizations
              </h3>
              <p className="text-lg text-black leading-relaxed font-['IBM_Plex_Sans']">
                Join the ranks of companies worldwide who trust our top-notch cybersecurity services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building Resilient Offshore Security Team */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-8 font-['IBM_Plex_Sans']">
            Building Resilient Offshore Security Team
          </h2>
          <p className="text-xl text-black leading-relaxed max-w-5xl font-['IBM_Plex_Sans']">
            With the current scarcity of cyber security resources, recruiting competent professionals can be a challenge. Our expert team has resolved to address this problem by providing flexible staffing options.
          </p>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="relative bg-gradient-to-b from-[#0F62FE] to-[#04122D] py-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 mix-blend-screen"
          style={{
            backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/61329467aee297e75db66c20af99fab4f688ee51?width=2880')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#FFE034] mb-16 font-['IBM_Plex_Sans']">
            Our Offerings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Flex Force */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="mb-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8a9b6bf51f1bf9a7191821eff112145d5dbb37c2?width=180" 
                  alt="Flex Force" 
                  className="w-[90px] h-[51px]"
                />
              </div>
              <h3 className="text-2xl font-bold text-black uppercase mb-8 font-['IBM_Plex_Sans']">
                Flex Force
              </h3>
              <p className="text-lg text-black leading-relaxed mb-8 font-['IBM_Plex_Sans']">
                A flexible solution that provides skilled professionals to meet your seasonal demands or short-term projects.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-black leading-relaxed font-['IBM_Plex_Sans']">
                    <span className="font-bold">Speed:</span> Quickly fill temporary or seasonal positions
                  </p>
                </div>
                <div>
                  <p className="text-lg text-black leading-relaxed font-['IBM_Plex_Sans']">
                    <span className="font-bold">Opportunity for Conversion:</span> Progress from temp-to-hire and smooth transition to full-time employment
                  </p>
                </div>
              </div>
            </div>

            {/* Fixed Force */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="mb-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b97bb1332884f5e2402b52d674e722569d2e2c59?width=180" 
                  alt="Fixed Force" 
                  className="w-[90px] h-[51px]"
                />
              </div>
              <h3 className="text-2xl font-bold text-black uppercase mb-8 font-['IBM_Plex_Sans']">
                Fixed Force
              </h3>
              <p className="text-lg text-black leading-relaxed mb-8 font-['IBM_Plex_Sans']">
                Whether it is onsite or offshore, we help you hit the ground running, executing the cybersecurity projects efficiently for the fixed bid, and SOWs.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-black leading-relaxed font-['IBM_Plex_Sans']">
                    <span className="font-bold">Time-Saving:</span> Access to highly qualified candidates saves your business administrative time
                  </p>
                </div>
                <div>
                  <p className="text-lg text-black leading-relaxed font-['IBM_Plex_Sans']">
                    <span className="font-bold">Dedicated Team:</span> All professionals will solely work under your direction
                  </p>
                </div>
              </div>
            </div>

            {/* BOT Force */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="mb-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/930fce3f5d9794cc72485e76e6fd8ee5e0bf6af6?width=180" 
                  alt="BOT Force" 
                  className="w-[90px] h-[51px]"
                />
              </div>
              <h3 className="text-2xl font-bold text-black uppercase mb-8 font-['IBM_Plex_Sans']">
                BOT Force
              </h3>
              <p className="text-lg text-black leading-relaxed mb-8 font-['IBM_Plex_Sans']">
                Our cybersecurity staffing services follow a comprehensive three-step approach regardless of the location.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-black leading-relaxed font-['IBM_Plex_Sans']">
                    <span className="font-bold">Build:</span> Our extensive network will find you the best fit for your customized program
                  </p>
                </div>
                <div>
                  <p className="text-lg text-black leading-relaxed font-['IBM_Plex_Sans']">
                    <span className="font-bold">Operate:</span> A dedicated team will operate and maintain your security program for your Goals and Requirements
                  </p>
                </div>
                <div>
                  <p className="text-lg text-black leading-relaxed font-['IBM_Plex_Sans']">
                    <span className="font-bold">Transfer:</span> Seamless transition of the team on your payroll and continuous support throughout the entire process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How do we make your experience seamless? */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-16 font-['IBM_Plex_Sans']">
            How do we make your experience seamless?
          </h2>
          
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="border-4 border-gray-200 p-8">
              <div className="w-16 h-16 mb-12">
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" className="w-full h-full">
                  <g clipPath="url(#clip0_19_1381)">
                    <path d="M51.0413 63.9439C47.6837 63.9439 44.3687 62.6357 41.8906 60.1617C38.4435 56.7126 37.239 51.5817 38.7584 46.9728L18.0254 26.2439C13.4124 27.7612 8.2876 26.5546 4.84057 23.1096C0.973069 19.2442 -0.0425557 13.3332 2.31369 8.4034C2.41526 8.19012 2.61432 8.03777 2.84994 7.99715C3.08963 7.96059 3.32323 8.03371 3.48979 8.2023L11.6189 16.3314C12.9189 17.6273 15.0314 17.6293 16.3314 16.3314C17.6293 15.0314 17.6293 12.9189 16.3314 11.6189L8.20229 3.4898C8.03369 3.32121 7.95854 3.08355 7.99713 2.84996C8.03776 2.61637 8.18807 2.4173 8.40338 2.31371C13.3332 -0.0445706 19.2421 0.973086 23.1076 4.83855C26.5567 8.28762 27.7632 13.4186 26.2398 18.0295L46.9707 38.7584C51.5837 37.2309 56.7126 38.4415 60.1596 41.8906C64.0231 45.7561 65.0387 51.665 62.6845 56.5968C62.5809 56.8101 62.3818 56.9625 62.1462 57.0011C61.9268 57.0457 61.677 56.9645 61.5064 56.7979L53.3773 48.6689C52.0793 47.3709 49.9648 47.3709 48.6688 48.6689C47.3688 49.9689 47.3688 52.0814 48.6688 53.3773L56.7979 61.5064C56.9645 61.675 57.0417 61.9126 57.001 62.1462C56.9604 62.3798 56.8101 62.5809 56.5968 62.6845C54.8256 63.5315 52.9284 63.9439 51.0413 63.9439Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_19_1381">
                      <rect width="65" height="65" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-4 font-['IBM_Plex_Sans']">
                Access to in-house platform, tools & technologies
              </h3>
            </div>

            <div className="border-4 border-gray-200 p-8">
              <div className="w-16 h-16 mb-12">
                <svg width="66" height="65" viewBox="0 0 66 65" fill="none" className="w-full h-full">
                  <g clipPath="url(#clip0_19_1388)">
                    <path d="M37.9537 22.3438C37.9537 22.748 37.6267 23.075 37.2225 23.075C36.8182 23.075 36.4912 22.748 36.4912 22.3438C36.4912 21.9396 36.8182 21.6125 37.2225 21.6125C37.6267 21.6125 37.9537 21.9396 37.9537 22.3438Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_19_1388">
                      <rect width="65" height="65" fill="white" transform="translate(0.660156)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-4 font-['IBM_Plex_Sans']">
                Ability to ramp-up at ease
              </h3>
            </div>

            <div className="border-4 border-gray-200 p-8">
              <div className="w-16 h-16 mb-12">
                <svg width="66" height="65" viewBox="0 0 66 65" fill="none" className="w-full h-full">
                  <g clipPath="url(#clip0_19_1395)">
                    <path d="M29.1719 63.7C28.9769 63.7 28.792 63.6228 28.6559 63.4867L1.82516 36.6478C1.53875 36.3614 1.53875 35.8983 1.82516 35.6119L35.9298 1.51534C36.2163 1.22894 36.6794 1.22894 36.9658 1.51534L49.8683 14.4138L56.6689 7.60909C56.9553 7.32269 57.4184 7.32472 57.7048 7.60909C57.9913 7.8955 57.9913 8.35862 57.7048 8.643L50.9042 15.4497L63.7986 28.34C63.9347 28.4761 64.0119 28.663 64.0119 28.856C64.0119 29.0489 63.9347 29.2358 63.7986 29.3719L29.6878 63.4867C29.5517 63.6228 29.3669 63.7 29.1719 63.7Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_19_1395">
                      <rect width="65" height="65" fill="white" transform="translate(0.30957)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-4 font-['IBM_Plex_Sans']">
                Blended pricing to match the budgets
              </h3>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-4 border-gray-200 p-8">
              <div className="w-16 h-16 mb-12">
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" className="w-full h-full">
                  <g clipPath="url(#clip0_19_1356)">
                    <path d="M26.3634 57.596C22.108 57.596 17.7977 56.5154 13.855 54.2383C1.86859 47.3179 -2.25281 31.9352 4.66765 19.9488C8.01922 14.1435 13.4325 9.9896 19.9102 8.25288C26.3858 6.51819 33.1519 7.40788 38.9572 10.7594C44.7645 14.111 48.9184 19.5243 50.6531 25.9999C52.3248 32.2399 51.5591 38.748 48.502 44.4091L63.3342 52.9729L62.605 54.2383L47.7728 45.6746C43.0562 53.3284 34.8175 57.596 26.3634 57.596Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_19_1356">
                      <rect width="65" height="65" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-4 font-['IBM_Plex_Sans']">
                Availability of experienced & certified resources
              </h3>
            </div>

            <div className="border-4 border-gray-200 p-8">
              <div className="w-16 h-16 mb-12">
                <svg width="66" height="65" viewBox="0 0 66 65" fill="none" className="w-full h-full">
                  <g clipPath="url(#clip0_19_1364)">
                    <path d="M50.1412 62.9687H48.6787V47.7506C48.6787 40.5275 43.7753 34.32 36.7512 32.6543C36.4465 32.5812 36.2211 32.3233 36.1926 32.0125C36.1621 31.6997 36.3368 31.4031 36.6232 31.2751C39.7046 29.904 41.6932 26.845 41.6932 23.4833C41.6932 18.7789 37.8664 14.95 33.162 14.95C28.4576 14.95 24.6307 18.7768 24.6307 23.4833C24.6307 26.847 26.6214 29.9061 29.7007 31.2751C29.9871 31.4031 30.1598 31.6997 30.1314 32.0125C30.1029 32.3233 29.8775 32.5833 29.5728 32.6543C22.5487 34.3179 17.6453 40.5254 17.6453 47.7506V62.9687H16.1828V47.7506C16.1828 40.4442 20.7653 34.0904 27.5273 31.7301C24.8318 29.8878 23.1662 26.8125 23.1662 23.4833C23.1662 19.4939 25.5164 16.0408 28.9045 14.4401C29.3026 13.4408 29.5037 12.3845 29.5037 11.2958C29.5037 6.59138 25.6768 2.76247 20.9725 2.76247C16.2681 2.76247 12.4392 6.58935 12.4392 11.2958C12.4392 14.6575 14.4298 17.7186 17.5092 19.0876C17.7976 19.2156 17.9703 19.5122 17.9398 19.825C17.9114 20.1358 17.6859 20.3958 17.3812 20.4668C10.3571 22.1325 5.45371 28.3318 5.45371 35.5468V50.7812H3.99121V35.5468C3.99121 28.2506 8.57574 21.9009 15.3357 19.5426C12.6423 17.7003 10.9787 14.625 10.9787 11.2958C10.9787 5.78497 15.4617 1.302 20.9725 1.302C26.4832 1.302 30.9662 5.78497 30.9662 11.2958C30.9662 12.1529 30.8606 12.9939 30.6473 13.8084C32.254 13.392 34.0659 13.392 35.6706 13.8084C35.4593 12.9939 35.3517 12.1529 35.3517 11.2958C35.3517 5.78497 39.8367 1.302 45.3475 1.302C50.8582 1.302 55.3432 5.78497 55.3432 11.2958C55.3432 14.627 53.6776 17.7023 50.9842 19.5447C57.7462 21.9029 62.3307 28.2526 62.3307 35.5489V50.7812H60.8662V35.5468C60.8662 28.3318 55.9628 22.1325 48.9387 20.4668C48.634 20.3937 48.4086 20.1358 48.3801 19.825C48.3496 19.5122 48.5243 19.2156 48.8107 19.0876C51.8901 17.7165 53.8787 14.6575 53.8787 11.2958C53.8787 6.59138 50.0518 2.76247 45.3475 2.76247C40.6431 2.76247 36.8162 6.58935 36.8162 11.2958C36.8162 12.3845 37.0173 13.4408 37.4154 14.4401C40.8056 16.0428 43.1557 19.4939 43.1557 23.4833C43.1557 26.8145 41.4901 29.8898 38.7967 31.7322C45.5587 34.0925 50.1432 40.4462 50.1432 47.7526L50.1412 62.9687Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_19_1364">
                      <rect width="65" height="65" fill="white" transform="translate(0.660156)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-4 font-['IBM_Plex_Sans']">
                Collaborative Team Turn around time to start an engagement is less than 2 weeks
              </h3>
            </div>

            <div className="border-4 border-gray-200 p-8">
              <div className="w-16 h-16 mb-12">
                <svg width="66" height="65" viewBox="0 0 66 65" fill="none" className="w-full h-full">
                  <g clipPath="url(#clip0_19_1372)">
                    <path d="M29.7625 63.4197C24.5198 63.4197 19.3625 62.1014 14.7962 59.601L13.1306 62.4894L11.8631 61.7602L16.5837 53.5824C9.43172 49.1542 4.65625 41.2344 4.65625 32.2197C4.65625 18.3767 15.9175 7.11347 29.7625 7.11347C34.0708 7.11347 38.1272 8.20425 41.6738 10.1238L46.3944 1.948L47.6598 2.67925L45.9922 5.56769C55.2445 11.2166 60.9625 21.3586 60.9625 32.2197C60.9625 49.4224 46.9672 63.4197 29.7625 63.4197Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_19_1372">
                      <rect width="65" height="65" fill="white" transform="translate(0.30957)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-4 font-['IBM_Plex_Sans']">
                Availability of resources across multiple geographies
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-8 font-['IBM_Plex_Sans']">
            We are here to help you at every step
          </h2>
          <p className="text-xl text-black mb-12 font-['IBM_Plex_Sans']">
            Whether you're looking to build a new security program or enhance an existing one
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-[#FFE034] border-2 border-[#FFE034] text-[#0F62FE] px-6 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
          >
            Talk to Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
