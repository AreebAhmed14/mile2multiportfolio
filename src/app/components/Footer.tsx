"use client"

import React from "react"
import { motion } from "framer-motion"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail as EmailIcon } from "react-icons/md"
import { TbWorld } from "react-icons/tb"

const Footer = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer className="w-full bg-[#020617] border-t border-white/5 py-16 relative overflow-hidden">
      
      {/* Background Micro Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 px-6 md:px-12">

        {/* Logo & Academic/Tech Tagline Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center md:text-left"
        >
          <h1 className="text-2xl font-extrabold tracking-wider text-white font-sans">
            M<span className="text-cyan-400">A</span>F
          </h1>
          <p className="text-sm mt-2 font-medium text-slate-400 font-sans max-w-xs leading-relaxed">
            Engineering Knowledge, <span className="text-cyan-400">Automating Innovation</span>
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="flex flex-col gap-4 w-full md:w-auto max-w-sm"
        >
          {[
            {
              icon: <EmailIcon />,
              text: "areebfarooq549@gmail.com",
              href: "mailto:areebfarooq549@gmail.com"
            },
            {
              icon: <TbWorld />,
              text: "areebix-point.vercel.app",
              href: "https://areebix-point.vercel.app"
            },
            {
              icon: <RiWhatsappFill className="hover:text-green-400 transition-colors" />,
              text: "03709180147",
              href: "https://wa.me/923709180147"
            },
          ].map((contact, index) => (
            <motion.a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              whileHover={{ x: 4 }}
              className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-cyan-400 transition-colors group cursor-pointer"
            >
              <span className="text-xl text-slate-400 group-hover:text-cyan-400 transition-colors">{contact.icon}</span>
              <p className="text-sm font-semibold font-sans tracking-wide">
                {contact.text}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Professional Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-slate-400 text-sm max-w-sm text-center md:text-left font-medium font-sans leading-relaxed"
        >
          <p>
            Thank you for exploring my digital workspace. Let&apos;s build intelligent solutions and engineer advanced applications together.
          </p>
        </motion.div>
      </div>

      {/* Copyright Line */}
      <div className="mt-16 text-center text-xs font-mono text-slate-600 tracking-widest border-t border-white/[0.03] pt-6 max-w-7xl mx-auto px-6">
        © {new Date().getFullYear()} MAF — ARCHITECTED WITH PRECISION
      </div>
    </footer>
  )
}

export default Footer