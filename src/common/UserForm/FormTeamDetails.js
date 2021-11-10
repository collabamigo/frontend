import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'


export class FormTeamDetails extends Component {

    static propTypes = {
        handleChange: PropTypes.func.isRequired,
        nextStep: PropTypes.func.isRequired,
        prevStep: PropTypes.func.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        values:PropTypes.object.isRequired
    }


    constructor(props) {
        super(props);

        this.handleContinue = this.handleContinue.bind(this);
        this.handleBack = this.handleBack.bind(this);

    }

    shouldComponentUpdate() {
        return true;
    }



  handleContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleBack = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
        <div
            fullWidth
            maxWidth='sm'
            open
        >
            <Form>

                <div className='row'>
                    <div className='col'>
                        <Form.Control 
                            onChange={this.props.handleChange('team_size')}
                            placeholder="Team Size"
                            type="text"
                            value={this.props.values.team_size}
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
                color="secondary"
                onClick={this.handleBack}
                type="button"
                variant="contained"
            >
                Back

            </button>

            <button
                color="primary"
                onClick={this.handleContinue}
                type="button"
                variant="contained"
            >
                Continue

            </button>
        </div>
    );
  }
}

export default FormTeamDetails;