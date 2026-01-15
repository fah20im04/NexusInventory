export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center bg-gradient-to-r from-blue-600 to-indigo-700 p-12 rounded-3xl shadow-2xl shadow-blue-500/20">
        <h2 className="text-4xl font-bold mb-6">
          Ready to organize your warehouse?
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          Join 1,000+ managers using Nexus Inventory today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
            Create Free Account
          </button>
          <button className="bg-transparent border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
