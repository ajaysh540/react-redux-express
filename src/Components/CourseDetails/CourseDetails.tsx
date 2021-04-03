import React from 'react'
import { useParams } from 'react-router';
import { addToCart, getMyCart, getMyWishlist, ICourses } from '../../Services';
import { getCourseById } from '../../util/GetCoursesUtil';
import './CourseDetails.css'
import playPng from '../../Assets/play.png'
import { useDispatch, useSelector } from 'react-redux';
import DialogBox from '../DialogBox/DialogBox';
import { addToWishlist } from '../../Services/Actions/WishlistAction';

type params = {
    id: string
}

const CourseDetails: React.FC = () => {
    const [course, setCourse] = React.useState<ICourses>();
    const { id } = useParams<params>()
    const dispatch = useDispatch();
    const [displayDialog, setDialog] = React.useState(false);
    const [dialogMessage, setDialogMessage] = React.useState('');
    const cart: ICourses[] = useSelector(getMyCart);
    const wishlist: ICourses[] = useSelector(getMyWishlist);

    const addCourseToCart = () => {
        if (cart.some(e => e.id === course?.id)) {
            setDialogMessage('Item Already Exist In Cart')
            setDialog(true);
            return;
        }
        if (course !== undefined) {
            dispatch(addToCart(course));
            setDialogMessage('Item Successfully Added To Cart');
            setDialog(true);
        }
    };

    const addCourseToWishlist = () => {
        if (wishlist.some(e => e.id === course?.id)) {
            setDialogMessage('Item Already Exist In Wishlist')
            setDialog(true);
            return;
        }
        if (course !== undefined) {
            dispatch(addToWishlist(course));
            setDialogMessage('Item Successfully Added To Wishlist');
            setDialog(true);
        }
    };
    const closeDialog = () => {
        setDialog(false);
    };
    React.useEffect(() => {
        getCourseById(id).then(async result => setCourse(await result));
    }, [id])

    return <div className="display-course">
        {displayDialog ? (
            <DialogBox closeButton={closeDialog}>
                {dialogMessage}
            </DialogBox>
        ) : (
            ""
        )}
        <div className="header-text width-option p-3">
            <span>
                Discover Latest Courses on
                        <br /> UI/UX Design
                    </span>
        </div>
        <label>All Courses <b>{'>'} Responsive Design Course</b></label>
        <div className="background ">
            <div className="width-option row">
                <div className="col-12 col-md order-last d-flex justify-content-center row">
                    <div className="video-card col-12">
                        <img src={playPng} alt="Play Video" />
                    </div>
                    <div className="col-12 m-2 text-dark border">
                        <label>Rs.{course?.cost}\-</label>
                        <del>Rs.{course?.discount_from}\-</del>
                        <div className="d-flex justify-content-between">
                            <button className='cart-btn' onClick={addCourseToCart}>Add To Cart</button>
                            <button className='wishlist-btn' onClick={addCourseToWishlist}>Add To Wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-12 d-flex flex-column order-first p-2">
                    <span>{course?.course_name}</span>
                    <p>{course?.course_name}</p>
                    <span className="mt-auto details-box">
                        <label className="">{course?.author}</label>
                        <p className="d-flex mt-auto">{course?.tags.map(tag => (<span key={tag} className="tag">{tag}</span>))}</p>
                    </span>
                </div>
            </div>
        </div>
        <div className="w-50 row p-2">
            <div className="width-option">
                <b className="d-block">Course Details</b>
                <span>{course?.course_details}</span>
            </div>
        </div>

    </div>
}

export default CourseDetails;