import React from "react";
import Navigation from "./Navigation";
import { Row, Col } from "reactstrap";
import logo from "../assets/gregslist-logo.png";

const Header = (props) => {
  console.log(props);
  return (
    <Row>
      <Col md={6} style={{ display: "flex", alignItems: "center" }}>
        <img id="logo" src={logo} />
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <Navigation {...props} />
      </Col>
    </Row>
  );
};

export default Header;
