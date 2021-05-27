
import React from 'react'
import {Button, Form} from "react-bootstrap";
import Collab from '../Collab/Collab'
import axios from "axios";
import backend from "../../env";
import Footer from "../Footer/Footer";

class ConnectionRequest extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            checked:false
        }
    }

    shouldComponentUpdate() {
        return true
    }
    
    handleCheckboxChange = (e) => {
        this.setState({checked: e.target.checked})
    }

    handleSubmit = (e)=> {
        axios.post(backend+"/connection/request/",e)
            .then(res => {
            console.log(res);
          })
    }
    
    render(){
        return(   
            <div>
                <Collab
                    className="jumbotron" 
                    title="Collab Connect"
                />

                <Form>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                            label="Share my mobile also"
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

                <Footer />
            </div>
            
        )
    }
}

export default ConnectionRequest