import React from 'react'
import "./RoutingButton.css"

const RoutingButton = (props) => {
  const { width, height, color, text, imageSrc } = props;

  const style = {
    width: `${width}%`,
    height: `${height}px`,
    backgroundColor: color,
    border: '1px solid black',
    borderRadius: '25px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    margin: '10px',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    padding: '75px',
    alignItems: 'center',
    position: 'relative', // Add position relative to position image inside
    overflow: 'hidden', // Add overflow hidden to hide image outside of component
    cursor: 'pointer',
    
  };

  const textStyle = {
    color: 'white',
    textAlign: 'center',
    fontSize: '90px',
    fontFamily: 'Gilroy',
    fontWeight: '800',
    zIndex: 1, // Add z-index to position text above image
  };

  const imageStyle = {
    position: 'absolute', // Position image absolutely to fit inside component
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Set object-fit to cover to fill component with image
    zIndex: 0, // Add z-index to position image behind text
    filter: "drop-shadow(0 0 10px #ff7f50)",
    objectPosition: "center center",
    
  };

  return (
    <div style={style} className="rectangle">
      <img src={imageSrc} alt="Component background" style={imageStyle} />
      <div style={textStyle} className="rectangle-text">{text}</div>
    </div>
  );
}


export default RoutingButton