import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const AboutPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const teamMembers = [
    {
      name: 'Jociah Starks',
      position: 'CEO & Founder',
      bio: 'With over 5 years in AI and automation, Jociah founded FlowAutomate as the pioneer of AI and Automation agency services. Recognized as a thought leader in AI-driven business transformation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Sophia Chen',
      position: 'CTO',
      bio: 'Sophia leads our technical team, bringing expertise in machine learning and conversational AI development.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Marcus Williams',
      position: 'Head of AI Research',
      bio: 'Marcus oversees our AI research initiatives, ensuring our solutions leverage cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Olivia Martinez',
      position: 'Client Success Director',
      bio: 'Olivia ensures our clients achieve their business goals through effective implementation of our AI solutions.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: 'Innovation',
      description: 'We continuously push the boundaries of AI technology to deliver cutting-edge solutions.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Client Success',
      description: "Our clients' success is our success. We're committed to delivering measurable results.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary-600" />,
      title: 'Adaptability',
      description: 'We evolve with the rapidly changing technology landscape to keep our clients ahead.',
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service and solution delivery.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About FlowAutomate</h1>
            <p className="text-xl text-gray-300 mb-8">
              We're on a mission to transform how businesses engage with their customers through intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="How FlowAutomate began and where we're headed"
              />
              <p className="mb-6 text-secondary-600">
                Founded in 2024, FlowAutomate emerged as the pioneer in AI and Automation agency services. Our founder, Jociah Starks, recognized that AI automation could bridge the gap in customer engagement, providing personalized interactions at scale.
              </p>
              <p className="mb-6 text-secondary-600">
                What started as a small team of AI enthusiasts has grown into a comprehensive AI automation agency serving clients across various industries. Our journey has been defined by continuous innovation and a relentless focus on delivering measurable results for our clients.
              </p>
              <p className="text-secondary-600">
                Today, FlowAutomate stands at the forefront of conversational AI and business automation, helping companies of all sizes transform their customer engagement strategies and operational efficiency.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="FlowAutomate team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">Our Mission</h3>
              <p className="text-secondary-600">
                To empower businesses with intelligent automation solutions that enhance customer engagement, streamline operations, and drive growth. We believe that AI should be accessible to businesses of all sizes, enabling them to compete effectively in an increasingly digital world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">Our Vision</h3>
              <p className="text-secondary-600">
                To be the leading provider of AI automation solutions globally, known for innovation, excellence, and measurable client success. We envision a future where businesses can seamlessly blend human expertise with AI capabilities to create exceptional customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-white" ref={ref}>
        <div className="container">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at FlowAutomate"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The experts behind FlowAutomate's innovative AI solutions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-secondary-600">{member.bio}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">
              Join the hundreds of businesses that have transformed their operations with FlowAutomate's AI solutions.
            </p>
            <Button to="/contact" variant="dark" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
