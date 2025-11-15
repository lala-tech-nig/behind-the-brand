'use client'; // This component will need state to close

import { X } from 'lucide-react';

export default function NewsletterModal({ onClose }) {
  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      {/* Modal Panel */}
      <div
        className="bg-surface rounded-lg p-8 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-center text-text-primary">
          The Story Behind the Story
        </h2>
        <p className="text-text-secondary text-center mt-4">
          Weekly curated highlights from the world's greatest minds. Exclusive
          insights, curated highlights, and behind-the-scenes content
          delivered to your inbox.
        </p>

        <form className="mt-8">
          <label htmlFor="email" className="sr-only">
            Enter your email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full bg-background border border-background 
                       px-4 py-3 rounded-md text-text-primary 
                       focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-background font-bold 
                       py-3 px-6 rounded-md text-center mt-4
                       transition-colors duration-300 hover:bg-primary-hover"
          >
            Subscribe Now
          </button>
        </form>
        <p className="text-text-secondary text-xs text-center mt-4">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}