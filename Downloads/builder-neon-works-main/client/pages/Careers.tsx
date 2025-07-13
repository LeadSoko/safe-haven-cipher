import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Play } from "lucide-react";

export default function Careers() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const benefits = [
    {
      icon: (
        <svg className="w-25 h-25" viewBox="0 0 101 101" fill="none">
          <g clipPath="url(#clip0_health)">
            <rect
              width="100"
              height="100"
              fill="#E8F4FD"
              transform="translate(0.75 0.720215)"
            />
          </g>
        </svg>
      ),
      title: "Health Insurance",
      description:
        "Comprehensive coverage for you, your spouse, and your little one. We've got your back.",
    },
    {
      icon: (
        <svg className="w-25 h-25" viewBox="0 0 101 101" fill="none">
          <g clipPath="url(#clip0_compensation)">
            <rect
              width="100"
              height="100"
              fill="#F0E8FF"
              transform="translate(0.75 0.0605469)"
            />
          </g>
        </svg>
      ),
      title: "Competitive Compensation",
      description:
        "We recognize your skills and value your contributions, both in the workplace and on payday.)",
    },
    {
      icon: (
        <svg className="w-25 h-25" viewBox="0 0 101 101" fill="none">
          <g clipPath="url(#clip0_learning)">
            <rect
              width="100"
              height="100"
              fill="#FFF7ED"
              transform="translate(0.75 0.410156)"
            />
          </g>
        </svg>
      ),
      title: "Learning Allowance",
      description:
        "Fuel your curiosity and knowledge with a bonus for expanding your expertise.",
    },
    {
      icon: (
        <svg className="w-25 h-25" viewBox="0 0 101 101" fill="none">
          <g clipPath="url(#clip0_events)">
            <rect
              width="100"
              height="100"
              fill="#F0FDF4"
              transform="translate(0.75 0.75)"
            />
          </g>
        </svg>
      ),
      title: "Weekly Events",
      description:
        "From team outings to game nights, there's always something fun to look forward to.",
    },
    {
      icon: (
        <svg className="w-25 h-25" viewBox="0 0 101 101" fill="none">
          <g clipPath="url(#clip0_parental)">
            <rect
              width="100"
              height="100"
              fill="#FDF2F8"
              transform="translate(0.75 0.0898438)"
            />
          </g>
        </svg>
      ),
      title: "Parental Leaves",
      description:
        "Take time to cherish family moments, your loved ones need you.",
    },
    {
      icon: (
        <svg className="w-25 h-25" viewBox="0 0 101 101" fill="none">
          <g clipPath="url(#clip0_outings)">
            <rect
              width="100"
              height="100"
              fill="#F1F5F9"
              transform="translate(0.75 0.44043)"
            />
          </g>
        </svg>
      ),
      title: "Team Outings",
      description:
        "Bond with your team beyond the office. We celebrate together, inside and outside the workplace.",
    },
    {
      icon: (
        <svg className="w-25 h-25" viewBox="0 0 101 101" fill="none">
          <g clipPath="url(#clip0_snacks)">
            <rect
              width="100"
              height="100"
              fill="#FFFBEB"
              transform="translate(0.75 0.780273)"
            />
          </g>
        </svg>
      ),
      title: "Complimentary Snacks",
      description:
        "Enjoy tea, coffee, and snacks while sharing stories and ideas with colleagues.",
    },
  ];

  const testimonials = [
    {
      name: "Deep Shah",
      position: "Sr. UI UX Designer",
      quote:
        "At Devsoko, I've found a place where my ideas are valued, and my growth is supported. The team's collaborative spirit and the leadership's commitment to innovation make every day exciting and rewarding.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/817763c6b7a353f7f456b29753a7606e9f13644b?width=700",
    },
    {
      name: "Sagar Jani",
      position: "Sr. Business Development Executive",
      quote:
        "Devsoko is a truly collaborative environment where learning happens every day—working alongside smart, supportive teammates has really helped me grow.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/48ab75902d7dca67fddfd535b1fdda00a0180162?width=700",
    },
    {
      name: "Shivani Mehta",
      position: "Digital Marketing Executive",
      quote:
        "At Devsoko, I've found a place where my ideas are valued, and my growth is supported. The team's collaborative spirit and the leadership's commitment to innovation make every day exciting and rewarding.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3db4fb72c118e721d3fbc73f3ef4a076f89b8e45?width=700",
    },
  ];

  const jobOpenings = [
    {
      title: "Sr. Product Analyst / Business Analyst",
      experience: "3+ years",
      skills: ["Delivery"],
    },
    {
      title: "AI Generalist Intern",
      experience: "0",
      skills: ["AI/ML"],
    },
    {
      title: "Sr. Software Engineer- Backend",
      experience: "3 - 4 Years",
      skills: ["NodeJS"],
    },
    {
      title: "Software Engineer- Frontend",
      experience: "2-4 Years",
      skills: ["ReactJS"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 lg:px-[155px] py-4 bg-white">
        <div className="flex items-center space-x-8">
          <svg className="w-[91px] h-6" viewBox="0 0 91 24" fill="none">
            <g clipPath="url(#clip0_2516_7024)">
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
                fill="url(#paint0_linear_2516_7024)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_2516_7024"
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
      <section className="relative bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue text-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-8">
              <h1 className="text-4xl lg:text-[42px] font-bold font-archivo">
                Life at
              </h1>
              <h1 className="text-4xl lg:text-[42px] font-bold font-archivo underline">
                Devsoko
              </h1>
              <svg
                className="w-6 h-7 text-white"
                viewBox="0 0 25 28"
                fill="none"
              >
                <g clipPath="url(#clip0_2516_6673)">
                  <path
                    d="M13.3474 0.76416L14.2678 6.74683L14.6944 8.59529C15.2773 11.1212 17.2596 13.0875 19.7903 13.6499L24.3923 14.1101L19.7903 14.8004C17.138 15.3588 15.0737 17.4441 14.5421 20.1018L14.2678 21.4734L13.3474 27.4561L12.427 21.4734L12.0366 19.8465C11.4307 17.322 9.43892 15.3636 6.90453 14.8004L2.7627 14.1101L6.90453 13.6499C9.43519 13.0875 11.4175 11.1212 12.0004 8.59529L12.427 6.74683L13.3474 0.76416Z"
                    fill="white"
                  />
                  <path
                    d="M4.60205 15.9507L4.92245 18.2216C5.0999 19.4793 6.07009 20.4779 7.32212 20.6917L9.2041 21.0129L7.32212 21.3342C6.07009 21.548 5.0999 22.5467 4.92245 23.8044L4.60205 26.0752L4.28165 23.8044C4.1042 22.5467 3.13401 21.548 1.88199 21.3342L0 21.0129L1.88199 20.6917C3.13401 20.4779 4.1042 19.4793 4.28165 18.2216L4.60205 15.9507Z"
                    fill="white"
                  />
                  <path
                    d="M6.21301 2.14502L6.52016 5.19646C6.57585 5.74977 7.00077 6.19429 7.55102 6.27486L9.20432 6.51697L7.56397 6.73853C7.00758 6.81369 6.57551 7.26099 6.51968 7.81968L6.21301 10.8889L5.90635 7.81968C5.85052 7.26099 5.41846 6.81369 4.86203 6.73853L3.22168 6.51697L4.87503 6.27486C5.42527 6.19429 5.85018 5.74977 5.90588 5.19646L6.21301 2.14502Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <p className="text-lg lg:text-[18px] font-manrope leading-relaxed max-w-3xl">
              At Devsoko, we thrive on creativity, innovation, and growth. As an
              AI-native company, we're constantly pushing boundaries and
              building products that make a real impact. But it's not just about
              the work, we're a team that values collaboration, learning, and
              having fun
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative">
        <div className="container mx-auto px-6 lg:px-[155px] relative -mt-32">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c15f743678a90c5fc9fa9e05074ccf86a753743?width=2259"
              alt="Devsoko Team Working"
              className="w-full h-[400px] lg:h-[552px] object-cover"
            />
            <div className="absolute inset-0 bg-purple-600/10"></div>
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 right-16 flex space-x-2">
              <div
                className={`w-[71px] h-1 rounded-full ${
                  currentSlide === 0 ? "bg-white/30" : "bg-white shadow-lg"
                }`}
              ></div>
              <div
                className={`w-[71px] h-1 rounded-full ${
                  currentSlide === 1 ? "bg-white shadow-lg" : "bg-white/30"
                }`}
              ></div>
              <div
                className={`w-[71px] h-1 rounded-full ${
                  currentSlide === 2 ? "bg-white/30" : "bg-white/30"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Working at Devsoko Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <h2 className="text-3xl lg:text-[42px] font-bold font-archivo mb-16 text-gray-900 underline">
            Working at Devsoko!
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 border-t border-gray-100">
            {/* Collaborate & Innovate */}
            <div className="pt-8 border-r border-gray-100 pr-8">
              <div className="mb-8">
                <svg className="w-14 h-14 mb-6" viewBox="0 0 58 58" fill="none">
                  <mask
                    id="mask0_2516_6729"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="1"
                    width="57"
                    height="56"
                  >
                    <path
                      d="M56.6584 1.26172H0.951172V56.969H56.6584V1.26172Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_2516_6729)">
                    <path
                      d="M18.8644 56.082H5.7069C5.18269 56.082 4.75781 55.6571 4.75781 55.1329V52.2486C4.75781 51.7243 5.18269 51.2993 5.7069 51.2993H18.8644C19.3885 51.2993 19.8135 51.7243 19.8135 52.2486V55.1329C19.8135 55.6571 19.3885 56.082 18.8644 56.082Z"
                      stroke="black"
                      strokeWidth="0.928454"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40.2763 6.93594H38.7429C38.2188 6.93594 37.7939 6.51095 37.7939 5.98685V3.09801C37.7939 2.5738 38.2188 2.14893 38.7429 2.14893H51.9004C52.4244 2.14893 52.8495 2.5738 52.8495 3.09801V5.98685C52.8495 6.51095 52.4244 6.93594 51.9004 6.93594H40.2763Z"
                      stroke="#B800C5"
                      strokeWidth="0.928454"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl lg:text-[21px] font-semibold font-archivo mb-2 text-gray-900">
                Collaborate & Innovate
              </h3>
              <p className="text-brand-purple text-xl lg:text-[21px] font-caveat mb-4">
                & Have Fun
              </p>
              <p className="text-sm text-gray-600 font-manrope leading-relaxed">
                We maintain a lively and inclusive workspace where everyone has
                a voice. Our open office layout encourages communication,
                brainstorming, and, yes, the occasional paper airplane
                competition. It's about creating and thriving in fun while doing
                it, fostering a culture that sparks creativity and drives
                innovation.
              </p>
            </div>

            {/* Never Stop Learning */}
            <div className="pt-8 border-r border-gray-100 pr-8">
              <div className="mb-8">
                <svg className="w-14 h-14 mb-6" viewBox="0 0 57 58" fill="none">
                  <mask
                    id="mask0_2516_6752"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="1"
                    width="57"
                    height="56"
                  >
                    <path
                      d="M0.481445 1.26172H56.1887V56.969H0.481445V1.26172Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_2516_6752)">
                    <path
                      d="M12.6035 29.5327V37.5592V37.7163C12.6035 43.3104 18.9628 47.8452 26.8075 47.8452C34.652 47.8452 41.0115 43.3104 41.0115 37.7163V37.5592V29.8904"
                      stroke="black"
                      strokeWidth="0.928454"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.8072 37.6909L2.1123 22.8254L26.8072 7.95996L51.5022 22.8254L26.8072 37.6909Z"
                      stroke="black"
                      strokeWidth="0.928454"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40.3994 22.8252H51.5048V45.3886L54.558 49.2772"
                      stroke="#B800C5"
                      strokeWidth="0.928454"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl lg:text-[21px] font-semibold font-archivo mb-2 text-gray-900">
                Never Stop Learning
              </h3>
              <p className="text-brand-purple text-xl lg:text-[21px] font-caveat mb-4">
                & Laughing
              </p>
              <p className="text-sm text-gray-600 font-manrope leading-relaxed">
                Growth isn't just about the work we do; it's about how we
                develop ourselves as professionals and individuals. With access
                to training and certifications, plus plenty of opportunities to
                share knowledge (and laugh at inside jokes), you'll be supported
                in your personal and professional journey.
              </p>
            </div>

            {/* Work Life Balance */}
            <div className="pt-8">
              <div className="mb-8">
                <svg className="w-14 h-14 mb-6" viewBox="0 0 58 58" fill="none">
                  <mask
                    id="mask0_2516_6767"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="1"
                    width="56"
                    height="56"
                  >
                    <path
                      d="M1.01172 1.26172H56.719V56.969H1.01172V1.26172Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_2516_6767)">
                    <path
                      d="M28.8659 32.3794L15.8096 51.964H41.9223L28.8659 32.3794Z"
                      stroke="black"
                      strokeWidth="0.928454"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M55.0857 32.3794H2.64258"
                      stroke="black"
                      strokeWidth="0.928454"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.2272 25.8514H2.64258V12.7949H22.2272V25.8514Z"
                      stroke="#B800C5"
                      strokeWidth="0.928454"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M43.6616 9.20432C43.6616 9.20432 45.5809 6.2666 49.3738 6.2666C52.7554 6.2666 55.086 9.07359 55.086 12.3992C55.086 16.9983 50.4369 20.0437 43.6616 25.8512C36.8863 20.0437 32.2373 16.9983 32.2373 12.3992C32.2373 9.07359 34.5679 6.2666 37.9494 6.2666C41.7423 6.2666 43.6616 9.20432 43.6616 9.20432Z"
                      stroke="#B800C5"
                      strokeWidth="0.928454"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl lg:text-[21px] font-semibold font-archivo mb-2 text-gray-900">
                Work Life Balance
              </h3>
              <p className="text-brand-purple text-xl lg:text-[21px] font-caveat mb-4">
                Yes, It's a Thing!
              </p>
              <p className="text-sm text-gray-600 font-manrope leading-relaxed mb-4">
                We believe you can have a fulfilling career and still enjoy your
                life. We offer:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-brand-purple"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M10.9922 15.1717L18.6546 7.50928L19.8334 8.68811L10.9922 17.5293L5.6875 12.2246L6.86633 11.0458L10.9922 15.1717Z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-600">
                    Flexible working hours
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-brand-purple"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M10.9922 14.6917L18.6546 7.0293L19.8334 8.20813L10.9922 17.0493L5.6875 11.7446L6.86633 10.5658L10.9922 14.6917Z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-600">
                    5-day work week
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-brand-purple"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M10.9922 15.2015L18.6546 7.53906L19.8334 8.71789L10.9922 17.5591L5.6875 12.2544L6.86633 11.0756L10.9922 15.2015Z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-600">
                    Weekly events like karaoke, game nights, and team outings
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 font-manrope leading-relaxed mt-4">
                Because at Devsoko, we know that balance is key to both
                creativity and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks and Benefits Section */}
      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-[42px] font-bold font-archivo mb-4 text-gray-900 underline">
              Perks, Benefits, and Fun
            </h2>
            <p className="text-lg text-gray-600 font-manrope">
              At Devsoko, we take care of our people. Here's a snapshot of what
              you'll enjoy as part of our team:
            </p>
          </div>

          <div className="space-y-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center py-8 border-t border-gray-200"
              >
                <div className="w-25 h-25 bg-gray-100 rounded-lg flex items-center justify-center mr-12">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-[21px] font-medium font-archivo mb-2 text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <div className="max-w-md">
                  <p className="text-base text-gray-600 font-manrope leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-[35px] font-semibold font-archivo mb-4 text-gray-900 underline">
              Working at Devsoko!
            </h2>
          </div>

          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-3 gap-8 items-center"
              >
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-[425px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 bg-white p-8">
                  <div className="mb-6">
                    <svg
                      className="w-7 h-5 text-brand-purple"
                      viewBox="0 0 28 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_quote)">
                        <path
                          d="M3.01397 17.5233C1.46339 16.065 0.630859 14.4285 0.630859 11.7756C0.630859 7.10961 4.32803 2.92669 9.7072 0.859375L11.0508 2.69618C6.03104 5.10233 5.04996 8.22314 4.65783 10.1911C5.46603 9.82087 6.52401 9.69061 7.56118 9.77581C10.2768 9.99887 12.4173 11.9738 12.4173 14.4285C12.4173 17.0058 10.0587 19.0952 7.14947 19.0952C5.53446 19.0952 3.99007 18.4412 3.01397 17.5233ZM18.0645 17.5233C16.514 16.065 15.6814 14.4285 15.6814 11.7756C15.6814 7.10961 19.3786 2.92669 24.7578 0.859375L26.1013 2.69618C21.0815 5.10233 20.1005 8.22314 19.7083 10.1911C20.5165 9.82087 21.5746 9.69061 22.6117 9.77581C25.3274 9.99887 27.4678 11.9738 27.4678 14.4285C27.4678 17.0058 25.1093 19.0952 22.2001 19.0952C20.585 19.0952 19.0407 18.4412 18.0645 17.5233Z"
                          fill="#B800C5"
                        />
                      </g>
                    </svg>
                  </div>

                  <blockquote className="text-lg lg:text-[19px] font-medium font-archivo text-gray-900 leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </blockquote>

                  <div>
                    <h4 className="text-xl lg:text-[21px] font-medium font-archivo text-black mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-inter">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl lg:text-[42px] font-bold font-archivo mb-4 text-gray-900">
                We Build Cool Stuff:
              </h2>
              <h2 className="text-3xl lg:text-[42px] font-bold font-archivo text-gray-900 underline">
                Work with Us!
              </h2>
            </div>
            <div>
              <p className="text-xl lg:text-[21px] text-gray-600 font-manrope leading-relaxed">
                Are you a tech enthusiast who loves solving challenges with
                innovative AI-driven solutions? We want to hear from you. At
                Devsoko, we're building the latest technology-driven products
                that make a difference, and we're looking for like-minded
                individuals to join our team.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-0">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="border border-gray-200 bg-white p-9 flex items-center justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-[25px] font-semibold font-archivo mb-4 text-gray-900">
                    {job.title}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="px-4 py-2 rounded-full border border-purple-200 text-gray-600 text-base font-manrope">
                      {job.experience}
                    </span>
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 rounded-full border border-purple-200 text-gray-600 text-base font-manrope"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center border border-brand-purple">
                  <div className="px-6 py-3 border-r border-purple-800">
                    <span className="text-lg font-medium text-brand-purple tracking-wider">
                      Apply Now
                    </span>
                  </div>
                  <div className="px-4 py-3">
                    <ArrowRight className="w-4 h-4 text-brand-purple" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-[155px]">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl lg:text-[27px] font-semibold font-archivo mb-8 text-gray-900 underline">
                No Current Openings?
              </h3>
              <p className="text-xl lg:text-[21px] text-gray-900 font-manrope leading-relaxed">
                If you don't find an opening that matches your skills right now,
                don't worry! We're always on the lookout for great talent. Reach
                out to us at{" "}
                <span className="font-bold text-brand-purple">
                  careers@devsoko.com
                </span>{" "}
                or fill out our talent network form, and let's discuss how you
                can join our team.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="border-b border-gray-200 pb-4 mb-8">
                <h3 className="text-xl lg:text-[21px] font-semibold font-archivo text-gray-900">
                  Careers Form
                </h3>
              </div>

              <form className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_user)" opacity="0.5">
                        <path
                          d="M14.7815 16.4496H13.3115V14.9796C13.3115 14.3948 13.0792 13.834 12.6657 13.4205C12.2521 13.0069 11.6913 12.7746 11.1065 12.7746H6.69649C6.11169 12.7746 5.55083 13.0069 5.13731 13.4205C4.7238 13.834 4.49149 14.3948 4.49149 14.9796V16.4496H3.02148V14.9796C3.02148 14.005 3.40867 13.0703 4.09787 12.3811C4.78706 11.6919 5.72182 11.3047 6.69649 11.3047H11.1065C12.0812 11.3047 13.0159 11.6919 13.7051 12.3811C14.3943 13.0703 14.7815 14.005 14.7815 14.9796V16.4496ZM8.90149 9.83464C8.32236 9.83464 7.7489 9.72059 7.21385 9.49895C6.6788 9.2773 6.19265 8.9525 5.78314 8.54299C5.37364 8.13348 5.0488 7.64733 4.82718 7.11228C4.60556 6.57723 4.49149 6.00378 4.49149 5.42465C4.49149 4.84552 4.60556 4.27206 4.82718 3.73702C5.0488 3.20197 5.37364 2.71581 5.78314 2.30631C6.19265 1.8968 6.6788 1.57196 7.21385 1.35034C7.7489 1.12872 8.32236 1.01465 8.90149 1.01465C10.0711 1.01465 11.1928 1.47927 12.0198 2.30631C12.8468 3.13334 13.3115 4.25504 13.3115 5.42465C13.3115 6.59426 12.8468 7.71595 12.0198 8.54299C11.1928 9.37 10.0711 9.83464 8.90149 9.83464ZM8.90149 8.36465C9.68126 8.36465 10.429 8.0549 10.9804 7.50355C11.5317 6.95218 11.8415 6.20439 11.8415 5.42465C11.8415 4.64491 11.5317 3.89711 10.9804 3.34575C10.429 2.7944 9.68126 2.48465 8.90149 2.48465C8.12175 2.48465 7.37395 2.7944 6.8226 3.34575C6.27123 3.89711 5.96149 4.64491 5.96149 5.42465C5.96149 6.20439 6.27123 6.95218 6.8226 7.50355C7.37395 8.0549 8.12175 8.36465 8.90149 8.36465Z"
                          fill="#545454"
                        />
                      </g>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 focus:outline-none focus:border-brand-purple text-sm font-archivo"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-300"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M3.02148 5.50394L7.57848 8.92166C8.36251 9.50966 9.44046 9.50966 10.2245 8.92166L14.7815 5.50391"
                        stroke="#C7C7C7"
                        strokeWidth="1.47"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.0461 4.03418H3.75613C2.94427 4.03418 2.28613 4.69232 2.28613 5.50418V12.8542C2.28613 13.666 2.94427 14.3242 3.75613 14.3242H14.0461C14.858 14.3242 15.5161 13.666 15.5161 12.8542V5.50418C15.5161 4.69232 14.858 4.03418 14.0461 4.03418Z"
                        stroke="#C7C7C7"
                        strokeWidth="1.47"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Your work email"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 focus:outline-none focus:border-brand-purple text-sm font-archivo"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-300"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M13.5789 11.858L12.5396 10.8172L13.5789 9.7779C13.9226 9.43717 14.1956 9.03195 14.3823 8.58543C14.5689 8.13892 14.6656 7.65994 14.6667 7.176C14.6677 6.692 14.5732 6.21263 14.3885 5.76529C14.2037 5.31797 13.9325 4.91153 13.5903 4.56932C13.2481 4.2271 12.8416 3.95585 12.3943 3.77114C11.947 3.58642 11.4676 3.49188 10.9836 3.49294C10.4997 3.494 10.0207 3.59064 9.57417 3.77732C9.12766 3.96399 8.72238 4.23701 8.3817 4.58072L7.34238 5.62075L6.30239 4.58146L7.34315 3.54217C8.30806 2.57724 9.61678 2.03516 10.9814 2.03516C12.346 2.03516 13.6547 2.57724 14.6196 3.54217C15.5846 4.50709 16.1267 5.81581 16.1267 7.18041C16.1267 8.54503 15.5846 9.85375 14.6196 10.8187L13.5796 11.858H13.5789ZM11.5003 13.9365L10.4602 14.9759C9.49534 15.9408 8.18662 16.4829 6.822 16.4829C5.45741 16.4829 4.14869 15.9408 3.18377 14.9759C2.21885 14.0109 1.67676 12.7022 1.67676 11.3376C1.67676 9.97299 2.21885 8.66426 3.18377 7.69936L4.2238 6.66003L5.26309 7.70079L4.2238 8.74012C3.88009 9.08079 3.60706 9.48607 3.42039 9.93258C3.23371 10.3791 3.13707 10.8581 3.13602 11.342C3.13496 11.826 3.2295 12.3054 3.41422 12.7527C3.59893 13.2 3.87018 13.6064 4.21239 13.9487C4.5546 14.2909 4.96104 14.5621 5.40836 14.7469C5.85571 14.9316 6.33508 15.0261 6.81908 15.025C7.30302 15.024 7.782 14.9273 8.22851 14.7407C8.67503 14.554 9.08025 14.281 9.42098 13.9373L10.4602 12.898L11.5003 13.9373V13.9365ZM10.9799 6.14042L12.02 7.18041L6.82277 12.3769L5.78273 11.3376L10.9799 6.14114V6.14042Z"
                        fill="#C7C7C7"
                      />
                    </svg>
                  </div>
                  <input
                    type="url"
                    placeholder="Your LinkedIn link"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 focus:outline-none focus:border-brand-purple text-sm font-archivo"
                  />
                </div>

                <div className="relative bg-white border border-gray-200 p-4 flex items-center">
                  <svg
                    className="w-5 h-5 text-brand-purple mr-3"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M12.4302 12.4076V7.55617C12.4302 5.60753 10.8505 4.02784 8.90188 4.02784C6.95323 4.02784 5.37354 5.60753 5.37354 7.55617V12.4076C5.37354 15.5742 7.94054 18.1412 11.1071 18.1412C14.2737 18.1412 16.8406 15.5742 16.8406 12.4076V4.02784H18.6048V12.4076C18.6048 16.5485 15.2479 19.9053 11.1071 19.9053C6.96621 19.9053 3.60938 16.5485 3.60938 12.4076V7.55617C3.60938 4.6332 5.97891 2.26367 8.90188 2.26367C11.8248 2.26367 14.1944 4.6332 14.1944 7.55617V12.4076C14.1944 14.1127 12.8122 15.4949 11.1071 15.4949C9.40202 15.4949 8.01979 14.1127 8.01979 12.4076V7.55617H9.78396V12.4076C9.78396 13.1383 10.3764 13.7308 11.1071 13.7308C11.8378 13.7308 12.4302 13.1383 12.4302 12.4076Z"
                      fill="#B800C5"
                    />
                  </svg>
                  <span className="text-sm text-black font-manrope">
                    Attach your CV here
                  </span>
                </div>

                <div className="flex items-center bg-brand-purple rounded-sm">
                  <div className="px-5 py-4 border-r border-purple-800">
                    <span className="text-lg font-bold text-white tracking-wider uppercase">
                      Apply Now
                    </span>
                  </div>
                  <div className="px-4 py-4">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
