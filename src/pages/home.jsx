import React from 'react'
import "../css/home.css"
import HomeComponent from '../components/homeComponent/HomeComponent';
import academy from "../../src/assets/img/journey-page/academy.jpg"
import core from "../../src/assets/img/journey-page/core.jpg"
import journey from "../../src/assets/img/journey-page/journey.jpg"
import dao from "../../src/assets/img/journey-page/dao.jpg"
import book from "../../src/assets/img/journey-page/book.jpg"


const Home = () => {
  return (
      <div className='main-container'>      
      <div className='home-container'>                 
          <HomeComponent width={230} height={600} color="transparent" text="ACADEMY" imageSrc={academy} />   
          <HomeComponent width={230} height={600} color="transparent" text="CORE" imageSrc={core} />               
          <HomeComponent width={230} height={600} color="transparent" text="JOURNEY" imageSrc={journey} />
          <HomeComponent width={230} height={600} color="transparent" text="DAO" imageSrc={dao} />    
          <HomeComponent width={230} height={600} color="transparent" text="BOOK" imageSrc={book} />
      </div>
      

    </div>



    
  );
}

export default Home