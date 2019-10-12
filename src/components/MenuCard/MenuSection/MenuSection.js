import React, { Fragment } from "react";
import MenuItem from "./MenuItem/MenuItem";

import classes from "./MenuSection.module.css";

const MenuSection = props => {
  // TODO: use database id for key instead
  const menuItems = props.items.map(item => (
    <MenuItem item={item} key={item.name} />
  ));
  return (
    <Fragment>
      <div className="col"></div>
      <div className="col-6">
        <h2>{props.name}</h2>
        <ul className={classes.Leaders}>{menuItems}</ul>
      </div>
      <div className="col"></div>
    </Fragment>
  );
};

export default MenuSection;
