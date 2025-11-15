// import Image from "next/image";

// export default function StoryCard({ title, category, img }) {
//   return (
//     <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:scale-[1.02] transition transform">
//       <div className="h-44 w-full relative">
//         <Image src={img} alt={title} fill className="object-cover" />
//       </div>
//       <div className="p-4">
//         <p className="text-brand-500 text-xs uppercase font-semibold">{category}</p>
//         <h3 className="mt-1 font-semibold text-lg">{title}</h3>
//       </div>
//     </div>
//   );
// }




import Image from 'next/image';
import Link from 'next/link';

export default function StoryCard({
  category,
  title,
  excerpt,
  imageUrl,
  href = '#',
}) {
  return (
    <Link href={href} className="group flex flex-col">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4">
        <span className="text-primary uppercase text-xs font-bold tracking-wider">
          {category}
        </span>
        <h3 className="text-xl font-bold text-text-primary mt-1 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  );
}