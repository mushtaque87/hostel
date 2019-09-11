import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import injectSheet from 'react-jss'
import classNames from 'classnames';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../../resources/assets/homestaylogoround.png'
const NavigationBar = (props) => {

    const {  classes , rowIndex } = props;
    const {navDesign , navTab , titleTextDesign, locationTextDesign , theTextDesign } = classes;

    const navbar = (
    <Navbar className={classNames('col-lg-auto',navDesign)}  expand="lg">
    <img src={logo} width="100" height="100" class="d-inline-block align-top" alt=""></img>
    <div className={classNames(titleTextDesign)}>
    <a className={classNames(theTextDesign)} > New </a> 
    <a className={classNames(titleTextDesign)} > HomeStay </a> 
    </div>
    
    <a className={classNames(locationTextDesign)} > Padampur </a> 

    </Navbar>
    );


    return <>
    {navbar}
    
        </>;

};

const jssStyles = {

    navDesign: {
        backgroundColor:'#4b5b77',
    },

    titleTextDesign : {
        color:'white !important',
        fontFamily: 'Satisfy, cursive',
        fontSize: '40px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        wordWrap: 'break-word',
        margin:'0 auto',
        padding:'5px',
    },
    locationTextDesign : {
        color:'white !important',
        width: '120px',
        right: '2px',
        bottom:'1px',
        position: 'absolute',
        textAlign: 'end',
        fontFamily: 'LatoRegular',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        wordWrap: 'break-word',
        margin:'0 auto',
        padding:'5px',
    },
    theTextDesign : {
        color:'white !important',
        width: '120px',
        left: '25px',
        top:'-32px',
        position: 'relative',
        textAlign: 'end',
        fontFamily: 'Satisfy, cursive',
        fontSize: '25px',
        fontWeight: 'bold',
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