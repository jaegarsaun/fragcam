import '../../globals.css'
import Hamburger from '../buttons/hamburger';
import HamMenu from './hamMenu';

export default function Navbar({onHamClick}){

    return(
        <nav style={styles.nav}>
            <div style={styles.div}>
            <Hamburger onClick={() => onHamClick()}/>
            <p className='bold primary-text' style={styles.p}>CS <span className='blue'>FRAGS</span></p>
            </div>
            
        </nav>

        


    );
}


const styles = {
    nav: {
        height: '75px',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0D1520',
    },
    div: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
    },
    p: {
        fontSize: '1.5rem',
        zIndex: 900,
    }
    

  };