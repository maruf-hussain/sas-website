import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';

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
            <NavDropdown.Item href="/finance">Financial System </NavDropdown.Item>
            <NavDropdown.Item href="/area">Working Area</NavDropdown.Item>
           
            <NavDropdown.Item href="/team">Working team</NavDropdown.Item>
            <NavDropdown.Item href="/commite">Executive Committee</NavDropdown.Item>
            <NavDropdown.Item href="/legal">Legal Status </NavDropdown.Item>
            <NavDropdown.Item href="/transport">Vehicle and Transportation</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Training Facilitie</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Office based Facilities</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4"> Existence of Policy</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown  title="PROGRAM" id="basic-nav-dropdown">
            <NavDropdown.Item href="/economic">Economic Development </NavDropdown.Item>
            <NavDropdown.Item href="/health">Reproductive Health, HIV & AIDS</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Agricultural Development</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Human Rights and Good Governance </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Sustainable Agriculture </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Disability Rehabilitation program </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Health & Sanitation </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Education & Capacity Development </NavDropdown.Item>
            <NavDropdown.Item href="/enviroment">Climate Change & Environment</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Cultural Program</NavDropdown.Item>
            <NavDropdown.Item href="/training">Training & Research  </NavDropdown.Item>
          </NavDropdown>
     
          <Nav.Link className='nv-menu' href="#link">BLOG</Nav.Link>
          <NavDropdown  title="WHAT WE DO" id="basic-nav-dropdown">
            <NavDropdown.Item href="/approch">Development Approaches</NavDropdown.Item>
            <NavDropdown.Item href="/patrons">Development Patrons</NavDropdown.Item>
           
            <NavDropdown.Item href="/strategy">Strategies</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='nv-menu' href="/contact">CONTACT</Nav.Link>
          <Link className='donate-button' to='/donate' >DONATE</Link>
          
        </Nav>
      </Navbar.Collapse>
   
  </Navbar>
        </div>
    );
};

export default Header;