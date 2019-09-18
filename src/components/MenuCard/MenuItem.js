import React from "react";

const MenuItem = props => {
  return (
    <li>
      <div className="row">
        <div className="col-sm">{props.item.name}</div>
        <div className="col-sm">${props.item.price}</div>
      </div>
      <i>{props.item.description && props.item.description}</i>
    </li>
  );
};

export default MenuItem;
