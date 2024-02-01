import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <div className="logo">
              <div>
                <h1 className="text-white">Samshop</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Explore our diverse collection of fresh blooms, handcrafted
              bouquets, and curated gifts designed to add a touch of elegance to
              every occasion
            </p>
          </Col>
          {/* ===========Top Categories ============== */}
          <Col lg="3" md="3" sm="6" xs="6" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <li className="ps-0 border-0">
                <Link to="#">Flower Bouquets</Link>
              </li>

              <li className="ps-0 border-0">
                <Link to="#">Gifts</Link>
              </li>

              <li className="ps-0 border-0">
                <Link to="#">Plants</Link>
              </li>
            </div>
          </Col>
          {/* =========Quick Links ============== */}
          <Col lg="2" md="3" sm="6" xs="6" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>

              <li className="ps-0 border-0">
                <Link to="/shop">Shop</Link>
              </li>

              <li className="ps-0 border-0">
                <Link to="/cart">Cart</Link>
              </li>

              <li className="ps-0 border-0">
                <Link to="/login">Login</Link>
              </li>

              <li className="ps-0 border-0">
                <Link to="#">Privacy Policy</Link>
              </li>
            </div>
          </Col>
          {/* ======== Footer Contact ================*/}
          <Col lg="3">
            <div className="footer__contact">
              <h4 className="quick__links-title">Contact</h4>

              <li className="ps-0 border-0 d-flex align-items-center gap-2">
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                <p>232-0061 Yokohama Kanagawa Japan</p>
              </li>

              <li className="ps-0 border-0 d-flex align-items-center gap-2">
                <span>
                  <i class="ri-phone-line"></i>
                </span>
                <p>+08095419722</p>
              </li>

              <li className="ps-0 border-0 d-flex align-items-center gap-2">
                <span>
                  <i class="ri-mail-line"></i>
                </span>
                <p>villamerochris@gmail.com</p>
              </li>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright text-center">
              Copyright {year} developed by Christine Mae Villamero. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
