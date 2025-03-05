import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="h-10 w-auto mb-6" />
            <p className="text-secondary-300 mb-6">
              Empowering businesses with AI-driven automation solutions to enhance customer engagement and streamline operations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-secondary-300 hover:text-white transition-colors">Solutions</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-secondary-300 hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-secondary-300 hover:text-white transition-colors">Case Studies</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">AI Chatbot Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">Custom AI Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">Multi-Channel Integration</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">AI-Powered Analytics</Link>
              </li>
              <li>
                <Link to="/services#process-automation" className="text-secondary-300 hover:text-white transition-colors">Business Process Automation</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">White-Label Solutions</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-secondary-300">506 Second Avenue, Suite 1400, Seattle, WA 98104</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary-500 flex-shrink-0" />
                <span className="text-secondary-300">+1 (425) 610-7779</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary-500 flex-shrink-0" />
                <span className="text-secondary-300">info@flowautomate.ai</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FlowAutomate.ai. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/faq" className="text-secondary-400 hover:text-white text-sm transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
