'use client'; // For the search icon click (if you add interactivity)

import Link from 'next/link';
import { Search, Upload } from 'lucide-react';
import Button from './Button';

export default function Header() {
  const navLinks = [
    { name: 'Stories', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Submit a Story', href: '#' },
  ];

  return (
    <header className="py-4">
      <nav className="container mx-auto max-w-6xl px-4 flex justify-between items-center">
        {/* Left Side: Logo & Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary">
            Journeys
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Search, Subscribe, Upload */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <Search size={20} />
          </button>
          <Button href="#">Subscribe</Button>
          <button
            aria-label="Upload"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <Upload size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}