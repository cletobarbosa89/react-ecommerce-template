import { Row, Col, Skeleton } from "antd";
import Product from "./Product";
import { fetchAllProducts } from "../../services/fetchAllProducts";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts().then((products) => {
      setProducts(products);
      console.log(products);
    });
  }, []);

  return (
    <>
      <Row gutter={[18, 18]}>
        <Col span={24}>
          {products.length ? (
            <Carousel
              responsive={responsive}
              containerClass="carousel-container"
              itemClass="product-item"
            >
              {products.map((product, index) => {
                return <Product key={index} product={product} />;
              })}
            </Carousel>
          ) : (
            <Skeleton active />
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProductList;
