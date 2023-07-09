import { Card, Button } from "antd";
import { useContext } from "react";
import { ModalContext } from "./ProductList";

export const Product = ({ product, handleProductView }) => {
  const [productDetails, setproductDetails] = useContext(ModalContext);

  const handleClick = () => {
    console.log("add");
  };

  const getProductView = () => {
    setproductDetails(product);
    handleProductView();
  };

  return (
    <div className="item">
      <Card
        cover={
          <img
            className="product-image"
            alt={product.title}
            src={product.image}
            onClick={getProductView}
          />
        }
      >
        <div className="product-title" onClick={getProductView}>
          {product.title}
        </div>
        <div className="product-price">&#8377; {product.price}</div>
        <Button className="product-add" block onClick={handleClick}>
          Add
        </Button>
      </Card>
    </div>
  );
};
