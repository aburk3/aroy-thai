import React from "react";
import { Link } from "react-router-dom";

import aroyLogo from "../../images/aroy-thai.png";
import classes from "./Logo.module.css";

const Logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <Link to="/">
      <img src={aroyLogo} alt="AroyThai" />
    </Link>
  </div>
);

export default Logo;
