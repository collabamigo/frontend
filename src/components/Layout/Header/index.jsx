
import React, {useState} from 'react'
import { SvgIcon } from "../../../common/SvgIcon";
import {NotHidden, Burger, Label} from "./Header.module.css";
import PropTypes from "prop-types";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import { Drawer, Menu } from "antd";
import Link from "common/Link";
import {MenuOutlined} from "@ant-design/icons";

export default function Header({ isAuthenticated }) {
    const [visible, setVisibility] = useState(false);

    const showDrawer = () => {
        setVisibility(!visible);
    };

    const onClose = () => {
        setVisibility(!visible);
    };


    return (
        <header className="mb-3 sticky-top bg-white w-100 pe-4">
            <div className=" row justify-content-center">
                <div className="col-auto ms-5">
                    <Link
                        aria-label="homepage"
                        className='col-auto'
                        to="/"
                    >
                        <SvgIcon
                            height="78px"
                            src="logo.svg"
                            width="300px"
                        />
                    </Link>
                </div>

                <div className="col-auto" />

                <div className={NotHidden+" col align-content-end text-end"}>
                    <DropdownMenu isAuthenticated={isAuthenticated} />
                </div>

                <div
                    className={Burger}
                    onClick={showDrawer}
                >
                    <MenuOutlined />
                </div>

                <Drawer
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <div
                        className="col mb-4"
                    >
                        <span
                            className={Label}
                            onClick={onClose}
                        >
                            <div className="col">
                                <Menu>
                                    Menu
                                </Menu>
                            </div>

                            <div className="col">
                                <MenuOutlined />
                            </div>
                        </span>
                    </div>

                    <DropdownMenu isAuthenticated={isAuthenticated} />
                </Drawer>
            </div>
        </header >
    );
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

