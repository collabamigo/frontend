
import React, {useState} from "react"
import {Button, Modal} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
// import AccordionItem from 'react-bootstrap/Accordion'

function FAQModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
          show={show}
          onHide={handleClose}
          className="w-100"
      >
          <Modal.Dialog className="w-100">
                  <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                          Hello! I'm the body
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click me!
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Hello! I'm anofsdfssfslflsnfsfsfdnsdther body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
              </Accordion>
          </Modal.Dialog>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default FAQModal
