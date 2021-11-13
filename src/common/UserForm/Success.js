import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


export class Success extends Component {  

    static propTypes = {
        nextStep: PropTypes.func.isRequired,
        prevStep: PropTypes.func.isRequired,
    }
    

    constructor(props) {
        super(props);
    }
  shouldComponentUpdate() {
    return true;
}
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
        <div>
            <div>
                <div title="Success" />

                <h1>
                    Thank You For Your Submission
                </h1>

                <p>
                    You will get an email with further instructions.
                </p>
            </div>
        </div>
    );
  }
}

export default Success;