// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.module.css";

// export default class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
//         <Link to="/" className="navbar-brand">
//           Menu
//         </Link>
//         <div className="collpase navbar-collapse">
//           <ul className="navbar-nav mr-auto">
//             <li className="navbar-item">
//               <Link to="/location" className="nav-link">
//                 Location
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

/**
 * Testing different code
 */

import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
