import {Form, Formik, Field} from "formik";
import PropTypes from "prop-types";
import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function FaqEditor({disappear, faq, setFaq, setShow, show}) {
	const [showModal, setShowModal] = useState(false);
	const [tempFaqs, setTempFaqs] = useState(faq);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	return (
    <>
        <Button
            className="w-100"
            onClick={setShow}
            size="lg"
            variant="outline-primary"
        >
            Add FAQs
        </Button>

        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={disappear}
            show={show}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    FAQ
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>


                <Table
                    bordered
                    hover
                    striped
                >
                    <thead className="h5">
                        <tr>
                            <th>
                                Question
                            </th>

                            <th>
                                Answer
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {tempFaqs.map((faq) => (
                            <tr key={faq}>
                                <td>
                                    {faq.question}

                                </td>

                                <td>
                                    {faq.answer}
                                </td>
                            </tr>
						))}
                    </tbody>
                </Table>

                <Button
                    className="m-3"
                    onClick={handleShow}
                    variant="outline-primary"
                >
                    Add new FAQ
                </Button>

                <Button
                    className="m-3"
                    onClick={() => {
                        setFaq(tempFaqs);
                        disappear();
                    }}
                    type="submit"
                    variant="primary"
                >
                    Save
                </Button>
            </Modal.Body>
        </Modal>

        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={handleClose}
            show={showModal}
            size="lg"
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
							setTempFaqs((faqs) => ([...faqs, values]));
							console.log(tempFaqs);
							handleClose();
						}}
                >
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

                        <div className="form-group my-3">
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

                        <Button
                            className="my-3"
                            type="submit"
                            variant="primary"
                        >
                            Submit
                        </Button>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    </>
	);
}

FaqEditor.propTypes = {
    disappear: PropTypes.func.isRequired,
    faq: PropTypes.arrayOf(PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    })).isRequired,
    setFaq: PropTypes.func.isRequired,
    setShow: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
};
