import React, { useContext, useEffect } from "react";
import { Modal, Row, Col, Skeleton } from "antd";
import { ModalContext } from "./ProductList";
import { ProductGallery } from "../common/ProductGallery";

export const ProductDetails = ({ isModalOpen, onCancel }) => {
  const [productDetails, setProductDetails] = useContext(ModalContext);
  const [productImages, setProductImages] = useContext(ModalContext);

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

  useEffect(() => {
    console.log("testing");
    console.log(productDetails);
  });

  return (
    <>
      <Modal
        title="Product View Details"
        centered
        open={isModalOpen}
        onCancel={onCancel}
        width={"100%"}
        destroyOnClose
        afterOpenChange={loadProductDetails}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            {productImages.length ? <ProductGallery /> : <Skeleton active />}
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="flex product-view-container">
              {productDetails ? (
                <div className="flex-item product-view-title">
                  {productDetails.title}
                </div>
              ) : null}
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
