"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function SectionHeader() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl font-semibold sm:text-6xl md:text-7xl"
        >
          Ready to Reclaim Your Time?
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-gray-400"
        >
          Start organizing, prioritizing, and crushing your goals today with a
          calm, focused workflow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full bg-white text-black hover:bg-gray-200"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="rounded-full border border-white/30 text-white hover:bg-white/10"
          >
            Watch Demo
          </Button>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="/images/hero.jpg"
            alt="Product Preview"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
