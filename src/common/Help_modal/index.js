import Modal from 'react-bootstrap/Modal';
import React from 'react'


function Help_modal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4>
                    Centered Modal
                </h4>

                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>

            <Modal.Footer>
                <button
                    color="primary"
                    // eslint-disable-next-line react/prop-types
                    onClick={props.onHide}
                    type="button"
                    variant="contained"
                >
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
  }

export default Help_modal;