
import React from 'react'
// import {Button, Form} from "react-bootstrap";
import axios from "axios";
import backend from "../../env";
import {Redirect} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(window.location.search);
}
class ConnectionRequest extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            checked:false,
            class_change:"badge badge-warning"
        }
        this.query = useQuery()
    }

    shouldComponentUpdate() {
        return true
    }
    
    handleCheckboxChange = (e) => {
        this.setState({checked: e.target.checked})
        if (this.state.checked === true) {
            this.setState({class_change:"badge badge-warning"})
        }
        else{
            this.setState({class_change:"badge badge-success"})
        }
    }

    handleSubmit = (e) => {

        axios.post(backend+"connect/approve/", {
            request_id: this.query.get("request_id"),
            mobile: this.state.checked?1:0})
            .then(res => {
                if (res.status === 208)
                    alert("You have already approved this connection request")
                else if (res.status === 200)
                    alert("Request successfully approved")
          })
        e.preventDefault()
    }
    
    render(){
        if (this.query.get("request_id") === null)
            return(
                <Redirect to={
                      {
                          pathname: '/403',
                      }
                  }
                />)
        else
            return(
                <div>
                    <p>
                        <h4>
                            Eager to work with your next peers ?
                            <br />
                            Feel free to increase connectivity with your peers
                        </h4>

                        Data we are sharing:
                        <br />

                        <span className="badge badge-success col-auto">
                            Social Handle
                        </span>

                        <span className="badge badge-success col-auto">
                            Github Username
                        </span>

                        <span className="badge badge-success col-auto">
                            Email Address
                        </span>

                        <span className={this.state.class_change}>
                            Contact Number
                        </span>

                    </p>

                    <form>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                onChange={this.handleCheckboxChange}
                                type="checkbox"
                                value={this.state.checked}
                            />

                            <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                            >
                                Check me out
                            </label>

                            <br />

                            <br />

                            <button
                                className="btn btn-primary"
                                onClick={this.handleSubmit.bind(this)}
                                type="submit"
                            >
                                Accept request
                            </button>
                        </div>
                    </form>
                </div>
        )
    }
}

export default ConnectionRequest
