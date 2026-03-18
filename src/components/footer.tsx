'use client';

import React from 'react';
import Link from 'next/link';
import { Activity } from 'lucide-react';
import { useToast } from '@/components/ui/toast';

export function Footer() {
  const { showToast } = useToast();
  return (
    <footer className="border-t border-white/5 bg-black py-24 px-4 md:px-8 font-mono">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16">
          <div className="col-span-2 lg:col-span-2 space-y-8">
             <Link href="/" className="flex items-center gap-3 group">
                <div className="h-9 w-9 border-2 border-electric-blue/40 bg-electric-blue/5 flex items-center justify-center transition-all group-hover:border-electric-blue">
                   <span className="text-electric-blue font-extrabold text-xl">S</span>
                </div>
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-white">Synctropic</span>
             </Link>
             <p className="text-foreground/30 max-w-sm leading-relaxed text-[11px] uppercase tracking-wider">
                &quot;We help you build an instance of your process.&quot;
                <br /><br />
                The liquid economy for high-end agentic workflows and automated technical expertise.
             </p>
          </div>
          
          <div className="space-y-6">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-electric-blue/50">Core_Sys</h4>
             <ul className="space-y-4 text-[10px] text-foreground/40 uppercase tracking-widest">
                <li><Link href="#architecture" className="hover:text-white transition-colors">Architecture</Link></li>
                <li><Link href="#how-it-works" className="hover:text-white transition-colors">Operational_Flow</Link></li>
                <li><Link href="#marketplace" className="hover:text-white transition-colors">Market_Relay</Link></li>
                <li><Link href="#workflows" className="hover:text-white transition-colors">Node_Features</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-electric-blue/50">Company_Org</h4>
             <ul className="space-y-4 text-[10px] text-foreground/40 uppercase tracking-widest">
                <li><Link href="#" className="hover:text-white transition-colors">Log_Journal</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cluster_Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Infrastructure</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact_Relay</Link></li>
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-electric-blue/50">Dev_Protocol</h4>
             <ul className="space-y-4 text-[10px] text-foreground/40 uppercase tracking-widest">
                <li>
                  <button 
                    onClick={() => showToast('Documentation Coming Soon')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Documentation
                  </button>
                </li>
                <li><Link href="#" className="hover:text-white transition-colors">API_Ref_v0.4</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">SDK_Instance</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Community_Hub</Link></li>
             </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-foreground/20 uppercase tracking-widest">
           <p>© 2026 Synctropic_Global // all_processes_synced</p>
           <div className="flex gap-8">
              <Link href="#" className="hover:text-electric-blue transition-colors">Privacy_Protocol</Link>
              <Link href="#" className="hover:text-electric-blue transition-colors">Terms_of_Init</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
