"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function HeroVideoSection() {
  const [open, setOpen] = useState(false); // Experience modal
  const [contactOpen, setContactOpen] = useState(false); // Contact modal
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile nav

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 z-20 w-full backdrop-blur-md bg-black/30">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-4 lg:w-4/5">
          {/* Logo */}
          <div className="font-bold">FlowTime</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#experience"
              className="hover:text-gray-200 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                if (open) {
                  setOpen(false); // ✅ close if already open
                } else {
                  setContactOpen(false); // close contact
                  setOpen(true); // open experience
                }
              }}
            >
              Experience
            </a>
            <a href="#projects" className="hover:text-gray-200">
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-gray-200 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                if (contactOpen) {
                  setContactOpen(false); // ✅ close if already open
                } else {
                  setOpen(false); // close experience
                  setContactOpen(true); // open contact
                }
              }}
            >
              Contact
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline rounded-full bg-white text-black hover:bg-gray-200">
              Sign In
            </Button>

            {/* Mobile Burger Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/20 z-30"
            >
              <div className="flex flex-col items-center gap-6 py-6">
                <a
                  href="#features"
                  className="hover:text-gray-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#experience"
                  className="hover:text-gray-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    if (open) {
                      setOpen(false);
                    } else {
                      setContactOpen(false);
                      setOpen(true);
                    }
                    setMobileOpen(false);
                  }}
                >
                  Experience
                </a>

                <a
                  href="#projects"
                  className="hover:text-gray-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="hover:text-gray-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    if (contactOpen) {
                      setContactOpen(false);
                    } else {
                      setOpen(false);
                      setContactOpen(true);
                    }
                    setMobileOpen(false);
                  }}
                >
                  Contact
                </a>
                <Button className="rounded-full bg-white text-black hover:bg-gray-200">
                  Sign In
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ✅ Experience Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-1/2 top-[72px] z-50 w-[90%] max-w-2xl -translate-x-1/2 
            rounded-2xl border border-white/20 
            bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-2xl 
            p-6 text-white shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">My Journey</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Timeline */}
            <div className="relative border-l border-white/30 pl-6 flex flex-col-reverse gap-8 max-h-[60vh] overflow-y-auto">
              <div>
                <div className="absolute -left-[7px] h-3 w-3 rounded-full bg-blue-500 border border-white" />
                <h3 className="text-lg font-semibold">2020</h3>
                <p className="text-white-300 text-sm">
                  Started as a Software Engineer at Company X.
                </p>
              </div>
              <div>
                <div className="absolute -left-[7px] h-3 w-3 rounded-full bg-blue-500 border border-white" />
                <h3 className="text-lg font-semibold">2021</h3>
                <p className="text-white-300 text-sm">
                  Focused on frontend development, building dashboards and
                  design systems.
                </p>
              </div>
              <div>
                <div className="absolute -left-[7px] h-3 w-3 rounded-full bg-blue-500 border border-white" />
                <h3 className="text-lg font-semibold">2022</h3>
                <p className="text-white-300 text-sm">
                  Promoted to Full Stack Developer, delivering MERN production
                  apps.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Contact Modal */}
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-1/2 top-[72px] z-50 w-[90%] max-w-md -translate-x-1/2 
            rounded-2xl border border-white/20 
            bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-2xl 
            p-6 text-white shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Contact Me</h2>
              <button
                onClick={() => setContactOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Contact Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Centered Hero Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold sm:text-5xl md:text-6xl"
        >
          Oakley design, <br /> Meta technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-xl text-lg text-gray-200"
        >
          Fifty years of design meets the new era of tech with Oakley Meta HSTN.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6"
        >
          <Button
            size="lg"
            className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
