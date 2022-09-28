import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap'


function HomepageTopbar() {
  return (
    <div className='top-sticky'>
        <Navbar className='justify-content-between'  expand='lg' style={{ backgroundColor:'black' }}>
          <Navbar.Brand href='/'>
            <img src={require('./pic/logo1.png')} className='logo' />
          </Navbar.Brand>
          <div style={{ display: 'flex' }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>

              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
    </div>
        
      
      
      
  )
}




export default HomepageTopbar;

