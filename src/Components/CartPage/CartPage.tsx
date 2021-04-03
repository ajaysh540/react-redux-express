import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, delFromCart, getMyCart, getMyWishlist, ICourses } from "../../Services";
import InCartCard from "./InCartCard";
import "./CartPage.css";
import DialogBox from "../DialogBox/DialogBox";
import { addToWishlist } from "../../Services/Actions/WishlistAction";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();

  const courses: ICourses[] = useSelector(getMyCart);
  const [dialog, setDialog] = React.useState(false);
  const wishlist: ICourses[] = useSelector(getMyWishlist);
  const [dialogMessage, setDialogMessage] = React.useState('');

  const getTotalPrice = ()=>{
    let price = 0;
      courses?.forEach((course) => {
        price = price + course.cost;
      });
    return price;
  }
  const addCourseToWishlist = (course: ICourses) => {
    if(wishlist.some(e=> e.id===course.id)){
      setDialogMessage('Item Already Exist In Wishlist')
      setDialog(true);
      return;
    }

      dispatch(addToWishlist(course));
      setDialogMessage('Item Successfully Added To Wishlist');
      setDialog(true);
  };
  const getTotalDiscount = ()=>{
    let price = 0;
      courses?.forEach((course) => {
        price = price + course.discount_from;
      });
    return price;
  }

  const checkout= (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    setDialogMessage('You have Successfully placed Your Order')
    setDialog(true);
    dispatch(clearCart())
  }

  const deleteFromCart=(course:ICourses)=>{
    dispatch(delFromCart(course))
  }

  return (
    <div className="dashboard mx-auto">
      {dialog ?
      <DialogBox closeButton={()=> setDialog(false)}>{dialogMessage}</DialogBox>:''}
      <div className="header-text p-3 mb-2 ">
        <span>Shopping Cart</span>
      </div>
      <b>{courses?.length} courses in your cart</b>
      <div className="row m-0 mt-2 p-0">
        <div className="col-9 border">
          {courses?.map((course) => (
            <InCartCard
              course={course}
              deleteFromCart={deleteFromCart}
              addCourseToWishlist={addCourseToWishlist}
              key={course.id}
            />
          ))}
        </div>
        <div className="col shadow total-price p-3">
          <label>Total Price</label>
          <b>Rs.{getTotalPrice()}/-</b>
          <p>You have saved Rs.{getTotalDiscount()}/-</p>
          <button disabled={courses.length!==0?false:true} className="w-100 p-1" onClick={checkout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
