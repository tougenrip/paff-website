import React from 'react'
import HomeComponent from '../components/homeComponent/HomeComponent';

const Hero = () => {
    return (
      <div className="hero  font-Gilroy font-semibold text-white w-full align-middle transform-gpu">
          <div className="hero-body">
              <div className="container mx-auto">
                  <div className="relative justify-around grid lg:flex gap-5 h-[85vh] mt-20  p-6">
                      <div className="contents h-5/6 text-2xl md:text-3xl ">
                          <div className="transition relative ease-in-out delay-50 flex-1 lg:w-16 w-[85vw]  bg-slate-600 shadow-black shadow-md  rounded-2xl bg-Hero bg-[auto] hover:scale-110 hover:shadow-lg bg-center bg-no-repeat ">
                              <h2 className=' relative top-[38%] left-[12%] md:top-[43%] lg:top-[90%] '>VILLAGE</h2>
                          </div>
                          <div className="transition relative ease-in-out delay-50 flex-1 lg:w-16 w-[85vw] bg-slate-600 shadow-black shadow-md  rounded-2xl bg-Hero bg-[auto] hover:scale-110 hover:shadow-lg bg-center bg-no-repeat ">
                              <h2 className=' relative top-[38%] left-[12%] md:top-[43%] lg:top-[90%] '>VILLAGE</h2>
                          </div>
                          <div className="transition relative ease-in-out delay-50 flex-1 lg:w-16 w-[85vw] bg-slate-600 shadow-black shadow-md  rounded-2xl bg-Hero bg-[auto] hover:scale-110 hover:shadow-lg bg-center bg-no-repeat ">
                              <h2 className=' relative top-[38%] left-[12%] md:top-[43%] lg:top-[90%] '>VILLAGE</h2>
                          </div>
                          <div className="transition relative ease-in-out delay-50 flex-1 lg:w-16 w-[85vw] bg-slate-600 shadow-black shadow-md  rounded-2xl bg-Hero bg-[auto] hover:scale-110 hover:shadow-lg bg-center bg-no-repeat ">
                              <h2 className=' relative top-[38%] left-[12%] md:top-[43%] lg:top-[90%] '>VILLAGE</h2>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Hero