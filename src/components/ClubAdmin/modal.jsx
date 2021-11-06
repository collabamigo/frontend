import {Modal} from "react-bootstrap";
import React from 'react';
import Button from "react-bootstrap/Button";
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
                                variant="secondary"
                            >
                                Close
                            </Button>

                            <Button
                                type="submit"
                                variant="primary"
                            >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Formik>
            </Modal>


        )
}

ClubAdminModal.defaultProps = {

};

ClubAdminModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    initialValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    show: PropTypes.bool.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired
};
