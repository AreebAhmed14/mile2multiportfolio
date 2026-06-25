"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Caveat_Brush } from "next/font/google"

const caveatBrush = Caveat_Brush({
  weight: ["400"],
  subsets: ["latin"],
})

const projects = [
  {
    title: "Jeeuny AI",
    desc: "An intelligent AI chatbot designed for interactive conversations",
    link: "https://jeeuny-ai.vercel.app",
    color: "from-blue-600 to-indigo-500",
  },
  {
    title: "Jeeuty Voice",
    desc: "An advanced voice-activated AI agent for seamless voice commands",
    link: "https://jeeuty-voice.vercel.app",
    color: "from-purple-600 to-indigo-500",
  },
  {
    title: "Resuminator",
    desc: "Takes user information and dynamically generates professional CVs",
    link: "https://resuminator.netlify.app",
    color: "from-teal-600 to-cyan-500",
  },
  {
    title: "Shout Unit Converter",
    desc: "A smart application to convert different unit values instantly",
    link: "https://shoutunitconvert.streamlit.app",
    color: "from-orange-600 to-amber-500",
  },
  {
    title: "Pic Extent Converter",
    desc: "Effortlessly changes and converts picture extensions and formats",
    link: "https://pic-exten-convert.streamlit.app",
    color: "from-emerald-600 to-green-500",
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen py-20 px-6 flex flex-col items-center relative"
      style={{ background: "linear-gradient(to right, #020617, #1e293b, #020617)" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-5xl font-bold mb-12 text-white relative z-10 ${caveatBrush.className} max-[400px]:text-4xl`}
      >
        MY <span className="text-amber-400">PROJECTS</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-[1400px]">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative group rounded-2xl"
          >
            {/* Animated Glow Effect (Behind the card - z-0) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500 rounded-2xl z-0"></div>

            {/* Main Content Card (Brought to front - z-10) */}
            <div className={`relative z-10 h-full flex flex-col justify-between p-6 rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${proj.color} hover:scale-105 transition-all duration-500`}>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {proj.title}
                </h2>
                <p className="text-white/80 mb-5 group-hover:text-white transition-colors">{proj.desc}</p>
              </div>
              
              <Link
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-4 py-2 rounded-lg bg-amber-400 text-black font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Visit
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects