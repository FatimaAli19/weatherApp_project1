import React from 'react';
import Navbar from 'react-bootstrap/Navbar'; 
 
import logo from '../images/logo.png'; 
import { Link } from 'react-router-dom';

function HeaderSec() { 

  return (
    <Navbar expand="lg" className="bg-dark">
      <Link to={'/'}> <img className="mb-5" src={logo} alt='logo' /> </Link>
       
      <Navbar.Brand href="#home" style={{ color: 'white', fontSize:'69px' }}>WeatherSphere</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
    </Navbar>
  );
}

export default HeaderSec;
