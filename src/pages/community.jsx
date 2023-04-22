import React from 'react'
import "../css/community.css"
import { Link } from 'react-router-dom';


const Community = () => {
  return (
      <div className='m-container'>
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
                    <Link to="https://www.example.com" target="_blank"><button >JOIN SOCIETY</button>      </Link>
                                     
                    </div>
                </div>
              
                
            </div>
            <div className='display-container'> 
                <div className='display'></div>
            </div>
        </div>
      </div>


    
  );
}

export default Community