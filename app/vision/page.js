'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

/**
 * Vision Page with:
 * - filters & categories
 * - featured carousel
 * - submit modal
 * - load more pagination
 * - confetti + toast on submit
 *
 * NOTE: The component references an uploaded file at:
 * /mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png
 * (Your tooling will convert that local path to a URL).
 */

export default function Page() {
  // --- sample dataset (would come from API normally) ---
  const initialVisions = useMemo(
    () => [
      {
        id: 1,
        name: 'Adebayo Johnson',
        title: 'I want to become a software engineer building solutions for Africa.',
        date: 'Jan 12, 2025',
        category: 'Tech',
        thumb: '/mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png',
      },
      {
        id: 2,
        name: 'Chiamaka Uzo',
        title: 'My dream is to be a filmmaker telling powerful African stories.',
        date: 'Feb 02, 2025',
        category: 'Film',
        thumb: '/mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png',
      },
      {
        id: 3,
        name: 'Yusuf Bello',
        title: 'I want to become a medical researcher curing rare diseases.',
        date: 'Feb 14, 2025',
        category: 'Health',
        thumb: '/mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png',
      },
      {
        id: 4,
        name: 'Amina Saleh',
        title: 'I will design low-cost solar systems for rural homes.',
        date: 'Mar 02, 2025',
        category: 'Energy',
        thumb: '/mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png',
      },
      {
        id: 5,
        name: 'Tunde Martins',
        title: 'I want to found a fintech company for micro-entrepreneurs.',
        date: 'Mar 10, 2025',
        category: 'Finance',
        thumb: '/mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png',
      },
      {
        id: 6,
        name: 'Ngozi Okafor',
        title: 'I want to teach digital skills across underserved schools.',
        date: 'Mar 22, 2025',
        category: 'Education',
        thumb: '/mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png',
      },
      // more sample entries (you can seed more)
      {
        id: 7,
        name: 'Samuel K.',
        title: 'I will build community-driven agriculture platforms.',
        date: 'Apr 04, 2025',
        category: 'Agriculture',
        thumb: '/mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png',
      },
      {
        id: 8,
        name: 'Fatima R.',
        title: 'I want to launch a creative studio for local artists.',
        date: 'Apr 11, 2025',
        category: 'Arts',
        thumb: '/mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png',
      },
    ],
    []
  );

  // categories derived from dataset
  const categories = useMemo(() => {
    const set = new Set(initialVisions.map((v) => v.category));
    return ['All', ...Array.from(set)];
  }, [initialVisions]);

  // --- page state ---
  const [data, setData] = useState(initialVisions);
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6); // pagination
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // carousel state
  const featured = useMemo(() => data.slice(0, 4), [data]);
  const [slideIdx, setSlideIdx] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setSlideIdx((i) => (i + 1) % featured.length);
    }, 4500);
    return () => clearInterval(slideInterval.current);
  }, [featured.length]);

  // filtered list
  const filtered = data.filter((v) => {
    if (activeCategory !== 'All' && v.category !== activeCategory) return false;
    if (query && !(`${v.name} ${v.title} ${v.category}`.toLowerCase().includes(query.toLowerCase())))
      return false;
    return true;
  });

  // visible list (pagination / load more)
  const visibleList = filtered.slice(0, visibleCount);

  // submit new vision
  const [form, setForm] = useState({
    name: '',
    title: '',
    category: '',
    thumb: '',
  });

  function validEmailLike(text) {
    return text && text.length > 2;
  }

  function launchConfetti() {
    const duration = 1200;
    const end = Date.now() + duration;
    (function frame() {
      confetti({
        particleCount: 6,
        spread: 80,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() * 0.6 },
        colors: ['#FF7A00', '#ffffff', '#FFD8A8'],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.title.trim() || !form.category.trim()) {
      setToast({ type: 'error', message: 'Please fill name, title and category.' });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900)); // simulate network
    const newItem = {
      id: Date.now(),
      name: form.name,
      title: form.title,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      category: form.category,
      thumb: form.thumb || '/mnt/data/a3215c34-4e38-412c-89d3-336411a809a5.png',
    };
    setData((d) => [newItem, ...d]);
    setForm({ name: '', title: '', category: '', thumb: '' });
    setSubmitting(false);
    setModalOpen(false);
    launchConfetti();
    setToast({ type: 'success', message: 'Your vision was submitted — thank you!' });
    setTimeout(() => setToast(null), 4500);
  }

  // load more handler
  function loadMore() {
    setVisibleCount((c) => c + 6);
  }

  // infinite scroll (optional) - here, if near bottom, load more
  useEffect(() => {
    function onScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
        // near bottom
        if (visibleCount < filtered.length) {
          setVisibleCount((c) => Math.min(c + 6, filtered.length));
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [visibleCount, filtered.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0b0b0b] to-[#050505]" />
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#FF7A00]">Vision Gallery</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Young people imagining tomorrow — short, powerful visions from youths who want to change the world.
            Browse categories, filter, or submit your own vision.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-3 rounded-lg bg-[#FF7A00] text-black font-semibold shadow-md hover:bg-[#e86a00] transition"
            >
              Submit Your Vision
            </button>

            <div className="mt-2 sm:mt-0 sm:ml-4 flex items-center gap-3">
              <input
                value={query}
                onChange={(e) => { setQuery(e.target.value); setVisibleCount(6); }}
                placeholder="Search by name, keyword or category..."
                className="px-4 py-3 rounded-xl bg-[#0e0e0e] border border-neutral-800 text-white placeholder-neutral-500 focus:ring-2 focus:ring-[#FF7A00] outline-none w-72"
              />
              <div className="flex gap-2 flex-wrap">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setActiveCategory(c); setVisibleCount(6); }}
                    className={`text-sm px-3 py-2 rounded-full transition ${
                      activeCategory === c
                        ? 'bg-[#FF7A00] text-black'
                        : 'bg-white/5 text-white/80 hover:bg-white/6'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED CAROUSEL */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Featured Visions</h2>

        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-gradient-to-b from-[#0b0b0b] to-[#0d0d0d]">
          <div className="relative w-full h-64 sm:h-80">
            <img
              src={featured[slideIdx]?.thumb}
              alt={`Featured ${slideIdx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-6 bottom-6 bg-black/60 px-4 py-2 rounded-full border border-white/6">
              <div className="text-xs text-[#FF7A00] font-semibold">Featured</div>
              <div className="text-white font-bold">{featured[slideIdx]?.name}</div>
              <div className="text-sm text-neutral-300">{featured[slideIdx]?.title}</div>
            </div>
          </div>

          {/* controls */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <button
              onClick={() => setSlideIdx((i) => (i - 1 + featured.length) % featured.length)}
              className="bg-black/50 hover:bg-black/40 px-3 py-2 rounded-md border border-white/6"
            >
              ‹
            </button>
            <button
              onClick={() => setSlideIdx((i) => (i + 1) % featured.length)}
              className="bg-black/50 hover:bg-black/40 px-3 py-2 rounded-md border border-white/6"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* GRID LIST */}
      <main className="container mx-auto max-w-6xl px-6 pb-28">
        <h2 className="text-2xl font-bold mb-6">Stories of Tomorrow</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleList.map((v) => (
            <motion.article
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#0f0f0f] rounded-xl overflow-hidden border border-neutral-800 shadow-md hover:shadow-xl transition transform"
            >
              <div className="relative h-44 w-full">
                <img src={v.thumb} alt={v.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{v.name}</h3>
                  <span className="text-xs text-neutral-500">{v.date}</span>
                </div>

                <p className="text-neutral-300 mt-2 text-sm">{v.title}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-white/5 text-white/90 px-3 py-1 rounded-full">{v.category}</span>
                  <button
                    className="text-sm text-[#FF7A00] font-medium"
                    onClick={() => {
                      // quick "save" interaction visual
                      setToast({ type: 'info', message: `Saved "${v.name}" to your list` });
                      setTimeout(() => setToast(null), 2500);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-10 flex justify-center">
          {visibleCount < filtered.length ? (
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-[#FF7A00] text-black rounded-lg font-semibold hover:bg-[#e86a00] transition"
            >
              Load more
            </button>
          ) : (
            <div className="text-sm text-neutral-500">No more items</div>
          )}
        </div>
      </main>

      {/* SUBMIT MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-[#0b0b0b] rounded-2xl p-6 border border-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Submit Your Vision</h3>
              <button onClick={() => setModalOpen(false)} className="text-neutral-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-[#FF7A00]"
                required
              />
              <input
                placeholder="Short title (what you want to become)"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-[#FF7A00]"
                required
              />
              <div className="flex gap-3">
                <input
                  placeholder="Category (Tech, Film, Health...)"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="flex-1 px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-[#FF7A00]"
                  required
                />
                <input
                  placeholder="Thumbnail URL (optional)"
                  value={form.thumb}
                  onChange={(e) => setForm({ ...form, thumb: e.target.value })}
                  className="w-48 px-3 py-3 rounded-xl bg-black border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-[#FF7A00]"
                />
              </div>

              <div className="flex gap-3 mt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-4 py-3 bg-[#FF7A00] text-black rounded-xl font-semibold hover:bg-[#e86a00] transition"
                >
                  {submitting ? 'Submitting...' : 'Submit Vision'}
                </button>

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
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

      {/* PAGE STYLES */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
