import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
import {dynamic_left} from "./landingPage.module.css";
import {static_right} from "./landingPage.module.css";
import Link from "common/Link";
import Button from 'react-bootstrap/Button'
import CustomCard from "../../common/Pathfinder_Project_Card/Pathfinder_Project_Card.js";
import CardGroup from 'react-bootstrap/CardGroup'
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';

export default class landingPage extends Component {
    static propTypes = {
        prop: PropTypes
    }
    shouldComponentUpdate(){
        return true;
    }

    render() {
        return (
            <div className=" row mt-5">
                <div className={dynamic_left + " col-md-8"} >
                    <div className="row m-2">
                        <div className="col-md-10">
                            
                            <InputGroup className="">
                                <FormControl
                                    aria-describedby="basic-addon2"
                                    aria-label="Recipient's username"
                                    placeholder="Recipient's username"
                                />
                                
                                <Button
                                    id="button-addon2"
                                    variant="primary"
                                >
                                    Search
                                </Button>
                            </InputGroup>
                        </div>

                        <div className="col-md-2 ">
                            <button
                                className="col-md-4 btn btn-primary "
                                onClick={() => console.log("hello")}
                                type="button"
                            >
                                M
                            </button>
                        </div>
                    </div>

                    <div className="filters text-center">
                        filters and clear all
                    </div>

                    <div className="filters text-center">
                        Space for bookmarks and dialoguebox and sort by
                    </div>


                    <div className="bg-white mt-3">
                        <CardGroup>
                            

                            <CustomCard />

                            <CustomCard />


                            <CustomCard />


                            <CustomCard />


                            
                        </CardGroup>
                    </div>
                </div>

                <div className={static_right + " col-md-4"}>
                    <div>
                        <div>
                            <span className="h1">
                                E-CEll
                            </span>

                            <span className="h6">
                                PathFinders
                            </span>
                        </div>

                        <div>
                            <span className="h1">
                                Guidelines and details
                            </span>

                            <p>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                            </p>
                        </div>

                        <div>
                            <span className="h1">
                                Guidelines and details
                            </span>

                            <p>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                            </p>
                        </div>

                        <div>
                            <button
                                className="col-md-8 btn btn-primary mt-2 ml-1"
                                onClick={() => console.log("hello")}
                                type="button"
                            >
                                Send
                            </button>

                            <button
                                className="col-md-4 btn btn-primary mt-2 ml-1"
                                onClick={() => console.log("hello")}
                                type="button"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
