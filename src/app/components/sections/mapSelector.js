import MapButton from '../buttons/mapButton.js';

export default function MapSelector() {
    const maps = [
        'ancient', 
        'anubis', 
        'dust', 
        'inferno', 
        'mirage', 
        'nuke', 
        'overpass', 
        'vertigo',
    ];

    return (
        <section style={styles}>
            {maps.map((element) => (
                <MapButton map={element} key={element} />
            ))};
            
        </section>
        
    );

}

const styles = {
    width: '100vw',
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'scroll',
    scrollbarWidth: 'none', // For Firefox
    scrollbarColor: 'transparent transparent', // For Firefox
    WebkitOverflowScrolling: 'touch', // For Webkit-based browsers (like Chrome)


}

