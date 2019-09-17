import React, { Fragment } from "react";

const hardcodedMenu = ["Food 1", "Food 2"];

const MenuCard = props => {
  const getMenuOptions = () => {
    // TODO: make API call here
    return hardcodedMenu;
  };

  const menuItems = getMenuOptions().map(item => <li key={item}>{item}</li>);

  return (
    <Fragment>
      <h2>Hi</h2>

      <ul>{menuItems}</ul>
    </Fragment>
  );
};

export default MenuCard;
