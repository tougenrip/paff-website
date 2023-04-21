import React from 'react'
import "./coreComponent.css"

const CoreComponent = (props) => {
  const { width, height, color, text, header, imageSrc, objectPosition } = props;

  const style = {
    width: `${width}%`,
    height: `${height}px`,
    backgroundColor: color,  
    borderRadius: '25px',   
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    position: 'relative', // Add position relative to position image inside
    overflow: 'hidden', // Add overflow hidden to hide image outside of component
    cursor: 'pointer',
    padding: 250,
  };

  const headerStyle = {
    color: 'white',
    textAlign: 'center',
    fontSize: '96px',
    fontFamily: 'Gilroy',
    fontWeight: '800',
    fontStyle: 'normal',
    top: 50,
    left: 50,
    right: 250,
    position: 'absolute', // Add position relative to position text inside
    zIndex: 1, // Add z-index to position text above image
    justifyContent: "flex-start",
  };

  const textStyle = {
    color: 'white',
    textAlign: 'center',
    fontSize: '56px',
    fontFamily: 'Gilroy',
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: "59px",
    bottom: 150,
    left: 20,
    right: 20,
    position: 'absolute', // Add position relative to position text inside
    zIndex: 1, // Add z-index to position text above image
  
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


export default CoreComponent