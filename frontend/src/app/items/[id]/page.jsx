export default async function ItemDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://nexus-inventory-five.vercel.app/api/items/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
        Item not found
      </div>
    );
  }

  const item = await res.json();

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0f172a] to-[#020617] py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="relative h-[420px] md:h-full overflow-hidden">
              <img
                src={item.imageUrl || "https://via.placeholder.com/800x600"}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-10 md:p-14 text-white">
              <span className="inline-block text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3">
                {item.category || "General"}
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                {item.name}
              </h1>

              <p className="text-gray-400 leading-relaxed mb-8">
                {item.description}
              </p>

              <div className="text-4xl font-extrabold mb-10 text-white">
                ${item.price}
              </div>

              <button className="group relative inline-flex items-center justify-center w-full rounded-full bg-blue-600 px-10 py-4 text-lg font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <span>Add to Inventory</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
