
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

function ExternalHeader({ isAuthenticated }) {
    const [visible, setVisibility] = useState(false);

    const showDrawer = () => {
        setVisibility(!visible);
    };

    const onClose = () => {
        setVisibility(!visible);
    };



    return (
        <HeaderSection className="pt-3 pr-2 pb-5 pl-2">
            <div className="container-fluid lowwl">
                <div className=" row justify-content-center">
                    <div className="col ml-5">
                        <LogoContainer
                            aria-label="homepage"
                            className='col-auto'
                            href="/"
                        >
                            <SvgIcon
                                height="68px"
                                src="logo.svg"
                                width="221px"
                            />
                        </LogoContainer>
                    </div>

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

ExternalHeader.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

export default withTranslation()(ExternalHeader);
