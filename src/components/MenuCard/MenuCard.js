import React, { Fragment } from "react";
import MenuSection from "./MenuSection/MenuSection";

// TODO: destroy
const hardcodedMenu = {
  appetizers: [
    { name: "City Egg Roll", price: 1 },
    { name: "City Soup", price: 1 }
  ],
  chicken: [
    {
      name: "City Chicken",
      price: 8,
      description: "whatever thai chicken is like"
    }
  ]
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
