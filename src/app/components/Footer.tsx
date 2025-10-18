import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import {Caveat_Brush} from "next/font/google"
const headerfont = Caveat_Brush({
  subsets:["latin"],
  weight:["400"]
})

const Footer = () => {
  return (
    <div className="w-full h-[40vh] flex justify-around items-center bg-yellow-800 max-[900px]:flex-col max-[1150px]:h-auto">
      <div>
        <h1 className={`text-5xl max-[1150px]:text-4xl max-[700px]:text-5xl max-[900px]:text-6xl max-[560px]:text-4xl max-[900px]:m-7 ${headerfont.className} font-bold text-yellow-400`}>
        <span className="text-white">AR</span>EEB<span className="text-white">IX IN</span>FO
          <p className=" text-xl font-sans font-bold max-[560px]:text-[1rem] text-white">
          Simplicity Meets <span className="text-yellow-400">Creativity</span>
            </p>
        </h1>
      </div>

      <div className="flex flex-col max-[900px]:m-5">
        <div className="flex items-center">
          <MdEmail className="text-3xl max-[1150px]:text-[1.5rem] text-white mr-2 max-[560px]:text-[1.3rem] max-[900px]:text-[2rem] font-bold" />
          <p className="text-2xl max-[1150px]:text-[1.3rem] text-yellow-400 max-[700px]:text-[1.2rem] max-[900px]:text-[1.5rem] max-[560px]:text-[1rem] max-[560px]:m-0 m-2 font-sans font-bold">
            areeb<span className="text-white">farooq549</span>@gmail.<span className="text-white">com</span>
          </p>
        </div>

        <div className="flex items-center">
          <TbWorld className="text-3xl max-[1150px]:text-[1.5rem] text-white mr-2 max-[560px]:text-[1.3rem] max-[900px]:text-[2rem] font-bold" />
          <p className="text-2xl max-[1150px]:text-[1.3rem] text-yellow-400 max-[700px]:text-[1.2rem] max-[900px]:text-[1.5rem] max-[560px]:text-[1rem] max-[560px]:m-0 m-2 font-sans font-bold">areeb<span className="text-white">ix-point</span>.vercel.<span className="text-white">app</span></p>
        </div>

        <div className="flex items-center">
          <RiWhatsappFill className="text-3xl max-[1150px]:text-[1.5rem] text-white mr-2 max-[560px]:text-[1.3rem] max-[900px]:text-[2rem] font-bold" />
          <p className="text-2xl max-[1150px]:text-[1.3rem] text-yellow-400 max-[700px]:text-[1.2rem] max-[900px]:text-[1.5rem] max-[560px]:text-[1rem] max-[560px]:m-0 m-2 font-sans font-bold">037<span className="text-white">09180</span>147</p>
        </div>
      </div>

        <div className="flex flex-col justify-center items-center">
            {/* <h1 className="text-2xl font-sans font-bold text-orange-500">I HOPE YOU KNOW ME WELL NOW</h1> */}
            <div className={`w-[25rem] max-[1150px]:w-[19rem] max-[700px]:text-[1.7rem] max-[560px]:text-[1.2rem] text-white max-[560px]:w-[90vw] max-[560px]:my-4 max-[900px]:w-[75vw] max-[900px]:my-7 max-[900px]:text-[1.5rem] m-1 text-xl font-bold ${headerfont.className}`}><center><p>I hope you’ve gotten to know me better through my work. <span className="max-[390px]:hidden"> Your support means everything, and I look forward to sharing more with you.</span> Let’s continue this journey together—stay connected for more updates and exciting new projects.</p></center>
            </div>
        </div>

    </div>
  );
};

export default Footer;
