import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image';
import {logo, eventDetails} from "./ClubCard.module.css";
import Link from "common/Link";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

export default class ClubCard extends Component {

    static propTypes = {
        Type: PropTypes.string.isRequired,
        element: PropTypes.objectOf(PropTypes.string).isRequired,
    }

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.handlechangemodalshow = this.handlechangemodalshow.bind(this);
        this.state = {modalshow: false,btnavail:true}
    }

    shouldComponentUpdate()
    { return true;}

    handler(event){
        this.handlechangebtnavail(event);
    }

    handlechangebtnavail() {
        this.setState((prevState) => ({ btnavail: !prevState.btnavail }))
        // this.setState({btnavail: !this.state.btnavail})
    }

    handlechangemodalshow() {
        this.setState((prevState) => ({ modalshow: !prevState.modalshow }))
        // this.setState({modalshow: !this.state.modalshow})
    }

    render() {
        var clublink = "/club?name=" + this.props.element.name
        console.log(this.props.element, " hiiii")
        if(this.props.element === undefined) {
            return null;
        }
        else{
            if(this.props.Type === "Club"){
                return (
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <div className=" mb-3 h-100">
                            <Link to={clublink}>
                                <Button
                                    className="btn"
                                    type="button"
                                >

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

                )
            }
            else if (this.props.Type === "Event"){
                return (
                    <div className="col-sm-6 col-lg-4 mb-3">
                        <Card className={eventDetails}>
                            <Card.Body>
                                <Card.Title className="text-start h1 pb-2">
                                    {this.props.element.name}
                                </Card.Title>

                                <ul className="">
                                    <li className="text-start list-inline-item">
                                        <span>
                                            {" "}
                                        </span>
                                    </li>

                                    <li className="text-start list-inline-item">
                                        <span>
                                            {" "}
                                        </span>
                                    </li>
                                </ul>

                                {/* <Card.Subtitle className="mb-2 text-muted">
                                        Card Subtitle
                                    </Card.Subtitle> */}

                                <Card.Text className="text-start text-muted h6">
                                    {this.props.element.description}
                                </Card.Text>

                                {/* <Card.Link href="#">
                                        Card Link
                                    </Card.Link>

                                    <Card.Link href="#">
                                        Another Link
                                    </Card.Link> */}
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        }
    }
}
