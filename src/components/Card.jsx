import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div className="card-body">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0 0 10px",
          }}
        >
          <Link style={{ textDecoration: "none" }} to={`/ciudad/${id}`}>
            <h3 className="card-title">{name}</h3>
          </Link>
          <button
            onClick={onClose}
            className="btn btn-sm btn-danger"
            id="closeIcon"
          >
            X
          </button>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
