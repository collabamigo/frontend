/* eslint-disable react/jsx-handler-names */
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {


    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: ''
          };

          this.handleChange = this.handleChange.bind(this);
          this.nextStep = this.nextStep.bind(this);
          this.prevStep = this.prevStep.bind(this);
    }
  

  shouldComponentUpdate() {
    return true;
}

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
            <FormUserDetails
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                values={values}
            />
        );
      case 2:
        return (
            <FormPersonalDetails
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
            />
        );
      case 3:
        return (
            <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
            />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;