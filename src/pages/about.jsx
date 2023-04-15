import React from 'react'
import "../css/about.css"
import RoutingButton from '../components/RoutingButton/RoutingButton';
import book from "../../src/assets/img/about-page/explore-book.jpg";
import mind from "../../src/assets/img/about-page/mind-map.jpg";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='main-container'>
      <div className='header-container'>
        <a className='mr-dafoe'>About Studio</a>
      </div>
      <div className='text-container'>
        <a>VISION</a>
        <p>
          Paff Studios envisions a future where we stand as an eminent pioneer in the global blockchain sphere, orchestrating a harmonious fusion of innovative, sustainable digital ecosystems that empower individuals, enterprises, and societies to seamlessly interconnect, collaborate, and flourish within a decentralized realm.
        </p>
      </div>
      <div className='text-container'>
        <a>MISSION</a>
        <p>Our mission at Paff Studios is to architect a symphony of groundbreaking blockchain solutions that revolutionize the manner in which humanity interacts with digital landscapes. Through our fervent passion for avant-garde technology and unwavering commitment to excellence, we endeavor to construct user-centric platforms, cultivate a vibrant and inclusive community, and catalyze the worldwide embracement of blockchain technology, ultimately weaving a tapestry of a brighter, more interconnected future.
        </p>
      </div>
      <div className='header-container'>
        <a className='mr-dafoe'>Followıng Future</a>
      </div>
      <div className='text-container'>
        <a>ECOSYSTEM</a>
        <p>Paff Studios envisions a future where we stand as an eminent pioneer in the global blockchain sphere, orchestrating a harmonious fusion of innovative, sustainable digital ecosystems that empower individuals, enterprises, and societies to seamlessly interconnect, collaborate, and flourish within a decentralized realm.
        </p>
      </div>
      <div className='text-container'>
        <a>YOUNG AND DYNAMIC</a>
        <p>Paff Studios' young and dynamic team represents our dedication to innovation. With diverse backgrounds, we tackle challenges enthusiastically and stay ahead of the curve in the blockchain industry. Our emphasis on creativity, collaboration, and continuous learning shapes the future of decentralized ecosystems.
        </p>
      </div>
      <div className='text-container'>
        <a>HOW TO JOIN</a>
        <p>Joining the Paff Studios community is simple and straightforward. Start by visiting our website and signing up for our newsletter to stay informed about updates and events. Next, follow us on social media to engage with like-minded individuals and participate in discussions. Finally, attend our workshops, webinars, and community events to fully immerse yourself in the Paff Studios experience.</p>
      </div>
      <div style={{marginTop: "80px"}}>            
      <RoutingButton width={100} height={300} color="transperent" text="Mind Map"  objectPosition="0px 70%" imageSrc={mind} />
    </div>
    <div style={{marginTop: "80px"}}>            
      <Link to="/book" target="_blank">
          <RoutingButton width={100} height={300} color="transperent" text="Explore The Book" objectPosition="0px 70%" imageSrc={book} />
      </Link>  
    </div>

    </div>



    
  );
}

export default About