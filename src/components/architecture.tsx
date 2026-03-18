'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Layout, 
  Code2, 
  Globe, 
  ShieldCheck, 
  Eye, 
  Cpu, 
  Layers,
  FileCode
} from 'lucide-react';

const agents = [
  { name: "Strategist", icon: BarChart, desc: "High-level goal decomposition and roadmap alignment." },
  { name: "Architect", icon: Layout, desc: "System design, component mapping, and schema definition." },
  { name: "Builder Cluster", icon: Code2, desc: "Parallel execution of tactical implementation tasks." },
  { name: "DevOps", icon: Globe, desc: "Environment orchestration and automated deployment." },
  { name: "Security", icon: ShieldCheck, desc: "Continuous vulnerability scanning and policy enforcement." },
  { name: "Sentry", icon: Eye, desc: "Real-time error detection and health monitoring." },
  { name: "Overwatch", icon: Cpu, desc: "Central orchestration and agent state management." }
];

export function Architecture() {
  return (
    <section id="architecture" className="py-32 px-4 relative overflow-hidden bg-black border-t border-white/5">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <div className="mono text-electric-blue text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
             Case Study: Proof of Concept
          </div>
          <h2 className="text-4xl font-extrabold tracking-tighter sm:text-7xl text-white mb-8">
            The Autonomous <br />
            <span className="text-gradient">Software Factory</span>
          </h2>
          <p className="text-lg text-foreground/40 max-w-3xl mx-auto mono leading-relaxed">
            Our technical moat: A 7-agent cluster that communicates <span className="text-white">exclusively through a Shared Filesystem</span>. 
            Agents are activated by file events, not API calls, ensuring a deterministic and highly scalable system state.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-3">
            {agents.slice(0, 3).map((agent, i) => (
              <AgentCard key={i} agent={agent} />
            ))}
          </div>

          <div className="relative py-12 lg:py-0">
             {/* Central Hub Visualization - Technical Style */}
             <div className="relative aspect-square max-w-[400px] mx-auto border border-white/5 p-8">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                <div className="relative h-full w-full flex items-center justify-center">
                   <div className="relative group">
                      <div className="absolute inset-0 bg-electric-blue/10 blur-3xl rounded-full animate-pulse-slow"></div>
                      <div className="relative h-28 w-28 border border-electric-blue/40 bg-black flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,137,255,0.1)]">
                         <FileCode className="h-10 w-10 text-electric-blue mb-2" />
                         <span className="mono text-[8px] font-bold text-electric-blue uppercase tracking-widest">Shared_FS</span>
                      </div>
                      
                      {/* Radiating Signal Lines */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.1, 0.4, 0.1], scaleX: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                          style={{ 
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '120px',
                            height: '1px',
                            background: 'linear-gradient(to right, #0089ff, transparent)',
                            transform: `rotate(${angle}deg) translateX(60px)`,
                            transformOrigin: 'left center'
                          }}
                        />
                      ))}
                   </div>
                </div>
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-center">
                   <div className="mono text-[9px] text-foreground/20 uppercase tracking-[0.2em] mb-1">State_Persistence</div>
                   <div className="text-white font-bold text-xs mono tracking-tighter">Event-Driven Determinism</div>
                </div>
             </div>
          </div>

          <div className="space-y-3">
            {agents.slice(3, 7).map((agent, i) => (
              <AgentCard key={i} agent={agent} />
            ))}
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-1">
           {[
             { mode: 'SOLO_MODE', desc: 'Single agent execution for tactical tasks' },
             { mode: 'TEAM_MODE', desc: 'Coordinated cluster for complex features' },
             { mode: 'FACTORY_MODE', desc: 'Full-scale autonomous product delivery' }
           ].map((item, i) => (
             <div key={i} className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group">
                <div className="h-8 w-8 bg-white/5 flex items-center justify-center text-foreground/20 group-hover:text-electric-blue transition-colors mb-6">
                   <Layers className="h-4 w-4" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 mono tracking-tight">{item.mode}</h4>
                <p className="text-[11px] text-foreground/40 mono leading-relaxed uppercase tracking-wider">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function AgentCard({ agent }: { agent: typeof agents[0] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-5 border border-white/5 bg-white/[0.02] hover:border-electric-blue/30 transition-all flex items-center gap-5 group"
    >
      <div className="h-10 w-10 bg-electric-blue/5 flex items-center justify-center text-electric-blue border border-electric-blue/10 group-hover:border-electric-blue/40 transition-colors">
         <agent.icon className="h-5 w-5" />
      </div>
      <div className="flex-1 text-left">
         <h4 className="text-xs font-bold text-white mb-1 mono uppercase tracking-widest">{agent.name}</h4>
         <p className="text-[10px] text-foreground/30 leading-snug mono">{agent.desc}</p>
      </div>
    </motion.div>
  );
}
