import Navbar from '../components/sections/navbar.js';
import MapSelector from '../components/sections/mapSelector.js';
import Line from '../components/design/line.js';
import '../globals.css';
import NadeListings from '../components/sections/nadeListings.js';


export default function Home(){
  return (
    <div style={styles.padding}>
      <Navbar />
      <div style={styles.div}>
        <h2 className='secondary-text bold' style={{fontSize: '20px'}}>Maps</h2>
        <Line />
      </div>
      <MapSelector />
      <div style={styles.spacer}></div>
      <div style={styles.div}>
        <h2 className='secondary-text bold' style={{fontSize: '20px'}}>Popular Lineups</h2>
        <Line />
      </div>
      <NadeListings />
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
