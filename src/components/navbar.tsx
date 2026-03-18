'use client';

import React from 'react';
import Link from 'next/link';
import { Activity } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl px-4 py-3 md:px-8 font-mono">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="group flex items-center gap-3">
            <div className="h-9 w-9 border-2 border-electric-blue bg-electric-blue/10 flex items-center justify-center transition-all group-hover:shadow-[0_0_20px_rgba(0,137,255,0.4)]">
              <span className="text-electric-blue font-extrabold text-xl">S</span>
            </div>
            <span className="text-sm border-l border-white/10 pl-4 font-bold tracking-[0.3em] uppercase text-white">Synctropic</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#architecture" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 transition-all hover:text-white">Architecture</Link>
            <Link href="#how-it-works" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 transition-all hover:text-white">Workflow</Link>
            <Link href="#workflows" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 transition-all hover:text-white">Features</Link>
            <Link href="#marketplace" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 transition-all hover:text-white">Marketplace</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-[8px] font-bold text-electric-blue/50">
             <Activity className="h-3 w-3 animate-pulse" />
             NODE_CONNECTED
          </div>
          <button className="btn-primary scale-90">
            Launch_Platform
          </button>
        </div>
      </div>
    </nav>
  );
}
