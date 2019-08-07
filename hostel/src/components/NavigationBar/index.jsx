import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import injectSheet from 'react-jss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../../logo.svg'
const NavigationBar = (props) => {

    const navbar = (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Hostel'}
        </Navbar.Brand>
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );

    return <>{navbar}</>;

};

export default (NavigationBar);