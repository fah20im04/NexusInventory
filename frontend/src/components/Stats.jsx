export default function Stats() {
  const stats = [
    { id: 1, name: "Items Managed", value: "12,000+" },
    { id: 2, name: "Active Users", value: "4,500" },
    { id: 3, name: "Server Uptime", value: "99.9%" },
    { id: 4, name: "Global Warehouses", value: "24" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#020617]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Trusted by <span className="text-blue-500">Thousands</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Real numbers that prove our reliability and performance
          </p>
        </div>

        {/* Stats Grid */}
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl" />
              </div>

              <dt className="relative text-sm uppercase tracking-wide text-gray-400">
                {stat.name}
              </dt>
              <dd className="relative mt-4 text-4xl md:text-5xl font-extrabold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
