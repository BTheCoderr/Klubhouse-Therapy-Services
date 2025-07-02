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
      
      {/* Amazing Hero Section */}
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
                  width={500}
                  height={500}
                  className="w-80 h-80 lg:w-[28rem] lg:h-[28rem] object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </div>
            
            {/* Welcome Text with Amazing Typography */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-gray-800 tracking-wider leading-none">
                  WELCOME
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent mx-auto lg:mx-0 rounded-full"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-md leading-relaxed">
                At Klubhouse Therapy Services, 
                <span className="text-klubhouse-gold font-medium"> CHRIS</span> means 
                <span className="text-klubhouse-accent font-medium"> Compassion</span> and 
                <span className="text-klubhouse-gold font-medium"> Care</span> at Home.
              </p>
              
              {/* Call to Action */}
              <div className="pt-6 space-y-4">
                <a 
                  href="/intake" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent text-klubhouse-black font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Complete Intake Form
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <div>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-6 py-3 bg-white text-klubhouse-black border-2 border-klubhouse-gold font-semibold rounded-full hover:bg-klubhouse-gold hover:scale-105 transition-all duration-300"
                  >
                    Quick Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-gradient-to-r from-klubhouse-gold/10 via-white to-klubhouse-accent/10" id="mission">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-6">Mission Statement</h2>
            <h3 className="text-3xl text-klubhouse-gold font-medium mb-8">Heart & Home Together</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl text-gray-700 leading-relaxed font-light">
              At <span className="text-klubhouse-gold font-medium">Klubhouse Therapy Services</span>, we bring playful, personalized ABA care home—with heart. We believe every child shines brightest in a space that honors who they are, where they come from, and the unique story their family shares. Together, we grow skills, confidence, and joy—one step at a time.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">🧩</span>
              <h2 className="text-5xl font-light text-gray-800">About Us</h2>
            </div>
            <h3 className="text-3xl text-klubhouse-gold font-medium mb-8">Specialized ABA Care That Puts the Pieces Together</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Main About Content */}
            <div className="text-center">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                At <span className="text-klubhouse-gold font-medium">Klubhouse Therapy Services</span>, we empower children and families by bringing heart-centered, specialized ABA care into the places where kids thrive most — their homes, schools, and communities.
              </p>
              
              {/* Meet Our BCBA */}
              <div className="bg-gradient-to-r from-klubhouse-gold/10 to-klubhouse-accent/10 rounded-2xl p-8 mt-12 max-w-4xl mx-auto">
                <h4 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Meet Our Board Certified Behavior Analyst</h4>
                
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Professional Headshot */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-klubhouse-gold/30 to-klubhouse-accent/30 rounded-full blur-lg"></div>
                      <Image
                        src="/headshot.jpeg"
                        alt="Alicia Paduan, MA, MS, BCBA LBA"
                        width={200}
                        height={200}
                        className="relative w-48 h-48 object-cover rounded-full shadow-xl border-4 border-white"
                      />
                    </div>
                  </div>
                  
                  {/* Credentials and Description */}
                  <div className="text-center md:text-left flex-1">
                    <p className="text-2xl text-gray-800 mb-2">
                      <span className="text-klubhouse-gold font-semibold">Alicia Paduan</span>
                    </p>
                    <p className="text-lg text-gray-600 font-medium mb-4">
                      MA, MS, BCBA LBA
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Our dedicated Board Certified Behavior Analyst brings expertise, compassion, and personalized care to every family we serve. With advanced degrees and specialized certification, Alicia is committed to providing the highest quality ABA services in the comfort of your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Three Key Points */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-klubhouse-gold to-klubhouse-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl">🏠</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Personalized Support</h4>
                <p className="text-gray-600 leading-relaxed">
                  We provide personalized support for neurodivergent children and adolescents diagnosed with autism, focusing on self-advocacy, communication, and social-emotional growth.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-klubhouse-gold to-klubhouse-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Child-Centered Approach</h4>
                <p className="text-gray-600 leading-relaxed">
                  Every care plan is crafted to fit the child, not the other way around. We meet children where they are and help them grow at their own pace.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-klubhouse-gold to-klubhouse-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Clinician-Owned Practice</h4>
                <p className="text-gray-600 leading-relaxed">
                  As a clinician-owned practice, we celebrate each family's unique story with cultural sensitivity, clinical expertise, and deep commitment.
                </p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center mt-16 bg-gradient-to-r from-klubhouse-gold/5 via-white to-klubhouse-accent/5 p-8 rounded-2xl">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Our team brings cultural sensitivity, clinical expertise, and a deep commitment to meeting children where they are — with tools that help them 
                <span className="text-klubhouse-gold font-medium"> shine brighter</span>, step by step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C.H.R.I.S. Values Section */}
      <section className="py-20 bg-white" id="values">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-6">Our Values</h2>
            <h3 className="text-2xl text-gray-600 font-light mb-4">C.H.R.I.S.</h3>
            <p className="text-xl text-gray-600">Compassion, Hope, Respect, Inclusion, Support</p>
            <div className="w-24 h-1 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {chrisValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-klubhouse-gold to-klubhouse-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl font-bold text-klubhouse-black">
                      {value.letter}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.word}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/services/comprehensive.png"
                  alt="Comprehensive Assessment"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                A Board Certified Behavior Analyst (BCBA) conducts a comprehensive behavioral assessment and creates an individualized treatment plan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/services/in-hometherapy.png"
                  alt="In-Home Therapy"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                Individualized therapy programs conducted in the comfort of home creates an approach utilizing the most natural environment allowing faster generalization and realistic outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/services/caregiverguidance.png"
                  alt="Caregiver Guidance"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                Caregiver input and training are crucial elements of the therapeutic process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/services/consultation.png"
                  alt="Consultation"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                Consultation services for families, educators, businesses, or clinicians are available.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/services/schoolsupport.png"
                  alt="School/Daycare Support"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                We partner with the student's school or daycare to develop and implement effective programs to support learning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/services/interventions.png"
                  alt="Interventions"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                Interventions include communication, behavior support, social skills, toileting, hygiene, safety, daily living skills, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-white" id="insurance">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-6">Accepted Insurance</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
            {insuranceLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 min-h-[120px]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={150}
                  height={75}
                  className="object-contain w-full h-auto max-w-[150px] filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-20 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-light text-klubhouse-black mb-8">Sign Up for ABA Services</h2>
          <a 
            href="tel:404-838-7010"
            className="inline-block text-3xl md:text-4xl text-klubhouse-black font-bold hover:scale-105 transition-transform duration-300 bg-white px-8 py-4 rounded-full shadow-lg"
          >
            404-838-7010
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-6">Get Started Today</h2>
            <p className="text-xl text-gray-600 mb-8">Ready to begin your journey with us? Contact us today!</p>
            <div className="w-24 h-1 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send us a message</h3>
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
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    required
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email*" 
                    required
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone" 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <textarea 
                    name="message" 
                    placeholder="Notes" 
                    rows={6} 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none transition-all"
                  ></textarea>
                </div>
                
                <div className="text-left">
                  <label className="text-sm text-gray-600 cursor-pointer hover:text-yellow-600 transition-colors">
                    <input type="file" name="attachment" multiple className="mr-2" />
                    Attach Files
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Call Us Today */}
              <div className="bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-klubhouse-black mb-2">Call Us Today</h3>
                <a 
                  href="tel:404-838-7010"
                  className="text-3xl font-bold text-klubhouse-black mb-2 block hover:scale-105 transition-transform"
                >
                  404-838-7010
                </a>
                <p className="text-klubhouse-black text-sm">Available for immediate assistance</p>
              </div>

              {/* Email Us */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-lg font-bold text-yellow-300 mb-2">admin@klubhousetherapyservices.com</p>
                <p className="text-white text-sm">We'll respond within 24 hours</p>
              </div>

              {/* CHRIS Values */}
              <div className="bg-gradient-to-r from-klubhouse-gold via-klubhouse-accent to-purple-600 rounded-3xl p-8 text-center shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span className="text-klubhouse-black">CHRIS</span> means Compassion and Care at Home
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {['Compassion', 'Hope', 'Respect', 'Inclusion', 'Support'].map((value) => (
                    <span key={value} className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-3 py-2 rounded-full font-semibold border border-white border-opacity-30">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 