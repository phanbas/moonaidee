
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron} from 'react-bootstrap'
import pic from './pic/picshow.png'
import Carousel from 'react-bootstrap/Carousel';

function HompagePicshow(){
    return(
        
            <Row>
                <img src={pic}></img>
            </Row>
        
    )
}

export default HompagePicshow;