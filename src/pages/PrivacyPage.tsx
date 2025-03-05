import React from 'react';
import SectionHeading from '../components/SectionHeading';

const PrivacyPage: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-300">
              Last Updated: {getLastWeekDate()}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li><a href="#data-collection" className="text-primary-600 hover:text-primary-800">Data Collection</a></li>
                <li><a href="#data-usage" className="text-primary-600 hover:text-primary-800">Data Usage</a></li>
                <li><a href="#data-sharing" className="text-primary-600 hover:text-primary-800">Data Sharing</a></li>
                <li><a href="#security" className="text-primary-600 hover:text-primary-800">Security</a></li>
                <li><a href="#ethics" className="text-primary-600 hover:text-primary-800">Ethics & Compliance</a></li>
                <li><a href="#rights" className="text-primary-600 hover:text-primary-800">Your Rights</a></li>
                <li><a href="#children" className="text-primary-600 hover:text-primary-800">Children's Privacy</a></li>
                <li><a href="#changes" className="text-primary-600 hover:text-primary-800">Policy Changes</a></li>
                <li><a href="#contact" className="text-primary-600 hover:text-primary-800">Contact Information</a></li>
              </ol>
            </div>

            <p className="mb-4">
              At FlowAutomate.ai, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            {/* Data Collection Section */}
            <div id="data-collection" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">1. AI-Driven Data Collection & Processing</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc list-inside">
                  <li>We collect data to power AI systems</li>
                  <li>Data is anonymized where possible</li>
                  <li>You control what data is collected</li>
                  <li>Transparent data collection practices</li>
                  <li>Regular data collection audits</li>
                </ul>
              </div>
              
              <p className="mb-4">
                As an AI automation agency, we collect and process data to power our intelligent systems. This includes:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Training Data</h3>
                  <p className="mb-4">
                    To develop and improve our AI models, we may collect:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Process automation patterns</li>
                    <li>Workflow optimization data</li>
                    <li>Business process metadata</li>
                    <li>Task completion metrics</li>
                    <li>System interaction logs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
                  <p className="mb-4">
                    When you use our services, we may collect:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Name and contact information</li>
                    <li>Company details and job role</li>
                    <li>Business process information</li>
                    <li>System integration data</li>
                    <li>Automation workflow details</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Processing Data</h3>
                  <p className="mb-4">
                    Our AI systems may generate and process:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Predictive analytics outputs</li>
                    <li>Process optimization recommendations</li>
                    <li>Automated decision-making logs</li>
                    <li>System performance metrics</li>
                    <li>Anomaly detection data</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Data Usage Section */}
            <div id="data-usage" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">2. AI-Specific Data Usage</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc list-inside">
                  <li>Data used to improve AI models</li>
                  <li>Training data is anonymized</li>
                  <li>You can opt-out of data usage</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Service Usage</h3>
                  <p className="mb-4">
                    We use collected data to power our AI-driven services, including:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Training and improving AI models for process automation</li>
                    <li>Developing intelligent workflow optimization systems</li>
                    <li>Creating predictive analytics for business processes</li>
                    <li>Enhancing automated decision-making capabilities</li>
                    <li>Personalizing AI-driven recommendations</li>
                    <li>Monitoring and improving AI system performance</li>
                    <li>Ensuring AI system security and reliability</li>
                    <li>Developing new AI-powered automation features</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Model Training</h3>
                  <p className="mb-4">
                    We may use anonymized data to:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Train machine learning models</li>
                    <li>Improve algorithm accuracy</li>
                    <li>Develop new automation capabilities</li>
                    <li>Conduct AI research and development</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold">Training Protocols:</p>
                    <ul className="list-disc list-inside">
                      <li>Data anonymization before training</li>
                      <li>Regular model retraining cycles</li>
                      <li>Bias detection in training data</li>
                      <li>Model performance monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Data Sharing Section */}
            <div id="data-sharing" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">3. AI Data Sharing & Third-Party Integrations</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc list-inside">
                  <li>Data shared only with trusted partners</li>
                  <li>Strict data protection agreements</li>
                  <li>You control sharing preferences</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Service Providers</h3>
                  <p className="mb-4">
                    We work with specialized AI providers for:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Cloud-based AI processing</li>
                    <li>Machine learning infrastructure</li>
                    <li>Natural language processing</li>
                    <li>Computer vision services</li>
                    <li>Predictive analytics platforms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Processing Agreements</h3>
                  <p className="mb-4">
                    All third-party AI providers are bound by:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Strict data protection agreements</li>
                    <li>AI ethics compliance standards</li>
                    <li>Regular security audits</li>
                    <li>Data anonymization requirements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Model Sharing</h3>
                  <p className="mb-4">
                    We may share anonymized AI models with:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Research institutions</li>
                    <li>Industry partners</li>
                    <li>Open-source communities</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold">Data Sharing Protocols:</p>
                    <ul className="list-disc list-inside">
                      <li>Data minimization principles</li>
                      <li>Strict access controls</li>
                      <li>Regular sharing audits</li>
                      <li>Transparency reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Security Section */}
            <div id="security" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">4. AI System Security</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc list-inside">
                  <li>Advanced encryption for AI systems</li>
                  <li>Continuous security monitoring</li>
                  <li>Regular security audits</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Security Measures</h3>
                  <p className="mb-4">
                    We implement advanced security measures for our AI systems:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>AI model encryption</li>
                    <li>Secure data pipelines</li>
                    <li>Continuous vulnerability scanning</li>
                    <li>AI-specific threat detection</li>
                    <li>Model integrity verification</li>
                    <li>Data access controls</li>
                    <li>Regular security audits</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Incident Response</h3>
                  <p className="mb-4">
                    Our security protocols include:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>24/7 AI system monitoring</li>
                    <li>Automated anomaly detection</li>
                    <li>Immediate response to AI system issues</li>
                    <li>Regular model performance reviews</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold">Security Protocols:</p>
                    <ul className="list-disc list-inside">
                      <li>Real-time threat monitoring</li>
                      <li>Automated security patching</li>
                      <li>Incident response drills</li>
                      <li>Continuous security training</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ethics Section */}
            <div id="ethics" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">5. AI Ethics & Compliance</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc list-inside">
                  <li>Commitment to ethical AI practices</li>
                  <li>Regular bias detection and mitigation</li>
                  <li>Transparent AI decision-making</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ethical Practices</h3>
                  <p className="mb-4">
                    We are committed to ethical AI practices:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Fairness in AI decision-making</li>
                    <li>Transparency in AI processes</li>
                    <li>Accountability for AI outcomes</li>
                    <li>Regular AI ethics reviews</li>
                    <li>Bias detection and mitigation</li>
                    <li>Explainable AI systems</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Governance</h3>
                  <p className="mb-4">
                    Our AI systems are governed by:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Internal AI ethics board</li>
                    <li>Regular compliance audits</li>
                    <li>Algorithmic impact assessments</li>
                    <li>Continuous monitoring for bias</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* User Rights Section */}
            <div id="rights" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights Regarding Your Information</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc list-inside">
                  <li>Right to access your data</li>
                  <li>Right to request corrections</li>
                  <li>Right to delete your data</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>The right to access personal information we hold about you</li>
                    <li>The right to request correction of inaccurate personal information</li>
                    <li>The right to request deletion of your personal information</li>
                    <li>The right to object to processing of your personal information</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p className="mb-4">
                    To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Children's Privacy Section */}
            <div id="children" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc list-inside">
                  <li>Services not intended for children under 16</li>
                  <li>No collection of children's data</li>
                  <li>Parental controls available</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="mb-4">
                    Our services are not intended for use by children under the age of 16. We do not knowingly collect personal information from children under 16. If you are under 16, please do not provide any personal information through our website or services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Parental Controls</h3>
                  <p className="mb-4">
                    We take children's privacy seriously and have implemented the following measures:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Age verification during account creation</li>
                    <li>Clear labeling of services not intended for children</li>
                    <li>Automatic filtering of content inappropriate for children</li>
                    <li>Parental consent requirements for any potential collection of children's data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Parental Rights</h3>
                  <p className="mb-4">
                    Parents and legal guardians have the right to:
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Review their child's personal information</li>
                    <li>Request deletion of their child's personal information</li>
                    <li>Refuse further collection or use of their child's information</li>
                    <li>Revoke any previously given consent</li>
                  </ul>
                  <p className="mb-4">
                    If you believe we might have any information from or about a child under 16, or if you are a parent/guardian wishing to exercise your rights, please contact us immediately at privacy@flowautomate.ai. We will promptly investigate and take appropriate action, including deleting any improperly collected information.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Policy Changes Section */}
            <div id="changes" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc list-inside">
                  <li>We may update this policy periodically</li>
                  <li>Changes will be notified</li>
                  <li>Continued use constitutes acceptance</li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div id="contact" className="mt-8">
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">
                  For any questions about this Privacy Policy or our services, please contact us:
                </p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Email:</span> privacy@flowautomate.ai</p>
                  <p><span className="font-semibold">Phone:</span> +1 (425) 610-7779</p>
                  <p><span className="font-semibold">Address:</span> 506 Second Avenue, Suite 1400, Seattle, WA 98104</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    For privacy-related inquiries, please use our dedicated privacy email.
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

export default PrivacyPage;
