import React from "react";
import classes from "./Location.module.css";

const Location = props => {
  return (
    <>
      <div>
        <h2>
          <u>Location</u>
        </h2>

        <div>966 Government St,</div>
        <div>Mobile, AL 36604</div>
      </div>
      <br />
      <br />
      <div>
        <h2>
          <u>Hours</u>
        </h2>
        <table className={classes.Table}>
          <tr>
            <td>Sunday</td>
            <td>11AM–9PM</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>11AM–9PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>11AM–9PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>11AM–9PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>11AM–10PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>11AM–10PM</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Location;
