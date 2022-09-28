
import Topic1 from './topic1';
import Topic1Love from './topic1-love';
import Blogs from './blogger';
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';

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
