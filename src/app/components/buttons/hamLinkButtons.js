export default function HamLinkButtons(props){
    if(props.type === "link"){
        return(
            <a style={styles.a} href={props.target}>{props.name}</a>
        )
    }else{
        return(
            <button style={styles.button}>{props.name}</button>
        )
    
    }
}

const styles = {
    a: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        zIndex: 1000,
        height: '50px',
        width: '100%',
    },
    button: {
        
    }
}