import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.token);
  if (!token) {
    return (
      <BrowserRouter>
        <Login exact path="olsoftware/" />;
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" component={Home} />
      </BrowserRouter>
    );
  }
};

export default App;
