import logo from './logo.svg';
import './App.css';
import React, { useEffect, useInsertionEffect } from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron} from 'react-bootstrap';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import HomepageSlide from './homepage-slide';
import HomepageTopbar from './homepage-topbar';
import HomepageFooter from './homepage-footer';


function Topic1Love(){
    const [data, setData] = useState([])
  useEffect(()=>{
    fetch("https://phanbas-strapi.herokuapp.com/api/loves")
    .then(res =>res.json())
    .then(data => setData(data.data));
  }, []);
  



    return (
        <>
        <HomepageTopbar/>
        <body>
        <Row>
          <img src={require('./pic/topic1-picshow.png')} ></img>
        </Row>
        
        <br/>
        <div className='topic-text'>
            {data.map((val)=>
                    val.id===2 && <h2 className='topic-text'>{val.attributes.name}</h2>
                )}
        </div>
        
        <Container>
        <Card body>
        <br/>
            {data.map((val)=>
                val.id===2 && <h2 className='desc'>&emsp;&emsp;{val.attributes.desc}</h2>
            )}
        <br/>
        </Card>;
        
        <div style={{ width: '80%', padding:20, textAlign:'center',margin:'auto',marginTop:50 }}>

            {data.map((val)=>
                val.id===3 && <Card.Title><h3 className='name'>{val.attributes.name}</h3></Card.Title>
                
            )}
            <br/>
            <Card.Img variant="top" src={require('./pic/love1.png')} style={{width:'50%',margin:'auto'}} />
                
            
            <div style={{marginTop:20}}>
                {data.map((val)=>
                val.id===3 && 
                <Card.Body>
                    <Card.Text>
                    <p>{val.attributes.desc}</p>
                    </Card.Text>
                    <h3 className='bold'>คาถาบูชา</h3>
                    <Card.Text>
                    {val.attributes.spell}
                    </Card.Text>
                    <h3 className='bold'>ของไหว้บูชา</h3>
                    <Card.Text>
                    {val.attributes.gift}
                    </Card.Text>
                    <h3 className='bold'>เวลาในการขอพร</h3>
                    <Card.Text>
                    {val.attributes.time}
                    </Card.Text>
                    <h3 className='bold'>การเดินทาง</h3>
                    <Card.Text>
                    {val.attributes.travel}
                    </Card.Text>
                </Card.Body>
                
            )}
            </div>
            
                
        </div>
        
        <div style={{ width: '80%', padding:10, textAlign:'center',margin:'auto',marginTop:50 }}>

            {data.map((val)=>
                val.id===4 && <Card.Title><h3 className='name'>{val.attributes.name}</h3></Card.Title>
                
            )}
            <br/>
            <Card.Img variant="top" src={require('./pic/love2.png')} style={{width:'50%',margin:'auto'}} />
            <br/>
            <div style={{marginTop:20}}>
                {data.map((val)=>
                val.id===4 && 
                <Card.Body>
                    <Card.Text>
                    <p>{val.attributes.desc}</p>
                    </Card.Text>
                    <h3 className='bold'>คาถาบูชา</h3>
                    <Card.Text>
                    {val.attributes.spell}
                    </Card.Text>
                    <h3 className='bold'>ของไหว้บูชา</h3>
                    <Card.Text>
                    {val.attributes.gift}
                    </Card.Text>
                    <h3 className='bold'>เวลาในการขอพร</h3>
                    <Card.Text>
                    {val.attributes.time}
                    </Card.Text>
                    <h3 className='bold'>การเดินทาง</h3>
                    <Card.Text>
                    {val.attributes.travel}
                    </Card.Text>
                </Card.Body>
                
            )}
</div>
            
                
        </div>

        <div style={{ width: '80%', padding:10, textAlign:'center',margin:'auto',marginTop:50 }}>

            {data.map((val)=>
                val.id===5 && <Card.Title><h3 className='name'>{val.attributes.name}</h3></Card.Title>
                
            )}
            <br/>
            <Card.Img variant="top" src={require('./pic/love3.png')} style={{width:'50%',margin:'auto'}} />
            <br/>
            <div style={{marginTop:20}}>
                {data.map((val)=>
                                val.id===5 && 
                <Card.Body>
                    <Card.Text>
                    <p>{val.attributes.desc}</p>
                    </Card.Text>
                    <h3 className='bold'>คาถาบูชา</h3>
                    <Card.Text>
                    {val.attributes.spell}
                    </Card.Text>
                    <h3 className='bold'>ของไหว้บูชา</h3>
                    <Card.Text>
                    {val.attributes.gift}
                    </Card.Text>
                    <h3 className='bold'>เวลาในการขอพร</h3>
                    <Card.Text>
                    {val.attributes.time}
                    </Card.Text>
                    <h3 className='bold'>การเดินทาง</h3>
                    <Card.Text>
                    {val.attributes.travel}
                    </Card.Text>
                </Card.Body>
                                
                            )}
            </div>
            
                
        </div>

        <div style={{ width: '80%', padding:10, textAlign:'center',margin:'auto',marginTop:50 }}>

            {data.map((val)=>
                val.id===6 && <Card.Title><h3 className='name'>{val.attributes.name}</h3></Card.Title>
                
            )}
            <br/>
            <Card.Img variant="top" src={require('./pic/love4.png')} style={{width:'50%',margin:'auto'}} />
            <br/>
            <div style={{marginTop:20}}>
                {data.map((val)=>
                                val.id===6 && 
                <Card.Body>
                    <Card.Text>
                    <p>{val.attributes.desc}</p>
                    </Card.Text>
                    <h3 className='bold'>คาถาบูชา</h3>
                    <Card.Text>
                    {val.attributes.spell}
                    </Card.Text>
                    <h3 className='bold'>ของไหว้บูชา</h3>
                    <Card.Text>
                    {val.attributes.gift}
                    </Card.Text>
                    <h3 className='bold'>เวลาในการขอพร</h3>
                    <Card.Text>
                    {val.attributes.time}
                    </Card.Text>
                    <h3 className='bold'>การเดินทาง</h3>
                    <Card.Text>
                    {val.attributes.travel}
                    </Card.Text>
                </Card.Body>  
                            )}
            </div>
            
                
        </div>
            
        <div style={{ width: '80%', padding:10, textAlign:'center',margin:'auto',marginTop:50 }}>
            {data.map((val)=>
                val.id===7 && <Card.Title><h3 className='name'>{val.attributes.name}</h3></Card.Title>  
            )}
            <br/>
            <Card.Img variant="top" src={require('./pic/love5.png')} style={{width:'50%',margin:'auto'}} />
            <br/>

            <div style={{marginTop:20}}>
                {data.map((val)=>
                                val.id===7 && 
                <Card.Body>
                    <Card.Text><p>{val.attributes.desc}</p>
                    </Card.Text>
                    <h3 className='bold'>คาถาบูชา</h3>
                    <Card.Text>
                    {val.attributes.spell}
                    </Card.Text>
                    <h3 className='bold'>ของไหว้บูชา</h3>
                    <Card.Text>
                    {val.attributes.gift}
                    </Card.Text>
                    <h3 className='bold'>เวลาในการขอพร</h3>
                    <Card.Text>
                    {val.attributes.time}
                    </Card.Text>
                    <h3 className='bold'>การเดินทาง</h3>
                    <Card.Text>
                    {val.attributes.travel}
                    </Card.Text>
                </Card.Body>
                            )}
            </div>
            
                
        </div>
        </Container>
        </body>
        <HomepageFooter/>
        </>
      );
    }


export default Topic1Love;