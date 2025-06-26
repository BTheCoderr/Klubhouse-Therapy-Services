import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Image from 'next/image';

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
    { name: 'Georgia Medicaid', src: '/insurance/medicaid.png' },
    { name: 'Humana Military TRICARE', src: '/insurance/humana.png' },
    { name: 'Cigna', src: '/insurance/cigna.png' }
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
            <h3 className="text-3xl text-klubhouse-gold font-medium mb-8">Heart & Home, Together</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl text-gray-700 leading-relaxed font-light">
              At <span className="text-klubhouse-gold font-medium">Klubhouse Therapy Services</span>, we bring playful, personalized ABA care home—with heart. We believe every child shines brightest in a space that honors who they are, where they come from, and the unique story their family shares. Together, we grow skills, confidence, and joy—one step at a time.
            </p>
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
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
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
          
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {insuranceLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 min-h-[120px]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={150}
                  height={75}
                  className="object-contain w-full h-auto max-w-[150px] filter grayscale hover:grayscale-0 transition-all duration-300"
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
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-6">Contact Us</h2>
            <h3 className="text-xl text-gray-600 font-light">Learn more about how Klubhouse Therapy Services can support your family:</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <form 
                name="contact" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                className="space-y-6"
                action="/thank-you"
                method="POST"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="email-to" value="admin@klubhousetherapyservices.com" />
                
                {/* Honeypot field */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-klubhouse-gold focus:border-transparent transition-all"
                    name="name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    required
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-klubhouse-gold focus:border-transparent transition-all"
                    name="email"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-klubhouse-gold focus:border-transparent transition-all"
                    name="phone"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Notes"
                    rows={6}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-klubhouse-gold focus:border-transparent resize-none transition-all"
                  ></textarea>
                </div>

                <div className="text-left">
                  <label className="text-sm text-gray-600 cursor-pointer hover:text-klubhouse-gold transition-colors">
                    <input type="file" className="mr-2" name="attachment" />
                    Attach Files
                  </label>
                  <p className="text-sm text-gray-500 mt-1">Attachments (0)</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-klubhouse-gold to-klubhouse-accent text-klubhouse-black px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 text-center">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 