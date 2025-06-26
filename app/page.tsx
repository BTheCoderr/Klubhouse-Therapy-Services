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
      <Header />
      
      {/* Hero Section with Logo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
            {/* Large Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/logo-large.png"
                alt="Klubhouse Therapy Services"
                width={400}
                height={400}
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
                priority
              />
            </div>
            
            {/* Welcome Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-6xl lg:text-8xl font-light text-gray-800 tracking-wide">
                WELCOME
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-gray-800 mb-4 text-center">About Us</h2>
          <h3 className="text-xl text-gray-600 mb-12 text-center font-light">Specialized Care for Empowering Futures</h3>
          
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6 text-center">
            <p className="text-lg">
              At Klubhouse Therapy Services, our mission is to empower individuals and families through compassionate, specialized care. We provide tailored ABA therapy for neurodivergent children and adolescents that have an autism diagnosis. Our focus is on building essential life skills, communication, and social development.
            </p>
            <p className="text-lg">
              We are a clinician-owned practice that embraces diversity and complexity, offering personalized treatment for those who may require specific expertise. We aim for a deep understanding of each patient's unique needs to provide individualized tools and support for significantly improving quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-gray-800 mb-12 text-center">Our Services</h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-4 text-center">
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
      <section className="py-16 bg-white" id="insurance">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-gray-800 mb-12 text-center">Accepted Insurance</h2>
          
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {insuranceLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4 min-h-[100px]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={150}
                  height={75}
                  className="object-contain w-full h-auto max-w-[150px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-gray-800 mb-8">Sign Up for ABA Services</h2>
          <p className="text-2xl text-gray-600 mb-8">404-838-7010</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-gray-800 mb-4 text-center">Contact Us</h2>
          <h3 className="text-xl text-gray-600 mb-12 text-center font-light">Learn more about how Klubhouse Therapy Services can support your family:</h3>
          
          <div className="max-w-2xl mx-auto">
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
                  className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  name="name"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  name="email"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  name="phone"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Notes"
                  rows={6}
                  className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500 resize-none"
                ></textarea>
              </div>

              <div className="text-left">
                <label className="text-sm text-gray-600">
                  <input type="file" className="mr-2" name="attachment" />
                  Attach Files
                </label>
                <p className="text-sm text-gray-500 mt-1">Attachments (0)</p>
              </div>

              <button
                type="submit"
                className="bg-klubhouse-gold text-klubhouse-black px-8 py-3 rounded hover:bg-klubhouse-accent transition-colors font-medium"
              >
                Send
              </button>
            </form>
            
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