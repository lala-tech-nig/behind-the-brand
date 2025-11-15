export default function Timeline() {
  const events = [
    { year: "2015", title: "First Startup Launched", desc: "Founded Innovate Inc., a tech startup that revolutionized the local market." },
    { year: "2018", title: "Published First Bestseller", desc: "\"The Catalyst Mind\" hits bestseller lists." },
    { year: "2023", title: "Launched \"Behind The Brand\"", desc: "Co-founded the platform to celebrate and document stories." }
  ];

  return (
    <section className="max-w-5xl mx-auto mt-16 px-4">
      <h2 className="text-brand-500 font-semibold text-lg">Timeline of Achievements</h2>
      <div className="mt-6 space-y-6 border-l border-neutral-700 pl-6">
        {events.map((e) => (
          <div key={e.year}>
            <p className="text-sm text-brand-500">{e.year}</p>
            <p className="font-semibold">{e.title}</p>
            <p className="text-neutral-400 text-sm">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
