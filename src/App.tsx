import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import CartPage from "./Components/CartPage/CartPage";
import React from "react";
import { Provider } from "react-redux";
import store from "./Services/Store/rootStore";
import CourseDetails from "./Components/CourseDetails/CourseDetails";

function App() {

  return (
    <React.StrictMode>
      <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout" component={CartPage}  exact/>
          <Route path="/course/:id" component={CourseDetails}  exact/>
          <Route path="/" component={Dashboard}  />
        </Switch>
      </Router>
    </Provider>
    </React.StrictMode>
  );
}

export default App;
