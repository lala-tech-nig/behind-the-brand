"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Library, Landmark } from "lucide-react";

// ========================
//  MOCK HISTORY DATA
// ========================
const histories = [
  {
    title: "Old Nigeria Histories",
    description:
      "A deep dive into Nigeria before colonial impact—kingdoms, migrations, cultures, trade routes and ancient civilizations.",
    image: "/history-old-nigeria.jpg",
    slug: "old-nigeria-histories",
    tag: "Nigeria",
  },
  {
    title: "African Cultural Histories",
    description:
      "Explore timeless African traditions, rituals, values, and cultural identities passed across generations.",
    image: "/history-culture.jpg",
    slug: "cultural-histories",
    tag: "Culture",
  },
  {
    title: "Kingdoms & Empires",
    description:
      "Stories of ancient empires like Mali, Oyo, Songhai, Benin, Kush and the power that shaped the continent.",
    image: "/history-kingdoms.jpg",
    slug: "kingdoms-empires",
    tag: "Africa",
  },
  {
    title: "Historical Leaders",
    description:
      "Learn about iconic African rulers, warriors, activists, inventors and visionaries.",
    image: "/history-leaders.jpg",
    slug: "historical-leaders",
    tag: "People",
  },
  {
    title: "Cultural Practices",
    description:
      "From festivals to rites of passage, discover the living traditions that shape our identity.",
    image: "/history-practices.jpg",
    slug: "cultural-practices",
    tag: "Culture",
  },
  {
    title: "Events That Shaped Us",
    description:
      "Colonial impact, independence struggles, civil wars, reforms, and unforgettable turning points.",
    image: "/history-events.jpg",
    slug: "events-that-shaped-us",
    tag: "Events",
  },
];

// ========================
//  CATEGORY FILTERS
// ========================
const tags = ["All", "Nigeria", "Culture", "Africa", "People", "Events"];

export default function HistoriesPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredHistories =
    activeTag === "All"
      ? histories
      : histories.filter((item) => item.tag === activeTag);

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* ========================
          HERO SECTION
      ======================== */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <Image
          src="/histories-hero.jpg"
          alt="Histories Hero"
          fill
          className="object-cover opacity-40"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent drop-shadow-xl">
            Histories
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Journey into the past. Discover the cultures, empires, people and
            events that shaped who we are today.
          </p>
        </motion.div>
      </section>

      {/* ========================
          FILTER BAR
      ======================== */}
      <div className="container max-w-6xl mx-auto mt-16 px-6 flex gap-4 overflow-x-auto pb-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-6 py-2 rounded-full border transition-all whitespace-nowrap
              ${
                activeTag === tag
                  ? "bg-orange-600 border-orange-600 text-white"
                  : "border-gray-600 text-gray-300 hover:border-orange-500"
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ========================
          HISTORY CARDS GRID
      ======================== */}
      <div className="container max-w-7xl mx-auto px-6 mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredHistories.map((history, index) => (
          <motion.a
            key={index}
            href={`/histories/${history.slug}`}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="bg-[#0d0d0d] rounded-2xl overflow-hidden border border-neutral-800 hover:border-orange-500 cursor-pointer shadow-lg shadow-orange-900/10"
          >
            <div className="relative h-56 w-full">
              <Image
                src={history.image}
                fill
                alt={history.title}
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
                {history.tag}
              </span>

              <h3 className="text-2xl font-bold mt-2">{history.title}</h3>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {history.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-orange-500 font-semibold">
                <BookOpen size={18} /> Read More
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* ========================
          FOOT NOTE
      ======================== */}
      <div className="text-center mt-24 text-gray-400 text-sm">
        More Histories Coming Soon…
      </div>
    </div>
  );
}
