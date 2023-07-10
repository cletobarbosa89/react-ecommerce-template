import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { update_cart } from "../../redux";

export const AddProductButton = ({ productId }) => {
  const [isAddedToCart, setisAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Add product to cart
  const handleClick = () => {
    const productToAdd = cart;
    setQuantity(1);
    setisAddedToCart(true);
    productToAdd.push({
      id: productId,
      quantity: 1,
    });
    dispatch(update_cart(productToAdd));
  };

  // Remove product/quantity from cart
  const handleRemoveQuantity = () => {
    if (productId) {
      let updatedCart = [];

      if (quantity === 1) {
        updatedCart = cart.filter((cart) => {
          if (cart.id === productId) {
            setQuantity(0);
            setisAddedToCart(false);
            return false;
          }
          return true;
        });
      } else {
        updatedCart = cart.map((cart) => {
          if (cart.id === productId) {
            setQuantity(cart.quantity - 1);
            return {
              id: cart.id,
              quantity: cart.quantity - 1,
            };
          }

          return cart;
        });
      }

      dispatch(update_cart(updatedCart));
    }
  };

  // Add product quantity to cart
  const handleAddQuantity = () => {
    if (productId) {
      let updatedCart = [];
      updatedCart = cart.map((cart) => {
        if (cart.id === productId) {
          setQuantity(cart.quantity + 1);
          return {
            id: cart.id,
            quantity: cart.quantity + 1,
          };
        }

        return cart;
      });

      dispatch(update_cart(updatedCart));
    }
  };

  return (
    <>
      {!isAddedToCart ? (
        <>
          <Button className="product-add" block onClick={handleClick}>
            Add
          </Button>
        </>
      ) : (
        <div className="product-quantity">
          <Button className="product-minus" onClick={handleRemoveQuantity}>
            -
          </Button>
          <div style={{ textAlign: "center" }}>{quantity}</div>
          <Button className="product-plus" onClick={handleAddQuantity}>
            +
          </Button>
        </div>
      )}
    </>
  );
};
