
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
                <label className="col-auto col-form-label">
                    Add your skills
                </label>

                <div>
                    <input
                        data-role="tagsinput"
                        type="text"
                    />
                </div>

                <br />

                <button
                    className="btn btn-primary mb-2"
                    onChange={this.handleChange}
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