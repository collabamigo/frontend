/* eslint-disable react/prop-types */
/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { NavLink } from "@reach/router";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "../../../../../static/img/logo.png";

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
      <div
          className="sidebar"
          data-active-color={props.activeColor}
          data-color={props.bgColor}
      >
          <div className="logo">
              <a
                  className="simple-text logo-mini"
                  href="https://www.creative-tim.com"
              >
                  <div className="logo-img">
                      <img
                          alt="react-logo"
                          src={logo}
                      />
                  </div>
              </a>

              <a
                  className="simple-text logo-normal"
                  href="https://www.creative-tim.com"
              >
                  Creative Tim
              </a>
          </div>

          <div
              className="sidebar-wrapper"
              ref={sidebar}
          >
              <Nav>
                  {props.routes.map((prop, key) => {
            return (
                <li
                    className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                    // eslint-disable-next-line react/no-array-index-key
                    key={key}
                >
                    <NavLink
                        activeClassName="active"
                        className="nav-link"
                        to={prop.layout + prop.path}
                    >
                        <i className={prop.icon} />

                        <p>
                            {prop.name}
                        </p>
                    </NavLink>
                </li>
            );
          })}
              </Nav>
          </div>
      </div>
  );
}

export default Sidebar;
