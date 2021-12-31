import PropTypes from "prop-types";
import React from "react";
import {headingWithTopMargin} from "styles/typography.module.css";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "../../utilities/axios";
import TextEditor from "components/TextEditor";

export default class CreateEventModal extends React.Component {

    static propTypes = {
        description: PropTypes.string.isRequired,
        eventId: PropTypes.string.isRequired,
        handleClose: PropTypes.func.isRequired,
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
        })
    }


    uploadEventDetails() {
        axios.post("club/competition/", {
            clubs: [this.props.router.query.clubName],
            name: this.state.name,
            description: this.state.description,
            event_start: this.state.eventDate,
            link: (this.state.eventLink && !this.state.eventLink.startsWith("http://") && !this.state.eventLink
                .startsWith("https://"))?("https://"+
                this.state.eventLink):this.state.eventLink,
            promotional_message: this.state.promo,
        }).then((res) => {
            if (this.state.isFormConnected)
                axios.post("form/form/", {
                    skeleton: JSON.stringify(this.state.formBuilder[1]),
                    competition: res.data.id,
                    opens_at: this.state.registrationStartDate,
                    closes_at: this.state.registrationDeadlineDate,
                }).then(()=>this.props.router.push("/manageevent/"+res.data.id));
            else
                this.props.router.push("/manageevent/"+res.data.id);
        })
    }


    render() {
        console.log("description222 " + this.props.description);

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

                                        {/* <Field
                                                    as="textarea"
                                                    className="form-control text-input w-100 bg-secondary text-white border-secondary"
                                                    id="description"
                                                    name="description"
                                                    required
                                                /> */}

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
