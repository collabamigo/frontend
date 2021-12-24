/* eslint-disable react/button-has-type */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        this.handleUpdatearray = this.handleUpdatearray.bind(this);
        this.handleDeleteField = this.handleDeleteField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    shouldComponentUpdate(){
        return true;
    }


    updateformdata(pos,val,i){
        console.log(pos + " " + val + " " + i);
        console.log(this.state.array);
        this.setState((prevState)=>{
            var a = prevState.array;
            var obj = a[i];
            obj[pos] = val;
            a[i] = obj;
            return {array:a}
        })
    }

    handleUpdatearray() {
        this.setState((prevState) => ({
            array: prevState.array.concat([{
                position:null,
                winner_first_name:null,
                winner_last_name:null,
                winner_email:null,
            }])
    }))}


    handleDeleteField(index){
        this.setState((prevState)=>{
            var a = prevState.array;
            var removed = a.splice(index,1);
            return {array:removed}
        })
        // this.setState((prevState) => ({
        //     array: prevState.array.splice(index, 1)
        // }))

    }


    handleSubmit() {
        axios.patch('form/form/' + this.props.eventID, {
            winners: this.state.array
        })
            .then(this.props.handleClose).catch(() => console.log("Error"))
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
                            // eslint-disable-next-line react/jsx-key
                            <Form.Group
                                className="mb-3"
                                controlId="formKey"
                            >
                                <Form.Control
                                    onChange={(e) =>{this.updateformdata("position", e.target.value, index )}}
                                    placeholder="Position"
                                    type="text"
                                    value={item.position}
                                />

                                <Form.Control
                                    onChange={(e) =>{this.updateformdata("winner_first_name",  e.target.value, index )}}
                                    placeholder="First Name"
                                    type="text"
                                    value={item.winner_first_name}
                                />

                                <Form.Control
                                    onChange={(e) =>{this.updateformdata("winner_last_name",  e.target.value, index )}}
                                    placeholder="Last Name"
                                    type="text"
                                    value={item.winner_last_name}
                                />
                        
                                <Form.Control
                                    onChange={(e) =>{this.updateformdata("winner_email",  e.target.value, index )}}
                                    placeholder="Enter email"
                                    type="email"
                                    value={item.winner_email}
                                />

                                <Button
                                    onClick={() => {this.handleDeleteField(index)}}
                                    variant="secondary"
                                >
                                    Delete
                                </Button>
                            </Form.Group>
                ))}

                        <Button
                            onClick={this.handleUpdatearray}
                            variant="primary"
                        >
                            Add field
                        </Button>



                        <Button
                            type="submit"
                            variant="primary"
                        >
                            Submit
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
