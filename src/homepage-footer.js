import logo from './logo.svg';
import './App.css';
import React, { useEffect, useInsertionEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron} from 'react-bootstrap'


function HomepageFooter() {
  return (
    <div>
        <Row style={{backgroundColor:'lightgray', padding: 20}}>
            <Col md={6}>
                <h1 style={{textAlign:'center'}}> Service and Support </h1>
            </Col>
            <Col md={6}>
                <h1 style={{textAlign:'center'}}> Contact </h1>
            </Col>
        </Row>
    </div>
  )
}


export default HomepageFooter;

