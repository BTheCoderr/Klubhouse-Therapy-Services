import React from 'react';
import { Footer } from '../../components/Footer';
import Image from 'next/image';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Centered Phone */}
      <header className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="tel:404-838-7010" 
            className="text-2xl md:text-3xl text-klubhouse-black font-semibold hover:text-klubhouse-accent transition-all duration-300 hover:scale-105 inline-block"
          >
            404-838-7010
          </a>
        </div>
      </header>

      {/* Thank You Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-klubhouse-gold rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-klubhouse-accent rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-klubhouse-gold rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 max-w-7xl mx-auto">
            {/* Large Logo with Enhanced Styling */}
            <div className="flex-shrink-0 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-klubhouse-gold/20 to-klubhouse-accent/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <Image
                  src="/images/logo-large.png"
                  alt="Klubhouse Therapy Services"
                  width={400}
                  height={400}
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </div>
            
            {/* Thank You Message */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-gray-800 tracking-wider leading-none">
                  THANK YOU!
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent mx-auto lg:mx-0 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-md leading-relaxed">
                  Your message has been sent successfully. Someone will reach out to you shortly.
                </p>
                
                                 <p className="text-lg text-gray-600 font-light max-w-md leading-relaxed">
                   For immediate assistance, please call us at{' '}
                   <a href="tel:404-838-7010" className="text-klubhouse-accent font-medium hover:underline">
                     404-838-7010
                   </a>
                 </p>
              </div>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href="/" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent text-klubhouse-black font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Return to Home
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a 
                  href="tel:404-838-7010" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-klubhouse-gold text-klubhouse-black font-semibold rounded-full hover:bg-klubhouse-gold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Call Now
                  <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-gradient-to-r from-klubhouse-gold/10 via-white to-klubhouse-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-light text-gray-800 mb-8">Klubhouse Therapy Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-gray-600">
              <div>
                <h3 className="text-lg font-semibold text-klubhouse-gold mb-4">Contact Information</h3>
                <p className="mb-2">
                  <a href="mailto:admin@klubhousetherapyservices.com" className="hover:text-klubhouse-gold transition-colors">
                    admin@klubhousetherapyservices.com
                  </a>
                </p>
                <p className="mb-2">
                  <a href="tel:404-838-7010" className="hover:text-klubhouse-gold transition-colors">
                    404-838-7010
                  </a>
                </p>
                <p>Atlanta, Georgia, United States</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-klubhouse-gold mb-4">Business Hours</h3>
                <div className="space-y-1 text-sm">
                  <p>Monday - Friday: 08:30 am – 05:30 pm</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                At Klubhouse Therapy Services, 
                <span className="text-klubhouse-gold font-medium"> CHRIS</span> means 
                <span className="text-klubhouse-accent font-medium"> Compassion</span> and 
                <span className="text-klubhouse-gold font-medium"> Care</span> at Home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 