import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Building, Landmark, GraduationCap, Plane, Users, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const SolutionsPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const industries = [
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary-600" />,
      title: 'E-commerce',
      description: 'Enhance customer experience and boost sales with AI-powered product recommendations, order tracking, and 24/7 support.',
      benefits: [
        'Reduce cart abandonment with timely interventions',
        'Automate order status updates and shipping notifications',
        'Provide personalized product recommendations',
        'Handle returns and exchanges efficiently',
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Building className="h-12 w-12 text-primary-600" />,
      title: 'Real Estate',
      description: 'Streamline property inquiries, schedule viewings, and provide instant information to potential buyers and renters.',
      benefits: [
        'Qualify leads with automated initial conversations',
        'Schedule property viewings without human intervention',
        'Answer common questions about listings and neighborhoods',
        'Follow up with prospects automatically',
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Landmark className="h-12 w-12 text-primary-600" />,
      title: 'Finance & Banking',
      description: 'Automate customer inquiries related to loans, transactions, and account management while maintaining security.',
      benefits: [
        'Handle account balance and transaction history inquiries',
        'Provide loan application assistance and status updates',
        'Offer financial planning tips and resources',
        'Detect and alert customers to potential fraud',
      ],
      image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary-600" />,
      title: 'Education',
      description: 'Support students with course-related questions, admissions information, and 24/7 learning assistance.',
      benefits: [
        'Answer frequently asked questions about courses and programs',
        'Provide enrollment and registration assistance',
        'Offer study resources and learning support',
        'Send reminders for assignments and deadlines',
      ],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Plane className="h-12 w-12 text-primary-600" />,
      title: 'Travel & Hospitality',
      description: 'Automate bookings, customer inquiries, and travel recommendations for a seamless customer experience.',
      benefits: [
        'Handle booking inquiries and reservations',
        'Provide real-time updates on flight and hotel availability',
        'Offer personalized travel recommendations',
        'Assist with itinerary planning and changes',
      ],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Users className="h-12 w-12 text-primary-600" />,
      title: 'Marketing & Digital Agencies',
      description: 'Offer white-label chatbot solutions to enhance customer engagement for your clients.',
      benefits: [
        'Provide AI chatbots as a value-added service to clients',
        'Generate leads and qualify prospects automatically',
        'Gather customer insights and feedback',
        'Enhance client retention with innovative offerings',
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Solutions</h1>
            <p className="text-xl text-gray-300 mb-8">
              Tailored AI automation solutions designed for the specific needs of your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="section bg-white" ref={ref}>
        <div className="container">
          <SectionHeading
            title="Solutions by Industry"
            subtitle="Discover how our AI automation solutions can be tailored to address the unique challenges of your industry."
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
            className="space-y-24"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{industry.icon}</div>
                    <h3 className="text-3xl font-bold text-secondary-900">{industry.title}</h3>
                  </div>
                  <p className="text-lg text-secondary-600 mb-6">{industry.description}</p>
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {industry.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button to="/contact" variant="primary">
                    Learn More
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Don\'t See Your Industry?"
                subtitle="We offer custom AI automation solutions for businesses across all sectors."
              />
              <p className="text-secondary-600 mb-6">
                Our team of AI experts can develop tailored solutions to address your specific business challenges and requirements. We work closely with you to understand your unique needs and create a customized implementation plan.
              </p>
              <p className="text-secondary-600 mb-8">
                Whether you\'re in manufacturing, healthcare, legal services, or any other industry, our flexible AI automation platform can be adapted to enhance your customer engagement and streamline your operations.
              </p>
              <Button to="/contact" variant="primary">
                Request a Custom Solution
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Custom Solutions"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-xl mb-8">
              Join the leading businesses in your sector that are leveraging AI automation to gain a competitive edge.
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

export default SolutionsPage;
