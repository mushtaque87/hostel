import React, { Component } from 'react';
import injectSheet from 'react-jss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

class Home extends Component {

    render() {
        const pictureGallery = (
            <Row>
                <Col>1 of 3</Col>
                <Col md="auto">Variable width content</Col>
                <Col xs lg="2">
                    3 of 3
                </Col>
            </Row>
        )
        return <Container fluid>
        {pictureGallery}
        </Container>
    }

};

export default (Home);