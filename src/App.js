import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MenuCard from "./components/MenuCard/MenuCard";
import Location from "./components/Location/Location";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br />
        <Route path="/" exact component={MenuCard} />
        {/* <Route path="/edit/:id" component={EditMenuItem} /> */}
        {/* <Route path="/menuitem" component={CreateMenuItem} /> */}
        <Route path="/location" exact component={Location} />
      </div>
    </Router>
  );
}

export default App;
