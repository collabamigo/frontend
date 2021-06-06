
import React from "react";
import "./Ask.css";
import CardsP from "../CardsP/CardsP";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import backend from "../../env";
import {Card} from "react-bootstrap";


class Ask extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "searchTerm": "",
            "temp_l": [],
            "found_match": false,
            "tempList": [{}],
            "list":[],
            "listIndex":4,
            "canVote":false,
            "loading": false
        }

    }

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {
        return true;
    }

    handleMatch = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        })
        this.getTeacherIds(searchTerm)

    }

    handleConnect = (message, teacher_id) => {
        axios.post(backend+"connect/request/", {
            id: teacher_id,
            message: message,
            skills: [this.state.searchTerm]
        }).then(()=> {
            alert("Your connection request has been sent")
        })
            .catch((err) => {
                if (err.response.status === 429) // THROTTLED
                    alert("You have submitted too many requests in the past 24 hours. Please wait before submitting more.")
                else if (err.response.status === 403) // Previous unaccepted request logged
                    alert("You have already sent a similar request to the same person")
            })
    }

    handleGetNext = () => {
        this.setState({
            loading: true
        })
        axios.get(backend + "connect/teachersdata/", {
            params: {
                id_list: this.state.list.slice(this.state.listIndex, this.state.listIndex+4)
            },
        }).then(r => this.setState((state)  => ({
            listIndex:state.listIndex+4, tempList:r.data,
            loading: false})))
    }

    handleGetPrev =() => {
        this.setState({
            loading: true
        })
        axios.get(backend + "connect/teachersdata/", {
            params: {
                id_list: this.state.list.slice(this.state.listIndex-8, this.state.listIndex-4)
            },
        }).then(r => this.setState((state)  => ({
            listIndex:state.listIndex-4, tempList:r.data,
            loading: false,
        })))
    }

    handleChange = (value) => {
        this.setState({"searchTerm": value, "found_match":false});
    }

    getTeacherIds = (searchTerm) => {
        this.setState({
            loading: true
        })
        axios.get(backend+"connect/skill/"+ searchTerm ,{
        params: {
            format: "json",
        }
          })
            .then((res) => {
                this.setState({list:res.data["Teacher_set"]})
                axios.get(backend+"connect/teachersdata/",{
                     params:{
                         id_list: res.data["Teacher_set"].slice(0,4)
                     },
                })
                    .then((response) => this.setState({
                        tempList: response.data,
                        found_match: true,
                        loading: false}))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    };

    renderCardsIfNeeded() {
        if (this.state.found_match) {
            return (
                <div>
                    {/* TODO: Remove function duplication */}


                    {/* TODO: Remove Instagram Handle */}

                    {/* TODO: Add undefined case handling */}

                    <div className="row">
                        {this.state.tempList.map(item => (
                            <div
                                className="col-auto"
                                key={item.id}
                            >
                                <CardsP
                                    Git={item.Gitname}
                                    batch={item.degree}
                                    canVote={this.state.canVote}
                                    course={item.course}
                                    key_value={item.id}
                                    linked={item.Linkedin}
                                    name={item.First_Name + " " + item.Last_Name}
                                    onConnect={this.handleConnect.bind(this)}
                                    showConnect
                                />
                            </div>
                          ))}
                    </div>

                    <div className="row">
                        <div className="col-1" />

                        <div className="col-auto">
                            <span
                                className="btn material-icons"
                                onClick={this.handleGetPrev}
                            >
                                arrow_back_ios
                            </span>
                        </div>

                        <div className="col-auto">
                            <span
                                className="btn material-icons"
                                onClick={this.handleGetNext}
                            >
                                arrow_forward_ios
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="float-centre">
                    {this.state.loading ?
                        <div
                            className="spinner-border"
                            role="status"
                        >
                            <span className="sr-only">
                                Loading...
                            </span>
                        </div> : "No matches found"}
                </div>
            )
        }
    }
    // TODO: Show next/previous button if more elements actually exist.

    // TODO: Show voting button only when valid
    render () {
              return (
                  <div>
                      <Card className="card card_skillSearch">
                          <Card.Title>
                              <h1 className="col-sm-5 col-md-5">
                                  {" "}
                                  Skill Search

                                  {" "}
                              </h1>
                          </Card.Title>
                          
                          <Card.Body>
                              <div className="col">
                                  <Autocomplete
                                      onChange={this.handleChange}
                                      onMatch={this.handleMatch}
                                      suggestions={this.state.temp_l}
                                  />
                              </div>

                              <div className="row-auto pt-5">
                                  <div className="col-auto pl-lg-5">
                                      {this.renderCardsIfNeeded()}
                                  </div>
                              </div>
                              
                              
                          </Card.Body>
                      </Card>
                  </div>
              );

          }
}

export default Ask;
