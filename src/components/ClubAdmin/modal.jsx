import {Modal} from "react-bootstrap";
import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import {Formik} from "formik";
import PropTypes from "prop-types";

export default function ClubAdminModal({show, handleClose, titles, initialValues}) {

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

                <Modal.Body>
                    <Formik
                        initialValues={{ ... initialValues
                     }}
                     onSubmit={() => {
                         handleSubmit
                     }}>

                        <textarea
                            className="form-control fluid"
                            onChange={this.handleEditMain}
                            placeholder={this.state.basicInformation.description}
                            type='text'
                            value={this.state.basicInformation.description}
                        />
                        
                    </Formik>

                </Modal.Body>

                <Modal.Footer>
                    <Button
                        onClick={this.handleClose}
                        variant="secondary"
                    >
                        Close
                    </Button>

                    <Button
                        onClick={this.handleEditMain}
                        variant="primary"
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        )
}

ClubAdminModal.defaultProps = {

};

ClubAdminModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    initialValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    show: PropTypes.bool.isRequired,
    titles: PropTypes.arrayOf(PropTypes.string).isRequired
};
