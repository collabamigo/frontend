
import React, {useState} from "react";
import "./CardsP.css";
import PropTypes from "prop-types";
import {SvgIcon} from "../../common/SvgIcon";
import {Fade} from "react-awesome-reveal";
import {OverlayTrigger, Popover, Card} from "react-bootstrap";
function CardsP (props) {
    function handleUpVote(){
        if (props.voteValue === 1)
            props.onVote(props.key_value, 0)
        else
            props.onVote(props.key_value, 1)
    }

    function handleDownVote(){
        if (props.voteValue === -1)
            props.onVote(props.key_value, 0)
        else
            props.onVote(props.key_value, -1)
    }

    function handleSubmit(e, message, teacher_id){
        props.onConnect(message, teacher_id)
        e.preventDefault()
    }

    const [message, setMessage] = useState("");
    
    const connectPopover = (
        <Popover id="popover-basic">
            <Popover.Content>

                <div>
                    <label>
                        To :
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
        <Fade className={"float-right " + props.className} >
            <Card className="card card_P" >
                
                <Card.Header className="main_P_title header-custom-das">
                    <span>
                        {props.name}
                    </span>
                </Card.Header>

                <Card.Body className="row">
                    <Card.Text className="col text-muted text-left">
                        <span className="h6">
                            {props.batch + ".Tech"}
                        </span>

                        <br />

                        <span className="h6">

                            {props.course + "-" + props.key_value.substring(1,3)}


                        </span>

                    </Card.Text>

                    <div className="col">
                        <Card.Link
                            className=""
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

                    <br />
                </Card.Body>

                <Card.Footer className="footer-custom">
                    <div className="row justify-content-center">

                        {props.showVoting? (
                            <>
                                <span
                                    className={"material-icons"+((props.voteValue === 1)?"":"-outlined")+" col-auto btn float-center pt-0 btn-lg"}
                                    onClick={handleUpVote}
                                >
                                    thumb_up
                                </span>

                                <span
                                    className={"material-icons"+((props.voteValue === -1)?"":"-outlined")+" col-auto btn float-center pt-0 btn-lg"}
                                    onClick={handleDownVote}
                                >
                                    thumb_down
                                </span>

                            </>):null}

                        {props.showVoting && props.showConnect?<div className="col" />:
                            (props.showConnect?<div className="col-auto" />:null)}

                        {props.showConnect?(
                            <>
                                <OverlayTrigger
                                    className=""
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

                                <div className="col-auto" />
                            </>
                    ):null}
                    </div>
                </Card.Footer>
            </Card>
        </Fade>
    );

}

CardsP.propTypes = {
    Git:PropTypes.string.isRequired,
    batch:PropTypes.string.isRequired,
    className: PropTypes.string,
    course:PropTypes.string.isRequired,
    key_value: PropTypes.string.isRequired,
    linked:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onConnect: PropTypes.func,
    onVote: PropTypes.func,
    showConnect: PropTypes.bool,
    showVoting: PropTypes.bool,
    voteValue: PropTypes.number,
    
}

CardsP.defaultProps = {
    className: "",
    onConnect: () => {},
    onVote: () => {},
    showConnect: false,
    showVoting: false,
    voteValue: 0,
}

export default CardsP;
