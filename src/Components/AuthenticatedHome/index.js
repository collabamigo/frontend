
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import React from "react";
import {Fade} from "react-awesome-reveal";
import {isMobile} from "react-device-detect";
import {SvgIcon} from "../../common/SvgIcon";
import './index.css'

function Index() {
    return (
        <div className="row justify-content-center h-100">
            <Fade
                className="col-4 h-100"
                direction={isMobile?"left":"up"}
                triggerOnce
            >
                <Card className="authenticatedHome_card_main text-secondary h-75 card mb-3 ml-4">
                    <SvgIcon
                        height="220"
                        src="help_others.svg"
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
                className="col-4 h-100"
                direction={isMobile?"right":"up"}
                triggerOnce
            >
                <Card className="card authenticatedHome_card_main h-75 text-secondary mb-3 mx-2">
                    <SvgIcon
                        height="210"
                        src="ask_for_help.svg"
                        width="300"
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
                className="col-4 h-100"
                direction={isMobile?"left":"up"}
                triggerOnce
            >
                <Card className="card authenticatedHome_card_main h-75 text-secondary mr-4">
                    <SvgIcon
                        height="220"
                        src="collaborate.svg"
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
                            to="/collab_connect"
                        >
                            Coming Soon...
                        </div>

                    </Card.Body>
                </Card>
            </Fade>
        </div>
        
    )    
} 

export default Index;
// TODO: Attribution to freepik.com pending
