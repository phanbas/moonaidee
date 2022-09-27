import logo from './logo.svg';

import React, { useEffect, useInsertionEffect } from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron,Stack} from 'react-bootstrap';
import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter, } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import './blogger.css'
import HomepageTopbar from './homepage-topbar';
import HomepageFooter from './homepage-footer';
import HomepagePicshow from './homepage-picshow';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Blogs(){

    const [data, setData] = useState([])
  useEffect(()=>{
    fetch("https://phanbas-strapi.herokuapp.com/api/loves/")
    .then(res =>res.json())
    .then(data => setData(data.data));
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

    return (
    <>
    <HomepageTopbar/>
    
    <HomepagePicshow/>
    <br/>
    <Container>
        <Row>
            <Col md={6} lg={6}>
                <div className='hover01'>
              <Link to="/topic1">
                <figure>
                    <img className='radius' src={require('./pic/topic1.png')} alt="" />
                </figure>
              </Link>
                </div>
            </Col>
            <Col md={6} lg={6} >
                <Row className='h-100'>
                    <Col md={6} >
                        <div className="hover01">
                              <figure>
                                <img className='radius' src={require('./pic/love2.png')}></img>
                              </figure>
                        </div>
                    </Col>
                    <Col md={6} >
                        <div className="hover01">
                              <figure>
                                <img className='radius' src={require('./pic/love3.png')}></img>
                              </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="hover01">
                              <figure>
                                <img className='radius' src={require('./pic/love4.png')}></img>
                              </figure>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="hover01">
                              <figure>
                                <img className='radius' src={require('./pic/love5.png')}></img>
                              </figure>
                        </div>
                    </Col>
                    
                </Row>
            </Col>
        </Row>
<br/>
      <Card style={{padding:5}}>
        <Carousel responsive={responsive}>
          <div className='m-1'>
            <img className='radius ' src={require('./pic/topic1-love.png')}></img>
          </div>
          <div className='m-1'>
            <img className='radius' src={require('./pic/topic1-healthy.png')}></img>
          </div>
          <div className='m-1'>
            <img className='radius' src={require('./pic/topic1-money.png')}></img>
          </div>
          <div className='m-1'>
            <img className='radius' src={require('./pic/topic1-study.png')}></img>
          </div>
          <div className='m-1'>
            <img className='radius' src={require('./pic/topic1-trade.png')}></img>
          </div>
          <div className='m-1'>
            <img className='radius' src={require('./pic/topic1-work.png')}></img>
          </div>
        </Carousel>;
      </Card>
    </Container>
<br/>


<br/>
    <Container>
      <Row>
        <Col md={4} lg={4}>
          <Card className='box'>
              <Card.Img variant="top" src={require('./pic/love1.png')} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={4}>
          <Card className='box'>
              <Card.Img variant="top" src={require('./pic/love1.png')} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={4}>
          <Card className='box'>
              <Card.Img variant="top" src={require('./pic/love1.png')} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <br/>
    <Container>
      <Row>
        <Col md={4} lg={4}>
          <Card className='box'>
              <Card.Img variant="top" src={require('./pic/love1.png')} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={4}>
          <Card className='box'>
              <Card.Img variant="top" src={require('./pic/love1.png')} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={4}>
          <Card className='box'>
              <Card.Img variant="top" src={require('./pic/love1.png')} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
    <br/>
    
    <HomepageFooter/>
    </>
      );
    }


export default Blogs;