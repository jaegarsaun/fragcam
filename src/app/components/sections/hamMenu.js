import '../../globals.css';
import Spacer from '../design/spacer.js';
import HamLinkButtons from '../buttons/hamLinkButtons';

export default function HamMenu({ active }) {
  const hamMenuClasses = active ? 'hamMenu active' : 'hamMenu';

  return (
    <div className={hamMenuClasses}>
      <div className='linkCont' style={styles.linkCont}>
        <HamLinkButtons name="Home" target="/" type="link"/>
        <HamLinkButtons name="Lineups" target="/lineups" type="link"/>
        <HamLinkButtons name="Profile" target="/profile" type="link"/>
      </div>



      <div className='buttonCont' style={styles.buttonCont}>
        <HamLinkButtons name="Logout" target="/login" type="button"/>
      </div>
    </div>
  );
}

const styles = {
  linkCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 'auto',
    width: '100%',
    paddingTop: '75px',
  },
  buttonCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '100%',
    flexGrow: 1,
    paddingBottom: '20px',
  }
};
