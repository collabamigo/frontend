
import React, {useState} from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import FaqSearch from "./faq_search";
import PropTypes from "prop-types";

function FAQModal (props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button
                className="w-100"
                onClick={() => setShow(true)}
                size="lg"
                variant="outline-primary"
            >
                FAQ
            </Button>

            <Modal
                className="w-100 my-2"
                onHide={() => setShow(false)}
                show={show}
            >
                <Modal.Body>
                    <FaqSearch details={props.data} />
                </Modal.Body>
            </Modal>
        </>
    )
}
FAQModal.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
}

export default  FAQModal
