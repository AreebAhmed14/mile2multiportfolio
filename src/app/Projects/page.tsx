import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Caveat_Brush} from "next/font/google"

const caveatBrush = Caveat_Brush({
    weight: ["400"],
    style: "normal",
    // variant: "regular",
    subsets: ["latin"],
  
})

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex justify-center items-center border-b-[0.5rem] border-b-amber-200 flex-col bg-yellow-800 w-full"
    >
      <center>
        <h1 className={`text-5xl max-[400px]:text-4xl font-bold ${caveatBrush.className} text-white font-sans m-5`}>
          PRO<span className="text-yellow-400">JECTS</span>
        </h1>
      </center>

      <div className="w-full flex justify-around items-center max-[768px]:flex-col max-[1400px]:w-[100%]">
        <Link href={"https://areebcalc.netlify.app/"} target="_blank">
          <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[70vh] max-[1400px]:w-[20rem] border-yellow-900 shadow-2xl flex hover:scale-[0.9] transition-all duration-[1s] items-center overflow-hidden flex-col rounded-[2rem] my-7">
            <div className="w-full h-full overflow-hidden bg-cyan-950">
              <Image
                src={"/static/calc.jpg"}
                alt=""
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            {/* <button className='m-10 p-3 hover:scale-110 transition-all duration-[1s] bg-slate-950 text-amber-950 font-bold font-sans rounded-[1rem] text-xl'>Weather traker</button> */}
          </div>
        </Link>
        <Link href={"https://areebixweather.netlify.app/"} target="_blank">
          <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[70vh] max-[1400px]:w-[20rem] border-yellow-900 shadow-2xl flex hover:scale-[0.9] transition-all duration-[1s] items-center overflow-hidden flex-col bg-red-700 rounded-[2rem] my-7">
            <div className="w-full h-full overflow-hidden bg-cyan-950">
              <Image
                src={"/static/weather.jpg"}
                alt=""
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            {/* <button className='m-10 p-3 hover:scale-110 transition-all duration-[1s] bg-slate-950 text-amber-950 font-bold font-sans rounded-[1rem] text-xl'>Weather traker</button> */}
          </div>
        </Link>
        <Link href={"https://areebixtable.netlify.app/"} target="_blank">
          <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[70vh] max-[1400px]:w-[20rem] border-yellow-900 shadow-2xl flex hover:scale-[0.9] transition-all duration-[1s] items-center overflow-hidden flex-col bg-red-700 rounded-[2rem] my-7">
            <div className="w-full h-full overflow-hidden bg-cyan-950">
              <Image
                src={"/static/table.jpg"}
                alt=""
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            {/* <button className='m-10 p-3 hover:scale-110 transition-all duration-[1s] bg-slate-950 text-amber-950 font-bold font-sans rounded-[1rem] text-xl'>Weather traker</button> */}
          </div>
        </Link>
      </div>

      <div className="w-full flex justify-around items-center max-[768px]:flex-col max-[1400px]:w-[100%]">
        <Link href={"https://areebixbeat.netlify.app/"} target="_blank">
          <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[70vh] max-[1400px]:w-[20rem] border-yellow-900 shadow-2xl flex hover:scale-[0.9] transition-all duration-[1s] items-center overflow-hidden flex-col bg-red-700 rounded-[2rem] my-7">
            <div className="w-full h-full overflow-hidden bg-cyan-950">
              <Image
                src={"/static/music.jpg"}
                alt=""
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            {/* <button className='m-10 p-3 hover:scale-110 transition-all duration-[1s] bg-slate-950 text-amber-950 font-bold font-sans rounded-[1rem] text-xl'>Weather traker</button> */}
          </div>
        </Link>
        <Link href={"https://tictapper.netlify.app/"} target="_blank">
          <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[70vh] max-[1400px]:w-[20rem] border-yellow-900 shadow-2xl flex hover:scale-[0.9] transition-all duration-[1s] items-center overflow-hidden flex-col bg-red-700 rounded-[2rem] my-7">
            <div className="w-full h-full overflow-hidden bg-cyan-950">
              <Image
                src={"/static/tic.jpg"}
                alt=""
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            {/* <button className='m-10 p-3 hover:scale-110 transition-all duration-[1s] bg-slate-950 text-amber-950 font-bold font-sans rounded-[1rem] text-xl'>Weather traker</button> */}
          </div>
        </Link>
        <Link href={"https://areebixexpense.netlify.app/"} target="_blank">
          <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[70vh] max-[1400px]:w-[20rem] border-yellow-900 shadow-2xl flex hover:scale-[0.9] transition-all duration-[1s] items-center overflow-hidden flex-col bg-red-700 rounded-[2rem] my-7">
            <div className="w-full h-full overflow-hidden bg-cyan-950">
              <Image
                src={"/static/expanse.jpg"}
                alt=""
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            {/* <button className='m-10 p-3 hover:scale-110 transition-all duration-[1s] bg-slate-950 text-amber-950 font-bold font-sans rounded-[1rem] text-xl'>Weather traker</button> */}
          </div>
        </Link>
      </div>

      <div className="w-full flex justify-around items-center max-[768px]:flex-col max-[1400px]:w-[100%]">
        <Link href={"https://wingseat.vercel.app/"} target="_blank">
          <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black border-[0rem] max-[400px]:w-[18rem] max-[400px]:h-[70vh] max-[1400px]:w-[20rem] border-yellow-90 shadow-2xl flex hover:scale-[0.9] transition-all duration-[1s] items-center overflow-hidden flex-col bg-red-700 rounded-[2rem] my-7">
            <div className="w-full h-full overflow-hidden bg-cyan-950">
              <Image
                src={"/static/wing.jpg"}
                alt=""
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            {/* <button className='m-10 p-3 hover:scale-110 transition-all duration-[1s] bg-slate-950 text-amber-950 font-bold font-sans rounded-[1rem] text-xl'>Weather traker</button> */}
          </div>
        </Link>
        <Link href={"https://aspire-academy-theta.vercel.app/"} target="_blank">
          <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black border-[0rem] max-[400px]:w-[18rem] max-[400px]:h-[70vh] max-[1400px]:w-[20rem] border-yellow-90 shadow-2xl flex hover:scale-[0.9] transition-all duration-[1s] items-center overflow-hidden flex-col bg-red-700 rounded-[2rem] my-7">
            <div className="w-full h-full overflow-hidden bg-cyan-950">
              <Image
                src={"/static/edu.jpg"}
                alt=""
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            {/* <button className='m-10 p-3 hover:scale-110 transition-all duration-[1s] bg-slate-950 text-amber-950 font-bold font-sans rounded-[1rem] text-xl'>Weather traker</button> */}
          </div>
        </Link>
        <Link href={"https://resuminator.netlify.app/"} target="_blank">
          <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black border-[0rem] max-[400px]:w-[18rem] max-[400px]:h-[70vh] max-[1400px]:w-[20rem] border-yellow-90 shadow-2xl flex hover:scale-[0.9] transition-all duration-[1s] items-center overflow-hidden flex-col bg-red-700 rounded-[2rem] my-7">
            <div className="w-full h-full overflow-hidden bg-cyan-950">
              <Image
                src={"/static/cv.jpg"}
                alt=""
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            {/* <button className='m-10 p-3 hover:scale-110 transition-all duration-[1s] bg-slate-950 text-amber-950 font-bold font-sans rounded-[1rem] text-xl'>Weather traker</button> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
