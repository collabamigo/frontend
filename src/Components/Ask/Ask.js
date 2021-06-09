
import React from "react";
import "./Ask.css";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import backend from "../../env";
import {Card} from "react-bootstrap";
import CardExplorer from "../CardExplorer";


class Ask extends React.Component {

    constructor (props) {

        super(props);
        this.CARDS_PER_PAGE = 4
        this.state = {
            searchTerm: "",
            found_match: false,
            list:[],
            loading: false,
            voteAllowedList: []
        }

    }

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {
        return true;
    }

    handleMatch = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm,
            found_match: true
        })
        this.getTeacherIds(searchTerm)

    }

    handleConnect = (message, teacher_id) => {
        axios.post(backend+"connect/request/", {
            teacher_id: teacher_id,
            message: message,
            skills: [this.state.searchTerm]
        }).then(()=> {
            alert("Your connection request has been sent")
        })
            .catch((err) => {
                if (err.response.data === "THROTTLED")
                    alert("You have submitted too many requests in the past 24 hours. Please wait before submitting more.")
                else if (err.response.data === "BLOCKED")
                    alert("You have already sent a similar request to the same person")
                else if (err.response.data === "SELF-CONNECTION NOT ALLOWED")
                    alert("You can't connect with yourself")
            })
    }
    

    handleChange = (value) => {
        this.setState({"searchTerm": value, "found_match":false});
    }

    getTeacherIds = (searchTerm) => {
        this.setState({
            loading: true
        })
        axios.get(backend+"connect/approvals/" ,{
            params: {
                format: "json",
            }
              })
            .then((res) =>
            axios.get(backend+"connect/skill/"+ searchTerm ,)
                .then((res2) =>
                    this.setState({list:res2.data["Teacher_set"],
                        voteAllowedList: res.data,
                    loading: false,})))
    };

    renderCardsIfNeeded() {
        if (this.state.found_match) {
            return (
                <CardExplorer
                    isLoading={this.state.loading}
                    onConnect={this.handleConnect.bind(this)}
                    parentList={this.state.list}
                    showConnectAll
                    showVotingList={this.state.voteAllowedList}
                />
            )
        }
        else {
            return (
                <div className="float-centre">
                    No matches found
                </div>
            )
        }
    }
    // TODO: Show next/previous button if more elements actually exist.

    // TODO: Show voting button only when valid
    render () {
              return (
                  <Card className="card card_skillSearch">
                      <Card.Body className="card-body">
                          <Card.Title className="card-title mb-4">
                              <h1 className="col-sm-5 col-md-5 display-4">
                                  Skill Search
                              </h1>
                          </Card.Title>

                          <div className="col">
                              <Autocomplete
                                  onChange={this.handleChange}
                                  onMatch={this.handleMatch}
                              />
                          </div>

                          <div className="row-auto pt-5">
                              <div className="col-auto pl-lg-5">
                                  {this.renderCardsIfNeeded()}
                              </div>
                          </div>
                              
                              
                      </Card.Body>
                  </Card>
              );

          }
}

export default Ask;
