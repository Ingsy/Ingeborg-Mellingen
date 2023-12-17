import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" bg="body-tertiary">
      <div className="container-fluid">
        <Navbar.Brand href="#">Ingeborg Mellingen</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Item>
              <Link to="/cv" className="nav-link">
                CV
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
