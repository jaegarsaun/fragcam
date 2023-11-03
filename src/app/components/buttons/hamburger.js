"use client"
import { TbMenu2 } from 'react-icons/tb';
import { useState } from 'react';


const styles = {
    normal: {
      height: '35px',
      width: '35px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: 'transparent',
      marginRight: '10px',
      transition: 'background-color 0.2s',
      transition: 'transform 0.3s ease',
    },
    hovered: {
        height: '35px',
        width: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#212836',
        marginRight: '10px',
        transition: 'background-color 0.2s',
        transition: 'transform 0.3s ease',
    }
  };

export default function Hamburger(props) {
    const [isHovered, setHovered] = useState(false);
    const [isClicked, setClicked] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);

    };

    const handleClick = () => {
      setClicked(!isClicked); // Toggle the value of isClicked
      props.onClick();
    };

    const rotation = isClicked ? 'rotate(90deg)' : 'rotate(0deg)';

  return (
    <button 
    style={{
      ...styles.normal,
      ...(isHovered ? styles.hovered : {}),
      transform: rotation,
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleClick}
    >
        <TbMenu2 size={25} color='white'/>
    </button>
  );
}

