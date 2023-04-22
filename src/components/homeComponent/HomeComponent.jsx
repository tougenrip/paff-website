import React from 'react'
import useSound from 'use-sound'
import selectSfx from '../../sounds/sfx/selectSfx.wav'
import hoverSfx from '../../sounds/sfx/hoverSfx.wav'
import { motion } from "framer-motion"
import "./homeComponent.css"

const HomeComponent = (props) => {
  const { width, height, color, text, imageSrc, boxShadow, border } = props;
  const [selectPlay] = useSound(selectSfx);
  const [hoverPlay] = useSound(hoverSfx, {volume:0.5, playbackRate:2})

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,  
    borderRadius: '25px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Add position relative to position image inside
    overflow: 'hidden', // Add overflow hidden to hide image outside of component
    cursor: 'pointer',    
    border: 'none',
  };

  const textStyle = {
    color: 'white',
    textAlign: 'center',
    fontSize: '24px',
    fontFamily: 'Gilroy',
    fontWeight: '300',
    fontStyle: 'normal',
    letterSpacing: '0.34em',
    bottom: 15,
    position: 'absolute', // Add position relative to position text inside
    zIndex: 2, // Add z-index to position text above image
  
  };

  const imageStyle = {
    position: 'absolute', // Position image absolutely to fit inside component
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',        
    objectFit: 'cover', // Set object-fit to cover to fill component with image
    zIndex: 1, // Add z-index to position image behind text    
    border: 'none',
  };

  const hoverStyle = {
    // transform: 'scale(1.15,1.25)',
    border: border,
    boxShadow: boxShadow,
    borderRadius: '25px',
    filter: 'brightness(1.5)', 
    border: 'none',
    opacity: '1',
  }

  const handleMouseEnter = (event) => {
    hoverPlay();
    setHover(true);
  }

  const handleMouseLeave = (event) => {

  
    setHover(false);
  }
  const handleMouseClick = (event) => {
    selectPlay();
  }

  const [isHovered, setHover] = React.useState(false);

  return (
    <motion.div
      initial={{ scale:1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200, duration: 0.2  }}
    >
    <div
      style={{ ...style, ...(isHovered ? hoverStyle : {opacity: 0.7}) }}
      className="rectangle ease-in transform-gpu"
      onClick={handleMouseClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt="Component background" style={imageStyle} />
      <div style={textStyle} className="rectangle-text">{text}</div>
      <div props={boxShadow}  style={hoverStyle}></div>
      <div props={border}  style={hoverStyle}></div>
    </div>
    </motion.div>
  );
};


export default HomeComponent