import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Home from './containers/Home'
import Container from 'react-bootstrap/Container'
import Footer from './components/Footer';

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
        <Container fluid> 
        {navbar}
        {home}
        {footer}
        </Container>

    );
}

export default App;
