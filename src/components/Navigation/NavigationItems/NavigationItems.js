import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      {/* Unsure whether this should be 'home' or 'main menu' or something else... */}
      Home
    </NavigationItem>
    <NavigationItem link="/location">Location/Hours</NavigationItem>
  </ul>
);

export default NavigationItems;
