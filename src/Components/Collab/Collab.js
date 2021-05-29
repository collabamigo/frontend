import React from "react";
import "./Collab.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Collab(props) {

    let label;
    label = localStorage.getItem("userName")
        ? localStorage.getItem("userName")
        : "";

    return (
        <div
            className={props.className}
            id="header"
        >
            <div className="row">
                <div className="col-3" />

                <h1 className="col-6">
                    {" "}

                    {/* eslint-disable-next-line react/jsx-no-undef */}

                    <Link
                        className="link-collab link-collab:hover"
                        to="/"
                    >
                        {props.title}
                    </Link>

                    {" "}
                </h1>

                <div className="account text-right col-3">
                    {" "}

                    <DropdownMenu
                        title={label}
                        visibility={Boolean(localStorage.getItem("userName"))}
                    />

                    {" "}
                </div>

            </div>
        </div>

    );

}

Collab.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

}
export default Collab;
