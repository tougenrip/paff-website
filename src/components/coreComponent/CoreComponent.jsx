import React from 'react'
import "./coreComponent.css"

const CoreComponent = (props) => {
  const { width, height, color, text, header, imageSrc, objectPosition, borderRadius } = props;

  const style = {
    width: `${width}%`,
    height: `${height}px`,
    backgroundColor: color,  
    borderRadius: `${borderRadius}px`,  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    padding: 20,
  };

  const headerStyle = {
    color: 'white',
    textAlign: 'left',
    fontSize: 'clamp(26px, 3.5vw, 90px)',
    fontFamily: 'Gilroy',
    fontWeight: '800',
    fontStyle: 'normal',
    position: 'absolute', // Add position relative to position text inside
    zIndex: 1, // Add z-index to position text above image
    justifyContent: "flex-start",

  };

  const textStyle = {
    color: 'white',
    textAlign: 'left',
    fontSize: 'clamp(16px, 3.25vw, 50px)',
    fontFamily: 'Gilroy',
    fontWeight: '300',
    fontStyle: 'normal',
    position: 'absolute', // Add position relative to position text inside
    zIndex: 1, // Add z-index to position text above image  
    bottom: 20,
    ...props.style 
  };

  const imageStyle = {
    position: 'absolute', // Position image absolutely to fit inside component
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    zIndex: 0, 
    objectPosition: objectPosition,
    
  };
 


  return (
    <div style={style} className="rectangle">
      <img src={imageSrc} alt="Component background" style={imageStyle} />
      <div style={headerStyle} className="rectangle-text">{header}</div>
      <div style={textStyle} className="rectangle-text">{text}</div>
    </div>
  );
};


export default CoreComponent;