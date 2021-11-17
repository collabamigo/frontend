import React, { Component } from 'react';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


export class Confirm extends Component {

    static propTypes = {
        nextStep: PropTypes.func.isRequired,
        prevStep: PropTypes.func.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        values: PropTypes.object.isRequired,
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
                            Project name : 
                            {' '}

                            {this.props.values.project_name}
                        </span>
                    </li>

                    <li>
                        <span>
                            Project Description : 
                            {' '}

                            {this.props.values.project_description}
                        </span>
                    </li>

                    <li>
                        <span>
                            Project Tages : 
                            {' '}

                            {this.props.values.project_tags.map(item => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <li >
                                        {item}
                                    </li>);
                            })}
                        </span>
                    </li>

                    <li>
                        <span>
                            Date of Birth : 
                            {' '}

                            {this.props.values.date_of_est.toString()}
                        </span>
                    </li>

                    <li>
                        <span>
                            Visibility : 
                            {' '}

                            {this.props.values.visible ? "Yes" : "No"}
                        </span>
                    </li>

                    <li>
                        <span>
                            Stage : 
                            {' '}

                            {this.props.values.stage === "i" ? "Initiation" : (this.props.values.stage === "p" ? "Planning" : (this.props.values.stage === "e" ? "Execution" : (this.props.values.stage === "mc" ? "Monitoring and Controlling" : (this.props.values.stage === "c"  ? "Concluding" : null))))}
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