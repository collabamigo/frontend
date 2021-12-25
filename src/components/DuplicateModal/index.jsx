import PropTypes from "prop-types";
import React from "react";
import {headingWithTopMargin} from "styles/typography.module.css";
import {Modal} from "react-bootstrap";
import {Form, Formik, Field} from "formik";
import Button from "react-bootstrap/Button";
import axios from "../../utilities/axios";
import Loading from "../Loading";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {isBrowser} from "../../utilities/auth";
import FormBuilder from "../CreateEventModal/FormBuilder";
import TextEditor from "components/TextEditor";

export default class CreateEventModal extends React.Component {

    static propTypes = {
        description: PropTypes.string.isRequired,
        handleClose: PropTypes.func.isRequired,
        router: PropTypes.shape({
            isReady: PropTypes.bool.isRequired,
            push: PropTypes.func.isRequired,
            query: PropTypes.shape({
                clubName: PropTypes.string.isRequired
            })
        }).isRequired,
        show: PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            stage: 1,
            description: "",
            
        }
    }

    componentDidMount() {
        this.componentDidUpdate()
    }


    shouldComponentUpdate(){
        return true;
    }

    componentDidUpdate() {
        if (this.props.router.isReady) {
            if (this.state.promo === null) {
                console.log("promo is null");
                // suppression needed
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({
                    promo: `Hello everyone. ${this.props.router.query.clubName} presents to you a new event! Check it out at <<link>>!`
                })
            }
        }
    }

    setFormBuilderState(formBuilder){
        this.setState({formBuilder: formBuilder});
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
                }).then(()=>this.props.router.push("/event/"+res.data.id));
            else
                this.props.router.push("/manageevent/"+res.data.id);
        })
    }

    setDescription(description){
        this.setState({description: description});
    }

    render() {
        const isReady = this.state.promo!==null;

        if (this.state.stage === null || !isReady) {
            return <Loading />
        }
        else {
            return (
                <div>

                    <Modal
                        className=" rounded-5"
                        contentClassName="border-0 m-0 rounded-5"
                        dialogClassName="mw-50 w-100"
                        onEntered={() => this.setState((prevState) => ({
                            modalOpened: {
                                ...prevState.modalOpened,
                                1: true
                            }
                        }))}
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

                                    <Formik
                                        initialValues={{
                                            description: this.props.description,
                                            
                                        }}
                                        onSubmit={(values) => {
                                            if (values.isFormConnected)
                                                this.setState({...values, stage: 2})
                                            else
                                                this.setState({...values}, this.uploadEventDetails.bind(this))
                                        }}
                                    >
                                        <Form className="justify-content-center mt-3">

                                            

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
                                                    handleSetDescription={this.setDescription.bind(this)}
                                                />
                                            </div>

                                        </Form>

                                    </Formik>
                                </Modal.Body>

                                <Modal.Footer> 
                                    {' '}

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

                    <Modal
                        className="mw-100 rounded-5"
                        contentClassName="border-0 m-0 rounded-5"
                        dialogClassName="mw-75 w-75"
                        onEntered={() => this.setState((prevState) => ({
                            modalOpened: {
                                ...prevState.modalOpened,
                                2: true
                            }
                        }))}
                        show={this.state.stage === 2}
                    >
                        <div
                            className="bg-dark text-white rounded-5 px-4 pb-4"
                        >
                            <div>
                                <FormBuilder
                                    setState={this.setFormBuilderState.bind(this)}
                                    state={this.state.formBuilder}
                                />

                                <div className="row">
                                    <div className="col-6">
                                        <Button
                                            className=" fs-5"
                                            onClick={() => {
                                            this.setState({stage: 1})
                                        }}
                                            type="submit"
                                            variant="primary"
                                        >

                                            <FontAwesomeIcon icon={faChevronLeft} />

                                            {' '}
                                            Edit Event details
                                        </Button>
                                    </div>

                                    <div className="col-6 text-end">
                                        <Button
                                            className=" fs-5"
                                            onClick={this.uploadEventDetails.bind(this)}
                                            type="submit"
                                            variant="primary"
                                        >
                                            Submit
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            )
        }
    }
}
