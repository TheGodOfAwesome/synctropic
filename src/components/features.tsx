'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, ShoppingBag, ArrowRight } from 'lucide-react';

const features = [
  {
    title: "Multi-Agent Orchestration",
    description: "Connect specialized AI agents into powerful, coordinated workflows. Our orchestrator handles state, context, and intent across diverse models.",
    icon: <Cpu className="h-6 w-6 text-electric-blue" />,
    image: "/feature-1.png"
  },
  {
    title: "Instances of Your Process",
    description: "Capture your unique business logic and domain expertise into repeatable, scalable AI blueprints that anyone in your organization can deploy.",
    icon: <Zap className="h-6 w-6 text-electric-blue" />,
    image: "/feature-2.png"
  },
  {
    title: "The Marketplace",
    description: "Monetize your AI skills and workflows. Share your 'instances' with the world and earn as others leverage your specialized processes.",
    icon: <ShoppingBag className="h-6 w-6 text-electric-blue" />,
    image: "/feature-3.png"
  }
];

const FeatureVisualization = ({ index }: { index: number }) => {
  if (index === 0) {
    return (
      <div className="relative h-full w-full flex items-center justify-center p-12">
        <div className="relative w-full aspect-square max-w-[300px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-electric-blue/20"
          ></motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-dashed border-electric-blue/40"
          ></motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-20 rounded-2xl bg-electric-blue flex items-center justify-center shadow-[0_0_30px_rgba(0,137,255,0.4)]">
              <Cpu className="h-10 w-10 text-white" />
            </div>
          </div>
          {[0, 90, 180, 270].map((angle, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              style={{ 
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `rotate(${angle}deg) translateY(-120px) translateX(-50%)`,
                transformOrigin: '0 120px'
              }}
              className="h-4 w-4 rounded-full bg-electric-blue shadow-[0_0_10px_#0089ff]"
            ></motion.div>
          ))}
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="relative h-full w-full flex items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 flex flex-col items-center justify-center gap-2"
            >
              <div className="h-8 w-8 rounded-lg bg-electric-blue/20 flex items-center justify-center border border-electric-blue/30">
                <Zap className="h-4 w-4 text-electric-blue" />
              </div>
              <div className="h-1.5 w-12 rounded-full bg-foreground/10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-full w-full flex items-center justify-center p-8">
      <div className="relative w-full max-w-[350px] aspect-video rounded-2xl border border-white/10 bg-black/20 overflow-hidden shadow-2xl">
         <div className="absolute top-0 left-0 w-full h-8 border-b border-white/5 flex items-center px-4 gap-1.5 bg-white/5">
            <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
            <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
         </div>
         <div className="pt-12 p-6 flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
               <motion.div 
                 key={i}
                 animate={{ x: [0, 10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
                 className="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/5"
               >
                  <div className="h-8 w-8 rounded-lg bg-electric-blue flex items-center justify-center">
                     <ShoppingBag className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                     <div className="h-2 w-24 rounded-full bg-foreground/20"></div>
                     <div className="h-1.5 w-16 rounded-full bg-foreground/10"></div>
                  </div>
                  <div className="h-2.5 w-12 rounded-full bg-electric-blue/20"></div>
               </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
};

export function Features() {
  return (
    <section id="workflows" className="relative py-24 px-4 overflow-hidden">
      {/* Background glow for the whole section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-electric-blue/5 blur-[160px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            A New Standard for <br />
            <span className="bg-gradient-to-r from-electric-blue to-blue-400 bg-clip-text text-transparent">Agentic Infrastructure</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-foreground/60 max-w-2xl mx-auto"
          >
            Sophisticated tools for teams building the next generation of AI-native applications.
          </motion.p>
        </div>

        <div className="space-y-40">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col gap-16 items-center lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-8">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-electric-blue/10 border border-electric-blue/20 shadow-[0_0_20px_rgba(0,137,255,0.15)]">
                  <div className="text-electric-blue drop-shadow-[0_0_8px_rgba(0,137,255,0.5)]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-xl text-foreground/60 leading-relaxed max-w-xl">
                  {feature.description}
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <button className="flex items-center gap-2 text-electric-blue font-bold text-lg hover:underline underline-offset-8 transition-all">
                    Explore docs <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full aspect-square md:aspect-video rounded-[32px] border border-white/10 glass electric-glow flex items-center justify-center bg-black/40 overflow-hidden group">
                 <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
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
