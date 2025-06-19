"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What is YANYAN FITNESS ?",
    answer: "YANYAN FITNESS is a comprehensive fitness platform that provides personalized workout plans, nutrition guidance, and wellness coaching to help you achieve your fitness goals. Our platform combines cutting-edge technology with expert knowledge to deliver results."
  },
  {
    question: "How do I create an account?",
    answer: "Creating an account is simple! Click on the 'Sign Up' button in the top right corner, fill in your basic information, choose your fitness goals, and you'll be ready to start your fitness journey with us in just a few minutes."
  },
  {
    question: "Is your website free to use?",
    answer: "We offer both free and premium options. Our basic features including workout tracking and community access are completely free. Premium features like personalized coaching and advanced analytics require a subscription."
  },
  {
    question: "Do I need to pay to access workouts and features?",
    answer: "While many of our core workouts and features are available for free, our premium subscription unlocks exclusive workouts, personalized meal plans, one-on-one coaching sessions, and advanced progress tracking tools."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial for all our premium features. No credit card required to start your trial. You can explore all premium features risk-free and decide if it's right for you."
  },
  {
    question: "How much does a membership cost?",
    answer: "Our premium membership starts at $19.99/month or $199/year (save 17%). We also offer a premium plus plan at $29.99/month with additional features like live coaching sessions and custom meal planning."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            FAQs
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Before reaching out, check our{' '}
            <span className="text-orange-500 underline cursor-pointer hover:text-orange-400 transition-colors">
              FAQ section
            </span>{' '}
            for quick answers to common questions regarding workouts, features, subscriptions, and more!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group focus:outline-none"
              >
                <h3 className="text-xl font-medium text-orange-500 group-hover:text-orange-400 transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-orange-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  } group-hover:text-orange-400`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="h-px bg-gradient-to-r from-orange-500/50 to-transparent mb-4" />
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
