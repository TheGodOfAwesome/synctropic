'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, ShoppingBag, ArrowRight, Terminal as TerminalIcon, Code2, Shield, Activity } from 'lucide-react';

const features = [
  {
    title: "Deterministic Orchestration",
    description: "Our kernel-level orchestrator ensures 100% deterministic agent behavior via a shared filesystem protocol. No more hallucination-driven state loss.",
    icon: <Cpu className="h-5 w-5 text-electric-blue" />,
    label: "SYS_CORE_V2"
  },
  {
    title: "Instance Encapsulation",
    description: "Wrap complex domain expertise into portable, cryptographically signed instances. Deploy across your entire organization with a single command.",
    icon: <Shield className="h-5 w-5 text-electric-blue" />,
    label: "SEC_VAULT_01"
  },
  {
    title: "The Expert Marketplace",
    description: "Monetize your unique processes. The world's first liquid economy for high-end agentic skills and automated industry workflows.",
    icon: <ShoppingBag className="h-5 w-5 text-electric-blue" />,
    label: "MARKET_RELAY"
  }
];

const FeatureVisualization = ({ index }: { index: number }) => {
  if (index === 0) {
    return (
      <div className="relative h-full w-full flex flex-col p-6 bg-black/60 mono">
        <div className="flex items-center gap-2 mb-4 opacity-50">
           <TerminalIcon className="h-3 w-3" />
           <span className="text-[10px] uppercase tracking-widest">Orchestrator_Process_Heap</span>
        </div>
        <div className="flex-1 space-y-2 text-[10px]">
           {[
             { cmd: 'LOAD_AGENT', target: 'strategist.sys', status: 'OK' },
             { cmd: 'MAP_FILESYSTEM', target: '/shared/vol_01', status: 'MOUNTED' },
             { cmd: 'INIT_STATE', target: 'buffer_0x42ff', status: 'READY' },
             { cmd: 'EXEC_FLOW', target: 'roadmapping.task', status: 'RUNNING' }
           ].map((line, i) => (
             <div key={i} className="flex justify-between border-b border-white/5 pb-1">
                <div className="flex gap-4">
                   <span className="text-electric-blue/50">[{i}]</span>
                   <span className="text-white/60">{line.cmd}</span>
                   <span className="text-foreground/20">{line.target}</span>
                </div>
                <span className={line.status === 'RUNNING' ? 'text-electric-blue animate-pulse' : 'text-green-500/50'}>{line.status}</span>
             </div>
           ))}
           <div className="pt-4 flex gap-2">
              <div className="h-24 w-1 bg-white/5 overflow-hidden">
                 <motion.div 
                   animate={{ height: ['20%', '80%', '40%', '90%', '20%'] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="w-full bg-electric-blue"
                 />
              </div>
              <div className="flex-1 bg-white/2 border border-white/5 p-4 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0089ff10_0%,transparent_100%)]"></div>
                 <div className="relative flex justify-between items-end h-full">
                    {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                       <motion.div 
                         key={i}
                         animate={{ height: [`${h}%`, `${h-20}%`, `${h}%`] }}
                         transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                         className="w-2 bg-electric-blue/20"
                       />
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="relative h-full w-full flex items-center justify-center p-8 bg-black/60 mono">
         <div className="w-full max-w-[280px] border border-white/10 p-6 relative">
            <div className="absolute -top-3 left-4 bg-black px-2 text-[8px] text-electric-blue font-bold uppercase tracking-widest whitespace-nowrap">
               Instance_Structure
            </div>
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <div className="h-6 w-6 border border-white/10 flex items-center justify-center">
                     <Code2 className="h-3 w-3 text-white/40" />
                  </div>
                  <div className="h-2 w-full bg-white/5"></div>
               </div>
               <div className="pl-6 space-y-2 border-l border-white/10">
                  <div className="h-1.5 w-3/4 bg-white/5"></div>
                  <div className="h-1.5 w-1/2 bg-white/5"></div>
                  <div className="h-1.5 w-2/3 bg-white/5"></div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="h-10 w-full border border-electric-blue/20 bg-electric-blue/5 flex items-center justify-center">
                     <Shield className="h-4 w-4 text-electric-blue" />
                     <span className="mono text-[8px] ml-2 text-electric-blue tracking-tighter uppercase font-bold">Signed_Payload</span>
                  </div>
               </div>
            </div>
            <div className="mt-6 flex justify-between items-center opacity-30">
               <div className="h-1 w-12 bg-white/10"></div>
               <Activity className="h-3 w-3" />
               <div className="h-1 w-12 bg-white/10"></div>
            </div>
         </div>
      </div>
    );
  }
  return (
    <div className="relative h-full w-full flex flex-col p-6 bg-black/60 mono overflow-hidden">
       <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] text-foreground/40 font-bold tracking-widest uppercase">Expertise_Exchange</span>
          <div className="px-2 py-0.5 bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-[8px] font-bold">LIVE_FEED</div>
       </div>
       <div className="space-y-3">
          {[
            { tag: 'LAW', val: '2.4 ETH', label: 'Zoning_Expert' },
            { tag: 'DATA', val: '1.8 ETH', label: 'Sentiment_Engine' },
            { tag: 'OPS', val: '4.2 ETH', label: 'Deploy_Worker' }
          ].map((item, i) => (
             <motion.div 
               key={i}
               whileHover={{ x: 5 }}
               className="flex items-center gap-4 p-3 border border-white/5 bg-white/2"
             >
                <div className="text-[8px] px-1.5 py-0.5 bg-white/5 text-foreground/40">{item.tag}</div>
                <div className="flex-1 font-bold text-white text-[10px] tracking-tight">{item.label}</div>
                <div className="text-electric-blue text-[10px] font-bold">{item.val}</div>
             </motion.div>
          ))}
       </div>
       <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center opacity-20">
          <span className="text-[8px]">TOTAL_VOLUME: 1,420.4 ETH</span>
          <span className="text-[8px]">ACTIVE_NODES: 8,241</span>
       </div>
    </div>
  );
};

export function Features() {
  return (
    <section id="workflows" className="relative py-32 px-4 overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-32">
          <div className="mono text-electric-blue text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
             Infrastructure Capabilities
          </div>
          <h2 className="text-4xl font-extrabold tracking-tighter sm:text-7xl text-white mb-8">
            The New Standard in <br />
            <span className="text-gradient">Agentic Intelligence</span>
          </h2>
          <p className="text-lg text-foreground/40 max-w-2xl mx-auto mono">
             Hardware-grade stability for the software that builds software.
          </p>
        </div>

        <div className="space-y-40">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-16 items-center lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-8">
                <div className="mono text-electric-blue text-[10px] font-bold tracking-widest border-l-2 border-electric-blue pl-4">
                   MODULE // {feature.label}
                </div>
                <h3 className="text-4xl font-extrabold tracking-tighter text-white">{feature.title}</h3>
                <p className="text-lg text-foreground/40 leading-relaxed max-w-xl mono">
                  {feature.description}
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <button className="mono text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-3 group">
                     Documentation <ArrowRight className="h-4 w-4 text-electric-blue transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full aspect-square md:aspect-video border border-white/10 bg-white/[0.02] shadow-2xl relative group">
                 <div className="absolute -top-[1px] -left-[1px] h-4 w-4 border-t-2 border-l-2 border-electric-blue/30"></div>
                 <div className="absolute -bottom-[1px] -right-[1px] h-4 w-4 border-b-2 border-r-2 border-electric-blue/30"></div>
                 
                 <div className="w-full h-full overflow-hidden">
                    <FeatureVisualization index={index} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
