import logo from './logo.svg';
import './App.css';
import React, { useEffect, useInsertionEffect } from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron} from 'react-bootstrap';
import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter, } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import HomepageSlide from './homepage-slide';
import Topic1 from './topic1';
import Profile from './pages/profile';
import ErrorPage from './pages/errorpage';
import pictopic1 from './pic/topic1-picshow.png';

function HomepageTopic(){

    const [data, setData] = useState([])
  useEffect(()=>{
    fetch("https://phanbas-strapi.herokuapp.com/api/loves/")
    .then(res =>res.json())
    .then(data => setData(data.data));
  }, []);

    

    return (
      <>
    
      <Container>
          <Row>
            <Col md={6} className='topic-left hover01'>
            <Link to="/topic1">
              <figure className='position-relative  topicbox'>
                <img src={require('./pic/topic1.png')} alt="" />
              </figure>
            </Link>
            </Col>
            <Col md={6} className='topic-right hover01'>
              <a href="travel-moo.html">
                <figure className='position-relative'>
                  <img src="https://www.checkinchill.com/wp-content/uploads/checkinchill-7-12-2016-101.jpg" alt="" />
                  <figcaption>
                    <h1>Topic2</h1>
                  </figcaption>
                </figure>

              </a>
            </Col>
          </Row>
          <Row>
            <Col md={6} className='topic-left hover01'>
              <a href="travel-moo.html">
                <figure className='position-relative'>
                  <img src="https://moonaidee.s3.ap-northeast-2.amazonaws.com/temple.png" alt="" />
                  <figcaption>
                    <h1>Topic3</h1>
                  </figcaption>
                </figure>

              </a>
            </Col>
            <Col md={6} className='topic-right hover01'>
              <a href="travel-moo.html">
                <figure className='position-relative'>
                  <img src="https://www.checkinchill.com/wp-content/uploads/checkinchill-7-12-2016-101.jpg" alt="" />
                  <figcaption>
                    <h1>Topic4</h1>
                  </figcaption>
                </figure>

              </a>
            </Col>
          </Row>
          <Row>
            <Col md={6} className='topic-left hover01'>
              <a href="travel-moo.html">
                <figure className='position-relative'>
                  <img src="https://moonaidee.s3.ap-northeast-2.amazonaws.com/temple.png" alt="" />
                  <figcaption>
                    <h1>Topic5</h1>
                  </figcaption>
                </figure>

              </a>
            </Col>
            <Col md={6} className='topic-right hover01'>
              <a href="travel-moo.html">
                <figure className='position-relative'>
                  <img src="https://www.checkinchill.com/wp-content/uploads/checkinchill-7-12-2016-101.jpg" alt="" />
                  <figcaption>
                    <h1>Topic6</h1>
                  </figcaption>
                </figure>

              </a>
            </Col>
          </Row>
        </Container>
        
        
        </>
        
      );
    }


export default HomepageTopic;