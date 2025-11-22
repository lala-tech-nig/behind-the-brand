'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';

/**
 * Documentaries Histories Page
 * - Filtering (search + category)
 * - Video preview on hover
 * - Pagination
 * - Uses uploaded local image: /mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png
 *
 * Note: ensure teaser images and preview videos exist in your /public folder or
 * adjust the URLs (the uploaded path will be transformed to a usable URL by your tooling).
 */

export default function DocumentariesPage() {
  const target = useMemo(() => Date.now() + 10 * 24 * 60 * 60 * 1000, []);
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft(target));

  // modal + toast + confetti states
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // subscribe form
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  // slideshow teasers (unchanged)
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

    setToast({ type: 'success', message: 'You have successfully subscribed to updates!' });
    setTimeout(() => setToast(null), 4500);

    setForm({ name: '', email: '', phone: '' });
  }

  // ----------------------
  // Documentary (histories) dataset — doubled to 8 items
  // Some entries include preview video urls (place videos in /public)
  // One thumbnail uses the uploaded local path from your session:
  // /mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png
  // Your environment will transform that path to a URL.
  // ----------------------
  const allDocs = useMemo(
    () => [
      {
        id: 1,
        title: 'The Rise of Coca-Cola Nigeria',
        img: '/coke1.jpg',
        date: 'Jan 2025',
        category: 'Business',
        previewVideo: '/previews/coke1.mp4',
      },
      {
        id: 2,
        title: 'The MTN Story — Connecting a Nation',
        img: '/mtn.webp',
        date: 'Feb 2025',
        category: 'Telecom',
        previewVideo: '/previews/mtn.mp4',
      },
      {
        id: 3,
        title: 'Inside Dangote: The Giant of Africa',
        img: '/dangote.jpg',
        date: 'Mar 2025',
        category: 'Industry',
        previewVideo: '/previews/dangote.mp4',
      },
      {
        id: 4,
        title: 'The Evolution of GLO Telecoms',
        img: '/glo.jpg',
        date: 'Apr 2025',
        category: 'Telecom',
        previewVideo: '/previews/glo.mp4',
      },

      // duplicates / additional items to double the dataset
      {
        id: 5,
        title: 'The Coca-Cola Local Footprint',
        img: '/coke2.jpg',
        date: 'May 2025',
        category: 'Business',
        previewVideo: '/previews/coke2.mp4',
      },
      {
        id: 6,
        title: 'MTN & The Mobile Revolution',
        img: '/mtn2.jpg',
        date: 'Jun 2025',
        category: 'Telecom',
        previewVideo: '/previews/mtn2.mp4',
      },
      {
        id: 7,
        title: 'Dangote — Beyond the Factory Floor',
        img: '/dangote2.jpg',
        date: 'Jul 2025',
        category: 'Industry',
        // use uploaded image path (developer-provided). Will be transformed by tooling.
        imgLocal: '/mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png',
        previewVideo: '/previews/dangote2.mp4',
      },
      {
        id: 8,
        title: 'GLO: A Story of Coverage',
        img: '/glo2.jpg',
        date: 'Aug 2025',
        category: 'Telecom',
        previewVideo: '/previews/glo2.mp4',
      },
    ],
    []
  );

  // categories for filter
  const categories = useMemo(() => {
    const set = new Set(allDocs.map((d) => d.category));
    return ['All', ...Array.from(set)];
  }, [allDocs]);

  // filtering + search + pagination
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [hoveredId, setHoveredId] = useState(null);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 4;

  // filtered docs
  const filtered = allDocs.filter((d) => {
    if (activeCategory !== 'All' && d.category !== activeCategory) return false;
    if (
      query &&
      !(`${d.title} ${d.category} ${d.date}`.toLowerCase().includes(query.toLowerCase()))
    )
      return false;
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // video refs map so we can play/pause on hover
  const videoRefs = useRef({});

  // play/pause video when hoveredId changes
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, el]) => {
      if (!el) return;
      if (Number(id) === hoveredId) {
        el.currentTime = 0;
        el.muted = true;
        const p = el.play();
        if (p && p.catch) p.catch(() => {});
      } else {
        try { el.pause(); } catch (e) {}
      }
    });
  }, [hoveredId]);

  return (
    <div className="min-h-screen relative bg-black text-white overflow-x-hidden">
      {/* FILM REEL BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0b] via-[#080808] to-[#0b0b0b] opacity-95" />
        <div className="absolute left-0 right-0 top-8 h-24 opacity-30 overflow-hidden"><div className="film-strip animate-film-move" /></div>
        <div className="absolute left-0 right-0 bottom-20 h-28 opacity-20 overflow-hidden"><div className="film-strip animate-film-move-reverse" /></div>
        <div className="absolute -left-28 -top-16 w-72 h-36 rounded-lg bg-gradient-to-r from-[#FF7A00]/15 to-transparent blur-[30px] animate-slow-hover" />
        <div className="absolute right-8 top-24 w-64 h-28 rounded-lg bg-gradient-to-l from-[#FF7A00]/12 to-transparent blur-[20px] animate-slow-hover-rev" />
      </div>

      {/* PAGE CONTENT */}
      <main className="relative z-10 container mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* left */}
          <section className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 text-[#FF7A00] text-sm font-semibold">
              Documentary Histories
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Our Documentaries Histories
            </h1>

            <p className="text-neutral-300 max-w-xl">
              A cinematic collection of the histories behind major brands, institutions and movements —
              filmed, researched and presented with context, archive material and first-hand accounts.
            </p>

            <div className="mt-4 flex gap-4 items-center flex-wrap">
              <TimeBox label="Days" value={timeLeft.days} />
              <TimeBox label="Hours" value={timeLeft.hours} />
              <TimeBox label="Minutes" value={timeLeft.minutes} />

              <button
                onClick={onNotifyClick}
                className="ml-4 px-5 py-3 bg-[#FF7A00] text-black rounded-lg font-semibold hover:scale-[1.01] transition shadow-[0_8px_30px_rgba(255,122,0,0.10)]"
              >
                Notify Me
              </button>
            </div>

            <p className="text-xs text-neutral-500 mt-4 max-w-lg">
              Subscribe to get notified when documentaries publish.
            </p>
          </section>

          {/* right: slideshow */}
          <aside className="lg:w-1/2">
            <Slideshow teasers={teasers} index={index} setIndex={setIndex} />
          </aside>
        </div>

        {/* FILTERS + SEARCH */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => { setActiveCategory(c); setPage(1); }}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  activeCategory === c ? 'bg-[#FF7A00] text-black font-semibold' : 'bg-white/5 text-white/80 hover:bg-white/6'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              placeholder="Search documentaries..."
              className="px-4 py-3 rounded-xl bg-[#0e0e0e] border border-neutral-800 text-white placeholder-neutral-500 focus:ring-2 focus:ring-[#FF7A00] outline-none w-full md:w-64"
            />
            <div className="text-sm text-neutral-400">{filtered.length} result(s)</div>
          </div>
        </div>

        {/* DOCUMENTARY GRID */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-500">Documentary Library</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageItems.map((doc) => (
              <article
                key={doc.id}
                className="group bg-[#0d0d0d] border border-neutral-800 rounded-xl overflow-hidden hover:border-[#FF7A00] transition-all shadow-sm hover:shadow-[0_10px_30px_rgba(255,122,0,0.06)]"
                onMouseEnter={() => setHoveredId(doc.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-44 bg-black">
                  {/* video preview on hover (plays muted) */}
                  {doc.previewVideo ? (
                    <video
                      ref={(el) => (videoRefs.current[doc.id] = el)}
                      src={doc.previewVideo}
                      className="absolute inset-0 w-full h-full object-cover"
                      poster={doc.imgLocal || doc.img}
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img src={doc.imgLocal || doc.img} alt={doc.title} className="w-full h-full object-cover" />
                  )}

                  {/* overlay when not hovered shows title small */}
                  <div className="absolute left-4 bottom-4 bg-black/60 px-3 py-1 rounded-full border border-white/6">
                    <div className="text-xs text-[#FF7A00] font-semibold">{doc.category}</div>
                    <div className="text-sm text-white font-medium">{doc.date}</div>
                  </div>

                  {/* play icon overlay visible when hovered */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${hoveredId === doc.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="bg-black/60 rounded-full p-4">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="#FF7A00"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{doc.title}</h3>
                  <p className="text-sm text-neutral-400 line-clamp-2">{doc.date} • {doc.category}</p>

                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => setToast({ type: 'info', message: `Open ${doc.title} (placeholder)` }) || setTimeout(()=>setToast(null),2000)}
                      className="flex-1 py-2 rounded-lg border border-white/6 text-sm hover:bg-white/6 transition"
                    >
                      Details
                    </button>

                    <button
                      onClick={() => { setToast({ type: 'success', message: 'Added to watchlist' }); setTimeout(()=>setToast(null),2000); }}
                      className="py-2 px-3 rounded-lg bg-[#FF7A00] text-black text-sm font-semibold hover:bg-[#ff8f2a] transition"
                    >
                      Watch
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* pagination */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-4 py-2 rounded-md ${page === 1 ? 'bg-white/6 text-neutral-400' : 'bg-white/5 hover:bg-[#FF7A00] hover:text-black text-white'}`}
            >
              Prev
            </button>

            <div className="text-sm text-neutral-400">Page {page} of {totalPages}</div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-4 py-2 rounded-md ${page === totalPages ? 'bg-white/6 text-neutral-400' : 'bg-white/5 hover:bg-[#FF7A00] hover:text-black text-white'}`}
            >
              Next
            </button>
          </div>
        </section>
      </main>

      {/* notify modal */}
      {modalOpen && <NotifyModal form={form} setForm={setForm} close={() => setModalOpen(false)} submitting={submitting} handleSubmit={handleSubmit} />}

      {/* toast */}
      {toast && (
        <div className={`fixed right-6 bottom-6 z-60 rounded-xl px-5 py-3 shadow-xl transition transform ${toast.type === 'success' ? 'bg-[#FF7A00] text-black' : 'bg-white/8 text-white'}`}>
          <div className="text-sm font-medium">{toast.message}</div>
        </div>
      )}

      {/* styles */}
      <style jsx>{`
        /* film strip graphic */
        .film-strip {
          height: 100%;
          background-image:
            radial-gradient(circle at 8% 50%, rgba(255,255,255,0.06) 0 6px, transparent 6px),
            radial-gradient(circle at 30% 50%, rgba(255,255,255,0.06) 0 6px, transparent 6px),
            linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02));
          background-size: 100px 100%, 100px 100%, 100% 100%;
          background-repeat: repeat-x;
        }

        @keyframes filmMove { 0%{ transform: translateX(0);} 100%{ transform: translateX(-40%);} }
        @keyframes filmMoveReverse { 0%{ transform: translateX(0);} 100%{ transform: translateX(40%);} }
        .animate-film-move { animation: filmMove 18s linear infinite; }
        .animate-film-move-reverse { animation: filmMoveReverse 22s linear infinite; }

        @keyframes slowHover { 0%{ transform: translateY(0)} 50%{ transform: translateY(-8px)} 100%{ transform: translateY(0)} }
        @keyframes slowHoverRev { 0%{ transform: translateY(0)} 50%{ transform: translateY(8px)} 100%{ transform: translateY(0)} }
        .animate-slow-hover { animation: slowHover 6s ease-in-out infinite; }
        .animate-slow-hover-rev { animation: slowHoverRev 7s ease-in-out infinite; }

        /* small helpers */
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
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
            className={`flex-none w-24 h-14 rounded-md overflow-hidden border ${i === index ? 'border-[#FF7A00] shadow-[0_6px_20px_rgba(255,122,0,0.12)]' : 'border-white/5'}`}
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
