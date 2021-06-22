import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Content from "./content/Content";
import Lumos from "./lumos/Lumos.js";
import Shop from "./shop/Shop";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <>
          <div className="App">
            <Route exact path="/">
              <Content />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/lumos">
              <Lumos />
            </Route>
          </div>
        </>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
