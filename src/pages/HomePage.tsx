import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, BarChart3, Globe, Database, MessageSquare, Users, Zap, Award, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';

const HomePage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      icon: <Bot className="h-8 w-8 text-primary-600" />,
      title: 'AI Chatbot Development',
      description: 'Custom-branded chatbots that seamlessly integrate with your business and provide 24/7 customer support.',
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary-600" />,
      title: 'Enhanced Analytics',
      description: 'Detailed insights into chatbot interactions, user behavior, and sentiment analysis for data-driven decisions.',
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: 'Multi-Channel Integration',
      description: 'Deploy chatbots across websites, WhatsApp, Instagram, and mobile applications for a broad reach.',
    },
    {
      icon: <Database className="h-8 w-8 text-primary-600" />,
      title: 'Knowledge Base Management',
      description: 'Manage and update your own knowledge bases to ensure chatbot responses remain accurate and relevant.',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary-600" />,
      title: 'Live Chat Support',
      description: 'Real-time human assistance alongside AI chatbots for complex queries requiring human intervention.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Client Dashboard Access',
      description: 'Monitor chatbot performance, view analytics, and manage content through a personalized dashboard.',
    },
  ];

  const industries = [
    {
      name: 'E-commerce',
      description: 'Automate customer support, FAQs, order tracking, and sales inquiries.',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      name: 'Healthcare',
      description: 'Schedule appointments and provide automated patient engagement.',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      name: 'Finance',
      description: 'Handle inquiries related to loans, transactions, and account management.',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      name: 'Real Estate',
      description: 'Automate property inquiries, schedule viewings, and provide instant assistance.',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      name: 'Education',
      description: 'Support students with course-related questions and admissions information.',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      name: 'Travel & Hospitality',
      description: 'Automate bookings, customer inquiries, and travel recommendations.',
      icon: <Zap className="h-6 w-6" />,
    },
  ];

  const testimonials = [
    {
      quote: "FlowAutomate's AI chatbot has transformed our customer service. We've seen a 40% reduction in response time and a significant increase in customer satisfaction.",
      author: "Sarah Johnson",
      position: "CEO, TechRetail",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote: "Implementing FlowAutomate's solution helped us handle 70% more inquiries without adding staff. The analytics provided valuable insights into customer needs.",
      author: "Michael Chen",
      position: "CTO, FinanceHub",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote: "The white-label solution allowed us to offer AI chatbots to our clients under our own brand. It's been a game-changer for our agency's service offerings.",
      author: "Emily Rodriguez",
      position: "Director, MarketingPro Agency",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary-900 to-secondary-800 text-white py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                Automate Conversations, <span className="text-primary-500">Boost Engagement</span>
              </h1>
              <motion.p 
                className="text-xl md:text-2xl font-light mb-4 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Flow Faster, Automate Better
              </motion.p>
              <p className="text-xl mb-8 text-gray-300">
                Scale your business with AI-powered chatbots and automation solutions tailored to your industry needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/demo" variant="primary" size="lg">
                  Get Started
                </Button>
                <Button to="/case-studies" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  View Case Studies
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center w-full"
            >
              <svg width="500" height="400" viewBox="0 0 500 400" className="rounded-lg shadow-2xl bg-gradient-to-br from-secondary-950 to-secondary-900 p-6">
                {/* Advanced Gradient Definitions */}
                <defs>
                  {/* Holographic Core Gradient */}
                  <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#ff1f1f" stopOpacity="0.9" />
                    <stop offset="40%" stopColor="#ff1f1f" stopOpacity="0.6" />
                    <stop offset="80%" stopColor="#ff1f1f" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ff1f1f" stopOpacity="0" />
                  </radialGradient>
                  
                  {/* Futuristic Glow Effect */}
                  <filter id="futuristicGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  
                  {/* Digital Scan Line Pattern */}
                  <pattern id="scanLines" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                  </pattern>
                  
                  {/* Futuristic Connection Gradient */}
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff3e3e" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#ff3e3e" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ff3e3e" stopOpacity="0.1" />
                  </linearGradient>
                  
                  {/* Cybernetic Accent Gradient */}
                  <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00c2ff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#ff1f1f" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                
                {/* Futuristic Background Grid */}
                <g opacity="0.15">
                  {/* Perspective Grid */}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <React.Fragment key={`grid-${i}`}>
                      <line 
                        x1={50 + i * 40} 
                        y1="50" 
                        x2={50 + i * 40} 
                        y2="350" 
                        stroke="rgba(255,255,255,0.3)" 
                        strokeWidth="0.5" 
                      />
                      <line 
                        x1="50" 
                        y1={50 + i * 30} 
                        x2="450" 
                        y2={50 + i * 30} 
                        stroke="rgba(255,255,255,0.3)" 
                        strokeWidth="0.5" 
                      />
                    </React.Fragment>
                  ))}
                  
                  {/* Digital Scan Line Overlay */}
                  <rect x="0" y="0" width="500" height="400" fill="url(#scanLines)" />
                </g>
                
                {/* Ambient Particle System removed for cleaner look */}
                
                {/* Holographic Core */}
                <g>
                  {/* Outer Glow */}
                  <motion.circle
                    cx="250"
                    cy="200"
                    r="80"
                    fill="url(#coreGradient)"
                    animate={{
                      opacity: [0.7, 0.9, 0.7],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Multi-layered Core Structure */}
                  {Array.from({ length: 3 }).map((_, i) => {
                    const size = 60 - i * 10;
                    const rotation = i * 30;
                    
                    return (
                      <motion.path
                        key={`core-layer-${i}`}
                        d={`M${250} ${200-size} 
                            L${250+size*0.866} ${200-size*0.5} 
                            L${250+size*0.866} ${200+size*0.5} 
                            L${250} ${200+size} 
                            L${250-size*0.866} ${200+size*0.5} 
                            L${250-size*0.866} ${200-size*0.5} Z`}
                        fill="none"
                        stroke={i === 0 ? "#ff1f1f" : "rgba(255,255,255,0.8)"}
                        strokeWidth={3 - i * 0.5}
                        initial={{ rotate: rotation }}
                        animate={{ 
                          rotate: [rotation, rotation + 360],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          rotate: {
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "linear"
                          },
                          opacity: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                    );
                  })}
                  
                  {/* Digital Core */}
                  <motion.circle
                    cx="250"
                    cy="200"
                    r="30"
                    fill="#ff1f1f"
                    animate={{
                      opacity: [0.8, 1, 0.8],
                      filter: [
                        "drop-shadow(0 0 8px rgba(255,31,31,0.5))",
                        "drop-shadow(0 0 20px rgba(255,31,31,0.8))",
                        "drop-shadow(0 0 8px rgba(255,31,31,0.5))"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* FlowAutomate Logo in Center */}
                  <motion.g
                    transform="translate(232, 182) scale(0.35)"
                    animate={{
                      opacity: [0.9, 1, 0.9],
                      scale: [0.35, 0.36, 0.35]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Robot/AI head silhouette */}
                    <rect x="0" y="0" width="100" height="120" rx="10" fill="white"/>
                    
                    {/* Robot eyes */}
                    <circle cx="30" cy="35" r="7" fill="#FF1F1F"/>
                    <circle cx="70" cy="35" r="7" fill="#FF1F1F"/>
                    
                    {/* Robot mouth/speaker */}
                    <rect x="30" y="60" width="40" height="5" rx="2.5" fill="#FF1F1F"/>
                    <rect x="30" y="70" width="40" height="5" rx="2.5" fill="#FF1F1F"/>
                    <rect x="30" y="80" width="40" height="5" rx="2.5" fill="#FF1F1F"/>
                    
                    {/* Automation flow lines */}
                    <path d="M-20 60 L 0 60" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                    <path d="M100 60 L 120 60" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                    <path d="M-20 40 L -20 80" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                    <path d="M120 40 L 120 80" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                    
                    {/* Gear elements for automation */}
                    <circle cx="-20" cy="40" r="10" stroke="white" strokeWidth="5" fill="none"/>
                    <circle cx="120" cy="80" r="10" stroke="white" strokeWidth="5" fill="none"/>
                  </motion.g>
                  
                  {/* Advanced Neural Network */}
                  <g>
                    {/* Neural Network Nodes removed for cleaner look */}
                    
                    {/* Neural Network Connections */}
                    <g opacity="0.7">
                      {Array.from({ length: 15 }).map((_, i) => {
                        const startAngle = (Math.floor(Math.random() * 12) * 30 * Math.PI) / 180;
                        const endAngle = (Math.floor(Math.random() * 12) * 30 * Math.PI) / 180;
                        const radius = 20;
                        
                        const x1 = 250 + radius * Math.cos(startAngle);
                        const y1 = 200 + radius * Math.sin(startAngle);
                        const x2 = 250 + radius * Math.cos(endAngle);
                        const y2 = 200 + radius * Math.sin(endAngle);
                        
                        return (
                          <motion.line
                            key={`neural-connection-${i}`}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#ffffff"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: [0, 1, 0],
                              opacity: [0, 0.8, 0]
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.3,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                          />
                        );
                      })}
                    </g>
                  </g>
                </g>
                
                {/* Dynamic Connection Paths */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i * 60 * Math.PI) / 180;
                  const innerX = 250 + 60 * Math.cos(angle);
                  const innerY = 200 + 60 * Math.sin(angle);
                  const outerX = 250 + 150 * Math.cos(angle);
                  const outerY = 200 + 150 * Math.sin(angle);
                  
                  // Create curved path instead of straight line
                  const midX = 250 + 105 * Math.cos(angle) + 20 * Math.cos(angle + Math.PI/2);
                  const midY = 200 + 105 * Math.sin(angle) + 20 * Math.sin(angle + Math.PI/2);
                  
                  const pathId = `connection-path-${i}`;
                  
                  return (
                    <React.Fragment key={`connection-${i}`}>
                      <motion.path
                        id={pathId}
                        d={`M${innerX} ${innerY} Q${midX} ${midY} ${outerX} ${outerY}`}
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0.6 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 + i * 0.1 }}
                      />
                      
                      {/* Data packet visualization removed for cleaner look */}
                    </React.Fragment>
                  );
                })}
                
                {/* Futuristic Endpoint Nodes */}
                {[
                  { label: "WEBSITE", icon: "W" },
                  { label: "TELEGRAM", icon: "T" },
                  { label: "EMAIL", icon: "E" },
                  { label: "SOCIAL", icon: "S" },
                  { label: "WHATSAPP", icon: "W+" },
                  { label: "SMS", icon: "SMS" },
                ].map((node, i) => {
                  const angle = (i * 60 * Math.PI) / 180;
                  const x = 250 + 150 * Math.cos(angle);
                  const y = 200 + 150 * Math.sin(angle);
                  
                  return (
                    <React.Fragment key={`endpoint-${i}`}>
                      {/* Node Outer Ring */}
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="24"
                        fill="none"
                        stroke="url(#accentGradient)"
                        strokeWidth="1"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: 1, 
                          opacity: 1,
                          rotate: [0, 360]
                        }}
                        transition={{ 
                          scale: { duration: 0.5, delay: 1.2 + i * 0.1 },
                          opacity: { duration: 0.5, delay: 1.2 + i * 0.1 },
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                        }}
                      />
                      
                      {/* Node Background */}
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="20"
                        fill="rgba(10, 10, 15, 0.9)"
                        stroke="#ff3e3e"
                        strokeWidth="1"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                      />
                      
                      {/* Digital Readout Effect */}
                      <motion.rect
                        x={x - 15}
                        y={y - 2}
                        width="30"
                        height="4"
                        fill="rgba(255, 255, 255, 0.2)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Node Icon */}
                      <motion.text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#ffffff"
                        fontSize="10"
                        fontFamily="monospace"
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                      >
                        {node.icon}
                      </motion.text>
                      
                      {/* Node Label */}
                      <motion.text
                        x={x}
                        y={y + 32}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="9"
                        fontFamily="monospace"
                        letterSpacing="0.1em"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                      >
                        {node.label}
                      </motion.text>
                    </React.Fragment>
                  );
                })}
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white" ref={ref}>
        <div className="container">
          <SectionHeading
            title="Our AI Automation Services"
            subtitle="Empower your business with cutting-edge AI solutions designed to enhance customer engagement and streamline operations."
            centered
          />
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-secondary-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <Button to="/services" variant="primary">
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="How FlowAutomate Works"
            subtitle="Our streamlined process ensures a seamless integration of AI automation into your business operations."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation & Strategy</h3>
              <p className="text-secondary-600">We analyze your business needs and develop a customized AI automation strategy.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Development & Integration</h3>
              <p className="text-secondary-600">Our team builds and integrates AI chatbots tailored to your brand and requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch & Optimization</h3>
              <p className="text-secondary-600">We deploy your solution and continuously optimize performance based on analytics.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button to="/demo" variant="primary">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-12 bg-gradient-to-r from-secondary-950 to-secondary-900 text-white overflow-hidden">
        <div className="container mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Built with Industry-Leading Technology
          </h2>
        </div>
        
        <div className="relative">
          {/* Single sliding row */}
          <div className="flex items-center">
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                "OpenAI",
                "Anthropic",
                "Eleven Labs",
                "Deepgram",
                "PlayHT",
                "Twilio",
                "Make",
                "Zapier",
                "n8n",
                "OpenAI",
                "Anthropic",
                "Eleven Labs",
                "Deepgram",
                "PlayHT",
                "Twilio",
                "Make",
                "Zapier",
                "n8n"
              ].map((partner, index) => (
                <div 
                  key={`partner-${index}`} 
                  className="flex items-center justify-center mx-8 h-16"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary-500 mr-3"></div>
                    <span className="text-xl font-semibold tracking-wide">{partner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Our AI automation solutions are tailored to meet the specific needs of various industries."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                </div>
                <p className="text-secondary-600">{industry.description}</p>
                <Link to="/solutions" className="inline-flex items-center mt-4 text-primary-600 font-medium hover:text-primary-700">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-secondary-900 text-white">
        <div className="container">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Discover how FlowAutomate has transformed businesses across various industries."
            centered
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-secondary-800 p-6 rounded-lg">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Award key={star} className="inline-block h-5 w-5 text-primary-500 mr-1" />
                  ))}
                </div>
                <p className="mb-6 text-gray-300">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8">
              Join hundreds of businesses that have enhanced customer engagement and streamlined operations with FlowAutomate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/demo" variant="dark" size="lg">
                Get Started Free
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
