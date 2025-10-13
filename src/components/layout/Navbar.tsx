"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="mx-auto flex w-full items-center justify-between px-6 py-5 md:w-4/5 relative">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold">
          <div className="size-8 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-white/90 dark:bg-zinc-900/90" />
          </div>
          <span className="text-lg">Portfolio</span>
        </div>

        {/* Nav Links */}
        <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a className="hover:text-foreground" href="#features">
            Features
          </a>
          <a className="hover:text-foreground" href="#projects">
            Projects
          </a>
          <button
            className="hover:text-foreground"
            onClick={() => setShowModal((prev) => !prev)}
          >
            Experience
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button className="bg-gradient-to-r from-rose-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-rose-500/20 hover:opacity-95">
            Try it free
          </Button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute left-1/2 top-[70px] z-50 w-[90%] max-w-lg -translate-x-1/2 rounded-2xl border border-white/20 bg-white/40 p-6 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900/40"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Experience</h2>
              <button
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              Here you can showcase your professional experience, past roles,
              and career timeline. Style this section however you want to match
              your portfolio!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
