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
      <>
        <Login exact path="/" />;
        <Login exact path="olsoftware/" />;
      </>
    );
  } else {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/olsoftware" component={Home} />
        <Switch>
          {/* <Route exact path="/" component={Hero} />
          <Route exact path="/hero" component={Hero} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/store/pageColor" component={StoreDetail} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
