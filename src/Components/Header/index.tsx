import React from "react";
import logo from "../../Assets/logo.png";
import shoppingCartSvg from "../../Assets/shoppingCartSvg.svg";
import profileSvg from "../../Assets/profileSvg.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header-default justify-content-between row">
      <Link to="/" className="col">
        <img
          src={logo}
          alt="HashedIn by Deloitte"
          className="nav-brand logo-default"
        />
      </Link>

      <div className="navbar-links col-12 col-md-5 justify-content-end">
        <Link to="/" className="nav-link">
          COURSES
        </Link>
        <Link to="/wishlist" className="nav-link">
          MY WHISHLIST
          </Link>
        <Link to="/checkout" className="nav-link">
          <img src={shoppingCartSvg} alt="shopping Cart" />
        </Link>
        <button className="nav-link">
          <img src={profileSvg} alt="My Profile" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
