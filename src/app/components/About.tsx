"use client"

import React from "react"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 relative overflow-hidden bg-[#020617]"
    >
      {/* Tech Ambience and Glow Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[140px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: "radial-gradient(circle, #22d3ee 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />
      </div>

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide font-sans">
          ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_2px_8px_rgba(34,211,238,0.2)]">ME</span>
        </h1>
        <div className="h-[2px] w-12 bg-cyan-500 mx-auto mt-3 rounded-full opacity-60" />
      </motion.div>

      {/* Content Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 max-w-4xl w-full mx-auto p-6 sm:p-10 md:p-12 rounded-2xl bg-slate-900/30 backdrop-blur-xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col gap-6 md:gap-8"
      >
        {/* Decorative corner tag */}
        {/* <div className="absolute top-4 left-4 font-mono text-xs text-cyan-500/40 select-none">&lt;developer_profile&gt;</div>
        <div className="absolute bottom-4 right-4 font-mono text-xs text-cyan-500/40 select-none">&lt;/profile&gt;</div> */}

        <motion.p 
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed font-sans text-center md:text-left border-l-2 border-transparent md:hover:border-cyan-400/50 pl-0 md:hover:pl-4 transition-all duration-300"
        >
          <span className="text-cyan-400 font-serif text-2xl mr-1">&ldquo;</span>
          I am Areeb, a student at NED University of Engineering and Technology, pursuing a degree in Chemical Engineering. Alongside my core engineering disciplines, I operate as an Agentic AI developer and full-stack web designer, creating high-performance, architecturally sound, and visually optimized autonomous digital systems.
          <span className="text-cyan-400 font-serif text-2xl ml-1">&rdquo;</span>
        </motion.p>

        <motion.p 
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed font-sans text-center md:text-left border-l-2 border-transparent md:hover:border-cyan-400/50 pl-0 md:hover:pl-4 transition-all duration-300"
        >
          <span className="text-cyan-400 font-serif text-2xl mr-1">&ldquo;</span>
          Currently, my focus is directed deep into constructing fluid pipelines using TypeScript, Next.js, Python, and Node.js. My goal is to continually push structural boundaries in autonomous systems, architect scalable software models, and build high-grade interactive infrastructure.
          <span className="text-cyan-400 font-serif text-2xl ml-1">&rdquo;</span>
        </motion.p>
      </motion.div>
    </section>
  )
}

export default About