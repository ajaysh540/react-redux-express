import React from "react";
import DeleteIcon from "../../Assets/Delete.png";
import { ICourses } from "../../Services";

type CartCardProps={
  course: ICourses,
  addCourseToCart: (course:ICourses)=>void,
  deleteFromWishlist:(course:ICourses)=>void
}

const WishlistCard: React.FC<CartCardProps> = (cartCardProps) => {
  const {course,addCourseToCart,deleteFromWishlist} = cartCardProps;


  return (
    <div className="row p-0 m-0 course-card shadow mt-3">
     
      <div className="col-4 offset-lg-1 d-flex flex-column">
        <button className="course-name">{course.course_name}</button>
        <div className="mt-auto">
          {course.tags.map((tag) => (
            <div key={tag} className="tags">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="col-2 my-auto small">{course.author}</div>
      <div className="col-2 my-auto course-cost text-center">
        <b>Rs.{course.cost}/-</b>
        <del className="mx-1">Rs.{course.discount_from}/-</del>
      </div>
      <div className="col-2 p-0 my-auto add-to-cart">
        <button onClick={()=>addCourseToCart(course)}>ADD TO CART</button>
      </div>
        <button className="my-auto col-2 wish-del-btn " onClick={()=>deleteFromWishlist(course)}>
          <img className="del-icon" src={DeleteIcon} alt="Delete Course" />
        </button>
    </div>
  );
};

export default WishlistCard;
