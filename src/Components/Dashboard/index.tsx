import React from "react";
import "./Dashboard.css";
import DisplayCourses from "../DisplayCourses";
import DashboardCartBox from "../DashboardCart/Index";
import { Route, Switch } from "react-router";
import Wishlist from "../Wishlist/Wishlist";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard mx-auto">
      <div className="header-text p-3">
        <span>
          Discover Latest Courses on
          <br /> UI/UX Design
        </span>
      </div>
      <div className="row m-0 p-0">
        <Switch>
          <Route path="/wishlist" component={Wishlist} exact/>
          <Route path="/" component={DisplayCourses} exact/>
        </Switch>
        <DashboardCartBox />
      </div>
    </div>
  );
};

export default Dashboard;
