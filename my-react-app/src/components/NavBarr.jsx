import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../images/Buitems.png'; // Adjust the path as necessary

function Navbar1() {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    navigate("/", { replace: true }); // Navigate to home and replace the current history entry
    window.location.reload(); // Refresh the page
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }} 
          />
          FICT Chat Bot
        </Navbar.Brand>
        <Nav className="me-auto">
          <a href="/" onClick={handleHomeClick} className="nav-link" style={{ cursor: 'pointer' }}>
            Home
          </a>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
