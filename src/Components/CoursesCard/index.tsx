import React, { useEffect } from "react";
import "./CoursesCard.css";
import notFavStarpng from "../../Assets/notFavStar.svg";
import favStarPng from "../../Assets/FavStar.svg";
import MoreInfoArrow from "../../Assets/MoreInfoArrow.svg";
import {  ICourses } from "../../Services";
import { Link } from "react-router-dom";

type CartCardProps={
  course: ICourses,
  addCourseToCart: (course:ICourses)=>void,
  addCourseToWishlist: (course:ICourses)=>void,
  wishlist: ICourses[]
}

const CoursesCard: React.FC<CartCardProps> = (cartCardProps) => {
  const {course,addCourseToCart,addCourseToWishlist,wishlist} = cartCardProps;
  const [fav,setFav] = React.useState(false)
  
  useEffect(()=>{
    wishlist.forEach(c=>{
      if(c.id === course.id) setFav(true);
    })
  },[wishlist,course])

  return (
    <div className="row p-0 m-0 course-card shadow mt-3">
     
      <div className="col-4 offset-lg-1 d-flex flex-column">
        <Link to={`/course/${course.id}`} className="course-name">{course.course_name}</Link>
        <div className="mt-auto">
          {course.tags.map((tag) => (
            <div key={tag} className="tags">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="col-2 my-auto small">{course.author}</div>
      <div className="col my-auto course-cost text-center">
      <button onClick={()=> addCourseToWishlist(course)}>
        {fav?
          <img src={favStarPng} alt="Fav Course" />:
          <img src={notFavStarpng} alt="Not Fav Course" />}
          </button>
        <b>Rs.{course.cost}/-</b>
        <del className="mx-2 ">Rs.{course.discount_from}/-</del>
      </div>
      <div className="col  p-0 my-auto add-to-cart">
        <button onClick={()=>addCourseToCart(course)}>ADD TO CART</button>
        <img src={MoreInfoArrow} alt="More Info" />
      </div>
    </div>
  );
};

export default CoursesCard;
