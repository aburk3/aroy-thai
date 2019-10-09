import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.module.css";

import { Card } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Menu
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/location" className="nav-link">
                Location
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
