import PropTypes from "prop-types";
import React from "react";
import {headingWithTopMargin} from "styles/typography.module.css";
import {Modal} from "react-bootstrap";
import {Form, Formik, Field} from "formik";
import Button from "react-bootstrap/Button";
import axios from "utilities/axios";
import Loading from "components/Loading";
import AdditionalFields from "./AdditionalFields";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {isBrowser} from "../../utilities/auth";
import FormBuilder from "./FormBuilder";
import TextEditor from "components/TextEditor";
import {showAlert} from "common/Toast";

export default class CreateEventModal extends React.Component {

    static propTypes = {
        router: PropTypes.shape({
            isReady: PropTypes.bool.isRequired,
            push: PropTypes.func.isRequired,
            query: PropTypes.shape({
                clubName: PropTypes.string.isRequired
            })
        }).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            stage: 1,
            name: "",
            description: "",
            eventDate: "",
            eventEndDate:"",
            eventLink: "",
            formBuilder: {
                1: [],
                2: {
                max: undefined,
                min: undefined,
                pattern: undefined,
                maxLength: undefined,
                minLength: undefined,
                required: undefined,
                name: "",
                type: "",
                options: [],
            }},
            isFormConnected: true,
            modalOpened: {
                1: false,
                2: false,
                3: false,
            },
            promo: null,
            registrationDeadlineDate: "",
            registrationStartDate: "", //yyyy+"-"+mm+"-"+dd,
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
                // suppression needed
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({
                    promo: `Hello everyone. ${this.props.router.query.clubName} presents to you a new event! Check it out at <<link>>!`
                })
            }
        }
    }

    validate(values) {
        const errors = {};

        // if (!values.email) {
        //
        //     errors.email = 'Required';
        //
        // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //
        //     errors.email = 'Invalid email address';
        //
        // }

        console.log("validate", values);
        if (values.eventDate && values.eventEndDate) {
            if (new Date(values.eventDate) > new Date(values.eventEndDate)) {
                errors.eventEndDate = "Event End date must be after start date";
            }
        }

        if (values.registrationStartDate && values.registrationDeadlineDate) {
            if (new Date(values.registrationStartDate) > new Date(values.registrationDeadlineDate)) {
                errors.eventEndDate = "Registration deadline date must be after registration opening date";
            }
        }

        if (values.eventEndDate && new Date(values.eventEndDate) < new Date()) {
            console.log("erer")
            errors.eventEndDate = "Event End date must be in the future";
        }

        if (values.registrationDeadlineDate && new Date(values.registrationDeadlineDate) < new Date()) {
            errors.registrationDeadlineDate = "Registration deadline date must be in the future";
        }

        if (values.registrationStartDate && new Date(values.registrationStartDate) < new Date()) {
            errors.registrationStartDate = "Registration opening date must be in the future";
        }

        if (values.eventDate && new Date(values.eventDate) < new Date()) {
            errors.eventDate = "Event date must be in the future";
        }

        // for (let itr in values) {
        //     const field = formData[itr];
        //     if (field.required && !values[field.id])
        //         errors[field.id] = 'This field is required';
        //
        // }
        return errors;
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
            event_end:this.state.eventEndDate,
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
                }).then(()=> {this.props.router.push("/manageevent/"+res.data.id)
                    showAlert(
                        "Form Created",
                        "success"
                    )});
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
                        show={this.state.stage===1}
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
                                        Create new event
                                    </h1>
                                </Modal.Header>

                                <Modal.Body>

                                    <Formik
                                        initialValues={{
                                            name: this.state.name,
                                            description: this.state.description,
                                            eventDate: this.state.eventDate,
                                            eventEndDate:this.state.eventEndDate,
                                            eventLink: this.state.eventLink,
                                            isFormConnected: this.state.isFormConnected,
                                            promo: this.state.promo,
                                            registrationDeadlineDate: this.state.registrationDeadlineDate,
                                            registrationStartDate: this.state.registrationStartDate,
                                        }}
                                        onSubmit={(values) => {
                                            if (values.isFormConnected)
                                                this.setState({...values, stage: 2})
                                            else
                                                this.setState({...values}, this.uploadEventDetails.bind(this))
                                        }}
                                        validate={this.validate.bind(this)}
                                    >
                                        {({errors, touched}) => {
                                            console.log(errors);
                                            return (
                                                <Form className="justify-content-center mt-3">

                                                    <div className="mb-4">

                                                        <label
                                                            className="me-2 fs-5"
                                                            htmlFor="name"
                                                        >
                                                            Event Name
                                                        </label>

                                                        <Field
                                                            className={"form-control text-input w-100 bg-secondary " +
                                                                "text-white border-secondary border-1" +
                                                                ((touched.name && errors.name) ? " is-invalid" : "")}
                                                            id="name"
                                                            name="name"
                                                            required
                                                        />

                                                        {touched.name && errors.name &&
                                                            <div className="invalid-feedback">
                                                                {errors.name}
                                                            </div>}

                                                    </div>

                                                    <div className="mb-4">
                                                        <label
                                                            className="me-2 fs-5"
                                                            htmlFor="description"
                                                        >
                                                            Event Description
                                                        </label>

                                                        <TextEditor
                                                            description={this.state.description}
                                                            handleSetDescription={this.setDescription.bind(this)}
                                                        />
                                                    </div>

                                                    <div className="mb-3 align-middle">
                                                        <label
                                                            className="me-2 fs-5"
                                                            htmlFor="eventDate"
                                                        >
                                                            Event Date
                                                        </label>

                                                        <Field
                                                            className={"form-control w-auto text-input bg-secondary " +
                                                                "text-white border-secondary" +
                                                                ((touched.eventDate && errors.eventDate) ? " is-invalid" : "")}
                                                            id="eventDate"
                                                            name="eventDate"
                                                            placeholder="yyyy-mm-dd"
                                                            required
                                                            type="datetime-local"
                                                        />

                                                        {touched.eventDate && errors.eventDate &&
                                                            <div className="invalid-feedback">
                                                                {errors.eventDate}
                                                            </div>}
                                                    </div>

                                                    <div className="mb-3 align-middle">
                                                        <label
                                                            className="me-2 fs-5"
                                                            htmlFor="eventEndDate"
                                                        >
                                                            Event End Date
                                                        </label>

                                                        <Field
                                                            className={"form-control w-auto text-input bg-secondary " +
                                                                "text-white border-secondary"+
                                                                ((touched.eventEndDate && errors.eventEndDate) ? " is-invalid" : "")}
                                                            id="eventEndDate"
                                                            name="eventEndDate"
                                                            placeholder="yyyy-mm-dd"
                                                            type="datetime-local"
                                                        />

                                                        {touched.eventEndDate && errors.eventEndDate &&
                                                            <div className="invalid-feedback">
                                                                {errors.eventEndDate}
                                                            </div>}
                                                    </div>

                                                    <div className="mb-3 align-middle">
                                                        <label
                                                            className="me-2 fs-5"
                                                            htmlFor="eventLink"
                                                        >
                                                            Event link (Zoom/Google Meet/etc)
                                                        </label>

                                                        <Field
                                                            className={"form-control text-input w-100 bg-secondary " +
                                                                "text-white border-secondary border-1" +
                                                                ((touched.eventLink && errors.eventLink) ? " is-invalid" : "")}
                                                            id="eventLink"
                                                            name="eventLink"
                                                        />

                                                        {touched.eventLink && errors.eventLink &&
                                                            <div className="invalid-feedback">
                                                                {errors.eventLink}
                                                            </div>}

                                                    </div>

                                                    <div className="mb-3 align-middle">
                                                        <label
                                                            className="me-2 fs-5"
                                                            htmlFor="promo"
                                                        >
                                                            Promotional message
                                                        </label>

                                                        <Field
                                                            as="textarea"
                                                            className={"form-control text-input w-100 bg-secondary " +
                                                                "text-white border-secondary" +
                                                                ((touched.promo && errors.promo) ? " is-invalid" : "")}
                                                            id="promo"
                                                            name="promo"
                                                            required
                                                        />

                                                        {touched.promo && errors.promo &&
                                                            <div className="invalid-feedback">
                                                                {errors.promo}
                                                            </div>}

                                                    </div>

                                                    <div className="mb-3">

                                                        <Field
                                                            className={"form-check-input bg-secondary text-white " +
                                                                "border-secondary me-3 fs-5" +
                                                                ((touched.isFormConnected && errors.isFormConnected) ? " is-invalid" : "")}
                                                            id="isFormConnected"
                                                            name="isFormConnected"
                                                            type="checkbox"
                                                        />

                                                        <label
                                                            className="me-2 fs-5"
                                                            htmlFor="isFormConnected"
                                                        >
                                                            Create a registration form
                                                        </label>


                                                    </div>

                                                    <AdditionalFields
                                                        errors={errors}
                                                        touched={touched}
                                                    />
                                                </Form>);
                                        }}

                                    </Formik>
                                </Modal.Body>
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
