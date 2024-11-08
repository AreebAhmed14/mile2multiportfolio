"use client"
import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import {Caveat} from "next/font/google"
import {Caveat_Brush} from "next/font/google"
const headerfont = Caveat({
  subsets:["latin"],
  // weight:["400"]
})
const navfont = Caveat_Brush({
  subsets:["latin"],
  weight:["400"]
})

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    {
      if(isMenuOpen==false){
        setIsMenuOpen(true);
      }
      else{
        setIsMenuOpen(false);
      }
    }
  };
  function menuremove(){
    setIsMenuOpen(false);
  }

  return (
    <div
    id="home"
    className="w-full h-[15vh] flex justify-between items-center bg-yellow-800"
  >
    
    <h1 className={`ml-5 text-[2.5rem] max-[809px]:text-[2.1rem] max-[400px]:text-[2rem] max-[400px]:ml-3 max-[350px]:text-[1.8rem] font-sans text-white font-bold ${headerfont.className}`}>
     <span className="text-yellow-400">AR</span>EEB<span className="text-yellow-400">IX IN</span>FO
    </h1>
    <ul className="flex m-[1rem] max-[790px]:hidden">
      <Link href={"/"}>
        <li className={`m-5 ${headerfont.className} text-[1.6rem] transition-all hover:scale-[1.2] hover:text-yellow-300 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white`}>
          Home
        </li>
      </Link>
      <Link href={"/"}>
        <li className={`m-5 text-[1.6rem] transition-all hover:scale-[1.2] hover:text-yellow-300 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white ${headerfont.className}`}>
          About
        </li>
      </Link>
      <Link href={"/Education"}>
        <li className={`m-5 ${headerfont.className} text-[1.6rem] transition-all hover:scale-[1.2] hover:text-yellow-300 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white`}>
          Education
        </li>
      </Link>
      <Link href={"/"}>
        <li className={`m-5 ${headerfont.className} text-[1.6rem] transition-all hover:scale-[1.2] hover:text-yellow-300 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white`}>
          Skills
        </li>
      </Link>
      <Link href={"/Projects"}>
        <li className={`m-5 ${headerfont.className} text-[1.6rem] transition-all hover:scale-[1.2] hover:text-yellow-300 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white`}>
          Projects
        </li>
      </Link>
    </ul>

      
      <TiThMenuOutline 
      onClick={toggleMenu} 
      className="text-[2.2rem] font-bold hidden max-[790px]:block max-[400px]:text-[1.9rem] max-[350px]:text-[1.7rem] cursor-pointer mr-5 text-white"
    />

      <div className={`${isMenuOpen ? "block" : "hidden"} w-full h-[100vh] transition-all duration-[2s] bg-yellow-800 absolute top-0 left-0`}>
    <div className="w-full h-[15vh] flex justify-end items-center bg-yellow-800 bg-opacity-40 border-b-[0.3rem] border-yellow-400">
    <ImCross onClick={toggleMenu} className="mr-6 text-2xl text-white" />
    </div>
  
    <ul className="flex border-b-[0.3rem] border-yellow-400 shadow-2xl shadow-black justify-center items-center flex-col">

      <Link href={"/"}>
      <li onClick={menuremove} className={`w-full h-[15vh] flex justify-center items-center font-bold text-yellow-400 border-b-[0] border-white my-1 text-2xl ${navfont.className}`}>HOME</li>
      </Link>
      <Link href={"/"}>
      <li onClick={menuremove} className={`w-full h-[15vh] flex justify-center items-center font-bold text-yellow-400 border-b-[0] border-white my-1 text-2xl ${navfont.className}`}>ABOUT</li>
      </Link>
      <Link href={"/Education"}>
      <li onClick={menuremove} className={`w-full h-[15vh] flex justify-center items-center font-bold text-yellow-400 border-b-[0] border-white my-1 text-2xl ${navfont.className}`}>EDUCATION</li>
      </Link>
      <Link onClick={menuremove} href={"/"}>
      <li className={`w-full h-[15vh] flex justify-center items-center font-bold text-yellow-400 border-b-[0] border-white my-1 text-2xl ${navfont.className}`}>SKILLS</li>
      </Link>
      <Link onClick={menuremove} href={"/Projects"}>
      <li className={`w-full h-[15vh] flex justify-center items-center font-bold text-yellow-400 border-b-[0] border-white my-1 text-2xl ${navfont.className}`}>PROJECTS</li>
      </Link>
    </ul>
      </div>

    </div>
  );
};

export default Header;
