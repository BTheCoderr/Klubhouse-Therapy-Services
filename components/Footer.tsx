import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  const businessHours = [
    { day: 'Mon', hours: '08:30 am – 05:30 pm' },
    { day: 'Tue', hours: '08:30 am – 05:30 pm' },
    { day: 'Wed', hours: '08:30 am – 05:30 pm' },
    { day: 'Thu', hours: '08:30 am – 05:30 pm' },
    { day: 'Fri', hours: '08:30 am – 05:30 pm' },
    { day: 'Sat', hours: 'Closed' },
    { day: 'Sun', hours: 'Closed' },
  ];

  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Klubhouse Therapy Services</h3>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Alicia Paduan MA, MS, BCBA LBA</span>
            </p>
            <p className="text-gray-600 mb-4">Atlanta, Georgia, United States</p>
            <p className="mb-2">
              <a href="mailto:admin@klubhousetherapyservices.com" className="text-gray-600 hover:text-primary">
                admin@klubhousetherapyservices.com
              </a>
            </p>
            <p>
              <a href="tel:404-838-7010" className="text-gray-600 hover:text-primary">
                404-838-7010
              </a>
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Hours</h3>
            <div className="space-y-2">
              {businessHours.map((schedule) => (
                <div key={schedule.day} className="flex justify-between text-gray-600">
                  <span className="w-20">{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-600">
                KLUBHOUSE THERAPY SERVICES
              </p>
              <p className="text-gray-600">
                ATLANTA, GA
              </p>
              <p className="text-gray-600">
                404-838-7010
              </p>
            </div>
            <p className="text-gray-500 text-sm">
              COPYRIGHT © {new Date().getFullYear()} KLUBHOUSE THERAPY SERVICES - ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 