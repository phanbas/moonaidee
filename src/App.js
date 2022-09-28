
import Topic1 from './topic1';
import Topic1Love from './topic1-love';
import Blogs from './blogger';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron} from 'react-bootstrap';
import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter, } from 'react-router-dom';
import { useEffect, useInsertionEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function App() {
  return(
    <Router>
        <Routes>
          <Route path='/' element ={<Blogs/>}></Route>
          <Route path='/topic1' element ={<Topic1/>}></Route>
          <Route path='/topic1/love' element ={<Topic1Love/>}></Route>
        </Routes>
    </Router>
  )
}


export default App;
