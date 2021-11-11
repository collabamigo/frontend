/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/jsx-props-no-multi-spaces */
// import {navbar} from "./submissionPage.module.css";
import {static_left} from "./submissionPage.module.css";
import {box, } from "./submissionPage.module.css";
import {center, center2} from "./submissionPage.module.css";
import UserForm from "../../common/UserForm/UserForm.js";
import {dynamic_right} from "./submissionPage.module.css";
import Carousel from 'react-bootstrap/Carousel'


import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Card} from "react-bootstrap";

export default class submissionPage extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    
    constructor(props) {
        super(props);

        this.state = {

            project_name: "",
            project_description:"",
            project_tags:["Example Tag"],
            
            team_size: 0,
            team_member_names: [],
            team_member_emails: [],
            date_of_est: new Date(),

            visible: false,
            stage: ""

    
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTags = this.handleChangeTags.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);

    }

    shouldComponentUpdate(){
        return true;
    }

    handleChangeTags(tags){
        this.setState({
            project_tags: tags
        })
    }

    handleChangeDate(date){
        this.setState({
            date_of_est: date
        })
    }


    handleChange = input => e => {

        console.log(input,e.target.value);

        this.setState({ [input]: e.target.value });
    };


    render() {
        return (
            <section className={box}>

                <br />
                
                <Card className={center + " container text-center  "}>    
                    <div className={center2 + " row content"}>

                        <div className={static_left +"  col-sm-8 text-left  "}> 
                            <h1>
                                Register and Feel safe
                            </h1>

                            <div className="bg-white m-3 ">

                                <h4 className="d-flex">
                                    Form Fill-up
                                </h4>

                                <hr />

                                <UserForm

                                    project_name={this.state.project_name}
                                    project_description={this.state.project_description}
                                    project_tags={this.state.project_tags}

                                    team_size={this.state.team_size}
                                    team_member_names={this.state.team_member_names}
                                    team_member_emails={this.state.team_member_emails}
                                    
                                    date_of_est={this.state.date_of_est}

                                    visible={this.state.visible}
                                    stage={this.state.stage}

                                    // eslint-disable-next-line react/jsx-handler-names
                                    handleChange={this.handleChange}
                                    handleChangeTags={this.handleChangeTags}
                                    handleChangeDate={this.handleChangeDate}
                                />

                            </div>
                        </div>

                        <div className={dynamic_right + " col-sm-4 sidenav"}>
                            <div className="well mt-2">
                                <span className="h2">
                                    Guidlines to keep in mind
                                </span>
                            </div>

                            <br />


                            <div className="well bg-white">

                                <Carousel className="">
                                    <Carousel.Item>
                                        <img
                                            className=" w-100"
                                            src="https://via.placeholder.com/350x150"
                                            alt="First slide"
                                        />

                                        {/* <Carousel.Caption>
                                            <h3>
                                                First slide label
                                            </h3>

                                            <p>
                                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                                            </p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            className=" w-100"
                                            src="https://via.placeholder.com/350x150"
                                            alt="Second slide"
                                        />

                                        {/* <Carousel.Caption>
                                            <h3>
                                                Second slide label
                                            </h3>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            className="w-100"
                                            src="https://via.placeholder.com/350x150"
                                            alt="Third slide"
                                        />

                                        {/* <Carousel.Caption>
                                            <h3>
                                                Third slide label
                                            </h3>

                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>

                                    
                                </Carousel>
                                
                                
                                
                            </div>

                            <br />

                        </div>
                    </div>
                </Card>

            </section>
        )
    }
}
