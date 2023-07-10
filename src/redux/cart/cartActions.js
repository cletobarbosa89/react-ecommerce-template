import { UPDATE_CART } from "./cardTypes";

// Update cart
export const update_cart = (payload) => {
  return {
    type: UPDATE_CART,
    payload: payload,
  };
};
