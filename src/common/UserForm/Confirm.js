import React, { Component } from 'react';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


export class Confirm extends Component {

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
    // PROCESS FORM //
    this.props.nextStep();
  };

  handleBack = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
        <div>
            <div
                fullWidth
                maxWidth='sm'
                open
            >
                <div title="Confirm User Data" />

                <ul>
                    <li>
                        <span>
                            hello
                        </span>
                    </li>

                    <li>
                        <span>
                            hello
                        </span>
                    </li>

                    <listenerCount>
                        <span>
                            hello
                        </span>
                    </listenerCount>

                    <li>
                        <span>
                            hello
                        </span>
                    </li>

                    <li>
                        <span>
                            hello
                        </span>
                    </li>

                    <li>
                        <span>
                            hello
                        </span>
                    </li>
                </ul>

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
                    Confirm & Continue

                </button>
            </div>
        </div>
    );
  }
}

export default Confirm;