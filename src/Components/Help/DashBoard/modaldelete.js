import {Modal} from "react-bootstrap";
import React, {useState} from "react";
// import SvgIcon from "../../../common/SvgIcon";
import './modaldelete.css'
import PropTypes from "prop-types";

function Odal({item, onDelete}) {
      const [show, setShow] = useState(false);

       function handleSubmit(e,item){
           onDelete(item)
           setShow(false)
           alert("skill deleted successfully")
       }

       const handleShow = () => setShow(true);

       const handleClose = () => setShow(false);
      return (
          <>
              <div
                  className="btn"
                  onClick={handleShow}
              >
                  <span className="material-icons dustbin">
                      delete_outline
                  </span>
              </div>


              <Modal
                  onHide={handleClose}
                  show={show}
              >
                  <Modal.Header closeButton>
                      <Modal.Title>
                          Delete Skill
                      </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                      Are you sure you want to delete the skill

                      {" "}

                      <strong>
                          {item}
                      </strong>
                  </Modal.Body>

                  <Modal.Footer>
                      <button
                          className="btn btn-warning"
                          onClick={(e) => handleSubmit(e,item)}
                          type="button"
                      >
                          Confirm
                      </button>
                  </Modal.Footer>
              </Modal>
          </>
      );
    }

Odal.propTypes = {
    item:PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Odal