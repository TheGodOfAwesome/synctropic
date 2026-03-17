'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center">
      {/* Background animated grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
        ></motion.div>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-electric-blue/5 blur-[120px] dark:bg-electric-blue/10 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
 
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full border border-electric-blue/30 bg-electric-blue/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-electric-blue backdrop-blur-sm">
            The Future of Agentic AI
          </span>
          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-8xl">
            Build, Manage, and <br />
            <span className="bg-gradient-to-r from-electric-blue via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sync Your Process
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-foreground/60 sm:text-2xl leading-relaxed">
            A sophisticated platform for building multi-agent workflows that accomplish complex tasks. Turn your unique expertise into scalable AI skills.
          </p>
        </motion.div>
 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <button className="group relative rounded-xl bg-electric-blue px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-electric-blue/30 transition-all hover:scale-105 hover:bg-electric-blue/90">
            Get Started Free
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </button>
          <button className="rounded-xl border border-white/10 glass px-10 py-5 text-xl font-bold transition-all hover:bg-white/10 dark:hover:bg-white/10">
            View Marketplace
          </button>
        </motion.div>
 
        {/* Visual representation of an "Instance" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-24 flex justify-center"
        >
          <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 glass p-1 shadow-2xl electric-glow">
             <div className="rounded-[22px] bg-background/40 backdrop-blur-3xl overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                   <div className="flex gap-2">
                      <div className="h-3.5 w-3.5 rounded-full bg-red-500/30 border border-red-500/20"></div>
                      <div className="h-3.5 w-3.5 rounded-full bg-yellow-500/30 border border-yellow-500/20"></div>
                      <div className="h-3.5 w-3.5 rounded-full bg-green-500/30 border border-green-500/20"></div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="h-2 w-32 rounded-full bg-white/5"></div>
                      <div className="h-6 w-6 rounded bg-electric-blue/20 border border-electric-blue/30"></div>
                   </div>
                </div>
                <div className="p-10">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[1, 2, 3].map((i) => (
                         <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + (i * 0.2) }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="relative flex flex-col items-center gap-6 p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
                         >
                            <div className="relative">
                               <div className="absolute inset-0 bg-electric-blue/20 blur-xl rounded-full animate-flicker"></div>
                               <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-electric-blue to-blue-600 flex items-center justify-center shadow-lg border border-white/10">
                                  <div className="h-8 w-8 rounded bg-white/20"></div>
                               </div>
                            </div>
                            <div className="space-y-3 w-full">
                               <div className="h-2.5 w-2/3 mx-auto rounded-full bg-foreground/20"></div>
                               <div className="h-1.5 w-full rounded-full bg-foreground/10"></div>
                               <div className="h-1.5 w-4/5 mx-auto rounded-full bg-foreground/5"></div>
                            </div>
                         </motion.div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
