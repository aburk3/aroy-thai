import React from "react";

import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <div className={classes.Contact}>
      <a href="tel:251-408-9001">251-408-9001</a>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
