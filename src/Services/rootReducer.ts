import { combineReducers } from "redux";
import {  cartReducer,wishlistReducer } from "./index";

export default combineReducers({
  'cart': cartReducer,
  'wishlist': wishlistReducer
});
