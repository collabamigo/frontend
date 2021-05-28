
import React from 'react'
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import backend from "../../env";

class ConnectionRequest extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            checked:false,
            request_id:''
        }
    }

    shouldComponentUpdate() {
        return true
    }

    handleURLSearch(){
        return new URLSearchParams(window.location.search);
    }
    
    handleCheckboxChange = (e) => {
        this.setState({checked: e.target.checked})
    }

    handleSubmit = ()=> {
        this.setState({request_id: this.handleURLSearch})
        axios.post(backend+"/connection/request/", this.state.request_id)
            .then(res => {
            console.log(res);
          })
    }
    
    render(){
        return(   
            <div>

                <Form>
                    <Form.Group controlId="formBasicCheckbox">
                        <label>
                            Share my mobile also
                        </label>

                        <Form.Check
                            onChange={this.handleCheckboxChange}
                            type="checkbox"
                            value={this.state.checked}
                        />
                    </Form.Group>

                    <Button
                        onClick={this.handleSubmit}
                        type="submit"
                        variant="primary"
                    >
                        Accept request
                    </Button>
                </Form>
            </div>
            
        )
    }
}

export default ConnectionRequest