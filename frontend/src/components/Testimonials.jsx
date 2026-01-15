export default function Testimonials() {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "Store Manager",
      text: "Nexus changed how we track our electronics. The UI is incredibly fast.",
    },
    {
      name: "Sarah Chen",
      role: "E-commerce Owner",
      text: "Finally, an inventory system that doesn't feel like it's from 1995.",
    },
    {
      name: "Mike Ross",
      role: "Warehouse Lead",
      text: "The real-time API updates are a lifesaver for our logistics team.",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 italic text-gray-300"
            >
              "{r.text}"
              <div className="mt-4 not-italic font-bold text-blue-500">
                — {r.name},{" "}
                <span className="text-gray-500 text-sm font-normal">
                  {r.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
