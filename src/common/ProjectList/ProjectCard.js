
import React, {useState} from "react";
// import {Pathfinder_Project_Cards, main_P_title} from "./Pathfinder_Project_Card.module.css";
import PropTypes from "prop-types";
import {Card} from "react-bootstrap";

function Pathfinder_Project_Card (props) {
    var x;
    if(props.Is_Bookmarked){
        x = "bookmark";
    }
    else{
        x = "bookmark_border";
    }

    const [bookmark, setbookmark] = useState(x);

    function handleBookmark(){
        if(bookmark === "bookmark"){
            setbookmark("bookmark_border");
        }
        else{
            setbookmark("bookmark");
        }        
    }

    return (
            <Card className="">
                <Card.Body>
                    <Card.Title>
                        <div className="row">
                            <div className="col-sm fs-4">
                                {props.project_name}
                            </div>

                            <div className="col-3">
                                <span
                                    className="material-icons"
                                    onClick={handleBookmark}
                                    type="button"
                                >
                                    {bookmark}
                                </span>
                            </div>
                        </div>

                    </Card.Title>

                    <Card.Body>
                        <div className="row">
                            <Card.Text className="col-md-8">
                                {props.project_description}
                            </Card.Text>

                            <div className="col-md-4">
                                <div>
                                    TL;DR
                                </div>

                                <div>
                                    Contact
                                    {props.Ongoing}

                                    {props.Contact}
                                </div>
                            </div>

                        </div>


                    </Card.Body>
                </Card.Body>

                <Card.Footer>
                    <small className="text-muted">
                        Submitted on:
                        {' '}

                        {props.Submitted}
                    </small>
                </Card.Footer>
            </Card>
        // </Fade>
    );

}

Pathfinder_Project_Card.propTypes = {
    project_description: PropTypes.string,
    Contact: PropTypes.string.isRequired,
    Is_Bookmarked: PropTypes.bool,
    Ongoing: PropTypes.bool,
    project_name : PropTypes.string,
    Submitted: PropTypes.string.isRequired,
    element: PropTypes.objectOf(PropTypes.string).isRequired,
    
}

Pathfinder_Project_Card.defaultProps = {
    project_description: "Lorem Ipsum",
    Is_Bookmarked: false,
    Ongoing: true,
    project_name: "Project Name",
}

export default Pathfinder_Project_Card;
