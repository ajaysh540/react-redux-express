import React from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  ICourses, getMyCart } from "../../Services/";
import "./DashboardCart.css";

const DashboardCartBox: React.FC = () => {
  const cart: ICourses[] = useSelector(getMyCart);

  const getTotalPrice=()=>{
    let price = 0;
      cart?.forEach((course) => {
        price = price + course.cost;
      });
      return price;
  }

  return (
    <>
      <div className="col-12 col-md border d-flex flex-column outer-border pb-2 pt-2">
        {cart.length === 0 ? (
          <b className="m-auto">Your cart is empty!</b>
        ) : (
          ""
        )}
        {cart.map((c) => (
          <div className="cart-course shadow" key={c.id}>
            <label>{c.course_name}</label>
            <b>Rs.{c.cost}/-</b>
          </div>
        ))}
        <div className="price-bar text-left justify-content-between">
          <div className="d-flex flex-column">
            <span>Total Cart Value</span>
            <label>Rs.{getTotalPrice()}/-</label>
          </div>
          <Link to="/checkout">
            <button className="checkout-btn">GO TO CHECKOUT</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardCartBox;
