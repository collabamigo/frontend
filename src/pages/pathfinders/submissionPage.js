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
            fname: "",
            lname:"",
            batch:"",
            course:"",

            project_name: "",
            project_description:"",
            project_tags:[],
            
            team_size: 0,
            team_member_names: [],
            team_member_emails: [],
            date_of_est:""
    
        }

        this.handleChange = this.handleChange.bind(this);
    }

    shouldComponentUpdate(){
        return true;
    }


    handleChange = input => e => {
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
                                    fname={this.state.fname}
                                    lname={this.state.lname}
                                    batch={this.state.batch}
                                    course={this.state.course}

                                    project_name={this.state.project_name}
                                    project_description={this.state.project_description}
                                    project_tags={this.state.project_tags}

                                    team_size={this.state.team_size}
                                    team_member_names={this.state.team_member_names}
                                    team_member_emails={this.state.team_member_emails}
                                    
                                    date_of_est={this.state.date_of_est}

                                    // eslint-disable-next-line react/jsx-handler-names
                                    handleChange={this.handleChange}
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

                            <br />


                            <div className="well bg-white">

                                <br />

                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="holder.js/800x400?text=First slide&bg=373940"
                                            alt="First slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>
                                                First slide label
                                            </h3>

                                            <p>
                                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="holder.js/800x400?text=Second slide&bg=282c34"
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>
                                                Second slide label
                                            </h3>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="holder.js/800x400?text=Third slide&bg=20232a"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>
                                                Third slide label
                                            </h3>

                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                                
                                
                                
                            </div>
                        </div>
                    </div>
                </Card>

            </section>
        )
    }
}
