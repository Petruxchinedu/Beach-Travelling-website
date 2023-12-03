import React from "react";
import heroVideo from "../assets/beachVid.mp4";
import { BiSearch } from "react-icons/bi";


const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={heroVideo}
        loop
        autoPlay
        muted
      />
      <div className=" absolute w-full h-full top-0 left-0 bg-gray-900/30">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white">
          <h1>First Class Travel</h1>
          <h1 className="py-3">Top 1% Locations Worldwide</h1>
          <form className="flex w-full justify-between items-center max-w-[700px] mx-auto border p-1 rounded-md text-black bg-gray-100/90">
            <div>
              <input className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none " type="text" placeholder="Search Destination" />
            </div>
            <div>
              <button><BiSearch size={20}/></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
