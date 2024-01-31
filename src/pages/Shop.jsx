import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Bouquet") {
      const filteredProducts = products.filter(
        (item) => item.category === "Flower Bouquet"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "Cake and Bouquet") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cakes"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "Plants") {
      const filteredProducts = products.filter(
        (item) => item.category === "Plants"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "Goodies") {
      const filteredProducts = products.filter(
        (item) => item.category === "Goodies"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    if (value === "low") {
      const sortedHigh = [...products].sort((a, b) => {
        return a.price - b.price;
      });
      setProductsData(sortedHigh);
      console.log(sortedHigh);
    }
    if (value === "high") {
      const sortedLow = [...products].sort((a, b) => {
        return b.price - a.price;
      });
      setProductsData(sortedLow);
      console.log(sortedLow);
    }
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      {/* ============Shop section */}

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="Bouquet">Bouquet</option>
                  <option value="Cake and Bouquet">Cake and Bouquet</option>
                  <option value="Plants">Plants</option>
                  <option value="Goodies">Goodies</option>
                </select>
              </div>
            </Col>

            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option>Sort By</option>
                  <option value="high">Highest price</option>
                  <option value="low">Lowest price</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search ..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h2 className="text-center fs-4">No products found!</h2>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
