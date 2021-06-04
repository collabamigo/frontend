
import React from "react";
import Home from "../../pages/Home";
import { Styles } from "../../styles/styles";
// import ExternalHeader from "../ExternalHeader";
import PropTypes from "prop-types";

function UnauthenticatedHome({onLogin}) {
    return (
        <>
            <Styles />

            {/*<ExternalHeader isAuthenticated={false} />*/}

            <Home onLogin={onLogin} />

        </>
    )
}

UnauthenticatedHome.propTypes = {
  onLogin: PropTypes.func.isRequired
}
export default UnauthenticatedHome
