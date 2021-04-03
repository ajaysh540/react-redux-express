import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ICourses } from "../../../Services";
import InCartCard from "../InCartCard";

const course: ICourses = {
  course_name: "Respoinsive Design Course On React With Hooks",
  id: 0,
  author: "Vonda Marquez",
  cost: 394,
  tags: ["react"],
  discount_from: 1009,
  course_details:
    "Minim fugiat commodo ad dolor nisi est elit sit do in non laborum aliquip ea. Quis aliqua in est sunt in in id. Non sint anim duis ut cillum ut magna qui voluptate enim.\r\n",
};

test('renders cart course card', () => {
  render(<BrowserRouter>
    <InCartCard addCourseToWishlist={() => { }} course={course} deleteFromCart={() => { }} />
  </BrowserRouter>
  );
  const linkElement = screen.getByText('Move To Wishlist');
  expect(linkElement).toBeInTheDocument();
});