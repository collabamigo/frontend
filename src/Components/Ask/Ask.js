
import React from "react";
import "./Ask.css";
import CardsP from "./CardsP/CardsP";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import backend from "../../env";


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
            "voting":true
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

    handleGetNext = () => {
        axios.get(backend + "connect/teachersdata/", {
            params: {
                id_list: JSON.stringify(this.state.list.slice(this.state.listIndex, this.state.listIndex+4))
            }
        }).then(r => this.setState((state)  => ({listIndex:state.listIndex+4, tempList:r.data})))
    }

    handleGetPrev =() => {
        console.log(this.state.list)
        axios.get(backend + "connect/teachersdata/", {
            params: {
                id_list: JSON.stringify(this.state.list.slice(this.state.listIndex-8, this.state.listIndex-4))
            }
        }).then(r => this.setState((state)  => ({listIndex:state.listIndex-4, tempList:r.data})))
    }

    handleChange = (value) => {
        this.setState({"searchTerm": value, "found_match":false});
    }

    getTeacherIds = (searchTerm) => {
        axios.get(backend+"connect/skill/"+ searchTerm ,{
        params: {
            format: "json",
        }
          })
            .then((res) => {
                this.setState({list:res.data["Teacher_set"]})
                axios.get(backend+"connect/teachersdata/",{
                     params:{
                         id_list: JSON.stringify(res.data["Teacher_set"].slice(0,4))
                     }
                })
                    .then((response) => this.setState({
                        tempList: response.data,
                        found_match: true}))
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
                                    batch={item.degree + ", " + item.course}
                                    description="My Tech Stack is "
                                    // insta={"https://www.instagram.com/"+ item.Handle}
                                    key_value={item.id}
                                    linked={item.Linkedin}
                                    name={item.First_Name + " " + item.Last_Name}
                                    skills={[this.state.searchTerm]}
                                    votes={this.state.voting}
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
                    Loading...
                </div>
            )
        }
    }

    render () {
        console.log(this.state.display,this.state.tempList, this.state.id_list)
              return (
                  <div>
                      <div>
                          <h1 className="col-sm-5 col-md-5">
                              {" "}
                              Skill Search

                              {" "}
                          </h1>

                          <Autocomplete
                              onChange={this.handleChange}
                              onMatch={this.handleMatch}
                              suggestions={this.state.temp_l}
                          />
                      </div>

                      <div className="row-auto">
                          <div className="col-auto">
                              {this.renderCardsIfNeeded()}
                          </div>
                      </div>
                  </div>
              );

          }
}

export default Ask;
