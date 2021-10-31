import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shears/Header/Header";
import Home from "./Pages/Shears/Home/Home";
import Footer from "./Pages/Shears/Footer/Footer";
import Error from "./Pages/Error/Error";
import OrderPlace from "./Pages/OrderPlace/OrderPlace";
import MyOrder from "./Pages/MyOrder/MyOrder";
import PrivetRoute from "./PrivetRute/PrivetRute";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Contexts/AuthProvider";
import CreateNewOffer from "./Pages/CreateNewOffer/CreateNewOffer";
import ManageOrder from "./Pages/MangeOrders/ManageOrder";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivetRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivetRoute>

            <PrivetRoute path="/orderPlace/:id">
              <OrderPlace></OrderPlace>
            </PrivetRoute>
            <PrivetRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivetRoute>

            <Route path="/createNewOffer">
              <CreateNewOffer></CreateNewOffer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
