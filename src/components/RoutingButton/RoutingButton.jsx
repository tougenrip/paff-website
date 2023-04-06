import React from 'react'
import "./RoutingButton.css"

const RoutingButton = (props) => {
  const { width, height, color, text } = props;

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
    padding: '75px'
    
  };

  const textStyle = {
    color: 'white',
    textAlign: 'center',
    fontSize: '90px',
    fontFamily: 'Gilroy',
    fontWeight: '800',
  };

  return (
    <div style={style} className="rectangle">
      <div style={textStyle} className="rectangle-text">{text}</div>
    </div>
  );
}


export default RoutingButton