import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CoursesCard from '..';
import { ICourses } from '../../../Services';


const course:ICourses = {
  course_name: "Respoinsive Design Course On React With Hooks",
  id: 0,
  author: "Vonda Marquez",
  cost: 394,
  tags: ["react"],
  discount_from: 1009,
  course_details:
    "Minim fugiat commodo ad dolor nisi est elit sit do in non laborum aliquip ea. Quis aliqua in est sunt in in id. Non sint anim duis ut cillum ut magna qui voluptate enim.\r\n",
};
const wishlist:ICourses[] = [{
  course_name: "Respoinsive Design Course On React With Hooks",
  id: 0,
  author: "Vonda Marquez",
  cost: 394,
  tags: ["react"],
  discount_from: 1009,
  course_details:
    "Minim fugiat commodo ad dolor nisi est elit sit do in non laborum aliquip ea. Quis aliqua in est sunt in in id. Non sint anim duis ut cillum ut magna qui voluptate enim.\r\n",
}]


test('Course card renders', () => {
  render(
    <BrowserRouter>
  <CoursesCard addCourseToCart={()=>{}} addCourseToWishlist={()=>{}} course={course} wishlist={wishlist}  />
    </BrowserRouter>);
  const linkElement = screen.getByText('ADD TO CART');
  expect(linkElement).toBeInTheDocument()
});

test('Course in Favs', () => {
  render(<BrowserRouter>
  <CoursesCard addCourseToCart={()=>{}} addCourseToWishlist={()=>{}} course={course} wishlist={wishlist}  />
  </BrowserRouter>)
  const linkElement = screen.getByAltText('Fav Course');
  expect(linkElement).toBeInTheDocument();
});

test('Course not in Favs', () => {
  render(<BrowserRouter>
  <CoursesCard addCourseToCart={()=>{}} addCourseToWishlist={()=>{}} course={course} wishlist={[]}  />
  </BrowserRouter>);
  const linkElement = screen.getByAltText('Not Fav Course');
  expect(linkElement).toBeInTheDocument();
});

