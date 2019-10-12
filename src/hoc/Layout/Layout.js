import React, { Component } from "react";

import classes from "./Layout.module.css";
import Logo from "../../components/Logo/Logo";

class Layout extends Component {
  render() {
    return (
      <div>
        <Logo />
        <main className={classes.Content}>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
