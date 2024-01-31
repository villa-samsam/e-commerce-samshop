import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../assets/images/flower-bouquet.png";
import "../styles/home.css";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import counterImg from "../assets/images/counter-timer-img.png";
import products from "../assets/data/products";
import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  // Setting initialization============

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [dealProducts, setDealProducts] = useState([]);

  const year = new Date().getFullYear();

  // =========UseEffect===========

  useEffect(() => {
    const filteredBestSalesProducts = products.filter(
      (item) => item.occassion === "Love and Romance"
    );

    console.log("All products", products);

    const filteredTrendingProducts = products.filter(
      (item) => item.occassion === "Valentines"
    );

    const filteredDealProducts = products.filter(
      (item) => item.price > 100 && item.price < 130
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setDealProducts(filteredDealProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      {/* ---------------Hero Section */}

      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="container hero__content">
                <p className="hero__subtitle">
                  Checkout the most bought bouquet this season!
                </p>
                <h2>
                  Make them feel loved and send them flowers this Valentines
                  Day!
                </h2>
                <p>
                  Welcome to our blooming sanctuary, where the artistry of
                  nature meets the elegance of expression. We curate a symphony
                  of colors, fragrances, and textures to bring you an enchanting
                  world of floral delights. From vibrant bouquets that speak
                  volumes to delicate arrangements that convey your sentiments,
                  each petal is carefully chosen to weave stories of love,
                  celebration, and joy.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="shop__btn">
                  <Link to="/shop"> SHOP NOW </Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="container hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =========End of Hero Section */}

      <Services />

      {/* ----------------Trending Products----------------- */}
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">
                Trending Bouquets of the season
              </h2>
            </Col>

            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      {/* =============Best Sales Products============ */}

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title"> Best Sales</h2>
            </Col>

            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      {/* =================TImer Count Section */}

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="fs-6 mb-2">Limited Offers</h4>
                <h3 className="fs-5 mb-3">Stunning bouquets</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="shop__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      {/*================ Deal of the Day Section  */}

      <section className="new__deals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Deals of the Day</h2>
            </Col>
            <ProductsList data={dealProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
