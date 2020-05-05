import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./navigationBar.css";
import Logo from "../../assets/logo.png";

const NavigationBar = () => {
  return (
    <>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img src={Logo} alt="" />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Contacts">Contacts</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
