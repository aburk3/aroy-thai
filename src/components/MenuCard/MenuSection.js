import React, { Fragment } from "react";
import MenuItem from "./MenuItem";

import classes from "./MenuSection.module.css";

const MenuSection = props => {
  // TODO: use database id for key instead
  const menuItems = props.items.map(item => (
    <MenuItem item={item} key={item.name} />
  ));
  return (
    <Fragment>
      <h2>{props.name}</h2>
      <ul className={classes.Leaders}>{menuItems}</ul>
    </Fragment>
  );
};

export default MenuSection;
