import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Behind The Brand",
  description: "In-depth journeys and interviews with creators, founders and brands"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 antialiased">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
