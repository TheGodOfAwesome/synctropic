'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    title: "Connect",
    description: "Plug in your data sources, existing tools, and AI models. Our seamless integration layer handles the complexity of API orchestration.",
    icon: <MousePointer2 className="h-6 w-6" />,
    color: "bg-blue-500"
  },
  {
    title: "Build",
    description: "Define your unique process using our visual flow builder or code-first SDK. Turn domain expertise into automated agentic skills.",
    icon: <Settings className="h-6 w-6" />,
    color: "bg-electric-blue"
  },
  {
    title: "Scale",
    description: "Deploy your workflows as 'instances' that run autonomously. Monetize your skills on the marketplace and scale your impact.",
    icon: <Rocket className="h-6 w-6" />,
    color: "bg-cyan-500"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-white/[0.02] dark:bg-black/20">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            From Process to <br />
            <span className="text-electric-blue">Performance in Seconds</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            A simple three-step journey to transform how you build and scale agentic intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative group text-center"
              >
                <div className="relative mb-8 flex justify-center">
                  <div className={`h-20 w-20 rounded-3xl ${step.color} flex items-center justify-center text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-background border border-white/10 flex items-center justify-center font-bold text-electric-blue text-lg shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-foreground/60 leading-relaxed px-4">
                  {step.description}
                </p>
                
                {/* Visual arrow for mobile/tablet */}
                {i < steps.length - 1 && (
                  <div className="mt-8 flex justify-center lg:hidden text-electric-blue/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-electric-blue/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
}
