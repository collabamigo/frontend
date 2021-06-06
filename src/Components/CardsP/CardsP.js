
import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import "./CardsP.css";
import PropTypes from "prop-types";
import {SvgIcon} from "../../common/SvgIcon";
import {Fade} from "react-awesome-reveal";
import {OverlayTrigger} from "react-bootstrap";
import {Popover} from "react-bootstrap";

function handleSpanUp(){
    console.log("up")
}

function handleSpanDown(){
    console.log("down")
}



function CardsP (props) {
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
    return (
        <Fade className="float-right" >
            <Card className="card card_P" >
                <Card.Body>
                    <Card.Title className="main_P_title">
                        <strong>
                            {props.name}
                        </strong>

                    </Card.Title>

                    <hr />

                    <div className="row">
                        <div className="col">
                            <Card.Text className="mb-2 text-muted float-left">
                                {/*{props.description}*/}

                                {props.batch + ".Tech,"}

                                <br />

                                {props.course}

                            </Card.Text>
                        </div>

                        <div className="col">
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
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col" />

                        {props.showVoting? (
                            <>
                                <span
                                    className="material-icons col-auto btn"
                                    onClick={handleSpanUp}
                                >
                                    thumb_up
                                </span>

                                <span
                                    className="material-icons col-auto btn"
                                    onClick={handleSpanDown}
                                >
                                    thumb_down
                                </span>

                            </>):null}

                        

                        {props.showConnect?(
                            <>
                                <div className="col" />
                            
                                <OverlayTrigger
                                    className="col-auto"
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
                            </>
                    ):null}

                        <div className="col" />

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
    showVoting: PropTypes.bool,
}

CardsP.defaultProps = {
    onConnect: () => {},
    showConnect: false,
    showVoting: false
}

export default CardsP;
