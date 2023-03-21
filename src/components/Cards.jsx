import React from "react";
import "./Cards.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  return (
    <div
      style={{
        // border: "solid 2px red",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
      }}
      className="cards"
    >
      {cities.map((c) => (
        <Card
          id={c.id} // El padre le pasa al hijo las props, por ende tenemos que agregar aca la prop id
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
}
