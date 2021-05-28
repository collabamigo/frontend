
import React from 'react'
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import backend from "../../env";

function useQuery() {
  return new URLSearchParams(window.location.search);
}
class ConnectionRequest extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            checked:false,
        }
    }

    shouldComponentUpdate() {
        return true
    }
    
    handleCheckboxChange = (e) => {
        this.setState({checked: e.target.checked})
    }

    handleSubmit = () => {
        const query = useQuery()

        axios.post(backend+"/connection/request/", {
            request_id: query.get("request_id"),
            mobile: this.state.checked?1:0})
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
