import React, { Component } from 'react';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';



export class FormUserDetails extends Component {

    static propTypes = {
        nextStep: PropTypes.func.isRequired,
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
                hjbjjbhbh

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