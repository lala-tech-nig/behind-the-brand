import Image from 'next/image';
import StorySidebar from '@/components/StorySidebar';

// Mockup of the Q&A block component from the design
const QABlock = ({ question, answer }) => (
  <div className="my-8 flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface text-primary font-bold flex items-center justify-center">
      Q
    </div>
    <div>
      <h4 className="font-bold text-lg text-text-primary">{question}</h4>
      <p className="mt-2 text-text-secondary">{answer}</p>
    </div>
  </div>
);

// Mockup of the Quote block from the design
const QuoteBlock = ({ quote, author }) => (
  <div className="my-12 bg-surface p-8 rounded-lg border-l-4 border-primary">
    <blockquote className="text-3xl font-bold text-text-primary leading-snug">
      &ldquo;{quote}&rdquo;
    </blockquote>
    <p className="mt-4 text-text-secondary">&mdash; {author}</p>
  </div>
);

export default function StoryPage() {
  const storyTitle = "The Architect of Tomorrow";
  const authorName = "Jane Doe";

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* === Column 1: Sticky Sidebar === */}
        <div className="lg:col-span-1">
          <StorySidebar storyTitle={storyTitle} authorName={authorName} />
        </div>

        {/* === Column 2: Main Content === */}
        <div className="lg:col-span-3">
          {/* Hero Image */}
          <div className="relative w-full h-[60vh] rounded-lg overflow-hidden">
            <Image
              src="/story-hero.jpg" // Add a hero image to your /public folder
              alt={storyTitle}
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-12 left-12 p-4">
              <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary">
                {storyTitle}
              </h1>
              <p className="mt-4 text-xl text-text-secondary max-w-lg">
                How Jane Doe built an empire from a garage, a dream, and a
                soldering iron.
              </p>
            </div>
          </div>

          {/* Article Body:
              Note how each <section> has an 'id' that
              matches the 'id' in the sidebar's 'sections' array.
          */}
          <article className="prose prose-invert prose-lg max-w-none p-12 text-text-secondary">
            
            <section id="introduction">
              <h2 className="text-3xl font-bold text-text-primary">Introduction</h2>
              <p>
                The story begins not in a boardroom, but in a cluttered garage,
                filled with the scent of solder and the hum of ambitious
                machinery. It was here, in the chaos of creation, that
                something revolutionary was being quietly, unknowingly pieced
                together. This is the journey of how a simple idea transformed
                an entire industry, forever changing the way we connect,
                create, and live.
              </p>
            </section>

            <section id="early-days" className="mt-16">
              <h2 className="text-3xl font-bold text-text-primary">The Early Days</h2>
              <p>
                In those formative years, every day was a battle against
                constraints. Resources were scarce, the timelines were brutal,
                and the path forward was anything but clear. Yet, within this
                crucible of challenge, a unique resilience was forged.
                Failure wasn't just an option; it was a daily occurrence, and
                every setback was a lesson. This principle became the bedrock
                of her nascent company.
              </p>

              <QuoteBlock
                quote="The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks."
                author="Jane Doe"
              />

              <QABlock
                question="What was the single most pivotal moment in the early days?"
                answer="It was when we almost ran out of funding. We had 48 hours to convince one last investor. That desperation, that focus... it's a clarifying force. We got the investment, but more importantly, we found our true grit."
              />
            </section>
            
            {/* Add more sections for 'advice', 'building', and 'conclusion' */}
            
            <section id="advice" className="mt-16">
                <h2 className="text-3xl font-bold text-text-primary">Advice for the Upcoming</h2>
                <p>...</p>
            </section>

            <section id="building" className="mt-16">
                <h2 className="text-3xl font-bold text-text-primary">Building the Empire</h2>
                <p>...</p>
            </section>

            <section id="conclusion" className="mt-16">
                <h2 className="text-3xl font-bold text-text-primary">Conclusion</h2>
                <p>...</p>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}