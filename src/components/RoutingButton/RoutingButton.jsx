import React from 'react'
import "./RoutingButton.css"

const RoutingButton = (props) => {
  const { width, height, color, text, imageSrc, objectPosition, borderRadius, boxShadow } = props;

  const style = {
    width: `${width}%`,
    height: `${height}px`,
    backgroundColor: color,
    borderRadius: `${borderRadius}px`,
    boxShadow: boxShadow,
    display: 'flex',
    justifyContent: 'left',
    justifyItems: 'center',
    alignItems: 'center',
    paddingLeft: '3%',
    position: 'relative', // Add position relative to position image inside
    overflow: 'hidden', // Add overflow hidden to hide image outside of component
    cursor: 'pointer',
    
  };

  const textStyle = {
    color: 'white',
    textAlign: 'center',
    fontSize: 'clamp(26px, 2.25vw, 90px)',
    fontFamily: 'Gilroy',
    fontWeight: '800',
    zIndex: 1, // Add z-index to position text above image
    ...props.style
    
  };

  const imageStyle = {
    position: 'absolute', // Position image absolutely to fit inside component
    top: 0,
    left: -1,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Set object-fit to cover to fill component with image
    zIndex: 0, // Add z-index to position image behind text
    objectPosition: objectPosition,
    borderRadius: 'none',
    
  };


  return (
    <div style={style} className="rectangle">
      <img src={imageSrc} alt="Component background" style={imageStyle} />
      <div style={textStyle} className="rectangle-text">{text}</div>
      <div ></div>
    </div>
  );
}


export default RoutingButton