import React from 'react'
import "../css/community.css"
import { Link } from 'react-router-dom';
import '../css/fonts/Wriggle-Regular.otf'



const Community = () => {
  return (
      <div className='m-container'>
        <div className='bg-image'></div>
        <div className='back-container'>
            <div className='flood-container'>
                <div className='max-container'>
                    <div className='header1-container'>
                        <p>JOIN TRIBE</p>
                        <span>GET YOUR ID <br/> AND JOIN SOCIETY</span>                
                    </div>
                    <div className='details-container'>
                        <span>HOW TO JOIN</span>
                        <p>Joining the Paff Studios community is simple and straightforward. Start by visiting our website and signing up for our newsletter to stay informed about updates and events. Next, follow us on social media to engage with like-minded individuals and participate in discussions. Finally, attend our workshops, webinars, and community events to fully immerse yourself in the Paff Studios experience.</p>
                    </div>
                    <div style={{marginTop : "20px"}} className='details-container'>
                        <span>WHAT IS PAFF ID</span>
                        <p>Joining the Paff Studios community is simple and straightforward. Start by visiting our website and signing up for our newsletter to stay informed about updates and events. Next, follow us on social media to engage with like-minded individuals and participate in discussions. Finally, attend our workshops, webinars, and community events to fully immerse yourself in the Paff Studios experience.</p>
                    </div>
                    <div className='button-container'>
                    <Link to="https://www.example.com" target="_blank">
                        <button >JOIN SOCIETY</button>
                    </Link>
                    </div>
                </div>                     
            </div>
                <div className='display-container'> 
                    <div className='display'></div>
                </div>
        </div>
            <div style={{marginTop : '70px'}} className='society-text'>
                    <h1 className='wriggle'>SOCIETY</h1>      
                <div className='welcome-container'>
                    <a className='mr-dafoe'>Welcome to Paff Society</a>           
                    <p>Transcend the limits of digital freedom</p>     
                </div>          
            </div>
            <div style={{marginTop : "60px"}} className='line-container'>
                <span>Society Structure</span>
                <p>we know that the digital world is constantly evolving, and we strive to stay ahead of the curve by offering resources and tools for the latest trends and technologies. This includes the exciting world of crypto, NFTs, and the Metaverse.</p>
            </div>
            <div style={{marginTop : "60px"}} className='line-container'>
                <span>Grand Programs</span>
                <p>Our POC products are  the latest innovations and trends in the digital world. As a Paff Society member, you'll have the opportunity to get early access to these products, which will give you a head start in developing your own solutions and ideas.</p>
            </div>
            <div className='welcome-container'>
                <a className='mr-dafoe'>Accsess Private Projects</a>           
                <p>Our projects are complately private and limited acsess </p>     
            </div>  
            <div style={{marginTop : "40px"}} className='line-container'>
                <span>PAFF AI Modules</span>
                <p>PAFF AI Modules is a series of artificial intelligence modules developed by Paff Studios. These modules provide solutions for various applications using natural language processing, image processing, verse processing, and other AI technologies.</p>
            </div>
            <div style={{marginTop : "60px"}} className='line-container'>
                <span> White Label Products</span>
                <p>Our POC products are  the latest innovations and trends in the digital world. As a Paff Society member, you'll have the opportunity to get early access to these products, which will give you a head start in developing your own solutions and ideas.</p>
            </div>
            <div style={{marginTop : "60px"}} className='button-container-bottom'>
                    <Link to="https://www.example.com" target="_blank">
                        <button >JOIN SOCIETY</button>
                    </Link>
                    </div>
        </div>
      


    
  );
}

export default Community