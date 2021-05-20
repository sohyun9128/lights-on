import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Content from "./content/Content";
import Shop from "./shop/Shop";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
        </div>
      </Switch>
     
      <Footer />
    </>
  );
}

export default App;
