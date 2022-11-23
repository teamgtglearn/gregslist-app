import React from "react";
import { Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/Hero.png";

const Home = () => {
  return (
    <Row>
      <div className="hero-container d-flex justify-content-center">
        <img src={heroImage} className="hero-image" />
        <div className="overlay">
          <h3>Welcome to Gregslist</h3>
          <NavLink to="/index">
            <button id="hero-button">Shop</button>
          </NavLink>
        </div>
      </div>
    </Row>
  );
};

export default Home;
