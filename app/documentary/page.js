'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 45 });

  // Simple animated countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes } = prev;
        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;
          if (hours > 0) hours--;
          else {
            hours = 23;
            if (days > 0) days--;
          }
        }
        return { days, hours, minutes };
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

      {/* 🔶 ORANGE GLOW BACKGROUND EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/20 via-transparent to-black blur-[100px] opacity-50 pointer-events-none"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 animate-fadeIn">
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Documentary Feature
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#FF7A00]">
          Coming Soon
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-lg">
          A deeper dive into the minds, stories, and journeys behind the most inspiring brands.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-8 mt-10">
          <div className="text-center">
            <div className="text-4xl font-bold">{timeLeft.days}</div>
            <div className="text-neutral-400 text-sm">Days</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold">{timeLeft.hours}</div>
            <div className="text-neutral-400 text-sm">Hours</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold">{timeLeft.minutes}</div>
            <div className="text-neutral-400 text-sm">Minutes</div>
          </div>
        </div>

        {/* Notify Button */}
        <button className="mt-10 px-8 py-3 bg-[#FF7A00] text-black font-semibold rounded-xl hover:bg-[#ff8f2a] transition-all shadow-lg shadow-[#FF7A00]/30">
          Notify Me When Live
        </button>

        {/* Footer Note */}
        <p className="text-neutral-600 mt-6 text-sm">
          Behind The Brand © 2025 — Something Big Is Loading.
        </p>
      </div>

      {/* Fade-in Animation Style */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
