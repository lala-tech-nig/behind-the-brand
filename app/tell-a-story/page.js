"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    category: "",
    shortStory: "",
    about: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(t);
  }, [toast]);

  function launchConfetti() {
    const duration = 1800;
    const end = Date.now() + duration;
    (function frame() {
      confetti({
        particleCount: 8,
        startVelocity: 30,
        spread: 160,
        ticks: 80,
        origin: { x: Math.random(), y: Math.random() * 0.6 },
        colors: ["#FF7A00", "#ffffff", "#FFD8A8"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // basic validation
    if (!form.name.trim() || !form.email.trim() || !form.shortStory.trim()) {
      setToast({ type: "error", message: "Please fill name, email and your short story." });
      return;
    }

    setSubmitting(true);
    // simulate network
    await new Promise((r) => setTimeout(r, 900));

    // show confetti + toast with name
    launchConfetti();
    setToast({ type: "success", message: `Thanks ${form.name}! Our team will reach out soon.` });

    // reset form
    setForm({ name: "", email: "", phone: "", title: "", category: "", shortStory: "", about: "" });
    setSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <header className="relative h-[48vh] sm:h-[56vh] lg:h-[64vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/stories/maji-pure.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FF7A00]">Tell a Story</h1>
            <p className="mt-4 text-neutral-300 text-lg">
              Share a short bio and your vision — tell us who you are and why
              this story matters. Our editorial team reviews submissions and
              may contact you to publish or feature your story.
            </p>
            <a href="#submit" className="inline-block mt-6 px-5 py-3 rounded-full bg-[#FF7A00] text-black font-semibold">Share your story</a>
          </div>
        </div>
      </header>

      {/* FORM */}
      <main className="container mx-auto px-4 sm:px-6 py-12" id="submit">
        <div className="max-w-3xl mx-auto bg-[#0b0b0b] border border-neutral-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-2">Submit your story</h2>
          <p className="text-neutral-400 mb-6">Fill the form below. We'll get back to you if we want to feature the story.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm text-neutral-300">Full name</span>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="mt-1 px-4 py-3 rounded-lg bg-black border border-neutral-700 outline-none focus:ring-2 focus:ring-[#FF7A00]"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-neutral-300">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="mt-1 px-4 py-3 rounded-lg bg-black border border-neutral-700 outline-none focus:ring-2 focus:ring-[#FF7A00]"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm text-neutral-300">Phone (optional)</span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 px-4 py-3 rounded-lg bg-black border border-neutral-700 outline-none focus:ring-2 focus:ring-[#FF7A00]"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-neutral-300">Category</span>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="mt-1 px-4 py-3 rounded-lg bg-black border border-neutral-700 outline-none focus:ring-2 focus:ring-[#FF7A00]"
                >
                  <option value="">Select a category</option>
                  <option>Social Impact</option>
                  <option>Innovation</option>
                  <option>Education</option>
                  <option>Arts</option>
                  <option>Energy</option>
                </select>
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-sm text-neutral-300">Story title</span>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="mt-1 px-4 py-3 rounded-lg bg-black border border-neutral-700 outline-none focus:ring-2 focus:ring-[#FF7A00]"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-neutral-300">Short story (one paragraph)</span>
              <textarea
                value={form.shortStory}
                onChange={(e) => setForm({ ...form, shortStory: e.target.value })}
                required
                rows={4}
                className="mt-1 px-4 py-3 rounded-lg bg-black border border-neutral-700 outline-none focus:ring-2 focus:ring-[#FF7A00] resize-none"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-neutral-300">About you (optional)</span>
              <textarea
                value={form.about}
                onChange={(e) => setForm({ ...form, about: e.target.value })}
                rows={3}
                className="mt-1 px-4 py-3 rounded-lg bg-black border border-neutral-700 outline-none focus:ring-2 focus:ring-[#FF7A00] resize-none"
              />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-[#FF7A00] text-black rounded-full font-semibold hover:bg-[#e86a00] transition"
              >
                {submitting ? "Submitting..." : "Submit Story"}
              </button>

              <button
                type="button"
                onClick={() => setForm({ name: "", email: "", phone: "", title: "", category: "", shortStory: "", about: "" })}
                className="px-4 py-2 rounded-md border border-neutral-700 text-sm"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* TOAST */}
      {toast && (
        <div className={`fixed right-6 bottom-6 z-60 rounded-xl px-5 py-3 shadow-xl transition transform ${toast.type === 'success' ? 'bg-[#FF7A00] text-black' : 'bg-white/8 text-white'}`}>
          <div className="text-sm font-medium">{toast.message}</div>
        </div>
      )}
    </div>
  );
}