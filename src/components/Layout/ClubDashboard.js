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
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "@reach/router";

import DemoNavbar from "../ClubDasboard/resources/Navbars/DemoNavbar";
import Footer from "../ClubDasboard/resources/Footer/Footer";
import Sidebar from "../ClubDasboard/resources/Sidebar/Sidebar";
import FixedPlugin from "../ClubDasboard/resources/FixedPlugin/FixedPlugin";

import routes from "../ClubDasboard/routes";

var ps;

function Dashboard(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };
  return (
      <div className="wrapper">
          <Sidebar
              {...props}
              activeColor={activeColor}
              bgColor={backgroundColor}
              routes={routes}
          />

          <div
              className="main-panel"
              ref={mainPanel}
          >
              <DemoNavbar {...props} />

              <Switch>
                  {routes.map((prop, key) => {
            return (
                <Route
                    component={prop.component}
                    // eslint-disable-next-line react/no-array-index-key
                    key={key}
                    path={prop.layout + prop.path}
                />
            );
          })}
              </Switch>

              <Footer fluid />
          </div>

          <FixedPlugin
              activeColor={activeColor}
              bgColor={backgroundColor}
              handleActiveClick={handleActiveClick}
              handleBgClick={handleBgClick}
          />
      </div>
  );
}

export default Dashboard;
