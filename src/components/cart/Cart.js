import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, Badge, List, Avatar } from "antd";
import { ShoppingCartOutlined, RightOutlined } from "@ant-design/icons";
// import { fetchProduct } from "../../services/productService";

export const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const cart = useSelector((state) => state.cart);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // set cart data
  useEffect(() => {
    let data = [];
    // cart.map(async (cart) => {
    //   const product = await fetchProduct(cart.id);
    //   console.log(product);
    //   data.push(product);
    //   return true;
    // });

    setCartData(data);
  }, [cart]);

  return (
    <>
      <Button
        className="cart-button"
        size="large"
        type="primary"
        onClick={showModal}
      >
        <Badge size="small" color="#faad14" count={2} showZero>
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
        <>
          <List
            itemLayout="horizontal"
            bordered
            dataSource={cartData}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size={64} src={item.image} />}
                  title={item.title}
                />
              </List.Item>
            )}
          />
        </>
      </Modal>
    </>
  );
};
