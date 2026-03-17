'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 glass px-4 py-3 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="group flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-electric-blue flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Synctropic</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#workflows" className="text-sm font-medium text-foreground/70 transition-colors hover:text-electric-blue">Workflows</Link>
            <Link href="#marketplace" className="text-sm font-medium text-foreground/70 transition-colors hover:text-electric-blue">Marketplace</Link>
            <Link href="#developers" className="text-sm font-medium text-foreground/70 transition-colors hover:text-electric-blue">Developers</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="hidden md:block rounded-lg bg-electric-blue px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-electric-blue/20 transition-all hover:bg-electric-blue/90 hover:shadow-electric-blue/40">
            Launch Platform
          </button>
        </div>
      </div>
    </nav>
  );
}
