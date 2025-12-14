"use client"

import React from "react"
import { motion } from "framer-motion"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import { TbWorld } from "react-icons/tb"
import { Caveat_Brush } from "next/font/google"

const headerfont = Caveat_Brush({
  subsets: ["latin"],
  weight: ["400"],
})

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Footer = () => {
  return (
    <footer
      className="w-full bg-gradient-to-b from-[#020617] to-[#1e293b]
      border-t-[3px] border-amber-400 py-16"
    >
      <div className="max-w-7xl mx-auto flex justify-around items-center
      max-[900px]:flex-col gap-12 px-6">

        {/* Logo Section */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className={`text-5xl max-[900px]:text-6xl max-[560px]:text-4xl
            font-bold text-amber-400 ${headerfont.className}`}
          >
            <span className="text-white">AR</span>EEB
            <span className="text-white">IX IN</span>FO
          </h1>
          <p className="text-lg mt-2 font-bold text-gray-200">
            Simplicity Meets <span className="text-amber-400">Creativity</span>
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          {[
            {
              icon: <MdEmail />,
              text: <>areeb<span className="text-white">farooq549</span>@gmail.<span className="text-white">com</span></>,
            },
            {
              icon: <TbWorld />,
              text: <>areeb<span className="text-white">ix-point</span>.vercel.<span className="text-white">app</span></>,
            },
            {
              icon: <RiWhatsappFill />,
              text: <>037<span className="text-white">09180</span>147</>,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 6 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <span className="text-3xl text-white">{item.icon}</span>
              <p className="text-xl text-amber-400 font-bold font-sans">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Message */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-white text-xl max-w-md text-center font-bold ${headerfont.className}`}
        >
          <p>
            I hope you’ve gotten to know me better through my work.
            <span className="max-[390px]:hidden">
              {" "}Your support means everything, and I look forward to sharing more with you.
            </span>
            <br />
            Let’s continue this journey together.
          </p>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Areebix Info — All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
