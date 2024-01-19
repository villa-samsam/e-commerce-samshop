import React from 'react';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col} from 'react-bootstrap';
import heroImg from '../assets/images/flower-bouquet.png';
import '../styles/home.css';
import Services from '../services/Services';

const Home = () => {

  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className='hero__section'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
              <div className="container hero__content">
                <p className="hero__subtitle">Most Bought Bouquet this season!</p>
                <h2>Go gift a bouquet for their special day! </h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quod iure facilis aliquam inventore, illum debitis, quasi corrupti consectetur quidem dicta a corporis.</p>
                
                <motion.button whileTap={{ scale: 1.2}} 
                className='shop__btn'>
                  <Link to="/shop"> SHOP NOW </Link>
                  </motion.button>
              </div>
              </Col>

              <Col lg='6' md='6'>
               <div className='container hero__img'>
                <img src={heroImg} alt=''/>
               </div>
              </Col>

            </Row>
          </Container>

      </section>
      <Services/>
    </Helmet>
  )
}

export default Home;