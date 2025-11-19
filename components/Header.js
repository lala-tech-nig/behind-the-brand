'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Stories', href: '/story' },
    { name: 'Visions', href: '/vision' },
    { name: 'About', href: '/about' },
    { name: 'Tell a Story', href: '#' },
    { name: 'Histories', href: '/history' },
    { name: 'Documentaries', href: '/documentary' },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubscribe = (e) => {
    e.preventDefault();

    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF7A00', '#ffffff'],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    setShowModal(false);
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <>
      {/* HEADER */}
      <header className="py-4 relative z-50">
        <nav className="container mx-auto max-w-6xl px-4 flex items-center justify-between relative">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/btblogo.png"
              alt="Behind the brand logo"
              width={150}
              height={70}
              className="object-contain"
            />
          </Link>

          {/* CENTER NAV WITH ACTIVE UNDERLINE */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    relative text-sm font-medium pb-1 transition 
                    ${isActive ? 'text-[#FF7A00]' : 'text-text-secondary hover:text-white'}
                  `}
                >
                  {link.name}

                  {/* UNDERLINE */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FF7A00] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* Search Toggle */}
            <button
              aria-label="Search"
              onClick={() => setShowSearch((prev) => !prev)}
              className="text-text-secondary hover:text-white transition"
            >
              <Search size={20} />
            </button>

            {/* Subscribe Button */}
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-[#FF7A00] text-black rounded-lg font-semibold hover:bg-[#e96c00] transition"
            >
              Subscribe
            </button>
          </div>
        </nav>

        {/* SEARCH BAR */}
        {showSearch && (
          <div className="w-full bg-[#111] py-3 px-4 absolute left-0 top-full border-t border-neutral-700 animate-fadeIn">
            <div className="container mx-auto max-w-4xl">
              <input
                type="text"
                placeholder="Search stories..."
                className="w-full px-4 py-3 bg-black border border-neutral-700 text-white rounded-xl focus:ring-2 focus:ring-[#FF7A00] outline-none transition"
              />
            </div>
          </div>
        )}
      </header>

      {/* SUBSCRIBE MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-[#111] p-8 rounded-2xl w-full max-w-md border border-neutral-700 relative animate-slideUp">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold text-white mb-6">Subscribe to Story Updates</h2>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-xl text-white focus:ring-2 focus:ring-[#FF7A00]"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="email"
                required
                placeholder="Email"
                className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-xl text-white focus:ring-2 focus:ring-[#FF7A00]"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-xl text-white focus:ring-2 focus:ring-[#FF7A00]"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <button
                type="submit"
                className="w-full py-3 mt-2 bg-[#FF7A00] text-black font-semibold rounded-xl hover:bg-[#e96c00] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-[#FF7A00] text-black px-6 py-4 rounded-xl shadow-xl font-semibold animate-slideIn">
          You’ve successfully subscribed to our story updates 🎉
        </div>
      )}

      {/* ANIMATIONS */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}
