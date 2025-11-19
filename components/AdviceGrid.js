"use client";
import { useState } from "react";

export default function StoryHighlights() {
  const tabs = ["Key Lessons", "Powerful Quotes", "Defining Moment"];
  const [active, setActive] = useState("Key Lessons");

  const lessons = [
    {
      label: "Lesson 1",
      text: "Embrace failure as a stepping stone, not a stumbling block. Every misstep is a lesson in disguise."
    },
    {
      label: "Lesson 2",
      text: "Your network is your net worth. Cultivate relationships built on mutual respect and shared vision."
    },
    {
      label: "Lesson 3",
      text: "Stay relentlessly curious. The moment you stop learning is the moment you stop growing."
    }
  ];

  return (
    <div className="w-full flex flex-col items-center mt-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Story Highlights
      </h2>

      {/* Container */}
      <div className="w-full max-w-4xl bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-0 overflow-hidden">

        {/* Tabs */}
        <div className="flex gap-8 px-6 pt-4 border-b border-neutral-700">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`pb-3 text-sm font-medium transition-all ${
                active === t
                  ? "text-white font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {t}

              {/* Orange underline */}
              {active === t && (
                <div className="h-[3px] bg-brand-500 rounded-full mt-1"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="px-6 py-6">
          {active === "Key Lessons" && (
            <div className="space-y-6">
              {lessons.map((l, index) => (
                <div key={index} className="pb-4 border-b border-neutral-700">
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    <p className="text-neutral-400 text-sm">{l.label}</p>
                    <p className="text-neutral-200 text-sm col-span-2 md:col-span-3">
                      {l.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {active === "Powerful Quotes" && (
            <div className="text-neutral-400 text-sm py-6 italic">
              No quotes added yet.
            </div>
          )}

          {active === "Defining Moment" && (
            <div className="text-neutral-400 text-sm py-6 italic">
              No defining moments added yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
