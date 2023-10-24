import '../../globals.css'
import Hamburger from '../buttons/hamburger';

export default function Navbar(){

    return(
        <nav style={styles.nav}>
            <div style={styles.div}>
            <Hamburger />
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
    },
    div: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
    },
    p: {
        fontSize: '1.5rem',
    }
    

  };