import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import injectSheet from 'react-jss'
import classNames from 'classnames';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import logo from '../../logo.svg'
const NavigationBar = (props) => {

    const {  classes , rowIndex } = props;
    const {navDesign , navTab , titleTextDesign } = classes;

    const navbar = (
    <Navbar className={classNames('col-lg-auto',navDesign)}  expand="lg">
          <a className={classNames(titleTextDesign)} > Modern Ladies PG</a> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className={classNames(navTab)}>Home</Nav.Link>
          <Nav.Link href="#link" className={classNames(navTab)}>Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );

    return <>{navbar}</>;

};

const jssStyles = {

    navDesign: {
        backgroundColor:'#f25060',
    },

    titleTextDesign : {
        color:'white !important',
        fontFamily: 'LatoRegular',
        fontSize: '34px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        wordWrap: 'break-word',
        margin:'0 auto',
        padding:'5px',
    },
    navTab: {
        color:'white',
    },
};

export default injectSheet(jssStyles)(NavigationBar);