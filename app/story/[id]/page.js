import Image from "next/image";
import StoryHighlights from "../../../components/StoryHighlights";
import AdviceGrid from "../../../components/AdviceGrid";
import AudioPlayer from "../../../components/AudioPlayer";

export default function StoryDetail() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pt-10 pb-32">
      <aside className="col-span-1 space-y-4 sticky top-20 h-fit">
        <h3 className="text-brand-500 text-sm font-semibold">The Creator's Journey</h3>
        <ul className="space-y-3 text-neutral-300 text-sm">
          <li className="hover:text-white cursor-pointer">Introduction</li>
          <li className="hover:text-white cursor-pointer text-white font-semibold">The Early Days</li>
          <li className="hover:text-white cursor-pointer">Advice for the Upcoming</li>
          <li className="hover:text-white cursor-pointer">Building the Empire</li>
          <li className="hover:text-white cursor-pointer">Conclusion</li>
        </ul>
      </aside>

      <article className="col-span-3 space-y-10">
        <div className="rounded-xl overflow-hidden">
          <Image src="/sample-cover.jpg" alt="Hero" width={1200} height={500} className="object-cover w-full h-[340px]" />
        </div>

        <h1 className="text-4xl font-extrabold">The Architect of Tomorrow</h1>
        <p className="text-neutral-300 max-w-3xl">How Jane Doe built an empire from a garage, a dream, and a soldering iron.</p>

        <h2 className="text-xl font-bold mt-12">The Early Days</h2>
        <p className="text-neutral-300 leading-relaxed">In those formative years, every day was a battle against constraints...</p>

        <blockquote className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 italic text-lg text-neutral-200">
          "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks."
        </blockquote>

        <AudioPlayer />

        <h2 className="text-xl font-bold">Advice for the Upcoming</h2>
        <AdviceGrid />
      </article>
    </div>
  );
}
