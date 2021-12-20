import { Form, Formik, Field } from "formik";
import React from "react";
import { Modal } from "react-bootstrap";

export default function Faq() {
    return (
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => {}}
            show
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    FAQ
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Formik
                    initialValues={{
                        question: "",
                        answer: "",
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="question">
                                    Question
                                </label>

                                <Field
                                    className="form-control"
                                    id="question"
                                    name="question"
                                    type="text"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="answer">
                                    Answer
                                </label>

                                <Field
                                    className="form-control"
                                    id="answer"
                                    name="answer"
                                    type="text"
                                />
                            </div>

                            <button
                                className="btn btn-primary mt-3"
                                disabled={isSubmitting}
                                type="submit"
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
}
