import { motion } from 'framer-motion';
import React, { useState } from 'react';
import logo from '../assets/img/pafflogo.webp';
import Button from './button';

const Navbar = () => {
    let Links =[
        {name:"JOURNEY",link:"/journey"},
        {name:"BOOK",link:"/book"},
        {name:"DAO",link:"/dao"},
        {name:"PROJECTS",link:"/projects"},
      ];
      
      let [open,setOpen]=useState(false);
  return (
    <div className=' w-screen fixed top-0 left-0 mt-4 md:mt-0 z-10 '>
      <motion.div
                initial={{ scale:0 }}
                animate={{ scale:1 }}
                transition={{
                  delay:1,
                  type: "ease in",
                  stiffness: 100,
                  damping: 20,
                  duration: .5
                }}
                >
      <div className='md:flex items-center  justify-between bg-transparent py-4 md:px-11 px-7  '>
      <div className=' text-2xl cursor-pointer flex items-center font-[Jura] text-gray-800'>
        <a href="/"><img src={logo} alt="" className='h-10 md:h-auto md:max-h-10 z-50' /></a>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-2xl absolute right-8 top-6 cursor-pointer font-[Jura] md:hidden md:mt-4 text-white z-20'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`text-center md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black bg-opacity-90 md:h-14 h-screen md:bg-transparent  z-1 -top-4 pt-24 md:pt-0 left-0 w-full md:w-auto md:pl-0 transition-all duration-300 ease-in ${open ? 'visible':'hidden'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 font-black font-[Jura] text-sm md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-red-700 duration-300 tracking-widest'>{link.name}</a>
            </li>
          ))
        }
        <div className='ml-0 md:ml-8 max-md:absolute -bottom-6 left-0 right-0 mx-auto font-bold text-4xl md:text-base'>
        <Button >
          CONNECT
        </Button>
        </div>
      </ul>
      
      </div>
      </motion.div>
    </div>
  )
}

export default Navbar