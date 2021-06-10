import {Modal} from "react-bootstrap";
import React, {useState} from "react";
import SvgIcon from "../../../common/SvgIcon";
import './mymodal.css'


// eslint-disable-next-line react/prop-types
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
                  <SvgIcon
                      className="profile-image mt-5 "
                      height="22rem"
                      src="delete.svg"
                      type="button"
                      width="22rem"
                  />
              </div>


              <Modal
                  onHide={handleClose}
                  show={show}
              >
                  <Modal.Header closeButton>
                      <Modal.Title>
                          Modal heading
                      </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                      Are you sure you want to delete the skill

                      {" "}

                      {item}
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
export default Odal