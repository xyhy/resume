import { React } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import './Header.css';

import avatar from '../avatar.jpg'

function Header() {


  return (
    <Navbar className='nav-bar' expand='md'>
      <Container id='headerContainer'>
        <NavLink to='/about' className='link' reloadDocument>
          <Navbar.Brand id='brand'>
            <Image id='picture' src={avatar} />
            Y.Y
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav navbar={true}>
            <NavLink to='/about/' className='link' id='about' reloadDocument>About</NavLink>
            <NavLink to='/project/' className='link' id='project' reloadDocument>Projects</NavLink>
            <NavLink to='/course/' className='link' id='course' reloadDocument>Courses</NavLink>
            <NavLink to='/contact/' className='link' id='contact' reloadDocument>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;