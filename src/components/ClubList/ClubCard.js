import React, { Component } from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import * as styles from "./ClubCard.module.css";
import Link from "common/Link";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

export default class ClubCard extends Component {
    static propTypes = {
        Type: PropTypes.string.isRequired,
        element: PropTypes.objectOf(PropTypes.string).isRequired,
    };

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.handlechangemodalshow = this.handlechangemodalshow.bind(this);
        this.state = { modalshow: false, btnavail: true };
    }

    shouldComponentUpdate() {
        return true;
    }

    handler(event) {
        this.handlechangebtnavail(event);
    }

    handlechangebtnavail() {
        this.setState((prevState) => ({ btnavail: !prevState.btnavail }));
        // this.setState({btnavail: !this.state.btnavail})
    }

    handlechangemodalshow() {
        this.setState((prevState) => ({ modalshow: !prevState.modalshow }));
        // this.setState({modalshow: !this.state.modalshow})
    }

    render() {
        var clublink = "/club?name=" + this.props.element.name;
        console.log(this.props.element, " hiiii");
        if (this.props.element === undefined) {
            return null;
        } else {
            if (this.props.Type === "Club") {
                return (
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <div className=" mb-3 h-100">
                            <Link to={clublink}>
                                <Button className="btn" type="button">
                                    <Image
                                        className={logo}
                                        fluid
                                        src={this.props.element.picture}
                                    />

                                    <h5 className="">
                                        {this.props.element.name}
                                    </h5>
                                </Button>
                            </Link>
                        </div>
                    </div>
                );
            } else if (this.props.Type === "Event") {
                return (
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <Card
                            className="m-5"
                            style={{ width: "18rem", borderRadius: "20px" }}
                            // className={styles.eventCard}
                        >
                            <Card.Img
                                className={styles.eventImage}
                                src={this.props.element.link}
                                variant="top"
                            />

                            <Card.Body>
                                <Card.Title className="d-flex justify-content-between fs-4">
                                    {this.props.element.name}

                                    <p className="fs-6 text-black-50">
                                        {this.props.element.timestamp}
                                    </p>
                                </Card.Title>

                                <Card.Text style={{ fontSize: 15 }}>
                                    {this.props.element.description}
                                </Card.Text>
                            </Card.Body>

                            <div className="d-flex flex-row justify-content-between text-xs px-3">
                                <p className="fs-6 text-primary">
                                    {this.props.element.clubName}
                                </p>

                                <p className="fs-6 text-primary">
                                    Explore
                                    <svg
                                        className="bi bi-arrow-right-short text-primary"
                                        fill="currentColor"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        width="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </p>
                            </div>
                        </Card>
                    </div>
                );
            }
        }
    }
}
