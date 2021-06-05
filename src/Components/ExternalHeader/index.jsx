
import React from 'react'
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
  NotHidden,
} from "./styles";
import PropTypes from "prop-types";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function ExternalHeader({isAuthenticated}) {


  return (
      <HeaderSection>
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

                  <NotHidden className="col" />

                  { isAuthenticated?
                      <div className="mt-3">
                          <DropdownMenu
                              title={localStorage.getItem("userName")}
                              visibility
                          />
                      </div>: null}

              </div>

              {/*<<Drawer
                  closable={false}
                  onClose={onClose}
                  visible={visible}
              >
                  <Col style={{ marginBottom: "2.5rem" }}>
                      Label onClick={onClose}>
                          <Col span={12}>
                              <Menu>
                                  Menu
                              </Menu>
                          </Col>

                          <Col span={12}>
                              <Outline />
                          </Col>
                      </Label>
                      
                  </Col>

              </Drawer>*/}
          </Container>
      </HeaderSection>
  );
}

ExternalHeader.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default withTranslation()(ExternalHeader);
