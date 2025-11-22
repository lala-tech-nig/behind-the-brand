import Image from "next/image";
import AuthorHeader from "../../components/AuthorHeader";
import StoryCard from "../../components/StoryCard";
import Timeline from "../../components/Timeline";

export default function AuthorProfile() {
  return (
    <div className="pb-28">
      <AuthorHeader />

      <section className="max-w-5xl mx-auto mt-10 px-4">
        <h2 className="text-brand-500 font-semibold text-lg">Biography</h2>
        <p className="text-neutral-300 mt-4 leading-relaxed">
          A compelling biography highlighting the author's background and journey. Driven by a passion for innovation and storytelling.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mt-12 px-4">
        <h2 className="text-brand-500 font-semibold text-lg">Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <StoryCard title="The Art of Beginnings" category="Growth" img="/sample-cover.jpg" />
          <StoryCard title="Echoes of the Future" category="Tech" img="/sample-cover.jpg" />
          <StoryCard title="Crafting a Legacy" category="Branding" img="/sample-cover.jpg" />
        </div>
      </section>

      <Timeline />
    </div>
  );
}
