'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function StoriesPage() {
  // Example data — replace with your real story data
  const stories = [
    {
      id: 1,
      title: 'How a Local Brand Became a Global Force',
      date: 'Jan 12, 2025',
      thumb: '/story1.jpg',
    },
    {
      id: 2,
      title: 'The Rise of African Tech Founders',
      date: 'Feb 3, 2025',
      thumb: '/story2.jpg',
    },
    {
      id: 3,
      title: 'Inside the Mind of a Creative Genius',
      date: 'Feb 18, 2025',
      thumb: '/story3.jpg',
    },
    {
      id: 4,
      title: 'Turning Passion Into a Million-Naira Business',
      date: 'Mar 1, 2025',
      thumb: '/story4.jpg',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">

      {/* 🔶 TOP SEARCH SECTION */}
      <div className="bg-black border border-neutral-800 rounded-2xl p-6 mb-12 shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          Stories We Have Covered
        </h2>

        <input
          type="text"
          placeholder="Search for any story title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 mt-3 rounded-xl bg-[#111] border border-neutral-700 text-white placeholder-neutral-400 focus:ring-2 focus:ring-[#FF7A00] outline-none transition"
        />
      </div>

      {/* 🔶 STORIES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStories.length === 0 ? (
          <p className="text-neutral-500">No stories match your search.</p>
        ) : (
          filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="relative w-full h-48">
                <Image
                  src={story.thumb}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {story.title}
                </h3>
                <p className="text-sm text-neutral-400 mt-2">{story.date}</p>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
