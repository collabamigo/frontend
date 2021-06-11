
import React from "react"
import PropTypes from "prop-types";
import Autocomplete from "../../../Ask/Autocomplete";
import TagsInput from 'react-tagsinput';
import Card from 'react-bootstrap/Card';
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

    handleChangeTag(tags) {
        this.setState({tags: tags})
    }

    renderAutocomplete({addTag, }) {
        return (
            <div>
                <Autocomplete
                    onChange={(val) => this.handleChange(val)}
                    onMatch={(val) => {
                    if (!this.state.tags.includes(val))
                        addTag(val)
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
            <section className="container-fluid">
                <div className="row" >

                    <div className="col-auto container" >
                        <Card className="card rounded-5 profilecard container border-primary">

                            <Card.Header className="card-hf-color row">
                                <div className="h1 float-left col-auto float-left">
                                    Add your skills
                                </div>

                                <div className="material-icons-outlined float-right col-auto">
                                    playlist_add
                                </div>
                                
                            </Card.Header>

                            <Card.Body className="pt-4 mt-0">
                                <div>
                                    <div className="form-group justify-content-center">

                                        <div className="row justify-content-center">
                                            <div className="justify-content-center col-mb-12">
                                                <TagsInput
                                                    className="border-0"
                                                    onChange={this.handleChangeTag.bind(this)}
                                                    renderInput={this.renderAutocomplete.bind(this)}
                                                    value={this.state.tags}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </Card.Body>

                            <Card.Footer className="custom-modal-footer-p pb-4">
                                <div className="row justify-content-center">
                                    {this.previousButton()}

                                    <div className="pl-2">

                                        <button
                                            className="btn btn-primary"
                                            onChange={this.handleChange}
                                            onClick={this.handleSubmit.bind(this)}
                                            type="button"
                                            value="Submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </section>
        );
    }
}

export default Step2
