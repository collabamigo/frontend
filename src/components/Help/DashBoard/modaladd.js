
import {Modal} from "react-bootstrap";
import React, {useState} from "react";
import TagsInput from "react-tagsinput";
import Autocomplete from "../../Autocomplete";
import PropTypes from "prop-types";
// import SvgIcon from "../../../common/SvgIcon";
// import './modaldelete.css'



function Oadd({skills , onCreate, setSkills}) {

    function handleSubmit(e){
        e.preventDefault();
        onCreate()
        setState({show: false})
        alert("skill added successfully")
    }

    const initialState = {
        show: false,
    }

    function handleChange(value){
        setState({"searchTerm": value, "found_match":false});
    }

    function renderAutocomplete({addTag, }) {
        return (
            <div>
                <Autocomplete
                    onChange={(val) => handleChange(val)}
                    onMatch={(val) => {
                    if (!skills.includes(val))
                        addTag(val)
                }}
                    searchTerm={state.searchTerm}
                    suggestions={state.temp_l}
                    version={2}
                />
            </div>

        )
    }
      const [state, setInitialState] = useState(initialState);

    function setState(obj) {
        setInitialState({
            ...state,
            ...obj
        })
    }


    const handleShow = () => setState({show: true});

    const handleClose = () => setState({show: false});


      return (
          <>
              <div
                  className="btn float-right"
              >
                  <span
                      className="material-icons "
                      onClick={handleShow}
                  >
                      add_circle_outline
                  </span>
              </div>


              <Modal
                  onHide={handleClose}
                  show={state.show}
              >
                  <Modal.Header closeButton>
                      <Modal.Title>
                          Add Skills
                      </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                      Glad to see you get excited
                      <TagsInput
                          onChange={setSkills}
                          renderInput={renderAutocomplete}
                          value={skills}
                      />

                  </Modal.Body>

                  <Modal.Footer>
                      <button
                          className="btn btn-warning"
                          onClick={handleSubmit}
                          type="button"
                      >
                          Confirm
                      </button>
                  </Modal.Footer>
              </Modal>
          </>
      );
}

Oadd.propTypes = {
    onCreate:PropTypes.func.isRequired,
    setSkills: PropTypes.func.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Oadd
