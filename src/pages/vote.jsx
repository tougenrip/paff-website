import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Society from "../../src/assets/img/core-page/paff-society.jpg"
import { Link } from 'react-router-dom';
import up from "../../src/assets/img/icons/arrow-up.png";
import down from "../../src/assets/img/icons/arrow-down.png";
import '../css/vote.css'



const Vote = () => {
  return (
    <div className='vote-main-container'>          
        <div className='vote-container'>
          <div className='vote-profile-container'>
            <div className='vote-id-container'>
              <p>Welcone DAO</p>
              <a>Ciscow</a>

            </div>
            <div className='vote-details-container'>
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
          <div className='vote-proposal-container'>
            <a>1# Proposal</a>
            <p>Lorem Ipstum dolor sit amed yeta grum yok bras to kommeda dera masta kusta yoki yomsa yorla Maghet Yotha Samet Gossa Yetas Rumas Yok ekun Fin Tasğiyet</p>
          </div>
        </div>              
          <button className='vote-button'>
            <a>Vote</a>
            <div className='vote-button-icons'>
            <img src={up}/> 
            <img src={down}/> 
            </div>
          </button>
              
    </div>  
    
  )
};

export default Vote;
