import React from "react";
import "./Collab.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import PropTypes from "prop-types";

function Collab (props) {

    let label;
    label = localStorage.getItem("userName")
        ? localStorage.getItem("userName")
        : "";

    return (
        <div className={props.className} >
            <div className="row">
                <div className="col-3" />

                <h1 className="col-6">
                    {" "}

                    {/* eslint-disable-next-line react/jsx-no-undef */}

                    <a
                        className="text-body display-4"
                        href="/"
                    >
                        {props.title}
                    </a>

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
    className:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,

}
export default Collab;
