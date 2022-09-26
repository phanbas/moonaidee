import './App.css';
import React, { useEffect, useInsertionEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter, } from 'react-router-dom';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron} from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';
import Topic3 from './topic3';
import Topic4 from './topic4';

function Topic2(){
    return (
        <>

                <Container>
        <Row>
          <img src='https://www.saulbellow.org/wp-content/uploads/2017/12/Myanmar-Wat.jpg'></img>
        </Row>
        <br/>
       

        <Row>
            <Col md ={6} className='topic-left hover01'>
                    <figure  className='position-relative'>
                        <img src="https://www.checkinchill.com/wp-content/uploads/checkinchill-7-12-2016-101.jpg" alt=""/>
                        <figcaption>
                            <h1>topic2</h1>
                        </figcaption>
                    </figure>
            </Col>
            <Col md ={6} className='topic-right hover01'>
                    <figure  className='position-relative'>
                        <img src="https://www.checkinchill.com/wp-content/uploads/checkinchill-7-12-2016-101.jpg" alt=""/>
                        <figcaption>
                            <h1>topic2</h1>
                        </figcaption>
                    </figure>
            </Col>
        </Row>
        </Container>
            
          

        </>
    )
}

/* 
function Topic2(){
    



    return (
      
        <Container>
        <Row>
          <img src='https://www.saulbellow.org/wp-content/uploads/2017/12/Myanmar-Wat.jpg'></img>
        </Row>
        <br/>
       

        <Row>
            <Col md ={6} className='topic-left hover01'>
                    <figure  className='position-relative'>
                        <img src="https://www.checkinchill.com/wp-content/uploads/checkinchill-7-12-2016-101.jpg" alt=""/>
                        <figcaption>
                            <h1>ความรัก</h1>
                        </figcaption>
                    </figure>
            </Col>
            <Col md ={6} className='topic-right hover01'>
                    <figure  className='position-relative'>
                        <img src="https://www.checkinchill.com/wp-content/uploads/checkinchill-7-12-2016-101.jpg" alt=""/>
                        <figcaption>
                            <h1>การงาน</h1>
                        </figcaption>
                    </figure>
            </Col>
        </Row>
        </Container>
      );
    }
*/
export default Topic2;