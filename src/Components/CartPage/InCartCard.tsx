import React from "react";
import { ICourses } from "../../Services";
import DeleteIcon from "../../Assets/Delete.png";


type CartProps={
  course: ICourses,
  deleteFromCart: any,
  addCourseToWishlist:any
}

const InCartCard: React.FC<CartProps> = (cartProps) => {
  const {course,deleteFromCart,addCourseToWishlist} =cartProps;

  return (
    <div className="cart-card d-flex justify-content-between shadow mt-3 p-1">
      <div className="d-flex flex-column w-50">
        <span id="course-name" className="w-50">
          {course.course_name}
        </span>
        <span id="course-author">{course.author}</span>
      </div>
      <span className="w-50 d-flex justify-content-between">
        <button className="my-auto whishlist-button" onClick={()=> addCourseToWishlist(course)}>Move To Wishlist</button>
        <b className="my-auto">Rs.{course.cost}/-</b>
        <button className="my-auto" onClick={()=>deleteFromCart(course)}>
          <img className="del-icon" src={DeleteIcon} alt="Delete Course" />
        </button>
      </span>
    </div>
  );
};

export default InCartCard;
