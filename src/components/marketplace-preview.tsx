'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

const skills = [
  { name: "Sentry Automator", type: "DEVOPS_NODE", price: "2.4 ETH", rating: 4.9, icon: ShieldCheck },
  { name: "Legal Researcher", type: "LEGAL_CORE", price: "4.8 ETH", rating: 4.8, icon: Globe },
  { name: "Logic Architect", type: "BUILDER_CLUSTER", price: "8.2 ETH", rating: 5.0, icon: Zap },
  { name: "Data Ingress", type: "STRATEGIST_RELAY", price: "1.2 ETH", rating: 4.7, icon: ShoppingBag }
];

export function MarketplacePreview() {
  return (
    <section id="marketplace" className="py-32 px-4 bg-black border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div className="max-w-2xl">
            <div className="mono text-electric-blue text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
               Expertise Economy
            </div>
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-7xl text-white">
              The Agent <br />
              <span className="text-gradient">Marketplace</span>
            </h2>
            <p className="mt-8 text-lg text-foreground/40 mono max-w-2xl leading-relaxed uppercase tracking-wider text-[11px]">
              The Flywheel: <span className="text-white">Build</span> your proprietary process, <span className="text-white">Deploy</span> it internally, and <span className="text-white">Monetize</span> it on the marketplace. 
              <br /><br />
              Now, a novice investor can run a &quot;Top-Tier Airbnb Consultant&quot; workflow instance on demand.
            </p>
          </div>
          <button className="btn-secondary">
             Access_Market_Relay <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative border border-white/5 bg-white/[0.01] p-8 hover:bg-white/[0.03] hover:border-electric-blue/30 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 group-hover:text-electric-blue transition-all">
                 <skill.icon className="h-16 w-16 -mr-4 -mt-4 opacity-10" />
              </div>

              <div className="mb-8 flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-foreground/40 group-hover:text-electric-blue group-hover:border-electric-blue/40 transition-colors">
                <skill.icon className="h-5 w-5" />
              </div>
              
              <div className="mono text-[8px] text-electric-blue font-bold tracking-widest mb-1 group-hover:animate-pulse">
                &nbsp;
              </div>
              <h4 className="text-xl font-extrabold text-white tracking-tight mb-2 uppercase">{skill.name}</h4>
              
              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                <span className="mono text-xs font-bold text-white/50">{skill.price}</span>
                <div className="flex items-center gap-1.5 mono text-[10px] text-foreground/30">
                  <Star className="h-3 w-3 text-electric-blue fill-electric-blue" />
                  <span>{skill.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
