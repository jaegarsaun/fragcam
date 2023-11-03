const nadeinfo = {
    nade1: {
        name: "Mirage A Site Smoke",
        map: "mirage",
        type: "smoke",
        side: "T",
        description: "A site smoke from jungle",
    },
    nade2: {
        name: "Van Molotov",
        map: "mirage",
        type: "Molotov",
        side: "T",
        description: "A site smoke from jungle",
    },
    nade3: {
        name: "A Site Smoke",
        map: "dust",
        type: "smoke",
        side: "T",
        description: "A site smoke from jungle",
    },
    nade4: {
        name: "B Site Smoke",
        map: "ancient",
        type: "smoke",
        side: "T",
        description: "A site smoke from jungle",
    },
    nade5: {
        name: "B Site Smoke",
        map: "ancient",
        type: "smoke",
        side: "T",
        description: "A site smoke from jungle",
    },
    nade6: {
        name: "B Site Smoke",
        map: "ancient",
        type: "smoke",
        side: "T",
        description: "A site smoke from jungle",
    },
    nade7: {
        name: "B Site Smoke",
        map: "ancient",
        type: "smoke",
        side: "T",
        description: "A site smoke from jungle",
    },
    nade8: {
        name: "B Site Smoke",
        map: "ancient",
        type: "smoke",
        side: "T",
        description: "A site smoke from jungle",
    },

}
import NadeCard from "../buttons/nadeCard";

export default function NadeListings({ selectedMap }) {
    return(
        <section style={styles}>
      {Object.keys(nadeinfo)
        .filter((element) => !selectedMap || nadeinfo[element].map === selectedMap)
        .map((element) => (
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