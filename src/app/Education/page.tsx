"use client"

import React from "react"
import { motion } from "framer-motion"

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const educationData = [
  {
    title: "BACHELOR'S DEGREE",
    institution: "NED University of Engineering & Technology",
    timeline: "Ongoing",
    text: "Currently pursuing a Bachelor's in Chemical Engineering, merging structural thermodynamics and process computational chemistry with modern algorithmic engineering practices.",
  },
  {
    title: "GENERATIVE AI FELLOWSHIP",
    institution: "Governor Sindh IT Initiative (GIAIC)",
    timeline: "Ongoing",
    text: "Deepening absolute command over autonomous agent orchestration, large language models, structured fine-tuning pipelines, and distributed vector frameworks.",
  },
  {
    title: "INTERMEDIATE EDUCATION",
    institution: "Pre-Engineering Faculty",
    timeline: "Graduated — 2025",
    text: "Solidified underlying core proficiencies across advanced physics matrices, multivariable mathematical mechanics, and analytical chemical functions.",
  },
  {
    title: "MATRICULATION",
    institution: "Science Discipline",
    timeline: "Graduated — 2023",
    text: "Established fundamental primary baselines in mathematical operations and theoretical chemistry, priming the cognitive framework for high-level technical engineering fields.",
  },
]

const Education = () => {
  return (
    <section
      id="education"
      className="w-full min-h-screen py-24 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-[#020617]"
    >
      {/* Background Structural Matrix Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px]" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-20 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide font-sans">
          ACADEMIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_2px_8px_rgba(34,211,238,0.2)]">TIMELINE</span>
        </h1>
        <div className="h-[2px] w-12 bg-cyan-500 mx-auto mt-3 rounded-full opacity-60" />
      </motion.div>

      {/* Structural Minimalist Timeline List Wrapper */}
      <div className="w-full max-w-4xl relative z-10 border-l border-slate-800 ml-4 sm:ml-6 space-y-12 pl-6 sm:pl-10">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative group"
          >
            {/* Interactive Timeline Core Radial Intercept Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-cyan-400 transition-colors duration-300 z-20 flex items-center justify-center">
              <div className="w-1 h-1 bg-transparent group-hover:bg-cyan-400 rounded-full transition-colors duration-300" />
            </div>

            {/* Micro Hover Glow Aura Layer */}
            <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl z-0" />

            {/* Primary Content Container Box */}
            <div className="relative z-10 p-6 sm:p-8 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-lg group-hover:border-cyan-500/10 transition-all duration-300">
              
              {/* Card Meta Tracking Header Line */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-white font-sans tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-400 font-sans mt-0.5">
                    {item.institution}
                  </p>
                </div>
                
                {/* Micro Timeline Capsule Badge */}
                <span className="self-start sm:self-center font-mono text-[10px] font-bold tracking-widest px-2.5 py-1 rounded bg-slate-800 border border-white/5 text-cyan-400 uppercase">
                  {item.timeline}
                </span>
              </div>

              {/* Text Description Box */}
              <p className="text-sm sm:text-base text-slate-300 font-medium font-sans leading-relaxed">
                {item.text}
              </p>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education