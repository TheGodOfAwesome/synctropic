'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Network, Activity } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 text-center bg-black">
      {/* Background Video / Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* We use a fallback because ripples.mp4 was reported missing */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
          poster="/fallback-gradient.jpg"
        >
          <source src="/ftl.mp4" type="video/mp4" />
        </video>
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Video Overlay for contrast */}
        <div className="absolute inset-0 video-overlay"></div>
        
        {/* Scanning Line Effect */}
        <motion.div 
          animate={{ translateY: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-[1px] bg-electric-blue/10 shadow-[0_0_15px_rgba(0,137,255,0.5)] z-10"
        />
      </div>
 
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3">
             <div className="h-[1px] w-8 bg-electric-blue/30"></div>
             <span className="mono text-[10px] font-bold tracking-[0.4em] uppercase text-electric-blue">
                Protocol v0.42.0 // Active
             </span>
             <div className="h-[1px] w-8 bg-electric-blue/30"></div>
          </div>
          
          <h1 className="text-6xl font-extrabold tracking-tighter sm:text-9xl text-white">
            Scale your <br />
            <span className="text-gradient">Experience</span>
          </h1>
          
          <p className="mx-auto max-w-3xl text-lg text-foreground/40 sm:text-2xl leading-relaxed mono">
             &quot;We help you build an instance of your process.&quot;
          </p>
        </motion.div>
 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="btn-primary">
             Apply_for_Early_Access
          </button>
          <button className="btn-secondary">
             Read_Documentation
          </button>
        </motion.div>
 
        {/* Visual representation of an "Instance" - Technical Schematic Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-32 w-full max-w-5xl mx-auto"
        >
          <div className="relative border border-white/10 glass-strong p-1 overflow-hidden">
             {/* Header Bar */}
             <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-2">
                <div className="flex items-center gap-6">
                   <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-white/10"></div>
                      <div className="h-2 w-2 rounded-full bg-white/10"></div>
                      <div className="h-2 w-2 rounded-full bg-white/10"></div>
                   </div>
                   <span className="mono text-[9px] text-foreground/30 uppercase tracking-widest font-bold flex items-center gap-2">
                      <Activity className="h-3 w-3 text-electric-blue" />
                      Instance_Visualization_v1.0.sys
                   </span>
                </div>
                <div className="mono text-[9px] text-electric-blue font-bold">
                   CPU: 12% // MEM: 14.2GB
                </div>
             </div>
             
             {/* Schematic Area */}
             <div className="p-8 md:p-16 bg-black/40">
                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                   
                   {/* Connection Lines (Desktop Only) */}
                   <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2 pointer-events-none"></div>

                   {[
                     { label: 'INGRESS', icon: Network, status: 'CONNECTED' },
                     { label: 'ORCHESTRATOR', icon: Cpu, status: 'ACTIVE', primary: true },
                     { label: 'LOGIC_LAYER', icon: Database, status: 'RUNNING' },
                     { label: 'EGRESS', icon: Terminal, status: 'READY' }
                   ].map((node, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center">
                         <motion.div
                           whileHover={{ scale: 1.05 }}
                           className={`h-20 w-20 flex items-center justify-center border-2 ${node.primary ? 'border-electric-blue bg-electric-blue/10 shadow-[0_0_30px_rgba(0,137,255,0.2)]' : 'border-white/10 bg-white/5 hover:border-white/20'} transition-all`}
                         >
                            <node.icon className={`h-8 w-8 ${node.primary ? 'text-electric-blue' : 'text-foreground/40'}`} />
                         </motion.div>
                         <div className="mt-4 flex flex-col items-center">
                            <span className="mono text-[10px] font-bold text-white tracking-widest">{node.label}</span>
                            <span className={`mono text-[7px] mt-1 ${node.primary ? 'text-electric-blue' : 'text-foreground/20'}`}>&nbsp;</span>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
             
             {/* Bottom Status Bar */}
             <div className="border-t border-white/5 bg-white/2 px-4 py-2 flex justify-between items-center">
                <div className="mono text-[8px] text-foreground/20 flex gap-4">
                   <span>SYS_KERNEL: OK</span>
                   <span>LATENCY: 12MS</span>
                   <span>BUFFER: %42</span>
                </div>
                <div className="flex gap-2">
                   <div className="h-1.5 w-12 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: [-48, 48] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="h-full w-4 bg-electric-blue/40"
                      />
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
