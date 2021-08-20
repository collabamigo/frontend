import Link from "../../common/Link";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import React from "react";
import axios from "axios";
import backend from "../../env";
import { Fade } from "react-awesome-reveal";
import { isMobile } from "react-device-detect";
import { SvgIcon } from "../../common/SvgIcon";
import "./index.css";

class AuthenticatedHome extends React.Component {
    constructor(props) {
        super(props);
        // this.anything = this.anything.bind(this);
        this.state = {
            first: "BECOME A CONTRIBUTOR",
            second: "Contribute",
            third:
                "Solve other's doubts and be the mentor you always wanted.\n" +
                "Using our platform you can reach a larger community.",
            // clubList: {
            //     0 : ["Tasveer", "https://via.placeholder.com/70X70"],
            //     1 : ["MicDrop", "https://via.placeholder.com/70X70"],
            //     2 : ["Byld", "https://via.placeholder.com/70X70"],
            //     3 : ["D4rkcode", "https://via.placeholder.com/70X70"],
            //     4 : ["Litsoc", "https://via.placeholder.com/70X70"],
            // },
            clubList: {
                    "Tasveer": "https://via.placeholder.com/70X70",
                    "MicDrop": "https://via.placeholder.com/70X70",
                    "Byld": "https://via.placeholder.com/70X70",
                    "D4rkcode": "https://via.placeholder.com/70X70",
                    "Litsoc": "https://via.placeholder.com/70X70",
                    "Salt": "https://via.placeholder.com/70X70",
                    "Travel": "https://via.placeholder.com/70X70",
                    "CP": "https://via.placeholder.com/70X70",
                    "Foo": "https://via.placeholder.com/70X70",
                    "Philsoc": "https://via.placeholder.com/70X70",
                    "Seintards": "https://via.placeholder.com/70X70",
                    "Hehee": "https://via.placeholder.com/70X70",
                    "lol": "https://via.placeholder.com/70X70",
                    "anything": "https://via.placeholder.com/70X70",
                    "machaan": "https://via.placeholder.com/70X70",
                },
        };
    }

    componentDidMount() {
        axios.get(backend + "connect/teacher?format=json").then((res) => {
            if (res.data.length)
                this.setState({
                    first: "VIEW DASHBOARD",
                    second: "Dashboard",
                    third:
                        "Hi Collaborator," +
                        "\nView and edit your skills here. You can also see your " +
                        "work summary and the hot trending skills on the platform ",
                });
        });
    }

    shouldComponentUpdate() {
        return true;
    }

    anything() {
        let abcs = null;
        for (let i = 0; i < 100; i++) {
            abcs += (
                <div className="row mx-4">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="club-list">
                            <img
                                className="club-logo rounded-circle"
                                src={this.state.clubList[0][1]}
                            />

                            <p>
                                {this.state.clubList[0][0]}
                            </p>
                        </div>
                    </div>
                </div>
                    );
        }
        console.log(abcs);
        return (abcs)
    }

    render() {
        return (
            <div>
                <div className="row container-fluid h-75 w-100 justify-content-center card-group">
                    <Fade
                        className="col-lg-4 col-md-6 col-sm-12 h-auto mt-2 mb-3 card-group"
                        direction={isMobile ? "left" : "up"}
                        triggerOnce
                    >
                        <Card className="h-auto card ml-4 mr-1 zoom-my-card min-vh-80 justify-content-center mb-3">
                            <div className="justify-content-center">
                                <SvgIcon 
                                    src="help_others.svg" 
                                    width="97%"
                                />
                            </div>

                            <Card.Body className="mt-3">
                                <Card.Title className="font-weight-bold header-color">
                                    {this.state.first}
                                </Card.Title>

                                <br />

                                <Card.Text className="card-text text-muted h5">
                                    {this.state.third}
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="footer-custom pb-4">
                                <Link
                                    className="col-auto btn btn-primary"
                                    to="/help"
                                >
                                    {this.state.second}
                                </Link>
                            </Card.Footer>
                        </Card>

                        <Card className="card h-auto mx-2 zoom-my-card mb-3">
                            <SvgIcon
                                height="56%"
                                src="ask_for_help.svg"
                                width="100%"
                            />

                            <Card.Body className="mt-3">
                                <Card.Title className="font-weight-bold header-color">
                                    GET SOLUTIONS
                                </Card.Title>

                                <br />

                                <Card.Text className="card-text h5 text-muted ">
                                    <span>
                                        Stack Overflow:404!
                                    </span>
                                    Answer not found,
                                    
                                    <br />
                                    The button below can solve it.
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="footer-custom pb-4">
                                <Link
                                    className="col-auto btn btn-primary"
                                    to="/ask"
                                >
                                    Ask for help
                                </Link>
                            </Card.Footer>
                        </Card>

                        <Card className="card h-auto mx-2 zoom-my-card mb-3">
                            <SvgIcon
                                height="56%"
                                src="collaborate.svg"
                                width="100%"
                            />

                            <Card.Body className="mt-3">
                                <Card.Title className="card-title font-weight-bold header-color">
                                    LET&apos;S COLLABORATE
                                </Card.Title>

                                <br />

                                <Card.Text className="card-text h5 text-muted">
                                    Find new projects to work. Apply for teams
                                    and Collaborations. Lets keep the learning
                                    and helping community alive.
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="footer-custom pb-4">
                                <Link
                                    className="col-auto btn btn-primary"
                                    to="/project"
                                >
                                    Project
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Fade>
                </div>

                <Jumbotron >
                    <Container fluid>
                        <div className="d-flex flex-row justify-content-between">
                            <h1>
                                Associated Clubs
                            </h1>

                            <input 
                                aria-label="Search" 
                                className="form-control w-25" 
                                placeholder="Search..."
                                type="text" 
                            />
                        </div>

                        {/* <Container className="d-flex flex-row m-5">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="club-list">
                                        <img
                                            className="club-logo rounded-circle"
                                            src={this.state.clubList[0][1]}
                                        />

                                        <p>
                                            {this.state.clubList[0][0]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Container> */}

                        <Container className="d-flex flex-wrap m-5">
                            {Object.keys(this.state.clubList).map((clubLink) => (
                                <div 
                                    className="club-list mx-5 my-4" 
                                    key={this.key}
                                >
                                    <img
                                        className="club-logo rounded-circle"
                                        src={this.state.clubList[clubLink]}
                                    />

                                    <p>
                                        {clubLink}
                                    </p>
                                </div>
                            ))}
                        </Container>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
export default AuthenticatedHome;
// TODO: Attribution to freepik.com pending
