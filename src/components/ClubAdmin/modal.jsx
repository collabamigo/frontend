import {Modal} from "react-bootstrap";
import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

class ClubAdminModal extends Component{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        return true
    }

    shouldComponentUpdate () {
        return true;
    }

    render(){
        return(
            <Modal
                backdrop="static"
                keyboard={false}
                onHide={this.handleClose}
                show={this.state.show}
            >
                <Modal.Header>
                    <Modal.Title>
                        Edit Description
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <textarea
                        className="form-control fluid"
                        onChange={this.handleEditMain}
                        placeholder={this.state.basicInformation.description}
                        type='text'
                        value={this.state.basicInformation.description}
                    />

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
}

export default ClubAdminModal;
