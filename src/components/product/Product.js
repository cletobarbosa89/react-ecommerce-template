import { Card, Button } from "antd";

const Product = ({ product }) => {
  const handleClick = () => {
    console.log("add");
  };

  return (
    <div className="item">
      <Card
        hoverable
        cover={
          <img
            className="product-image"
            alt={product.title}
            src={product.image}
          />
        }
      >
        <div className="product-title">{product.title}</div>
        <div className="product-price">&#8377; {product.price}</div>
        <Button className="product-add" block onClick={handleClick}>
          Add
        </Button>
      </Card>
    </div>
  );
};

export default Product;
