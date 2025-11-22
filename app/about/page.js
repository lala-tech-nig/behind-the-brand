'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Film, Layers, Globe, Users } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <Image
          src="/btb-hero.jpg"
          alt="Behind the Brand Documentary Hero"
          fill
          className="object-cover opacity-30"
        />

        <div className="relative z-10 max-w-3xl text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Behind The Brand
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Revealing untold stories, inspiring journeys, and the human truths behind Africa’s most remarkable brands.
          </p>
        </div>
      </section>

      {/* ABOUT BLOCK */}
      <section className="container max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          <strong>Behind The Brand</strong> is a storytelling platform dedicated to spotlighting the struggles, victories, 
          and defining moments behind brands, creatives, founders, entrepreneurs, and businesses across Africa.
          We dive deeper than the products people see — we explore the human stories that shaped them.
          <br /><br />
          In a world obsessed with final results, we reveal the unseen journey. The long nights. The failures. 
          The breakthroughs. The decisions that changed everything. The people behind the logos. 
          The stories that shaped the masterpieces.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#111] py-20 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Mission & Vision</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 rounded-2xl bg-black border border-neutral-800">
              <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To document and amplify powerful African stories by creating cinematic experiences 
                that connect audiences with the heart and soul behind every brand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black border border-neutral-800">
              <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the most trusted visual storytelling platform in Africa —  
                inspiring the next generation by revealing real stories of grit, innovation, and legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="container max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Core Pillars</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#111] p-6 rounded-2xl border border-neutral-800 text-center">
            <Camera size={36} className="mx-auto mb-4 text-orange-500" />
            <h3 className="text-xl font-bold mb-3">Authentic Stories</h3>
            <p className="text-gray-400">
              We capture raw, emotional, unfiltered stories that resonate deeply with audiences.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-neutral-800 text-center">
            <Film size={36} className="mx-auto mb-4 text-orange-500" />
            <h3 className="text-xl font-bold mb-3">Cinematic Craft</h3>
            <p className="text-gray-400">
              Every story is told with premium visuals, sound, and documentary-grade editing.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-neutral-800 text-center">
            <Globe size={36} className="mx-auto mb-4 text-orange-500" />
            <h3 className="text-xl font-bold mb-3">African Perspective</h3>
            <p className="text-gray-400">
              We represent the continent with dignity, excellence, and global-class production.
            </p>
          </div>
        </div>
      </section>

      {/* WHY BEHIND THE BRAND? */}
      <section className="bg-[#111] py-20 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What Makes Us Different</h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Most platforms focus on success. We focus on the journey.
            </p>
            <p>
              Most content shows what a brand *is*. We show *who* the brand is.
            </p>
            <p>
              Most visuals highlight the product. We highlight the humanity behind the product.
            </p>

            <p>
              Behind The Brand is intentionally crafted to be real, emotional, inspiring, 
              and deeply relatable — a platform where entrepreneurs and audiences connect 
              through shared experiences.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="container max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Our Journey</h2>

        <div className="border-l border-neutral-700 pl-6 space-y-12">
          <div>
            <h3 className="text-xl font-bold">2021 — The Idea Was Born</h3>
            <p className="text-gray-400 mt-2">
              The concept of documenting African brand stories began with a simple question:
              <em> “Who tells the stories behind these incredible businesses?”</em>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">2022 — First Documentary Shot</h3>
            <p className="text-gray-400 mt-2">
              A small team, limited equipment, but massive passion — the first Behind the Brand story was filmed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">2023 — Expansion & Growth</h3>
            <p className="text-gray-400 mt-2">
              More brands began reaching out. The documentary style became more refined, cinematic, and immersive.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">2025 — A Movement Begins</h3>
            <p className="text-gray-400 mt-2">
              Now evolving into a full storytelling ecosystem — series, features, live shows, and more.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-orange-600 py-20 text-black text-center px-6">
        <h2 className="text-4xl font-extrabold mb-4">
          Have a Story Worth Sharing?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Your journey could inspire thousands. Behind The Brand is always searching for the next powerful voice.
        </p>

        <a
          href="/submit"
          className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-900 transition"
        >
          Submit Your Story
        </a>
      </section>

    </div>
  );
}
