
import React from "react"
import PropTypes from "prop-types";
import Autocomplete from "../../../Ask/Autocomplete";

class Step2 extends React.Component {

    static propTypes = {
            currentStep:PropTypes.number.isRequired
        };

    constructor(props) {
        super(props);
        this.state={
            "searchTerm": "",
            "found_match": false,
            "temp_l": [],
        }
    }
    shouldComponentUpdate() {
        return true;
    }

    handleChange = (value) => {
        this.setState({"searchTerm": value});
    }

    handleMatch = () => {
        this.setState({"found_match": true});
    }

    render() {
        if (this.props.currentStep !== 2) {
            console.log(this.state.found_match)
            return null
        }
        return (
            <div className="form-group">
                <label className="col-auto col-form-label">
                    Add your skills
                </label>

                <div className="center">
                    <Autocomplete
                        onChange={this.handleChange}
                        onMatch={this.handleMatch}
                        searchTerm={this.state.searchTerm}
                        suggestions={this.state.temp_l}
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