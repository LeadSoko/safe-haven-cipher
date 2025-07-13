import React, { useState } from "react";
import { Star, Linkedin, Twitter, Play } from "lucide-react";

const Teams = () => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(2);

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center">
          <svg viewBox="0 0 91 24" fill="none" className="w-[91px] h-6">
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
              <clipPath id="clip0_2516_7024">
                <rect width="91" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[559px] bg-gradient-to-r from-[#1A87FC] via-[#B800C5] to-[#1A87FC] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-[120px] relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-white text-[42px] font-bold font-['Archivo'] leading-[49px] mb-4 max-w-[396px]">
                Your{" "}
                <span className="underline decoration-white">AI-Native</span>{" "}
                Team
              </h1>
              <p className="text-[#E2CFFF] text-lg font-medium font-['Manrope'] leading-[26px] mb-8 max-w-[393px]">
                We build AI-driven products and processes that help you succeed
                tomorrow.
              </p>
              <button className="bg-[#7F3CE3] flex items-center gap-4 px-[14px] py-[14px] rounded">
                <div className="w-[38px] h-[38px] bg-[#B800C5] rounded flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
                <span className="text-white font-medium text-lg font-['Manrope']">
                  Build with Devsoko
                </span>
              </button>
            </div>
            <div className="flex-1 flex justify-end">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/322dcad28aca488b3a95e98cb5e416d0c5664ca1?width=1186"
                alt="Team collaboration"
                className="w-[593px] h-[446px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where Product Thinking Meets AI Execution */}
      <section className="py-16 container mx-auto px-[120px]">
        <div className="grid grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-[#171717] text-[35px] font-bold font-['Archivo'] leading-[53px] mb-8">
              Where{" "}
              <span className="underline decoration-[#171717]">
                Product Thinking
              </span>
              <br />
              Meets AI Execution
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-[#171717] text-lg font-normal font-['Manrope'] leading-[26px]">
              As a SaaS founder or tech leader, you know innovation moves fast
              —and{" "}
              <span className="font-bold">
                AI is now the difference between leading the market or falling
                behind
              </span>
              . But great ideas often stall without the right team, tangled in
              complexity or slowed by execution gaps.{" "}
              <span className="font-bold">Devsoko exists to change that.</span>
            </p>
            <p className="text-[#171717] text-lg font-normal font-['Manrope'] leading-[26px]">
              We simplify the product development journey with AI, helping you
              build smarter, launch faster, and scale with confidence. By
              turning AI complexity into clear, actionable outcomes,{" "}
              <span className="font-bold">
                we keep you ahead of the curve, not catching up to it.
              </span>
            </p>
          </div>
        </div>

        {/* Trusted by section */}
        <div className="mt-16 border border-[#E2E2E2] p-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#B800C5] text-sm font-bold font-['Manrope'] uppercase tracking-wider mb-2">
                Trusted by
                <br />
                Startups & Enterprises
              </p>
            </div>
            <div className="flex items-center gap-16">
              <div className="w-[100px] h-[42px] flex items-center justify-center">
                <svg
                  viewBox="0 0 101 43"
                  fill="none"
                  className="w-[100px] h-[42px]"
                >
                  <path
                    d="M25.9574 11.635H23.9442C23.5734 11.635 23.2555 11.9529 23.2555 12.3237V12.6946L23.1496 12.5886C22.09 11.7409 20.7655 11.3701 19.2292 11.3701C17.0041 11.4231 15.2028 12.1648 13.8254 13.6482C12.5009 15.1316 11.8652 16.9328 11.8652 19.0519C11.8652 21.1711 12.5009 23.0253 13.8254 24.4557C15.2028 25.9391 16.9511 26.6808 19.1232 26.6808C20.7126 26.6808 22.09 26.31 23.1496 25.4623L23.2555 25.3563V25.7272C23.2555 26.098 23.5734 26.4159 23.9442 26.4159H25.9574C26.3283 26.4159 26.6461 26.098 26.6461 25.7272V12.3237C26.6991 11.9529 26.3283 11.635 25.9574 11.635ZM22.3019 22.2306C21.6132 23.0783 20.6066 23.5021 19.3881 23.5021C18.1696 23.5021 17.163 23.0783 16.4213 22.2306C15.6796 21.383 15.3088 20.3764 15.3088 19.0519C15.3088 17.7805 15.6796 16.7209 16.4213 15.8732C17.216 14.9726 18.1696 14.6018 19.3881 14.6018C20.6596 14.6018 21.5602 14.9726 22.3549 15.8732C23.0436 16.7209 23.4145 17.7275 23.4145 19.0519C23.3615 20.3764 23.0436 21.383 22.3019 22.2306Z"
                    fill="#475569"
                  />
                  <path
                    d="M44.4994 14.6549C45.294 14.6549 45.9298 14.9198 46.4066 15.4496C46.9364 16.0854 47.1483 16.8271 47.1483 17.7277V25.8334C47.1483 26.2042 47.4662 26.5221 47.837 26.5221H49.8502C50.221 26.5221 50.5389 26.2042 50.5389 25.8334V17.6747C50.5389 15.8734 49.9561 14.3901 48.8436 13.1716C48.3138 12.6418 47.6781 12.218 46.9894 11.9001C46.3006 11.5292 45.5589 11.4233 44.8172 11.4233C44.0756 11.4233 43.3868 11.5292 42.8041 11.7941C41.7445 12.165 40.8969 12.7477 40.2611 13.5424L40.2081 13.5954L40.1552 13.5424C39.7843 13.0656 39.2545 12.6418 38.7248 12.2709C37.8771 11.7411 36.8705 11.4233 35.8639 11.4233C34.5395 11.4233 33.4269 11.7941 32.5793 12.4299L32.5263 12.5358V12.3239C32.5263 11.9531 32.2084 11.6352 31.8376 11.6352H29.8244C29.4536 11.6352 29.1357 11.9531 29.1357 12.3239V25.8334C29.1357 26.2042 29.4536 26.5221 29.8244 26.5221H31.8376C32.2084 26.5221 32.5263 26.2042 32.5263 25.8334V17.7807C32.5263 16.7741 32.7912 16.0324 33.4269 15.5026C34.0097 14.9728 34.6454 14.7079 35.4931 14.7079C36.2878 14.7079 36.9235 14.9728 37.4003 15.5026C37.9301 16.1383 38.142 16.88 38.142 17.7807V25.8863C38.142 26.2572 38.4599 26.575 38.8307 26.575H40.8439C41.2147 26.575 41.5326 26.2572 41.5326 25.8863V17.8336C41.5326 16.8271 41.7975 16.0854 42.4332 15.5556C42.963 14.9198 43.5987 14.6549 44.4994 14.6549Z"
                    fill="#475569"
                  />
                  <path
                    d="M66.0619 11.6352H64.0487C63.6779 11.6352 63.36 11.9531 63.36 12.3239V12.6948L63.2541 12.6418C62.1945 11.7941 60.87 11.4233 59.3337 11.4233C57.1086 11.4233 55.3073 12.165 53.9299 13.6484C52.6054 15.0788 51.9697 16.88 51.9697 19.0521C51.9697 21.1713 52.6054 23.0255 53.9299 24.4559C55.3073 25.9393 57.0556 26.681 59.2277 26.681C60.8171 26.681 62.1945 26.3102 63.2541 25.4625L63.36 25.3565V25.7274C63.36 26.0982 63.6779 26.4161 64.0487 26.4161H66.0619C66.4328 26.4161 66.7506 26.0982 66.7506 25.7274V12.3239C66.7506 11.9531 66.4328 11.6352 66.0619 11.6352ZM62.4064 22.2308C61.7177 23.0785 60.7111 23.5023 59.4396 23.5023C58.2211 23.5023 57.2145 23.1315 56.4728 22.2308C55.7311 21.3832 55.3603 20.3766 55.3603 19.0521C55.3603 17.7277 55.7311 16.7211 56.4728 15.8734C57.2145 14.9728 58.2211 14.602 59.4396 14.602C60.7111 14.602 61.6117 14.9728 62.4064 15.8734C63.0951 16.7211 63.466 17.7277 63.466 19.0521C63.466 20.3766 63.0951 21.3832 62.4064 22.2308Z"
                    fill="#475569"
                  />
                  <path
                    d="M82.8031 11.635H80.79C80.4191 11.635 80.1012 11.9529 80.1012 12.3237V12.6946L79.9953 12.5886C78.9357 11.7939 77.6113 11.3701 76.0749 11.3701C73.8498 11.3701 72.0485 12.1118 70.6711 13.5422C69.3467 14.9726 68.7109 16.7739 68.7109 18.84C68.7109 20.9592 69.3467 22.7604 70.6711 24.1378C72.0485 25.5683 73.7968 26.31 75.916 26.31C77.5053 26.31 78.8827 25.8861 79.9423 25.0385L80.0483 24.9325V25.1974C80.0483 26.3629 79.7304 27.3165 79.2006 27.8993C78.6178 28.4821 77.6642 28.7999 76.2868 28.7999C73.6909 28.7999 73.1611 27.5285 73.0021 27.1046C72.8962 26.8397 72.6313 26.6808 72.3664 26.6808H70.1413C69.7705 26.6808 69.4526 26.9987 69.4526 27.3695C69.4526 27.4755 69.4526 27.4755 69.5056 27.5814C69.9294 28.9059 70.7241 30.0184 71.9426 30.8131C73.1081 31.6078 74.6975 31.9786 76.7106 31.9786C78.7238 31.9786 80.4191 31.3959 81.6376 30.2833C82.8561 29.1708 83.5448 27.4755 83.5448 25.3563V12.3237C83.4918 11.9529 83.174 11.635 82.8031 11.635ZM79.1476 22.0717C78.7768 22.4425 78.3529 22.7604 77.8761 22.9723C77.3993 23.1842 76.8166 23.3432 76.1808 23.3432C74.9094 23.3432 73.9558 22.9723 73.2141 22.1247C72.4724 21.277 72.1015 20.2704 72.1015 18.999C72.1015 17.7275 72.4724 16.7209 73.2141 15.9262C73.9558 15.0786 74.9094 14.7077 76.1808 14.7077C77.3993 14.7077 78.353 15.0786 79.1476 15.9262C79.8363 16.7209 80.2072 17.7805 80.2072 19.0519C80.2072 20.2704 79.8363 21.277 79.1476 22.0717Z"
                    fill="#475569"
                  />
                  <path
                    d="M89.0543 11.5288H87.0412C86.6703 11.5288 86.3525 11.8467 86.3525 12.2176V25.4621C86.3525 25.833 86.6703 26.1508 87.0412 26.1508H89.0543C89.4252 26.1508 89.7431 25.833 89.7431 25.4621V12.2176C89.6901 11.7937 89.3722 11.5288 89.0543 11.5288Z"
                    fill="#475569"
                  />
                </svg>
              </div>
              <div className="w-[100px] h-[42px] flex items-center justify-center">
                <svg
                  viewBox="0 0 101 43"
                  fill="none"
                  className="w-[100px] h-[42px]"
                >
                  <path
                    d="M30.7339 3.80479H69.6488L84.5324 21.2168L69.6547 38.3895H30.7339L15.7971 21.1577L30.7339 3.80479ZM70.591 1.87012H29.7947L13.2422 21.0957L29.7976 40.2001H70.591L87.0844 21.1577L70.591 1.87012Z"
                    fill="#475569"
                  />
                  <path
                    d="M61.2955 16.0388C62.0015 16.027 62.7281 16.2367 63.1918 16.5823C64.2788 17.3857 64.5594 18.1566 64.5623 20.3187V27.6468H62.1669L62.1698 20.4073C62.1698 20.3731 62.1699 20.3391 62.1699 20.3052C62.1708 19.7041 62.1716 19.155 61.8892 18.7356C61.6086 18.3191 61.0593 18.1448 60.6605 18.1625C59.7685 18.2009 59.287 18.833 59.287 19.409V27.6498H56.8916V11.8623H59.287V16.7034C59.7951 16.2958 60.5276 16.0507 61.2955 16.0388Z"
                    fill="#475569"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.2064 16.0391C43.7777 16.0391 45.6947 16.7628 46.0343 20.1389C46.0639 20.4549 46.1023 21.5862 46.1023 21.9997C46.1023 22.9183 46.0521 23.6833 46.0403 23.8605C45.8837 26.3357 44.4541 27.9011 42.2064 27.9011C39.9616 27.9011 38.5231 26.3593 38.3725 23.8605C38.3712 23.8394 38.3693 23.8116 38.367 23.7775C38.3485 23.5016 38.3026 22.8173 38.3105 21.9997C38.3223 20.7385 38.3548 20.3456 38.3754 20.1329C38.6206 17.4569 39.9763 16.0391 42.2064 16.0391ZM43.6565 24.0862C43.6719 23.919 43.7157 23.4447 43.7157 22.0026C43.7157 20.4549 43.6566 19.811 43.6537 19.7933C43.6389 18.9308 43.187 18.0595 42.2064 18.0595C41.2257 18.0595 40.7738 18.9338 40.762 19.8051C40.762 19.8051 40.7618 19.8079 40.7614 19.8127C40.755 19.889 40.7 20.545 40.7 22.0026C40.7 23.5474 40.7591 24.0702 40.762 24.0761C40.8063 24.912 41.211 25.8808 42.2064 25.8808C43.2047 25.8808 43.571 24.974 43.6537 24.1175C43.6545 24.1084 43.6554 24.0981 43.6565 24.0862Z"
                    fill="#475569"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M71.4921 24.1351C71.5187 23.9224 71.5157 23.7452 71.5157 23.7452L73.8196 23.7482C73.666 26.3681 72.2128 27.907 70.0448 27.907C67.8709 27.907 66.4176 26.3238 66.2729 23.8663C66.2717 23.8428 66.2697 23.8084 66.2671 23.7643C66.2507 23.4819 66.2109 22.8 66.2109 22.0055C66.2109 20.7683 66.2462 20.4103 66.2699 20.1694C66.2709 20.159 66.2719 20.1488 66.2729 20.1388C66.5358 17.4479 67.8856 16.042 70.0418 16.042C71.1642 16.042 72.1124 16.4791 72.7828 17.3062C73.3618 18.0239 73.7398 19.1286 73.8137 20.1417C73.8494 20.6723 73.862 20.9767 73.8703 21.1738C73.8723 21.2214 73.874 21.2628 73.8757 21.2996C73.8905 21.7781 73.8816 22.5726 73.8816 22.5726H68.5413C68.5391 23.3073 68.5657 23.6496 68.5839 23.8829C68.5897 23.9573 68.5946 24.0206 68.5975 24.0819C68.6624 24.9828 69.0464 25.8837 70.0389 25.8837C71.2056 25.8837 71.4241 24.6933 71.4921 24.1351ZM68.5686 20.192C68.5656 20.2895 68.5618 20.4145 68.5561 20.5818H71.5452C71.5474 20.4143 71.5358 20.2544 71.5214 20.0563C71.5158 19.9784 71.5097 19.8946 71.5039 19.802C71.4625 19.1788 71.1938 18.0535 70.0448 18.0623C69.076 18.0712 68.6536 18.8539 68.5856 19.7991C68.5776 19.9015 68.575 19.9848 68.5686 20.192Z"
                    fill="#475569"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.6413 22.7939L36.8865 26.6691C36.9043 27.1399 36.9835 27.5274 37.0032 27.6237C37.0064 27.6392 37.0076 27.6468 37.0076 27.6468H34.6417C34.6417 27.6468 34.5442 27.2037 34.5235 26.6839L34.2784 23.0154C34.1484 21.1457 33.2919 20.4811 32.5298 20.4811H31.2154V27.6468H28.8525V11.9863H32.5091C34.748 12.01 36.6502 13.0851 36.662 16.151C36.6709 18.1625 35.832 19.1254 35.1852 19.5153C36.0831 20.0381 36.535 21.0601 36.6413 22.7939ZM32.3496 14.0037H31.2154L31.2125 18.4579H32.4619C33.9062 18.4579 34.2104 17.2498 34.2784 16.5557C34.2872 16.4759 34.2902 16.3992 34.2902 16.1865C34.2902 16.0579 34.2857 15.9715 34.282 15.9014C34.2806 15.8732 34.2792 15.8477 34.2784 15.8232C34.2488 14.6565 33.5813 14.0037 32.3496 14.0037Z"
                    fill="#475569"
                  />
                  <path
                    d="M52.9991 24.076C53.0079 23.9637 53.0197 23.8072 53.0286 23.6359H55.3974C55.4012 23.6771 55.3966 23.7195 55.3913 23.7692C55.3882 23.7978 55.3848 23.8288 55.3827 23.8633C55.1611 26.4921 53.8763 27.9128 51.5488 27.904C49.304 27.8981 47.8685 26.3621 47.7149 23.8633L47.7142 23.8541C47.6983 23.6483 47.6412 22.907 47.6529 22.0025C47.6647 20.7413 47.6972 20.3484 47.7179 20.1358C47.963 17.4597 49.3217 16.042 51.5488 16.042C53.1202 16.042 55.1139 16.8335 55.3827 20.1062C55.3866 20.1575 55.3906 20.2324 55.3954 20.3239C55.3978 20.3696 55.4004 20.4194 55.4034 20.4725H53.0345C53.022 20.0846 53.0052 19.8748 53.0004 19.8144C52.9995 19.8035 52.9991 19.7961 52.9991 19.7961C52.9872 18.9336 52.5649 18.0564 51.5547 18.0623C50.5741 18.0682 50.196 18.8273 50.1103 19.805C50.1088 19.8214 50.1071 19.8386 50.1054 19.8566C50.0804 20.1133 50.0373 20.5564 50.0483 22.0025C50.0504 22.3138 50.0513 22.5713 50.0521 22.7889C50.0547 23.498 50.0558 23.7833 50.0897 24.1292C50.1635 24.8735 50.5564 25.8807 51.5547 25.8807C52.6239 25.8807 52.9311 24.9503 52.9991 24.076Z"
                    fill="#475569"
                  />
                </svg>
              </div>
              <div className="w-[100px] h-[42px] flex items-center justify-center">
                <svg
                  viewBox="0 0 101 43"
                  fill="none"
                  className="w-[100px] h-[42px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.64275 12.3906C6.94706 12.3935 6.25136 12.3964 5.55566 12.3964C5.58051 18.4276 5.58051 24.4588 5.55566 30.4901C7.39429 30.5164 9.20808 30.5164 11.0467 30.4901C11.0095 27.2514 11.0141 24.0276 11.0188 20.7963C11.0203 19.7182 11.0219 18.6392 11.0219 17.5585C12.6174 17.6227 13.2772 19.1314 13.882 20.5142C14.0212 20.8325 14.1575 21.1442 14.3016 21.4301C14.6771 22.1465 15.0133 22.8956 15.3508 23.6474C16.0183 25.1344 16.6906 26.6321 17.6807 27.909C19.0224 29.5946 21.1095 30.6217 23.2215 30.5164C24.1283 30.5032 25.0414 30.5032 25.9545 30.5032C26.8676 30.5032 27.7808 30.5032 28.6877 30.4901C28.6752 29.5419 28.6752 28.6004 28.6752 27.6588C28.6752 26.7173 28.6752 25.7757 28.6628 24.8276C27.2714 24.3272 26.1285 22.8523 26.3024 21.2194C26.3273 19.7182 27.3957 18.533 28.6628 18.0062C28.6877 16.11 28.6877 14.24 28.6877 12.3701C28.0739 12.3701 27.4628 12.373 26.8527 12.376C25.6353 12.3818 24.4214 12.3876 23.1966 12.3701C23.1966 13.4512 23.1951 14.5306 23.1935 15.6088C23.1889 18.8384 23.1842 22.0568 23.2215 25.2753C22.327 25.249 21.5319 24.6695 21.1344 23.8268C20.4704 22.5341 19.8582 21.2101 19.2453 19.8847C18.7344 18.7797 18.223 17.6737 17.6807 16.584C16.4881 14.319 14.3016 12.5545 11.817 12.3964C10.4256 12.3789 9.03415 12.3847 7.64275 12.3906ZM43.5907 12.388C39.163 12.3923 34.7344 12.3966 30.3037 12.3966C30.3236 13.1445 30.3276 13.8925 30.3316 14.6405C30.3375 15.7624 30.3435 16.8844 30.4031 18.0064C31.8691 18.5595 32.9872 20.166 32.7387 21.8779C32.6145 23.3001 31.5958 24.3273 30.4031 24.8277C30.3907 25.7627 30.3907 26.6976 30.3907 27.6359C30.3907 28.5741 30.3907 29.5157 30.3783 30.4638C33.2317 30.4939 36.0931 30.4896 38.9581 30.4853C41.1075 30.4821 43.2589 30.4789 45.4103 30.4902C47.3483 30.5165 49.4354 29.9898 50.8268 28.4622C52.2679 26.9873 52.7897 24.775 52.8642 22.7207C52.9388 20.6928 52.9885 18.6385 52.4915 16.6632C53.8332 16.65 55.1812 16.65 56.5291 16.65C57.877 16.65 59.2249 16.65 60.5666 16.6368C60.5832 19.728 60.5776 22.8075 60.5721 25.8831C60.5694 27.4195 60.5666 28.9548 60.5666 30.4902H65.834C65.8506 27.4175 65.8451 24.3448 65.8396 21.2722C65.8368 19.7358 65.834 18.1995 65.834 16.6632C66.6448 16.6632 67.4583 16.6603 68.2727 16.6573C69.9042 16.6515 71.5395 16.6456 73.1637 16.6632C74.5948 19.4285 76.0528 22.1939 77.5107 24.9592C78.4828 26.8029 79.4548 28.6465 80.4188 30.4902H87.0777C89.8356 24.9857 92.5936 19.4813 95.3267 13.9505C95.6 13.4237 95.923 12.9233 96.246 12.4229C95.019 12.3735 93.8018 12.3756 92.5882 12.3776C91.8603 12.3789 91.1337 12.3801 90.4071 12.3702C89.3425 14.4536 88.3109 16.5603 87.2787 18.6684C86.1187 21.0374 84.9578 23.4082 83.7483 25.7495C82.4183 23.1599 81.0632 20.5792 79.7073 17.9971C78.7326 16.1411 77.7576 14.2843 76.7913 12.4229C65.7178 12.3665 54.6569 12.3772 43.5907 12.388ZM35.6737 23.8022C35.6783 21.4401 35.683 19.0854 35.6457 16.7159C38.6521 16.6368 41.6585 16.6632 44.6649 16.7159C45.9073 16.6895 47.2987 17.4796 47.4229 18.9018C47.4726 20.6664 47.4974 22.431 47.398 24.1956C47.2241 25.5651 45.8327 26.2499 44.6649 26.1972C43.9207 26.1972 43.1749 26.1989 42.428 26.2005C40.1825 26.2054 37.9265 26.2104 35.6706 26.1709C35.6706 25.38 35.6721 24.5907 35.6737 23.8022Z"
                    fill="#475569"
                  />
                  <path
                    d="M26.3017 21.2189C26.3265 19.7177 27.3949 18.5062 28.6621 18.0058C29.2087 17.9531 29.7802 17.9531 30.3268 18.0058C31.7927 18.5852 32.9108 20.1655 32.6623 21.8774C32.5629 23.2732 31.5194 24.3267 30.3268 24.8271C29.7802 24.8798 29.2087 24.8798 28.6621 24.8271C27.2707 24.3267 26.1277 22.8782 26.3017 21.2189Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-[100px] h-[42px] flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5bdc6fedffd9c8f30bc00f07a0b3ce70e27894b?width=200"
                  alt="Synergy"
                  className="w-[100px] h-[42px] object-contain"
                />
              </div>
              <div className="w-[100px] h-[42px] flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a06f3c9a066a816b040e4904ffc46bf43dc80d64?width=200"
                  alt="Tufts"
                  className="w-[100px] h-[42px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#F1F5F9] py-16">
        <div className="container mx-auto px-[120px]">
          <div className="grid grid-cols-4 gap-16">
            <div>
              <h3 className="text-[35px] font-normal font-['Archivo'] leading-[53px] mb-4">
                <span className="text-[#171717]">11</span>
                <span className="text-[#B800C5]">+</span>
              </h3>
              <h4 className="text-[#171717] text-[21px] font-medium font-['Archivo'] leading-[32px] mb-4">
                Years of Excellence
              </h4>
              <p className="text-[#374252] text-base font-medium font-['Manrope'] leading-[26px]">
                Delivering outstanding work and exceeding expectations for more
                than 11 years
              </p>
            </div>
            <div>
              <h3 className="text-[35px] font-normal font-['Archivo'] leading-[53px] mb-4">
                <span className="text-[#171717]">70</span>
                <span className="text-[#B800C5]">+</span>
              </h3>
              <h4 className="text-[#171717] text-[21px] font-medium font-['Archivo'] leading-[32px] mb-4">
                Experts
              </h4>
              <p className="text-[#374252] text-base font-medium font-['Manrope'] leading-[26px]">
                A highly skilled and passionate team dedicated to your success.
              </p>
            </div>
            <div>
              <h3 className="text-[35px] font-normal font-['Archivo'] leading-[53px] mb-4">
                <span className="text-[#171717]">150</span>
                <span className="text-[#B800C5]">+</span>
              </h3>
              <h4 className="text-[#171717] text-[21px] font-medium font-['Archivo'] leading-[32px] mb-4">
                Success Stories
              </h4>
              <p className="text-[#374252] text-base font-medium font-['Manrope'] leading-[26px]">
                Proven track record of delivering exceptional projects across
                diverse industries.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-[35px] font-normal font-['Archivo'] leading-[53px] text-[#171717]">
                  4.7
                </h3>
                <Star className="w-5 h-5 fill-[#B800C5] text-[#B800C5]" />
              </div>
              <h4 className="text-[#171717] text-[21px] font-medium font-['Archivo'] leading-[32px] mb-4">
                Clutch Ratings
              </h4>
              <p className="text-[#374252] text-base font-medium font-['Manrope'] leading-[26px]">
                Consistently trusted and highly rated by satisfied clients
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-16 container mx-auto px-[120px]">
        <h2 className="text-[#171717] text-[35px] font-bold font-['Archivo'] leading-[53px] text-center mb-16 underline decoration-[#171717]">
          Founding Team
        </h2>

        {/* Karan Shah */}
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-4">
            <h3 className="text-[#171717] text-[30px] font-bold font-['Archivo'] leading-[49px] mb-2">
              Karan Shah
            </h3>
            <p className="text-[#B800C5] text-[21px] font-bold font-['Manrope'] tracking-[1.4px] uppercase mb-6">
              Co-Founder & CEO
            </p>
            <div className="flex border border-[#E9E9E9]">
              <div className="flex items-center justify-center w-[53px] h-[52px] border-r border-[#E9E9E9]">
                <Linkedin className="w-6 h-6 text-[#BCBCBC]" />
              </div>
              <div className="flex items-center justify-center w-[53px] h-[52px]">
                <Twitter className="w-6 h-6 text-[#BCBCBC]" />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/def6b472f223632e90ba66cbc21827d7fd139250?width=766"
              alt="Karan Shah"
              className="w-full h-[490px] object-cover"
            />
          </div>
          <div className="col-span-4 space-y-6">
            <p className="text-[#171717] text-lg font-bold font-['Manrope'] leading-[26px]">
              Karan Shah is an AI-native builder, sitting at the intersection of
              Technology, Marketing, Sales, and Design.
            </p>
            <p className="text-[#171717] text-lg font-medium font-['Manrope'] leading-[26px]">
              With 15+ years of experience, I've brought unique perspectives
              that have helped SaaS companies create intelligent solutions and
              craft GTM strategies that drive growth.
            </p>
            <p className="text-[#171717] text-lg font-medium font-['Manrope'] leading-[26px]">
              Apart from work, I indulge in a variety of sports, travelling,
              scuba diving, reading, and spending time with my two beautiful
              daughters.
            </p>
          </div>
        </div>

        {/* Prakash Donga */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <h3 className="text-[#171717] text-[30px] font-bold font-['Archivo'] leading-[49px] mb-2">
              Prakash Donga
            </h3>
            <p className="text-[#B800C5] text-[21px] font-bold font-['Manrope'] tracking-[1.4px] uppercase mb-6">
              Founder & CTO
            </p>
            <div className="flex border border-[#E9E9E9]">
              <div className="flex items-center justify-center w-[53px] h-[52px] border-r border-[#E9E9E9]">
                <Linkedin className="w-6 h-6 text-[#BCBCBC]" />
              </div>
              <div className="flex items-center justify-center w-[53px] h-[52px]">
                <Twitter className="w-6 h-6 text-[#BCBCBC]" />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec3af90ab81d9228841913ba00faae5e7442984e?width=766"
              alt="Prakash Donga"
              className="w-full h-[490px] object-cover"
            />
          </div>
          <div className="col-span-4 space-y-6">
            <p className="text-[#171717] text-lg font-bold font-['Manrope'] leading-[26px]">
              Prakash is the techno-functional backbone of Devsoko, with 15+
              years of turning bold ideas into beautifully engineered products.
            </p>
            <p className="text-[#171717] text-lg font-medium font-['Manrope'] leading-[26px]">
              I lead engineering at Devsoko, making sure we innovate
              continuously and uphold quality standards. I love building
              rock-solid teams and systems from scratch.
            </p>
            <p className="text-[#171717] text-lg font-medium font-['Manrope'] leading-[26px]">
              When I am off the clock, I will be spending time with family,
              geeking out on the latest tech trends, or recharging with some me
              time.
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo Gallery */}
      <section className="relative mb-16">
        <div className="w-full max-w-[1200px] mx-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b10c6d870edc89660f3952fbc0b0c29d4ac0b417?width=2400"
            alt="Team working together"
            className="w-full h-[490px] object-cover"
          />
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-3">
            <button
              className={`w-[85px] h-1 rounded-full ${activeCarouselIndex === 0 ? "bg-white" : "bg-white/30"}`}
              onClick={() => setActiveCarouselIndex(0)}
            />
            <button
              className={`w-[85px] h-1 rounded-full ${activeCarouselIndex === 1 ? "bg-white" : "bg-white/30"}`}
              onClick={() => setActiveCarouselIndex(1)}
            />
            <button
              className={`w-[85px] h-1 rounded-full ${activeCarouselIndex === 2 ? "bg-white" : "bg-white/30"}`}
              onClick={() => setActiveCarouselIndex(2)}
            />
          </div>
        </div>
      </section>

      {/* Devsoko Values */}
      <section className="py-16 relative overflow-hidden">
        {/* Purple sidebar */}
        <div className="absolute left-0 top-0 w-[155px] h-full bg-[#B800C5]"></div>

        <div className="container mx-auto px-[120px] relative z-10">
          <h2 className="text-[#171717] text-[35px] font-bold font-['Archivo'] leading-[53px] text-center mb-16 underline decoration-[#171717]">
            Devsoko Values
          </h2>

          <div className="ml-[155px] grid grid-cols-2">
            {/* Integrity */}
            <div className="p-12 border border-[#E9E9E9] border-b-0">
              <div className="flex items-center justify-center w-[100px] h-[99px] mb-8 mx-auto">
                <svg
                  viewBox="0 0 101 100"
                  fill="none"
                  className="w-[100px] h-[99px]"
                >
                  <rect width="100" height="98.8636" fill="#E5E7EB" />
                </svg>
              </div>
              <h3 className="text-[#171717] text-[21px] font-medium font-['Archivo'] leading-[32px] text-center mb-4">
                Integrity
              </h3>
              <p className="text-[#374252] text-base font-medium font-['Manrope'] leading-[26px] text-center">
                The most important core value, working with integrity cuts
                across relationships with clients, our internal team, and
                partners we work with.
              </p>
            </div>

            {/* Agility */}
            <div className="p-12 border border-[#E9E9E9] border-l-0 border-b-0">
              <div className="flex items-center justify-center w-[100px] h-[99px] mb-8 mx-auto">
                <svg
                  viewBox="0 0 101 100"
                  fill="none"
                  className="w-[100px] h-[99px]"
                >
                  <rect width="100" height="98.8636" fill="#E5E7EB" />
                </svg>
              </div>
              <h3 className="text-[#171717] text-[21px] font-medium font-['Archivo'] leading-[32px] text-center mb-4">
                Agility
              </h3>
              <p className="text-[#374252] text-base font-medium font-['Manrope'] leading-[26px] text-center">
                Being agile is not limited to just adapting and implementing new
                industry trends and technologies but it also means that we're
                receptive to client feedback, project challenges, or team
                dynamics.
              </p>
            </div>

            {/* Empathy */}
            <div className="p-12 border border-[#E9E9E9] border-t-0">
              <div className="flex items-center justify-center w-[100px] h-[99px] mb-8 mx-auto">
                <svg
                  viewBox="0 0 101 100"
                  fill="none"
                  className="w-[100px] h-[99px]"
                >
                  <rect width="100" height="98.8636" fill="#E5E7EB" />
                </svg>
              </div>
              <h3 className="text-[#171717] text-[21px] font-medium font-['Archivo'] leading-[32px] text-center mb-4">
                Empathy
              </h3>
              <p className="text-[#374252] text-base font-medium font-['Manrope'] leading-[26px] text-center">
                We can only grow together, and nothing is more important that
                having compassion for the people we work with: internally as
                well as clients.
              </p>
            </div>

            {/* Ownership */}
            <div className="p-12 border border-[#E9E9E9] border-l-0 border-t-0">
              <div className="flex items-center justify-center w-[100px] h-[99px] mb-8 mx-auto">
                <svg
                  viewBox="0 0 101 100"
                  fill="none"
                  className="w-[100px] h-[99px]"
                >
                  <rect width="100" height="98.8636" fill="#E5E7EB" />
                </svg>
              </div>
              <h3 className="text-[#171717] text-[21px] font-medium font-['Archivo'] leading-[32px] text-center mb-4">
                Ownership
              </h3>
              <p className="text-[#374252] text-base font-medium font-['Manrope'] leading-[26px] text-center">
                Taking ownership underscores the need to be responsible about
                the work you undertake, ensure timely execution of high quality
                deliverables and being accountable for the outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos Collage & Join The Team */}
      <section className="py-16">
        <div className="container mx-auto px-[120px]">
          <div className="grid grid-cols-12 auto-rows-min">
            {/* Row 1 */}
            <div className="col-span-3 row-span-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4ed927acab75b698f75060f0112c08d5e3055e8?width=725"
                alt="Team member"
                className="w-full h-[480px] object-cover"
              />
            </div>

            <div className="col-span-2 bg-[#B800C5] flex flex-col justify-center items-center h-[135px]">
              <h3 className="text-white text-[37px] font-bold font-['Archivo'] leading-[32px] mb-2">
                70+
              </h3>
              <p className="text-white text-sm font-bold font-['Manrope'] uppercase tracking-wider">
                Team Members
              </p>
            </div>

            <div className="col-span-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/410e26a03f19005c3c70d54f83b3708b5eba7904?width=980"
                alt="Team collaboration"
                className="w-full h-[135px] object-cover"
              />
            </div>

            <div className="col-span-3 row-span-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5f2c68247bfa70b89f95b6fcf9be72a3e4eac63?width=725"
                alt="Team celebration"
                className="w-full h-[265px] object-cover"
              />
            </div>

            {/* Row 2 */}
            <div className="col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3e57031a41f570f0d773d77090bb926cdfa8dc?width=469"
                alt="Team working"
                className="w-full h-[324px] object-cover"
              />
            </div>

            <div className="col-span-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4efdba96cd6488b468b5462292a6313ad99f1fae?width=980"
                alt="Team meeting"
                className="w-full h-[324px] object-cover"
              />
            </div>

            <div className="col-span-6 bg-[#B800C5] flex flex-col justify-center px-12 h-[265px]">
              <h2 className="text-white text-[35px] font-bold font-['Archivo'] leading-[53px] mb-6">
                Join The Team
              </h2>
              <p className="text-white/70 text-lg font-medium font-['Manrope'] leading-[26px] mb-8 max-w-[353px]">
                We can't wait to welcome you and help you thrive in our fun,
                engaging, and ever-so-slightly quirky work environment.
              </p>
              <div className="flex border border-white w-fit">
                <div className="flex items-center justify-center px-6 py-2 border-r border-white">
                  <span className="text-white text-sm font-medium font-['Manrope'] tracking-wider">
                    Work With Us
                  </span>
                </div>
                <div className="flex items-center justify-center w-10 h-10">
                  <svg viewBox="0 0 25 25" fill="none" className="w-6 h-6">
                    <path
                      d="M16.8366 11.7597L11.4726 6.39566L12.8868 4.98145L20.665 12.7597L12.8868 20.5378L11.4726 19.1236L16.8366 13.7597H4.66504V11.7597H16.8366Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
