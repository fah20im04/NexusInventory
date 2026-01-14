import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      {/* Section 1: Hero */}
      <Hero />
      <Stats /> {/* Section 2 */}
      <Features /> {/* Section 3 */}
      <Steps /> {/* Section 4 */}
      {/* Section 2: Stats Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f172a]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            Why <span className="text-blue-500">Nexus Inventory</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-5xl font-extrabold text-blue-500 mb-2">
                500+
              </h3>
              <p className="text-gray-300 text-lg">Premium Items</p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-5xl font-extrabold text-blue-500 mb-2">
                100%
              </h3>
              <p className="text-gray-300 text-lg">Secure Database</p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-5xl font-extrabold text-blue-500 mb-2">
                24/7
              </h3>
              <p className="text-gray-300 text-lg">API Uptime</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3: Coming Soon */}
      <Footer />
    </main>
  );
}
