import { Form, Formik, Field } from "formik";
import React from "react";
import { Button, Card, Modal } from "react-bootstrap";

export default function Faq() {
    const [showModal, setShow] = React.useState(false);
    const faqs = [];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <><Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => { }}
            show
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    FAQ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="primary" onClick={handleShow}>
                    +
                </Button>
                <Card
                    style={{
                        width: "100%",
                        height: "100%",
                        margin: "auto",
                        marginTop: "10px",
                    }}
                >
                    <Card.Header>
                        <div className="row">
                            <div className="col-sm-6">
                                <h4>Question</h4>
                            </div>
                            <div className="col-sm-6">
                                <h4>Answer</h4>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className="row">
                            <div className="col-sm-6">
                                <p>
                                    {faqs.map((faq) => (
                                        <div>
                                            <p>{faq.question}</p>
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    {faqs.map((faq) => (
                                        <div>
                                            <p>{faq.answer}</p>
                                        </div>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal><Modal
            show={showModal}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create FAQ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            question: "",
                            answer: "",
                        }}
                        onSubmit={(values) => {
                            faqs.push(values);
                            console.log(faqs);
                            handleClose();
                        }}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="question">Question</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="question"
                                    id="question" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="answer">Answer</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="answer"
                                    id="answer" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal></>
    );
}
