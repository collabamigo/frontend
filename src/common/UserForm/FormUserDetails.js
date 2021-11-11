import React, { Component } from 'react';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";

export class FormUserDetails extends Component {

    static propTypes = {
        handleChange: PropTypes.func.isRequired,
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
                            type="text"
                            value={this.props.values.project_name}
                        />

                        <ReactTagInput 
                            onChange={(newTags) => this.props.handleChangeTags(newTags)} 
                            tags={this.props.values.project_tags}
                        />




                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>
                            Example textarea
                        </Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>

                    
                    <div className='row'>
                        <div className='col'>
                            <Form.Control 
                                onChange={this.props.handleChange('fname')}
                                placeholder="First name"
                                type="text"
                                value={this.props.values.fname}

                            />
                        </div>

                        <div className='col'>
                            <Form.Control 
                                onChange={this.props.handleChange('lname')}
                                placeholder="Last name"
                                type="text"
                                value={this.props.values.lname}
                            />
                        </div>
                    </div>

                    <br />

                    <div className='row'>
                        <div className='col'>
                            <Form.Control 
                                onChange={this.props.handleChange('batch')}
                                placeholder="Batch"
                                type="text"
                                value={this.props.values.batch}

                            />
                        </div>

                        <div className='col'>
                            <Form.Control 
                                onChange={this.props.handleChange('course')}
                                placeholder="Course"
                                type="text"
                                value={this.props.values.course}

                            />
                        </div>
                    </div>

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