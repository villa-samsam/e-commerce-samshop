import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {motion} from 'framer-motion';
import './services.css';

import serviceData from '../assets/data/serviceData';

const Services = () => {
  return (
    <section className="services">
    <Container>
        <Row>
            {
                serviceData.map((item, index) =>(
                    <Col lg='3' md='4' key={index}>
                    <div className="service__item" style={{background: `${item.bg}`}}>
                        <span>
                            <i class={item.icon}></i>
                        </span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                </Col>
                ))
            }

        </Row>
    </Container>
  </section>
  )
  

}

export default Services;

//https://www.youtube.com/watch?v=4GMljXR1h78&list=PLCtnre5Uo1JVC-W0waIAN1pCFCAzXhqSd&index=5&t=2396s

//47:00