"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";
import { NeonBlobBackdrop } from "../ui/NeonBlobBackdrop";

export function Hero() {
  return (
    <section className="relative">
      <NeonBlobBackdrop />
      <div className="mx-auto grid w-full items-center gap-12 px-6 pb-16 pt-6 md:grid-cols-2 md:pt-10 lg:gap-16 lg:w-4/5">
        {/* Left side text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-2 text-sm text-muted-foreground">
            No stress. Just flow.
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Ready to Reclaim <br className="hidden sm:block" /> Your Time?
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Start organizing, prioritizing, and crushing your goals today with a
            calm, focused workflow.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 via-fuchsia-500 to-amber-400 text-white shadow-lg"
            >
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              <Headphones className="mr-2 h-4 w-4" /> Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Right side image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border bg-black/5 shadow-2xl">
            <img
              alt="Neon portrait"
              src="/images/hero.jpg"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
