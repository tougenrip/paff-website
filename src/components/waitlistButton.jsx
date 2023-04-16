import React, { useState } from 'react';
import Waitlist from '../assets/img/icons/waitlist.png'


function WaitlistButton() {
    const [count, setCount] = useState(0);
  
    const handleButtonClick = () => {
      setCount(count + 1);
    }
  
    return (
      <button className="bg-red-600 text-white font-[Jura] pb-24 pt-16 md:py-1 md:px-10 rounded-md md:rounded-full hover:bg-red-400 duration-500 w-[80vw] md:w-auto flex flex-col justify-center items-center" onClick={handleButtonClick}>
        <div className="flex items-center space-x-2">
        <img src={Waitlist} className='icon' />
          <span className="text-lg">{count}</span>
        <span style={{marginLeft: '30px'}} className="ml-2">Join Waitlist</span>
        </div>
      </button>
    );
  }

export default WaitlistButton


