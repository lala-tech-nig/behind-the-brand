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
    <div className="container mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar: appears after main on mobile, sticky on desktop */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="lg:sticky lg:top-20">
            <StorySidebar storyTitle={storyTitle} authorName={authorName} />
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          {/* Hero Image */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-lg overflow-hidden">
            <Image
              src="/dangote1.webp"
              alt={storyTitle}
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-6 left-4 sm:bottom-12 sm:left-12 p-4 sm:p-6 max-w-full sm:max-w-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight">
                {storyTitle}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-text-secondary max-w-lg">
                How Jane Doe built an empire from a garage, a dream, and a
                soldering iron.
              </p>
            </div>
          </div>

          {/* Article Body: responsive padding and typography */}
          <article className="prose prose-invert prose-lg max-w-none p-6 sm:p-12 text-text-secondary">
            <section id="introduction">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Introduction</h2>
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

            <section id="early-days" className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">The Early Days</h2>
              <p className="mt-2">
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

            <section id="advice" className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Advice for the Upcoming</h2>
              <p className="mt-2">...</p>
            </section>

            <section id="building" className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Building the Empire</h2>
              <p className="mt-2">...</p>
            </section>

            <section id="conclusion" className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Conclusion</h2>
              <p className="mt-2">...</p>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}