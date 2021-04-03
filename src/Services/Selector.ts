import { ICourses } from "./index";

export const getMyCart = (state: any): Array<ICourses> => {
  return state?.cart?.cart || [];
};


export const getMyWishlist = (state: any): Array<ICourses> => {
  return state?.wishlist?.wishlist || [];
};
