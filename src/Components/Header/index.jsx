
import React, { useState } from 'react'
import { withTranslation } from "react-i18next";
// import Container from "../../common/Container";
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
import { Drawer, Menu } from "antd";

function Header({ isAuthenticated }) {
    const [visible, setVisibility] = useState(false);

    const showDrawer = () => {
        setVisibility(!visible);
    };

    const onClose = () => {
        setVisibility(!visible);
    };



    return (
        <HeaderSection className="mt-3 mr-2 mb-3 ml-2">
            <div className="container-fluid lowwla">
                <div className=" row justify-content-center">
                    <div className="col ml-5">
                        <LogoContainer
                            aria-label="homepage"
                            className='col-auto'
                            href="/"
                        >
                            <SvgIcon
                                height="78px"
                                src="logo.svg"
                                width="300px"
                            />
                        </LogoContainer>
                    </div>

                    <div className="col-1" />

                    {isAuthenticated ?
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
                                    className="col mb-4"
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
                        </> : null}
                </div>
            </div>
        </HeaderSection >
    );
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

export default withTranslation()(Header);
