import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Architecture } from '@/components/architecture';
import { HowItWorks } from '@/components/how-it-works';
import { Features } from '@/components/features';
import { MarketplacePreview } from '@/components/marketplace-preview';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-foreground selection:bg-electric-blue/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Architecture />
      <HowItWorks />
      <Features />
      <MarketplacePreview />
      
      {/* Final Call to Action Section - Technical Polish */}
      <section className="py-48 px-4 text-center relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-electric-blue/5 blur-[160px]"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="mx-auto max-w-4xl relative z-10 space-y-12">
          <div className="flex items-center justify-center gap-4 opacity-50">
             <div className="h-[1px] w-12 bg-white/20"></div>
             <span className="mono text-[10px] font-bold tracking-[0.4em] uppercase">Ready_to_Initialize</span>
             <div className="h-[1px] w-12 bg-white/20"></div>
          </div>
          
          <h2 className="text-6xl font-extrabold tracking-tighter sm:text-8xl text-white">
            Sync your <br />
            <span className="text-gradient">Intelligence</span>
          </h2>
          
          <p className="mt-8 text-lg text-foreground/40 leading-relaxed max-w-2xl mx-auto mono uppercase tracking-wider">
            Join the elite circle of agentic developers building the infrastructure of tomorrow. 
            Scale your process with Synctropic.
          </p>
          
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="btn-primary scale-110">
              Apply_for_Early_Access
            </button>
            <button className="btn-secondary scale-110">
              Documentation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
