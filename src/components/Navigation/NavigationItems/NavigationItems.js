import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Aroy Thai
    </NavigationItem>
    <NavigationItem link="/location">Location/Hours</NavigationItem>
  </ul>
);

export default NavigationItems;
