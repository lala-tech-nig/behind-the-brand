// import Image from "next/image";
// import StoryCard from "../components/StoryCard";
// import SectionHeading from "../components/SectionHeading";

// export default function Home() {
//   return (
//     <div className="pb-28">
//       {/* Hero */}
//       <section className="relative w-full h-[480px] rounded-xl overflow-hidden mt-8">
//         <Image src="/sample-cover.jpg" alt="Featured" fill className="object-cover opacity-60" />
//         <div className="absolute inset-0 flex flex-col justify-end p-8">
//           <p className="text-brand-500 mb-2 text-xs tracking-wide uppercase">Featured Story of the Week</p>
//           <h1 className="text-4xl font-extrabold max-w-xl leading-tight">The Unseen Chapters of a Visionary</h1>
//           <p className="max-w-xl mt-4 text-neutral-300">An in-depth look into the life and mind of an industry titan.</p>
//           <button className="mt-6 bg-brand-500 px-5 py-2 rounded-md font-semibold text-sm hover:bg-brand-600 transition">Read The Full Story</button>
//         </div>
//       </section>

//       {/* Highlights */}
//       <SectionHeading title="Story Highlights" />
//       <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mt-4">
//         <ul className="space-y-4 text-sm text-neutral-300">
//           <li><strong className="text-white">Lesson 1:</strong> Embrace failure as a stepping stone.</li>
//           <li><strong className="text-white">Lesson 2:</strong> Your network is your net worth.</li>
//           <li><strong className="text-white">Lesson 3:</strong> Stay relentlessly curious.</li>
//         </ul>
//       </div>

//       {/* Collection */}
//       <SectionHeading title="Discover Our Collection" />
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//         <StoryCard title="The Art of Pivoting: How a Crisis Forged a New Path" category="Leadership" img="/sample-story.jpg" />
//         <StoryCard title="Building a Brand That Breathes" category="Culture" img="/sample-story.jpg" />
//         <StoryCard title="The Ten-Year Bet on a Single Idea" category="Innovation" img="/sample-story.jpg" />
//       </div>
//     </div>
//   );
// }





import Button from '@/components/Button';
import StoryCard from '@/components/StoryCard';

// Mock data for the story grid
const stories = [
  {
    category: 'Leadership',
    title: 'The Art of Pivoting: How a Crisis Forged a New Path',
    excerpt: 'An intimate portrait of a crisis-tested leader, this is the story of resilience and re-invention.',
    imageUrl: '/story-1.jpg', // Replace with your image
  },
  {
    category: 'Culture',
    title: 'Building a Brand That Breathes',
    excerpt: 'Explore how one company turned its internal culture into its most valuable asset.',
    imageUrl: '/story-2.jpg', // Replace with your image
  },
  {
    category: 'Innovation',
    title: 'The Ten-Year Bet on a Single Idea',
    excerpt: 'The journey of a lone inventor who defied the odds and changed an entire industry.',
    imageUrl: '/story-3.jpg', // Replace with your image
  },
  {
    category: 'Entrepreneurship',
    title: 'Scaling Global: A Founder’s Diary',
    excerpt: 'An intimate account of the highs and lows of building a startup from scratch.',
    imageUrl: '/story-4.jpg', // Replace with your image
  },
  {
    category: 'Design',
    title: 'The Philosophy of Form: A Masterclass in Simplicity',
    excerpt: 'Go inside the mind of Kai Tanaka, a world-renowned product designer.',
    imageUrl: '/story-5.jpg', // Replace with your image
  },
  {
    category: 'Social Impact',
    title: 'The Ripple Effect: One Person’s Mission for Change',
    excerpt: 'How a small act of kindness gave rise to a global movement for water access.',
    imageUrl: '/story-6.jpg', // Replace with your image
  },
];

export default function HomePage() {
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
            <Button href="#" className="mt-8 text-lg">
              Read The Full Story
            </Button>
          </div>
        </div>
      </section>

      {/* === Story Highlights Section === */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Story Highlights
          </h2>
          <div className="bg-surface rounded-lg p-8 md:p-12">
            <div className="space-y-8 divide-y divide-background">
              {/* Highlight 1 */}
              <div className="pt-8 first:pt-0">
                <span className="text-primary font-bold">Key Lesson 1</span>
                <p className="text-2xl text-text-primary mt-2">
                  Embrace failure as a stepping stone, not a stumbling block.
                  Every misstep is a lesson in disguise.
                </p>
              </div>
              {/* Highlight 2 */}
              <div className="pt-8">
                <span className="text-primary font-bold">Key Lesson 2</span>
                <p className="text-2xl text-text-primary mt-2">
                  Your network is your net worth. Cultivate relationships
                  built on mutual respect and shared vision.
                </p>
              </div>
              {/* Highlight 3 */}
              <div className="pt-8">
                <span className="text-primary font-bold">Key Lesson 3</span>
                <p className="text-2xl text-text-primary mt-2">
                  Stay restlessly curious. The moment you stop learning is
                  the moment you stop growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Discover Our Collection === */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Discover Our Collection
          </h2>
          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="bg-surface py-2 px-4 rounded-md text-sm font-medium">
              All Stories
            </button>
            <button className="py-2 px-4 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary">
              Technology
            </button>
            <button className="py-2 px-4 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary">
              Art & Design
            </button>
            <button className="py-2 px-4 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary">
              Social Impact
            </button>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stories.map((story) => (
              <StoryCard
                key={story.title}
                category={story.category}
                title={story.title}
                excerpt={story.excerpt}
                imageUrl={story.imageUrl}
              />
            ))}
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