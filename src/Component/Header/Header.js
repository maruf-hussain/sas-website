import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';



import './Header.css'
const Header = () => {
    return (
        <div class='container'>
         
            <Navbar class='mx-auto'  expand="lg">
            
      <Navbar.Brand  href="/"><img className='logo-menu' src='https://i.ibb.co/M7Xk5ZW/280409888-1661343877584871-6408246260806431005-n.png' alt='img'></img></Navbar.Brand>
      <h4 className='logo-nam'>Social Advancment Socity</h4>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav class='mx-auto d-flex nav'>
          <Nav.Link className='nv-menu'  href="/">HOME</Nav.Link>
 
          <NavDropdown  title="WHO WE ARE" id="basic-nav-dropdown">
            <NavLink className='nav-link' to="/finance">Finance</NavLink>
            <NavLink className='nav-link' to="/commiti">Exucutive Commite</NavLink>
            <NavLink className='nav-link' to="/area">Working Area</NavLink>
            <NavLink className='nav-link' to="/team">Working Team</NavLink>
            <NavLink className='nav-link' to="/transport">Transport</NavLink>
            <NavLink className='nav-link' to="/legal">Legal Status</NavLink>
          </NavDropdown>

          <NavDropdown  title="PROGRAM" id="basic-nav-dropdown">
            <NavLink className='nav-link' to="/health">Health</NavLink>
            <NavLink className='nav-link' to="/economic">Economic</NavLink>
            <NavLink className='nav-link' to="/enviroment">Enviroment</NavLink>
            <NavLink className='nav-link' to="/training">Training</NavLink>
          </NavDropdown>
     
          <Nav.Link className='nv-menu' href="#link">BLOG</Nav.Link>

          <NavDropdown  title="WHAT WE DO" id="basic-nav-dropdown">
            <NavLink className='nav-link' to="/aproch"> Development Aproch</NavLink>
            <NavLink className='nav-link' to="/patrons"> Development Patrons</NavLink>
            <NavLink className='nav-link' to="/strategy"> Strategy</NavLink>
          </NavDropdown>

          <NavLink className='nav-link' to="/about">ABOUT</NavLink>
          <NavLink className='nav-link' to="/contact"> CONTACT</NavLink>
          <button className='donate-button' ><Link className='bln' to='/donate' >DONATE</Link></button>
          
         
          
        </Nav>
      </Navbar.Collapse>
   
  </Navbar>
        </div>
    );
};

export default Header;