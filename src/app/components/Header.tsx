"use client"

import React, { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import Link from "next/link"
import { HiMenuAlt3, HiX } from "react-icons/hi"

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/#about" },
    { name: "SKILLS", href: "/#skills" },
    { name: "PROJECTS", href: "/Projects" },
    { name: "EDUCATION", href: "/Education" },
  ]

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1], 
        when: "beforeChildren", 
        staggerChildren: 0.07 
      } 
    },
    exit: { 
      opacity: 0, 
      y: 20,
      filter: "blur(8px)",
      transition: { 
        duration: 0.25, 
        ease: "easeInOut", 
        when: "afterChildren", 
        staggerChildren: 0.04, 
        staggerDirection: -1 
      } 
    }
  }

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: 15, transition: { duration: 0.15 } }
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-[#020617]/70 backdrop-blur-xl border-b border-white/[0.03] z-50 px-6 py-4 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-50">

        {/* LOGO: Responsive Text with Animated Bottom Line (No Background Animation) */}
        <Link href="/" className="relative group flex flex-col items-center justify-center py-1 md:py-2 px-3">
          {/* Foreground Text with responsive font size */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-extrabold text-white font-sans tracking-widest cursor-pointer select-none relative z-10"
          >
            M<span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">A</span>F
          </motion.h1>

          {/* Animated Bottom Line / Underline Effect */}
          <div className="relative w-full h-[2px] mt-1 overflow-hidden">
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-y-0 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#22d3ee]"
            />
            <span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#22d3ee]" />
          </div>
        </Link>

        {/* DESKTOP ROUTING GRID */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="relative group">
              <span className="font-sans font-bold text-xs tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                {link.name}
              </span>
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full opacity-80" />
            </Link>
          ))}
        </nav>

        {/* MOBILE INTERFACE TRIGGER ACTION */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-slate-300 hover:text-cyan-400 transition-colors focus:outline-none z-50 relative p-1"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* FULL-SCREEN GLASS MOBILE PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-screen h-screen bg-[#020617]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 md:hidden z-40 overflow-hidden"
          >
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
              <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px]" />
            </div>

            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={linkVariants}
                className="w-full text-center relative z-20"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="inline-block font-sans font-extrabold text-2xl tracking-[0.2em] text-slate-200 hover:text-cyan-400 active:text-cyan-400 transition-colors py-2 px-6 uppercase relative group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-[60%] rounded-full opacity-80" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header