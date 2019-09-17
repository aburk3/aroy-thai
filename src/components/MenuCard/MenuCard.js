import React, { Fragment } from "react";
import MenuSection from "./MenuSection";

const hardcodedMenu = {
  appetizers: ["Egg Roll", "Soup"],
  chicken: ["Some chicken"]
};

const getMenuOptions = () => {
  // TODO: make API call here
  return hardcodedMenu;
};

const MenuCard = props => {
  const menuOptions = getMenuOptions();

  const menuSections = Object.keys(menuOptions).map(category => (
    <MenuSection
      items={menuOptions[category]}
      name={category}
      key={category}
    ></MenuSection>
  ));

  return <Fragment>{menuSections}</Fragment>;
};

export default MenuCard;
