import React from "react";
import {getCourses} from '../../util/GetCoursesUtil'
import CoursesCard from "../CoursesCard";
import "./DisplayCourses.css";
import SearchSvg from "../../Assets/search.svg";
import PageNumbers from "./PageNumbers";
import { addToCart, getMyCart, getMyWishlist, ICourses } from "../../Services";
import { useDispatch, useSelector } from "react-redux";
import DialogBox from "../DialogBox/DialogBox";
import { addToWishlist } from "../../Services/Actions/WishlistAction";

const DisplayCourses: React.FC = () => {
  const dispatch = useDispatch();
  const [allCourses, setAllCourses] = React.useState<ICourses[]>([]);
  const [courses, setCourses] = React.useState<ICourses[]>();
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [displayDialog, setDialog] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState('');
  const cart: ICourses[] = useSelector(getMyCart);
  const wishlist: ICourses[] = useSelector(getMyWishlist);
  const [totalPages,setTotalPages] = React.useState<number>(0)

  React.useEffect(() => {
    setCourses(allCourses.slice(currentPage * 6 - 6, currentPage * 6));
    setTotalPages(Math.round(allCourses.length / 6));
  }, [currentPage,allCourses,dispatch]);

  React.useEffect(()=>{
    getCourses().then(async result=>setAllCourses(await result));
  },[])
  
  const addCourseToCart = (course: ICourses) => {
      if(cart.some(e=> e.id===course.id)){
        setDialogMessage('Item Already Exist In Cart')
        setDialog(true);
        return;
      }

        dispatch(addToCart(course));
        setDialogMessage('Item Successfully Added To Cart');
        setDialog(true);
  };

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

  const sortCourses = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let sortedCourses: ICourses[] = [];
    if (e.currentTarget.value === "Select") return;
    e.currentTarget.value === "desc"
      ? (sortedCourses = allCourses.sort((obj1, obj2) => {
          return obj1.cost < obj2.cost ? 1 : -1;
        }))
      : (sortedCourses = allCourses.sort((obj1, obj2) => {
          return obj1.cost > obj2.cost ? 1 : -1;
        }));

    setCurrentPage(1);
    setAllCourses([...sortedCourses]);
  };
  
  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <>
      <div className="d-flex justify-content-between secondary-header row">
      {displayDialog ? (
        <DialogBox closeButton={closeDialog}>
          {dialogMessage}
        </DialogBox>
      ) : (
        ""
      )}
        <div className="my-auto col">All Courses</div>
        <div className="my-auto col-xs-12 col-md-5 row">
          <div className="my-auto col ">
            <select
              className="course-sort"
              onChange={sortCourses}
              placeholder="Course Price"
              defaultValue="Select"
            >
              <option disabled hidden value="Select">
                Course Price
              </option>
              <option value="desc">Cost High First</option>
              <option value="asc">Cost Low First</option>
            </select>
          </div>
          <input type="text" name="search" className="col" />
          <button className="btn text-center p-1 col-1">
            <img src={SearchSvg} alt="Search" />
          </button>
        </div>
      </div>
      <div className="col-12 col-lg-9 courses-list border d-flex flex-column">
        <div className="mb-3">
          {courses?.map((course) => (
            <CoursesCard
              course={course}
              key={course.id}
              addCourseToCart = {addCourseToCart}
              addCourseToWishlist = {addCourseToWishlist}
              wishlist= {wishlist}
            />
          ))}
        </div>
        <div className="pagination-bar mt-auto">
          <PageNumbers
            changePage={(p) => setCurrentPage(+p.currentTarget.value)}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
};

export default DisplayCourses;
