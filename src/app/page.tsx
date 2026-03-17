import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { HowItWorks } from '@/components/how-it-works';
import { MarketplacePreview } from '@/components/marketplace-preview';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-electric-blue/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <MarketplacePreview />
      
      {/* Final Call to Action Section */}
      <section className="py-32 px-4 text-center relative overflow-hidden bg-electric-blue/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-electric-blue/10 blur-[130px] animate-flicker"></div>
        <div className="mx-auto max-w-4xl relative z-10 space-y-8">
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            Ready to <span className="text-electric-blue">Sync</span> <br />
            Your Process?
          </h2>
          <p className="mt-8 text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            Join the elite circle of agentic developers building the infrastructure of tomorrow. 
            Scale your intelligence with Synctropic.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button className="rounded-2xl bg-electric-blue px-12 py-6 text-2xl font-bold text-white shadow-2xl shadow-electric-blue/40 transition-all hover:scale-105 hover:bg-electric-blue/90">
              Apply for Early Access
            </button>
            <button className="rounded-2xl border border-white/10 glass px-12 py-6 text-2xl font-bold transition-all hover:bg-white/10">
              Read Documentation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
