import React, { Fragment } from "react";
import MenuItem from "./MenuItem";

const MenuSection = props => {
  // TODO: use database id for key instead
  const menuItems = props.items.map(item => (
    <MenuItem item={item} key={item} />
  ));
  return (
    <Fragment>
      <h2>{props.name}</h2>
      <ul>{menuItems}</ul>
    </Fragment>
  );
};

export default MenuSection;
