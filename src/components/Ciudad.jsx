import React from "react";
import "./Ciudad.css";

export default function Ciudad({ city }) {
  return (
    <div className="ciudad">
      <div className="container">
        <div>
          <img
            className="iconoClima"
            src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"}
            width="80"
            height="80"
            alt=""
          />
        </div>

        <h2 className="card-title">{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}
