import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { ChevronDown, Play, Star, ArrowRight, Check } from 'lucide-react';

export default function ProductDetails() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-['IBM_Plex_Sans']">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Product Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-4 left-12 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-4 left-20 w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                      <span className="font-semibold text-gray-800">AI-Powered Marketing Software</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="w-full h-2 bg-blue-500 rounded-full mb-2"></div>
                        <div className="text-sm text-gray-600">Email Campaign</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="w-full h-2 bg-green-500 rounded-full mb-2"></div>
                        <div className="text-sm text-gray-600">Lead Generation</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        <span className="text-sm font-medium">Analytics Dashboard</span>
                      </div>
                      <div className="space-y-1">
                        <div className="w-3/4 h-1 bg-gray-300 rounded"></div>
                        <div className="w-1/2 h-1 bg-gray-300 rounded"></div>
                        <div className="w-2/3 h-1 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                AI-Powered Marketing<br />
                Software
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your marketing with intelligent automation, data-driven insights, and personalized customer experiences.
              </p>
              
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Watch Demo
                </button>
              </div>
              
              <div className="text-sm text-gray-500">
                ✓ 14-day free trial &nbsp;&nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp;&nbsp; ✓ Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-12 text-lg">
            Trusted by leading companies worldwide
          </p>
          <div className="flex items-center justify-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">COMPANY</div>
            <div className="text-2xl font-bold text-gray-400">BRAND</div>
            <div className="text-2xl font-bold text-gray-400">PARTNER</div>
            <div className="text-2xl font-bold text-gray-400">CLIENT</div>
            <div className="text-2xl font-bold text-gray-400">CUSTOMER</div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Overcome Your Toughest Marketing Challenges with Integrated AI Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop doing things the hard way. Our AI agents work around the clock to optimize your marketing campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligent Campaign Optimization</h3>
                  <p className="text-gray-600">
                    Our AI continuously analyzes performance data to automatically optimize your campaigns for better results.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold">
                  <Play size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Content Creation</h3>
                  <p className="text-gray-600">
                    Generate high-converting email campaigns, social posts, and landing pages with AI assistance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold">
                  <Star size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Predictive Analytics</h3>
                  <p className="text-gray-600">
                    Forecast campaign performance and customer behavior to make data-driven decisions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-800">Campaign Performance</h4>
                    <div className="text-green-600 font-semibold">+24%</div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Email Open Rate</span>
                        <span>68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '68%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Click-through Rate</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '15%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Conversion Rate</span>
                        <span>8.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '82%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Marketing Software That Grows With You
            </h2>
            <p className="text-xl text-gray-600">
              Start for free, upgrade as you scale. No hidden fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                <p className="text-gray-600">Forever free</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Up to 1,000 contacts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Email marketing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Contact management</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Get started for free
              </button>
            </div>

            {/* Starter Plan */}
            <div className="border-2 border-blue-500 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$45</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Up to 1,000 contacts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Remove branding</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Simple automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Landing pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Ad management</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start free trial
              </button>
            </div>

            {/* Professional Plan */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$800</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Up to 10,000 contacts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Smart content</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">A/B testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Start free trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            It's already easy to use. But we're still here for you.
          </h2>
          <p className="text-xl text-blue-100 mb-16">
            Get the support you need to succeed with our comprehensive resources and expert team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold text-white mb-4">154%</div>
              <p className="text-blue-100 text-lg">Average increase in qualified leads</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-4">135%</div>
              <p className="text-blue-100 text-lg">Average increase in web traffic</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-4">82%</div>
              <p className="text-blue-100 text-lg">Of customers see ROI within 12 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Companies Grow With AI-Powered Marketing
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <div className="text-2xl font-bold text-gray-900 mb-6">SANDLER</div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    "We saw a 300% increase in qualified leads and reduced our customer acquisition cost by 40% after implementing AI-powered marketing automation."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-600">SJ</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Johnson</div>
                      <div className="text-gray-600">VP of Marketing, Sandler</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                    <div className="text-2xl">📈</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">300%</div>
                    <div className="text-gray-600">Increase in qualified leads</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <div className="text-2xl">💰</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">40%</div>
                    <div className="text-gray-600">Reduction in acquisition cost</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <div className="text-2xl">⚡</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">12 months</div>
                    <div className="text-gray-600">To achieve full ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our AI-powered marketing platform.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "What makes your marketing software different?",
                answer: "Our platform combines AI-powered automation with intuitive design, making advanced marketing accessible to teams of all sizes. We focus on delivering measurable results through intelligent optimization and personalization."
              },
              {
                question: "How quickly can I see results?",
                answer: "Most customers see improvements in their key metrics within the first 30 days. Significant ROI typically occurs within 3-6 months as the AI learns and optimizes your campaigns."
              },
              {
                question: "Do I need technical expertise to use this?",
                answer: "Not at all! Our platform is designed for marketers, not engineers. The AI handles the complex optimization while you focus on strategy and creativity."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer 24/7 chat support, comprehensive documentation, video tutorials, and dedicated success managers for enterprise customers."
              },
              {
                question: "Can I integrate with my existing tools?",
                answer: "Yes! We integrate with over 500 popular marketing and business tools including CRMs, email platforms, analytics tools, and more."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of companies using AI to grow their business faster than ever before.
          </p>
          
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-8 text-blue-100">
            14-day free trial • No credit card required • Cancel anytime
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}