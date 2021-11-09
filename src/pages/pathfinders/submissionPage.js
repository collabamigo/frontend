/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/jsx-props-no-multi-spaces */
// import {navbar} from "./submissionPage.module.css";
import {static_left} from "./submissionPage.module.css";
import {box, } from "./submissionPage.module.css";
import {center, center2} from "./submissionPage.module.css";

import Tabs from "../../common/Pathfinder_Project_Form";
import {dynamic_right} from "./submissionPage.module.css";


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
            name: "",
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
    }

    shouldComponentUpdate(){
        return true;
    }
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

                                <Tabs
                                    name={this.state.name}
                                    batch={this.state.batch}
                                    course={this.state.course}

                                    project_name={this.state.project_name}
                                    project_description={this.state.project_description}
                                    project_tags={this.state.project_tags}

                                    team_size={this.state.team_size}
                                    team_member_names={this.state.team_member_names}
                                    team_member_emails={this.state.team_member_emails}
                                    
                                    date_of_est={this.state.date_of_est}

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

                                <br />

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </Card>

            </section>
        )
    }
}
