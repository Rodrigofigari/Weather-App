import React from "react";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 35, 49, 0.3)",
          width: "70%",
          height: "50%",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 0 20px rgba(0, 35, 49, 10)",
        }}
      >
        <h1> App Weather - React</h1>
        <hr></hr>
        <h4
          style={{
            width: "60%",
          }}
        >
          Mi primer proyecto con React fue la creación de una aplicación del
          clima. Esta aplicación fue desarrollada durante el segundo módulo de
          mi formación en Henry Bootcamp, y utilicé una variedad de tecnologías
          para llevarlo a cabo. En particular, utilicé HTML, CSS, JS, React,
          JSON, Bootstrap y React-Router para crear la aplicación.
        </h4>
      </div>
    </div>
  );
}
