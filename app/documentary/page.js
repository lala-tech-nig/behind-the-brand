'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';

/**
 * ComingSoon Page
 *
 * - Place teaser images in /public/teaser1.jpg, teaser2.jpg, teaser3.jpg
 * - Requires: npm i canvas-confetti
 */
export default function ComingSoon() {
  const target = useMemo(() => Date.now() + 10 * 24 * 60 * 60 * 1000, []);
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft(target));

  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const teasers = ['/coke1.jpg', '/coke2.jpg', '/coke3.webp'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % teasers.length);
    }, 4000);
    return () => clearInterval(id);
  }, [teasers.length]);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  function launchConfetti() {
    const duration = 1500;
    const end = Date.now() + duration;
    (function frame() {
      confetti({
        particleCount: 8,
        startVelocity: 30,
        spread: 160,
        ticks: 50,
        origin: { x: Math.random(), y: Math.random() * 0.6 },
        colors: ['#FF7A00', '#ffffff', '#FFC37A'],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  function onNotifyClick() {
    launchConfetti();
    setModalOpen(true);
  }

  function validEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (!form.name.trim() || !validEmail(form.email)) {
      setToast({ type: 'error', message: 'Please enter a valid name and email.' });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));

    setSubmitting(false);
    setModalOpen(false);
    launchConfetti();

    setToast({
      type: 'success',
      message: 'You have successfully subscribed to updates!',
    });
    setTimeout(() => setToast(null), 4500);

    setForm({ name: '', email: '', phone: '' });
  }

  // ----------------------
  // Documentary Cards Data
  // ----------------------
  const documentaries = [
    {
      title: 'The Rise of Coca-Cola Nigeria',
      img: '/coke1.jpg',
      date: 'Jan 2025',
    },
    {
      title: 'The MTN Story — Connecting a Nation',
      img: '/mtn.webp',
      date: 'Feb 2025',
    },
    {
      title: 'Inside Dangote: The Giant of Africa',
      img: '/dangote.jpg',
      date: 'Mar 2025',
    },
    {
      title: 'The Evolution of GLO Telecoms',
      img: '/glo.jpg',
      date: 'Apr 2025',
    },
  ];

  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden">
      {/* FILM REEL BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0b] via-[#080808] to-[#0b0b0b] opacity-95"></div>

        <div className="absolute left-0 right-0 top-8 h-24 opacity-30 overflow-hidden">
          <div className="film-strip animate-film-move"></div>
        </div>

        <div className="absolute left-0 right-0 bottom-20 h-28 opacity-20 overflow-hidden">
          <div className="film-strip animate-film-move-reverse"></div>
        </div>

        <div className="absolute -left-28 -top-16 w-72 h-36 rounded-lg bg-gradient-to-r from-[#FF7A00]/15 to-transparent blur-[30px] animate-slow-hover"></div>
        <div className="absolute right-8 top-24 w-64 h-28 rounded-lg bg-gradient-to-l from-[#FF7A00]/12 to-transparent blur-[20px] animate-slow-hover-rev"></div>
      </div>

      {/* PAGE CONTENT */}
      <main className="relative z-10 container mx-auto max-w-6xl px-6 py-20 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* LEFT SECTION */}
        <section className="w-full lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 text-[#FF7A00] text-sm font-semibold">
            Documentary Feature
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Behind The Brand — Documentary Series
          </h1>

          <p className="text-neutral-300 max-w-xl">
            A deep cinematic dive into the stories behind the brands you love — their
            failures, decisions, and the moments that changed everything.
          </p>

          <div className="mt-4 flex gap-4 items-center">
            <TimeBox label="Days" value={timeLeft.days} />
            <TimeBox label="Hours" value={timeLeft.hours} />
            <TimeBox label="Minutes" value={timeLeft.minutes} />

            <button
              onClick={onNotifyClick}
              className="ml-6 px-5 py-3 bg-[#FF7A00] text-black rounded-lg font-semibold hover:scale-[1.01] transition shadow-[0_8px_30px_rgba(255,122,0,0.10)]"
            >
              Notify Me
            </button>
          </div>

          <p className="text-xs text-neutral-500 mt-4 max-w-lg">
            Want early access to trailers and behind-the-scenes? Subscribe and we'll notify you.
          </p>
        </section>

        {/* RIGHT SECTION - SLIDESHOW  */}
        <aside className="w-full lg:w-1/2">
          <Slideshow teasers={teasers} index={index} setIndex={setIndex} />
        </aside>
      </main>

      {/* -------------------------- */}
      {/* Documentary Cards Section */}
      {/* -------------------------- */}
      <section className="relative z-10 mt-16 container mx-auto max-w-6xl px-6 pb-32">
        <h2 className="text-3xl font-extrabold mb-6">Upcoming Documentaries</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documentaries.map((doc, i) => (
            <div
              key={i}
              className="group bg-[#0d0d0d] border border-neutral-800 rounded-xl overflow-hidden hover:border-[#FF7A00] transition-all shadow-lg hover:shadow-[0_0_25px_rgba(255,122,0,0.20)]"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={doc.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  alt={doc.title}
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{doc.title}</h3>
                <p className="text-sm text-neutral-400">{doc.date}</p>

                <button className="mt-3 w-full py-2 rounded-lg bg-[#FF7A00] text-black font-semibold hover:scale-[1.02] transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL / NOTIFY MODAL */}
      {modalOpen && <NotifyModal form={form} setForm={setForm} close={() => setModalOpen(false)} submitting={submitting} handleSubmit={handleSubmit} />}

      {/* TOAST */}
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl text-sm ${
            toast.type === 'success'
              ? 'bg-green-600'
              : 'bg-red-600'
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}

/* --------------------------
   Small Helper Components
-------------------------- */

function TimeBox({ value, label }) {
  return (
    <div className="rounded-xl bg-[#0f0f0f] border border-neutral-800 px-4 py-3 text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-neutral-400">{label}</div>
    </div>
  );
}

function Slideshow({ teasers, index, setIndex }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-b from-[#0b0b0b] to-[#0d0d0d] shadow-lg">
      <div className="relative w-full h-80 bg-neutral-900">
        <img src={teasers[index]} alt="" className="w-full h-full object-cover" />

        <div className="absolute left-6 bottom-6 bg-black/60 px-4 py-2 rounded-full border border-white/6 backdrop-blur-sm">
          <div className="text-sm text-[#FF7A00] font-semibold">Trailer</div>
          <div className="text-white text-lg font-bold">Episode Teaser {index + 1}</div>
        </div>

        <div className="absolute right-4 bottom-4 flex gap-3">
          <button
            onClick={() => setIndex((i) => (i - 1 + teasers.length) % teasers.length)}
            className="bg-black/50 hover:bg-black/40 px-3 py-2 rounded-md border border-white/6 transition"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % teasers.length)}
            className="bg-black/50 hover:bg-black/40 px-3 py-2 rounded-md border border-white/6 transition"
          >
            ›
          </button>
        </div>
      </div>

      <div className="flex gap-3 p-4 overflow-auto">
        {teasers.map((t, i) => (
          <button
            key={t}
            onClick={() => setIndex(i)}
            className={`flex-none w-24 h-14 rounded-md overflow-hidden border ${
              i === index
                ? 'border-[#FF7A00] shadow-[0_6px_20px_rgba(255,122,0,0.12)]'
                : 'border-white/5'
            }`}
          >
            <img src={t} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function NotifyModal({ form, setForm, close, submitting, handleSubmit }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-[#0b0b0b] rounded-2xl p-6 border border-neutral-800 relative">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-2">Get Notified</h3>
        <p className="text-neutral-400 mb-4 text-sm">
          Enter your details and we’ll send updates and early access links.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Full name"
            className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-[#FF7A00]"
            required
          />
          <input
            value={form.email}
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-[#FF7A00]"
            required
          />
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone number (optional)"
            className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-[#FF7A00]"
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-[#FF7A00] text-black rounded-xl font-bold hover:scale-[1.01] transition"
          >
            {submitting ? 'Submitting...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
}

/* --------- TIME CALCULATOR --------- */
function calcTimeLeft(target) {
  const diff = target - Date.now();
  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
  };
}
