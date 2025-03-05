import React from 'react';
import SectionHeading from '../components/SectionHeading';

const TermsPage: React.FC = () => {
  // Calculate date from one week ago
  const getLastWeekDate = () => {
    const today = new Date();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);
    
    // Format the date
    return lastWeek.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-300">
              Last Updated: {getLastWeekDate()}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li><a href="#introduction" className="text-primary-600 hover:text-primary-800">Introduction</a></li>
                <li><a href="#ai-services" className="text-primary-600 hover:text-primary-800">AI Services Overview</a></li>
                <li><a href="#user-rights" className="text-primary-600 hover:text-primary-800">User Rights & Responsibilities</a></li>
                <li><a href="#data-usage" className="text-primary-600 hover:text-primary-800">Data Usage & AI Training</a></li>
                <li><a href="#legal-terms" className="text-primary-600 hover:text-primary-800">Legal Terms</a></li>
                <li><a href="#contact" className="text-primary-600 hover:text-primary-800">Contact Information</a></li>
              </ol>
            </div>

            {/* Introduction Section */}
            <div id="introduction">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to FlowAutomate.ai, your partner in AI-driven automation solutions. These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using FlowAutomate.ai, you agree to be bound by these Terms.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc list-inside">
                  <li>These terms apply to all users of our services</li>
                  <li>By using our services, you agree to these terms</li>
                  <li>We may update these terms periodically</li>
                </ul>
              </div>
            </div>

            {/* AI Services Section */}
            <div id="ai-services" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">2. AI Services Overview</h2>
              <p className="mb-4">
                FlowAutomate.ai provides advanced AI automation solutions, including but not limited to:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>AI-powered workflow automation</li>
                <li>Intelligent process optimization</li>
                <li>Predictive analytics solutions</li>
                <li>Natural language processing tools</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">Important Notes:</p>
                <ul className="list-disc list-inside">
                  <li>Our AI systems continuously learn and improve</li>
                  <li>AI outputs are probabilistic and not guaranteed</li>
                  <li>Human oversight is recommended for critical decisions</li>
                </ul>
              </div>
            </div>

            {/* User Rights Section */}
            <div id="user-rights" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">3. User Rights & Responsibilities</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Account Management</h3>
                  <p>
                    To access certain features of our services, you may be required to create an account. You are responsible for:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Subscription Terms</h3>
                  <p>
                    Our services are offered on a subscription basis. By subscribing, you agree to:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Pay all fees associated with your plan</li>
                    <li>Authorize automatic billing of your payment method</li>
                    <li>Understand fees are non-refundable except as required by law</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold">Billing Details:</p>
                    <ul className="list-disc list-inside">
                      <li>Fees billed monthly or annually</li>
                      <li>Automatic renewal unless canceled</li>
                      <li>30-day notice for price changes</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Content Usage</h3>
                  <p>
                    You retain ownership of any content you submit ("User Content"), but grant us a:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Worldwide, non-exclusive license to use your content</li>
                    <li>Right to modify and adapt content for service provision</li>
                    <li>Royalty-free right to distribute your content</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Usage Section */}
            <div id="data-usage" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Usage & AI Training</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Model Training</h3>
                  <p>
                    To improve our AI systems, we may use:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Anonymized usage data for model training</li>
                    <li>Aggregated performance metrics</li>
                    <li>User feedback to enhance accuracy</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold">Your Rights:</p>
                    <ul className="list-disc list-inside">
                      <li>Opt-out of data usage for training</li>
                      <li>Request data deletion</li>
                      <li>Access training data reports</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Retention</h3>
                  <p>
                    We retain data for AI improvement purposes under these guidelines:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Training data is anonymized within 30 days</li>
                    <li>Models are retrained quarterly</li>
                    <li>Data is securely deleted after 2 years</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Transparency</h3>
                  <p>
                    We are committed to responsible AI practices:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Clear documentation of AI capabilities</li>
                    <li>Regular accuracy reporting</li>
                    <li>Human review options for critical decisions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Legal Terms Section */}
            <div id="legal-terms" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">5. Legal Terms</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Service Termination</h3>
                  <p>
                    We may terminate or suspend your account and access to our services:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>At our sole discretion</li>
                    <li>Without notice</li>
                    <li>For any reason, including violation of these Terms</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold">Your Options:</p>
                    <ul className="list-disc list-inside">
                      <li>Terminate subscription via account settings</li>
                      <li>Contact support for assistance</li>
                      <li>Request account data export</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Warranties & Liability</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold">Service Disclaimer:</p>
                    <ul className="list-disc list-inside">
                      <li>Services provided "as is" and "as available"</li>
                      <li>No warranties of merchantability or fitness</li>
                      <li>No guarantee of uninterrupted or error-free service</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold">Liability Limitations:</p>
                    <ul className="list-disc list-inside">
                      <li>No liability for indirect or consequential damages</li>
                      <li>No liability for data loss or system failures</li>
                      <li>Maximum liability limited to fees paid</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Legal Provisions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Indemnification</h4>
                      <p>
                        You agree to defend and indemnify FlowAutomate.ai against claims arising from:
                      </p>
                      <ul className="list-disc list-inside mb-4">
                        <li>Your use of our services</li>
                        <li>Violation of these Terms</li>
                        <li>Infringement of third-party rights</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold">Governing Law</h4>
                      <p>
                        These Terms are governed by California law, excluding conflict of law provisions.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold">Changes to Terms</h4>
                      <p>
                        We may modify these Terms and will provide notice of material changes. Your continued use constitutes acceptance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">
                  For any questions about these Terms or our services, please contact us:
                </p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Email:</span> legal@flowautomate.ai</p>
                  <p><span className="font-semibold">Phone:</span> +1 (425) 610-7779</p>
                  <p><span className="font-semibold">Address:</span> 506 Second Avenue, Suite 1400, Seattle, WA 98104</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    For legal notices, please use our registered agent address.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
