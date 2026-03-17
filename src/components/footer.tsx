'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-2 space-y-6">
             <Link href="/" className="flex items-center gap-2 group">
                <div className="h-8 w-8 rounded-lg bg-electric-blue flex items-center justify-center transition-transform group-hover:scale-110">
                   <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Synctropic</span>
             </Link>
             <p className="text-foreground/50 max-w-sm leading-relaxed">
                The world's first marketplace for agentic AI skills and professional 
                workflows. Build, manage, and monetize your automated expertise.
             </p>
             <div className="flex gap-4">
                {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                   <Link key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                      <Icon className="h-5 w-5 text-foreground/50" />
                   </Link>
                ))}
             </div>
          </div>
          
          <div className="space-y-6">
             <h4 className="font-bold text-sm uppercase tracking-widest text-foreground/30">Product</h4>
             <ul className="space-y-4 text-sm text-foreground/60 transition-colors">
                <li><Link href="#" className="hover:text-electric-blue">Workflows</Link></li>
                <li><Link href="#" className="hover:text-electric-blue">Marketplace</Link></li>
                <li><Link href="#" className="hover:text-electric-blue">Sandboxes</Link></li>
                <li><Link href="#" className="hover:text-electric-blue">Pricing</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="font-bold text-sm uppercase tracking-widest text-foreground/30">Company</h4>
             <ul className="space-y-4 text-sm text-foreground/60 transition-colors">
                <li><Link href="#" className="hover:text-electric-blue">About</Link></li>
                <li><Link href="#" className="hover:text-electric-blue">Careers</Link></li>
                <li><Link href="#" className="hover:text-electric-blue">Journal</Link></li>
                <li><Link href="#" className="hover:text-electric-blue">Contact</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="font-bold text-sm uppercase tracking-widest text-foreground/30">Developers</h4>
             <ul className="space-y-4 text-sm text-foreground/60 transition-colors">
                <li><Link href="#" className="hover:text-electric-blue">Documentation</Link></li>
                <li><Link href="#" className="hover:text-electric-blue">API Reference</Link></li>
                <li><Link href="#" className="hover:text-electric-blue">SDK Status</Link></li>
                <li><Link href="#" className="hover:text-electric-blue">Community</Link></li>
             </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
           <p>© 2024 Synctropic. All rights reserved.</p>
           <div className="flex gap-8">
              <Link href="#" className="hover:text-electric-blue transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-electric-blue transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
