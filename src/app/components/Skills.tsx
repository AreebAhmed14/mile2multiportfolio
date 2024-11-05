import React from 'react'
import {Caveat_Brush} from "next/font/google"

const caveatBrush = Caveat_Brush({
    weight: ["400"],
    style: "normal",
    // variant: "regular",
    subsets: ["latin"],
  
})

const Skills = () => {
  return (
    <div id='skills' className='w-full flex bg-yellow-800 justify-center border-b-[0.5rem] border-b-amber-200 items-center flex-col'>
      <h1 className={` ${caveatBrush.className} text-5xl font-bold text-white max-[400px]:text-4xl m-5`}>SKI<span className='text-yellow-400'>LLS</span></h1>

      <div className='w-[75%]'>
      <h1 className='mt-4 text-4xl font-bold font-sans text-white max-[650px]:text-3xl max-[400px]:text-2xl max-[400px]:mt-2'>HTML</h1>
      </div>
      <div className='w-[80%] h-[10vh] m-4 bg-gray-400 overflow-hidden border-[0.5rem] max-[850px]:border-[0.6rem] max-[450px]:h-[4rem] max-[450px]:w-[85%] border-gray-400 rounded-[3rem]'>
        <div className='h-full w-[90%] bg-yellow-400'></div>
      </div>

      <div className='w-[75%]'>
      <h1 className='mt-4 text-4xl font-bold font-sans text-white max-[650px]:text-3xl max-[400px]:text-2xl max-[400px]:mt-2'>CSS</h1>
      </div>
      <div className='w-[80%] h-[10vh] m-4 bg-gray-400 overflow-hidden border-[0.5rem] max-[850px]:border-[0.6rem] max-[450px]:h-[4rem] max-[450px]:w-[85%] border-gray-400 rounded-[3rem]'>
        <div className='h-full w-[75%] bg-yellow-400'></div>
      </div>

      <div className='w-[75%]'>
      <h1 className='mt-4 text-4xl font-bold font-sans text-white max-[650px]:text-3xl max-[400px]:text-2xl max-[400px]:mt-2'>JAVASCRIPT</h1>
      </div>
      <div className='w-[80%] h-[10vh] m-4 bg-gray-400 overflow-hidden border-[0.5rem] max-[850px]:border-[0.6rem] max-[450px]:h-[4rem] max-[450px]:w-[85%] border-gray-400 rounded-[3rem]'>
        <div className='h-full w-[70%] bg-yellow-400'></div>
      </div>

      <div className='w-[75%]'>
      <h1 className='mt-4 text-4xl font-bold font-sans text-white max-[650px]:text-3xl max-[400px]:text-2xl max-[400px]:mt-2'>WORD PRESS</h1>
      </div>
      <div className='w-[80%] h-[10vh] m-4 bg-gray-400 overflow-hidden border-[0.5rem] max-[850px]:border-[0.6rem] max-[450px]:h-[4rem] max-[450px]:w-[85%] border-gray-400 rounded-[3rem]'>
        <div className='h-full w-[78%] bg-yellow-400'></div>
      </div>

      <div className='w-[75%]'>
      <h1 className='mt-4 text-4xl font-bold font-sans text-white max-[650px]:text-3xl max-[400px]:text-2xl max-[400px]:mt-2'>NEXT JS</h1>
      </div>
      <div className='w-[80%] h-[10vh] m-4 bg-gray-400 overflow-hidden border-[0.5rem] max-[850px]:border-[0.6rem] max-[450px]:h-[4rem] max-[450px]:w-[85%] border-gray-400 rounded-[3rem]'>
        <div className='h-full w-[60%] bg-yellow-400'></div>
      </div>

      <div className='w-[75%]'>
      <h1 className='mt-4 text-4xl font-bold font-sans text-white max-[650px]:text-3xl max-[400px]:text-2xl max-[400px]:mt-2'>TAILWIND CSS</h1>
      </div>
      <div className='w-[80%] h-[10vh] m-4 bg-gray-400 overflow-hidden border-[0.5rem] max-[850px]:border-[0.6rem] max-[450px]:h-[4rem] max-[450px]:w-[85%] border-gray-400 rounded-[3rem]'>
        <div className='h-full w-[65%] bg-yellow-400'></div>
      </div>

      <div className='w-[75%]'>
      <h1 className='mt-4 text-4xl font-bold font-sans text-white max-[650px]:text-3xl max-[400px]:text-2xl max-[400px]:mt-2'>MS OFFICE</h1>
      </div>
      <div className='w-[80%] h-[10vh] m-4 bg-gray-400 overflow-hidden border-[0.5rem] max-[850px]:border-[0.6rem] max-[450px]:h-[4rem] max-[450px]:w-[85%] border-gray-400 rounded-[3rem]'>
        <div className='h-full w-[80%] bg-yellow-400'></div>
      </div>
      <div className='w-[75%]'>
      <h1 className='mt-4 text-4xl font-bold font-sans text-white max-[650px]:text-3xl max-[400px]:text-2xl max-[400px]:mt-2'>GIT / GITHUB</h1>
      </div>
      <div className='w-[80%] mb-10 h-[10vh] m-4 bg-gray-400 overflow-hidden border-[0.5rem] max-[850px]:border-[0.6rem] max-[450px]:h-[4rem] max-[450px]:w-[85%] border-gray-400 rounded-[3rem]'>
        <div className='h-full w-[70%] bg-yellow-400'></div>
      </div>


      

    </div>
  )
}

export default Skills
