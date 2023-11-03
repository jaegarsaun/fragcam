"use client"

import Navbar from '../components/sections/navbar.js';
import MapSelector from '../components/sections/mapSelector.js';
import Line from '../components/design/line.js';
import '../globals.css';
import NadeListings from '../components/sections/nadeListings.js';
import Spacer from '../components/design/spacer.js';
import HamMenu from '../components/sections/hamMenu.js';
import { useState } from 'react';

export default function Home() {
  const [selectedMap, setSelectedMap] = useState(null);
  const [isHamMenuActive, setHamMenuActive] = useState(false); // State for ham menu

  const handleMapButtonClick = (map) => {
    setSelectedMap(map);
  };

  const toggleHamMenu = () => {
    setHamMenuActive(!isHamMenuActive);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div style={styles.padding}>
      
      <Navbar onHamClick={toggleHamMenu}/>
      <HamMenu active={isHamMenuActive}/>
      <Spacer height="50px"/>
      <div style={styles.div}>
        <h2 className='secondary-text bold' style={{fontSize: '20px'}}>Maps</h2>
        <Line />
      </div>
      <MapSelector onMapButtonClick={handleMapButtonClick} />
      <div style={styles.spacer}></div>
      <div style={styles.div}>
        <h2 className='secondary-text bold' style={{fontSize: '20px'}}>
        {selectedMap ? `${capitalizeFirstLetter(selectedMap)} Listings` : "Recent Listings"}
        </h2>
        <Line />
      </div>
      <NadeListings selectedMap={selectedMap} />
      
    </div>
  );
}

const styles = {
  padding: {
    padding: '0 20px',
  },
  spacer: {
    height: '30px',
    width: '100%'
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
}
