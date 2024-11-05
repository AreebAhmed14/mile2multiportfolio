import React from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";
import Image from "next/image";
import {Caveat} from "next/font/google"
import {Caveat_Brush} from "next/font/google"
import Link from "next/link";
// import mycv from "../public/mycv.pdf/"

const caveat = Caveat({
  subsets: ["latin"],
});

const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  weight:["400"]
});
const Hero = () => {
  return (
    <div className={`w-full h-[70vh] bg-yellow-800 flex max-[850px]:flex-col-reverse max-[850px]:h-auto justify-around items-center border-b-[0.5rem] border-b-amber-200`}>
      <div className="flex justify-center items-center max-[850px]:mb-5 max-[400px]:h-auto flex-col h-[auto]">
        <h1 className={`text-[4rem] max-[1100px]:text-[3.5rem] max-[400px]:text-[2.2rem] max-[480px]:text-[2.5rem] max-[930px]:text-[3rem] font-bold text-white ${caveat.className}`}>
         <span className="text-yellow-400">HI</span> ! I AM
        </h1>
        <h1 className={`text-[4rem] max-[1100px]:text-[3.5rem] max-[400px]:text-[2.2rem] max-[480px]:text-[2.5rem] max-[930px]:text-[3rem] font-bold text-white ${caveat.className}`}>
          <center>
          MUHAMMAD <span className="text-yellow-400">AREEB</span>
          </center>
        </h1>
        <div className="w-full flex items-center justify-center">
          <Link
            href={"https://www.linkedin.com/in/mohammad-areeb-856a94315/"}
            target="_blank"
          >
            <RxLinkedinLogo className="text-[2.5rem] hover:text-yellow-400 max-[400px]:text-[2.2rem] m-5 text-white" />
          </Link>
          <Link href={"https://github.com/AreebAhmed14"} target="_blank">
            <FaSquareGithub className="text-[2.5rem] hover:text-yellow-400 max-[400px]:text-[2.2rem] m-5 text-white" />
          </Link>
          <Link href={"https://www.instagram.com/areeb_ahmed549/"} target="_blank">
            <AiFillInstagram className="text-[2.5rem] hover:text-yellow-400 max-[400px]:text-[2.2rem] m-5 text-white" />
          </Link>
        </div>
        <Link href="/mycv.pdf" target="_blank">
          <button className={`bg-yellow-400 ${caveatBrush.className} text-[1.5rem] p-2 m-3 mb-7 max-[400px]:text-[0.9rem] shadow-[5rem] rounded-[0.5rem] border-none focus:outline-none text-white hover:scale-110 transition-all duration-700 font-sans font-bold`}>
            DOWNLOAD CV
          </button>
        </Link>
      </div>
      <div className="flex justify-center flex-col max-[850px]:m-7 max-[850px]:w-[25rem] max-[850px]:h-[70vh] h-[62vh] w-[25rem] max-[1100px]:w-[22rem] max-[930px]:w-[20rem] max-[480px]:w-[20rem] shadow-black max-[480px]:h-[65vh] border-[0.5rem] max-[400px]:w-[auto] max-[400px]:h-[auto] overflow-hidden border-yellow-800 shadow-2xl rounded-[50%] ">
        <Image
          src={"/static/newme.jpg"}
          alt=""
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
