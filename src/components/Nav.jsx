import React from "react";
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "blue 2px solid",
        height: "10rem",
      }}
    >
      <nav
        className="navbar navbar-dark bg-dark"
        style={{
          width: "35%",
          // height: "5%",
          borderRadius: "20px",
          boxShadow: "0 5px 10px black",
        }}
      >
        <Link to={"/"}>
          <span className="navbar-brand" style={{ fontSize: "x-large" }}>
            <img
              id="logoHenry"
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
          </span>
        </Link>
        <SearchBar onSearch={onSearch} />
        <Link style={{ textDecoration: "none" }} to="/about">
          <span
            style={{
              fontSize: "x-large",
              color: "#rgba(0, 35, 49)",
              marginRight: "10px",
            }}
          >
            About
          </span>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
