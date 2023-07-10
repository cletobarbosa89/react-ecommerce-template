import { createContext, useContext, Suspense } from "react";
import { Row, Col, Skeleton } from "antd";
import { Product } from "./Product";
import { fetchAllProducts } from "../../services/productService";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductDetails } from "./ProductDetails";
import { ProductsContext } from "../../App";
import { responsive } from "../common/responsiveCarouselBreakpoints";

export const ProductDetailsContext = createContext();
export const ProductImagesContext = createContext();

export const ProductList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productDetails, setProductDetails] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [products, setProducts] = useContext(ProductsContext);

  // Open modal for product details
  const handleProductView = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleCancel = () => {
    setIsModalOpen(false);
    setProductDetails([]);
    setProductImages([]);
  };

  // get products
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
                <Suspense fallback={<Skeleton active />}>
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
                </Suspense>
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
