import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* About Us Header */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold text-[#464646]">ABOUT US</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <Image
                  src="/about-image.jpg"
                  alt="Child and therapist working together"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Specialized Care for Empowering Futures
                </h2>
                <div className="space-y-6 text-gray-700">
                  <p>
                    At Klubhouse Therapy Services, we bring playful, personalized ABA care home—with heart. 
                    We believe every child shines brightest in a space that honors who they are, where they 
                    come from, and the unique story their family shares.
                  </p>
                  <p>
                    Together, we grow skills, confidence, and joy—one step at a time. Our CHRIS values 
                    guide everything we do:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Compassion:</strong> Leading with empathy and understanding</li>
                    <li><strong>Hope:</strong> Believing in every child's potential</li>
                    <li><strong>Respect:</strong> Honoring each family's unique journey</li>
                    <li><strong>Inclusion:</strong> Creating spaces where everyone belongs</li>
                    <li><strong>Support:</strong> Standing with families every step of the way</li>
                  </ul>
                  <p>
                    We are a clinician-owned practice that embraces diversity and complexity, 
                    offering personalized treatment for those who may require specific expertise. 
                    We aim for a deep understanding of each patient's unique needs to provide 
                    individualized tools and support for significantly improving quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Begin Your Journey With Us</h2>
            <a href="tel:404-838-7010" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors">
              404-838-7010
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 