import React from "react";
import "./Collab.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

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

                    {props.title}

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

export default Collab;
