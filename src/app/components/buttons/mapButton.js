"use client";
import "../../globals.css";
import Image from 'next/image';

export default function MapButton(props) {
  const mapName = props.map
  function mouseOver(event) {
    const mapImg = event.currentTarget.querySelector(".mapImg");
    mapImg.style.opacity = "0.8";
  }

  function mouseOut(event) {
    const mapImg = event.currentTarget.querySelector(".mapImg");
    mapImg.style.opacity = "0";
  }

  return (
    <div
      style={styles.mapStyle}
      onMouseEnter={mouseOver}
      onMouseLeave={mouseOut}
      className="primary-button"
      tabIndex={0}
      onClick={props.onClick}
    >
      <Image
        src={`/images/${props.map}.jpg`}
        alt={props.map}
        width={232} // Adjust the width and height as needed
        height={117.15}
        className="mapImg"
        style={styles.mapImg}
      />
      <p style={styles.mapName} className="bold primary-text">
        {mapName.toUpperCase()}
      </p>
    </div>
  );
}

const styles = {
  mapStyle: {
    height: "125px",
    width: "232px",
    borderRadius: "8px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    margin: "10px",
    flexShrink: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
  },
  mapName: {
    fontSize: "20px",
    zIndex: "2",
  },
  mapImg: {
    height: "100%",
    width: "100%",
    borderRadius: "5px",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "1",
    opacity: "0",
    transition: "opacity 0.2s ease-in-out",
  },
};
