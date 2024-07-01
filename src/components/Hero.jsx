import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/assets/hero.jpg";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Hero = () => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    if (isBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">SOORAJ</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-3xl" src={profilepic} alt="Sooraj profile pic" />
          </div>
        </div>
      </div>
      <div className="fixed bottom-10 right-10">
        {isBottom ? (
          <FaArrowUp onClick={handleScroll} className="cursor-pointer text-2xl animate-bounce" />
        ) : (
          <FaArrowDown onClick={handleScroll} className="cursor-pointer text-2xl animate-bounce" />
        )}
      </div>
    </div>
  );
};

export default Hero;
