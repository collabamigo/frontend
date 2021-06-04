
import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
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
                className="btn btn-primary col-5"
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
                <div className="container-fluid col-5 ">
                    <Card className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light container  ">

                        <Card.Header>
                            <h2>
                                Hey ! We see you are eager to help others !
                            </h2>

                            <br />
                            In order to help others Please register with us
                        </Card.Header>

                        <Card.Body>
                            <form
                                className="card-body"
                                onSubmit={this.handleSubmit}
                            >
                                <div className="form-group">
                                    <div className="col-auto form-inline col-form-label">

                                        <label>
                                            Telegram Handle
                                        </label>

                                    </div>

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

                                <div className="form-group">
                                    <div className="col-auto form-inline col-form-label">

                                        <label>
                                            Contact Number
                                        </label>


                                    </div>

                                    <div className="row-auto">
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

                                <div className="form-group">
                                    <label className="col-auto form-inline col-form-label">
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

                                <div className="form-group">
                                    <label className="col-auto form-inline col-form-label">
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

                            </form>
                        </Card.Body>

                        <Card.Footer>
                            {this.nextButton()}
                        </Card.Footer>
                    </Card>
                </div>
            );
        }
    }
}

export default Step1;
