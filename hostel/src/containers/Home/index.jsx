import React, { Component } from 'react';
import injectSheet from 'react-jss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import AboutUs from '../../components/AboutUs'
import  PictureGallery from '../../components/PictureGallery'
import Location from '../../components/Location'

class Home extends Component {

    render() { 
        return <Container className>
        <AboutUs/>
        <PictureGallery/>
        <Location/>
        {/* {pictureGallery} */}
        {/* <Pricing/> */}
        <br></br>
        <br></br>
        <br></br>
        </Container>
    }

};

export default (Home);