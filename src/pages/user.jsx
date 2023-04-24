import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Society from "../../src/assets/img/core-page/paff-society.jpg"
import { Link } from 'react-router-dom';
import discord from "../../src/assets/img/icons/discord.svg";
import telegram from "../../src/assets/img/icons/telegram.svg";
import linkedin from "../../src/assets/img/icons/linkedin.svg";
import '../css/user.css'



const User = () => {
  return (
    <div className='user-main-container'>          
        <div className='user-container'>
          <div className='user-profile-container'>
            <div className='user-id-container'>
              <p>Welcone DAO</p>
              <a>Ciscow</a>

            </div>
            <div className='user-details-container'>
              <div className='balance-container'>
                <p>Total Balance :</p>
                <a>10.230</a>
                <a>$PAFF TOKEN</a>
              </div>
                <div className='line'></div>
              <div className='balance-container'>
                <p>Total Votes :</p>
                <a>260</a>      
              </div>
              <div className='line'></div>
              <div className='balance-container'>
                <p>Rewards :</p>
                <a>230</a>
                <a>$PAFF TOKEN</a>
              </div>
            </div>
          </div>
          <div className='user-nft-container'>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
            <div className='nft-frame'></div>
           </div>
        </div>              
      
              
    </div>
  )
};

export default User;
