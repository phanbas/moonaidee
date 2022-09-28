
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row} from 'react-bootstrap'
import pic from './pic/picshow.png'


function HompagePicshow(){
    return(
        
            <Row>
                <img src={pic}></img>
            </Row>
        
    )
}

export default HompagePicshow;