import { CartAction, ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from "../";
import { GET_CART } from "../Actions/CartAction";
import { ICourses } from "../Model";

const initialState = {
  cart: [] as ICourses[]
}

export function cartReducer(state = initialState, action: CartAction) {
  switch (action.type) {
    case ADD_TO_CART:
      let newCart = [...state.cart, action.cart];
      state.cart=newCart
      return state;
    case DELETE_FROM_CART:
      const filteredCart= state.cart.filter(course=> {
        return (course.id!==action.cart.id)
      }
        )
        state.cart = filteredCart
      return state;
    case CLEAR_CART:
      state.cart=[]
      return state;
    case GET_CART:
      return state;
    default:
      return state;
  }
}
