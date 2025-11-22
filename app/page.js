'use client';
import { useMemo, useState } from 'react';
import Button from '@/components/Button';
import StoryCard from '@/components/StoryCard';
import StoryHighlights from '@/components/StoryHighlights';

// Realistic brand stories and people (mocked)
const storiesData = [
  {
    id: 1,
    brand: 'MajiPure',
    person: 'Aisha Bello',
    category: 'Social Impact',
    title: 'From Borehole to Breakthrough: MajiPure’s Journey to Clean Water',
    excerpt:
      'How MajiPure scaled local water purification hubs across three regions, restoring health and livelihoods.',
    imageUrl: '/stories/maji-pure.jpg',
    href: '/stories/maji-pure',
    trending: true,
  },
  {
    id: 2,
    brand: 'Kadi Studios',
    person: 'Chinwe Okoro',
    category: 'Culture',
    title: 'Kadi Studios: Building Culture Through Local Storytelling',
    excerpt:
      'A creative studio that redefined modern narratives by investing in grassroots storytellers and filmmakers.',
    imageUrl: '/stories/kadi-studios.jpg',
    href: '/stories/kadi-studios',
    trending: false,
  },
  {
    id: 3,
    brand: 'Lagos Ledger',
    person: 'Tunde Afolabi',
    category: 'Finance',
    title: 'Microcredit, Macro Change: How Lagos Ledger Unlocked Small Business Growth',
    excerpt:
      'A fintech platform that simplified micro-lending and helped thousands of market traders grow their businesses.',
    imageUrl: '/stories/lagos-ledger.jpg',
    href: '/stories/lagos-ledger',
    trending: true,
  },
  {
    id: 4,
    brand: 'SolLight',
    person: 'Amina Saleh',
    category: 'Energy',
    title: 'SolLight’s Low-Cost Solar Kits for Off-Grid Homes',
    excerpt:
      'Designing resilient, affordable solar systems adapted for rural communities and local technicians.',
    imageUrl: '/stories/sol-light.jpg',
    href: '/stories/sol-light',
    trending: false,
  },
  {
    id: 5,
    brand: 'Nuru Health',
    person: 'Yusuf Bello',
    category: 'Health',
    title: 'Nuru Health: Portable Diagnostics That Reach Remote Clinics',
    excerpt:
      'An innovation story: portable, low-cost diagnostic kits and training programs that reduce misdiagnoses.',
    imageUrl: '/stories/nuru-health.jpg',
    href: '/stories/nuru-health',
    trending: false,
  },
  {
    id: 6,
    brand: 'Canvas Collective',
    person: 'Fatima R.',
    category: 'Design',
    title: 'Canvas Collective: Turning Local Craft into Global Design',
    excerpt:
      'A design cooperative connecting artisans with global markets while preserving traditional techniques.',
    imageUrl: '/stories/canvas-collective.jpg',
    href: '/stories/canvas-collective',
    trending: true,
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set(storiesData.map((s) => s.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return storiesData;
    return storiesData.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* === Hero Section === */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        {/* Background Image: Configured in tailwind.config.js */}
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-80"></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10 text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary leading-tight">
              The Unseen Chapters of a Visionary
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl">
              An in-depth look into the life and mind of a creator,
              visionary, and builder. Discover the principles that defined a
              career and the real-life stories behind the success.
            </p>
            <Button href="/story/1" className="mt-8 text-lg">
              Read The Full Story
            </Button>
          </div>
        </div>
      </section>

      {/* === Story Highlights Section === */}
      <StoryHighlights />

      {/* === Discover Our Collection === */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Discover Our Collection</h2>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`py-2 px-4 rounded-md text-sm font-medium ${
                  activeCategory === c
                    ? 'bg-[#FF7A00] text-black shadow-md'
                    : 'bg-surface text-text-secondary hover:bg-white/5'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((story) => (
              <StoryCard
                key={story.id}
                category={story.category}
                title={`${story.brand}: ${story.title}`}
                excerpt={story.excerpt}
                imageUrl={story.imageUrl}
                href={story.href}
                trending={story.trending}
                author={story.person}
              />
            ))}
          </div>

          {/* CTA below the collection */}
          <div className="mt-12 flex justify-center">
            <Button href="/stories" className="px-8 py-3 bg-[#FF7A00] text-black rounded-full font-semibold">
              Visit full story page
            </Button>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-surface rounded-lg text-center p-12 md:p-16">
            <h2 className="text-3xl font-bold">
              Have a story worth telling?
            </h2>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              We're always looking for the next great journey to document. If
              you or someone you know has a story of resilience, innovation,
              or impact, we want to hear it.
            </p>
            <Button href="#" className="mt-8">
              Want us to cover your story or story of someone you know
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}