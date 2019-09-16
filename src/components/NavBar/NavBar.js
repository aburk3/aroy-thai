import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FaAlignRight } from "react-icons/fa";
import classes from "./Navbar.module.css";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Menu</Link>
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/location" className="nav-link">location</Link>
        </li>
      </ul>
      </div>
    </nav>
    );
  }
}