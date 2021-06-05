
import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import "./CardsP.css";
import PropTypes from "prop-types";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import {SvgIcon} from "../../common/SvgIcon";
import {Fade} from "react-awesome-reveal";
import {Col, Row} from "react-bootstrap";


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

    function handleSubmit(e, message, teacher_id){
        props.onConnect(message, teacher_id)
        e.preventDefault()
    }

    const [message, setMessage] = useState("");
    return (
        <Fade className="float-right" >
            <Card className="card card_P" >
                <Card.Body>
                    <Card.Title className="main_P_title">
                        {props.name}
                    </Card.Title>

                    <hr />

                    {/*<Card.Subtitle className="mb-2 text-muted float left">*/}

                    {/*    {props.batch}*/}

                    {/*</Card.Subtitle>*/}
                        
                    <Row>
                        <Col>
                            <Card.Text className="mb-2 text-muted float-left">
                                {/*{props.description}*/}

                                {props.batch + ".Tech,"}

                                <br />

                                {props.course}

                            </Card.Text>
                        </Col>
                        
                        <Col>
                            <Card.Link
                                className="float-right"
                                href={"https://www.linkedin.com/in/"+ props.linked}
                                target="_blank"
                            >
                                <SvgIcon
                                    height="24px"
                                    src="linkedin.svg"
                                    width="24px"
                                />
                            </Card.Link>

                            <Card.Link
                                href={"https://www.github.com/"+ props.Git}
                                target="_blank"
                            >
                                <SvgIcon
                                    height="30px"
                                    src="github.svg"
                                    width="30px"
                                />
                            </Card.Link>
                        </Col>
                    </Row>

                    <br />

                    {props.showConnect?
                        <div className="row">

                            {renderVotesNeeded(props)}

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
                                            onClick={(e) => handleSubmit(e, message, props.key_value)}
                                            type="button"
                                        >
                                            Send
                                        </button>
                                    </div>

                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>:null}

                </Card.Body>
            </Card>
        </Fade>
    );

}

CardsP.propTypes = {
    Git:PropTypes.string.isRequired,
    batch:PropTypes.string.isRequired,
    course:PropTypes.string.isRequired,
    // description:PropTypes.string.isRequired,
    key_value: PropTypes.string.isRequired,
    linked:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onConnect: PropTypes.func,
    showConnect: PropTypes.bool,
}

CardsP.defaultProps = {
    onConnect: null,
    showConnect: false
}

export default CardsP;
