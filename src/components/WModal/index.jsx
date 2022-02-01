/* eslint-disable react/button-has-type */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";


export default class index extends Component {
    static propTypes = {
        ModalShow: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        values: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
        // handleShow: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        // console.log(this.props.values);
    }

    shouldComponentUpdate(){
        return true;
    }

    render() {
        if(!this.props.values){
            return null
        }
        return (
            <Modal
                onHide={this.props.handleClose}
                show={this.props.ModalShow}
            >

                <Modal.Header closeButton>
                    <Modal.Title>
                        Congratulations to the winners
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    {this.props.values.map((item,index) => (
                        <div
                            className="container-fluid"
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                        >

                            <span>
                                {item.position}

                                {' : '}

                                {" "}
                            </span>

                            {item.winner_first_name}

                            {' '}

                            {" "}

                            <span />

                            <span>
                                {item.winner_last_name}
                            </span>
                        </div>
                    ))}


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
