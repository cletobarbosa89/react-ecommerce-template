import React, { useState } from "react";
import { Button, Modal, Badge } from "antd";
import { ShoppingCartOutlined, RightOutlined } from "@ant-design/icons";

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);

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
      <Badge count={count}>
        <Button className="cart-button" type="primary" onClick={showModal}>
          <ShoppingCartOutlined />
          Checkout
          <RightOutlined />
        </Button>
      </Badge>
      <Modal
        title="My cart"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{
          top: 0,
          right: 0,
          position: "absolute",
          height: "100%",
          paddingBottom: 0,
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default Cart;
