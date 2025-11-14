import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AIShowcase } from "./components/AIShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { UseCases } from "./components/UseCases";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Integrations } from "./components/Integrations";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <AIShowcase />
      <HowItWorks />
      <UseCases />
      <Integrations />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}