export default function AdviceGrid() {
  const items = [
    { title: "Embrace Naivety", text: "Don't be afraid to tackle problems you're not 'qualified' to solve." },
    { title: "Build a Tribe, Not a Team", text: "Surround yourself with people who share your passion and values." },
    { title: "Listen to the Silence", text: "Pay attention to what customers aren't saying; big opportunities hide there." },
    { title: "Prototype, Don't Preach", text: "Working models beat perfect plans — show rather than tell." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {items.map((i) => (
        <div key={i.title} className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h3 className="text-brand-500 font-semibold mb-2">{i.title}</h3>
          <p className="text-neutral-300 text-sm">{i.text}</p>
        </div>
      ))}
    </div>
  );
}
