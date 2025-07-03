'use client';

import React from 'react';
import Image from 'next/image';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Home() {
  const services = [
    {
      title: 'Comprehensive Assessment',
      description: 'A Board Certified Behavior Analyst (BCBA) conducts a comprehensive behavioral assessment and creates an individualized treatment plan.',
    },
    {
      title: 'In-Home Therapy',
      description: 'Individualized therapy programs conducted in the comfort of home creates an approach utilizing the most natural environment allowing faster generalization and realistic outcomes.',
    },
    {
      title: 'Caregiver Guidance',
      description: 'Caregiver input and training are crucial elements of the therapeutic process.',
    },
    {
      title: 'Consultation',
      description: 'Consultation services for families, educators, businesses, or clinicians are available.',
    },
    {
      title: 'School/Daycare Support',
      description: "We partner with the student's school or daycare to develop and implement effective programs to support learning.",
    },
    {
      title: 'Interventions',
      description: 'Interventions include communication, behavior support, social skills, toileting, hygiene, safety, daily living skills, and more.',
    }
  ];

  const chrisValues = [
    {
      letter: 'C',
      word: 'Compassion',
      description: 'We approach every family with understanding, empathy, and genuine care for their unique journey.'
    },
    {
      letter: 'H',
      word: 'Hope',
      description: 'We believe in every child\'s potential and work to inspire confidence in families as they navigate their path forward.'
    },
    {
      letter: 'R',
      word: 'Respect',
      description: 'We honor each child\'s individuality, family values, and cultural background in everything we do.'
    },
    {
      letter: 'I',
      word: 'Inclusion',
      description: 'We create welcoming spaces where every child and family feels valued, accepted, and celebrated.'
    },
    {
      letter: 'S',
      word: 'Support',
      description: 'We stand alongside families, providing guidance, resources, and encouragement every step of the way.'
    }
  ];

  const insuranceLogos = [
    { name: 'Blue Cross Blue Shield', src: '/insurance/bcbs.png' },
    { name: 'Peach State Health Plan', src: '/insurance/peachstate.png' },
    { name: 'Amerigroup', src: '/insurance/amerigroup.png' },
    { name: 'CareSource', src: '/insurance/caresource.png' },
    { name: 'Aetna', src: '/insurance/aetna.png' },
    { name: 'Georgia Medicaid', src: '/insurance/medicaid.png' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Contact Form Section */}
      <section className="py-20 px-4" id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">We're here to help! Send us a message.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field */}
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Phone:</strong>{' '}
                <a href="tel:404-838-7010" className="text-yellow-600 hover:text-yellow-700">
                  404-838-7010
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:admin@klubhousetherapyservices.com" className="text-yellow-600 hover:text-yellow-700">
                  admin@klubhousetherapyservices.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 