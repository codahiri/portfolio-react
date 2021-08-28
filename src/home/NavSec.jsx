import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";
import { Link } from "react-router-dom";

const NavSec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.screenY;
    if (offset > 200) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) x.push("fixed");

  return (
    <Navbar className={x.join(" ")}>

      <Link to="/" className="navbar-brand">
        <b>ilosrim</b>
      </Link>

      <NavbarToggler onClick={toggle} />
      
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto">
          <Link to="/">Home</Link>
        </Nav>
        <Nav className="ml-auto">
          <Link to="/">Portfolio</Link>
        </Nav>
        <Nav className="ml-auto">
          <Link to="/">Setup</Link>
        </Nav>
        <Nav className="ml-auto">
          <Link to="/">About</Link>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavSec;
