
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
            class_change:"badge badge-danger"
        }
        this.query = useQuery()
    }

    shouldComponentUpdate() {
        return true
    }
    
    handleCheckboxChange = (e) => {
        this.setState({checked: e.target.checked})
        if (this.state.checked === true) {
            this.setState({class_change:"badge badge-danger"})
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
                else if (res.status === 200) {
                    alert("Request successfully approved. Redirecting to homepage")
                    window.location = "/"
                }

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
                        <h1>
                            Eager to work with your next peers ?
                            <br />
                            Feel free to increase connectivity
                        </h1>

                        <h3 className="font-italic">
                            Data we are sharing:
                        </h3>

                        <br />
                        
                        <div className="col-auto">
                            <div className="row-auto">
                                <span className="badge badge-success col-auto">
                                    Social Handle
                                </span>

                                <span>
                                     &nbsp;
                                     &nbsp;
                                </span>

                                <span className="badge badge-success col-auto">
                                    Github Username
                                </span>

                                <span>
                                 &nbsp;
                                 &nbsp;
                                </span>

                            </div>

                            <div className="row-auto">
                                <span className="badge badge-success col-auto">
                                    Email Address
                                </span>

                                <span>
                                 &nbsp;
                                 &nbsp;
                                </span>

                                <span className={this.state.class_change}>
                                    Contact Number
                                </span>
                            </div>
                        </div>
                        
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
                                Share Contact number
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
