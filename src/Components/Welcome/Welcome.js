import React from 'react'
import './Welcome.css'
import PropTypes from "prop-types";

// eslint-disable-next-line react/require-optimization
class Welcome extends React.Component{

    static propTypes = {
        visibility: PropTypes.bool,
    };

    static defaultProps={
        visibility:false
    }

    constructor(props) {
        super(props);
        this.state = {
            visibility: props.visibility
        }
    }

    componentDidUpdate() {
        return true
    }

    render() {
        if (!this.state.visibility){
            return (
                <div className="container">
                    Welcome
                </div>
            )
        }
        else{
            return (
                <div />
            )
        }
    }

}

export default Welcome