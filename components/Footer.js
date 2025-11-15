// export default function Footer() {
//   return (
//     <footer className="text-neutral-400 text-sm py-10 mt-20 border-t border-neutral-800 text-center">
//       © {new Date().getFullYear()} Behind The Brand. All Rights Reserved.
//     </footer>
//   );
// }




import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 mt-24 border-t border-surface">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
        <span>© 2025 Journeys, All Rights Reserved.</span>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-text-primary">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}