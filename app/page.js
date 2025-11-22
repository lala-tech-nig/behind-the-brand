import Button from '@/components/Button';
import StoriesPage from '@/components/StoriesPage';
import StoryCard from '@/components/StoryCard';
import StoryHighlights from '@/components/StoryHighlights';

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
            <Button href="/story/1" className="mt-8 text-lg">
              Read The Full Story
            </Button>
          </div>
        </div>
      </section>

      {/* === Story Highlights Section === */}
      <StoryHighlights />

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