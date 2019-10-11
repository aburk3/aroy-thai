import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import MenuCard from "./components/MenuCard/MenuCard";
import Location from "./components/Location/Location";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Layout>
          <Toolbar />
          <br />
          <Route path="/" exact component={LandingPage} />
          <Route path="/menu" exact component={MenuCard} />
          {/* <Route path="/edit/:id" component={EditMenuItem} /> */}
          {/* <Route path="/menuitem" component={CreateMenuItem} /> */}
          <Route path="/location" exact component={Location} />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
