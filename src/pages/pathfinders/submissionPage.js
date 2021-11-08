import {navbar} from "./submissionPage.module.css";
import {static_left} from "./submissionPage.module.css";
import {dynamic_right} from "./submissionPage.module.css";


import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Card} from "react-bootstrap";

export default class submissionPage extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    shouldComponentUpdate(){
        return true;
    }
    render() {
        return (
            <section className="bg-danger">
                <Card className="m-5">
                    <div className="container-fluid text-center">    
                        <div className="row content">

                            <div className={static_left +" col-sm-8 text-left"}> 
                                <h1>
                                    Register and Feel safe
                                </h1>

                                <div className="bg-white">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                </div>

                                <hr />

                                <h3>
                                    Test
                                </h3>

                                <p>
                                    Lorem ipsum...
                                </p>
                            </div>

                            <div className={dynamic_right + " col-sm-4 sidenav"}>
                                <div className="well">
                                    <span className="h1">
                                        Guidlines to keep in mind
                                    </span>
                                </div>

                                <div className="well bg-danger">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>
        )
    }
}
