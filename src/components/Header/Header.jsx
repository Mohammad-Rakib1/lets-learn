import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
    return (
      <Navbar  activeKey={location.pathname} collapseOnSelect expand='lg' bg="light" variant="light" className='shadow-sm'>
        <Container className='fw-bold '>
          <Navbar.Brand className='fs-1' href="#home" style={{color:'rgb(66,66,230)'}}>Let's Learn</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='lg-d-flex justify-content-end'>
            <Nav activeKey={location.pathname}>
              <Nav.Link className='me-5' href="/home">Home</Nav.Link>
              <Nav.Link className='me-5' href="/blog">Blog</Nav.Link>
              <Nav.Link className='me-5' href="/services">Statistics</Nav.Link>
              {/* <Nav.Link className='me-5' href="/about">About</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;