import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const BlogPage: React.FC = () => {
  const featuredPost = {
    title: 'How AI Chatbots Are Revolutionizing Customer Service in 2025',
    excerpt: 'Discover the latest trends in AI-powered customer service and how businesses are leveraging chatbots to enhance customer experience and drive growth.',
    image: 'https://images.unsplash.com/photo-1596638787647-904d822d751e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    date: 'May 15, 2025',
    author: 'Alex Johnson',
    category: 'AI Trends',
  };
  
  const blogPosts = [
    {
      title: '5 Ways AI Automation Can Boost Your E-commerce Sales',
      excerpt: 'Learn how AI-powered chatbots and automation tools can help increase conversions, reduce cart abandonment, and enhance the shopping experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'May 10, 2025',
      author: 'Sophia Chen',
      category: 'E-commerce',
    },
    {
      title: 'The Future of Conversational AI: Beyond Simple Chatbots',
      excerpt: 'Explore the evolution of conversational AI and how advanced natural language processing is creating more human-like interactions.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'May 5, 2025',
      author: 'Marcus Williams',
      category: 'AI Technology',
    },
    {
      title: 'Implementing AI Chatbots: A Step-by-Step Guide for Businesses',
      excerpt: 'A comprehensive guide to implementing AI chatbots in your business, from planning and development to deployment and optimization.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'April 28, 2025',
      author: 'Olivia Martinez',
      category: 'Implementation',
    },
    {
      title: 'How AI Is Transforming the Real Estate Industry',
      excerpt: 'Discover how real estate agencies are using AI chatbots to automate property inquiries, schedule viewings, and provide 24/7 customer support.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'April 22, 2025',
      author: 'David Thompson',
      category: 'Real Estate',
    },
    {
      title: 'Measuring ROI: The Business Case for AI Automation',
      excerpt: 'Learn how to measure the return on investment for AI automation solutions and build a compelling business case for implementation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'April 15, 2025',
      author: 'Sarah Johnson',
      category: 'Business Strategy',
    },
    {
      title: 'AI Ethics: Ensuring Responsible Automation in Business',
      excerpt: 'An exploration of ethical considerations in AI automation and how businesses can implement responsible AI practices.',
      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      date: 'April 8, 2025',
      author: 'Michael Chen',
      category: 'AI Ethics',
    },
  ];
  
  const categories = [
    'AI Trends',
    'E-commerce',
    'AI Technology',
    'Implementation',
    'Real Estate',
    'Business Strategy',
    'AI Ethics',
    'Customer Service',
    'Case Studies',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Automation Insights</h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert insights, industry trends, and practical guides on AI automation and chatbot technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Featured Article"
            subtitle="Our latest insights on AI automation and chatbot technology"
            centered
          />
          
          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-100 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-secondary-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-secondary-500 mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                <Button to="/blog" variant="primary">
                  Read Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-primary-100 text-primary-600 text-xs font-semibold px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-secondary-600 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-xs text-secondary-500 mb-4">
                        <div className="flex items-center mr-3">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <Link to="/blog" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                        Read more <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Button to="/blog" variant="secondary">
                  View All Articles
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link to="/blog" className="flex items-center text-secondary-700 hover:text-primary-600 transition-colors">
                        <ArrowRight size={16} className="mr-2 text-primary-600" />
                        <span>{category}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-secondary-600 mb-4">
                  Stay updated with the latest insights on AI automation and chatbot technology.
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Learn More About AI Automation?</h2>
            <p className="text-xl mb-8">
              Schedule a consultation with our experts to discuss how AI automation can benefit your business.
            </p>
            <Button to="/contact" variant="dark" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;