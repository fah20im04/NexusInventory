export default function FAQ() {
  const faqs = [
    {
      q: "Is my data secure?",
      a: "Yes, we use industry-standard encryption and MongoDB Atlas security.",
    },
    {
      q: "Can I export my items?",
      a: "Absolutely. You can export your entire inventory to CSV or JSON at any time.",
    },
  ];

  return (
    <section className="py-24 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <h4 className="text-lg font-bold text-blue-400 mb-2">{f.q}</h4>
            <p className="text-gray-400">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
