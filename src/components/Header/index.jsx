
import React, {useState} from 'react'
// import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
    HeaderSection,
    NotHidden,
    // Outline,
    // Burger,
    // Label
} from "./styles";
import PropTypes from "prop-types";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
// import { Drawer, Menu } from "antd";

function Header({ isAuthenticated }) {
    const [visible, setVisibility] = useState(false);

    const showDrawer = () => {
        setVisibility(!visible);
    };

    const onClose = () => {
        setVisibility(!visible);
    };


    console.log("THERE")
    return (
        <HeaderSection className="mt-3 mr-2 mb-3 ml-2">
            <div className="container-fluid">
                <div className=" row justify-content-center">
                    <div className="col-auto ml-5">
                        <a
                            aria-label="homepage"
                            className='col-auto'
                            href="/"
                        >
                            <SvgIcon
                                height="78px"
                                src="logo.svg"
                                width="300px"
                            />
                        </a>
                    </div>

                    <div className="col" />

                    <NotHidden>
                        <DropdownMenu isAuthenticated={isAuthenticated} />
                    </NotHidden>

                    {/*<Burger onClick={showDrawer}>
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

                        <DropdownMenu isAuthenticated={isAuthenticated} />
                    </Drawer>*/}
                </div>
            </div>
        </HeaderSection >
    );
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

export default Header;
