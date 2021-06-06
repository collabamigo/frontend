
import React from "react";
import Home from "../../pages/Home";
import { Styles } from "../../styles/styles";
// import Header from "../Header";
import PropTypes from "prop-types";

function UnauthenticatedHome({onLogin}) {
    return (
        <>
            <Styles />

            <Home onLogin={onLogin} />

        </>
    )
}

UnauthenticatedHome.propTypes = {
  onLogin: PropTypes.func.isRequired
}
export default UnauthenticatedHome
