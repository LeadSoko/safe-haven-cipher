import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ServiceDetails() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#F6F9FC] via-[#F6F9FC] to-white px-4 md:px-6 lg:px-[180px] py-16">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="relative">
                {/* Orange accent lines */}
                <div className="absolute -right-4 top-0 bottom-0 w-[52px] flex flex-col justify-center items-center gap-4">
                  <div className="w-[10px] h-full bg-[#FFA766] rounded-full"></div>
                  <div className="w-[10px] h-full bg-[#FFA766] rounded-full"></div>
                  <div className="w-[10px] h-full bg-[#FFA766] rounded-full"></div>
                </div>
                
                <h1 className="text-[48px] font-medium leading-[60px] text-[#213343] font-['Lexend_Deca'] mb-6">
                  Generate More<br />
                  Qualified Leads<br />
                  With Marketing Hub
                </h1>
                
                <p className="text-lg font-light leading-8 text-[#213343] font-['Lexend_Deca'] mb-8 max-w-[452px]">
                  Create, publish, and measure omnichannel marketing campaigns to attract and capture high-quality leads.
                </p>
                
                <div className="flex gap-6">
                  <button className="bg-[#0F62FE] text-white px-[42px] py-[22px] text-lg font-medium font-['Lexend_Deca'] hover:bg-blue-700 transition-colors">
                    Get a demo
                  </button>
                  <button className="border-2 border-[#0F62FE] text-[#0F62FE] bg-white px-[42px] py-[22px] text-lg font-medium font-['Lexend_Deca'] hover:bg-blue-50 transition-colors">
                    Get started free
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Content - Video/Image */}
            <div className="flex justify-center">
              <div className="relative w-[524px] h-[307px] bg-black rounded overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/def2680da32f687c8afb40e61dcc39d50dbddab7?width=1048" 
                  alt="Marketing Hub Demo"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px] bg-[#FF7A59] rounded-full opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg width="84" height="85" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0746 11.428L71.4267 40.8305C72.0187 41.1474 72.5006 41.949 72.5006 42.6195C72.5006 43.2901 72.0187 44.0942 71.4267 44.4085L17.0746 73.8032C16.8258 73.9368 16.3936 74.0468 16.1133 74.0468C14.9949 74.0468 14.0859 73.1405 14.0859 72.022V13.2144C14.0859 12.0933 14.9949 11.187 16.1133 11.187C16.3962 11.187 16.8258 11.2944 17.0746 11.428Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] font-['Lexend_Deca'] max-w-[897px] mx-auto">
              Use HubSpot to generate high-quality leads and deliver<br />
              tangible marketing ROI.
            </h2>
            
            <p className="text-lg font-light leading-8 text-[#213343] font-['Lexend_Deca'] max-w-[963px] mx-auto">
              Marketing is evolving as consumers grow weary of more noise across channels, prompting businesses to find new ways to break through with experiences that generate high-quality conversions. Get started using this framework.
            </p>
            
            <div className="space-y-4 pt-8">
              <p className="text-lg font-light leading-8 text-[#213343] font-['Lexend_Deca']">
                1. Attract more leads by engaging customers where they are.
              </p>
              <p className="text-lg font-light leading-8 text-[#213343] font-['Lexend_Deca']">
                2. Efficiently capture leads with scalable, targeted campaigns.
              </p>
              <p className="text-lg font-light leading-8 text-[#213343] font-['Lexend_Deca']">
                3. Showcase and maximize your impact with marketing analytics tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Attract Leads */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4789d5bc7a1104d7df7a45d27b306556087ddbfe?width=1052" 
                alt="Advertising Dashboard"
                className="w-full h-auto rounded"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca']">
                1. Attract more leads by engaging<br />
                customers where they are.
              </h2>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                As a marketer, keeping up with all the channels your audience interacts with can be overwhelming. It feels like you need to do everything, everywhere, all the time.
              </p>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                Marketing Hub provides a centralized space to create and manage omnichannel campaigns.
              </p>
              
              <ul className="space-y-4 pl-8">
                <li className="text-base font-light leading-7 text-[#434343] font-['Lexend_Deca']">
                  Drive awareness with <a href="#" className="text-[#0068B1] underline font-medium">social publishing and monitoring</a> on platforms such as Facebook and LinkedIn.
                </li>
                <li className="text-base font-light leading-7 text-[#434343] font-['Lexend_Deca']">
                  Help leads find you using <a href="#" className="text-[#0068B1] underline font-medium">ad management tools</a> to create and manage PPC campaigns.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Capture Leads */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:order-1">
              <h2 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca']">
                2. Efficiently capture leads with scalable,<br />
                targeted campaigns.
              </h2>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                Personalized user experiences create brand loyalty. But to personalize an experience, you must know your customer and prospect's preferences.
              </p>
              
              <ul className="space-y-4 pl-8">
                <li className="text-base font-light leading-7 text-[#434343] font-['Lexend_Deca']">
                  Convert more of your visitors into qualified leads with <a href="#" className="text-[#0068B1] underline font-medium">calls to actions</a> you can personalize, test, and optimize.
                </li>
                <li className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                  Use an <a href="#" className="text-[#0068B1] underline font-medium">intuitive form builder</a> to create forms that collects leads from event registration, free trial offers, newsletter signups, and more.
                </li>
              </ul>
            </div>
            
            <div className="lg:order-2">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/fc5a867a6c15eb709a98f01e3eee897b376a1dd6?width=1052" 
                alt="Lead Capture Form"
                className="w-full h-auto rounded border-2 border-[#DBE4ED]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Analytics */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/76be807a5ed1aa3d42e0988f9a4b51cfa085adc5?width=1052" 
                alt="Lead Generation Analytics"
                className="w-full h-auto rounded"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca']">
                3. Showcase and maximize your impact with<br />
                marketing analytics tools.
              </h2>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                Maximize every success and seize all optimization opportunities with integrated reporting tools.
              </p>
              
              <ul className="space-y-4 pl-8">
                <li className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                  Use <a href="#" className="text-[#0068B1] underline font-medium">built-in marketing analytics tools</a> to instantly visualize metrics like contacts generated, budget allocation, and return on investment effortlessly, all at the click of a button.
                </li>
                <li className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                  Use <a href="#" className="text-[#0068B1] underline font-medium">advancement marketing reporting</a> to visualize the customer journey and capitalize on your most significant lead generation touchpoints.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] font-['Lexend_Deca'] text-center mb-12">
            With Marketing Hub, customers experienced these results:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#213343] font-['Lexend_Deca'] mb-2">134%</h3>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca'] mb-4">
                increase in their website traffic in 12 months
              </p>
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca']">
                Download ROI report
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#213343] font-['Lexend_Deca'] mb-2">133%</h3>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca'] mb-4">
                increase in their inbound leads
              </p>
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca']">
                Download ROI report
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#213343] font-['Lexend_Deca'] mb-2">82%</h3>
              <p className="text-sm font-light text-[#213343] font-['Lexend_Deca'] mb-4">
                of users see an increase in lead generation
              </p>
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca']">
                Download ROI report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium leading-[34px] text-[#213343] font-['Lexend_Deca']">
                Attract and convert leads with Marketing Hub.
              </h2>
              
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca']">
                Discover tools that connect your data to attract qualified leads, convert them to customers, and increase revenue.
              </p>
              
              <div className="flex gap-6">
                <button className="bg-[#0F62FE] text-white px-[42px] py-[22px] text-lg font-medium font-['Lexend_Deca'] hover:bg-blue-700 transition-colors">
                  Learn more
                </button>
                <button className="border-2 border-[#0F62FE] text-[#0F62FE] bg-white px-[42px] py-[22px] text-lg font-medium font-['Lexend_Deca'] hover:bg-blue-50 transition-colors">
                  Get started free
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/00ab29162031f54cda5eaacbef2e3a0bfd0de0d4?width=680" 
                alt="Marketing Hub Features"
                className="w-[340px] h-[335px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6 text-center">
          <div className="border-b-2 border-[#2E475D] pb-2 mb-8 inline-block">
            <svg width="216" height="37" viewBox="0 0 216 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[216px] h-[36px]">
              <g clipPath="url(#clip0_24_3879)">
                <mask id="mask0_24_3879" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="216" height="37">
                  <path d="M216 0.589844H0V36.5898H216V0.589844Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_24_3879)">
                  <mask id="mask1_24_3879" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="72" y="0" width="72" height="73">
                    <path d="M144 0.589844H72V72.5898H144V0.589844Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask1_24_3879)">
                    <path d="M108 72.5898C127.882 72.5898 144 56.4721 144 36.5898C144 16.7075 127.882 0.589844 108 0.589844C88.1177 0.589844 72 16.7075 72 36.5898C72 56.4721 88.1177 72.5898 108 72.5898Z" fill="#F05129"/>
                    <path d="M108 63.59C122.912 63.59 135 51.5016 135 36.5899C135 21.6781 122.912 9.58984 108 9.58984C93.0883 9.58984 81 21.6781 81 36.5899C81 51.5016 93.0883 63.59 108 63.59Z" fill="#FF7A59"/>
                    <path d="M108 54.5895C117.941 54.5895 126 46.5307 126 36.5897C126 26.6486 117.941 18.5898 108 18.5898C98.0588 18.5898 90 26.6486 90 36.5897C90 46.5307 98.0588 54.5895 108 54.5895Z" fill="#FFA994"/>
                  </g>
                  <g mask="url(#mask2_24_3879)">
                    <path d="M180.123 72.626C200.005 72.626 216.123 56.5082 216.123 36.626C216.123 16.7437 200.005 0.625977 180.123 0.625977C160.241 0.625977 144.123 16.7437 144.123 36.626C144.123 56.5082 160.241 72.626 180.123 72.626Z" fill="#FF8933"/>
                    <path d="M180 72.5895C186.321 72.5966 192.531 70.9308 198 67.7614C192.528 64.6028 187.983 60.0592 184.823 54.5873C181.664 49.1154 180 42.9081 180 36.5895C180 30.2709 181.664 24.0636 184.823 18.5917C187.983 13.1199 192.528 8.57623 198 5.41767C193.218 2.65632 187.865 1.03204 182.355 0.670507C176.845 0.308972 171.326 1.21987 166.224 3.33272C161.123 5.44558 156.576 8.70375 152.935 12.8552C149.294 17.0066 146.656 21.94 145.227 27.2737C143.798 32.6074 143.615 38.1984 144.692 43.6142C145.769 49.0299 148.078 54.1253 151.44 58.506C154.801 62.8868 159.125 66.4355 164.078 68.8776C169.03 71.3197 174.478 72.5898 180 72.5895Z" fill="#0F62FE"/>
                  </g>
                  <g mask="url(#mask3_24_3879)">
                    <path d="M1.6541e-09 36.5896C-0.000190307 55.9777 16.4213 72.5898 35.9998 72.5898C55.5783 72.5898 72 55.7898 72 36.5898C72 17.3898 56.478 0.589844 35.9998 0.589844C15.5216 0.589844 1.6541e-09 17.3898 1.6541e-09 36.5896Z" fill="#FFA994"/>
                    <path d="M72 36.5896C72.0002 56.1099 55.3423 72.5906 36 72.5898V0.589844C54.7698 0.589844 72 16.0398 72 36.5896Z" fill="#FF974D"/>
                    <path d="M35.9998 0.589844C56.2698 0.589844 72 17.2016 72 36.5896H0C0 16.7088 15.7299 0.589844 35.9998 0.589844Z" fill="#0F62FE"/>
                    <path d="M35.9998 0.589844C26.4521 0.589844 17.2954 4.38267 10.5441 11.1339C3.79283 17.8852 0 27.0419 0 36.5896H35.9998V0.589844Z" fill="#E04826"/>
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_24_3879">
                  <rect width="216" height="36" fill="white" transform="translate(0 0.589844)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          
          <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] font-['Lexend_Deca'] max-w-[918px] mx-auto mb-16">
            Discover how real businesses are using Marketing Hub to attract and convert highly qualified leads.
          </h2>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#DBE4ED] rounded-lg overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/be6dc7b9d834c544734fd8f8742d718dbdb86d94?width=684" 
                alt="Sendle Case Study"
                className="w-full h-[218px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold leading-7 text-[#213343] font-['Lexend_Deca'] mb-4">
                  Sendle Increases Activation Rates by 50%
                </h3>
                <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca'] mb-6">
                  Learn how Sendle improved its customer experience, generated more leads, and closed the loop between sales and marketing.
                </p>
                <button className="bg-[#0F62FE] text-white px-6 py-4 text-base font-medium font-['Lexend_Deca'] hover:bg-blue-700 transition-colors w-full">
                  Watch Sendle story
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-[#DBE4ED] rounded-lg overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7ac6db7835f8b935543619f0b870bef49ea1586c?width=684" 
                alt="ViSENZE Case Study"
                className="w-full h-[218px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold leading-7 text-[#213343] font-['Lexend_Deca'] mb-4">
                  ViSENZE Improves Inbound Lead Generation
                </h3>
                <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca'] mb-6">
                  See how ViSENZE used marketing tools to improve its marketing ROI and inbound strategy.
                </p>
                <button className="bg-[#0F62FE] text-white px-6 py-4 text-base font-medium font-['Lexend_Deca'] hover:bg-blue-700 transition-colors w-full">
                  Watch ViSENZE story
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-[#DBE4ED] rounded-lg overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/13322962112b1caad1a678ef2eea83b1164e15c6?width=684" 
                alt="Spocket Case Study"
                className="w-full h-[217px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold leading-7 text-[#213343] font-['Lexend_Deca'] mb-4">
                  Spocket Doubles Prospect Conversions
                </h3>
                <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca'] mb-6">
                  Discover how Spocket automated its marketing to better engage and track leads.
                </p>
                <button className="bg-[#0F62FE] text-white px-6 py-4 text-base font-medium font-['Lexend_Deca'] hover:bg-blue-700 transition-colors w-full">
                  Watch Spocket story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] font-['Lexend_Deca'] text-center mb-16">
            Related Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/97b4394dcdfdd4bb22022ef99c1df54f3596b1bb?width=256" 
                alt="ROI Icon"
                className="w-32 h-32 mx-auto mb-6"
              />
              <h3 className="text-lg font-semibold leading-7 text-[#213343] font-['Lexend_Deca'] mb-4">
                Everything You Need to Know About Marketing Qualified Leads
              </h3>
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca'] mb-6">
                Learn everything you need to know about marketing qualified leads and how to create your own MQL criteria.
              </p>
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca']">
                Read about MQLs
              </a>
            </div>
            
            <div className="text-center">
              <svg width="113" height="114" viewBox="0 0 113 114" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-[113px] mx-auto mb-6">
                <path d="M108.83 16.9602L3.83008 17.1089V11.5002C3.8324 10.6453 4.17359 9.82635 4.77885 9.22274C5.3841 8.61912 6.20403 8.28015 7.05883 8.28015L105.593 8.14015C106.017 8.139 106.438 8.22167 106.831 8.38341C107.224 8.54516 107.58 8.7828 107.881 9.08273C108.182 9.38267 108.421 9.73899 108.583 10.1313C108.746 10.5236 108.83 10.9442 108.83 11.3689V16.9602Z" fill="#0F62FE"/>
                <path d="M107.937 17.1089H4.73047V104.967H107.937V17.1089Z" fill="#FEF4EA"/>
                <path d="M107.929 17.1089H56.5312V104.967H107.929V17.1089Z" fill="#FEF4EA"/>
                <path d="M107.929 61.0337H56.5312V104.967H107.929V61.0337Z" fill="#FEF4EA"/>
                <path d="M108.83 105.86H3.83008V16.2163H108.83V105.86ZM5.58008 104.075H107.08V18.0013H5.58008V104.075Z" fill="#0F62FE"/>
              </svg>
              <h3 className="text-lg font-semibold leading-7 text-[#213343] font-['Lexend_Deca'] mb-4">
                10 Expert Tips to Improve Lead Quality
              </h3>
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca'] mb-6">
                Create quality leads that convert. Get started with 10 tips for improving lead quality and three reasons why you're getting bad leads.
              </p>
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca']">
                Read about leads
              </a>
            </div>
            
            <div className="text-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/41db03a73d36c126a47d548214db5b9d86c591b7?width=256" 
                alt="Targeting Icon"
                className="w-32 h-32 mx-auto mb-6"
              />
              <h3 className="text-lg font-semibold leading-7 text-[#213343] font-['Lexend_Deca'] mb-4">
                Audience Targeting: What It Is and Why You Need It
              </h3>
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca'] mb-6">
                Explore what audience targeting is, and how you can use it in your own marketing strategy.
              </p>
              <a href="#" className="text-[#0068B1] font-medium underline font-['Lexend_Deca']">
                Read about targeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#192733] py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium leading-[34px] text-white font-['Lexend_Deca']">
                Attract and Convert Your Leads
              </h2>
              
              <p className="text-base font-light leading-7 text-white font-['Lexend_Deca']">
                Get a demo or get started with our free version of Marketing Hub to attract and convert highly-qualified leads today.
              </p>
              
              <div className="flex gap-6">
                <button className="bg-white text-[#192733] px-[42px] py-[22px] text-lg font-medium font-['Lexend_Deca'] hover:bg-gray-100 transition-colors">
                  Get a demo
                </button>
                <button className="border-2 border-white text-white bg-[#192733] px-[42px] py-[22px] text-lg font-medium font-['Lexend_Deca'] hover:bg-gray-800 transition-colors">
                  Get started free
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/095898710446146241351b9ed8c489bf53661711?width=680" 
                alt="Marketing Hub CTA"
                className="w-[340px] h-[366px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Use Cases Section */}
      <section className="bg-[#F6F9FC] py-16">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-[32px] font-semibold leading-[44px] text-[#213343] font-['Lexend_Deca'] text-center mb-16">
            Explore other use cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#DBE4ED] rounded-lg p-6">
              <h3 className="text-lg font-semibold leading-7 text-[#213343] font-['Lexend_Deca'] mb-4">
                Create campaigns efficiently with automation and AI
              </h3>
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca'] mb-8">
                Engage leads and customers effectively with AI-powered marketing tools for targeted messaging, coordinated campaigns, and journey tracking.
              </p>
              <button className="bg-[#0F62FE] text-white px-6 py-4 text-base font-medium font-['Lexend_Deca'] hover:bg-blue-700 transition-colors">
                Save time
              </button>
            </div>
            
            <div className="bg-white border border-[#DBE4ED] rounded-lg p-6">
              <h3 className="text-lg font-semibold leading-7 text-[#213343] font-['Lexend_Deca'] mb-4">
                Reach and engage sales prospects
              </h3>
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca'] mb-8">
                Find innovative tools and strategies that can help you stand out from the noise, reach sales prospects, and nurture revenue-driving relationships.
              </p>
              <button className="bg-[#0F62FE] text-white px-6 py-4 text-base font-medium font-['Lexend_Deca'] hover:bg-blue-700 transition-colors">
                Engage more prospects
              </button>
            </div>
            
            <div className="bg-white border border-[#DBE4ED] rounded-lg p-6">
              <h3 className="text-lg font-semibold leading-7 text-[#213343] font-['Lexend_Deca'] mb-4">
                Accelerate sales and close deals faster
              </h3>
              <p className="text-base font-light leading-7 text-[#213343] font-['Lexend_Deca'] mb-8">
                Learn how HubSpot helps a variety of businesses streamline their sales pipeline, enhance sales rep productivity, and close deals faster.
              </p>
              <button className="bg-[#0F62FE] text-white px-6 py-4 text-base font-medium font-['Lexend_Deca'] hover:bg-blue-700 transition-colors">
                Close more deals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-t border-[#F6F9FC] py-4">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="flex items-center text-sm">
            <a href="/marketing-hub" className="text-[#0068B1] underline font-['Lexend_Deca']">Marketing Hub</a>
            <svg className="w-8 h-3.5 mx-2" viewBox="0 0 33 14" fill="none">
              <path d="M20.1468 6.5625C20.1256 6.52098 20.1007 6.48145 20.0724 6.44438L20.0287 6.37438V6.34375L15.4306 1.53125C15.3666 1.46806 15.2907 1.41814 15.2074 1.38435C15.1241 1.35056 15.0349 1.33358 14.9449 1.33438C14.8138 1.33479 14.6855 1.3725 14.575 1.44309C14.4645 1.51368 14.3764 1.61424 14.3209 1.73304C14.2654 1.85184 14.2448 1.98397 14.2616 2.11402C14.2783 2.24407 14.3317 2.36667 14.4156 2.4675L18.5587 6.825L14.4156 11.2C14.3128 11.2926 14.24 11.4136 14.2064 11.5477C14.1728 11.6819 14.1799 11.823 14.2269 11.953C14.2738 12.0831 14.3585 12.1962 14.47 12.2779C14.5815 12.3597 14.7149 12.4063 14.8531 12.4119C14.9566 12.411 15.0587 12.3869 15.1518 12.3415C15.2449 12.2961 15.3267 12.2304 15.3912 12.1494L20.0024 7.315V7.28438L20.0462 7.21438C20.0735 7.17816 20.0983 7.14016 20.1206 7.10063C20.1344 7.06105 20.1432 7.01989 20.1468 6.97813C20.1517 6.93452 20.1517 6.89049 20.1468 6.84688C20.1514 6.80178 20.1514 6.75635 20.1468 6.71125V6.685C20.149 6.64712 20.149 6.60914 20.1468 6.57125V6.5625Z" fill="#516F90"/>
            </svg>
            <span className="text-[#2E475D] font-medium font-['Lexend_Deca']">Generate More Qualified Leads With Marketing Hub</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
