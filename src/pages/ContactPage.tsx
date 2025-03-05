import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: 'AI Chatbot Development',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        interest: 'AI Chatbot Development',
      });
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary-600" />,
      title: 'Email Us',
      details: 'info@flowautomate.ai',
      action: 'mailto:info@flowautomate.ai',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary-600" />,
      title: 'Call Us',
      details: '+1 (425) 610-7779',
      action: 'tel:+14256107779',
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: 'Visit Us',
      details: '506 Second Avenue, Suite 1400, Seattle, WA 98104',
      action: 'https://maps.google.com',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about our AI automation solutions? We\'re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.action}
                target={item.title === 'Visit Us' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-secondary-600">{item.details}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form below and we\'ll get back to you as soon as possible."
              />
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-md mb-6">
                  <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We\'ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-secondary-700 mb-1">
                      I\'m interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                    >
                      <option value="AI Chatbot Development">AI Chatbot Development</option>
                      <option value="Multi-Channel Integration">Multi-Channel Integration</option>
                      <option value="Knowledge Base Management">Knowledge Base Management</option>
                      <option value="Live Chat Support">Live Chat Support</option>
                      <option value="White-Label Solutions">White-Label Solutions</option>
                      <option value="Custom AI Solutions">Custom AI Solutions</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      className="flex items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message <Send size={16} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Contact Us"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about our services."
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How quickly can you implement an AI chatbot for my business?</h3>
                <p className="text-secondary-600">
                  Implementation timelines vary based on complexity, but most standard chatbot solutions can be deployed within 2-4 weeks. Custom solutions with advanced integrations may take 4-8 weeks.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Do I need technical expertise to manage the chatbot?</h3>
                <p className="text-secondary-600">
                  No, our platform is designed to be user-friendly. We provide a simple dashboard for content management and analytics that requires no technical expertise.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Can the chatbot integrate with my existing CRM or help desk?</h3>
                <p className="text-secondary-600">
                  Yes, our AI chatbots can integrate with popular CRM systems, help desks, and other business tools. We support integrations with Salesforce, HubSpot, Zendesk, and many others.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How do you ensure data security and privacy?</h3>
                <p className="text-secondary-600">
                  We implement industry-standard security measures, including data encryption, secure authentication, and regular security audits. We are GDPR compliant and can sign custom data processing agreements as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full">
          {/* Placeholder for Google Maps */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <p className="text-secondary-600 font-medium">Interactive Map Would Be Embedded Here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
