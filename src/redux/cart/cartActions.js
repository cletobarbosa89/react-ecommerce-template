import { ADD_ITEM } from "./cartTypes";

export const add_item = (payload) => {
  return {
    type: ADD_ITEM,
    payload: payload,
  };
};
