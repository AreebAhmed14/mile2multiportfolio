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

  // Pure React/Framer text switcher (No broken CSS keyframes)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <section id="home" className="relative w-full min-h-screen bg-[#020617] flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 px-6 md:px-16 pt-32 pb-16 overflow-hidden">
      
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
        className="relative flex justify-center items-center z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-[25rem] md:h-[25rem] order-first md:order-last"
      >
        <div className="absolute inset-0 border border-dashed border-cyan-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full bg-cyan-500/10 blur-xl" />

        <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.15)] bg-slate-950">
          <Image
            src="/static/me.jpg"
            alt="Muhammad Areeb"
            fill
            className="object-cover rounded-full transition-all duration-500 transform scale-100 hover:scale-105"
            priority
          />
        </div>
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

        {/* Text breaking handles to support extreme mobile screens */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-2 tracking-wide leading-tight font-sans break-words w-full">
          MUHAMMAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 drop-shadow-[0_2px_10px_rgba(34,211,238,0.2)]">AREEB</span>
          <div>FAROOQ</div> 
        </h1>

        {/* Rock Solid Framed Scrolling Component */}
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