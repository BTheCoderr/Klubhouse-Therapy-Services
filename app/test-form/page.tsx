'use client';

import React from 'react';

export default function TestFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Test Form</h1>
        
        <form 
          name="test-form" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          action="/thank-you"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="test-form" />
          
          <p className="hidden">
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </p>
          
          <div>
            <label className="block text-sm font-medium mb-2">Name:</label>
            <input 
              type="text" 
              name="name" 
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email:</label>
            <input 
              type="email" 
              name="email" 
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Phone:</label>
            <input 
              type="tel" 
              name="phone" 
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
          >
            Submit Test Form
          </button>
        </form>
      </div>
    </div>
  );
} 