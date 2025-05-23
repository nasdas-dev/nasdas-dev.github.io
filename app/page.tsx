"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Globe, Code2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden noise">
      {/* Animated background mesh */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div 
        className="fixed inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgb(99 102 241 / 0.15), transparent 80%)`,
        }}
      />
      <div className="fixed inset-0" style={{ backgroundImage: 'var(--gradient-mesh)' }} />

      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 9}}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 2 }}
            className="mb-8 inline-flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-indigo-500 to-pink-500 opacity-50 animate-[pulse-glow_8s_ease-in-out_infinite]" />
              <h1 className="relative text-6xl md:text-8xl font-bold tracking-tighter">
                <span className="text-gradient">nasdas</span>
                <span className="text-slate-300">-dev</span>
              </h1>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 font-light tracking-wide"
          >
            Pioneering the future of running technology
          </motion.p>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-12 border border-indigo-500/20"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-slate-300">Innovation in Progress</span>
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-6 mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Exciting projects are
              <span className="block text-gradient">coming soon</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We're crafting extraordinary digital experiences that push the boundaries 
              of what's possible. Stay tuned for groundbreaking innovations.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full font-medium text-white shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Get Notified
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            </button>
          </motion.div>

          {/* Feature icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-24 grid grid-cols-2 gap-8 md:gap-16 max-w-md mx-auto"
          >
            {[
              { icon: Code2, label: "Cutting-edge Tech" },
              { icon: Globe, label: "Global Impact" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="p-3 rounded-2xl glass-dark group-hover:glass transition-all duration-300">
                  <item.icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors text-center">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 p-6 text-center"
      >
        <p className="text-sm text-slate-600">
          © 2024 nasdas-dev. Building the future, one line at a time.
        </p>
      </motion.footer>
    </main>
  );
}
