import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
// You can move these new sections into components later

export default function LandingPage() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <Hero />

      {/* <Integrations /> */}

      <Stats />

      <Features />

      <Steps />

      <Testimonials />

      <Pricing />

      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}
