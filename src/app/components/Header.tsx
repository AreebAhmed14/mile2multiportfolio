"use client"

import React, { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import Link from "next/link"
import { HiMenuAlt3, HiX } from "react-icons/hi"

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // FIXED: Multi-page and single-page routing structures mixed correctly
 const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/#about" }, // <-- Yeh wapas apni jagah par!
  { name: "SKILLS", href: "/#skills" },
  { name: "PROJECTS", href: "/Projects" },
  { name: "EDUCATION", href: "/Education" },
]

  // Strictly Typed Variants for Menu Frame
  const menuVariants: Variants = {
    hidden: { opacity: 0, scale: 1.02 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.35, 
        ease: [0.16, 1, 0.3, 1], 
        when: "beforeChildren", 
        staggerChildren: 0.08 
      } 
    },
    exit: { 
      opacity: 0, 
      transition: { 
        duration: 0.25, 
        ease: "easeIn", 
        when: "afterChildren", 
        staggerChildren: 0.05, 
        staggerDirection: -1 
      } 
    }
  }

  // Strictly Typed Variants for Links
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.2 } }
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-[#020617]/70 backdrop-blur-xl border-b border-white/[0.03] z-50 px-6 py-4 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-50">
        
        {/* CYBER CIRCLE NODE LOGO (MAF) */}
        <Link href="/" className="relative group flex items-center justify-center py-2">
          {/* Animated Tech Circle Background */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-12 h-12 rounded-full border border-dashed border-cyan-500/30 group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300 pointer-events-none flex items-center justify-center z-0"
          >
            {/* Inner Orbiting Core Light Element */}
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </motion.div>

          {/* Interactive Core Logo Text */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              letterSpacing: "0.15em",
              textShadow: "0px 0px 8px rgba(34, 211, 238, 0.5)"
            }}
            className="text-xl font-extrabold text-white font-sans cursor-pointer select-none relative z-10 px-4 transition-all duration-300"
          >
            M
            <span className="text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.3)]">A</span>
            F
          </motion.h1>
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

      {/* ULTRA GLASS FULL-SCREEN RESPONSIVE PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-screen h-screen bg-[#020617]/90 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden z-40 overflow-hidden"
          >
            {/* Background Structural Matrix Ambient Mesh */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
              <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[130px]" />
              <div className="absolute bottom-[20%] left-[20%] w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Navigation Interactive Links */}
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={linkVariants}
                className="w-full text-center relative z-20"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Mobile overlay closes safely
                  className="inline-block font-sans font-extrabold text-2xl sm:text-3xl tracking-[0.2em] text-slate-200 hover:text-cyan-400 active:text-cyan-400 transition-colors py-3 px-6 uppercase relative group cursor-pointer"
                >
                  {link.name}
                  {/* Subtle Underline Micro Glow Reveal */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-[60%] rounded-full opacity-80" />
                </Link>
              </motion.div>
            ))}

            {/* System Node Tracker Footer */}
            <motion.div 
              variants={linkVariants}
              className="absolute bottom-12 text-center font-mono text-[10px] tracking-[0.3em] text-slate-500 select-none uppercase z-10 pointer-events-none"
            >
              SYS.NODE // MULTI_ROUTING_GRID
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header