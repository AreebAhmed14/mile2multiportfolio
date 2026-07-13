"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"

const projects = [
  {
    title: "Jeeuny AI",
    desc: "An autonomous AI agent orchestrator built for highly complex contextual reasoning and multi-agent operations.",
    link: "https://jeeuny-ai.vercel.app",
    tags: ["CrewAI", "LangChain", "Python", "Next.js"],
  },
  {
    title: "Jeeuty Voice",
    desc: "An advanced, real-time voice-activated AI assistant optimized for low-latency cognitive vocal commands.",
    link: "https://jeeuty-voice.vercel.app",
    tags: ["Voice AI", "Python", "WebSockets"],
  },
  {
    title: "Resuminator",
    desc: "A structural algorithmic engine that parses client inputs to dynamically generate clean ATS-friendly CVs.",
    link: "https://resuminator.netlify.app",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Shout Unit Converter",
    desc: "A high-precision scientific application configured to execute multi-variable engineering unit shifts.",
    link: "https://shoutunitconvert.streamlit.app",
    tags: ["Streamlit", "Python", "Computation"],
  },
  {
    title: "Pic Extent Converter",
    desc: "A matrix-level image processing asset designed to manipulate, transcode, and adapt graphic file extensions.",
    link: "https://pic-exten-convert.streamlit.app",
    tags: ["Image Processing", "Python", "Streamlit"],
  },
  {
  "title": "Aura DevLabs",
  "desc": "A premium B2B micro-SaaS and developer infrastructure marketplace built with an image-free terminal aesthetic for rapid deployment optimization.",
  "link": "https://aura-devlabs.vercel.app/",
  "tags": ["Next.js", "Tailwind CSS", "Context API", "Lucide React"],
}
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen py-24 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-[#020617]"
    >
      {/* Background Tech Network Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[25%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: "radial-gradient(circle, #22d3ee 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-16 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide font-sans">
          FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_2px_8px_rgba(34,211,238,0.2)]">PROJECTS</span>
        </h1>
        <div className="h-[2px] w-12 bg-cyan-500 mx-auto mt-3 rounded-full opacity-60" />
      </motion.div>

      {/* Projects Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl relative z-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="relative group rounded-2xl h-full flex flex-col"
          >
            {/* Hidden Neon Aura Radial Reveal */}
            <div className="absolute -inset-px bg-gradient-to-b from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl z-0" />
            <div className="absolute inset-4 bg-cyan-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />

            {/* Main Interactive Glass Frame */}
            <div className="relative z-10 flex-1 flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-xl transition-all duration-500 overflow-hidden group-hover:border-cyan-500/20">
              
              <div>
                {/* Meta Tags Row */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="font-mono text-[10px] font-bold tracking-wider text-cyan-400/80 bg-cyan-500/5 border border-cyan-500/10 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                  {proj.title}
                </h2>

                {/* Description */}
                <p className="text-slate-400 text-sm mt-2 leading-relaxed font-sans font-medium">
                  {proj.desc}
                </p>
              </div>
              
              {/* Clean Tech Deployment Anchor Link */}
              <div className="mt-6 pt-4 border-t border-white/[0.03]">
                <Link
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold tracking-wider text-slate-300 hover:text-cyan-400 font-sans transition-colors duration-300 group/link"
                >
                  VISIT
                  <FiArrowUpRight className="text-base transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300 text-slate-500 group-hover/link:text-cyan-400" />
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects