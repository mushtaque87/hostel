import React, { Component } from 'react';
import injectSheet from 'react-jss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import AboutUs from '../../components/AboutUs'
import  PictureGallery from '../../components/PictureGallery'
class Home extends Component {

    render() { 
        return <Container fluid>
        <AboutUs/>
        <PictureGallery/>
        {/* {pictureGallery} */}
        </Container>
    }

};

export default (Home);