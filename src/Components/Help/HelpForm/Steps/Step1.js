
import React from "react";
import PropTypes from "prop-types";

class Step1 extends React.Component {
    static propTypes = {
            Contact:PropTypes.string.isRequired,
            Github:PropTypes.string.isRequired,
            Handle:PropTypes.string.isRequired,
            LD:PropTypes.string.isRequired,
            currentStep:PropTypes.number.isRequired,
            handleChangeContact:PropTypes.func.isRequired,
            handleChangeGithub:PropTypes.func.isRequired,
            handleChangeHandle:PropTypes.func.isRequired,
            handleChangeLD:PropTypes.func.isRequired,
    };

    shouldComponentUpdate () {
        return true;
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
                                onChange={this.props.handleChangeLD}
                                placeholder="LinkedIn account"
                                required
                                type='text'
                                value={this.props.LD}
                            />
                        </div>
                    </div>

                    <br />

                    <div />
                </>
            );
        }
    }
}

export default Step1;
