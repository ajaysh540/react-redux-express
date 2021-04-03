import { ICourses } from "../Model";

export const GET_CART = "user/GET_CART";
export const ADD_TO_CART = "user/ADD_TO_CART";
export const DELETE_FROM_CART = "user/DELETE_FROM_CART";
export const CLEAR_CART = "user/CLEAR_CART";

type GetCart = {
  type: typeof GET_CART;
  cart: Array<ICourses>;
};

export const getCart = (): GetCart => ({
  type: GET_CART,
  cart: [],
});

type AddToCart = {
  type: typeof ADD_TO_CART;
  cart: ICourses;
};

export const addToCart = (cart: ICourses): AddToCart => {
  return {
    type: ADD_TO_CART,
    cart: cart,
  };
};

type DelFromCart = {
  type: typeof DELETE_FROM_CART,
  cart: ICourses
};

export const delFromCart = (cart: ICourses): DelFromCart => ({
  type: DELETE_FROM_CART,
  cart: cart
});

type ClearCart = {
  type: typeof CLEAR_CART;
};

export const clearCart = (): ClearCart => ({
  type: CLEAR_CART,
});

export type CartAction = AddToCart | DelFromCart | ClearCart | GetCart;
