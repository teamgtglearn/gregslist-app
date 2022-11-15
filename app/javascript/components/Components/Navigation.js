import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav style={{ maxHeight: "100%" }}>
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
    </Nav>
  );
};

export default Navigation;
