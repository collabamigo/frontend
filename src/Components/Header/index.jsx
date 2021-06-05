
import React, {useState} from 'react'
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
  NotHidden,
    Outline,
    Burger,
    Label
} from "./styles";
import PropTypes from "prop-types";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import {Drawer, Menu} from "antd";

function ExternalHeader({isAuthenticated}) {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };



  return (
      <HeaderSection className="pt-3 pr-2 pb-5 pl-2">
          <Container>
              <div className="row">
                  <LogoContainer
                      aria-label="homepage"
                      className='col-auto'
                      to="/"
                  >
                      <SvgIcon
                          height="64px"
                          src="logo.svg"
                          width="202px"
                      />
                  </LogoContainer>

                  <div className="col" />

                  { isAuthenticated? 
                      <>
                          <NotHidden>
                              <DropdownMenu />
                          </NotHidden>

                          <Burger onClick={showDrawer}>
                              <Outline />
                          </Burger>

                          <Drawer
                              closable={false}
                              onClose={onClose}
                              visible={visible}
                          >
                              <div
                                  className="col"
                                  style={{ marginBottom: "2.5rem" }}
                              >
                                  <Label onClick={onClose}>
                                      <div className="col">
                                          <Menu>
                                              Menu
                                          </Menu>
                                      </div>

                                      <div className="col">
                                          <Outline />
                                      </div>
                                  </Label>
                              </div>

                              <DropdownMenu />
                          </Drawer>
                      </>:null}

                  {/*<NotHidden className="col" />

                  { isAuthenticated?
                      <div className="mt-3">
                          <DropdownMenu
                              title={localStorage.getItem("userName")}
                              visibility
                          />
                      </div>: null}*/}

              </div>

              {/*<<Drawer
                  closable={false}
                  onClose={onClose}
                  visible={visible}
              >
                  <div className="col" style={{ marginBottom: "2.5rem" }}>
                      Label onClick={onClose}>
                          <div className="col" span={12}>
                              <Menu>
                                  Menu
                              </Menu>
                          </div>

                          <div className="col" span={12}>
                              <Outline />
                          </div>
                      </Label>
                      
                  </div>

              </Drawer>*/}
          </Container>
      </HeaderSection>
  );
}

ExternalHeader.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default withTranslation()(ExternalHeader);
