import React from 'react'
import "./homeComponent.css"

const HomeComponent = (props) => {
  const { width, height, color, text, imageSrc } = props;

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,  
    borderRadius: '25px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Add position relative to position image inside
    overflow: 'hidden', // Add overflow hidden to hide image outside of component
    cursor: 'pointer',
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
    zIndex: 1, // Add z-index to position text above image
  
  };

  const imageStyle = {
    position: 'absolute', // Position image absolutely to fit inside component
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.55,
    objectFit: 'cover', // Set object-fit to cover to fill component with image
    zIndex: 0, // Add z-index to position image behind text
    filter: "drop-shadow(0 0 10px #ff7f50)"
    
  };

  const hoverStyle = {
    transform: 'scale(1.1)',
    borderBottom: '2px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '23px -62px 113px 38px rgba(255, 255, 255, 0.05)',

    borderRadius: '25px',
 
  }

  const handleMouseEnter = (event) => {
    event.target.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.6)';
    event.target.style.filter = 'brightness(1.2)';
    setHover(true);
  }

  const handleMouseLeave = (event) => {

    event.target.style.boxShadow = 'none';
    event.target.style.opacity = 0.55;
    setHover(false);
  }

  const [isHovered, setHover] = React.useState(false);

  return (
    <div
      style={{ ...style, ...(isHovered ? hoverStyle : {}) }}
      className="rectangle"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt="Component background" style={imageStyle} />
      <div style={textStyle} className="rectangle-text">{text}</div>
    </div>
  );
};


export default HomeComponent