import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Building, Landmark, GraduationCap, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const CaseStudiesPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const caseStudies = [
    {
      title: 'How TechRetail Increased Sales by 35% with AI Chatbots',
      industry: 'E-commerce',
      icon: <ShoppingCart className="h-6 w-6 text-primary-600" />,
      challenge: 'TechRetail was struggling with high cart abandonment rates and limited customer support availability.',
      solution: 'We implemented a custom AI chatbot that provided 24/7 product recommendations, answered FAQs, and assisted with checkout.',
      results: [
        '35% increase in conversion rates',
        '42% reduction in cart abandonment',
        '67% of customer inquiries resolved without human intervention',
        'Customer satisfaction score improved from 7.2 to 9.1',
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      testimonial: {
        quote: "FlowAutomate\'s solution transformed our customer experience. The AI chatbot not only increased our sales but also freed up our support team to focus on complex issues.",
        author: "Sarah Johnson",
        position: "CEO, TechRetail",
      },
    },
    {
      title: 'RealtyPro: Automating Property Inquiries and Boosting Agent Productivity',
      industry: 'Real Estate',
      icon: <Building className="h-6 w-6 text-primary-600" />,
      challenge: 'RealtyPro agents were spending too much time answering basic property questions, limiting their ability to close deals.',
      solution: 'We deployed an AI chatbot that answered property inquiries, scheduled viewings, and qualified leads before routing them to agents.',
      results: [
        '28% increase in agent productivity',
        '152% more property viewings scheduled',
        '41% faster response time to customer inquiries',
        '23% increase in qualified leads',
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      testimonial: {
        quote: "Our agents can now focus on closing deals instead of answering the same questions repeatedly. The AI chatbot has become an essential part of our team.",
        author: "Michael Chen",
        position: "Managing Director, RealtyPro",
      },
    },
    {
      title: 'FinanceHub: Enhancing Customer Service with 24/7 AI Support',
      industry: 'Finance',
      icon: <Landmark className="h-6 w-6 text-primary-600" />,
      challenge: 'FinanceHub was experiencing long wait times for customer support, leading to customer dissatisfaction and churn.',
      solution: 'We implemented an AI chatbot that handled account inquiries, loan applications, and financial planning assistance around the clock.',
      results: [
        '89% reduction in wait times',
        '73% of inquiries resolved by AI without human intervention',
        '31% increase in customer satisfaction scores',
        '18% reduction in support costs',
      ],
      image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      testimonial: {
        quote: "The AI chatbot has transformed our customer service operations. Our customers appreciate the immediate responses, and our support team can focus on complex financial matters.",
        author: "Emily Rodriguez",
        position: "Customer Experience Director, FinanceHub",
      },
    },
    {
      title: 'EduTech Academy: Streamlining Student Support with AI',
      industry: 'Education',
      icon: <GraduationCap className="h-6 w-6 text-primary-600" />,
      challenge: 'EduTech Academy was struggling to provide timely support to students across different time zones and courses.',
      solution: 'We created an AI chatbot that answered course-related questions, provided study resources, and assisted with enrollment and registration.',
      results: [
        '94% of student inquiries answered within seconds',
        '47% reduction in administrative workload',
        '29% increase in student satisfaction',
        '18% improvement in course completion rates',
      ],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      testimonial: {
        quote: "Our students now have access to support 24/7, regardless of their time zone. The AI chatbot has become an integral part of our educational ecosystem.",
        author: "David Thompson",
        position: "Academic Director, EduTech Academy",
      },
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover how businesses across industries have transformed their operations with FlowAutomate\'s AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-white" ref={ref}>
        <div className="container">
          <SectionHeading
            title="Client Success Stories"
            subtitle="Real results from real businesses using our AI automation solutions."
            centered
          />
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="space-y-24"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-2 rounded-full mr-3">
                      {study.icon}
                    </div>
                    <span className="text-sm font-semibold text-primary-600">{study.industry}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-secondary-900">{study.title}</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
                    <p className="text-secondary-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
                    <p className="text-secondary-600">{study.solution}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-600 mb-6">
                    <p className="italic text-secondary-600 mb-4">"{study.testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{study.testimonial.author}</p>
                      <p className="text-sm text-secondary-500">{study.testimonial.position}</p>
                    </div>
                  </div>
                  
                  <Button to="/contact" variant="primary">
                    Discuss Your Project
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Summary Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="The Impact of AI Automation"
            subtitle="Aggregated results across our client base"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">40%</div>
              <p className="text-secondary-700 font-medium">Average Increase in Customer Engagement</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">65%</div>
              <p className="text-secondary-700 font-medium">Reduction in Response Time</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">30%</div>
              <p className="text-secondary-700 font-medium">Increase in Conversion Rates</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">25%</div>
              <p className="text-secondary-700 font-medium">Reduction in Operational Costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-xl mb-8">
              Join the hundreds of businesses that have transformed their operations with FlowAutomate\'s AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/demo" variant="dark" size="lg">
                Schedule a Demo
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
