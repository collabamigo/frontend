import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Col, Row} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import axios from "utilities/axios";

export default class index extends Component {
    static propTypes = {
        ModalShow: PropTypes.bool.isRequired,
        eventID : PropTypes.number.isRequired,
        handleClose: PropTypes.func.isRequired,
    }


    constructor(props) {
        super(props);
        this.state = {
            array:[],
        }

        this.updateformdata = this.updateformdata.bind(this);
        this.handleUpdateArray = this.handleUpdateArray.bind(this);
        this.handleDeleteField = this.handleDeleteField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    shouldComponentUpdate(){
        return true;
    }


    updateformdata(pos,val,i){
        this.setState((prevState)=>{
            let a = prevState.array;
            let obj = a[i];
            obj[pos] = val;
            a[i] = obj;
            return {array:a}
        })
    }

    handleUpdateArray() {
        this.setState((prevState) => ({
            array: prevState.array.concat([{
                position:null,
                winner_email:null,
            }])
    }))}


    handleDeleteField(index){
        this.setState((prevState)=>{
            let a = prevState.array;
            let removed = a.splice(index,1);
            return {array:removed}
        })
    }


    handleSubmit() {
        this.state.array.forEach((item,index)=>{
            axios.post(`club/competition-winner/`, {
                position:item.position,
                winner_email:item.winner_email,
                index:index,
                competition:this.props.eventID,
            })
        })
            this.props.handleClose();
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

                    <Form onSubmit={this.handleSubmit}>
                        {this.state.array.map((item,index) => (
                            <Row
                                className="mb-3"
                                controlId="formKey"
                                key={item}
                            >
                                <Col>
                                    <Form.Control
                                        onChange={(e) =>{this.updateformdata("position", e.target.value, index )}}
                                        placeholder="Position"
                                        type="text"
                                        value={item.position}
                                    />
                                </Col>

                                <Col>
                                    <Form.Control
                                        onChange={(e) =>{this.updateformdata("winner_email",  e.target.value, index )}}
                                        placeholder="Enter email"
                                        type="email"
                                        value={item.winner_email}
                                    />
                                </Col>

                                <Col>
                                    <Button
                                        onClick={() => {this.handleDeleteField(index)}}
                                        variant="secondary"
                                    >
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                ))}

                        <Button
                            onClick={this.handleUpdateArray}
                            variant="primary"
                        >
                            Add field
                        </Button>



                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button
                        onClick={this.props.handleClose}
                        variant="secondary"
                    >
                        Close
                    </Button>

                    <Button
                        onClick={this.handleSubmit}
                        variant="primary"
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
