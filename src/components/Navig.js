import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/logoHack.png';


const Navig = () => (
    
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Navbar.Brand>
      <img src={logo} width="30%" className="d-inline-block align-top" alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About us</Link>
        </li>
      </ul>
    </Navbar.Collapse>
  </Navbar>


);



export default Navig;