'use client';

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl font-light text-gray-800 mb-6">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-8">
          We've received your message and will get back to you as soon as possible.
        </p>
        <a
          href="/"
          className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-200"
        >
          Return to Homepage
        </a>
      </div>

      <Footer />
    </div>
  );
} 