
import React from "react"
import PropTypes from "prop-types";
import Autocomplete from "../../../Ask/Autocomplete";
import TagsInput from 'react-tagsinput'
import './tag.css'

class Step2 extends React.Component {

    static propTypes = {
        currentStep: PropTypes.number.isRequired,
        handlePrev: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            found_match: false,
            temp_l: [],
            tags: [],
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    handleChange(value) {
        this.setState({"searchTerm": value});
    }

    handleMatch = () => {
        this.setState({"found_match": true});
    }

    handleChangeTag(tags) {
        this.setState({tags: tags})
    }

    renderAutocomplete({addTag, ...props}) {
        console.log(props)
        return (
            <div>
                <Autocomplete
                    onChange={(val) => this.handleChange(val)}
                    onMatch={(val) => {
                    this.handleMatch.bind(this)
                    if (!this.state.tags.includes(val)) {
                        addTag(val)
                    }
                }}
                    searchTerm={this.state.searchTerm}
                    suggestions={this.state.temp_l}
                    version={2}
                />
            </div>
            
        )
    }
    handleSubmit() {
        this.props.handleSubmit(this.state.tags)
    }
    previousButton() {
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        return (
            <button
                className="btn btn-secondary"
                onClick={this.props.handlePrev}
                type="button"
            >
                Previous
            </button>
        )
      }
      return null;
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

                <div className="center">
                    <TagsInput
                        onChange={this.handleChangeTag.bind(this)}
                        renderInput={this.renderAutocomplete.bind(this)}
                        value={this.state.tags}
                    />
                </div>

                <br />

                {this.previousButton()}

                <button
                    className="btn btn-primary mb-2"
                    onChange={this.handleChange}
                    onClick={this.handleSubmit.bind(this)}
                    type="button"
                    value="Submit"
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default Step2
