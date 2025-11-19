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
      <div className="w-full max-w-4xl bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-0 overflow-hidden shadow-lg shadow-black/20">

        {/* Tabs */}
        <div className="flex gap-10 px-6 pt-4 border-b border-neutral-700">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`pb-3 text-sm font-medium relative transition-all ${
                active === t
                  ? "text-white font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {t}

              {/* STRONG ORANGE UNDERLINE */}
              {active === t && (
                <div className="absolute left-0 right-0 -bottom-[2px] h-[3px] bg-brand-500 rounded-full shadow-[0_0_6px_#FF7A00]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="px-6 py-6">

          {/* KEY LESSONS */}
          {active === "Key Lessons" && (
            <div className="space-y-8">
              {lessons.map((l, index) => (
                <div
                  key={index}
                  className="pb-4 border-b border-neutral-700 pl-3 border-l-4 border-brand-500/70 rounded-sm"
                >
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    <p className="text-brand-500 text-sm font-semibold">
                      {l.label}
                    </p>
                    <p className="text-neutral-200 text-sm col-span-2 md:col-span-3">
                      {l.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* POWERFUL QUOTES */}
          {active === "Powerful Quotes" && (
            <div className="space-y-6">
              {quotes.map((q, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#222] rounded-xl border border-neutral-700 relative"
                >
                  {/* ORANGE DOT ACCENT */}
                  <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_8px_#FF7A00]"></div>

                  <p className="text-neutral-200 italic pl-6">"{q.quote}"</p>
                  <p className="text-neutral-400 text-sm pl-6 mt-1">
                    {q.author}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* DEFINING MOMENT */}
          {active === "Defining Moment" && (
            <div className="space-y-6">
              {defining.map((d, i) => (
                <div
                  key={i}
                  className="p-5 bg-[#1e1e1e] rounded-xl border border-neutral-700"
                >
                  {/* ORANGE TITLE BADGE */}
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-black bg-brand-500 rounded-full shadow-[0_0_10px_#FF7A00]">
                    Highlight
                  </span>

                  <h3 className="text-white font-semibold text-lg">
                    {d.title}
                  </h3>
                  <p className="text-neutral-300 text-sm mt-1">{d.desc}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
