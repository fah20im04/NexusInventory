export default function Features() {
  const features = [
    {
      title: "Real-time Tracking",
      desc: "Sync your MongoDB data instantly across all devices with zero delay.",
      icon: "🚀",
    },
    {
      title: "Secure Authentication",
      desc: "Protected routes and encrypted cookie-based sessions for full security.",
      icon: "🛡️",
    },
    {
      title: "Cloud Integration",
      desc: "Hosted on MongoDB Atlas ensuring 100% data durability and safety.",
      icon: "☁️",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#020617] to-[#0f172a]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Everything you need to{" "}
            <span className="text-blue-500">scale faster</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            NexusInventory provides powerful features to manage, secure, and
            grow your inventory with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl" />
              </div>

              {/* Icon */}
              <div className="relative text-5xl mb-6">{f.icon}</div>

              {/* Title */}
              <h3 className="relative text-2xl font-bold text-white mb-3">
                {f.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
