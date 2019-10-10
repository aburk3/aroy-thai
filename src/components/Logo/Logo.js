import React from "react";

import aroyLogo from "../../images/aroy-thai.png";
import classes from "./Logo.module.css";

const Logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={aroyLogo} alt="AroyThai" />
  </div>
);

export default Logo;
