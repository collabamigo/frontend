import {Modal, Button} from "react-bootstrap";
import React from 'react';
import {Form, Formik} from "formik";
import PropTypes from "prop-types";
import TextInput from "common/TextInput";


export default function EventAdminModal({show, handleClose, labels, initialValues, handleSubmit}) {
        return(
            <Modal
                backdrop="static"
                keyboard={false}
                onHide={handleClose}
                show={show}
            >
                <div className="bg-dark  text-white rounded-3">
                    <Modal.Header>
                        <Modal.Title>
                            Edit Your Event
                        </Modal.Title>
                    </Modal.Header>

                    <Formik
                        initialValues={{
                        ...initialValues
                    }}
                        onSubmit={(values) => {
                        handleSubmit(values)
                    }}
                    >
                        <Form>
                            <Modal.Body>
                                {
                            Array.from({length: initialValues.length}, (v, k) => k).map(k => {
                                return (
                                    <TextInput
                                        id={k}
                                        key={k}
                                        label={labels[k]}
                                        name={k}
                                        placeholder={labels[k]}
                                        type="text"
                                    />
                                )
                            })
                        }
                            </Modal.Body>

                            <Modal.Footer className="border-0">
                                <Button
                                    onClick={handleClose}
                                    variant="outline-light"
                                >
                                    Close
                                </Button>

                                <Button
                                    type="submit"
                                    variant="light"
                                >
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Formik>
                </div>
            </Modal>
        )
}

EventAdminModal.defaultProps = {

};

EventAdminModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    show: PropTypes.bool.isRequired,
};
