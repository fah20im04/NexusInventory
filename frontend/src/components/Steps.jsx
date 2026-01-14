export default function Steps() {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      desc: "Sign up using our secure mock authentication system in seconds.",
    },
    {
      number: "02",
      title: "Add Your Items",
      desc: "Upload and manage products using protected MongoDB-powered forms.",
    },
    {
      number: "03",
      title: "Manage Growth",
      desc: "Track, update, and scale your inventory in real-time.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#020617]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
          Process
        </h2>
        <p className="mt-3 text-4xl md:text-5xl font-extrabold text-white">
          Three simple steps to{" "}
          <span className="text-blue-500">get started</span>
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          Get up and running with NexusInventory in just a few minutes.
        </p>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl" />
              </div>

              {/* Step Number */}
              <div className="relative text-7xl font-black text-blue-500/20 mb-6">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="relative text-2xl font-bold text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
