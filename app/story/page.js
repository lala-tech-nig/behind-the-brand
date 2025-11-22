'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function StoriesPage() {
  const allStories = [
    {
      id: 1,
      title: 'The Architect of Tomorrow',
      author: 'Jane Doe',
      date: 'Jan 12, 2025',
      image: '/dangote1.webp',
      category: 'Innovation',
    },
    {
      id: 2,
      title: 'Breaking Barriers in Business',
      author: 'Samuel Ojo',
      date: 'Feb 02, 2025',
      image: '/dangote1.webp',
      category: 'Entrepreneurship',
    },
    {
      id: 3,
      title: 'The Rise of a Digital Leader',
      author: 'Fatima Hassan',
      date: 'Feb 14, 2025',
      image: '/dangote1.webp',
      category: 'Technology',
    },
  ];

  const categories = ['All', 'Innovation', 'Entrepreneurship', 'Technology'];

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredStories = allStories.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === 'All' || story.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* HERO */}
      <section className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-orange-500"
        >
          Stories Behind The Brand
        </motion.h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Discover powerful stories of resilience, creativity, failure, glory,
          and the journey behind every successful brand.
        </p>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* SEARCH */}
          <div className="relative w-full md:w-1/2">
            <Search className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg pl-10 pr-4 py-3 text-sm focus:border-orange-500 outline-none"
            />
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex gap-3 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-black font-bold'
                    : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED STORIES CAROUSEL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-orange-500">
            Featured Stories
          </h2>

          <div className="flex gap-6 overflow-x-auto scrollbar-none pb-4">
            {allStories.map((story, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={story.id}
                className="min-w-[300px] bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{story.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{story.author}</p>
                  <span className="text-xs text-gray-500">{story.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* STORIES GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {filteredStories.slice(0, visibleCount).map((story, index) => (
            <motion.a
              href={`/story/${story.id}`}
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden hover:scale-[1.03] transition transform block"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg">{story.title}</h3>
                <p className="text-gray-400 text-sm">{story.author}</p>
                <span className="text-xs text-gray-500">{story.date}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* LOAD MORE */}
        {visibleCount < filteredStories.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="px-6 py-3 rounded-full bg-orange-500 text-black font-bold hover:bg-orange-600 transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
