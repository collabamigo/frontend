/* eslint-disable react/button-has-type */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";


export default class index extends Component {
    static propTypes = {
        ModalShow: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
    }

    shouldComponentUpdate(){
        return true;
    }

    render() {
        return (
            <Modal
                onHide={this.props.handleClose}
                show={this.props.ModalShow}
            >

                <Modal.Header closeButton>
                    <Modal.Title>
                        Modal heading
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Woohoo, youre reading this text in a modal!
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        onClick={this.props.handleClose}
                        variant="secondary"
                    >
                        Close
                    </Button>

                    <Button
                        onClick={this.props.handleClose}
                        variant="primary"
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
