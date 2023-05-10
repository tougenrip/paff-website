import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Background from "../../src/assets/img/journey-page/background.jpg"
import '../css/journey.css'

const journey = () => {
  return (
    <>
  <div
  className="bg-cover bg-[center_top] bg-opacity-40"
  style={{ backgroundImage: `url(${Background})`, backgroundSize: 'none', zIndex: "10",}}
>
  <div class="container mx-auto">
  <div className='main-container1'>
        <div style={{marginTop : '250px'}} className='content1'>
          <div  className='content1-container'>
            <div className='headerA-container'>
              <p>OUR</p>
            </div>
            <div className='headerB-container'>
              <p>JOURNEY</p>
            </div>
          </div>    
          <div className='content1-container'>
            <div className='title-container'>
              <p>Welcome to PAFF Studios, </p>
            </div>
            <div className='paragraph-container'>
              <p>the cutting-edge blockchain studio that's transforming the industry.</p>
            </div>
          </div> 
          <div className='content1-container' style={{marginTop : '-500px'}}>            
            <div className='paragraph-container1'>
              <p>Our diverse team of six young talents have developed NFT collections and multiverses, but we understand that the industry demands more.</p>
            </div>
          </div>        
          <div className='content1-container'>            
            <div  className='paragraph-container1'>
              <p>We're not just constructing virtual environments;</p>
            </div>
            <div className='headerC-container'>
              <p>WE'RE FORGING A NEW WORLD..</p>
            </div>
          </div>  
          <div className='content1-container' style={{marginTop : '-400px'}} >
          <div className='paragraph-container' style={{alignItems : 'flex-end'}}>
              <p>Introducing HUB, the premier </p>
            </div>
            <div className='title-container'>
              <p>blockchain-integrated multiverse editor. </p>
            </div>
            <div className='paragraph-container'>
              <p>HUB empowers users to craft virtual spaces without coding expertise, granting them increased control and flexibility in their digital realms.</p>
            </div>
          </div>
          <div  className='content1-container' style={{marginTop : '-400px', alignItems : 'flex-start'}}>
            <div className='paragraph-container' style={{justifyContent : 'left'}} >
              <p style={{textJustify : 'left'}}>Our Belief</p>
            </div>
            <div className='title-container' style={{justifyContent : 'left'}}>
              <p>Desire for Innovation</p>
            </div>
            <div className='paragraph-container' style={{justifyContent : 'left'}}>
              <p style={{textAlign : 'left'}}>Our belief in the power of collaboration has led us to assemble a team with diverse backgrounds and expertise. Our united passion for cutting-edge technology has enabled us to develop a platform that's propelling the industry forward.</p>
            </div>
          </div>
          <div  className='content1-container' style={{marginTop : '-400px', alignItems : 'flex-end'}}>
            <div className='paragraph-container' style={{justifyContent : 'right'}} >
              <p style={{textJustify : 'Right'}}>Our Dedication</p>
            </div>
            <div className='title-container' style={{justifyContent : 'right'}}>
              <p>Safe and Fair Ecosystem for Web 3.0</p>
            </div>
            <div className='paragraph-container' style={{justifyContent : 'right'}}>
              <p style={{textAlign : 'right'}}>Our Dedication to autonomous decision-making and sustainable growth sets us apart. We believe in providing our users with the resources they need to excel and innovate, unencumbered by traditional web constraints.</p>
            </div>
          </div>
          <div  className='content1-container' style={{alignItems : 'flex-start'}}>
            <div className='paragraph-container' style={{justifyContent : 'left'}} >
              <p style={{textJustify : 'left'}}>But we won't stop there.</p>
            </div>
            <div className='title-container' style={{justifyContent : 'left'}}>
              <p style={{textAlign : 'left'}}>We're cultivating a community of progressive individuals</p>
            </div>
            <div className='paragraph-container' style={{justifyContent : 'left'}}>
              <p style={{textAlign : 'left'}}>Our belief in the power of collaboration has led us to assemble a team with diverse backgrounds and expertise. Our united passion for cutting-edge technology has enabled us to develop a platform that's propelling the industry forward.</p>
            </div>
          </div>
          <div className='content1-container' style={{marginTop : '-150px'}}>            
            <div  className='paragraph-container1'>
              <p>We're not just a company; .</p>
            </div>
            <div className='headerC-container'>
              <p>WE'RE A MOVEMENT FOR THE FUTURE</p>
            </div>
          </div>
          <div className='content1-container'>
            <div className='title-container'>
              <p>Embark on this journey with us into the future,</p>
            </div>
            <div className='paragraph-container' style={{marginBottom : '500px'}}>
              <p>where we're constructing a new world driven by state-of-the-art technology and fueled by our collective passion for progress.</p>
            </div>
          </div>  
          
        </div>
  </div>
  <div className='main-container2'>
        <div style={{marginTop : '-250px'}} className='content1'>
          <div className='content1-container' style={{marginTop : '250px'}}>
            <div className='headerA-container'>
              <p style={{fontSize: '46px'}}>OUR</p>
            </div>
            <div className='headerB-container'>
              <p>JOURNEY</p>
            </div>
          </div>    
          <div className='content1-container'>
            <div className='title-container' style={{marginTop: '30px'}}>
              <p style={{fontSize: '36px'}}>Welcome</p>
            </div>
            <div className='paragraph-container'>
              <p style={{fontSize: '26px', marginTop : '30px'}}>the cutting-edge blockchain studio that's transforming the industry.</p>
            </div>
          </div> 
          <div className='content1-container' >            
            <div className='paragraph-container1'>
              <p style={{fontSize: '16px'}}>Our diverse team of six young talents have developed NFT collections and multiverses, but we understand that the industry demands more.</p>
            </div>
          </div>        
          <div className='content1-container'>            
            <div className='paragraph-container1' style={{marginTop: '-380px'}}>
              <p style={{fontSize: '14px'}}>We're not just constructing virtual environments;</p>
            </div>
            <div className='headerC-container'>
              <p style={{fontSize: '25px', lineHeight: '30px'}}>WE'RE FORGING A NEW WORLD..</p>
            </div>
          </div>  
          <div className='content1-container' style={{marginTop: '-360px', rowGap: '30px'}}>
          <div className='paragraph-container' style={{}}>
              <p style={{fontSize: '36px', lineHeight: '40px'}}>Introducing HUB, the premier </p>
            </div>
            <div className='title-container'>
              <p style={{fontSize: '26px', lineHeight: '30px'}}>blockchain-integrated multiverse editor. </p>
            </div>
            <div className='paragraph-container'>
              <p style={{fontSize: '16px', lineHeight: '20px'}}>HUB empowers users to craft virtual spaces without coding expertise, granting them increased control and flexibility in their digital realms.</p>
            </div>
          </div>
          <div  className='content1-container' >
            <div className='title-container' >
              <p>Our Belief</p>
            </div>
            <div className='paragraph-container'  >
              <p style={{fontSize: '36px', lineHeight: '40px'}}>Desire for Innovation</p>
            </div>
            <div className='paragraph-container' style={{marginTop : '40px'}} >
              <p style={{fontSize: '16px', lineHeight: '19px'}}>Our belief in the power of collaboration has led us to assemble a team with diverse backgrounds and expertise. Our united passion for cutting-edge technology has enabled us to develop a platform that's propelling the industry forward.</p>
            </div>
          </div>
          <div  className='content1-container'>
            <div className='title-container'>
              <p style={{fontSize: '40px', lineHeight: '40px'}}>Our Dedication</p>
            </div>
            <div className='paragraph-container' style={{marginBottom: '150px'}} >
              <p style={{fontSize: '25px', lineHeight: '40px'}}>Safe and Fair Ecosystem for Web 3.0</p>
            </div>
          </div>                
            <div className='paragraph-container' style={{marginBottom: '150px', marginTop: '-150px'}}>
              <p >Our Dedication to autonomous decision-making and sustainable growth sets us apart. We believe in providing our users with the resources they need to excel and innovate, unencumbered by traditional web constraints.</p>
            </div>
          
        </div>
  </div>
  </div>
</div>     
 
    </>
  )
};

export default journey;
