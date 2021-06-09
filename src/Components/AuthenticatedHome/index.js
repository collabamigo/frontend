
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import React from "react";
import {Fade} from "react-awesome-reveal";
import {isMobile} from "react-device-detect";
import {SvgIcon} from "../../common/SvgIcon";
import './index.css'

function AuthenticatedHome() {
    return (
        <div className="row justify-content-center h-75 w-100">
            <Fade
                className="col-lg-4 col-md-6 col-sm-12 h-100 mt-2 mb-3"
                direction={isMobile?"left":"up"}
                triggerOnce
            >
                <Card className="authenticatedHome_card_main text-secondary h-100 card ml-4 mr-1">
                    <SvgIcon
                        height="56%"
                        src="help_others.svg"
                        width="100%"
                    />

                    <Card.Body>
                        <Card.Title className="card-title font-weight-bold">
                            HELP OTHERS
                        </Card.Title>

                        <br />

                        <Card.Text className="card-text masthead">
                            Solve other&apos;s doubts and be the mentor you always wanted.
                            Using our platform you can reach a larger curious community.
                        </Card.Text>

                        <Link
                            className="col-auto btn btn-primary"
                            to="/help"
                        >
                            Help others
                        </Link>

                    </Card.Body>
                </Card>
            </Fade>

            <Fade
                className="col-lg-4 col-md-6 col-sm-12 h-100 mt-2 mb-3"
                direction={isMobile?"right":"up"}
                triggerOnce
            >
                <Card className="card authenticatedHome_card_main h-100 text-secondary mx-lg-3 mr-md-4 ml-md-2 ml-sm-4 mr-sm-1">
                    <SvgIcon
                        height="56%"
                        src="ask_for_help.svg"
                        width="100%"
                    />

                    <Card.Body className="card-body">
                        <Card.Title className="card-title font-weight-bold">
                            ASK FOR HELP
                        </Card.Title>

                        <br />

                        <Card.Text className="card-text">
                            <b>
                                Stack Overflow:404!
                            </b>

                            {" "}
                            Answer not found,

                            <br />
                            The button below can solve it
                        </Card.Text>

                        <br />

                        <Link
                            className="col-auto btn btn-primary"
                            to="/ask"
                        >
                            Ask for help
                        </Link>
                    </Card.Body>
                </Card>
            </Fade>

            <Fade
                className="col-lg-4 col-md-6 col-sm-12 h-100 mt-2 mb-3"
                direction={isMobile?"left":"up"}
                triggerOnce
            >
                <Card className="card authenticatedHome_card_main h-100 text-secondary mr-lg-2 ml-lg-1 ml-sm-4 mr-sm-1">
                    <SvgIcon
                        height="56%"
                        src="collaborate.svg"
                        width="100%"
                    />

                    <Card.Body className="card-body">
                        <Card.Title className="card-title font-weight-bold">
                            LET&apos;S  COLLABORATE
                        </Card.Title>

                        <br />

                        <Card.Text className="card-text">
                            Find new projects to work.
                            Apply for teams and Collaborations.
                            Lets keep the learning and helping community alive.
                        </Card.Text>

                        <div
                            className="col-auto btn btn-primary disabled"
                        >
                            Coming Soon...
                        </div>

                    </Card.Body>
                </Card>
            </Fade>
        </div>
        
    )    
} 

export default AuthenticatedHome;
// TODO: Attribution to freepik.com pending
