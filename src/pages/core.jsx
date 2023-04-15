import React from 'react'
import "../css/core.css"
import CoreComponent from '../components/coreComponent/CoreComponent'
import RoutingButton from '../components/RoutingButton/RoutingButton'
import bar from "../../src/assets/img/core-page/paff-bar.jpg";
import hub from "../../src/assets/img/core-page/paff-hub.jpg";
import society from "../../src/assets/img/core-page/paff-society.jpg";
import mind from "../../src/assets/img/core-page/mind-map.jpg";
import community from "../../src/assets/img/core-page/community.webp";
import book from "../../src/assets/img/core-page/book.webp";
import { Link } from 'react-router-dom';


const Core = () => {
  return (
    <div className='main-container'>
        <div className='content-container'>
            <div className='core-container'>
                <a>Core</a>
             </div>
            {/*<div className='info-container'>
                <div className='info-container-frame'>
                    <img src={hub}>           
                    </img>
                </div>
                <div className='info-container-header'>
                    <p><strong>Create Your Virtual Space</strong> <span style={{ fontWeight: 'normal' }}>With</span> <strong>PAFF HUB</strong></p>
                </div>
                <div className='info-container-text'>
                    <p>SEKS</p>
                </div>
  </div>*/}
                <div style={{marginTop: "80px"}}>
                <CoreComponent width={100} height={1000} color="transperent" text="At Paff Studios, we are dedicated to providing individuals and organizations with the tools they need to transition seamlessly to the web 3 ecosystem. " header="Create Your Virtual Space 
                With PAFF HUB" objectPosition="0px 45%" imageSrc={hub} />
                </div>
                <div style={{marginTop: "80px"}}>            
                <RoutingButton width={100} height={300} color="transperent" text="Visit PAFF Bar" imageSrc={bar} />
                </div>
                <div style={{marginTop: "80px"}}>
                <CoreComponent width={100} height={1000} color="transperent" text="At Paff Studios, we are dedicated to providing individuals and organizations with the tools they need to transition seamlessly to the web 3 ecosystem. " header="Vote for Future
                with Paff Society" objectPosition="0px 70%" imageSrc={society}/>
                <div style={{marginTop: "80px"}}>    
                <Link to="/about" target="_blank">
                    <RoutingButton width={100} height={300} color="transperent" text="About Studio" objectPosition="0px 70%" imageSrc={bar} />
                </Link>        
                </div>
                <div style={{marginTop: "80px"}}>            
                <RoutingButton width={100} height={300} objectPosition="0px 75%" color="transperent" text="Mind Map" imageSrc={mind} />
                </div>
                <div style={{marginTop: "80px"}}> 
                <Link to="/community" target="_blank">
                    <RoutingButton width={100} height={300} color="transperent" text="Join Community" imageSrc={community} />
                </Link>            
                </div>
                <div style={{marginTop: "80px"}}>           
                <Link to="/book" target="_blank">
                    <RoutingButton width={100} height={300} color="transperent" text="Explore The Book" imageSrc={book} />
                </Link>     
                </div>
            </div>
        </div>
    </div>
      )
    }
    
    export default Core



