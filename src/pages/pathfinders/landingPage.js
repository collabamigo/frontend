import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card'
import Link from "common/Link";
import {leftButtons} from './landingPage.module.css';

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
                {name: "Tasveer", logo: "https://via.placeholder.com/70X70"},
                {name: "MicDrop", logo: "https://via.placeholder.com/70X70"},
                {name: "Byld", logo: "https://via.placeholder.com/70X70"},
                {name: "Litsoc", logo: "https://via.placeholder.com/70X70"},
                {name: "Meraki", logo: "https://via.placeholder.com/70X70"},
                {name: "MUSE", logo: "https://via.placeholder.com/70X70"},
                {name: "Philsoc", logo: "https://via.placeholder.com/70X70"},
                {name: "Electroholics", logo: "https://via.placeholder.com/70X70"},
                {name: "Cyborg", logo: "https://via.placeholder.com/70X70"},
                {name: "Astronuts", logo: "https://via.placeholder.com/70X70"},
                {name: "D4rkcode", logo: "https://via.placeholder.com/70X70"},
            ],
        }

        this.handleModalChange = this.handleModalChange.bind(this);
    }

    
    shouldComponentUpdate(){
        return true;
    }


    handleModalChange() {
        this.setState((prevState) => ({ modalShow: !prevState.modalShow }))
    }



    render() {
        return (
            <div className={box +" row mt-5 pb-3"}>
                <div className={dynamic_left + " col-md-8"} >
                    <hr/>
                    <div className="row">
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
                                onClick={() => console.log("hello")}
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
                    <hr/>
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
                                <span className="material-icons-outlined">
                                    comment
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
