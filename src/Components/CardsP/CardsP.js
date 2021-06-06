
import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import "./CardsP.css";
import PropTypes from "prop-types";
import {SvgIcon} from "../../common/SvgIcon";
import {Fade} from "react-awesome-reveal";
import {Col, OverlayTrigger, Row} from "react-bootstrap";
import {Popover} from "react-bootstrap";

function handleSpanUp(){
    console.log("up")
}

function handleSpanDown(){
    console.log("down")
}

function renderVotesNeeded(canVote,props) {

    function handleSubmit(e, message, teacher_id){
    props.onConnect(message, teacher_id)
    e.preventDefault()
}

    const [message, setMessage] = useState("");

    const connectPopover = (
        <Popover>
            <Popover.Content>

                <div>
                    <label>
                        To : @
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
                        className="btn btn-primary mt-2"
                        onClick={(e) => handleSubmit(e, message, props.key_value)}
                        type="button"
                    >
                        Send
                    </button>
                </div>

            </Popover.Content>
        </Popover>
    )

    function  handleConnect(){
        return(
            <OverlayTrigger
                overlay={connectPopover}
                placement="bottom"
                rootClose
                transition={null}
                trigger="click"
            >
                {({ ref, ...triggerHandler }) => (
                    <div
                        className="btn btn-primary col-auto"
                        {...triggerHandler}
                    >
                        <span ref={ref}>
                            Connect
                        </span>
                    </div>)}
            </OverlayTrigger>
        )
    }
            
    
    if (canVote) {
        return (
            <Row>
                <Col>
                    <span
                        className="material-icons col-auto btn btn-lg"
                        onClick={handleSpanUp}
                    >
                        thumb_up
                    </span>
                </Col>

                <Col>
                    <span
                        className="material-icons col-auto btn btn-lg"
                        onClick={handleSpanDown}
                    >
                        thumb_down
                    </span>
                </Col>

                {handleConnect()}
            </Row>
        )
    }
    else if (canVote === false){
        return(
            <Row>
                <Col>
                    {handleConnect()}
                </Col>
            </Row>
        )
    }

    else{
        return null
    }
}

function CardsP (props) {
    return (
        <Fade className="float-right" >
            <Card className="card card_P" >
                <Card.Body>
                    <Card.Title className="main_P_title">
                        {props.name}
                    </Card.Title>

                    <hr />
                        
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
                            <div className="col">
                                {renderVotesNeeded(props.canVote,props)}
                            </div>

                        </div>:null}

                </Card.Body>
            </Card>
        </Fade>
    );

}

CardsP.propTypes = {
    Git:PropTypes.string.isRequired,
    batch:PropTypes.string.isRequired,
    canVote:PropTypes.bool,
    course:PropTypes.string.isRequired,
    // description:PropTypes.string.isRequired,
    linked:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

    showConnect: PropTypes.bool,
}

CardsP.defaultProps = {
    canVote:false,
    showConnect: false,
}

renderVotesNeeded.PropTypes={
    key_value: PropTypes.string.isRequired,
    onConnect: PropTypes.func,
}

renderVotesNeeded.defaultProps ={
    onConnect: null,
}

export default CardsP;
