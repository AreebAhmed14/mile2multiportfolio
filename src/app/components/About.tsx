import React from 'react'
import {Caveat_Brush} from "next/font/google"

const caveatBrush = Caveat_Brush({
    weight: ["400"],
    style: "normal",
    // variant: "regular",
    subsets: ["latin"],
  
})

const About = () => {
  return (
    <div id='about' className='flex justify-center items-center flex-col w-full bg-yellow-800 border-b-[0.5rem] border-b-amber-200'>
        <h1 className={`text-5xl font-bold ${caveatBrush.className} max-[400px]:text-4xl text-white m-5`}>ABOUT<span className='text-yellow-400'> ME</span></h1>
      <center>
        <p className='text-[1.8rem] max-[850px]:text-[1.5rem] text-white w-[90%] m-3 font-sans font-bold max-[750px]:text-xl max-[570px]:text-[1.2rem] max-[400px]:text-[1.1rem] max-[400px]:'><span className='text-yellow-400'>&quot;</span>I am Areeb, a student of NED University of Engineering and Technology, pursuing a degree in Chemical Engineering. Alongside my studies, I’m an Agentic AI developer, web designer, and developer with a passion for building functional and visually engaging digital experiences.<span className='text-yellow-400'>&quot;</span>
    </p>
      </center>
      <center>
        <p className='text-[1.8rem] max-[850px]:text-[1.5rem] text-white w-[90%] m-5 mb-10 font-sans font-bold max-[750px]:text-xl max-[570px]:text-[1.2rem] max-[400px]:text-[1.1rem] max-[400px]:'><span className='text-yellow-400'>&quot;</span>
       Currently, I am diving deeper into modern technologies like TypeScript, Next.js, Python and Node.js to expand my skill set. My goal is to keep evolving in the tech space, stay ahead of trends, and contribute to innovative solutions.<span className='text-yellow-400'>&quot;</span></p>
      </center>
    </div>
  )
}

export default About
