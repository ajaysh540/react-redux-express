import { WishlistAction } from "../";
import { ADD_TO_WISHLIST, DELETE_FROM_WISHLIST,GET_WISHLIST } from "../";
import { ICourses } from "../Model";

const initialState = {
  wishlist: [] as ICourses[]
}

export function wishlistReducer(state = initialState, action: WishlistAction) {
  switch (action.type) {

    case ADD_TO_WISHLIST:
      let newCart = [...state.wishlist, action.wishlist];
      state.wishlist=newCart
      return state;
    
    case DELETE_FROM_WISHLIST:
      const filteredCart= state.wishlist.filter(course=> {
        return (course.id!==action.wishlist.id)
      }
        )
        state.wishlist = filteredCart
      return state;
    
    case GET_WISHLIST:
      return state;
    
    default:
      return state;
  }
}
