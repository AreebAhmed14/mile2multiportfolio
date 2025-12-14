"use client"
import React from "react"
import { Caveat_Brush } from "next/font/google"
import { motion } from "framer-motion"

const caveatBrush = Caveat_Brush({
  weight: ["400"],
  subsets: ["latin"],
})

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] border-y-[6px] border-amber-400 py-20 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`text-5xl font-bold text-white mb-14 ${caveatBrush.className} max-[400px]:text-4xl`}
      >
        EDUC<span className="text-amber-400">ATION</span>
      </motion.h1>

      {/* Cards */}
      <div className="w-[90%] max-w-5xl space-y-10">
        {[
          {
            title: "MATRICULATION",
            text:
              "I completed my matriculation in 2023 with a score of 75%. This phase built my foundation in maths and chemistry preparing me for advanced studies.",
          },
          {
            title: "INTERMEDIATE",
            text:
              "I completed my intermediate with 77%. During this phase I strengthened my understanding of Physics Chemistry and Mathematics while discovering my passion for technology.",
          },
          {
            title: "CIT",
            text:
              "Alongside academics I earned a Certification in Information Technology. It strengthened my practical software skills and digital problem solving ability.",
          },
          {
            title: "GEN AI",
            text:
              "I am a student of Generative AI under the Governor Sindh IT Initiative exploring modern AI tools and generative models for real world applications.",
          },
          {
            title: "BACHELOR'S",
            text:
              "Currently pursuing Chemical Engineering at NED University of Engineering and Technology marking the start of my professional engineering journey.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300"
          >
            <h2 className="text-3xl font-bold text-amber-400 mb-4 max-[500px]:text-2xl">
              {item.title}
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed font-medium max-[500px]:text-base">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
