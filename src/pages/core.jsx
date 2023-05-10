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
    <div className='bg-#1E1E1E'>
    <div style={{backgroundColor:"transparent"}} className='container mx-auto p-4'>
        <div className='content-container'>
            <div className='core-container'>
                <a>Core</a>
             </div>
             <div style={{marginTop: "60px"}}>
            <CoreComponent
                width={100}
                height={800}
                color="transperent"
                borderRadius={26}
                text="At Paff Studios, we are dedicated to providing individuals and organizations with the tools they need to transition seamlessly to the web 3 ecosystem. "
                header="Create Your Virtual Space"
                objectPosition="0px 45%"
                imageSrc={hub}
                style={{fontSize: '50px', lineHeight: '55px'}}
            />
            </div>
                <div style={{marginTop: "60px"}}>            
                <RoutingButton width={100} height={300} borderRadius={26} color="transperent" text="Visit PAFF Bar" imageSrc={bar} />
                </div>
                <div style={{marginTop: "60px"}}>
                <CoreComponent width={100} height={800} borderRadius={26} color="transperent" text="At Paff Studios, we are dedicated to providing individuals and organizations with the tools they need to transition seamlessly to the web 3 ecosystem. " header="Vote for Future
                with Paff Society" objectPosition="0px 80%" imageSrc={society}/>
                <div style={{marginTop: "60px"}}>    
                <Link to="/about" target="_blank">
                    <RoutingButton width={100} height={300} borderRadius={26} color="transperent" text="About Studio" objectPosition="0px 70%" imageSrc={bar} />
                </Link>        
                </div>
                <div style={{marginTop: "60px"}}>            
                <RoutingButton width={100} height={300} borderRadius={26} objectPosition="0px 75%" color="transperent" text="Mind Map" imageSrc={mind} />
                </div>
                <div style={{marginTop: "60px"}}> 
                <Link to="/community" target="_blank">
                    <RoutingButton width={100} height={300} borderRadius={26} color="transperent" text="Join Community" imageSrc={community} />
                </Link>            
                </div>
                <div style={{marginTop: "60px"}}>           
                <Link to="/book" target="_blank">
                    <RoutingButton width={100} height={300} borderRadius={26} color="transperent" text="Explore The Book" imageSrc={book} objectPosition="0 80%" />
                </Link>     
                </div>
            </div>
        </div>
        <div className='none'>
            <div className='core-container-mobile'>
                <a>Core</a>
             </div>
                <div style={{marginTop: "20px"}}>
                <CoreComponent width={100} height={300} borderRadius={26} color="transperent" text="At Paff Studios, we are dedicated to providing individuals and organizations with the tools they need to transition seamlessly to the web 3 ecosystem. " header="Create Your Virtual Space 
                " objectPosition="0px 45%" imageSrc={hub} />
                </div>
                <div style={{marginTop: "34px"}}>            
                <RoutingButton width={100} height={100} borderRadius={12} color="transperent" text="Visit PAFF Bar" imageSrc={bar} />
                </div>
                <div style={{marginTop: "34px"}}>
                <CoreComponent width={100} height={350} borderRadius={26} color="transperent" text="At Paff Studios, we are dedicated to providing individuals and organizations with the tools they need to transition seamlessly to the web 3 ecosystem. " header="Vote for Future
                with Paff Society" objectPosition="0px 70%" imageSrc={society}/>
                <div style={{marginTop: "34px"}}>    
                <Link to="/about" target="_blank">
                    <RoutingButton width={100} height={100} borderRadius={12} color="transperent" text="About Studio" objectPosition="0px 70%" imageSrc={bar} />
                </Link>        
                </div>
                <div style={{marginTop: "34px"}}>            
                <RoutingButton width={100} height={100} borderRadius={12} objectPosition="0px 75%" color="transperent" text="Mind Map" imageSrc={mind} />
                </div>
                <div style={{marginTop: "34px"}}> 
                <Link to="/community" target="_blank">
                    <RoutingButton width={100} height={100} borderRadius={12} color="transperent" text="Join Community" imageSrc={community} />
                </Link>            
                </div>
                <div style={{marginTop: "34px", borderRadius: "25px"}}>           
                <Link to="/book" target="_blank">
                    <RoutingButton width={100} height={100} borderRadius={12} color="transperent" text="Explore The Book" imageSrc={book} />
                </Link>     
                </div>
            </div>
        </div>
    </div>
    </div>
      )
    }
    
    export default Core

    


