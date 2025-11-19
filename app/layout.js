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