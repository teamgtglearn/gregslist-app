import React from "react";
import Navigation from "./Navigation";
import WeatherAPI from "./WeatherAPI.js";
import { Row, Col } from "reactstrap";
import logo from "../assets/gregslist-logo.png";

const Header = (props) => {
  let userName;
  if (props.current_user !== null) {
    let str = props.current_user.email;
    userName = str.charAt(0).toUpperCase() + str.slice(1, str.indexOf("@"));
  }

  return (
    <Row>
      {!props.logged_in && (
        <Col md={4} style={{ display: "flex", alignItems: "center" }}>
          <img id="logo" src={logo} />
        </Col>
      )}
      {props.logged_in && (
        <Col
          md={3}
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "2rem",
          }}
        >
          <h2 style={{ fontFamily: "Overpass", fontSize: "2rem", margin: "0" }}>
            Hello, {userName}
          </h2>
        </Col>
      )}
      <Col
        md={2}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
        }}
      >
        <WeatherAPI />
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <Navigation {...props} />
      </Col>
    </Row>
  );
};

export default Header;
