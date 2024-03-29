import React from 'react';
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div>
       <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition:"50%", backgroundImage: "url(https://c0.wallpaperflare.com/preview/9/666/428/anniversary-beautiful-birthday-birthday-cake.jpg)",  height: "600px"}}>
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}}>
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 md:px-12">
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"><Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Cake Delights Welcomes You")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("Experience the magic of dessert<br /><span>with every bite</span>")
  .start();
  }}
  /></h1>
                  <a className="inline-block px-7 py-3 mr-1.5 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#shop" role="button">Shop Now</a>
                  {/* <a className="inline-block px-7 py-3 border-2 border-transparent bg-transparent text-white font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a> */}
                </div>
              </div>
            </div>
          </div>
{/* 
          <div className="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10" style={{height: "50px", transform: "scale(2)", transformOrigin: "top center", color: "#fff"}}>
            <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z" fill="currentColor"></path>
            </svg>
          </div> */}
    </div>
  )
}
