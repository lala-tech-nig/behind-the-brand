import Image from "next/image";

export default function StoryCard({ title, category, img }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:scale-[1.02] transition transform">
      <div className="h-44 w-full relative">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <p className="text-brand-500 text-xs uppercase font-semibold">{category}</p>
        <h3 className="mt-1 font-semibold text-lg">{title}</h3>
      </div>
    </div>
  );
}
