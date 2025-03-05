import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };
  
  const categories = [
    'all',
    'general',
    'services',
    'pricing',
    'implementation',
    'technical',
    'support',
  ];
  
  const faqs: FAQItem[] = [
    {
      question: 'What is FlowAutomate?',
      answer: 'FlowAutomate is an AI automation agency that specializes in developing custom-branded chatbot solutions, enhanced analytics, multi-channel integration, and other AI-powered services to help businesses improve customer engagement and streamline operations.',
      category: 'general',
    },
    {
      question: 'How can AI chatbots benefit my business?',
      answer: 'AI chatbots can benefit your business in multiple ways: providing 24/7 customer support, automating repetitive tasks, qualifying leads, reducing response times, collecting valuable customer data, and scaling your customer service operations without increasing headcount.',
      category: 'general',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries, including e-commerce, real estate, finance and banking, education, healthcare, travel and hospitality, marketing agencies, and more. Our AI solutions are customizable to meet the specific needs of various business sectors.',
      category: 'general',
    },
    {
      question: 'What services does FlowAutomate offer?',
      answer: 'We offer a comprehensive range of AI automation services, including custom-branded chatbot development, enhanced analytics and reporting, multi-channel integration, knowledge base management, live chat support, client dashboard access, and white-label solutions for agencies.',
      category: 'services',
    },
    {
      question: 'Can you integrate chatbots with my existing systems?',
      answer: 'Yes, our AI chatbots can integrate with your existing CRM, help desk, e-commerce platform, and other business systems. We support integrations with popular platforms like Salesforce, HubSpot, Zendesk, Shopify, and many others.',
      category: 'services',
    },
    {
      question: 'Do you offer white-label solutions for agencies?',
      answer: 'Yes, we offer white-label solutions that allow agencies to provide AI chatbot services to their clients under their own brand. This includes customizable dashboards, analytics, and client management tools.',
      category: 'services',
    },
    {
      question: 'How much does it cost to implement an AI chatbot?',
      answer: 'Our pricing varies based on your specific requirements, business size, and the complexity of the implementation. We offer flexible pricing plans starting from $49/month for basic solutions. For detailed pricing information, please visit our Pricing page or contact our sales team for a custom quote.',
      category: 'pricing',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 14-day free trial on all our plans. This allows you to experience our AI automation solutions and evaluate their impact on your business before making a commitment.',
      category: 'pricing',
    },
    {
      question: 'Are there any setup fees?',
      answer: 'Our standard plans do not include setup fees. However, custom implementations with complex integrations or specific requirements may incur a one-time setup fee. This will be clearly communicated during the consultation process.',
      category: 'pricing',
    },
    {
      question: 'How long does it take to implement an AI chatbot?',
      answer: "Implementation timelines vary based on the complexity of your requirements. Standard chatbot solutions can typically be deployed within 2-4 weeks. Custom solutions with advanced integrations may take 4-8 weeks. We'll provide a specific timeline during the consultation process.",
      category: 'implementation',
    },
    {
      question: 'What is the implementation process like?',
      answer: "Our implementation process includes: 1) Discovery and strategy development, 2) Design and development of your custom solution, 3) Testing and refinement, 4) Deployment across your chosen channels, and 5) Ongoing optimization and support. We'll guide you through each step of the process.",
      category: 'implementation',
    },
    {
      question: 'Do I need technical expertise to manage the chatbot?',
      answer: 'No, our platform is designed to be user-friendly. We provide a simple dashboard for content management and analytics that requires no technical expertise. For more advanced customizations, our team is available to assist you.',
      category: 'implementation',
    },
    {
      question: 'What languages do your chatbots support?',
      answer: 'Our AI chatbots support multiple languages, including English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, and many others. We can implement multilingual support based on your specific requirements.',
      category: 'technical',
    },
    {
      question: 'How do you handle data security and privacy?',
      answer: 'We implement industry-standard security measures, including data encryption, secure authentication, and regular security audits. We are GDPR compliant and can sign custom data processing agreements as needed. Your data security is our top priority.',
      category: 'technical',
    },
    {
      question: 'Can the chatbot handle complex conversations?',
      answer: 'Yes, our AI chatbots are built with advanced natural language processing capabilities that allow them to understand context, remember previous interactions, and handle complex conversations. They can also seamlessly transfer to human agents when needed.',
      category: 'technical',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer various levels of support based on your plan. This includes email support, chat support, phone support, and dedicated account management for enterprise clients. We also provide comprehensive documentation and training resources.',
      category: 'support',
    },
    {
      question: 'How do you handle updates and maintenance?',
      answer: 'We handle all updates and maintenance of the platform, ensuring your chatbot is always running on the latest version with the most advanced features. This is included in your subscription at no additional cost.',
      category: 'support',
    },
    {
      question: 'What happens if I need to make changes to my chatbot?',
      answer: 'You can make basic changes to your chatbot through our user-friendly dashboard. For more complex changes, our support team is available to assist you. Depending on your plan, certain customizations may incur additional fees.',
      category: 'support',
    },
  ];
  
  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions about our AI automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-secondary-400" />
              </div>
              <input
                type="text"
                placeholder="Search for questions or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`px-6 pb-6 ${
                        openItems.includes(index) ? 'block' : 'hidden'
                      }`}
                    >
                      <p className="text-secondary-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-secondary-600 mb-4">No results found for "{searchTerm}"</p>
                <p className="text-secondary-500 mb-6">Try a different search term or browse by category.</p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Our team is here to help. Contact us for personalized assistance with your AI automation needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
              <Button to="/demo" variant="secondary">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
