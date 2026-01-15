export default function Pricing() {
  return (
    <section className="py-24 bg-[#0f172a]/30">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-400 mb-12">
          Start for free, scale as you grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-white/10 bg-black">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <div className="text-4xl font-bold mb-6">
              $0<span className="text-sm text-gray-500">/mo</span>
            </div>
            <ul className="text-gray-400 space-y-3 mb-8 text-left">
              <li>✓ Up to 50 Items</li>
              <li>✓ Basic Analytics</li>
              <li>✓ 1 User Role</li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
              Get Started
            </button>
          </div>
          <div className="p-8 rounded-2xl border-2 border-blue-500 bg-blue-500/5 relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
              Popular
            </span>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <div className="text-4xl font-bold mb-6">
              $29<span className="text-sm text-gray-500">/mo</span>
            </div>
            <ul className="text-gray-400 space-y-3 mb-8 text-left">
              <li>✓ Unlimited Items</li>
              <li>✓ Advanced Reports</li>
              <li>✓ Priority Support</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
