import React from "react";
import {headingWithTopMargin} from "styles/typography.module.css";
import {Modal} from "react-bootstrap";
import {Form, Formik, Field} from "formik";


export default class NewEvent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stage: 1
        }
    }


    shouldComponentUpdate(): boolean {
        return true;
    }

    render() {

        if (this.state.stage === null) {
            return <div />
        }
        else if (this.state.stage === 1) {
            return (
                <Modal.Dialog
                    className="modal-dialog w-50 mw-100 border-0"
                    contentClassName="border-0"
                >
                    <div
                        className="bg-dark text-white rounded-5 px-4 pb-4"
                    >

                        <h1
                            className={headingWithTopMargin + " fw-bold mb-5"}
                            id="main"
                        >
                            Create new event
                        </h1>

                        <Formik
                            initialValues={{
                            name: "",
                            description: "",
                            date: "",
                            registrationForm: "",
                        }}
                        >
                            <Form>

                                <div className="mb-3">

                                    <label
                                        className="me-2"
                                        htmlFor="name"
                                    >
                                        Event Name
                                    </label>

                                    <Field
                                        id="name"
                                        name="name"
                                        placeholder="Event Name"
                                    />

                                </div>

                                <p className="mb-3 align-middle">
                                    <label
                                        className="me-2 align-middle"
                                        htmlFor="name"
                                    >
                                        Event Description
                                    </label>

                                    <Field
                                        as="textarea"
                                        className="align-middle"
                                        id="name"
                                        name="name"
                                        placeholder="Event Name"
                                    />
                                </p>
                            </Form>

                        </Formik >

                    </div>
                </Modal.Dialog>
            )
        }

    }

}
