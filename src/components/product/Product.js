import { Card } from "antd";
import { useContext } from "react";
import { ProductDetailsContext } from "./ProductList";
import { AddProductButton } from "../common/AddProductButton";

export const Product = ({ product, handleProductView }) => {
  const [productDetails, setproductDetails] = useContext(ProductDetailsContext);

  // Get product details
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
        <AddProductButton productId={product.id} />
      </Card>
    </div>
  );
};
