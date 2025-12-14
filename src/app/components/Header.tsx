"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { TiThMenuOutline } from "react-icons/ti"
import { ImCross } from "react-icons/im"
import { Caveat, Caveat_Brush } from "next/font/google"

const headerfont = Caveat({ subsets: ["latin"] })
const navfont = Caveat_Brush({ subsets: ["latin"], weight: ["400"] })

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      id="home"
      className="w-full h-[15vh] flex justify-between items-center px-5
      bg-gradient-to-r from-[#020617] via-[#1e293b] to-[#020617]
      border-b-[3px] border-amber-400 sticky top-0 z-50"
    >
      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-[2.5rem] max-[809px]:text-[2.1rem] font-bold text-white ${headerfont.className}`}
      >
        <span className="text-amber-400">AR</span>EEB
        <span className="text-amber-400">IX IN</span>FO
      </motion.h1>

      {/* Desktop Nav */}
      <ul className="flex gap-8 max-[790px]:hidden">
        {["Home", "About", "Education", "Skills", "Projects"].map(
          (item, index) => (
            <Link
              key={index}
              href={item === "Education" ? "/Education" : item === "Projects" ? "/Projects" : "/"}
            >
              <motion.li
                whileHover={{ scale: 1.15 }}
                className={`relative text-white font-bold text-[1.4rem] cursor-pointer ${headerfont.className}`}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            </Link>
          )
        )}
      </ul>

      {/* Menu Icon */}
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(true)}
        className="hidden max-[790px]:block cursor-pointer text-white"
      >
        <TiThMenuOutline className="text-[2.2rem]" />
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen
            bg-gradient-to-b from-[#020617] to-[#1e293b]"
          >
            <div className="h-[15vh] flex justify-end items-center px-6 border-b border-amber-400">
              <motion.div
                whileHover={{ rotate: 90 }}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
              >
                <ImCross className="text-2xl text-white" />
              </motion.div>
            </div>

            <ul className="flex flex-col items-center justify-center h-[85vh] gap-10">
              {["HOME", "ABOUT", "EDUCATION", "SKILLS", "PROJECTS"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-3xl text-amber-400 font-bold cursor-pointer ${navfont.className}`}
                  >
                    <Link
                      href={
                        item === "EDUCATION"
                          ? "/Education"
                          : item === "PROJECTS"
                          ? "/Projects"
                          : "/"
                      }
                    >
                      {item}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
