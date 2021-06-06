
import React from "react";
import './index.css';
import CardsP from "../CardsP/CardsP";
import axios from "axios";
import backend from "../../env";
import {Card} from "react-bootstrap";


class ConnectionHistory extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "tempList": [{}],
            "list":[],
            "listIndex":4,
            loading: false
        }
        this.getTeacherIds();

    }

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {
        return true;
    }

    handleGetNext = () => {
        this.setState({
            loading: true
        })
        axios.get(backend + "connect/teachersdata/", {
            params: {
                id_list: JSON.stringify(this.state.list.slice(this.state.listIndex, this.state.listIndex+4))
            }
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
                id_list: JSON.stringify(this.state.list.slice(this.state.listIndex-8, this.state.listIndex-4))
            }
        }).then(r => this.setState((state)  => ({
            listIndex:state.listIndex-4, tempList:r.data,
            loading: false,
        })))
    }


    getTeacherIds = () => {
        this.setState({
            loading: true
        })
        axios.get(backend+"connect/approvals/" ,{
        params: {
            format: "json",
        }
          })
            .then((res) => {
                this.setState({list:res.data})
                axios.get(backend+"connect/teachersdata/",{
                     params:{
                         id_list: res.data.slice(0,4)
                     },
                })
                    .then((response) => this.setState({
                        tempList: response.data,
                        loading: false}))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    };

    renderCardsIfNeeded() {
            return (
                <div>
                    <div className="row">
                        {this.state.tempList.map(item => (
                            <div
                                className="col-auto"
                                key={item.id}
                            >
                                <CardsP
                                    Git={item.Gitname}
                                    batch={item.degree}
                                    course={item.course}
                                    description="My Tech Stack is "
                                    key_value={item.id}
                                    linked={item.Linkedin}
                                    name={item.First_Name + " " + item.Last_Name}
                                    showConnect={false}
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

    render () {
        if (this.state.loading)
            return (
                <div
                    className="spinner-border"
                    role="status"
                >
                    <span className="sr-only">
                        Loading...
                    </span>
                </div>
            )
        else
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

export default ConnectionHistory;
