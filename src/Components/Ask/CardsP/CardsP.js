
import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import "./CardsP.css";
import PropTypes from "prop-types";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import backend from "../../../env";
import axios from "axios";
import {SvgIcon} from "../../../common/SvgIcon";
import {Fade} from "react-awesome-reveal";

function handleSubmit(e, message, teacher_id, skills){
    axios.post(backend+"connect/request/", {
        id: teacher_id,
        message: message,
        skills: skills
    }).then(()=> {
        alert("Your connection request has been sent")
    })
        .catch((err) => {
            if (err.response.status === 429) // THROTTLED
                alert("You have submitted too many requests in the past 24 hours. Please wait before submitting more.")
            else if (err.response.status === 403) // Previous unaccepted request logged
                alert("You have already sent a similar request to the same person")
        })

    e.preventDefault()
}

function handleSpanUp(){
    console.log("up")
}

function handleSpanDown(){
    console.log("down")
}

function renderVotesNeeded(props) {
    if (props.votes) {
        return (
            <div className="row">
                <div className="col-3" />

                <div className="col-3">
                    <span
                        className="material-icons col-auto btn btn-lg"
                        onClick={handleSpanUp}
                    >
                        thumb_up
                    </span>
                </div>

                <div className="col-1">
                    <span
                        className="material-icons col-auto btn btn-lg"
                        onClick={handleSpanDown}
                    >
                        thumb_down
                    </span>
                </div>
            </div>
        )
    }

    else{
        return null
    }
}

function CardsP (props) {
    const [message, setMessage] = useState("");
    return (
        <Fade className="float-right" >
            <Card className="card_main" >
                <Card.Body>
                    <Card.Title className="main_title">
                        {props.name}
                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">
                        {props.batch}
                    </Card.Subtitle>

                    <Card.Text>
                        {props.description}
                    </Card.Text>

                    {renderVotesNeeded(props)}

                    <div>
                        <button
                            className="btn btn-primary"
                            id={"UncontrolledPopover" + props.key_value}
                            onClick={() => setMessage("")}
                            type="button"
                        >
                            Connect
                        </button>

                        <UncontrolledPopover
                            placement="bottom"
                            target={"UncontrolledPopover" + props.key_value}
                            trigger="legacy"
                        >
                            <PopoverHeader>
                                Popover Title
                            </PopoverHeader>

                            <PopoverBody>
                                <div>
                                    <label>
                                        To : @
                                        {''}

                                        {props.name}
                                    </label>

                                    <input
                                        className="form-control"
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Enter message"
                                        type="text-area"
                                        value={message}
                                    />

                                    <button
                                        className="btn btn-primary"
                                        onClick={(e) => handleSubmit(e, message, props.key_value, props.skills)}
                                        type="button"
                                    >
                                        Send
                                    </button>
                                </div>

                            </PopoverBody>
                        </UncontrolledPopover>
                    </div>

                    <br />

                    {/*<Card.Link href={props.insta}>
                        <svg
                            className="bi bi-instagram"
                            fill="#000000"
                            height="20"
                            viewBox="0 0 16 16"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >

                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                            />
                        </svg>
                    </Card.Link>*/}

                    <Card.Link
                        href={"https://www.linkedin.com/in/"+ props.linked}
                        target="_blank"
                    >
                        <SvgIcon
                            height="20px"
                            src="linkedin.svg"
                            width="20px"
                        />
                    </Card.Link>

                    <Card.Link
                        href={"https://www.github.com/"+ props.Git}
                        target="_blank"
                    >
                        <SvgIcon
                            height="25px"
                            src="github.svg"
                            width="25px"
                        />
                    </Card.Link>
                </Card.Body>
            </Card>
        </Fade>
    );

}

CardsP.propTypes = {
    Git:PropTypes.string.isRequired,
    batch:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    // insta:PropTypes.string.isRequired,
    key_value: PropTypes.string.isRequired,
    linked:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default CardsP;
