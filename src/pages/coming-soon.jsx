import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Society from "../../src/assets/img/filler.jpg"
import { Link } from 'react-router-dom';
import discord from "../../src/assets/img/icons/discord.svg";
import telegram from "../../src/assets/img/icons/telegram.svg";
import linkedin from "../../src/assets/img/icons/linkedin.svg";
import '../css/comingsoon.css'

const ComingSoon = () => {
  return (
    <div className='coming-soon-container'> 
    <div className="coming-soon">        
      <img src={Society} alt="background" className="background-image" />
  </div>
        <div className="content">
             <h2 style={{fontSize: "95px"}} className='mr-dafoe'>Coming Soon</h2>
        </div>        
        <div className='bottom-container'>
            <div className='social-container'>
                <img src={discord} className='icon' />
                <img src={telegram} className='icon'/>
                <img src={linkedin} className='icon'/>                
            </div> 
        </div>
    
    </div>
  )
};

export default ComingSoon;
