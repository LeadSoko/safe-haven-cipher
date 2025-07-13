import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowRight,
  ChevronDown,
  Play,
  Menu,
  X,
  Star,
  Building,
  Users,
  Award,
  Lightbulb,
  CheckCircle,
  Clock,
  Heart,
  ChevronUp,
} from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 px-4 md:px-6 lg:px-[155px] sticky top-0 z-50">
        <div className="max-w-[1129px] mx-auto h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-archivo font-bold text-xl bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              devsoko
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-900 hover:text-brand-purple transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-900 hover:text-brand-purple transition-colors">
                <span>Our Work</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-900 hover:text-brand-purple transition-colors">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-brand-purple transition-colors"
            >
              Insights
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              variant="outline"
              className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-brand px-4 md:px-6 lg:px-[155px] pt-[165px] pb-[181px] relative overflow-hidden">
        <div className="max-w-[1129px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-archivo text-[42px] lg:text-[42px] font-semibold leading-[42px] text-white">
                  Your Strategic Partner
                </h1>
                <div className="flex items-center space-x-2">
                  <h1 className="font-archivo text-[42px] lg:text-[42px] font-semibold leading-[42px] text-white underline decoration-white italic">
                    for an AI-Native world
                  </h1>
                  <div className="text-white">
                    <Star className="w-7 h-7 fill-current" />
                  </div>
                </div>
              </div>

              <p className="text-brand-light text-base leading-[22px] max-w-[380px]">
                We design and develop digital solutions for startups, mid-market
                companies, and enterprises, delivering superior customer
                experiences tailored to your needs
              </p>

              {/* Expert CTA */}
              <div className="border border-brand-purple bg-white p-1 max-w-[282px] flex items-center">
                <div className="flex-1 border-r border-brand-purple p-3 flex items-center space-x-3">
                  {/* Expert Avatars */}
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full border-2 border-brand-purple bg-gray-300"></div>
                    <div className="w-7 h-7 rounded-full border-2 border-brand-purple bg-gray-300"></div>
                    <div className="w-7 h-7 rounded-full border-2 border-brand-purple bg-gray-300"></div>
                  </div>
                  <span className="text-brand-purple font-semibold text-base">
                    Talk to an Expert
                  </span>
                </div>
                <div className="p-3">
                  <ArrowRight className="w-6 h-6 text-brand-purple" />
                </div>
              </div>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-6 items-center text-sm text-brand-light">
                <div className="flex items-center space-x-2">
                  <Building className="w-6 h-6" />
                  <span>Health-Tech</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6" />
                  <span>Digital Transformation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6" />
                  <span>AI-ML Solutions</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Mockup */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-[565px] h-[411px] bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
                <div className="text-white/60 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8" />
                  </div>
                  <p>Product Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-brand-dark px-4 md:px-6 lg:px-[155px] py-9">
        <div className="max-w-[1129px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="text-center lg:text-left lg:max-w-[178px] border-r border-gray-600 lg:pr-9">
              <h3 className="text-white text-sm font-bold mb-1">Trusted by</h3>
              <p className="text-white text-sm">Startups & Enterprises</p>
            </div>

            {/* Client Logos */}
            <div className="flex items-center justify-center lg:justify-start gap-12 opacity-70 flex-wrap">
              <div className="text-white font-bold text-lg">Roche</div>
              <div className="text-white font-bold text-lg">TATA 1MG</div>
              <div className="text-white font-bold text-lg">Omnicuris</div>
              <div className="text-white font-bold text-lg">AMAGI</div>
              <div className="text-white font-bold text-lg">Sterling</div>
              <div className="text-white font-bold text-lg">AlldayDr.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[1129px] mx-auto">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-gray-900 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real Success Stories */}
      <section className="px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[1129px] mx-auto">
          <h2 className="font-archivo text-[35px] font-medium leading-[53px] text-gray-900 mb-12">
            <span className="underline">Real Success</span>, Real Stories
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Marine Case Study */}
            <div className="space-y-6">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-brand-purple rounded-lg"></div>
                </div>
              </div>
              <div>
                <span className="text-brand-purple font-semibold text-lg uppercase tracking-wide">
                  MARINE
                </span>
                <h3 className="font-archivo text-2xl font-medium leading-[35px] text-gray-900 mt-2 mb-4">
                  <span className="underline">Digital Transformation</span> for
                  the World's Third Largest Marine Company
                </h3>
              </div>
            </div>

            {/* Health-Tech Case Study */}
            <div className="space-y-6">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white rounded-lg"></div>
                </div>
              </div>
              <div>
                <span className="text-brand-purple font-semibold text-lg uppercase tracking-wide">
                  HEALTH-TECH
                </span>
                <h3 className="font-archivo text-2xl font-medium leading-[35px] text-gray-900 mt-2 mb-4">
                  <span className="underline">App Modernization</span> for
                  Roche: Legacy Excel Macros to a Cloud Native Tech Stack
                </h3>
              </div>
            </div>

            {/* Media Tech Case Study */}
            <div className="space-y-6">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-brand-blue rounded-lg"></div>
                </div>
              </div>
              <div>
                <span className="text-brand-purple font-semibold text-lg uppercase tracking-wide">
                  MEDIA TECH
                </span>
                <h3 className="font-archivo text-2xl font-medium leading-[35px] text-gray-900 mt-2 mb-4">
                  <span className="underline">
                    Transformative Product Engineering
                  </span>{" "}
                  for a Media SaaS Unicorn
                </h3>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI-Native Product Engineering */}
      <section className="px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[1129px] mx-auto">
          <div className="flex justify-between items-start mb-12">
            <h2 className="font-archivo text-[35px] font-semibold leading-[53px] text-gray-900">
              <span className="underline">AI-Native Product Engineering</span>
            </h2>
            <Button
              variant="outline"
              className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
            >
              Know More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* AI-Native UX/UI Design */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Building className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-archivo text-xl font-semibold text-gray-900">
                    AI-Native UX/UI Design
                  </h3>
                  <ArrowRight className="w-6 h-6 text-brand-purple" />
                </div>
                <p className="text-brand-gray leading-7 mb-6">
                  Design intelligent user experiences with AI-enhanced UI/UX
                  strategies. Improve product usability and decision-making
                  through data-driven design.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    AI-powered User Research
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Predictive Interface Design
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Smart Prototyping
                  </li>
                </ul>
              </div>
            </div>

            {/* Agile Team on Demand */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-archivo text-xl font-semibold text-gray-900">
                    Agile Team on Demand
                  </h3>
                  <ArrowRight className="w-6 h-6 text-brand-purple" />
                </div>
                <p className="text-brand-gray leading-7 mb-6">
                  Deploy agile pods with deep expertise in AI/ML, DevOps, and
                  cloud-native technologies to execute faster and smarter.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    End-to-end Support
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Cross-functional Teams
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    High-performing Talent
                  </li>
                </ul>
              </div>
            </div>

            {/* Cloud and DevOps */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-archivo text-xl font-semibold text-gray-900">
                    Cloud and DevOps
                  </h3>
                  <ArrowRight className="w-6 h-6 text-brand-purple" />
                </div>
                <p className="text-brand-gray leading-7 mb-6">
                  Enhance your AI product infrastructure with scalable cloud
                  environments and DevOps practices optimized for AI workloads.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Cloud-Native Architecture
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    AI Workflow Automation
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Model Deployment & Monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI/ML Services */}
      <section className="px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[1129px] mx-auto">
          <div className="flex justify-between items-start mb-12">
            <h2 className="font-archivo text-[35px] font-semibold leading-[53px] text-gray-900">
              <span className="underline">AI/ML Services</span>
            </h2>
            <Button
              variant="outline"
              className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
            >
              Know More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* AI Agents */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Building className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-archivo text-xl font-semibold text-gray-900">
                    AI Agents
                  </h3>
                  <ArrowRight className="w-6 h-6 text-brand-purple" />
                </div>
                <p className="text-brand-gray leading-7 mb-6">
                  Automate processes and decision-making with intelligent AI
                  agents that act on your behalf with minimal intervention.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Autonomous Workflows
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Smart Process Handling
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Business Logic Execution
                  </li>
                </ul>
              </div>
            </div>

            {/* RAG Implementation */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-archivo text-xl font-semibold text-gray-900">
                    RAG Implementation
                  </h3>
                  <ArrowRight className="w-6 h-6 text-brand-purple" />
                </div>
                <p className="text-brand-gray leading-7 mb-6">
                  Boost your AI system's accuracy with Retrieval-Augmented
                  Generation for more relevant and context-aware outputs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Knowledge Integration
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Real-time Data Retrieval
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Enhanced LLM Responses
                  </li>
                </ul>
              </div>
            </div>

            {/* Chatbots and Voicebots */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-archivo text-xl font-semibold text-gray-900">
                    Chatbots and Voicebots
                  </h3>
                  <ArrowRight className="w-6 h-6 text-brand-purple" />
                </div>
                <p className="text-brand-gray leading-7 mb-6">
                  Engage users through natural language interfaces across web,
                  mobile, and voice with our smart conversational AI solutions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Conversational AI
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Multichannel Support
                  </li>
                  <li className="flex items-center text-gray-900">
                    <CheckCircle className="w-5 h-5 text-brand-purple mr-3" />
                    Voice & Text Automation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-brand-bg px-4 md:px-6 lg:px-[155px] py-12">
        <div className="max-w-[1129px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-archivo text-2xl font-medium text-gray-900 mb-4">
                Contact Us for High-Quality, Timely, and Flexible Solutions
              </h2>
              <p className="text-brand-gray leading-7">
                Partner with our experienced team that understands your needs
                and delivers unique, impactful products to help you succeed.
              </p>
            </div>
            <div>
              <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white w-full lg:w-auto">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300"></div>
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300"></div>
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300"></div>
                  </div>
                  <span>Let's Build Together</span>
                </div>
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[1129px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-archivo text-[35px] font-medium leading-[53px] text-gray-900 mb-12">
                <span className="underline">Our Strengths,</span> Explored by
                Our Clients
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 pb-6 border-b-2 border-brand-purple">
                  <Award className="w-5 h-5 text-brand-purple mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Qualitative work
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                  <Lightbulb className="w-5 h-5 text-brand-gray mt-1" />
                  <div>
                    <h3 className="font-medium text-brand-gray">
                      Innovative Solutions
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                  <Heart className="w-5 h-5 text-brand-gray mt-1" />
                  <div>
                    <h3 className="font-medium text-brand-gray">
                      Understand Clients Needs
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                  <CheckCircle className="w-5 h-5 text-brand-gray mt-1" />
                  <div>
                    <h3 className="font-medium text-brand-gray">
                      Meeting Objectives
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                  <Clock className="w-5 h-5 text-brand-gray mt-1" />
                  <div>
                    <h3 className="font-medium text-brand-gray">
                      Timely Delivery
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <div className="w-5 h-5 text-brand-gray mb-4">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.33 24l4.67-4.67L7.33 14.67l-1.41 1.41L9.25 19.5H1v2h8.25l-3.33 3.33L7.33 24zm7.34-12L19.33 7.33 17.92 5.92 14.67 9.17l-1.41-1.41L16.59 4.42 19.33 7.16l4.67-4.67L22.59 1.08 19.33 4.34 17.92 2.93l-4.67 4.67L14.67 9.17z" />
                  </svg>
                </div>
              </div>

              <blockquote className="text-gray-900 font-medium leading-relaxed mb-6">
                "They're pretty self-sufficient in understanding project needs,
                so hand-holding is minimal. Overall, Devsoko' developers{" "}
                <span className="underline font-bold">
                  produce high-quality deliverables
                </span>
                ."
              </blockquote>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-900">Deepak Perumpidi</h4>
                <p className="text-brand-gray">
                  VP of Technology, Ivy Mobility
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-brand-purple font-bold hover:underline"
                >
                  View on <span className="font-bold">clutch.co</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Values */}
      <section className="bg-gray-100 px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[1129px] mx-auto">
          {/* Team Photo placeholder */}
          <div className="mb-16 h-64 bg-gray-300 rounded-lg"></div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* AI-Native Efficiency */}
            <div className="text-center lg:text-left">
              <div className="w-7 h-7 text-brand-purple mb-4 mx-auto lg:mx-0">
                <Lightbulb className="w-full h-full" />
              </div>
              <h3 className="font-archivo text-xl font-medium text-gray-900 mb-4">
                AI-Native Efficiency
              </h3>
              <p className="text-brand-gray leading-6">
                We leverage AI-assisted coding tools, with 40% of new code at
                Devsoko written using AI, boosting efficiency and reducing
                development time.
              </p>
            </div>

            {/* Loved by Clients */}
            <div className="text-center lg:text-left">
              <div className="w-7 h-7 text-brand-purple mb-4 mx-auto lg:mx-0">
                <Heart className="w-full h-full" />
              </div>
              <h3 className="font-archivo text-xl font-medium text-gray-900 mb-4">
                Loved by Clients
              </h3>
              <p className="text-brand-gray leading-6">
                Our 5/5 referral rate on Clutch and glowing client video
                testimonials reflect our dedication to long-term partnerships
                and success.
              </p>
            </div>

            {/* Highly Vetted Talent */}
            <div className="text-center lg:text-left">
              <div className="w-7 h-7 text-brand-purple mb-4 mx-auto lg:mx-0">
                <Award className="w-full h-full" />
              </div>
              <h3 className="font-archivo text-xl font-medium text-gray-900 mb-4">
                Highly Vetted Talent
              </h3>
              <p className="text-brand-gray leading-6">
                Through a rigorous hiring process, we onboard top talent to
                ensure your projects deliver exceptional results.
              </p>
            </div>

            {/* Focused on ROI */}
            <div className="text-center lg:text-left">
              <div className="w-7 h-7 text-brand-purple mb-4 mx-auto lg:mx-0">
                <CheckCircle className="w-full h-full" />
              </div>
              <h3 className="font-archivo text-xl font-medium text-gray-900 mb-4">
                Focused on ROI
              </h3>
              <p className="text-brand-gray leading-6">
                We focus on delivering value— speed for startups and reliability
                for enterprises— tailored to meet your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[1129px] mx-auto">
          <div className="mb-12">
            <h2 className="font-archivo text-[35px] font-semibold leading-[53px] text-gray-900 mb-4">
              Lab-Approved and <span className="underline">Client Loved</span>
            </h2>
            <p className="text-xl text-brand-gray leading-7 max-w-2xl">
              We've had the pleasure of working on a wide spectrum of projects
              with exceptional clients. Hear them out!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-gray-900 ml-1" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-2xl font-medium mb-2">Anand Venkatesan</h4>
                <p className="text-base opacity-90">
                  Head of Strategic Initiatives, IvyMobility
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-gray-900 ml-1" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-2xl font-medium mb-2">Berri Jacque</h4>
                <p className="text-base opacity-90">
                  Director, Center for Science Education, Tufts University
                  School of Medicine
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-gray-900 ml-1" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-2xl font-medium mb-2">Tom Brew</h4>
                <p className="text-base opacity-90">
                  Product Marketing Manager, King of the Crease
                </p>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 bg-brand-gray rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 3 Steps Process */}
      <section className="bg-brand-bg px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[1129px] mx-auto">
          <h2 className="font-archivo text-[35px] font-semibold leading-[53px] text-gray-900 mb-16">
            3 Steps to{" "}
            <span className="underline">
              Transform Your Idea into a Solution
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-16 mb-16">
            {/* Step 1 */}
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <div className="w-12 h-12 text-brand-purple">
                  <CheckCircle className="w-full h-full" />
                </div>
              </div>
              <h3 className="font-archivo text-2xl font-medium text-gray-900 mb-4">
                Discovery Call
              </h3>
              <p className="text-brand-gray leading-7">
                We discuss your business goals and AI needs to identify the
                right solution.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center items-center">
              <ArrowRight className="w-6 h-6 text-brand-purple" />
            </div>

            {/* Step 2 */}
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <div className="w-12 h-12 text-brand-purple">
                  <Lightbulb className="w-full h-full" />
                </div>
              </div>
              <h3 className="font-archivo text-2xl font-medium text-gray-900 mb-4">
                Tailored Strategy
              </h3>
              <p className="text-brand-gray leading-7">
                We craft a custom AI approach using the best-fit technologies
                for your challenges.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center items-center">
              <ArrowRight className="w-6 h-6 text-brand-purple" />
            </div>

            {/* Step 3 */}
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <div className="w-12 h-12 text-brand-purple">
                  <Award className="w-full h-full" />
                </div>
              </div>
              <h3 className="font-archivo text-2xl font-medium text-gray-900 mb-4">
                Launch & Improve
              </h3>
              <p className="text-brand-gray leading-7">
                We deploy, test, and refine your AI solution for long-term
                impact and growth.
              </p>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300"></div>
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300"></div>
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-300"></div>
                </div>
                <span>Book Your Free Discovery Call</span>
              </div>
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our LabNotes (Blog) */}
      <section className="bg-gray-100 px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[1129px] mx-auto">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="font-archivo text-[35px] font-semibold leading-[53px] text-gray-900 mb-4">
                <span className="underline">Our LabNotes</span>
              </h2>
              <p className="text-xl text-brand-gray leading-7 max-w-3xl">
                Devsoko is your partner for planning, designing, and developing
                custom healthcare software that empowers people.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
            >
              Explore Blogs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-300 mb-6"></div>
              <div className="p-6">
                <h3 className="font-archivo text-xl font-medium text-gray-900 mb-4 leading-8">
                  The 10 Best EMR/EHR Systems for Modern Healthcare Practices
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-purple-700 font-semibold">Karan Shah</p>
                  <p className="text-brand-gray">28 Feb 25 •21 min read</p>
                </div>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-300 mb-6"></div>
              <div className="p-6">
                <h3 className="font-archivo text-xl font-medium text-gray-900 mb-4 leading-8">
                  AI's Accountability, Responsibility and Transparency in
                  Healthcare(2025)
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-purple-700 font-semibold">Mukul Sharma</p>
                  <p className="text-brand-gray">27 Jan 25 •15 Min read</p>
                </div>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-300 mb-6"></div>
              <div className="p-6">
                <h3 className="font-archivo text-xl font-medium text-gray-900 mb-4 leading-8">
                  Light Mode vs. Dark Mode: What is Better for UX?
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-purple-700 font-semibold">Mukul Sharma</p>
                  <p className="text-brand-gray">14 Mar 24 •12 min read</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[852px] mx-auto">
          <h2 className="font-archivo text-[35px] font-semibold leading-[53px] text-gray-900 mb-12">
            Stay curious, <span className="underline">Questions?</span>
          </h2>

          <div className="space-y-0">
            {[
              "What is your company's approach towards data security and privacy?",
              "What makes your company unique compared to other software development firms?",
              "How does your company assist with digital transformation?",
              "What engagement models do you offer to accommodate different project requirements?",
              "Is it possible to hire developers from your company who can work in various time zones or remotely?",
              "How does Devsoko guarantee the quality of its software products?",
              "Does Devsoko provide ongoing support and maintenance after project completion?",
            ].map((question, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-archivo text-xl font-medium text-gray-900 pr-4">
                    {question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="pb-6">
                    <p className="text-brand-gray leading-7">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section className="bg-gray-100 px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <span className="text-brand-purple font-semibold text-lg uppercase tracking-wide">
                  Work with us
                </span>
                <h2 className="font-archivo text-[42px] font-semibold leading-[49px] text-gray-900 mt-2 mb-6">
                  Let's Build The Next Big Thing
                </h2>
                <p className="text-lg text-brand-gray leading-7">
                  Fill in the form or schedule a meeting or to map out a path to
                  success.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-5 h-5 text-brand-purple mt-1">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3H9V1L3 7V9H21ZM12 7.5C12.8 7.5 13.5 8.2 13.5 9S12.8 10.5 12 10.5 10.5 9.8 10.5 9 11.2 7.5 12 7.5Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brand-purple text-lg font-medium">
                      hello@devsoko.com
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-5 h-5 text-brand-purple mt-1">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-brand-gray text-lg leading-7">
                        1007 N Orange St. 4th Floor, Suite #1702, Wilmington,
                        Delaware - 19801
                      </p>
                      <p className="text-brand-gray text-lg mt-2">
                        +1 (808) 736-7376
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-5 h-5 text-brand-purple mt-1">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-brand-gray text-lg leading-7">
                        A1-104, Palladium Towers, Corporate Road, Ahmedabad,
                        Gujarat 380015
                      </p>
                      <p className="text-brand-gray text-lg mt-2">
                        +91 (079) 4039 - 0439
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="border-b border-brand-light pb-4 mb-8">
                <div className="flex space-x-8">
                  <button className="text-brand-purple font-medium border-b-2 border-brand-purple pb-2">
                    Fill a Form
                  </button>
                  <button className="text-gray-600 font-medium pb-2">
                    Schedule Meeting
                  </button>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Your full name"
                    className="border-gray-200 h-12"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your work email"
                    className="border-gray-200 h-12"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="What should we know before contacting you?"
                    className="border-gray-200 min-h-[140px] resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="nda" />
                  <label htmlFor="nda" className="text-sm text-gray-600">
                    Send me an NDA
                  </label>
                </div>

                <Button className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white h-14">
                  Start your journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-16 bg-white rounded-lg p-8">
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">AWS</div>
              <div className="text-2xl font-bold text-gray-400">Google</div>
              <div className="text-2xl font-bold text-gray-400">Microsoft</div>
              <div className="text-2xl font-bold text-gray-400">OpenAI</div>
              <div className="text-2xl font-bold text-gray-400">Stripe</div>
              <div className="text-2xl font-bold text-gray-400">Vercel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 md:px-6 lg:px-[155px] py-16">
        <div className="max-w-[1129px] mx-auto">
          <div className="grid lg:grid-cols-6 gap-12 mb-12">
            {/* Logo & About */}
            <div className="lg:col-span-1">
              <div className="font-archivo font-bold text-xl bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent mb-4">
                devsoko
              </div>
            </div>

            {/* Design */}
            <div>
              <h4 className="font-archivo text-lg font-medium mb-6">Design</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Product Discovery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI-Native UX/UI Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    UX Strategy
                  </a>
                </li>
              </ul>
            </div>

            {/* AI-Native Product Engineering */}
            <div>
              <h4 className="font-archivo text-lg font-medium mb-6">
                AI-Native Product Engineering
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Agile Team on Demand
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cloud and DevOps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    App Modernization
                  </a>
                </li>
              </ul>
            </div>

            {/* AI/ML Services */}
            <div>
              <h4 className="font-archivo text-lg font-medium mb-6">
                AI/ML Services
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Agents
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    RAG implementation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Chatbots and Voicebots
                  </a>
                </li>
              </ul>
            </div>

            {/* Inside the Lab */}
            <div>
              <h4 className="font-archivo text-lg font-medium mb-6">
                Inside the Lab
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Clients
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Life @Devsoko
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-archivo text-lg font-medium mb-6">
                Join Our Newsletter
              </h4>
              <form className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your Work Email"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-brand-purple hover:bg-brand-purple/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-700">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <p className="text-brand-light text-sm mb-2">
                Devsoko © 2015-2025
              </p>
              <div className="flex space-x-4 text-sm text-gray-300">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-white">
                  Terms of Use
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              {/* Social Icons */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.298 1.199-.337 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.751-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
