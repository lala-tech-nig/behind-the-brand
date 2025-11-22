import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const links = [
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Contact', href: '/contact' },
  ];

  const social = [
    { name: 'Twitter', href: 'https://twitter.com', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.27 8.27 0 01-2.357.637 4.07 4.07 0 001.804-2.23 8.14 8.14 0 01-2.605.98 4.088 4.088 0 00-6.993 3.728A11.587 11.587 0 013 4.79a4.073 4.073 0 001.265 5.447 4.043 4.043 0 01-1.852-.51v.05A4.086 4.086 0 004.09 14.8a4.07 4.07 0 01-1.847.07 4.09 4.09 0 003.817 2.82A8.203 8.203 0 012 18.407a11.56 11.56 0 006.29 1.84" />
      </svg>
    )},
    { name: 'Instagram', href: 'https://instagram.com', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
      </svg>
    )},
    { name: 'LinkedIn', href: 'https://linkedin.com', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.98 3.5a2.5 2.5 0 11.04 5 2.5 2.5 0 01-.04-5zM3 9h4v12H3zM9 9h3.8v1.6h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.66 4.78 6.12V21H19v-5.2c0-1.24-.02-2.84-1.73-2.84-1.74 0-2.01 1.36-2.01 2.75V21H9z" />
      </svg>
    )},
  ];

  return (
    <footer className="relative bg-black text-white mt-20 pt-12 pb-10 overflow-hidden">

      {/* TOP ORANGE LINE */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF7A00] via-white/20 to-[#FF7A00]"></div>

      <div className="container mx-auto max-w-6xl px-6 relative">
        {/* subtle glow */}
        <div className="absolute inset-0 -z-10 opacity-6 bg-gradient-to-br from-[#FF7A00] via-black to-[#FF7A00] blur-3xl"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo />
              <div>
                <div className="text-lg font-semibold">Behind <span className="text-[#FF7A00]">The Brand</span></div>
                <div className="text-sm text-white/70">Stories that shape ideas</div>
              </div>
            </div>
            <p className="text-sm text-white/60 max-w-sm">We document founders, creators and brands building for Africa — long-form profiles, design stories and impact case studies.</p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-center">
            <h4 className="text-sm text-white/80 uppercase font-semibold mb-3">Explore</h4>
            <nav className="flex flex-col gap-2 text-sm">
              {links.map((link) => (
                <Link key={link.name} href={link.href} className="text-white/70 hover:text-white transition">
                  {link.name}
                </Link>
              ))}
              <Link href="/story" className="mt-3 inline-block px-4 py-2 bg-[#FF7A00] text-black rounded-full font-medium">All Stories</Link>
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-sm text-white/80 uppercase font-semibold mb-3">Follow us</h4>
            <div className="flex gap-3">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex items-center justify-center w-10 h-10 rounded-md bg-white/6 hover:bg-[#FF7A00] hover:text-black transition-colors"
                >
                  <span className="text-white">{s.svg}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 text-right">
              <p className="text-xs text-white/50">© {new Date().getFullYear()} Behind The Brand</p>
              <p className="text-xs text-[#FF7A00]/80 mt-1">Crafted with creativity ✦ Powered by stories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle decorative orbs */}
      <div className="absolute right-8 bottom-8 w-20 h-20 bg-[#FF7A00]/12 rounded-full blur-3xl"></div>
    </footer>
  );
}
