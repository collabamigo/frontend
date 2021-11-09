import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class FormPersonalDetails extends Component {

    static propTypes = {
        nextStep: PropTypes.func.isRequired,
        prevStep: PropTypes.func.isRequired,
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
            <div title="Enter Personal Details" />

            {/* <TextField
                    defaultValue={values.occupation}
                    fullWidth
                    label="Occupation"
                    margin="normal"
                    onChange={handleChange('occupation')}
                    placeholder="Enter Your Occupation"
                /> */}

            <br />

            {/* <TextField
                    defaultValue={values.city}
                    fullWidth
                    label="City"
                    margin="normal"
                    onChange={handleChange('city')}
                    placeholder="Enter Your City"
                /> */}

            <br />

            {/* <TextField
                    defaultValue={values.bio}
                    fullWidth
                    label="Bio"
                    margin="normal"
                    onChange={handleChange('bio')}
                    placeholder="Enter Your Bio"
                /> */}

            <br />

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

export default FormPersonalDetails;