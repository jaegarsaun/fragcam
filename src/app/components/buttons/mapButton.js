import '../../globals.css'
export default function MapButton(props){

    return (
        <button style={styles.button}>
            <p style={styles.p} className="bold text-primary">{props.map.toUpperCase()}</p>
        </button>
    )
}

const styles = {
    button: {
        backgroundColor: '#212836',
        color: '#ffffff',
        border: '3px solid #3D4452',
        padding: '10px',
        textAlign: 'center',
    
        width: '175px',   /* Set a fixed width */
        height: '95px',   /* Set a fixed height */
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        marginRight: '10px',
        flexShrink: 0,    /* Prevent shrinking */
    
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
    },
    p: {
        fontSize: '1rem',
    }
}