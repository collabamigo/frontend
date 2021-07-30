
import React from "react";
import "./Ask.css";
import Autocomplete from "./Autocomplete";
import axios from "axios";
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
            // validSkill: false,
            voteAllowedList: [],
        }

    }

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {
        return true;
    }

    handleMatch = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm,
            found_match: true,
            list:[]
        })
        this.getTeacherIds(searchTerm)

    }

    handleConnect = (message, teacher_id) => {
        axios.post("connect/request/", {
            teacher_id: teacher_id,
            message: message,
            skills: [this.state.searchTerm]
        }).then(()=> {
            document.body.click()
            alert("Your connection request has been sent")
        })
            .catch((err) => {
                document.body.click()
                if (err.response.data === "THROTTLED")
                    alert("You have submitted too many requests in the past 24 hours. Please wait before submitting more.")
                else if (err.response.data === "BLOCKED")
                    alert("You have already sent a similar request to the same person")
                else if (err.response.data === "SELF-CONNECTION NOT ALLOWED")
                    alert("You can't connect with yourself")
            })
    }
    

    handleChange = (value) => {
        this.setState({
            searchTerm: value, 
            found_match:false
        });
    }

    getTeacherIds = (searchTerm) => {
        this.setState({
            loading: true
        })
        axios.get("connect/approvals/" ,{
            params: {
                format: "json",
            }
              })
            .then((res) =>
            axios.get("connect/skill/"+ searchTerm ,)
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
                    layout="grid"
                    onConnect={this.handleConnect.bind(this)}
                    parentList={this.state.list}
                    showConnectAll
                    showVotingList={[...(this.state.voteAllowedList), localStorage.getItem("id")]}
                />
            )
        }
        else {
            return (
                <div className="float-centre">
                    Please select a skill
                </div>
            )
        }
    }

    render () {
          return (
              <div className="row m-2">
                  <div className="col-lg-6 col-md-auto col-sm-auto col-xl-6">
                      <h2>
                          Skill Search
                      </h2>

                      <Autocomplete
                          onChange={this.handleChange}
                          onMatch={this.handleMatch}
                      />

                      {this.state.searchTerm && !this.state.found_match?
                          <div className="text-muted">
                              Skill not found ? Email us at
                              {" "}

                              <a
                                  href={"mailto:watsonhex@gmail.com?subject=Skill Not found&body=Skill: " + this.state.searchTerm}
                                  rel="noreferrer"
                                  target="_blank"
                              >
                                  watsonhex@gmail.com
                              </a>
                          </div>:null}
                      
                  </div>

                  <div className="pt-5 col-lg-6 col-md-auto col-sm-auto col-xl-6 justify-content-center">
                      {this.renderCardsIfNeeded()}
                  </div>
              </div>
          );
    }
}

export default Ask;
