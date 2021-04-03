import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getMyCart, getMyWishlist, ICourses } from '../../Services';
import { delFromWishlist } from '../../Services/Actions/WishlistAction';
import DialogBox from '../DialogBox/DialogBox';
// import PageNumbers from '../DisplayCourses/PageNumbers';
import SearchSvg from "../../Assets/search.svg";
import WishlistCard from './WishlistCard';
import './Wishlist.css'

const Wishlist:React.FC=()=>{
    const dispatch = useDispatch();
    const wishlist:ICourses[] = useSelector(getMyWishlist)
    const [allCourses,setAllCourses] = React.useState<ICourses[]>()
    const [sorted, setSorted] = React.useState(false);
    const [displayDialog, setDialog] = React.useState(false);
    const [dialogMessage, setDialogMessage] = React.useState('');
    // const totalPages = Math.round(wishlist.length / 6);
    const cart: ICourses[] = useSelector(getMyCart);
    
    const addCourseToCart = (course: ICourses) => {
      if (!cart.includes(course)) 
      {
        setDialogMessage('Item Successfully Added To Cart')
        dispatch(addToCart(course));
      }
      else {
        setDialogMessage('Item Already Exist In Cart')
      }
      setDialog(true);
    };
  
    const deleteFromWishlist=(course:ICourses)=>{
        dispatch(delFromWishlist(course))
    }

    useEffect(()=>{
      setAllCourses([...wishlist]);
    },[wishlist,sorted])

    const sortCourses = (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log('called')
      let sortedCourses: ICourses[]|undefined = [];
      if (e.currentTarget.value === "Select") return;
      e.currentTarget.value === "desc"
        ? (sortedCourses = wishlist?.sort((obj1, obj2) => {
          setSorted(true)
          return obj1.cost < obj2.cost ? 1 : -1;
        }))
        : (sortedCourses = wishlist?.sort((obj1, obj2) => {
          setSorted(false)
            return obj1.cost > obj2.cost ? 1 : -1;
          }));
  
      
      setAllCourses(sortedCourses);
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
            {allCourses?.map((course) => (
              <WishlistCard
                course={course}
                key={course.id}
                addCourseToCart = {addCourseToCart}
                deleteFromWishlist={deleteFromWishlist}
              />
            ))}
          </div>
          {/* <div className="pagination-bar mt-auto">
            <PageNumbers
              changePage={(p) => setCurrentPage(+p.currentTarget.value)}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div> */}
        </div>
      </>
    );
}

export default Wishlist;