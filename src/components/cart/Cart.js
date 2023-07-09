import React, { useState } from "react";
import { Button, Modal, Badge } from "antd";
import { ShoppingCartOutlined, RightOutlined } from "@ant-design/icons";

export const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(4);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        className="cart-button"
        size="large"
        type="primary"
        onClick={showModal}
      >
        <Badge size="small" color="#faad14" count={count}>
          <ShoppingCartOutlined />
        </Badge>
        Checkout
        <RightOutlined />
      </Button>
      <Modal
        title="My cart"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName="cart-modal"
        style={{
          top: 0,
          right: 0,
          position: "absolute",
          height: "100%",
          paddingBottom: 0,
        }}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <>Products added to cart</>
      </Modal>
    </>
  );
};
