import logo from './logo.svg';
import './App.css';
import React, { useEffect, useInsertionEffect } from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './Homepage';
import Topic2 from './topic2';
import Topic3 from './topic3';
import Topic1 from './topic1';
import Topic1Love from './topic1-love';


function App() {
  return(
    <Router>
        <Routes>
          <Route path='/' element ={<Homepage/>}></Route>
          <Route path='/topic1' element ={<Topic1/>}></Route>
          <Route path='/topic2' element ={<Topic2/>}></Route>
          <Route path='/topic3' element ={<Topic3/>}></Route>
          <Route path='/topic1/love' element ={<Topic1Love/>}></Route>
        </Routes>
    </Router>
  )
}


export default App;
