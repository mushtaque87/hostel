import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Home from './containers/Home'
import Container from 'react-bootstrap/Container'

function App() {

    const navbar = (
        <NavigationBar />
    )

    const home = (
        <Home />
    )
    
    return (
        <Container fluid> 
        {navbar}
        {home}
        </Container>

    );
}

export default App;
