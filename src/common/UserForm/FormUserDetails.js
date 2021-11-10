import React, { Component } from 'react';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'



export class FormUserDetails extends Component {

    static propTypes = {
        nextStep: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
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