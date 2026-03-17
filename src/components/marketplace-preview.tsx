'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';

const skills = [
  { name: "Sentry Automator", category: "DevOps", price: "$29/mo", rating: 4.9 },
  { name: "Legal Researcher", category: "Legal", price: "$99/mo", rating: 4.8 },
  { name: "SEO Strategist", category: "Marketing", price: "$49/mo", rating: 5.0 },
  { name: "Code Auditor", category: "Security", price: "$149/mo", rating: 4.7 }
];

export function MarketplacePreview() {
  return (
    <section id="marketplace" className="py-24 px-4 bg-background-light dark:bg-background-dark/50 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              The Agent <br />
              <span className="text-electric-blue">Marketplace</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              Browse and deploy pre-built instances of expert processes. Start monetizing your own specialized workflows today.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl border border-electric-blue/20 bg-electric-blue/5 px-6 py-3 font-semibold text-electric-blue transition-all hover:bg-electric-blue/10">
            View all skills <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/5 glass p-6 transition-all hover:border-electric-blue/30 hover:electric-glow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-electric-blue/20">
                <ShoppingBag className="h-6 w-6 text-foreground/40 group-hover:text-electric-blue" />
              </div>
              <h4 className="text-xl font-bold">{skill.name}</h4>
              <p className="text-sm text-foreground/50">{skill.category}</p>
              
              <div className="mt-6 flex items-center justify-between">
                <span className="font-bold text-lg">{skill.price}</span>
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  <Star className="h-4 w-4 fill-current" />
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
