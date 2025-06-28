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
              <div className="pt-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent text-klubhouse-black font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Get Started Today
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
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
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden" id="contact">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-klubhouse-gold rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-klubhouse-accent rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-klubhouse-gold rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-klubhouse-accent rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-5xl">📞</span>
              <h2 className="text-6xl font-light text-gray-800">Contact Us</h2>
            </div>
            <h3 className="text-2xl text-klubhouse-gold font-medium mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Learn more about how <span className="text-klubhouse-gold font-medium">Klubhouse Therapy Services</span> can support your family with compassionate, personalized ABA care at home.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-klubhouse-gold/10 to-klubhouse-accent/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-klubhouse-accent/10 to-klubhouse-gold/10 rounded-full transform -translate-x-12 translate-y-12"></div>
              
              <div className="relative z-10">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                  const originalText = submitButton.textContent;
                  
                  // Show loading state
                  submitButton.textContent = 'Sending...';
                  submitButton.disabled = true;
                  
                  const formData = new FormData(e.target as HTMLFormElement);
                  
                  // Validate file attachments
                  const files = formData.getAll('attachments') as File[];
                  const validFiles = files.filter(file => file.size > 0);
                  
                  if (validFiles.length > 5) {
                    alert('❌ Maximum 5 files allowed. Please remove some files and try again.');
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    return;
                  }
                  
                  for (const file of validFiles) {
                    if (file.size > 10 * 1024 * 1024) { // 10MB limit
                      alert(`❌ File "${file.name}" is too large. Maximum file size is 10MB.`);
                      submitButton.textContent = originalText;
                      submitButton.disabled = false;
                      return;
                    }
                  }
                  
                  try {
                    const response = await fetch('/api/send-email', {
                      method: 'POST',
                      body: formData, // Send FormData directly
                    });
                    
                    if (response.ok) {
                      alert('✅ Message sent successfully! We\'ll get back to you within 24 hours.');
                      (e.target as HTMLFormElement).reset();
                    } else {
                      const errorData = await response.json();
                      throw new Error(errorData.error || 'Failed to send message');
                    }
                  } catch (error) {
                    console.error('Contact form error:', error);
                    alert('❌ Sorry, there was an error sending your message. Please call us directly at 404-838-7010 or email klubhousetherapyservices@outlook.com');
                  } finally {
                    // Reset button state
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                  }
                }}
                className="space-y-6"
              >

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">👤 Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-klubhouse-gold focus:border-klubhouse-gold transition-all duration-300 hover:border-klubhouse-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">📧 Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-klubhouse-gold focus:border-klubhouse-gold transition-all duration-300 hover:border-klubhouse-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">📞 Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(404) 123-4567"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-klubhouse-gold focus:border-klubhouse-gold transition-all duration-300 hover:border-klubhouse-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">💭 Tell Us About Your Needs *</label>
                  <textarea
                    name="message"
                    placeholder="Please share details about your family's needs, goals, or any questions you have about our ABA services..."
                    rows={6}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-klubhouse-gold focus:border-klubhouse-gold resize-none transition-all duration-300 hover:border-klubhouse-accent"
                  ></textarea>
                </div>

                {/* File Attachment Section */}
                <div className="bg-gradient-to-r from-klubhouse-gold/10 to-klubhouse-accent/10 p-6 rounded-xl border-2 border-dashed border-klubhouse-gold/30">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    📎 Attach Files (Optional)
                  </label>
                  <input
                    type="file"
                    name="attachments"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.txt"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-klubhouse-gold focus:border-klubhouse-gold transition-all duration-300 hover:border-klubhouse-accent file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-gradient-to-r file:from-klubhouse-gold file:to-klubhouse-accent file:text-klubhouse-black hover:file:shadow-lg file:transition-all file:duration-300"
                  />
                  <div className="mt-3 bg-white p-3 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium">
                      📋 <strong>Upload Guidelines:</strong>
                    </p>
                    <ul className="text-xs text-gray-500 mt-1 space-y-1">
                      <li>• Maximum 5 files, 10MB each</li>
                      <li>• Supported formats: PDF, DOC, DOCX, JPG, PNG, GIF, TXT</li>
                      <li>• Perfect for reports, assessments, or relevant documents</li>
                    </ul>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-klubhouse-gold via-klubhouse-accent to-purple-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-xl relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-klubhouse-accent to-klubhouse-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <span>🚀</span>
                      Send Message
                      <span>✨</span>
                    </span>
                  </button>
                  <p className="text-sm text-gray-500 mt-3 font-medium">
                    We'll respond within 24 hours with compassionate care! 💙
                  </p>
                </div>
              </form>
              </div>
            </div>
            
            {/* Contact Information Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
              {/* Phone Card */}
              <div className="bg-gradient-to-br from-klubhouse-gold to-klubhouse-accent p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl">📞</span>
                </div>
                <h3 className="text-xl font-bold text-klubhouse-black mb-4">Call Us Today</h3>
                <a 
                  href="tel:404-838-7010" 
                  className="text-2xl font-bold text-klubhouse-black hover:scale-105 transition-transform duration-300 inline-block"
                >
                  404-838-7010
                </a>
                <p className="text-klubhouse-black mt-3 font-medium">Available for immediate assistance</p>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-br from-klubhouse-accent to-purple-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl">📧</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                <a 
                  href="mailto:admin@klubhousetherapyservices.com" 
                  className="text-lg font-semibold text-klubhouse-gold hover:scale-105 transition-transform duration-300 inline-block break-all"
                >
                  admin@klubhousetherapyservices.com
                </a>
                <p className="text-white mt-3 font-medium">We'll respond within 24 hours</p>
              </div>
            </div>

            {/* CHRIS Values Banner */}
            <div className="mt-16 bg-gradient-to-r from-klubhouse-gold via-klubhouse-accent to-purple-600 p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                At Klubhouse Therapy Services, <span className="text-klubhouse-black">CHRIS</span> means <span className="text-klubhouse-black">Compassion</span> and <span className="text-klubhouse-black">Care</span> at Home.
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="bg-white text-klubhouse-accent px-4 py-2 rounded-full font-semibold shadow-lg">Compassion</span>
                <span className="bg-white text-klubhouse-accent px-4 py-2 rounded-full font-semibold shadow-lg">Hope</span>
                <span className="bg-white text-klubhouse-accent px-4 py-2 rounded-full font-semibold shadow-lg">Respect</span>
                <span className="bg-white text-klubhouse-accent px-4 py-2 rounded-full font-semibold shadow-lg">Inclusion</span>
                <span className="bg-white text-klubhouse-accent px-4 py-2 rounded-full font-semibold shadow-lg">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 