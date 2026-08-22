"use client"

import React, { useState, useEffect } from "react"
import { RxLinkedinLogo } from "react-icons/rx"
import { AiFillInstagram } from "react-icons/ai"
import { FaSquareGithub } from "react-icons/fa6"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const Hero = () => {
  const titles = [
    "Full-Stack Web Developer",
    "Agentic AI Engineer",
    "Chemical Engineering Student",
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <section id="home" className="relative w-full min-h-screen bg-[#020617] flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-16 px-6 md:px-16 pt-28 pb-12 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[15%] right-[5%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[150px]" />
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
          style={{
            backgroundImage: "radial-gradient(circle, #22d3ee 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      {/* IMAGE AREA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center items-center z-20 w-full max-w-[22rem] h-[24rem] sm:h-[28rem] md:h-[32rem] order-first md:order-last group"
      >
        {/* Ambient Glow behind circle */}
        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

        {/* Outer Floating Motion Wrapper */}
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Main Circular Frame */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-2 border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.2)] bg-slate-950 overflow-hidden flex items-end justify-center transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_60px_rgba(34,211,238,0.4)]">
            
            {/* Single Image Instance shifted further down (top-2 / top-3) to submerge the lower crop area entirely */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-end pointer-events-none">
              <div className="relative w-[130%] h-[130%] top-2 sm:top-3 flex justify-center items-end">
                <Image
                  src="/static/mine_pic3.png"
                  alt="Muhammad Areeb Farooq"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_15px_25px_rgba(34,211,238,0.2)]"
                  priority
                />
              </div>
            </div>

            {/* Bottom Gradient Fade to cleanly ground the lower frame */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none z-10" />
          </div>
        </motion.div>

        {/* Floating Bubble 1 (Top Left) */}
        <motion.div
          animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2 left-2 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 rounded-2xl shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center z-30"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
        </motion.div>

        {/* Floating Bubble 2 (Bottom Right) */}
        <motion.div
          animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-6 right-2 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center z-30"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
        </motion.div>
      </motion.div>

      {/* TEXT AREA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-col items-center md:items-start text-center md:text-left z-10 max-w-xl"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-400 tracking-wide font-sans">
          Hi, I am
        </h2>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-2 tracking-wide leading-tight font-sans break-words w-full">
          MUHAMMAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 drop-shadow-[0_2px_10px_rgba(34,211,238,0.2)]">AREEB</span>
          <div>FAROOQ</div> 
        </h1>

        <div className="h-10 mt-4 overflow-hidden relative w-full flex items-center justify-center md:justify-start">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute font-sans text-lg sm:text-xl font-semibold tracking-wider text-cyan-400 block"
            >
              {titles[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-4 mt-6">
          {[
            { icon: <RxLinkedinLogo />, href: "https://www.linkedin.com/in/muhammad-areeb-856a94315/" },
            { icon: <FaSquareGithub />, href: "https://github.com/AreebAhmed14" },
            { icon: <AiFillInstagram />, href: "https://www.instagram.com/areeb_ahmed549/" }
          ].map((social, i) => (
            <motion.div key={i} whileHover={{ y: -4, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={social.href}
                target="_blank"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-sm text-xl text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors duration-300 shadow-sm"
              >
                {social.icon}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-8">
          <Link 
            href="/AreebResume.pdf" 
            target="_blank" 
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-sans font-bold text-sm tracking-widest text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]"
          >
            DOWNLOAD CV
          </Link>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero