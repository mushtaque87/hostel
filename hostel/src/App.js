import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/NavigationBar'
import Home from './containers/Home'
import Container from 'react-bootstrap/Container'
import Footer from './components/Footer';
import injectSheet from 'react-jss'
import classNames from 'classnames';

function App() {


    const navbar = (
        <NavigationBar />
    )

    const home = (
        <Home />
    )

    const footer = (
        <Footer />
    )
    
    return (
        <>
        {navbar}
        <Container> 
        {home}
     
        </Container>
        {footer}
        </> 
    );
}

const jssStyles = {

    mainDiv: {
        padding: '!important 100px',
        background: 'black',
    },
}

export default injectSheet(jssStyles)(App);
