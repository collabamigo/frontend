
import React from "react"
import PropTypes from "prop-types";

class Step2 extends React.Component {

    static propTypes = {
            currentStep:PropTypes.number.isRequired
        };

    shouldComponentUpdate() {
        return true;
    }

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="username">
                    Add your skills
                </label>

                <br />

                <button
                    className="btn btn-primary mb-2"
                    type="submit"
                    value="Submit"
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default Step2