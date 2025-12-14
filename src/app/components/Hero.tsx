"use client"

import React from "react"
import { RxLinkedinLogo } from "react-icons/rx"
import { AiFillInstagram } from "react-icons/ai"
import { FaSquareGithub } from "react-icons/fa6"
import Image from "next/image"
import { Caveat, Caveat_Brush } from "next/font/google"
import Link from "next/link"

const caveat = Caveat({
  subsets: ["latin"],
})

const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  weight: ["400"],
})

const Hero = () => {
  return (
    <section
      className="w-full
      bg-gradient-to-b from-[#020617] via-[#1e293b] to-[#020617]
      flex justify-around items-center
      max-[850px]:flex-col-reverse
      border-b-[6px] border-amber-400 px-6
      pt-10 pb-16" // <-- added bottom padding
    >
      {/* TEXT AREA */}
      <div className="flex flex-col items-center max-[850px]:mt-8">
        <h1
          className={`text-[4rem] max-[930px]:text-[3rem] max-[480px]:text-[2.5rem]
          font-bold text-white ${caveat.className}`}
        >
          <span className="text-amber-400">HI</span> ! I AM
        </h1>

        <h1
          className={`text-[4rem] max-[930px]:text-[3rem] max-[480px]:text-[2.5rem]
          font-bold text-white text-center ${caveat.className}`}
        >
          MUHAMMAD <span className="text-amber-400">AREEB</span>
        </h1>

        {/* SOCIAL ICONS */}
        <div className="flex mt-4">
          <Link
            href="https://www.linkedin.com/in/mohammad-areeb-856a94315/"
            target="_blank"
            className="m-5 text-[2.5rem] text-white hover:text-amber-400 transition-colors"
          >
            <RxLinkedinLogo />
          </Link>

          <Link
            href="https://github.com/AreebAhmed14"
            target="_blank"
            className="m-5 text-[2.5rem] text-white hover:text-amber-400 transition-colors"
          >
            <FaSquareGithub />
          </Link>

          <Link
            href="https://www.instagram.com/areeb_ahmed549/"
            target="_blank"
            className="m-5 text-[2.5rem] text-white hover:text-amber-400 transition-colors"
          >
            <AiFillInstagram />
          </Link>
        </div>

        {/* CV BUTTON */}
        <Link href="/mycv.pdf" target="_blank">
          <button
            className={`mt-6 px-6 py-3 rounded-xl text-white
            bg-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.4)]
            hover:shadow-[0_0_45px_rgba(251,191,36,0.6)]
            hover:scale-110 transition-all duration-300
            font-bold text-xl ${caveatBrush.className}`}
          >
            DOWNLOAD CV
          </button>
        </Link>
      </div>

      {/* IMAGE AREA */}
      <div
        className="relative flex justify-center items-center
        w-[25rem] h-[25rem]
        max-[930px]:w-[20rem] max-[930px]:h-[20rem]
        max-[480px]:w-[18rem] max-[480px]:h-[18rem]
        mt-10 max-[850px]:mt-14"
      >
        {/* GLOW RING */}
        <div
          className="absolute inset-0 rounded-full
          bg-gradient-to-tr from-amber-400 to-yellow-200
          blur-2xl opacity-40"
        ></div>

        {/* PERFECT ROUND IMAGE */}
        <div
          className="relative w-full h-full rounded-full
          overflow-hidden border-[6px] border-amber-400 shadow-2xl"
        >
          <Image
            src="/static/me.jpg"
            alt="Muhammad Areeb"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
