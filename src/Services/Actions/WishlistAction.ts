import { ICourses } from "../Model";

export const GET_WISHLIST = "user/GET_WISHLIST";
export const ADD_TO_WISHLIST = "user/ADD_TO_WISHLIST";
export const DELETE_FROM_WISHLIST = "user/DELETE_FROM_WISHLIST";


type GetWishlist = {
    type: typeof GET_WISHLIST;
    wishlist: Array<ICourses>;
  };
  
  export const getWishlist = (): GetWishlist => ({
    type: GET_WISHLIST,
    wishlist: [],
  });
  
  type AddToWishlist = {
    type: typeof ADD_TO_WISHLIST;
    wishlist: ICourses;
  };
  
  export const addToWishlist = (wishlist: ICourses): AddToWishlist => {
    return {
      type: ADD_TO_WISHLIST,
      wishlist: wishlist,
    };
  };
  
  type DelFromWishlist = {
    type: typeof DELETE_FROM_WISHLIST,
    wishlist: ICourses
  };
  
  export const delFromWishlist = (wishlist: ICourses): DelFromWishlist => ({
    type: DELETE_FROM_WISHLIST,
    wishlist: wishlist
  });
  
export type WishlistAction = AddToWishlist | DelFromWishlist |  GetWishlist;
