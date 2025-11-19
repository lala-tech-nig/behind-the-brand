'use client';

import Link from 'next/link';
import Image from 'next/image';
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
      <nav className="container mx-auto max-w-6xl px-4 flex items-center justify-between relative">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/btblogo.png"
            alt="Behind the brand logo"
            width={150}
            height={70}
            className="object-contain"
          />
        </Link>

        {/* Center: Nav Links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-secondary hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Icons & Buttons */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-text-secondary hover:text-white transition-colors"
          >
            <Search size={20} />
          </button>

          <Button href="#">Subscribe</Button>

          <button
            aria-label="Upload"
            className="text-text-secondary hover:text-white transition-colors"
          >
            <Upload size={20} />
          </button>
        </div>

      </nav>
    </header>
  );
}
