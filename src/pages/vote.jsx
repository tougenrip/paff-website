import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Society from "../../src/assets/img/core-page/paff-society.jpg"
import { Link } from 'react-router-dom';
import up from "../../src/assets/img/icons/arrow-up.png";
import down from "../../src/assets/img/icons/arrow-down.png";
import '../css/vote.css';





const Vote = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)"
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);


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
          <div className='vote-button'>
            <a>Vote</a>
            <div className='vote-button-icons'>
            <motion.div className="example-container" style={{ background }}>
            <motion.div
              className="box"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
            >
              <svg className="progress-icon" viewBox="0 0 50 50">
                <motion.path
                  fill="none"
                  strokeWidth="2"
                  stroke={color}
                  d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                  style={{ translateX: 5, translateY: 5 }}
                />
                <motion.path
                  fill="none"
                  strokeWidth="2"
                  stroke={color}
                  d="M14,26 L 22,33 L 35,16"
                  strokeDasharray="0 1"
                  style={{ pathLength: tickPath }}
                />
                <motion.path
                  fill="none"
                  strokeWidth="2"
                  stroke={color}
                  d="M17,17 L33,33"
                  strokeDasharray="0 1"
                  style={{ pathLength: crossPathA }}
                />
                <motion.path
                  fill="none"
                  strokeWidth="2"
                  stroke={color}
                  d="M33,17 L17,33"
                  strokeDasharray="0 1"
                  style={{ pathLength: crossPathB }}
                />
              </svg>
            </motion.div>
          </motion.div>
            </div>
          </div>
              
    </div>  
    
  )
};

export default Vote;
