'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import StoryCard from '@/components/StoryCard';

export default function StoriesPage() {
  const allStories = useMemo(
    () => [
      {
        id: 1,
        brand: 'MajiPure',
        person: 'Aisha Bello',
        title: 'From Borehole to Breakthrough',
        excerpt:
          'MajiPure built a distributed water purification network that transformed health outcomes across three regions.',
        date: 'Jan 12, 2025',
        image: '/stories/maji-pure.jpg',
        category: 'Social Impact',
        trending: true,
        href: '/story/1',
      },
      {
        id: 2,
        brand: 'Kadi Studios',
        person: 'Chinwe Okoro',
        title: 'Crafting Culture: Kadi’s Local Storytelling',
        excerpt:
          'Kadi Studios invests in grassroots filmmakers, turning community stories into international film festival hits.',
        date: 'Feb 02, 2025',
        image: '/stories/kadi-studios.jpg',
        category: 'Culture',
        trending: false,
        href: '/story/2',
      },
      {
        id: 3,
        brand: 'Lagos Ledger',
        person: 'Tunde Afolabi',
        title: 'Microcredit, Macro Change',
        excerpt:
          'A fintech platform that simplified micro-lending and helped thousands of market traders access capital.',
        date: 'Feb 14, 2025',
        image: '/stories/lagos-ledger.jpg',
        category: 'Finance',
        trending: true,
        href: '/story/3',
      },
      {
        id: 4,
        brand: 'SolLight',
        person: 'Amina Saleh',
        title: 'Low-Cost Solar Kits for Off-Grid Homes',
        excerpt:
          'SolLight designed resilient, affordable solar kits and trained local technicians to maintain them.',
        date: 'Mar 02, 2025',
        image: '/stories/sol-light.jpg',
        category: 'Energy',
        trending: false,
        href: '/story/4',
      },
      {
        id: 5,
        brand: 'Nuru Health',
        person: 'Yusuf Bello',
        title: 'Portable Diagnostics for Remote Clinics',
        excerpt:
          'Nuru’s portable diagnostic kits lowered misdiagnosis rates and sped treatment in rural clinics.',
        date: 'Mar 22, 2025',
        image: '/stories/nuru-health.jpg',
        category: 'Health',
        trending: false,
        href: '/story/5',
      },
      {
        id: 6,
        brand: 'Canvas Collective',
        person: 'Fatima R.',
        title: 'Turning Local Craft into Global Design',
        excerpt:
          'Canvas Collective connected artisans to global markets while preserving traditional techniques and fair pay.',
        date: 'Apr 11, 2025',
        image: '/stories/canvas-collective.jpg',
        category: 'Design',
        trending: true,
        href: '/story/6',
      },
    ],
    []
  );

  const categories = useMemo(() => {
    const set = new Set(allStories.map((s) => s.category));
    return ['All', ...Array.from(set)];
  }, [allStories]);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  // pagination
  const [pageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredStories = allStories.filter((story) => {
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      story.title.toLowerCase().includes(q) ||
      story.person.toLowerCase().includes(q) ||
      story.brand.toLowerCase().includes(q);

    const matchesCategory = activeCategory === 'All' || story.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // reset page when search or filter changes
  useMemo(() => setCurrentPage(1), [searchQuery, activeCategory]);

  // featured: pick first 4 (or trending ones)
  const featured = allStories.filter((s) => s.trending).slice(0, 4).length
    ? allStories.filter((s) => s.trending)
    : allStories.slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* HERO */}
      <section className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-[#FF7A00]"
        >
          Stories Behind The Brand
        </motion.h1>
        <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
          Discover powerful stories of resilience, creativity, failure, glory,
          and the journey behind every successful brand.
        </p>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* SEARCH */}
          <div className="relative w-full md:w-1/2">
            <Search className="absolute top-3 left-3 text-neutral-500" size={20} />
            <input
              type="text"
              placeholder="Search stories by person, brand or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg pl-10 pr-4 py-3 text-sm focus:border-[#FF7A00] outline-none"
            />
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex justify-center gap-3 mb-4 md:mb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-4 rounded-md text-sm font-medium ${
                  activeCategory === cat
                    ? 'bg-[#FF7A00] text-black shadow-md'
                    : 'bg-surface text-text-secondary hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED STORIES CAROUSEL */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#FF7A00]">Featured Stories</h2>

          <div className="flex gap-6 overflow-x-auto scrollbar-none pb-4">
            {featured.map((story) => (
              <div key={story.id} className="min-w-[260px] sm:min-w-[300px]">
                <StoryCard
                  category={story.category}
                  title={`${story.brand}: ${story.title}`}
                  excerpt={story.excerpt}
                  imageUrl={story.image}
                  href={story.href}
                  trending={story.trending}
                  author={story.person}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* STORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredStories.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((story) => (
            <StoryCard
              key={story.id}
              category={story.category}
              title={`${story.brand}: ${story.title}`}
              excerpt={story.excerpt}
              imageUrl={story.image}
              href={story.href}
              trending={story.trending}
              author={story.person}
            />
          ))}
        </div>

        {/* PAGINATION */}
        {filteredStories.length > pageSize && (
          <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className={`px-3 py-2 rounded-md ${currentPage === 1 ? 'bg-white/6 text-white/60' : 'bg-white/5'}`}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {Array.from({ length: Math.ceil(filteredStories.length / pageSize) }).map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-md ${currentPage === page ? 'bg-[#FF7A00] text-black' : 'bg-white/5 text-white'} `}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(Math.ceil(filteredStories.length / pageSize), p + 1))}
              className={`px-3 py-2 rounded-md ${currentPage === Math.ceil(filteredStories.length / pageSize) ? 'bg-white/6 text-white/60' : 'bg-white/5'}`}
              disabled={currentPage === Math.ceil(filteredStories.length / pageSize)}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
