"use client"

import React from "react"
import { motion } from "framer-motion"

const Skills = () => {
  // Top level heavy core components (Big Boxes)
  const coreBoxSkills = [
    { name: "AGENTIC AI", level: 60 },
    { name: "PYTHON", level: 80 },
    { name: "NEXT JS", level: 60 },
    { name: "WEB DEV", level: 85 },
  ]

  // Supporting & domain components (Compact Horizontal Bars without text percentage)
  const supportiveBarSkills = [
    { name: "JAVASCRIPT", level: 70 },
    { name: "WORDPRESS", level: 65 },
    { name: "GIT / GITHUB", level: 70 },
    { name: "CHEM. ENGG. BASICS", level: 75 },
    { name: "MS OFFICE SUITE", level: 80 },
  ]

  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden bg-[#020617]"
    >
      {/* Structural Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px]" />
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
          SKILLS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_2px_8px_rgba(34,211,238,0.2)]">EXPERTISE</span>
        </h1>
        <div className="h-[2px] w-12 bg-cyan-500 mx-auto mt-3 rounded-full opacity-60" />
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-12">
        
        {/* ROW 1: THE CORE BENTO BOXES WITH PERFECTLY CENTERED SVG */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coreBoxSkills.map((skill, index) => {
            const radius = 40
            const circumference = 2 * Math.PI * radius
            const strokeDashoffset = circumference - (skill.level / 100) * circumference

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, borderColor: "rgba(34,211,238,0.2)" }}
                className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-md flex flex-col items-center justify-between text-center group transition-all duration-300"
              >
                {/* Fixed ViewBox SVG to prevent truncation */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r={radius} 
                      className="stroke-slate-800" 
                      strokeWidth="6" 
                      fill="transparent" 
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="stroke-cyan-400"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute font-sans text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="mt-4 font-sans font-bold text-xs sm:text-sm text-slate-300 tracking-widest uppercase">
                  {skill.name}
                </h3>
              </motion.div>
            )
          })}
        </div>

        {/* ROW 2: THE COMPACT COMPLEMENTARY BARS (WRITTEN PERCENTAGE REMOVED) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/20 backdrop-blur-md border border-white/5 flex flex-col gap-6">
          {supportiveBarSkills.map((skill, index) => (
            <div key={index} className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6">
              
              {/* Text Label */}
              <span className="font-sans font-bold text-xs sm:text-sm text-slate-400 tracking-wider w-44 shrink-0">
                {skill.name}
              </span>

              {/* Progress Track */}
              <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-white/5 flex items-center">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.05 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills