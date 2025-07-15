import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      {/* Top Bar - Phone Only */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 text-right">
          <a href="tel:404-838-7010" className="text-xl text-klubhouse-black font-medium hover:text-klubhouse-accent transition-colors">
            404-838-7010
          </a>
        </div>
      </div>
    </header>
  );
}; 