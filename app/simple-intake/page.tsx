'use client';

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function SimpleIntakePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-gray-800 mb-4">
              Simple Intake Form
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Please fill out this brief form to get started
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form 
              name="simple-intake" 
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="simple-intake" />
              
              {/* Honeypot field */}
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Child's Name *</label>
                <input 
                  type="text" 
                  name="childName" 
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Parent Email *</label>
                <input 
                  type="email" 
                  name="parentEmail" 
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brief Notes</label>
                <textarea 
                  name="notes" 
                  rows={4} 
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none transition-all"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 