import React, { Component } from 'react';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class FormUserDetails extends Component {

    static propTypes = {
        handleChange: PropTypes.func.isRequired,
        handleChangeDate: PropTypes.func.isRequired,
        handleChangeTags: PropTypes.func.isRequired,
        nextStep: PropTypes.func.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        values:PropTypes.object.isRequired

    }
    

    constructor(props) {
        super(props);

        this.handleContinue = this.handleContinue.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }

  handleContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };



  render() {
    return (
        <div>
            <div
                fullWidth
                maxWidth='sm'
                open
            >
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="ProjectDetails"
                    >

                        <Form.Control 
                            onChange={this.props.handleChange('project_name')}
                            placeholder="Project Name"
                            type="text"
                            value={this.props.values.project_name}
                        />

                        <Form.Control 
                            as="textarea"
                            onChange={this.props.handleChange('project_description')}
                            placeholder="Project Description"
                            value={this.props.values.project_description}
                        />

                        <ReactTagInput 
                            onChange={(newTags) => this.props.handleChangeTags(newTags)} 
                            tags={this.props.values.project_tags}
                        />

                        <DatePicker
                            onChange={(date) => this.props.handleChangeDate(date)}
                            selected={this.props.values.date_of_est}
                        />


                        <div className="form-floating">
                            <select
                                aria-label="hello"
                                className="form-select"
                                id="floatingSelect"
                                onChange={this.props.handleChange('stage')}
                            >

                                <option
                                    selected
                                    value="i"
                                >
                                    Initiation
                                </option>

                                <option value="p">
                                    Planning
                                </option>

                                <option value="e">
                                    Execution
                                </option>

                                <option value="mc">
                                    Monitoring and Controlling
                                </option>

                                <option value="c">
                                    Concluding
                                </option>
                            </select>

                            <label htmlFor="floatingSelect">
                                Stage of project
                            </label>
                        </div>

                    </Form.Group>

                </Form>

                <button
                    color="primary"
                    onClick={this.handleContinue}
                    type="button"
                    variant="contained"
                >
                    Continue
                </button>
            </div>
        </div>
    );
  }
}

export default FormUserDetails;