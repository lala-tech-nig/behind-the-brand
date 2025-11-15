import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-neutral-950 border-b border-neutral-800">
      <Link href="/" className="flex items-center gap-3">
        <Logo mode="light" size={36} />
        <span className="font-bold text-white text-lg">Behind The Brand</span>
      </Link>

      <div className="flex items-center gap-6 text-sm text-neutral-300">
        <Link href="/stories">Stories</Link>
        <Link href="/about">About</Link>
        <Link href="/submit">Submit a Story</Link>
        <button className="bg-brand-500 px-4 py-1.5 rounded-md font-medium text-white hover:bg-brand-600 transition-all">Subscribe</button>
      </div>
    </nav>
  );
}
