import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const DemoPage: React.FC = () => {
  const [step, setStep] = useState(1);
  interface FormData {
    name: string;
    email: string;
    company: string;
    website: string;
    industry: string;
    size: string;
    goals: string[];
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    website: '',
    industry: '',
    size: '',
    goals: [],
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      goals: checked
        ? [...prev.goals, value]
        : prev.goals.filter((goal) => goal !== value),
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };
  
  const demoFeatures = [
    'Custom-branded AI chatbot',
    'Multi-channel integration',
    'Analytics dashboard',
    'Knowledge base management',
    'Live chat support',
    'Personalized recommendations',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience FlowAutomate in Action</h1>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo to see how our AI automation solutions can transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                <p className="text-xl text-secondary-600 mb-6">
                  Your demo request has been submitted successfully. One of our team members will contact you shortly to schedule your personalized demo.
                </p>
                <Button to="/" variant="primary">
                  Return to Home
                </Button>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`flex items-center ${s < 3 ? 'w-full' : ''}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                            s === step
                              ? 'bg-primary-600 text-white'
                              : s < step
                              ? 'bg-green-100 text-green-600'
                              : 'bg-gray-200 text-secondary-400'
                          }`}
                        >
                          {s < step ? <Check className="h-4 w-4" /> : s}
                        </div>
                        <div
                          className={`text-sm font-medium ml-2 ${
                            s === step
                              ? 'text-primary-600'
                              : s < step
                              ? 'text-green-600'
                              : 'text-secondary-400'
                          }`}
                        >
                          {s === 1 ? 'Basic Info' : s === 2 ? 'Business Details' : 'Confirmation'}
                        </div>
                        {s < 3 && (
                          <div
                            className={`h-1 w-full ml-2 ${
                              s < step ? 'bg-green-500' : 'bg-gray-200'
                            }`}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Tell us about yourself</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-1">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                          />
                        </div>
                        <div>
                          <label htmlFor="website" className="block text-sm font-medium text-secondary-700 mb-1">
                            Website URL
                          </label>
                          <input
                            type="url"
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end mt-8">
                        <Button type="button" variant="primary" onClick={nextStep}>
                          Next Step <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {step === 2 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Tell us about your business</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="industry" className="block text-sm font-medium text-secondary-700 mb-1">
                            Industry *
                          </label>
                          <select
                            id="industry"
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                          >
                            <option value="">Select Industry</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Finance">Finance & Banking</option>
                            <option value="Education">Education</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Travel">Travel & Hospitality</option>
                            <option value="Marketing">Marketing & Digital Agency</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="size" className="block text-sm font-medium text-secondary-700 mb-1">
                            Company Size *
                          </label>
                          <select
                            id="size"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                          >
                            <option value="">Select Size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="501+">501+ employees</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          What are your goals with AI automation? (Select all that apply) *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            'Improve customer service',
                            'Reduce operational costs',
                            'Generate more leads',
                            'Increase sales conversions',
                            'Automate repetitive tasks',
                            'Enhance user experience',
                            'Provide 24/7 support',
                            'Other',
                          ].map((goal) => (
                            <div key={goal} className="flex items-center">
                              <input
                                type="checkbox"
                                id={goal.replace(/\s+/g, '-').toLowerCase()}
                                name="goals"
                                value={goal}
                                checked={formData.goals.includes(goal)}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                              />
                              <label
                                htmlFor={goal.replace(/\s+/g, '-').toLowerCase()}
                                className="ml-2 text-sm text-secondary-700"
                              >
                                {goal}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                          placeholder="Tell us about your specific needs or challenges..."
                        ></textarea>
                      </div>
                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="secondary" onClick={prevStep}>
                          Previous
                        </Button>
                        <Button type="button" variant="primary" onClick={nextStep}>
                          Next Step <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {step === 3 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Confirm Your Information</h2>
                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-secondary-500">Full Name</p>
                            <p className="font-medium">{formData.name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-secondary-500">Email Address</p>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-secondary-500">Company Name</p>
                            <p className="font-medium">{formData.company}</p>
                          </div>
                          <div>
                            <p className="text-sm text-secondary-500">Website URL</p>
                            <p className="font-medium">{formData.website || 'Not provided'}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <h3 className="text-lg font-semibold mb-4">Business Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-secondary-500">Industry</p>
                            <p className="font-medium">{formData.industry}</p>
                          </div>
                          <div>
                            <p className="text-sm text-secondary-500">Company Size</p>
                            <p className="font-medium">{formData.size}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-secondary-500 mb-2">Goals with AI Automation</p>
                          <ul className="list-disc list-inside">
                            {formData.goals.map((goal) => (
                              <li key={goal} className="font-medium">{goal}</li>
                            ))}
                          </ul>
                        </div>
                        {formData.message && (
                          <div className="mt-4">
                            <p className="text-sm text-secondary-500 mb-2">Additional Information</p>
                            <p className="font-medium">{formData.message}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="secondary" onClick={prevStep}>
                          Previous
                        </Button>
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Schedule Demo'}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="What to Expect in Your Demo"
            subtitle="Get a comprehensive overview of our AI automation platform and how it can benefit your business."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {demoFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary-600" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="text-secondary-600 mb-4">
                  Our demos are tailored to your specific industry and business needs. We'll show you real-world examples of how our AI automation solutions have helped similar businesses achieve their goals.
                </p>
                <p className="text-secondary-600">
                  After the demo, our team will provide a personalized recommendation and answer any questions you may have about implementation, pricing, and timeline.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Demo Preview"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Hear from businesses that have transformed their operations with FlowAutomate."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="italic text-secondary-600 mb-4">
                "The demo was incredibly informative and tailored to our specific needs. The team took the time to understand our challenges and showed us exactly how their solution could help."
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-secondary-500">CEO, TechRetail</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="italic text-secondary-600 mb-4">
                "After seeing the demo, we were convinced that FlowAutomate was the right solution for our business. The implementation was smooth, and we saw results within weeks."
              </p>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-secondary-500">CTO, FinanceHub</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="italic text-secondary-600 mb-4">
                "The personalized demo showed us exactly how we could leverage AI automation to enhance our customer service. The ROI has been exceptional."
              </p>
              <div>
                <p className="font-semibold">Emily Rodriguez</p>
                <p className="text-sm text-secondary-500">Director, MarketingPro Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about our demo process and AI automation solutions."
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">How long does the demo typically last?</h3>
                <p className="text-secondary-600">
                  Our demos typically last 30-45 minutes, including time for questions and discussion. We can adjust the length based on your availability and specific needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Is the demo personalized to my business?</h3>
                <p className="text-secondary-600">
                  Yes, we tailor each demo to your specific industry, business size, and challenges. We'll show you relevant examples and use cases that align with your goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Who should attend the demo from my team?</h3>
                <p className="text-secondary-600">
                  We recommend including decision-makers and stakeholders who would be involved in implementing and using the AI automation solution, such as marketing, customer service, and IT representatives.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">What happens after the demo?</h3>
                <p className="text-secondary-600">
                  After the demo, our team will provide a personalized recommendation and proposal based on your specific needs. We'll also answer any additional questions and discuss next steps if you're interested in moving forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
