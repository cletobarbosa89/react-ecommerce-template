import React, { useContext } from "react";
import { Modal, Row, Col, Skeleton, Rate } from "antd";
import { ProductDetailsContext, ProductImagesContext } from "./ProductList";
import { ProductGallery } from "../common/ProductGallery";
import { AddProductButton } from "../common/AddProductButton";

export const ProductDetails = ({ isModalOpen, onCancel }) => {
  const [productDetails, setProductDetails] = useContext(ProductDetailsContext);
  const [productImages, setProductImages] = useContext(ProductImagesContext);

  const loadProductDetails = (open) => {
    if (open && productDetails) {
      let i = 0;
      const images = [];

      while (i < 5) {
        images.push({
          original: productDetails.image,
          thumbnail: productDetails.image,
          originalClass: "product-image",
        });
        i++;
      }
      setProductImages(images);
    }
  };

  return (
    <>
      <Modal
        title="Product Details"
        centered
        open={isModalOpen}
        onCancel={onCancel}
        width={"95%"}
        destroyOnClose
        afterOpenChange={loadProductDetails}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Row className="product-view-flex">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            {productImages.length ? <ProductGallery /> : <Skeleton active />}
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="product-view-container">
              {productDetails ? (
                <>
                  <div className="product-view product-view-title">
                    {productDetails.title}
                  </div>
                  <div className="product-view product-view-rating">
                    <Rate
                      allowhalf
                      disabled
                      value={
                        productDetails.rating ? productDetails.rating.rate : 0
                      }
                    />
                    <span style={{ marginLeft: "10px" }}>
                      ({productDetails.rating ? productDetails.rating.count : 0}
                      )
                    </span>
                  </div>
                  <div className="product-view product-view-price">
                    <span>Price: </span>
                    <span className="value">
                      &#8377; {productDetails.price}
                    </span>
                  </div>
                  <div className="product-view product-view-category">
                    <span>
                      <b>Category: </b>
                    </span>
                    <br />
                    {productDetails.category}
                  </div>
                  <div className="product-view product-view-description">
                    <span>
                      <b>Description: </b>
                    </span>
                    <br />
                    {productDetails.description}
                  </div>
                  <AddProductButton />
                </>
              ) : null}
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
