
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

function renderVotesNeeded(canVote) {
    if (canVote) {
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
    
    const connectPopover = (
        <Popover
            id="popover-basic"
        >
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

                    
                    <div className="row">

                        {renderVotesNeeded(props.showVoting)}

                        {props.showConnect?
                            <OverlayTrigger
                                overlay={connectPopover}
                                placement="bottom"
                                rootClose
                                transition={null}
                                trigger="click"
                            >
                                {({ ref, ...triggerHandler }) => (
                                    <div
                                        className="btn btn-primary"
                                        {...triggerHandler}
                                    >
                                        <span ref={ref}>
                                            Connect
                                        </span>
                                    </div>)}
                            </OverlayTrigger>


                        :null}
                    </div>

                </Card.Body>
            </Card>
        </Fade>
    );

}

CardsP.propTypes = {
    Git:PropTypes.string.isRequired,
    batch:PropTypes.string.isRequired,
    course:PropTypes.string.isRequired,
    key_value: PropTypes.string.isRequired,
    linked:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onConnect: PropTypes.func,
    showConnect: PropTypes.bool,
    showVoting:PropTypes.bool,

}

CardsP.defaultProps = {
    onConnect: null,
    showConnect: false,
    showVoting:false,


}

export default CardsP;
