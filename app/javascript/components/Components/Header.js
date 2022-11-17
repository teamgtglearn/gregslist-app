import React, { useState } from "react";
import Navigation from "./Navigation";
import { Row, Col } from "reactstrap";
import logo from "../assets/gregslist-logo.png";

const Header = (props) => {
  // converting the user email into user name (everything before @ sign)
  let userName;
  if (props.current_user !== null) {
    let str = props.current_user.email;
    userName = str.charAt(0).toUpperCase() + str.slice(1, str.indexOf("@"));
  }

  return (
    <Row>
      {!props.logged_in && (
        <Col md={6} style={{ display: "flex", alignItems: "center" }}>
          <img id="logo" src={logo} />
        </Col>
      )}
      {props.logged_in && (
        <Col md={6} style={{ display: "flex", alignItems: "center" }}>
          <h2>Hello, {userName}</h2>
        </Col>
      )}
      <Col className="d-flex justify-content-end align-items-center">
        <Navigation {...props} />
      </Col>
    </Row>
  );
};

export default Header;
