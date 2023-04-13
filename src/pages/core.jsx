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
                        <CoreComponent width={100} height={1200} color="transperent" text="At Paff Studios, we are dedicated to providing individuals and organizations with the tools they need to transition seamlessly to the web 3 ecosystem. " header="Create Your Virtual Space 
                With PAFF HUB" imageSrc={hub}/>
                </div>
                <div style={{marginTop: "80px"}}>            
                <RoutingButton width={100} height={400} color="transperent" text="Visit PAFF Bar" imageSrc={bar} />
                </div>
                <div style={{marginTop: "80px"}}>
                <CoreComponent width={100} height={1200} color="transperent" text="At Paff Studios, we are dedicated to providing individuals and organizations with the tools they need to transition seamlessly to the web 3 ecosystem. " header="Vote for Future
                with Paff Society" imageSrc={society}/>
                <div style={{marginTop: "80px"}}>            
                <RoutingButton width={100} height={400} color="transperent" text="About Studio" imageSrc={bar} />
                </div>
                <div style={{marginTop: "80px"}}>            
                <RoutingButton width={100} height={400} color="transperent" text="Mind Map" imageSrc={mind} />
                </div>
                <div style={{marginTop: "80px"}}>            
                <RoutingButton width={100} height={400} color="transperent" text="Join Community" imageSrc={community} />
                </div>
                <div style={{marginTop: "80px"}}>            
                <RoutingButton width={100} height={400} color="transperent" text="Explore The Book" imageSrc={book} />
                </div>
            </div>
        </div>
    </div>
      )
    }
    
    export default Core



