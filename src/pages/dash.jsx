import React from 'react'
import "../css/home.css"
import HomeComponent from '../components/homeComponent/HomeComponent';
import academy from '../../src/assets/img/dash-page/academy.jpg';
import core from '../../src/assets/img/dash-page/core.jpg';
import journey from '../../src/assets/img/dash-page/journey.jpg';
import dao from '../../src/assets/img/dash-page/dao.jpg';
import book from '../../src/assets/img/dash-page/book.jpg';
import { Link } from 'react-router-dom';
import discord from "../../src/assets/img/icons/discord.svg";
import telegram from "../../src/assets/img/icons/telegram.svg";
import linkedin from "../../src/assets/img/icons/linkedin.svg";

const Dash = () => {
  return (
      <div className='main-container'>      
        <div className='home-container'>  
            <div className='dash-container'>
                <Link to="/academy" target="_blank">
                <HomeComponent 
                    width={210} 
                    height={530} 
                    color="transparent" 
                    text="ACADEMY" 
                    boxShadow= '0px 0px 50px 25px #0C2822, 0px 4px 4px 0px #0C2822'
                    imageSrc={academy} />
                    
                </Link>           
                <Link to="/core" target="_blank">
                    <HomeComponent 
                    width={210} 
                    height={530} 
                    color="transparent" 
                    text="CORE" 
                    boxShadow= '0px 0px 50px 25px #221242, 0px 4px 4px 0px #221242'
                    imageSrc={core} />               
                </Link>     
                <Link to="/journey" target="_blank">
                    <HomeComponent 
                    width={210} 
                    height={530} 
                    color="transparent" 
                    text="JOURNEY"  
                    boxShadow= '0px 0px 50px 25px #482E21, 0px 4px 4px 0px #62402E'
                    imageSrc={journey} />
                </Link>  
                <Link to="/dao" target="_blank">
                    <HomeComponent 
                    width={210} 
                    height={530} 
                    color="transparent" 
                    text="DAO" 
                    boxShadow= '0px 0px 50px 25px #FF3546 , 0px 4px 4px 0px #FF3546'
                    imageSrc={dao} />    
                </Link>   
                <Link to="/book" target="_blank">
                    <HomeComponent 
                    width={210} 
                    height={530} 
                    color="transparent" 
                    text="BOOK" 
                    boxShadow= '0px 0px 50px 25px #302B34, 0px 4px 4px 0px #302B34'                    
                    imageSrc={book} />
                </Link>   
            </div>   
            <div className='bottom-container'>
                <div className='social-container'>
                    <img src={discord} className='icon' />
                    <img src={telegram} className='icon'/>
                    <img src={linkedin} className='icon'/>                
                </div> 
            </div>
        </div>      
    </div>



    
  );
}

export default Dash