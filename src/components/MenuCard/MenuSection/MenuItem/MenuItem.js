import React from "react";

import { Card } from "react-bootstrap";
import classes from "./MenuItem.module.css";

const MenuItem = props => {
  return (
    // <li>
    //   <div className="row">
    //     <div className="col-sm">{props.item.name}</div>
    //     <div className="col-sm">${props.item.price}</div>
    //   </div>
    //   <i>{props.item.description && props.item.description}</i>
    // </li>

    // <Card style={{ width: "16rem" }}>
    //   <Card.Img variant="top" src="../../images/spring-rolls.jpeg" />
    //   <Card.Body>
    //     <Card.Title>{props.item.name}</Card.Title>
    //     <Card.Text>${props.item.price}</Card.Text>
    //     <Card.Text>
    //       {props.item.description && props.item.description}
    //     </Card.Text>
    //   </Card.Body>
    // </Card>

    // <li className={classes.List}>
    //   <i className={classes.First}>{props.item.name}</i>
    //   <i className={classes.Price}>${props.item.price}</i>
    // </li>

    <li>
      <span>{props.item.name}</span>
      <span>${props.item.price}</span>
    </li>
  );
};

export default MenuItem;
