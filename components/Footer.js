import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white mt-32 pt-16 pb-10 overflow-hidden">

      {/* TOP ORANGE GLOW BAR */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#FF7A00] via-white/30 to-[#FF7A00] animate-pulse"></div>

      <div className="container mx-auto max-w-6xl px-6 relative">

        {/* Animated Background Gradient Blur */}
        <div className="absolute inset-0 -z-10 opacity-20 bg-gradient-to-br from-[#FF7A00] via-black to-[#FF7A00] blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* BRAND NAME */}
          <h2
            className="text-xl font-semibold tracking-wider flex items-center gap-2"
          >
            <span className="text-white">Behind</span>
            <span className="text-[#FF7A00]">The Brand</span>
          </h2>

          {/* NAV LINKS */}
          <nav className="flex gap-8 text-sm">
            {[
              { name: "Terms", href: "#" },
              { name: "Privacy", href: "#" },
              { name: "Contact", href: "#" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-white/70 hover:text-white transition"
              >
                {link.name}
                {/* Hover Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF7A00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px w-full bg-white/10"></div>

        {/* BOTTOM SECTION */}
        <div className="text-center">
          <p className="text-xs text-white/50 tracking-wide">
            © {new Date().getFullYear()} Behind The Brand — All Rights Reserved.
          </p>

          <p className="mt-2 text-xs text-[#FF7A00]/80 animate-[fadeIn_2s_ease-out]">
            Crafted with creativity ✦ Powered by stories that matter.
          </p>
        </div>
      </div>

      {/* FLOATING ORANGE ORB (Subtle Animation) */}
      <div className="absolute right-10 bottom-10 w-24 h-24 bg-[#FF7A00]/20 rounded-full blur-3xl animate-[float_6s_infinite_ease-in-out]"></div>

      {/* FLOATING WHITE ORB */}
      <div className="absolute left-10 top-20 w-16 h-16 bg-white/10 rounded-full blur-2xl animate-[float_7s_infinite_ease-in-out]"></div>

    </footer>
  );
}
