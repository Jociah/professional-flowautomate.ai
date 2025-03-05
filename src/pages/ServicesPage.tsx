import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, BarChart3, Globe, Database, MessageSquare, Users, Settings, Code, Shield, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const ServicesPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: <Bot className="h-12 w-12 text-primary-600" />,
      title: 'AI Chatbot Development',
      description: 'Custom-branded chatbots that seamlessly integrate with your business and provide 24/7 customer support.',
      features: [
        'Natural language processing for human-like conversations',
        'Custom branding and personality alignment',
        'Seamless handoff to human agents when needed',
        'Continuous learning and improvement',
      ],
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary-600" />,
      title: 'Enhanced Analytics & Reporting',
      description: 'Detailed insights into chatbot interactions, user behavior, and sentiment analysis for data-driven decisions.',
      features: [
        'Comprehensive dashboards with real-time data',
        'Conversation analysis and sentiment tracking',
        'User behavior patterns and trends',
        'Conversion and ROI reporting',
      ],
    },
    {
      icon: <Globe className="h-12 w-12 text-primary-600" />,
      title: 'Multi-Channel Integration',
      description: 'Deploy chatbots across websites, WhatsApp, Instagram, and mobile applications for a broad reach.',
      features: [
        'Website widget integration',
        'Social media platform deployment',
        'Messaging app compatibility (WhatsApp, Messenger)',
        'Mobile app integration',
      ],
    },
    {
      icon: <Database className="h-12 w-12 text-primary-600" />,
      title: 'Knowledge Base Management',
      description: 'Manage and update your own knowledge bases to ensure chatbot responses remain accurate and relevant.',
      features: [
        'Centralized content management system',
        'Easy content updates and versioning',
        'Automated content suggestions',
        'Integration with existing documentation',
      ],
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary-600" />,
      title: 'Live Chat Support',
      description: 'Real-time human assistance alongside AI chatbots for complex queries requiring human intervention.',
      features: [
        'Seamless transition between AI and human agents',
        'Agent dashboard with conversation history',
        'Chatbot assistance for human agents',
        'Performance analytics for support teams',
      ],
    },
    {
      icon: <Users className="h-12 w-12 text-primary-600" />,
      title: 'Client Dashboard Access',
      description: 'Monitor chatbot performance, view analytics, and manage content through a personalized dashboard.',
      features: [
        'User-friendly interface for non-technical users',
        'Customizable reporting and alerts',
        'Role-based access control',
        'Mobile-responsive design',
      ],
    },
    {
      icon: <Settings className="h-12 w-12 text-primary-600" />,
      title: 'Automated Billing & Usage Tracking',
      description: 'Implement automated billing systems, such as Stripe integration, to manage usage-based charges efficiently.',
      features: [
        'Transparent usage-based billing',
        'Automated invoicing and payment processing',
        'Usage alerts and notifications',
        'Detailed billing history and reports',
      ],
    },
    {
      icon: <Code className="h-12 w-12 text-primary-600" />,
      title: 'White-Label Solutions',
      description: 'Offer our AI chatbot platform under your own brand, perfect for agencies and resellers.',
      features: [
        'Complete brand customization',
        'Client management portal',
        'Tiered pricing options for resellers',
        'Dedicated support for partners',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'AI Strategy Consulting',
      description: 'Expert guidance on implementing AI solutions to achieve your business objectives.',
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific business requirements and challenges.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Training & Onboarding',
      description: 'Comprehensive training for your team to maximize the value of your AI automation investment.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive AI automation solutions to enhance customer engagement and streamline operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section bg-white" ref={ref}>
        <div className="container">
          <SectionHeading
            title="Core AI Automation Services"
            subtitle="Discover our range of AI-powered solutions designed to transform your business operations and customer engagement."
            centered
          />
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  id={service.title.toLowerCase().replace(/ /g, '-')}
                  variants={fadeIn}
                  className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                <div className="flex items-start">
                  <div className="mr-6">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-secondary-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Additional Services"
            subtitle="Complementary offerings to enhance your AI automation journey"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-secondary-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process-automation" className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Our Service Process"
            subtitle="How we deliver exceptional AI automation solutions"
            centered
          />
          
          <div className="relative">
            {/* Process timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                  <div className="md:text-right">
                    <h3 className="text-2xl font-semibold mb-3">Discovery & Strategy</h3>
                    <p className="text-secondary-600">
                      We begin with a thorough assessment of your business needs, goals, and existing processes to develop a customized AI automation strategy.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center transform -translate-x-1/2">1</div>
                <div className="md:w-1/2 md:pl-12">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Discovery & Strategy"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:order-2">
                  <div className="md:text-left">
                    <h3 className="text-2xl font-semibold mb-3">Design & Development</h3>
                    <p className="text-secondary-600">
                      Our team designs and develops your custom AI solution, ensuring it aligns with your brand and meets your specific requirements.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center transform -translate-x-1/2">2</div>
                <div className="md:w-1/2 md:pl-12 md:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Design & Development"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                  <div className="md:text-right">
                    <h3 className="text-2xl font-semibold mb-3">Testing & Deployment</h3>
                    <p className="text-secondary-600">
                      We rigorously test your AI solution to ensure optimal performance before deploying it across your chosen channels.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center transform -translate-x-1/2">3</div>
                <div className="md:w-1/2 md:pl-12">
                  <img
                    src="https://images.unsplash.com/photo-1581093458791-9d15482442f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Testing & Deployment"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:order-2">
                  <div className="md:text-left">
                    <h3 className="text-2xl font-semibold mb-3">Optimization & Support</h3>
                    <p className="text-secondary-600">
                      We provide ongoing optimization and support to ensure your AI solution continues to deliver exceptional results and adapts to changing needs.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center transform -translate-x-1/2">4</div>
                <div className="md:w-1/2 md:pl-12 md:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Optimization & Support"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl mb-8">
              Schedule a consultation with our experts to discuss how our AI automation services can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/demo" variant="dark" size="lg">
                Book a Demo
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
