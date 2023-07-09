import { createContext, useContext } from "react";
import { Row, Col, Skeleton } from "antd";
import { Product } from "./Product";
import { fetchAllProducts } from "../../services/productService";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductDetails } from "./ProductDetails";
import { ProductsContext } from "../../App";

export const ProductDetailsContext = createContext();
export const ProductImagesContext = createContext();

const responsive = {
  superLargeDesktop: {
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

export const ProductList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productDetails, setProductDetails] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [products, setProducts] = useContext(ProductsContext);

  const handleProductView = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setProductDetails([]);
    setProductImages([]);
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await fetchAllProducts();
      setProducts(products);
    };

    getAllProducts();
  }, [setProducts]);

  return (
    <>
      <ProductDetailsContext.Provider
        value={[productDetails, setProductDetails]}
      >
        <ProductImagesContext.Provider
          value={[productImages, setProductImages]}
        >
          <Row gutter={[18, 18]}>
            <Col span={24}>
              <h4 style={{ margin: "40px 0 0 0" }}>All products</h4>
            </Col>
            <Col span={24}>
              {products.length ? (
                <Carousel
                  responsive={responsive}
                  containerClass="carousel-container"
                  itemClass="product-item"
                >
                  {products.map((product, index) => {
                    return (
                      <Product
                        key={index}
                        product={product}
                        handleProductView={handleProductView}
                      />
                    );
                  })}
                </Carousel>
              ) : (
                <>
                  <Skeleton active />
                </>
              )}
            </Col>
          </Row>
          <ProductDetails isModalOpen={isModalOpen} onCancel={handleCancel} />
        </ProductImagesContext.Provider>
      </ProductDetailsContext.Provider>
    </>
  );
};
