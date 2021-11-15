import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card'
import Link from "common/Link";
import {leftButtons} from './landingPage.module.css';
import axios from "utils/axios";
import backend from "env";

// import PropTypes from 'prop-types'
import {dynamic_left} from "./landingPage.module.css";
import {static_right} from "./landingPage.module.css";
import {box} from "./landingPage.module.css";
import ProjectList from "../../common/ProjectList/ProjectList.js";
// import Link from "common/Link";
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup'
import InputGroup from 'react-bootstrap/InputGroup';

import Helpmodal from "../../common/Help_modal";
// import SplitButton from 'react-bootstrap/SplitButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';

export default class landingPage extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }
    
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,

            itemlist: [
                {project_name: "Dummy Project", project_description: "https://via.placeholder.com/70X70", stage: "Dummy"},
                {project_name: "Dummy Project", project_description: "https://via.placeholder.com/70X70", stage: "Dummy"},
                {project_name: "Dummy Project", project_description: "https://via.placeholder.com/70X70", stage: "Dummy"},
                {project_name: "Dummy Project", project_description: "https://via.placeholder.com/70X70", stage: "Dummy"},
                {project_name: "Dummy Project", project_description: "https://via.placeholder.com/70X70", stage: "Dummy"},
                {project_name: "Dummy Project", project_description: "https://via.placeholder.com/70X70", stage: "Dummy"},
                {project_name: "Dummy Project", project_description: "https://via.placeholder.com/70X70", stage: "Dummy"},
                {project_name: "Dummy Project", project_description: "https://via.placeholder.com/70X70", stage: "Dummy"},
                {project_name: "Dummy Project", project_description: "https://via.placeholder.com/70X70", stage: "Dummy"},
                {project_name: "Dummy Project", project_description: "https://via.placeholder.com/70X70", stage: "Dummy"},
                
            ],
        }

        this.handleModalChange = this.handleModalChange.bind(this);
        this.myprojects = this.myprojects.bind(this);
    }

    componentDidMount() {
        //TODO: URDL FOR ALL PROJECTS
        axios.get(backend + "pathfinders/ecell").then((res) => {
                let Lists = [];
                for (let i = 0; i < res.data.length; i++) {
                    Lists.push(res.data[i]);
                }
                this.setState({itemlist: Lists});
            });
    }
    shouldComponentUpdate(){
        return true;
    }


    myprojects(){
        //TODO: URL FOR MY PROJECTS
        // axios.get(backend + "pathfinders/ecell").then((res) => {
        //     let Lists = [];
        //     for (let i = 0; i < res.data.length; i++) {
        //         Lists.push(res.data[i]);
        //     }
        //     this.setState({itemlist: Lists});
        // });

        console.log("hello");
    }


    handleModalChange() {
        this.setState((prevState) => ({ modalShow: !prevState.modalShow }))
    }
    render() {
        return (
            <div className={box +" row mt-5 pb-3"}>
                <div className={dynamic_left + " col-md-8"} >
                    <hr />

                    <div className="row m-2">
                        <div className="col-md-10">
                            
                            <InputGroup className="">
                                <FormControl
                                    aria-describedby="basic-addon2"
                                    aria-label="Project Name"
                                    placeholder="Search Project via Name"
                                />
                                
                                <Button
                                    className={leftButtons + " fs-5"}
                                    id="button-addon2"
                                >
                                    Search
                                </Button>
                            </InputGroup>
                        </div>

                        <div className="col-md-2 ">
                            <button
                                className={leftButtons + " col-md-5 btn fs-5"}
                                // eslint-disable-next-line react/jsx-handler-names
                                onClick={this.myprojects}
                                type="button"
                            >
                                M
                            </button>
                        </div>
                    </div>


                    <div className="filters text-center">
                        Space for bookmarks and dialoguebox and sort by
                    </div>


                    <div className="bg-white mt-3 ">
                        <CardGroup>


                            <ProjectList
                                ItemList={this.state.itemlist}
                            />
                            
                        </CardGroup>
                    </div>
                </div>

                <div className={static_right + " col-md-4 rounded-1"}>
                    <hr />

                    <div>
                        <div>
                            <span className="pb-2 fw-bold fs-1">
                                E-CEll
                            </span>

                            <span className="fs-5">
                                PathFinders
                            </span>
                        </div>

                        <div>
                            <span className="fs-3">
                                Guidelines and details
                            </span>

                            <p className="fs-5">
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                            </p>
                        </div>

                        <div>
                            <span className="fs-3">
                                Guidelines and details
                            </span>

                            <p className="fs-5">
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                            </p>
                        </div>

                        <div>
                            {/* <button
                                className="col-md-8 btn btn-primary mt-2 ml-1"
                                onClick={() => console.log("hello")}
                                type="button"
                            >   
                                <span className="h4">
                                    Submit and Secure
                                </span>
                            </button> */}

                            <Link
                                className="col-md-7 btn btn-light mt-2 ml-1 "
                                to="/pathfinders/submissionPage"
                                type="button"
                            >
                                <span className="h4">
                                    Submit and Secure
                                </span>
                            </Link>

                            <button
                                className=" offset-1 col-md-3 btn btn-light mt-2 ml-1"
                                onClick={this.handleModalChange}
                                type="button"
                            >
                                <span className="material-icons">
                                    help_outline
                                </span>
                            </button>

                            <Helpmodal
                                onHide={this.handleModalChange}
                                show={this.state.modalShow}
                            />


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
