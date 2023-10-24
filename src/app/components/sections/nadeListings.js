const nadeinfo = {
    nade1: {
        name: "Mirage A Site Smoke",
        map: "Mirage",
        type: "Smoke",
        side: "T",
        description: "A site smoke from jungle",
    },
    nade2: {
        name: "Van Molotov",
        map: "Mirage",
        type: "Molotov",
        side: "T",
        description: "A site smoke from jungle",
    },
    nade3: {
        name: "A Site Smoke",
        map: "Dust 2",
        type: "Smoke",
        side: "T",
        description: "A site smoke from jungle",
    },
    nade4: {
        name: "B Site Market Smoke",
        map: "Mirage",
        type: "Smoke",
        side: "T",
        description: "A site smoke from jungle",
    },

}
import NadeCard from "../buttons/nadeCard";

export default function NadeListings() {
    return(
        <section style={styles}>
            {Object.keys(nadeinfo).map((element) => (
                <NadeCard nade={nadeinfo[element]} key={element} />
            ))}
        </section>
    );
}

const styles = {
    width: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '20px',
    justifyContent: 'center',
}