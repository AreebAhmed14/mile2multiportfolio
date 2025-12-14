"use client"

import React, { useEffect, useState } from "react"
import { Caveat_Brush } from "next/font/google"

const caveatBrush = Caveat_Brush({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
})

const Skills = () => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const skillData = [
    { name: "AENTIC AI", level: 60 },
    { name: "PYTHON", level: 80 },
    { name: "JAVASCRIPT", level: 70 },
    { name: "WORD PRESS", level: 65 },
    { name: "NEXT JS", level: 60 },
    { name: "WEB DEV", level: 85 },
    { name: "GIT / GITHUB", level: 70 },
  ]

  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center py-16 px-6 border-b-[6px] border-amber-400 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020617, #1e293b, #020617)",
      }}
    >
      <h1
        className={`text-5xl font-bold text-white max-[400px]:text-4xl mb-12 ${caveatBrush.className}`}
      >
        SKI<span className="text-amber-400">LLS</span>
      </h1>

      {skillData.map((skill, index) => (
        <div key={index} className="w-full max-w-[900px] mb-8">
          <h2 className="text-3xl max-[650px]:text-2xl max-[400px]:text-xl font-bold text-white mb-3">
            {skill.name}
          </h2>

          <div className="w-full h-[3.5rem] max-[450px]:h-[2.5rem] bg-gray-700 rounded-[3rem] overflow-hidden border-[3px] border-gray-600 shadow-inner relative">
            {/* Glow animation behind bar */}
            <div
              className={`absolute inset-0 rounded-[3rem] bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all duration-[1200ms] ease-out`}
              style={{ width: animate ? `${skill.level}%` : "0%" }}
            ></div>

            {/* Foreground progress bar */}
            <div
              className={`relative h-full rounded-[3rem] bg-amber-400 transition-all duration-[1200ms] ease-out`}
              style={{ width: animate ? `${skill.level}%` : "0%" }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills
