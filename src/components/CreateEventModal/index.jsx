import React from "react";
import {headingWithTopMargin} from "styles/typography.module.css";
import {Modal} from "react-bootstrap";
import {Form, Formik, Field} from "formik";
import Button from "react-bootstrap/Button";
import {MdNavigateNext, MdNavigateBefore} from "react-icons/md";
import {IconContext} from "react-icons";
import FormBuilder from "./FormBuilder";
import AdditionalFields from "./AdditionalFields";

export default class CreateEventModal extends React.Component {

    constructor(props) {
        super(props);

        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        this.state = {
            stage: 1,
            name: "",
            description: "",
            eventDate: "",
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

            registrationDeadlineDate: "",
            registrationStartDate: yyyy+"-"+mm+"-"+dd,
        }
    }


    shouldComponentUpdate(){
        return true;
    }

    setFormBuilderState(formBuilder){
        this.setState({formBuilder: formBuilder});
    }

    render() {

        if (this.state.stage === null) {
            return <div />
        }
        else {
            return (
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.


                    <Modal
                        className="mw-100 rounded-5"
                        contentClassName="border-0 m-0 rounded-5"
                        dialogClassName="mw-50 w-50"
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
                                            isFormConnected: this.state.isFormConnected,
                                            registrationDeadlineDate: this.state.registrationDeadlineDate,
                                            registrationStartDate: this.state.registrationStartDate,
                                        }}
                                        onSubmit={(values) => {
                                            this.setState({...values, stage: 2})
                                        }}
                                    >
                                        <Form className="justify-content-center mt-3">

                                            <div className="mb-4">

                                                <label
                                                    className="me-2 fs-5"
                                                    htmlFor="name"
                                                >
                                                    Event Name
                                                </label>

                                                <Field
                                                    className="form-control text-input w-100 bg-secondary text-white border-secondary border-1"
                                                    id="name"
                                                    name="name"
                                                    required
                                                />

                                            </div>

                                            <div className="mb-4">
                                                <label
                                                    className="me-2 fs-5"
                                                    htmlFor="description"
                                                >
                                                    Event Description
                                                </label>

                                                <Field
                                                    as="textarea"
                                                    className="form-control text-input w-100 bg-secondary text-white border-secondary"
                                                    id="description"
                                                    name="description"
                                                    required
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
                                                    className="form-control w-auto text-input bg-secondary text-white border-secondary"
                                                    id="eventDate"
                                                    name="eventDate"
                                                    placeholder="yyyy-mm-dd"
                                                    required
                                                    type="date"
                                                />
                                            </div>

                                            <div className="mb-3">

                                                <Field
                                                    className="form-check-input bg-secondary text-white border-secondary me-3 fs-5"
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

                                            <AdditionalFields />
                                        </Form>

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

                                            <IconContext.Provider
                                            // eslint-disable-next-line react/jsx-no-constructed-context-values
                                                value={{color: "rgb(26,32,44)", "vertical-align": "middle", size: "1.7em"}}
                                            >
                                                <MdNavigateBefore />
                                            </IconContext.Provider>

                                            {' '}
                                            Edit Event details
                                        </Button>
                                    </div>

                                    <div className="col-6 text-end">
                                        <Button
                                            className=" fs-5"
                                            onClick={() => {
                                        this.setState({stage: 1})
                                    }}
                                            type="submit"
                                            variant="primary"
                                        >
                                            Edit Event details
                                            <IconContext.Provider
                                        // eslint-disable-next-line react/jsx-no-constructed-context-values
                                                value={{color: "rgb(26,32,44)", "vertical-align": "middle", size: "1.7em"}}
                                            >
                                                <MdNavigateNext />
                                            </IconContext.Provider>
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
