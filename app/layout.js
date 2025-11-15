// import "../app/globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export const metadata = {
//   title: "Behind The Brand",
//   description: "In-depth journeys and interviews with creators, founders and brands"
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-neutral-950 antialiased">
//         <Navbar />
//         <main className="max-w-7xl mx-auto px-6 lg:px-8">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }





import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Configure the font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Set up the CSS variable
});

export const metadata = {
  title: 'Journeys - The Story Behind the Story',
  description: 'Weekly curated highlights from the world\'s greatest minds.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}