import React from "react";
import "./Help.css";
import DashBoard from "./DashBoard";
import PropTypes from "prop-types";

// eslint-disable-next-line react/require-optimization
class Ask extends React.Component {

    static propTypes = {
      Vendor : PropTypes.bool.isRequired,
    };

    constructor (props) {

        super(props);
        this.state = {
            "Vendor": props.Vendor
        };

    }

    render () {

        if (this.state.Vendor) {

            return (
                <DashBoard />
            );

        }

        return (
            <div>
                <h1>
                    Sorry you can not help
                </h1>

                <p>
                    In order to help Please register with us
                </p>

            </div>
        );


    }

}

export default Ask;
