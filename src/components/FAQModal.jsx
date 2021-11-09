
import React, {useState} from "react"
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function FAQModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> FAQ </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.content}</Modal.Body>
      </Modal>
    </>
  );
}

