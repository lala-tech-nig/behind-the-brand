"use client";
import { useState } from "react";

export default function StoryHighlights() {
  const tabs = ["Key Lessons", "Powerful Quotes", "Defining Moment"];
  const [active, setActive] = useState("Key Lessons");

  const lessons = [
    {
      label: "Lesson 1",
      text: "Embrace failure as a stepping stone — every setback hides a pathway to mastery."
    },
    {
      label: "Lesson 2",
      text: "Your network is your leverage. Build connections rooted in trust, value, and genuine intent."
    },
    {
      label: "Lesson 3",
      text: "Stay endlessly curious. Curiosity is the fuel that sustains growth and innovation."
    }
  ];

  const quotes = [
    {
      quote:
        "The moment you choose courage over comfort, you step into who you're meant to be.",
      author: "— Unknown"
    },
    {
      quote:
        "Greatness is found in the quiet moments when no one is watching — keep building.",
      author: "— Anonymous"
    },
    {
      quote:
        "Discipline beats motivation. Show up even when you don't feel like it.",
      author: "— Self-Growth Mantra"
    }
  ];

  const defining = [
    {
      title: "The Turning Point",
      desc:
        "In the midst of doubt and uncertainty, one decision changed everything — choosing action over hesitation."
    },
    {
      title: "A Moment of Clarity",
      desc:
        "During a difficult season, a simple realization reshaped the direction of the entire journey."
    }
  ];

  return (
    <div className="w-full flex flex-col items-center mt-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Story Highlights
      </h2>
      {/* Container */}
      <div className="w-full max-w-4xl bg-[#121212] border border-neutral-800 rounded-2xl overflow-hidden shadow-lg shadow-black/25">

        {/* Tabs */}
        <div className="flex gap-6 px-6 pt-4 pb-3 border-b border-neutral-700 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`relative px-1 text-sm transition-all whitespace-nowrap ${
                active === t ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t}
              {active === t && (
                <div className="absolute left-0 right-0 -bottom-2 h-1.5 bg-[#FF7A00] rounded-full shadow-[0_0_10px_#FF7A00]/50"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="px-5 py-6">

          {/* KEY LESSONS */}
          {active === 'Key Lessons' && (
            <div className="space-y-4">
              {lessons.map((l, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#0f0f0f] rounded-xl border border-neutral-800 flex gap-4 items-start"
                >
                  {/* Left orange indicator */}
                  <div className="flex-shrink-0 mt-1">
                    <span className="block h-10 w-1.5 rounded-full bg-[#FF7A00] shadow-[0_0_10px_#FF7A00]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-[#FF7A00] text-sm font-semibold">{l.label}</p>
                    </div>
                    <p className="text-neutral-200 text-sm mt-2">{l.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* POWERFUL QUOTES */}
          {active === 'Powerful Quotes' && (
            <div className="space-y-4">
              {quotes.map((q, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#0f0f0f] rounded-xl border border-neutral-800 flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className="block h-10 w-1.5 rounded-full bg-[#FF7A00] shadow-[0_0_10px_#FF7A00]" />
                  </div>

                  <div className="flex-1">
                    <p className="text-neutral-200 italic text-sm">“{q.quote}”</p>
                    <p className="text-neutral-400 text-sm mt-2">{q.author}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* DEFINING MOMENT */}
          {active === 'Defining Moment' && (
            <div className="space-y-4">
              {defining.map((d, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#0f0f0f] rounded-xl border border-neutral-800 flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className="block h-10 w-1.5 rounded-full bg-[#FF7A00] shadow-[0_0_10px_#FF7A00]" />
                  </div>

                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-black bg-[#FF7A00] rounded-full shadow-[0_0_8px_#FF7A00]">Highlight</span>
                    <h3 className="text-white font-semibold text-lg">{d.title}</h3>
                    <p className="text-neutral-300 text-sm mt-2">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
