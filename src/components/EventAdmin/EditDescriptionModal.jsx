import PropTypes from "prop-types";
import React from "react";
import {headingWithTopMargin} from "styles/typography.module.css";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {showAlert} from "common/Toast";
import axios from "utilities/axios";
import TextEditor from "components/TextEditor";

export default class EditDescriptionModal extends React.Component {

    static propTypes = {
        description: PropTypes.string.isRequired,
        eventId: PropTypes.string.isRequired,
        handleClose: PropTypes.func.isRequired,
        setDescription: PropTypes.func.isRequired,
        show: PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            description: props.description,
        };
    }


    shouldComponentUpdate(){
        return true;
    }

    uploadEventDetails(description) {
        axios.patch(`club/competition/${this.props.eventId}/`, {
            description,
        }).then(() => {
            this.props.setDescription(description);
            showAlert("Event description updated successfully", "success");
            this.props.handleClose();

        })
    }


    render() {
            return (
                <div>
                    <Modal
                        className=" rounded-5"
                        contentClassName="border-0 m-0 rounded-5"
                        dialogClassName="mw-50 w-100"
                        show={this.props.show}
                    >
                        <div
                            className="bg-dark text-white rounded-5 px-4 pb-4"
                        >
                            <div>
                                <Modal.Header>

                                    <h1
                                        className={headingWithTopMargin + " fw-bold mb-1"}
                                        id="main"
                                    >
                                        Update Description
                                    </h1>
                                </Modal.Header>

                                <Modal.Body>
                                    <div className="mb-4">
                                        <label
                                            className="me-2 fs-5"
                                            htmlFor="description"
                                        >
                                            Event Description
                                        </label>

                                        <TextEditor
                                            description={this.state.description}
                                            handleSetDescription={(description) => this.setState({description})}
                                        />
                                    </div>
                                </Modal.Body>

                                <Modal.Footer>
                                    {' '}

                                    <Button
                                        className="my-2 w-100"
                                        onClick={() => {
                                            this.uploadEventDetails(this.state.description);
                                            this.props.handleClose();
                                        }}
                                        size="lg"
                                        varient="secondary"
                                    >
                                        Submit
                                    </Button>

                                    <Button
                                        className="my-2 w-100"
                                        onClick={this.props.handleClose}
                                        size="lg"
                                        varient="secondary"
                                    >
                                        Close
                                    </Button>

                                </Modal.Footer>
                            </div>
                        </div>
                    </Modal>
                </div>
            )
        }

}
