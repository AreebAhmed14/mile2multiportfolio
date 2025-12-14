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
    title: "Calculator",
    desc: "A sleek, modern calculator built with JS & CSS",
    link: "https://areebcalc.netlify.app/",
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Weather Tracker",
    desc: "Real-time weather updates with API integration",
    link: "https://areebixweather.netlify.app/",
    color: "from-teal-600 to-cyan-400",
  },
  {
    title: "Table Project",
    desc: "Dynamic tables with sorting and filtering",
    link: "https://areebixtable.netlify.app/",
    color: "from-purple-600 to-pink-400",
  },
  {
    title: "Music Project",
    desc: "A simple music player interface with JS",
    link: "https://areebixbeat.netlify.app/",
    color: "from-orange-600 to-yellow-400",
  },
  {
    title: "Tic-Tapper",
    desc: "Fun interactive tic-tac-toe game",
    link: "https://tictapper.netlify.app/",
    color: "from-red-600 to-pink-400",
  },
  {
    title: "Expense Tracker",
    desc: "Track expenses with stylish UI",
    link: "https://areebixexpense.netlify.app/",
    color: "from-green-600 to-lime-400",
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
            className={`group relative flex flex-col justify-between p-6 rounded-2xl shadow-2xl overflow-hidden cursor-pointer bg-gradient-to-br ${proj.color} hover:scale-105 transition-all duration-500`}
          >
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
              {proj.title}
            </h2>
            <p className="text-white/80 mb-5 group-hover:text-white transition-colors">{proj.desc}</p>
            <Link
              href={proj.link}
              target="_blank"
              className="mt-auto self-start px-4 py-2 rounded-lg bg-amber-400 text-black font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Visit
            </Link>

            {/* Animated Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500 rounded-2xl"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
  