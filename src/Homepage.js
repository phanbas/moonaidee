import './App.css'
import React, { useEffect, useInsertionEffect } from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomepageTopic from './homepage-topic';
import About from './about';
import HomepageTopbar from './homepage-topbar';
import HomepageSlide from './homepage-slide';
import HomepageFooter from './homepage-footer'
import HompagePicshow from './homepage-picshow';
function Homepage(){
  return (<>
  <HomepageTopbar/>,
  <HompagePicshow/>,
  <HomepageTopic/>,
  <HomepageFooter/>
  
  </>
  )
}




export default Homepage;

