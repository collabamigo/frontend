
import React from 'react'
import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  Label,
  Outline,
} from "./styles";

function ExternalHeader() {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };


  return (
      <HeaderSection>
          <Container>
              <Row justify="space-between">
                  <LogoContainer
                      aria-label="homepage"
                      to="/"
                  >
                      <SvgIcon
                          height="64px"
                          src="logo.svg"
                          width="202px"
                      />
                  </LogoContainer>

                  <NotHidden />

                  <Burger onClick={showDrawer}>
                      <Outline />
                  </Burger>
              </Row>

              <Drawer
                  closable={false}
                  onClose={onClose}
                  visible={visible}
              >
                  <Col style={{ marginBottom: "2.5rem" }}>
                      <Label onClick={onClose}>
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

              </Drawer>
          </Container>
      </HeaderSection>
  );
}

export default withTranslation()(ExternalHeader);
