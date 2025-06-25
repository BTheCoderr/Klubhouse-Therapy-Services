import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-light text-gray-800 mb-8">Thank You!</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              For immediate assistance, please call us at{' '}
              <a href="tel:404-838-7010" className="text-blue-600 hover:text-blue-700">
                404-838-7010
              </a>
            </p>
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 