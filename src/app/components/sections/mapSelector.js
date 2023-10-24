import MapButton from '../buttons/mapButton.js';

export default function MapSelector() {
    const maps = [
        'ancient', 
        'anubis', 
        'dust 2', 
        'inferno', 
        'mirage', 
        'nuke', 
        'overpass', 
        'office', 
        'vertigo',
        'baggage',
        'canals',
        'italy',
        'lake',
        'short dust',
        'shoots',
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
    overflowX: 'auto',
    scrollbarWidth: 'none', // For Firefox
    scrollbarColor: 'transparent transparent', // For Firefox
    WebkitOverflowScrolling: 'touch', // For Webkit-based browsers (like Chrome)


}

