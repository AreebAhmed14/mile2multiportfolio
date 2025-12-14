"use client"

import React from "react"
import { Caveat_Brush } from "next/font/google"

const caveatBrush = Caveat_Brush({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
})

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center py-16 px-6 relative overflow-hidden border-b-[6px] border-amber-400"
      style={{
        background: "linear-gradient(to right, #020617, #1e293b, #020617)", // same dark gradient as Header/Hero
      }}
    >
      {/* subtle inner glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 100px 20px rgba(251,191,36,0.08)", // soft amber glow
          zIndex: 0,
          borderRadius: "1rem",
        }}
      ></div>

      <h1
        className={`text-5xl font-bold text-white mb-12 relative z-10 ${caveatBrush.className} max-[400px]:text-4xl`}
      >
        ABOUT<span className="text-amber-400"> ME</span>
      </h1>

      <p
        className="text-[1.8rem] max-[850px]:text-[1.5rem] max-[750px]:text-xl max-[570px]:text-[1.2rem] max-[400px]:text-[1.1rem] text-white w-[90%] mb-6 relative z-10 font-sans font-bold text-center"
      >
        <span className="text-amber-400">&quot;</span>
        I am Areeb, a student of NED University of Engineering and Technology, pursuing a degree in Chemical Engineering. Alongside my studies, I’m an Agentic AI developer, web designer, and developer with a passion for building functional and visually engaging digital experiences.
        <span className="text-amber-400">&quot;</span>
      </p>

      <p
        className="text-[1.8rem] max-[850px]:text-[1.5rem] max-[750px]:text-xl max-[570px]:text-[1.2rem] max-[400px]:text-[1.1rem] text-white w-[90%] mb-10 relative z-10 font-sans font-bold text-center"
      >
        <span className="text-amber-400">&quot;</span>
        Currently, I am diving deeper into modern technologies like TypeScript, Next.js, Python, and Node.js to expand my skill set. My goal is to keep evolving in the tech space, stay ahead of trends, and contribute to innovative solutions.
        <span className="text-amber-400">&quot;</span>
      </p>
    </section>
  )
}

export default About
