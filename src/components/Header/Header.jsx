import React, {useRef, useEffect} from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import userIcon from '../../assets/images/user-icon.png';
import 'remixicon/fonts/remixicon.css';
import {motion} from 'framer-motion';

const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  }

]

const Header = () => {

  const headerRef = useRef(null)

  const menuRef = useRef(null);

  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll', ()=>{
      if (document.body.scrollTop > 80 || 
        document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      } else{
        headerRef.current.classList.remove('sticky__header')
      }
    });
  };

  useEffect(() =>{
    stickyHeaderFunc();

    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle('nav__active')

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt='logo'/>
              <div>
                <h1>Samshop</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {
                  nav__links.map((item, index) => (
                    <NavLink 
                    to={item.path}
                    className={(navClass) =>
                    navClass.isActive ? "nav__active" : ""}>
                      {item.display}
                    </NavLink>
                  ))
                }
              </ul>
            </div>

            <div className="nav__icons">
              <span className='fav__icon'><i class="ri-heart-line"></i>
              <span className="badge">1</span>
              </span>
              
              <span className='cart__icon'><i class="ri-shopping-bag-line"></i>
              <span className="badge">1</span>
              </span>
              
              <span className='user-icon'><motion.img whileTap={{scale: 1.2}} src={userIcon} alt=''/></span>
            </div>

            <div className="mobile__menu">
              <span onClick={menuToggle}>
                <i class="ri-menu-line"></i></span>
            </div>
          </div>
        </Row>
      </Container>

    </header>
  )
}

export default Header;