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
import Topic1 from './topic1';
import Topic1Love from './topic1-love';
import Blogs from './blogger';


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
