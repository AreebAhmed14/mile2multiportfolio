import React from 'react'
import {Caveat_Brush} from "next/font/google"

const caveatBrush = Caveat_Brush({
    weight: ["400"],
    style: "normal",
    // variant: "regular",
    subsets: ["latin"],
  
})
const Education = () => {
  return (
    <div id='education' className='flex justify-center flex-col border-t-[0.5rem] border-b-[0.5rem] bg-yellow-800 items-center border-b-amber-200 border-t-amber-200'>
      <h1 className={`text-5xl font-sans m-5 font-bold text-white ${caveatBrush.className} max-[400px]:text-4xl`}>EDUC<span className='text-yellow-400'>ATION</span></h1>

    <div className='w-[90%] m-10'>
      <h1 className='text-3xl  font-bold font-sans text-yellow-400 max-[500px]:text-2xl'>MATRICUATION</h1>
      <p className='text-[1.8rem] max-[850px]:text-[1.5rem] text-white font-bold font-sans max-[750px]:text-xl max-[500px]:text-[1.2rem] max-[400px]:text-[1.1rem]'>I completed my matriculation in 2023 with a score of 75%. This was a key phase in my education where I developed a foundation in core subjects such as maths and chemistry which prepared me for advanced studies.</p>
      </div>

      <div className='w-[90%] m-5'>
      <h1 className='text-3xl  font-bold font-sans text-yellow-400 max-[500px]:text-2xl'>INTERMEDIATE</h1>
      <p className='text-[1.8rem] max-[850px]:text-[1.5rem] text-white font-bold font-sans max-[750px]:text-xl max-[500px]:text-[1.2rem] max-[400px]:text-[1.1rem]'>I have successfully completed my second year of intermediate studies with a 77% score. During this phase, I focused on strengthening my understanding of core subjects like Physics, Chemistry, and Mathematics while also exploring my passion for technology and computer science.</p>
      </div>

      <div className='w-[90%] m-5'>
      <h1 className='text-3xl  font-bold font-sans text-yellow-400 max-[500px]:text-2xl'>CIT</h1>
      <p className='text-[1.8rem] max-[850px]:text-[1.5rem] text-white font-bold font-sans max-[750px]:text-xl max-[500px]:text-[1.2rem] max-[400px]:text-[1.1rem]'>In parallel with my academic studies I have also obtained a certification in Information Technology (CIT). This certification has equipped me with practical skills in software applications enhancing my ability to work in the digital and tech world.</p>
      </div>

      <div className='w-[90%] m-5'>
      <h1 className='text-3xl  font-bold font-sans text-yellow-400 max-[500px]:text-2xl'>GEN AI</h1>
      <p className='text-[1.8rem] max-[850px]:text-[1.5rem] text-white font-bold font-sans max-[750px]:text-xl max-[500px]:text-[1.2rem] max-[400px]:text-[1.1rem]'>As part of my ongoing professional development I am also a student of Generative AI under the Governor Sindh IT Initiative. This program has provided me a understanding of AI technologies<span className='max-[400px]:hidden'>particularly in creating generative models</span>  and exploring applications in various fields.</p>
      </div>

      <div className='w-[90%] m-5'>
      <h1 className='text-3xl  font-bold font-sans text-yellow-400 max-[500px]:text-2xl'>{`BACHELOR'S`}</h1>
      <p className='text-[1.8rem] max-[850px]:text-[1.5rem] text-white font-bold font-sans max-[750px]:text-xl max-[500px]:text-[1.2rem] max-[400px]:text-[1.1rem]'>I am now pursuing a degree in Chemical Engineering at NED University of Engineering and Technology. This new chapter marks the beginning of my journey into a field that combines scientific principles with real-world applications.</p>
      </div>


    </div>
  )
}

export default Education
