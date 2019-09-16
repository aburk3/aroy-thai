import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import MenuCard from "./components/MenuCard/MenuCard"


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={MenuCard} />
        {/* <Route path="/edit/:id" component={EditMenuItem} /> */}
        {/* <Route path="/menuitem" component={CreateMenuItem} /> */}
      </div>
    </Router>
  );
}

export default App;
