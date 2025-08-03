import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-normal leading-tight">
                Hi, we're{" "}
                <span className="font-bold">WeSecureApp.</span>
              </h1>
              <p className="text-lg leading-relaxed text-gray-700 max-w-lg">
                We specialize in establishing a secure cyber profile by designing
                security roadmap for organizations and execute a strategic, long-
                range plan in order to meet short and long-term goals to improve
                the security posture of organizations.
              </p>
              <Link 
                to="/work" 
                className="inline-flex items-center px-6 py-4 bg-[#0F62FE] border border-[#0F62FE] text-white text-sm font-normal hover:bg-blue-700 transition-colors"
              >
                Explore Our Work
              </Link>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <svg className="w-full max-w-[390px] h-auto" viewBox="0 0 390 407" fill="none">
                <path d="M338.46 51.5347V245.382L195.013 343.556L51.5403 245.382V51.5347H338.46ZM389.994 7.62939e-06H0.00561523V272.567L195.013 406.016L389.994 272.567V7.62939e-06Z" fill="#08BDBA"/>
                <path d="M389.812 182.317L15.2622 67.806L0.194909 117.089L374.745 231.6L389.812 182.317Z" fill="#08BDBA"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-12">
            Awards & Recognition
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/477a51050618ae4e3400de7be16ccbbab498389b?width=160" 
              alt="DSCI" 
              className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/21fbeb3da134ab921a44dc8ba1c71f38474c7b65?width=200" 
              alt="Microsoft for Startups" 
              className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/477a51050618ae4e3400de7be16ccbbab498389b?width=160" 
              alt="NASSCOM Product Conclave" 
              className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/21fbeb3da134ab921a44dc8ba1c71f38474c7b65?width=200" 
              alt="YourStory TechSparks" 
              className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/477a51050618ae4e3400de7be16ccbbab498389b?width=160" 
              alt="Startup Grind Google" 
              className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/21fbeb3da134ab921a44dc8ba1c71f38474c7b65?width=200" 
              alt="HYSEA Summit" 
              className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center bg-[#1e3a6f] relative"
        style={{
          backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/898859e12f2f3bbf83ef3f7adfaaf39329bedd97?width=2880')"
        }}
      >
        <div className="absolute inset-0 bg-[#1e3a6f] opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-4xl">
              Start your vulnerability management journey today!
            </h2>
            <Link 
              to="/delivery-head" 
              className="flex-shrink-0 inline-flex items-center px-6 py-3 bg-white text-[#0043CE] text-sm font-normal hover:bg-gray-100 transition-colors"
            >
              Talk to Delivery Head
            </Link>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-12">Insights</h2>
              
              {/* Insights Card 1 */}
              <div 
                className="relative h-[540px] bg-cover bg-center mb-8 lg:mb-0"
                style={{
                  backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/5a27f47f41dcceac85349d6588478ed65f870568?width=811')"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="mb-6">
                    <span className="inline-block px-0 py-1 bg-transparent text-white text-sm font-bold uppercase tracking-wide">
                      News
                    </span>
                  </div>
                  <h3 className="text-white text-2xl font-bold leading-tight mb-6">
                    WeSecureApp is Now Strobes: A Message from Our CEO
                  </h3>
                  <Link 
                    to="/insights/wesecureapp-strobes" 
                    className="inline-flex items-center text-[#FFE034] font-bold hover:underline"
                  >
                    <div className="w-8 h-0.5 bg-[#FFE034] mr-3"></div>
                    Continue Reading
                  </Link>
                </div>
              </div>
            </div>

            {/* Insights Card 2 */}
            <div>
              <div 
                className="relative h-[540px] bg-cover bg-center mb-12"
                style={{
                  backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/9d39b6eae3f9e7e3ea2f927d8185346a97c0f5b6?width=811')"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="mb-6">
                    <span className="inline-block px-0 py-1 bg-transparent text-white text-sm font-bold uppercase tracking-wide">
                      Red Team · Threat Simulation
                    </span>
                  </div>
                  <h3 className="text-white text-2xl font-bold leading-tight mb-6">
                    Red team vs Blue team: A CISO's Guide to Offensive Security
                  </h3>
                  <Link 
                    to="/insights/red-team-vs-blue-team" 
                    className="inline-flex items-center text-[#FFE034] font-bold hover:underline"
                  >
                    <div className="w-8 h-0.5 bg-[#FFE034] mr-3"></div>
                    Continue Reading
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-12">Press Releases</h2>
              
              {/* Press Release Card */}
              <div 
                className="relative h-[540px] bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/5a27f47f41dcceac85349d6588478ed65f870568?width=811')"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="mb-6">
                    <span className="inline-block px-0 py-1 bg-transparent text-white text-sm font-bold uppercase tracking-wide">
                      News
                    </span>
                  </div>
                  <h3 className="text-white text-2xl font-bold leading-tight mb-6">
                    WeSecureApp is Now Strobes: A Message from Our CEO
                  </h3>
                  <Link 
                    to="/press/wesecureapp-strobes" 
                    className="inline-flex items-center text-[#FFE034] font-bold hover:underline"
                  >
                    <div className="w-8 h-0.5 bg-[#FFE034] mr-3"></div>
                    Continue Reading
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#F7F3F2] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
                Enterprise
              </p>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f407d35affe91b1e4959fda92294b9bcb01a1b4b?width=400" 
                alt="Legalinc Logo" 
                className="w-[200px] h-[135px] object-contain mb-8"
              />
              <p className="text-base text-black">
                Legalinc Corporate Services, Inc.
              </p>
            </div>
            
            <div>
              <blockquote className="text-2xl lg:text-3xl text-black leading-relaxed mb-12">
                "WSA solved our security problems through their solution CAINS. They helped us not only in finding potential vulnerabilities in our applications but also trained our developers to ensure the vulnerabilities are not repeated in future releases. Overall in one year, we have seen that our application security posture improved multi-fold."
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/42edbb000b7a52a40ab6cbd9c02b08d54cbdd729?width=100" 
                  alt="Vimal Nair" 
                  className="w-[50px] h-[50px] rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-black">Vimal Nair</p>
                  <p className="text-black">CTO, GroupMap Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#393939] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="text-4xl lg:text-5xl text-white leading-tight max-w-4xl">
              We are committed to become your trusted cyber security partner.
            </h2>
            <Link 
              to="/get-started" 
              className="flex-shrink-0 inline-flex items-center px-16 py-4 bg-[#0F62FE] border border-[#0F62FE] text-white text-sm font-normal hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
