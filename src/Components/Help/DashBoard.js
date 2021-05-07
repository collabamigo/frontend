import React from "react";

// eslint-disable-next-line react/prefer-stateless-function
class DashBoard extends React.Component {

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {

        return false;

    }

    render () {

        return (
            <h1>
                Dashboard
                <span className="material-icons">
                    dashboard
                </span>
            </h1>
        );

    }

}

export default DashBoard;
