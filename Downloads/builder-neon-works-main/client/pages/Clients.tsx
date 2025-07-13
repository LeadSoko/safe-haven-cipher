import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { ChevronDown, ArrowRight, Play, ArrowLeft, Info } from "lucide-react";

export default function Clients() {
  const [activeIndustry, setActiveIndustry] = useState("Healthcare");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const industries = [
    "Healthcare",
    "Marine",
    "Finance",
    "Media",
    "Retail",
    "Education",
    "Non Profit",
    "Consumer Apps",
    "Sports & Fitness",
  ];

  const testimonials = [
    {
      name: "Anand Venkatesan",
      role: "Head of Strategic Initiatives, IvyMobility",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c22b4c20d027dfe67cfbc9463fa0cac8072b9de2?width=712",
    },
    {
      name: "Berri Jacque",
      role: "Director, Center for Science Education, Tufts University School of Medicine",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f7f7e54d6ceaae6e460300a774cac2e701c947d2?width=712",
    },
    {
      name: "Tom Brew",
      role: "Product Marketing Manager, King of the Crease",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5608f4279b045c2e65e82f3f144abedc1044c2ac?width=712",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 lg:px-[155px]">
        <div className="flex items-center justify-between h-14 max-w-[1129px] mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              width="91"
              height="24"
              viewBox="0 0 91 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2514_3208)">
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
                  fill="url(#paint0_linear_2514_3208)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_2514_3208"
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
                <clipPath id="clip0_2514_3208">
                  <rect width="91" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                Our Work
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                About Us
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a
              href="#"
              className="text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors"
            >
              Insights
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex">
            <Button
              variant="outline"
              className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-brand px-6 lg:px-[120px] py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-white text-3xl lg:text-4xl xl:text-[42px] font-bold font-archivo leading-tight">
                Trusted by Startups
                <br />
                & Enterprises to
                <br />
                Build AI-Driven
                <br />
                Products
              </h1>
              <p className="text-brand-light-purple text-lg font-medium font-manrope">
                Turning bold ideas into scalable products
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdb0143bf876f1bc4bb1add94bbe537c66755c43?width=1186"
                alt="Header background"
                className="w-full max-w-[593px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Clients Section */}
      <section className="bg-slate-100 px-6 lg:px-[155px] py-16">
        <div className="max-w-[1129px] mx-auto">
          <h2 className="text-gray-900 text-3xl lg:text-[35px] font-bold font-archivo underline mb-12">
            Key Clients
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Roche Card */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
              <div className="p-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/75114b0881de06ec3fc9ed5f11fd9fd2d0f68fe1?width=162"
                  alt="Roche"
                  className="h-10 mb-6"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                    Product Engineering
                  </span>
                  <span className="w-1 h-1 bg-brand-purple rounded-full mt-2"></span>
                  <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                    Cloud & DevOps
                  </span>
                </div>
                <p className="text-gray-900 text-sm leading-relaxed mb-6">
                  Roche is a top-tier pharmaceutical leader, and we collaborated
                  on multiple initiatives with them across Japan, Singapore, and
                  India; delivering innovative IT solutions to accelerate
                  Roche's business goals.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 text-brand-purple" />
                  </button>
                </div>
              </div>
            </div>

            {/* Amagi Card */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
              <div className="p-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cfd9275cab88b5f06e0f23e00057633b71f273a?width=302"
                  alt="Amagi"
                  className="h-10 mb-6"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                    Product Discovery
                  </span>
                  <span className="w-1 h-1 bg-brand-purple rounded-full mt-2"></span>
                  <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                    Product Engineering
                  </span>
                </div>
                <p className="text-gray-900 text-sm leading-relaxed mb-6">
                  We collaborated with Amagi, India's first Media SaaS unicorn,
                  to develop innovative products from scratch; for their channel
                  creation, content distribution, and CTV advertising platforms.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 text-brand-purple" />
                  </button>
                </div>
              </div>
            </div>

            {/* Synergy Marine Group Card */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
              <div className="p-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/db69a82d8d21130d99b186dc62a61d8ba03bf7a8?width=79"
                  alt="Synergy Marine Group"
                  className="h-10 mb-6"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                    Co-Developed
                  </span>
                  <span className="w-1 h-1 bg-brand-purple rounded-full mt-2"></span>
                  <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                    Product Engineering
                  </span>
                </div>
                <p className="text-gray-900 text-sm leading-relaxed mb-6">
                  Over a period of ~5 years and 90k+ Man-hours; we helped with
                  the Digital Transformation of the World's third largest ship
                  management company, Synergy Marine Group, by building a suite
                  of apps across a broad range of Business Functions.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 text-brand-purple" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* IvyMobility Card - Full Width */}
          <div className="max-w-md">
            <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
              <div className="p-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e1ef9dcac90a91c89afb49d9e0c390772caff19?width=278"
                  alt="IvyMobility"
                  className="h-10 mb-6"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                    AI/ML Services
                  </span>
                  <span className="w-1 h-1 bg-brand-purple rounded-full mt-2"></span>
                  <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                    Staff Augmentation
                  </span>
                </div>
                <p className="text-gray-900 text-sm leading-relaxed mb-6">
                  One of our longest standing clients, we've partnered with Ivy
                  Mobility, a leading intelligent Route-to-Market solution
                  provider for 7+ years now. Collaborating across various
                  initiatives such as AI/ML Dev, developing and deploying
                  enterprise Mobile and Web Apps for some of their major
                  customers across the globe.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 text-brand-purple" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab-Approved and Client Loved Section */}
      <section className="bg-white px-6 lg:px-[120px] py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-gray-900 text-3xl lg:text-[35px] font-bold font-archivo mb-4">
                Lab-Approved and <span className="underline">Client Loved</span>
              </h2>
              <p className="text-gray-600 text-lg lg:text-xl font-medium max-w-2xl">
                We've had the pleasure of working on a wide spectrum of projects
                with exceptional clients. Hear them out!
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex border border-brand-purple rounded">
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev > 0 ? prev - 1 : testimonials.length - 1,
                  )
                }
                className="p-3 border-r border-brand-purple hover:bg-brand-purple hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-brand-purple hover:text-white" />
              </button>
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev < testimonials.length - 1 ? prev + 1 : 0,
                  )
                }
                className="p-3 hover:bg-brand-purple hover:text-white transition-colors"
              >
                <ArrowRight className="h-5 w-5 text-brand-purple hover:text-white" />
              </button>
            </div>
          </div>

          {/* Testimonial Videos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h4 className="text-white text-xl lg:text-2xl font-medium font-archivo mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-white text-sm lg:text-base font-medium opacity-90">
                    {testimonial.role}
                  </p>
                </div>
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play
                      className="h-10 w-10 text-gray-900 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-4">
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Detailed Client Cases Section */}
      <section className="bg-slate-100 px-6 lg:px-[120px] py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-gray-900 text-lg font-medium font-archivo mb-6">
                  Filters
                </h3>

                {/* Engagement Section */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <h4 className="text-gray-900 text-sm font-medium font-archivo">
                      Engagement
                    </h4>
                    <Info className="ml-2 h-4 w-4 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 mr-3"
                      />
                      <span className="text-sm text-gray-900">
                        Fully Managed
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 mr-3"
                      />
                      <span className="text-sm text-gray-900">
                        Co-Developed
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 mr-3"
                      />
                      <span className="text-sm text-gray-900">
                        Staff Augmentation
                      </span>
                    </label>
                  </div>
                </div>

                {/* Delivery Model Section */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <h4 className="text-gray-900 text-sm font-medium font-archivo">
                      Delivery Model
                    </h4>
                    <Info className="ml-2 h-4 w-4 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 mr-3"
                      />
                      <span className="text-sm text-gray-900">
                        Product Discovery
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 mr-3"
                      />
                      <span className="text-sm text-gray-900">
                        Product Engineering
                      </span>
                    </label>
                  </div>
                </div>

                {/* Design and Dev Section */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <h4 className="text-gray-900 text-sm font-medium font-archivo">
                      Design and Dev
                    </h4>
                    <Info className="ml-2 h-4 w-4 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 mr-3"
                      />
                      <span className="text-sm text-gray-900">Web Dev</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 mr-3"
                      />
                      <span className="text-sm text-gray-900">Mobile Dev</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 mr-3"
                      />
                      <span className="text-sm text-gray-900">
                        UX/UI Design
                      </span>
                    </label>
                  </div>
                </div>

                {/* AI/ML Development Section */}
                <div>
                  <h4 className="text-gray-900 text-sm font-medium font-archivo mb-4">
                    AI/ML Development
                  </h4>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 mr-3"
                      />
                      <span className="text-sm text-gray-900">
                        AI/ML Services
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Industry Tabs */}
              <div className="mb-8">
                <h3 className="text-gray-900 text-lg font-medium font-archivo mb-6">
                  Industry
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setActiveIndustry(industry)}
                      className={`px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${
                        activeIndustry === industry
                          ? "border-brand-purple text-brand-purple"
                          : "border-gray-200 text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              {/* Healthcare Section */}
              {activeIndustry === "Healthcare" && (
                <div>
                  <div className="flex items-center mb-8">
                    <div className="w-9 h-9 bg-brand-purple rounded-lg flex items-center justify-center mr-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.6006 1.50977C25.429 1.50977 26.1006 2.18135 26.1006 3.00977V7.50977H32.1006C32.929 7.50977 33.6006 8.18135 33.6006 9.00977V30.0098C33.6006 30.8382 32.929 31.5098 32.1006 31.5098H5.10059C4.27217 31.5098 3.60059 30.8382 3.60059 30.0098V9.00977C3.60059 8.18135 4.27217 7.50977 5.10059 7.50977H11.1006V3.00977C11.1006 2.18135 11.7721 1.50977 12.6006 1.50977H24.6006ZM30.6006 10.5098H6.60059V28.5098H30.6006V10.5098ZM20.1006 13.5098V18.0098H24.6006V21.0098H20.0991L20.1006 25.5098H17.1006L17.0991 21.0098H12.6006V18.0098H17.1006V13.5098H20.1006ZM23.1006 4.50977H14.1006V7.50977H23.1006V4.50977Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold font-archivo underline">
                      Healthcare
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* XY.ai Card */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
                      <div className="p-6">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a216c2e821207e448b25cb9b1674916bc28914?width=192"
                          alt="XY.ai"
                          className="h-10 mb-6"
                        />
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                            Fully Managed
                          </span>
                          <span className="w-1 h-1 bg-brand-purple rounded-full mt-2"></span>
                          <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                            Product Engineering
                          </span>
                        </div>
                        <p className="text-gray-900 text-sm leading-relaxed mb-6">
                          Devsoko partnered with XY Health to design an
                          AI-powered app that helps users make smarter
                          relocation decisions using health, environment, and
                          lifestyle data. We turned complex datasets into
                          intuitive visuals, allowing users to assess
                          neighborhoods by pollution, safety, and amenities.
                          Through research and prototyping, we created a
                          solution that's both intelligent and user-friendly.
                        </p>
                        <div className="border-t border-gray-200 pt-4">
                          <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4 text-brand-purple" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Roche Card */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
                      <div className="p-6">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f9c50de44c6752b01dc4fd5aaa4b2df06b786d4?width=162"
                          alt="Roche"
                          className="h-10 mb-6"
                        />
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                            Product Engineering
                          </span>
                          <span className="w-1 h-1 bg-brand-purple rounded-full mt-2"></span>
                          <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                            Cloud & DevOps
                          </span>
                        </div>
                        <p className="text-gray-900 text-sm leading-relaxed mb-6">
                          Roche is a top-tier pharmaceutical leader, and we
                          collaborated on multiple initiatives with them across
                          Japan, Singapore, and India; delivering innovative IT
                          solutions to accelerate Roche's business goals.
                        </p>
                        <div className="border-t border-gray-200 pt-4">
                          <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4 text-brand-purple" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* alldayDr Card */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
                      <div className="p-6">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc796ad537c07184456e1597ca06606090947da7?width=283"
                          alt="alldayDr"
                          className="h-10 mb-6"
                        />
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                            Fully Managed
                          </span>
                          <span className="w-1 h-1 bg-brand-purple rounded-full mt-2"></span>
                          <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                            Product Discovery
                          </span>
                        </div>
                        <p className="text-gray-900 text-sm leading-relaxed mb-6">
                          Our 3+ year partnership with alldayDr, a real-time
                          telemedicine and pharmacy platform, resulted in a
                          comprehensive solution that met rigorous NHS
                          integration, ISO 27001, and CQC certification
                          standards.
                        </p>
                        <div className="border-t border-gray-200 pt-4">
                          <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4 text-brand-purple" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Evva 360 Card */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
                      <div className="p-6">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0004732b31da9e6d8c888e1278b68fe81693bd49?width=258"
                          alt="Evva 360"
                          className="h-10 mb-6"
                        />
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                            Fully Managed
                          </span>
                          <span className="w-1 h-1 bg-brand-purple rounded-full mt-2"></span>
                          <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                            Product Discovery
                          </span>
                        </div>
                        <p className="text-gray-900 text-sm leading-relaxed mb-6">
                          Evva is an award-winning care management solution for
                          dementia patients and caregivers. We worked with the
                          team to transform their product vision into reality.
                          Our expertise in Product Discovery, UX/UI design, and
                          Development empowered Evva to secure community
                          funding.
                        </p>
                        <div className="border-t border-gray-200 pt-4">
                          <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4 text-brand-purple" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Tata 1mg Card - Shorter */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden md:col-span-1">
                      <div className="p-6">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5ae002104f33c6ac63605b338b1c4dfc57ebc03?width=369"
                          alt="Tata 1mg"
                          className="h-10 mb-6"
                        />
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                            Co-Developed
                          </span>
                          <span className="w-1 h-1 bg-brand-purple rounded-full mt-2"></span>
                          <span className="bg-transparent text-brand-purple text-xs font-semibold tracking-wider uppercase">
                            UX/UI Design
                          </span>
                        </div>
                        <p className="text-gray-900 text-sm leading-relaxed mb-6">
                          Our innovative work in preventive healthcare led to
                          the development of a product that caught the attention
                          of Tata 1mg, resulting in its successful acquisition
                          and integration into their platform
                        </p>
                        <div className="border-t border-gray-200 pt-4">
                          <button className="flex items-center text-gray-900 text-sm font-medium hover:text-brand-purple transition-colors">
                            Read Blog
                            <ArrowRight className="ml-2 h-4 w-4 text-brand-purple" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
