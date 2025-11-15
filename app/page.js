import Image from "next/image";
import StoryCard from "../components/StoryCard";
import SectionHeading from "../components/SectionHeading";

export default function Home() {
  return (
    <div className="pb-28">
      {/* Hero */}
      <section className="relative w-full h-[480px] rounded-xl overflow-hidden mt-8">
        <Image src="/sample-cover.jpg" alt="Featured" fill className="object-cover opacity-60" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <p className="text-brand-500 mb-2 text-xs tracking-wide uppercase">Featured Story of the Week</p>
          <h1 className="text-4xl font-extrabold max-w-xl leading-tight">The Unseen Chapters of a Visionary</h1>
          <p className="max-w-xl mt-4 text-neutral-300">An in-depth look into the life and mind of an industry titan.</p>
          <button className="mt-6 bg-brand-500 px-5 py-2 rounded-md font-semibold text-sm hover:bg-brand-600 transition">Read The Full Story</button>
        </div>
      </section>

      {/* Highlights */}
      <SectionHeading title="Story Highlights" />
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mt-4">
        <ul className="space-y-4 text-sm text-neutral-300">
          <li><strong className="text-white">Lesson 1:</strong> Embrace failure as a stepping stone.</li>
          <li><strong className="text-white">Lesson 2:</strong> Your network is your net worth.</li>
          <li><strong className="text-white">Lesson 3:</strong> Stay relentlessly curious.</li>
        </ul>
      </div>

      {/* Collection */}
      <SectionHeading title="Discover Our Collection" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <StoryCard title="The Art of Pivoting: How a Crisis Forged a New Path" category="Leadership" img="/sample-story.jpg" />
        <StoryCard title="Building a Brand That Breathes" category="Culture" img="/sample-story.jpg" />
        <StoryCard title="The Ten-Year Bet on a Single Idea" category="Innovation" img="/sample-story.jpg" />
      </div>
    </div>
  );
}
