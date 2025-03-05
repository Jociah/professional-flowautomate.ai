import React, { useState } from 'react';
import { Check, X, HelpCircle, Info } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

// Define types for our plan categories
type CategoryId = 'aiCapabilities' | 'includedUsage' | 'integrationOptions' | 'customizationBranding' | 'supportLevel' | 'aiTraining' | 'addOns';

interface PlanCategories {
  aiCapabilities: string;
  includedUsage: string;
  integrationOptions: string;
  customizationBranding: string;
  supportLevel: string;
  aiTraining: string;
  addOns: string;
}

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  pricingNote: string;
  setupFee: number;
  setupFeeDescription: string;
  popular?: boolean;
  categories: PlanCategories;
}

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };
  
  const plans: Plan[] = [
    {
      name: 'FlowStart',
      description: 'Essential AI automation for small businesses.',
      monthlyPrice: 59,
      annualPrice: 49,
      pricingNote: 'Budget-friendly for SMBs',
      setupFee: 150,
      setupFeeDescription: 'Basic installation and minimal customization (per bot)',
      categories: {
        aiCapabilities: 'Streamlined AI chatbot for FAQs and basic customer inquiries.',
        includedUsage: '750 chats/month, 1 chatbot, 1 admin seat. Overage: $0.08/chat.',
        integrationOptions: 'Website widget and email integration. Basic data exchange.',
        customizationBranding: 'Essential branding options with "Powered by" attribution.',
        supportLevel: 'Standard email support with 1-2 day response time.',
        aiTraining: 'Pre-configured AI with basic self-service training options.',
        addOns: 'Additional chat packs, premium features, and integrations available.'
      }
    },
    {
      name: 'FlowPro',
      description: 'Advanced automation for growing businesses.',
      monthlyPrice: 189,
      annualPrice: 159,
      pricingNote: 'Ideal for scaling operations',
      setupFee: 500,
      setupFeeDescription: 'Advanced setup, integrations, and AI training (per bot)',
      popular: true,
      categories: {
        aiCapabilities: 'Enhanced AI with context awareness and multi-language support.',
        includedUsage: '2,500 chats/month, 3-5 bots, 3 user seats. Overage: $0.05/chat.',
        integrationOptions: 'CRM, e-commerce, and business tools integration with API access.',
        customizationBranding: 'Advanced branding with minimal vendor attribution.',
        supportLevel: 'Priority support with same-day response and live chat assistance.',
        aiTraining: 'Custom AI training with performance analytics and optimization.',
        addOns: 'Premium analytics, additional channels, and specialized features.'
      }
    },
    {
      name: 'FlowEnterprise',
      description: 'Enterprise-grade solution with maximum flexibility.',
      monthlyPrice: 599,
      annualPrice: 499,
      pricingNote: 'Custom enterprise pricing available',
      setupFee: 2500,
      setupFeeDescription: 'Full-service implementation and customization (per bot)',
      categories: {
        aiCapabilities: 'State-of-the-art AI with full customization and enterprise integration.',
        includedUsage: '4,000 chats/month base, unlimited bots and users. Custom overage rates.',
        integrationOptions: 'Complete integration suite with custom system connectivity.',
        customizationBranding: 'Complete white-label solution with full brand control.',
        supportLevel: 'Dedicated 24/7 support with account manager and SLA guarantees.',
        aiTraining: 'Managed AI optimization with custom model development.',
        addOns: 'Enterprise add-ons including compliance modules and specialized services.'
      }
    },
  ];
  
  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'What happens if I exceed my monthly conversation limit?',
      answer: 'If you exceed your monthly conversation limit, you\'ll be charged an overage fee based on your plan tier. We\'ll notify you when you\'re approaching your limit.',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time. If you cancel, you\'ll have access to your plan until the end of your current billing period.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also support payment via PayPal and bank transfers for annual plans.',
    },
    {
      question: 'Do you offer custom plans?',
      answer: 'Yes, we offer custom plans for businesses with specific requirements. Contact our sales team to discuss your needs and get a tailored quote.',
    },
  ];

  // Categories for the pricing table
  const categories: Array<{id: CategoryId, name: string}> = [
    { id: 'aiCapabilities', name: 'AI Capabilities' },
    { id: 'includedUsage', name: 'Included Usage' },
    { id: 'integrationOptions', name: 'Integration Options' },
    { id: 'customizationBranding', name: 'Customization & Branding' },
    { id: 'supportLevel', name: 'Support Level' },
    { id: 'aiTraining', name: 'AI Training & Improvement' },
    { id: 'addOns', name: 'Add-Ons & Upsells' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose the plan that\'s right for your business. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex items-center">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium ${
                  isAnnual ? 'bg-white shadow-sm text-secondary-900' : 'text-secondary-600'
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual Billing
                {isAnnual && <span className="ml-2 text-xs text-primary-600 font-semibold">Save 20%</span>}
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium ${
                  !isAnnual ? 'bg-white shadow-sm text-secondary-900' : 'text-secondary-600'
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly Billing
              </button>
            </div>
          </div>
          
          {/* Plan Cards - For Mobile View */}
          <div className="grid grid-cols-1 gap-8 md:hidden">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg ${
                  plan.popular
                    ? 'ring-2 ring-primary-600 shadow-xl relative'
                    : 'border border-gray-200 shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg border border-primary-400 flex items-center">
                    <svg className="w-3 h-3 mr-1 text-yellow-300 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    Most Popular
                  </div>
                )}
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">{plan.name}</h3>
                  <p className="text-secondary-600 mb-6">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-secondary-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-secondary-600 ml-1">/month</span>
                  </div>
                  <p className="text-sm text-secondary-600 mb-2">{plan.pricingNote}</p>
                  <div className="mb-3 text-xs bg-gray-100 p-2 rounded">
                    <span className="font-medium">Setup fee:</span> <span className="text-primary-700">${plan.setupFee}</span>
                    <p className="text-secondary-500 mt-1">{plan.setupFeeDescription}</p>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-primary-600 mb-3">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </p>
                  )}
                  <Button
                    to="/demo"
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-4">Plan Details:</h4>
                  <div className="space-y-6">
                    {categories.map((category) => (
                      <div key={category.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <h5 className="font-medium text-secondary-900 mb-2 flex items-center">
                          {category.name}
                        </h5>
                        <p className="text-secondary-700 text-sm">
                          {plan.categories[category.id]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pricing Table - For Desktop View */}
          <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200 shadow-md">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-gray-50">
              <div className="p-4 border-r border-gray-200">
                <h3 className="text-lg font-semibold text-secondary-900">Plan Tier</h3>
              </div>
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`p-4 text-center ${plan.popular ? 'bg-primary-50' : ''} ${
                    index < plans.length - 1 ? 'border-r border-gray-200' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="inline-block bg-gradient-to-r from-primary-500 to-primary-700 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2 shadow-md border border-primary-400 flex items-center">
                      <svg className="w-3 h-3 mr-1 text-yellow-300 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-secondary-900">{plan.name}</h3>
                  <p className="text-xs text-secondary-600 mt-1 mb-3">{plan.description}</p>
                  <div className="mb-1">
                    <span className="text-2xl font-bold text-secondary-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-secondary-600 text-xs ml-1">/month</span>
                  </div>
                  <p className="text-xs text-secondary-600 mb-2">{plan.pricingNote}</p>
                  {isAnnual && (
                    <p className="text-xs text-primary-600 mb-2">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </p>
                  )}
                  <div className="mb-3 text-xs bg-gray-100 p-2 rounded mx-auto max-w-[180px]">
                    <span className="font-medium">Setup fee:</span> <span className="text-primary-700">${plan.setupFee}</span>
                    <p className="text-secondary-500 mt-1 text-[10px]">{plan.setupFeeDescription}</p>
                  </div>
                  <Button
                    to="/demo"
                    variant={plan.popular ? 'primary' : 'secondary'}
                    size="sm"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
            
            {/* Table Body */}
            {categories.map((category, categoryIndex) => (
              <div 
                key={category.id} 
                className={`grid grid-cols-4 ${
                  categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <div className="p-4 border-t border-r border-gray-200">
                  <h4 className="font-medium text-secondary-900 flex items-center text-sm">
                    {category.name}
                    <Info className="h-3.5 w-3.5 text-secondary-400 ml-1 cursor-help" />
                  </h4>
                </div>
                {plans.map((plan, planIndex) => (
                  <div 
                    key={`${category.id}-${planIndex}`} 
                    className={`p-4 border-t ${
                      plan.popular ? 'bg-primary-50/50' : ''
                    } ${
                      planIndex < plans.length - 1 ? 'border-r border-gray-200' : ''
                    }`}
                  >
                    <p className="text-xs text-secondary-700">
                      {plan.categories[category.id]}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-secondary-900">Need a Custom Solution?</h2>
                <p className="text-lg text-secondary-600 mb-6">
                  We offer tailored solutions for businesses with specific requirements. Our team will work with you to create a custom plan that meets your unique needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom AI model training for your industry</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dedicated implementation and support team</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom integrations with your existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Enterprise-grade security and compliance</span>
                  </li>
                </ul>
                <Button to="/contact" variant="primary" size="lg">
                  Contact Sales
                </Button>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Enterprise Solutions"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our pricing and plans."
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <HelpCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Try FlowAutomate risk-free with our 14-day trial. No credit card required.
            </p>
            <Button to="/demo" variant="dark" size="lg">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
