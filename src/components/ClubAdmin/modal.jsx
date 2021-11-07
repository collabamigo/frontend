import {Modal, Button} from "react-bootstrap";
import React from 'react';
import {Form, Formik} from "formik";
import PropTypes from "prop-types";
import TextInput from "common/TextInput";


export default function ClubAdminModal({show, handleClose, labels, initialValues, handleSubmit}) {
        return(
            <Modal
                backdrop="static"
                keyboard={false}
                onHide={handleClose}
                show={show}
            >
                <div className="bg-dark  text-white">
                    <Modal.Header>
                        <Modal.Title>
                            Generic title
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

                            <Modal.Footer>
                                <Button
                                    onClick={handleClose}
                                    variant="light"
                                >
                                    Close
                                </Button>

                                <Button
                                    type="submit"
                                    variant="outline-light"
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

ClubAdminModal.defaultProps = {

};

ClubAdminModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    show: PropTypes.bool.isRequired,
};
