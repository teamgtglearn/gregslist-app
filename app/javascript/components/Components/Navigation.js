import React from "react";
import { Nav, NavItem, Col, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <Nav style={{ minWidth: "100%" }}>
      <Col>
        <NavItem>
          <NavLink
            to="/"
            className="py-0 px-3"
            style={{ color: "black", fontSize: "small" }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/index"
            className="py-0 px-3"
            style={{ color: "black", fontSize: "small" }}
          >
            All Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/about"
            className="py-0 px-3"
            style={{ color: "black", fontSize: "small" }}
          >
            About Us
          </NavLink>
        </NavItem>
      </Col>
      <Col className="d-flex justify-content-between align-items-center">
        <Button
          color="success"
          size="m"
          style={{ height: "2.3rem", minWidth: "6rem", fontSize: "0.7rem" }}
        >
          <NavItem>
            <a id="login-btns" href={sign_in_route} className="nav-link">
              Sign In
            </a>
          </NavItem>
        </Button>
        <Button
          color="success"
          size="m"
          style={{
            height: "2.3rem",
            minWidth: "6rem",
            fontSize: "0.7rem",
            marginInlineStart: "1.5rem",
          }}
        >
          <NavItem>
            <a id="login-btns" href={new_user_route} className="nav-link">
              Sign Up
            </a>
          </NavItem>
        </Button>
      </Col>
    </Nav>
  );
};

export default Navigation;
