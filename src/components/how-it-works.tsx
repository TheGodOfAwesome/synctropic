'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Scale, BarChart3, ChevronRight, Terminal as TerminalIcon } from 'lucide-react';

const steps = [
  {
    title: "Researcher",
    description: "Scrapes local property comps, pricing history, and historical valuation data in real-time.",
    icon: <Search className="h-5 w-5" />,
    label: "AGENT_RESEARCH"
  },
  {
    title: "Legal Analyst",
    description: "Automated review of local zoning rules, housing laws, and regional legal landscapes.",
    icon: <Scale className="h-5 w-5" />,
    label: "AGENT_LEGAL"
  },
  {
    title: "Market Analyst",
    description: "Cross-references regional events and occupancy trends for seasonal revenue projections.",
    icon: <BarChart3 className="h-5 w-5" />,
    label: "AGENT_MARKET"
  },
  {
    title: "Report Gen",
    description: "Generates a final, client-ready profitability report with revenue and cost projections.",
    icon: <TerminalIcon className="h-5 w-5" />,
    label: "AGENT_OUTPUT"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-4 relative overflow-hidden bg-black border-t border-white/5">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <div className="mono text-electric-blue text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
             Operational Workflow
          </div>
          <h2 className="text-4xl font-extrabold tracking-tighter sm:text-7xl text-white mb-8">
            How a Synctropic <br />
            <span className="text-gradient">Instance Operates</span>
          </h2>
          <p className="text-lg text-foreground/40 max-w-2xl mx-auto mono">
            Example: Scaling an <span className="text-white">Airbnb Investment Consultant</span> via automated agentic clusters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="h-12 w-12 border border-electric-blue/20 bg-electric-blue/5 flex items-center justify-center text-electric-blue group-hover:border-electric-blue/50 transition-colors">
                  {step.icon}
                </div>
                <div className="mono text-[9px] text-foreground/20 font-bold tracking-widest uppercase">
                  Step_0{i + 1}
                </div>
              </div>
              
              <div className="mono text-[10px] text-electric-blue font-bold tracking-tighter mb-2">
                {step.label} {/* ACTIVE */}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white tracking-tight">{step.title}</h3>
              <p className="text-[13px] text-foreground/40 leading-relaxed mono">
                {step.description}
              </p>

              {/* Connector for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-white/10">
                   <ChevronRight />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Technical Visual Proof / Log Area */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-16 p-1 border border-white/10 glass-strong overflow-hidden"
        >
           <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-2">
              <div className="flex items-center gap-2">
                 <TerminalIcon className="h-3 w-3 text-electric-blue" />
                 <span className="mono text-[9px] font-bold text-foreground/40 uppercase tracking-widest">Execution_Log // instance_id: airbnb_consult_01</span>
              </div>
              <div className="flex gap-1">
                 <div className="h-1.5 w-1.5 rounded-full bg-green-500/50"></div>
                 <div className="mono text-[8px] text-green-500/50 font-bold uppercase">System_Healthy</div>
              </div>
           </div>
           <div className="p-6 bg-black/60 mono text-[10px] space-y-1.5 overflow-hidden font-medium">
              <div className="text-foreground/20">[14:02:11] INITIALIZING: AGENT_INGRESS...</div>
              <div className="text-foreground/40">[14:02:12] FETCHING: market_data_atlanta_q3.json [SUCCESS]</div>
              <div className="text-electric-blue">[14:02:14] TRIGGER: AGENT_LEGAL activation [FILE_EVENT]</div>
              <div className="text-foreground/40">[14:02:15] ANALYZING: local_zoning_codes_30303 [OK]</div>
              <div className="text-foreground/40">[14:02:18] COMPUTING: seasonal_revenue_projections...</div>
              <div className="text-white border-l-2 border-electric-blue pl-3 py-1 bg-electric-blue/5">
                 [14:02:20] INSTANCE_STATE: Profitability Engine suggests +18.4% YoY Growth
              </div>
              <div className="text-foreground/20 italic animate-pulse">[14:02:21] WAITING: Output formatted for client report...</div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
