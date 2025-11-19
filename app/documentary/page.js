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
  // countdown (example fixed target: 10 days from now)
  const target = useMemo(() => Date.now() + 10 * 24 * 60 * 60 * 1000, []);
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft(target));

  // modal + toast + confetti states
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState(null); // {type, message}
  const [submitting, setSubmitting] = useState(false);

  // form
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  // slideshow
  const teasers = [
    '/coke1.jpg',
    '/coke2.jpg',
    '/coke3.webp'
  ];
  const [index, setIndex] = useState(0);
  const slideRef = useRef(null);

  // autoplay slideshow
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % teasers.length);
    }, 4000);
    return () => clearInterval(id);
  }, [teasers.length]);

  // countdown update
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  // helper: launch confetti burst
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

  // notify button click: open modal and small confetti tease
  function onNotifyClick() {
    launchConfetti();
    setModalOpen(true);
  }

  // simple validation
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

    // simulate API call
    await new Promise((r) => setTimeout(r, 900));

    setSubmitting(false);
    setModalOpen(false);
    launchConfetti();

    setToast({ type: 'success', message: 'You have successfully subscribed to updates!' });
    setTimeout(() => setToast(null), 4500);

    // clear form
    setForm({ name: '', email: '', phone: '' });
  }

  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden">
      {/* FILM REEL BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0b] via-[#080808] to-[#0b0b0b] opacity-95"></div>

        {/* moving film strips */}
        <div className="absolute left-0 right-0 top-8 h-24 opacity-30 overflow-hidden">
          <div className="film-strip animate-film-move"></div>
        </div>

        <div className="absolute left-0 right-0 bottom-20 h-28 opacity-20 overflow-hidden">
          <div className="film-strip animate-film-move-reverse"></div>
        </div>

        {/* subtle motion blur banners */}
        <div className="absolute -left-28 -top-16 w-72 h-36 rounded-lg bg-gradient-to-r from-[#FF7A00]/15 to-transparent blur-[30px] animate-slow-hover"></div>
        <div className="absolute right-8 top-24 w-64 h-28 rounded-lg bg-gradient-to-l from-[#FF7A00]/12 to-transparent blur-[20px] animate-slow-hover-rev"></div>
      </div>

      {/* CONTENT */}
      <main className="relative z-10 container mx-auto max-w-6xl px-6 py-20 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left: Info / countdown */}
        <section className="w-full lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 text-[#FF7A00] text-sm font-semibold">
            Documentary Feature
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Behind The Brand — Documentary Series
          </h1>

          <p className="text-neutral-300 max-w-xl">
            A deep cinematic dive into the stories behind the brands you love — their failures, decisions, and the moments that changed everything.
          </p>

          <div className="mt-4 flex gap-4 items-center">
            <div className="rounded-xl bg-[#0f0f0f] border border-neutral-800 px-4 py-3 text-center">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-xs text-neutral-400">Days</div>
            </div>
            <div className="rounded-xl bg-[#0f0f0f] border border-neutral-800 px-4 py-3 text-center">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs text-neutral-400">Hours</div>
            </div>
            <div className="rounded-xl bg-[#0f0f0f] border border-neutral-800 px-4 py-3 text-center">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs text-neutral-400">Minutes</div>
            </div>

            <button
              onClick={onNotifyClick}
              className="ml-6 px-5 py-3 bg-[#FF7A00] text-black rounded-lg font-semibold hover:scale-[1.01] transition shadow-[0_8px_30px_rgba(255,122,0,0.10)]"
            >
              Notify Me
            </button>
          </div>

          <p className="text-xs text-neutral-500 mt-4 max-w-lg">
            Want early access to trailers and behind-the-scenes? Subscribe and we'll notify you the moment episodes drop.
          </p>
        </section>

        {/* Right: Slideshow */}
        <aside className="w-full lg:w-1/2">
          <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-b from-[#0b0b0b] to-[#0d0d0d] shadow-lg">
            <div className="relative w-full h-80 bg-neutral-900">
              <img
                src={teasers[index]}
                alt={`Teaser ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* overlay title */}
              <div className="absolute left-6 bottom-6 bg-black/60 px-4 py-2 rounded-full border border-white/6 backdrop-blur-sm">
                <div className="text-sm text-[#FF7A00] font-semibold">Trailer</div>
                <div className="text-white text-lg font-bold">Episode Teaser {index + 1}</div>
              </div>

              {/* navigation */}
              <div className="absolute right-4 bottom-4 flex gap-3">
                <button
                  onClick={() => setIndex((i) => (i - 1 + teasers.length) % teasers.length)}
                  className="bg-black/50 hover:bg-black/40 px-3 py-2 rounded-md border border-white/6 transition"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % teasers.length)}
                  className="bg-black/50 hover:bg-black/40 px-3 py-2 rounded-md border border-white/6 transition"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </div>

            {/* thumbnails */}
            <div className="flex gap-3 p-4 overflow-auto">
              {teasers.map((t, i) => (
                <button
                  key={t}
                  onClick={() => setIndex(i)}
                  className={`flex-none w-24 h-14 rounded-md overflow-hidden border ${
                    i === index ? 'border-[#FF7A00] shadow-[0_6px_20px_rgba(255,122,0,0.12)]' : 'border-white/5'
                  }`}
                >
                  <img src={t} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* behind the scenes motion blur banners under slideshow */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="h-24 rounded-lg bg-gradient-to-r from-[#FF7A00]/12 to-transparent blur-[10px]"></div>
            <div className="h-24 rounded-lg bg-gradient-to-l from-[#FF7A00]/10 to-transparent blur-[8px]"></div>
          </div>
        </aside>
      </main>

      {/* EMAIL CAPTURE MODAL (explicit trigger also opened by Notify Me) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-[#0b0b0b] rounded-2xl p-6 border border-neutral-800 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-2">Get Notified</h3>
            <p className="text-neutral-400 mb-4 text-sm">Enter your details and we'll send updates and early access links.</p>

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
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email address"
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-[#FF7A00]"
                required
              />
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone number (optional)"
                className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-[#FF7A00]"
              />

              <div className="flex gap-3 items-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-4 py-3 bg-[#FF7A00] text-black rounded-xl font-semibold hover:bg-[#ff8f2a] transition"
                >
                  {submitting ? 'Submitting...' : 'Subscribe & Notify'}
                </button>

                <button
                  type="button"
                  onClick={() => { setModalOpen(false); setToast({ type: 'info', message: 'Subscription cancelled' }); setTimeout(()=>setToast(null),2000); }}
                  className="px-4 py-3 rounded-xl border border-neutral-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div
          className={`fixed right-6 bottom-6 z-60 rounded-xl px-5 py-3 shadow-xl transition transform ${
            toast.type === 'success' ? 'bg-[#FF7A00] text-black' : 'bg-white/8 text-white'
          }`}
        >
          <div className="text-sm font-medium">{toast.message}</div>
        </div>
      )}

      {/* Keyframes & helper styles */}
      <style jsx>{`
        /* film strip graphic (repeating circles) */
        .film-strip {
          height: 100%;
          background-image:
            radial-gradient(circle at 8% 50%, rgba(255,255,255,0.06) 0 6px, transparent 6px),
            radial-gradient(circle at 30% 50%, rgba(255,255,255,0.06) 0 6px, transparent 6px),
            linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02));
          background-size: 100px 100%, 100px 100%, 100% 100%;
          background-repeat: repeat-x;
        }

        @keyframes filmMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-40%); }
        }
        @keyframes filmMoveReverse {
          0% { transform: translateX(0); }
          100% { transform: translateX(40%); }
        }

        .animate-film-move { animation: filmMove 18s linear infinite; }
        .animate-film-move-reverse { animation: filmMoveReverse 22s linear infinite; }

        /* subtle floating of blur banners */
        @keyframes slowHover { 0% { transform: translateY(0) } 50% { transform: translateY(-8px) } 100% { transform: translateY(0) } }
        @keyframes slowHoverRev { 0% { transform: translateY(0) } 50% { transform: translateY(8px) } 100% { transform: translateY(0) } }
        .animate-slow-hover { animation: slowHover 6s ease-in-out infinite; }
        .animate-slow-hover-rev { animation: slowHoverRev 7s ease-in-out infinite; }

        /* small fade animation helper */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeInUp .45s ease-out both; }
      `}</style>
    </div>
  );
}

/* ---------------------------
   Helper: calculate countdown
   --------------------------- */
function calcTimeLeft(targetTs) {
  const diff = Math.max(0, targetTs - Date.now());
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((diff % (60 * 1000)) / 1000);
  return { days, hours, minutes, seconds };
}
