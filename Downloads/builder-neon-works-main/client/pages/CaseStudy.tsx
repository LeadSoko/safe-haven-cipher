import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Play, ArrowLeft, Info } from "lucide-react";

export default function CaseStudy() {
  const [activeSection, setActiveSection] = useState(0);

  const challenges = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 22 23" fill="none">
          <path
            d="M17.2354 8.02639H18.9996C19.4867 8.02639 19.8817 8.42131 19.8817 8.90847V19.4935C19.8817 19.9806 19.4867 20.3756 18.9996 20.3756H11.9429C11.4557 20.3756 11.0608 19.9806 11.0608 19.4935V18.6114H4.00415C3.517 18.6114 3.12207 18.2165 3.12207 17.7293V3.61597C3.12207 3.12881 3.517 2.73389 4.00415 2.73389H16.3533C16.8405 2.73389 17.2354 3.12881 17.2354 3.61597V8.02639ZM15.4712 8.02639V4.49805H4.88624V16.8472H11.0608V8.90847C11.0608 8.42131 11.4557 8.02639 11.9429 8.02639H15.4712ZM12.825 9.79055V18.6114H18.1175V9.79055H12.825Z"
            fill="#171717"
          />
        </svg>
      ),
      title: "Outdated Tech and UX",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 22 22" fill="none">
          <path
            d="M4.88624 2.80615V16.9195H18.9996V18.6837H3.12207V2.80615H4.88624ZM18.3759 5.71076L19.6233 6.95822L14.5892 11.9923L11.9429 9.3468L8.15622 13.1328L6.90876 11.8853L11.9429 6.8512L14.5892 9.49675L18.3759 5.71076Z"
            fill="#171717"
          />
        </svg>
      ),
      title: "Poor Reporting and Analytics",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 22 22" fill="none">
          <path
            d="M10.179 17.1099V8.28908H4.0044V17.1099H10.179ZM10.179 6.52492V3.87867C10.179 3.39151 10.5739 2.99658 11.0611 2.99658H18.9998C19.487 2.99658 19.8819 3.39151 19.8819 3.87867V17.992C19.8819 18.4792 19.487 18.8741 18.9998 18.8741H3.12232C2.63516 18.8741 2.24023 18.4792 2.24023 17.992V7.407C2.24023 6.91984 2.63516 6.52492 3.12232 6.52492H10.179ZM11.9432 4.76075V17.1099H18.1177V4.76075H11.9432ZM4.88648 14.4637H9.2969V16.2278H4.88648V14.4637ZM12.8252 14.4637H17.2357V16.2278H12.8252V14.4637ZM12.8252 11.8174H17.2357V13.5816H12.8252V11.8174ZM12.8252 9.17117H17.2357V10.9353H12.8252V9.17117ZM4.88648 11.8174H9.2969V13.5816H4.88648V11.8174Z"
            fill="#171717"
          />
        </svg>
      ),
      title: "Difficulty Handling Large Data Volumes",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 22 22" fill="none">
          <path
            d="M11.0611 10.2429C13.4969 10.2429 15.4715 12.2176 15.4715 14.6534V19.9459H13.7073V14.6534C13.7073 13.2441 12.6057 12.0921 11.2166 12.0116L11.0611 12.0071C9.65176 12.0071 8.4998 13.1087 8.41931 14.4979L8.41482 14.6534V19.9459H6.65065V14.6534C6.65065 12.2176 8.62526 10.2429 11.0611 10.2429Z"
            fill="#171717"
          />
        </svg>
      ),
      title: "Difficulty Sourcing Seafarers",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 22 22" fill="none">
          <path
            d="M15.4123 8.62754C14.9644 5.16156 12.002 2.48389 8.41409 2.48389C4.5168 2.48389 1.35742 5.64326 1.35742 9.54055C1.35742 11.2098 1.93701 12.7437 2.90592 13.9519C3.61865 14.8407 4.00396 15.8256 4.00389 16.8672L4.00367 20.1256H11.9424L11.9433 17.4793H13.7066C14.6809 17.4793 15.4708 16.6895 15.4708 15.7151V13.1315L17.199 12.3912C17.5018 12.2615 17.5281 11.9546 17.3974 11.749L15.4123 8.62754Z"
            fill="#171717"
          />
        </svg>
      ),
      title: "Lack of Communication Capabilities",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 22 23" fill="none">
          <path
            d="M8.41457 2.67712V2.67432H18.1155C18.6038 2.67432 18.9996 3.07594 18.9996 3.54917V19.4411C18.9996 19.9243 18.6071 20.316 18.1233 20.316H3.99833C3.51439 20.316 3.12207 19.9191 3.12207 19.4279V7.96682L8.41457 2.67712Z"
            fill="#171717"
          />
        </svg>
      ),
      title: "Document and Contract Tracking Issues",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 22 22" fill="none">
          <path
            d="M5.76784 8.03907C4.30636 8.03907 3.12159 9.22379 3.12159 10.6853C3.12159 12.1468 4.30636 13.3316 5.76784 13.3316C7.22932 13.3316 8.41409 12.1468 8.41409 10.6853C8.41409 10.1233 8.23988 9.60459 7.94251 9.17696C7.46305 8.48744 6.66773 8.03907 5.76784 8.03907Z"
            fill="#171717"
          />
        </svg>
      ),
      title: "Inadequate Fleet Visibility",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 22 22" fill="none">
          <path
            d="M5.48229 4.04526C8.94712 1.20637 14.068 1.40403 17.3023 4.63825C20.747 8.083 20.747 13.668 17.3023 17.1128C13.8575 20.5575 8.27245 20.5575 4.82771 17.1128C2.60089 14.886 1.81357 11.7647 2.46574 8.90553L2.53335 8.62968L4.23967 9.07885C3.62441 11.4251 4.23624 14.0264 6.07516 15.8654C8.83095 18.6211 13.299 18.6211 16.0548 15.8654C18.8106 13.1096 18.8106 8.6415 16.0548 5.88571C13.5694 3.40031 9.69123 3.15644 6.93257 5.15411L6.73745 5.3006L7.63448 6.19757L3.58025 7.13316L4.51584 3.07894L5.48229 4.04526Z"
            fill="#171717"
          />
        </svg>
      ),
      title: "Manual Payroll Processes",
    },
  ];

  const appCategories = [
    {
      title: "Crew Management Apps",
      apps: [
        { name: "AHOY App", expanded: false },
        { name: "Relief and Contract App", expanded: false },
        { name: "Crew App", expanded: false },
      ],
    },
    {
      title: "Vessel Management Apps",
      apps: [
        { name: "Vessel App", expanded: false },
        { name: "Offline-First Ship App", expanded: false },
        { name: "Central Dashboard App", expanded: false },
      ],
    },
    {
      title: "Other Apps",
      apps: [
        { name: "QHSE App", expanded: false },
        { name: "Portage Bill / Crew Wages App", expanded: false },
        { name: "Master Data & Admin App", expanded: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 lg:px-[155px] py-4 bg-white border-b border-gray-100">
        <div className="flex items-center space-x-8">
          <svg className="w-[91px] h-6" viewBox="0 0 91 24" fill="none">
            <g clipPath="url(#clip0_2515_6470)">
              <path
                d="M28.4404 5.64307C30.3793 5.777 32.2913 5.71489 34.1184 6.07788C37.0518 6.66021 38.5359 8.84009 38.3855 11.8566C38.2564 14.4383 36.2635 16.7172 33.6115 17.0141C31.9251 17.2024 30.202 17.0491 28.4385 17.0491V5.64307H28.4404ZM30.6646 15.2535C32.538 15.3409 34.3863 15.4923 35.5254 13.5803C36.2905 12.2972 36.1903 10.1989 35.3326 9.09049C34.0953 7.48713 32.3761 7.65601 30.6646 7.7453V15.2555V15.2535Z"
                fill="black"
              />
              <path
                d="M64.0193 8.3293C63.3139 8.09636 62.6509 7.80908 61.957 7.66932C61.3846 7.55479 60.7698 7.54703 60.1896 7.61885C59.6538 7.68485 59.224 7.99542 59.1431 8.62435C59.066 9.22998 59.3339 9.64926 59.8369 9.91325C60.2744 10.1442 60.7428 10.317 61.1957 10.5189C61.6949 10.7421 62.196 10.9595 62.6875 11.1963C63.8921 11.7787 64.6033 12.6949 64.5146 14.0964C64.4221 15.5561 63.6222 16.5344 62.2943 17.0022C60.5616 17.6117 58.8212 17.4856 57.1444 16.7363C56.9729 16.6606 56.8013 16.3888 56.7821 16.1928C56.732 15.6531 56.7647 15.1038 56.7647 14.5797C57.5896 14.8767 58.3799 15.2591 59.2125 15.426C59.8446 15.5541 60.5655 15.527 61.1784 15.3426C61.5619 15.2261 62.0264 14.7175 62.0784 14.3332C62.1305 13.943 61.8202 13.3626 61.4867 13.0947C60.9991 12.7007 60.3496 12.5046 59.7675 12.2329C59.2298 11.9805 58.669 11.7728 58.1505 11.4836C57.0904 10.8935 56.6086 9.94819 56.6857 8.74276C56.7667 7.47132 57.4489 6.59005 58.5861 6.09507C60.286 5.35744 61.9821 5.53991 63.6435 6.25812C63.8053 6.328 63.9846 6.56482 64 6.73758C64.0482 7.25003 64.0174 7.76831 64.0174 8.32347L64.0193 8.3293Z"
                fill="black"
              />
              <path
                d="M75.206 5.46826H77.251V12.4951C77.3011 12.5145 77.3531 12.532 77.4032 12.5514C78.1163 11.6449 78.8719 10.7675 79.5252 9.81831C79.982 9.15445 80.4889 8.81087 81.308 8.93898C81.7205 9.00304 82.1503 8.95063 82.7593 8.95063C81.6434 10.3094 80.6142 11.5634 79.5541 12.8542C80.6469 14.2538 81.7263 15.6397 82.9328 17.1868C81.973 17.1868 81.2155 17.2101 80.4619 17.1674C80.2942 17.1577 80.1092 16.9345 79.9839 16.7714C79.1243 15.6417 78.2782 14.5003 77.2914 13.1803V17.1519H75.2041V5.46826H75.206Z"
                fill="black"
              />
              <path
                d="M74.0934 13.0348C74.0895 15.6825 72.4012 17.3518 69.7241 17.3557C67.1915 17.3596 65.4453 15.6126 65.4473 13.0794C65.4473 10.4647 67.2089 8.7022 69.8089 8.70802C72.4031 8.71385 74.0972 10.4259 74.0934 13.0348ZM71.8461 13.0309C71.8461 12.8562 71.8615 12.6776 71.8442 12.5049C71.7266 11.3344 71.0308 10.62 69.9515 10.5482C68.7758 10.4706 67.9952 11.0277 67.7986 12.2409C67.6984 12.862 67.7273 13.5434 67.8661 14.1587C68.0376 14.9177 68.6158 15.3894 69.3906 15.5291C70.8959 15.8028 71.8499 14.8264 71.8461 13.0309Z"
                fill="black"
              />
              <path
                d="M91.0002 13.0232C91.004 15.6611 89.2906 17.3616 86.6328 17.3557C84.106 17.3499 82.3657 15.5854 82.3849 13.0503C82.4061 10.4124 84.135 8.69834 86.7697 8.70805C89.3003 8.71581 90.9963 10.4473 91.0002 13.0251V13.0232ZM88.7548 13.0232C88.7452 11.5149 88.1015 10.6395 86.9354 10.5482C85.6325 10.4454 84.8731 11.1034 84.6361 12.5379C84.399 13.9665 85.0408 15.203 86.1702 15.4981C87.689 15.8941 88.7664 14.8633 88.7548 13.0232Z"
                fill="black"
              />
              <path
                d="M47.1026 13.5979H41.4883C41.5345 14.8479 42.3421 15.7544 43.5544 15.671C44.6048 15.5991 45.634 15.242 46.6208 15.0226C46.6208 15.3817 46.6439 15.9253 46.6054 16.4629C46.5958 16.6124 46.43 16.8259 46.2893 16.8783C44.8592 17.4102 43.3886 17.5752 41.9123 17.1288C39.9136 16.5231 38.7977 14.4539 39.2101 12.2255C39.6322 9.94855 41.2512 8.59171 43.4137 8.70041C46.085 8.83629 47.5768 10.7677 47.1026 13.5959V13.5979ZM44.944 12.2624C44.9999 11.0045 44.4988 10.3387 43.4966 10.263C42.2264 10.1679 41.5866 10.7755 41.4343 12.2624H44.944Z"
                fill="black"
              />
              <path
                d="M56.0093 8.94277C55.1748 10.9596 54.3845 12.8677 53.5924 14.7758C53.4305 15.1679 53.2628 15.5581 53.0971 15.9483C52.5478 17.2313 52.1739 17.441 50.8112 17.1809C50.6763 17.1556 50.5086 17.0217 50.4547 16.8955C49.3329 14.2906 48.2247 11.6778 47.0645 8.94859C47.8335 8.94859 48.4965 8.90977 49.1479 8.97382C49.3349 8.99129 49.57 9.2747 49.6567 9.48628C50.3198 11.1285 50.95 12.7842 51.6516 14.5875C51.8983 13.9741 52.0987 13.483 52.2934 12.99C52.7405 11.8525 53.2127 10.7228 53.6136 9.56781C53.7832 9.07865 54.0164 8.88453 54.5272 8.935C54.9685 8.97965 55.4176 8.94471 56.0112 8.94471L56.0093 8.94277Z"
                fill="black"
              />
              <path
                d="M11.9149 0C5.33491 0 0 5.37302 0 12C0 18.627 5.33491 24 11.9149 24C18.4949 24 23.8298 18.627 23.8298 12C23.8298 5.37302 18.4949 0 11.9149 0ZM15.2743 15.2145C14.459 16.0375 13.3296 16.5461 12.0826 16.5461H7.23336V7.4539H12.0826C14.5766 7.4539 16.5964 9.49013 16.5964 12C16.5964 13.2559 16.0915 14.3915 15.2743 15.2145Z"
                fill="url(#paint0_linear_2515_6470)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_2515_6470"
                x1="3.49044"
                y1="3.51537"
                x2="18.1824"
                y2="18.1031"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BE2AE9" />
                <stop offset="0.82" stopColor="#1A87FC" />
                <stop offset="1" stopColor="#2183FB" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {/* Navigation Items */}
          <div className="flex items-center space-x-2 px-3 py-2">
            <span className="text-sm font-medium text-black">Products</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-2 px-3 py-2">
            <span className="text-sm font-medium text-black">Our Work</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-2 px-3 py-2">
            <span className="text-sm font-medium text-black">About Us</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="px-3 py-2">
            <span className="text-sm font-medium text-black">Insights</span>
          </div>
          <div className="flex items-center border border-brand-purple">
            <div className="px-5 py-2 border-r border-brand-purple">
              <span className="text-sm font-medium text-brand-purple">
                Let's Talk
              </span>
            </div>
            <div className="px-2 py-2">
              <ArrowRight className="w-5 h-5 text-brand-purple" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue text-white">
        <div className="container mx-auto px-6 lg:px-[155px] py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-8">
                <svg
                  className="w-20 h-20 text-purple-200"
                  viewBox="0 0 86 86"
                  fill="none"
                >
                  <path
                    d="M14.4755 37.4793V14.8953C14.4755 12.9465 16.0554 11.3666 18.0042 11.3666H35.648V4.30908H49.763V11.3666H67.4067C69.3556 11.3666 70.9355 12.9465 70.9355 14.8953V37.4793L74.7666 38.6286C76.5723 39.1703 77.6334 41.0356 77.1761 42.8646L71.8233 64.276C71.529 64.2904 71.2333 64.2978 70.9355 64.2978C68.8951 64.2978 66.9356 63.9517 65.1127 63.3144L69.524 44.431L42.7055 36.0678L15.887 44.431L20.2982 63.3144C18.4752 63.9517 16.5158 64.2978 14.4755 64.2978C14.1778 64.2978 13.8819 64.2904 13.5878 64.276L8.23494 42.8646C7.77772 41.0356 8.83871 39.1703 10.6443 38.6286L14.4755 37.4793ZM21.533 35.3621L42.7055 29.0103L63.878 35.3621V18.4241H21.533V35.3621ZM14.4755 71.3553C19.8981 71.3553 24.8447 69.3168 28.5905 65.9641C32.3363 69.3168 37.2828 71.3553 42.7055 71.3553C48.1281 71.3553 53.0747 69.3168 56.8205 65.9641C60.5662 69.3168 65.5128 71.3553 70.9355 71.3553H77.993V78.4128H70.9355C65.7937 78.4128 60.9727 77.038 56.8205 74.636C52.6682 77.038 47.8472 78.4128 42.7055 78.4128C37.5637 78.4128 32.7427 77.038 28.5905 74.636C24.4382 77.038 19.6174 78.4128 14.4755 78.4128H7.41797V71.3553H14.4755Z"
                    fill="#C2A7EA"
                  />
                </svg>
              </div>
              <h1 className="text-4xl lg:text-[42px] font-bold font-archivo italic leading-tight mb-8">
                Digital Transformation for the World's Third Largest Marine Co
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl lg:text-[28px] font-bold font-archivo mb-2">
                    1M+
                  </h3>
                  <p className="text-sm lg:text-base font-manrope">
                    Records of Seafarers Migrated from Legacy Apps to Cloud
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-[28px] font-bold font-archivo mb-2">
                    1TB+
                  </h3>
                  <p className="text-sm lg:text-base font-manrope">
                    Digital Records Digitized and Stored on AWS Cloud, such as
                    seafarer docs, photos, and certificates
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-[28px] font-bold font-archivo mb-2">
                    37K+
                  </h3>
                  <p className="text-sm lg:text-base font-manrope">
                    Seafarers use the Ahoy Mobile Apps to manage their profile,
                    experience, at the sea and shore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1d057f895c75d9c5bf2ff35c1168df6fdda407f?width=2259"
              alt="Synergy Marine Group Digital Transformation"
              className="w-full h-[400px] lg:h-[638px] object-cover rounded-lg"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ac5a96f048399ac8556e5de42d23c3e1ccd5bb?width=141"
              alt="Synergy Marine Group Logo"
              className="absolute top-6 left-6 w-16 h-16 lg:w-[71px] lg:h-[76px]"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="flex items-center space-x-4">
              <svg
                className="w-7 h-7 text-brand-purple"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  d="M5.06358 12.9786V5.45328C5.06358 4.80389 5.59002 4.27745 6.23941 4.27745H12.1186V1.92578H16.8219V4.27745H22.7011C23.3505 4.27745 23.8769 4.80389 23.8769 5.45328V12.9786L25.1535 13.3616C25.7552 13.5421 26.1088 14.1636 25.9564 14.7731L24.1728 21.9077C24.0747 21.9125 23.9762 21.9149 23.8769 21.9149C23.197 21.9149 22.5441 21.7996 21.9367 21.5872L23.4066 15.295L14.4702 12.5083L5.53391 15.295L7.0038 21.5872C6.39636 21.7996 5.74345 21.9149 5.06358 21.9149C4.96439 21.9149 4.86578 21.9125 4.7678 21.9077L2.98414 14.7731C2.83179 14.1636 3.18533 13.5421 3.78699 13.3616L5.06358 12.9786Z"
                  fill="#B800C5"
                />
              </svg>
              <div>
                <p className="text-gray-500 text-base font-manrope">Industry</p>
                <p className="text-gray-900 text-lg lg:text-[19px] font-manrope font-medium">
                  Marine
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                className="w-7 h-7 text-brand-purple"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  d="M14.5293 13.6836C17.7761 13.6836 20.4082 16.3157 20.4082 19.5625V26.6172H18.0567V19.5625C18.0567 17.684 16.5882 16.1484 14.7366 16.0412L14.5293 16.0352C12.6508 16.0352 11.1152 17.5036 11.008 19.3552L11.002 19.5625V26.6172H8.6504V19.5625C8.6504 16.3157 11.2825 13.6836 14.5293 13.6836Z"
                  fill="#B800C5"
                />
              </svg>
              <div>
                <p className="text-gray-500 text-base font-manrope">
                  Investment
                </p>
                <p className="text-gray-900 text-lg lg:text-[19px] font-manrope font-medium">
                  90k+ Man hours
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                className="w-7 h-7 text-brand-purple"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  d="M14.3789 26.6172C7.88525 26.6172 2.62109 21.353 2.62109 14.8594C2.62109 8.36572 7.88525 3.10156 14.3789 3.10156C20.8725 3.10156 26.1368 8.36572 26.1368 14.8594C26.1368 21.353 20.8725 26.6172 14.3789 26.6172Z"
                  fill="#B800C5"
                />
              </svg>
              <div>
                <p className="text-gray-500 text-base font-manrope">Timeline</p>
                <p className="text-gray-900 text-lg lg:text-[19px] font-manrope font-medium">
                  5+ Years
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl lg:text-[28px] font-bold font-archivo mb-6 text-gray-900">
                Navigating the Digital Waters: A Maritime Industry
                Transformation
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-600 font-manrope leading-relaxed">
                Synergy Marine Group, the world's third-largest ship management
                company, partnered with us for a transformative digital journey.
                By developing multiple apps to streamline their technical,
                commercial, crew management, and other maritime services, we
                significantly enhanced their operational efficiency, driving
                substantial improvements in performance and service delivery
                across their global operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 lg:py-24 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-[35px] font-bold font-archivo mb-12 text-gray-900 underline">
                Challenges
              </h2>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                      activeSection === index
                        ? "bg-gray-50"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveSection(index)}
                  >
                    <div className="text-gray-900">{challenge.icon}</div>
                    <h3 className="text-base font-semibold text-gray-700 font-manrope">
                      {challenge.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8">
              <div className="mb-6">
                <span className="text-lg font-semibold text-brand-purple font-manrope tracking-wider">
                  01
                </span>
              </div>
              <h3 className="text-xl lg:text-[21px] font-semibold font-archivo mb-6 text-gray-900">
                Outdated Tech and UX
              </h3>
              <p className="text-lg lg:text-[19px] text-gray-600 font-manrope leading-relaxed">
                The system's outdated technology and poor UX led to frequent
                downtimes, user frustration, inefficiency, steep learning
                curves, and poor user adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Section */}
      <section className="py-16 lg:py-24 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-[35px] font-bold font-archivo mb-8 text-gray-900 underline">
                Response
              </h2>
              <p className="text-lg lg:text-[19px] text-gray-600 font-manrope leading-relaxed">
                We collaborated with Synergy Marine Group over five years,
                investing 90,000+ man-hours to develop four core business
                modules. Our design-led engineering approach created mobile and
                web applications, achieving seamless digital transformation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <svg
                  className="w-5 h-5 text-brand-purple"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M9.09596 13.9424L17.2044 5.83398L18.4519 7.08144L9.09596 16.4373L3.48242 10.8238L4.72988 9.57638L9.09596 13.9424Z"
                    fill="#B800C5"
                  />
                </svg>
                <span className="text-lg text-gray-600 font-manrope">
                  Crew Management
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-5 h-5 text-brand-purple"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M9.09596 13.9717L17.2044 5.86328L18.4519 7.11073L9.09596 16.4666L3.48242 10.8531L4.72988 9.60568L9.09596 13.9717Z"
                    fill="#B800C5"
                  />
                </svg>
                <span className="text-lg text-gray-600 font-manrope">
                  Vessel Management
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-5 h-5 text-brand-purple"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M9.09596 14.0118L17.2044 5.90332L18.4519 7.15077L9.09596 16.5067L3.48242 10.8932L4.72988 9.64572L9.09596 14.0118Z"
                    fill="#B800C5"
                  />
                </svg>
                <span className="text-lg text-gray-600 font-manrope">
                  QHSE (Quality, Health, Safety, Environment)
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-5 h-5 text-brand-purple"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M9.09596 14.042L17.2044 5.93359L18.4519 7.18105L9.09596 16.5369L3.48242 10.9234L4.72988 9.67599L9.09596 14.042Z"
                    fill="#B800C5"
                  />
                </svg>
                <span className="text-lg text-gray-600 font-manrope">
                  Portage Bill / Crew Wages
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Image Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-6 lg:px-[325px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/934413cc6ce17737066634f216514007048e4b3f?width=1581"
            alt="Marine Operations Background"
            className="w-full h-[445px] object-cover"
          />
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <h2 className="text-3xl lg:text-[35px] font-bold font-archivo mb-16 text-gray-900 underline">
            Deliverables
          </h2>

          {appCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-2xl lg:text-[25px] font-semibold font-archivo mb-8 text-gray-900">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.apps.map((app, appIndex) => (
                      <div
                        key={appIndex}
                        className="flex items-center justify-between py-4 border-b border-gray-200"
                      >
                        <span className="text-lg lg:text-[19px] font-manrope text-gray-900">
                          {app.name}
                        </span>
                        <ChevronDown className="w-8 h-8 text-gray-900" />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <img
                    src={
                      categoryIndex === 0
                        ? "https://cdn.builder.io/api/v1/image/assets/TEMP/e4b820c2a7fbe8005c25740b0291048449b5ecab?width=1094"
                        : categoryIndex === 1
                          ? "https://cdn.builder.io/api/v1/image/assets/TEMP/48faf3f84784b835ecdeff7ef3e11cc41cf144fe?width=1094"
                          : "https://cdn.builder.io/api/v1/image/assets/TEMP/38f3ff6bf149b21dd61d55557f4e2be3e81af35b?width=1094"
                    }
                    alt={`${category.title} Interface`}
                    className="w-full h-[445px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ef92fb003aed76446bf30b2e11aeeb4ac711d0?width=576"
                alt="Karthik Krishnamoorthy"
                className="w-full h-[384px] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                <h4 className="text-white text-2xl lg:text-[25px] font-medium font-archivo mb-2">
                  Karthik Krishnamoorthy11
                </h4>
                <p className="text-white text-base font-manrope">
                  Head of Delivery
                </p>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-[71px] h-[71px] bg-white rounded-full flex items-center justify-center">
                  <Play className="w-10 h-10 text-gray-900 ml-1" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="mb-6">
                <svg
                  className="w-7 h-6 text-brand-purple"
                  viewBox="0 0 29 25"
                  fill="none"
                >
                  <path
                    d="M7.05802 18.0712C6.02777 16.9775 5.47461 15.7501 5.47461 13.7604C5.47461 10.2609 7.93112 7.12372 11.5052 5.57324L12.3979 6.95085C9.06265 8.75545 8.41079 11.0961 8.15025 12.5721C8.68724 12.2944 9.39019 12.1967 10.0793 12.2606C11.8837 12.4279 13.3058 13.9091 13.3058 15.7501C13.3058 17.6831 11.7388 19.2501 9.80577 19.2501C8.73271 19.2501 7.70657 18.7596 7.05802 18.0712Z"
                    fill="#B800C5"
                  />
                </svg>
              </div>

              <blockquote className="text-xl lg:text-[21px] font-bold font-archivo text-gray-900 leading-relaxed mb-8 pb-8 border-b border-gray-200">
                Devsoko has been very flexible, very agile, and receptive to
                feedback. They've been improving on quality initiatives as well
                as on the feedbacks that Synergy has been providing them from
                time to time, and that is is more important for a customer or a
                client like Synergy.
              </blockquote>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-5 h-5 text-gray-900"
                    viewBox="0 0 22 25"
                    fill="none"
                  >
                    <path
                      d="M7.42214 4.11146H13.5967V1.90625L16.684 4.99354L13.5967 8.08083V5.87563H7.42214V8.08083L4.33484 4.99354L7.42214 1.90625V4.11146Z"
                      fill="black"
                    />
                  </svg>
                  <span className="text-lg text-gray-900 font-manrope">
                    Key Contributor to Digital Transformation
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-5 h-5 text-gray-900"
                    viewBox="0 0 22 25"
                    fill="none"
                  >
                    <path
                      d="M14.0401 19.6706C13.4591 21.0636 12.3444 22.1785 10.9512 22.7594C9.55804 22.1785 8.44325 21.0636 7.86228 19.6706H9.85521C10.143 20.1016 10.5147 20.4753 10.9512 20.7672C11.3877 20.4753 11.7594 20.1016 12.0472 19.6706H14.0401Z"
                      fill="black"
                    />
                  </svg>
                  <span className="text-lg text-gray-900 font-manrope">
                    Strong Technical Expertise & Agile Execution
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-5 h-5 text-gray-900"
                    viewBox="0 0 22 25"
                    fill="none"
                  >
                    <path
                      d="M10.8272 3.69249C11.6991 3.11125 12.8318 3.0992 13.7158 3.66176L17.381 5.99417H18.8883C19.3755 5.99417 19.7704 6.3891 19.7704 6.87625V14.815C19.7704 15.3021 19.3755 15.697 18.8883 15.697H17.5478C17.6003 16.5326 17.2066 17.3821 16.4147 17.8573L11.9219 20.553C11.3547 20.8932 10.6506 20.8853 10.0954 20.5463C9.47763 21.0926 8.52674 21.1527 7.8369 20.6107L3.30232 17.0478C2.62629 16.5167 2.45533 15.6092 2.8044 14.8898C2.37808 14.5555 2.12891 14.0436 2.12891 13.5015V6.87631C2.12891 6.38915 2.52383 5.99422 3.01099 5.99422H7.37459L10.8272 3.69249Z"
                      fill="black"
                    />
                  </svg>
                  <span className="text-lg text-gray-900 font-manrope">
                    Collaborative & Transparent Partnership
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <h2 className="text-3xl lg:text-[35px] font-bold font-archivo mb-16 text-gray-900 underline">
            Other Case Studies
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4430f8012d7a161cd944e5f10041ed7df57b90b?width=1333"
                alt="Roche Case Study"
                className="w-full h-[423px] object-cover rounded-lg"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3af676f8aac5fcfd3e89ee240bfa9062e49d334b?width=141"
                alt="Roche Logo"
                className="absolute top-6 left-6 w-16 h-8"
              />
              <div className="mt-6">
                <span className="text-sm font-semibold text-brand-purple font-manrope tracking-wider uppercase">
                  HEALTH-TECH
                </span>
                <h3 className="text-2xl lg:text-[25px] font-medium font-archivo mt-4 text-gray-900">
                  <span className="underline">App Modernization</span> for
                  Roche: Legacy Excel Macros to a Cloud Native Tech Stack
                </h3>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf94966d57b0b63532a0e3ef2f1ce425cc8e82e5?width=870"
                alt="Reelo Case Study"
                className="w-full h-[423px] object-cover rounded-lg"
              />
              <div className="absolute top-6 left-6">
                <svg className="w-16 h-7" viewBox="0 0 71 31" fill="none">
                  <g clipPath="url(#clip0_reelo)">
                    <path
                      d="M2.29916 10.2728C4.71035 8.36349 8.19712 8.7903 10.0871 11.2261L18.2147 21.7008C20.1047 24.1366 19.6821 27.6589 17.271 29.5683C14.8598 31.4775 11.3729 31.0507 9.48297 28.6149L1.35543 18.1402C-0.534554 15.7044 -0.112033 12.182 2.29916 10.2728Z"
                      fill="#047272"
                    />
                    <path
                      d="M25.9414 23.3519V12.1676H27.848V14.8808L27.5815 14.5288C27.7182 14.1698 27.8959 13.8418 28.1146 13.5449C28.3332 13.2412 28.5861 12.9927 28.8732 12.7993C29.1534 12.5922 29.4643 12.4334 29.8061 12.3229C30.1546 12.2056 30.5099 12.1366 30.8721 12.1159C31.2343 12.0883 31.5828 12.1055 31.9178 12.1676V14.1973C31.5556 14.1007 31.1524 14.0731 30.7081 14.1145C30.2708 14.156 29.8675 14.2975 29.4985 14.5392C29.1499 14.767 28.8732 15.0431 28.6682 15.3675C28.47 15.6921 28.3264 16.0545 28.2376 16.4549C28.1488 16.8484 28.1043 17.2661 28.1043 17.708V23.3519H25.9414Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_reelo">
                      <rect
                        width="70.5367"
                        height="30.23"
                        fill="white"
                        transform="translate(0.046875 0.679688)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="mt-6">
                <span className="text-sm font-semibold text-brand-purple font-manrope tracking-wider uppercase">
                  RETAIL
                </span>
                <h3 className="text-2xl lg:text-[25px] font-medium font-archivo mt-4 text-gray-900">
                  A <span className="underline">Marketing Automation</span>{" "}
                  Platform that powers 2M+ Customers
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
