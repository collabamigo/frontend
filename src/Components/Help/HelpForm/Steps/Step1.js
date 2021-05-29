
import React from "react";
import PropTypes from "prop-types";

class Step1 extends React.Component {
    static propTypes = {
            Contact:PropTypes.string.isRequired,
            Github:PropTypes.string.isRequired,
            Handle:PropTypes.string.isRequired,
            Linkedin:PropTypes.string.isRequired,
            currentStep:PropTypes.number.isRequired,
            handleChangeContact:PropTypes.func.isRequired,
            handleChangeGithub:PropTypes.func.isRequired,
            handleChangeHandle:PropTypes.func.isRequired,
            handleChangeLinkedin:PropTypes.func.isRequired,
            handleNext: PropTypes.func.isRequired
    };

    shouldComponentUpdate () {
        return true;
    }

    nextButton(){
        return (
            <button
                className="btn btn-primary"
                onClick={this.props.handleNext}
                type="button"
                value="Next"
            >
                Next
            </button>
        )
    }
    render (){
        if (this.props.currentStep !== 1) {
            return null
        }
        else
        {
            return (
                <>
                    <div className="form-group row">
                        <label className="col-auto col-form-label">
                            Handle
                        </label>

                        <div>
                            <input
                                className="form-control col-auto"
                                onChange={this.props.handleChangeHandle}
                                placeholder="@instagram"
                                required
                                type='text'
                                value={this.props.Handle}
                            />

                        </div>
                    </div>

                    <br />

                    <div className="form-group row">
                        <label className="col-auto col-form-label">
                            Contact
                        </label>

                        <div>
                            <input
                                className="form-control col-auto"
                                onChange={this.props.handleChangeContact}
                                placeholder="Mobile Number"
                                required
                                type='number'
                                value={this.props.Contact}
                            />
                        </div>
                    </div>

                    <br />

                    <div className="form-group row">
                        <label className="col-auto col-form-label">
                            Github Profile
                        </label>

                        <div>
                            <input
                                className="form-control col-auto"
                                onChange={this.props.handleChangeGithub}
                                placeholder="Github account"
                                required
                                type='text'
                                value={this.props.Github}
                            />
                        </div>
                    </div>

                    <br />

                    <div className="form-group row">
                        <label className="col-auto col-form-label">
                            LinkedIn Profile
                        </label>

                        <div>
                            <input
                                className="form-control col-auto"
                                onChange={this.props.handleChangeLinkedin}
                                placeholder="paste your LinkedIn URL"
                                required
                                type='text'
                                value={this.props.Linkedin}
                            />
                        </div>
                    </div>

                    <br />

                    <div />

                    {this.nextButton()}
                </>
            );
        }
    }
}

export default Step1;
