import { Button } from "antd";

export const AddProductButton = () => {
  const handleClick = () => {
    console.log("add");
  };

  return (
    <>
      <Button className="product-add" block onClick={handleClick}>
        Add
      </Button>
    </>
  );
};
