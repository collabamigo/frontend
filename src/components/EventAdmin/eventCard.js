import React from 'react';
import Card from "react-bootstrap/Card";

export default function eventCard(props) {
    return (
        <Card
            className="m-3"
            style={{ width: "20rem" }}
        >
            <Card.Img
                src={props.link}
                variant="top"
            />

            <Card.Body>
                <Card.Title className="d-flex justify-content-between">

                    <p className="fs-6 text-black-50">
                        {props.timestamp}
                    </p>
                </Card.Title>

                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>

            <div className="d-flex flex-row justify-content-between text-xs px-3">
                <p className="fs-6">
                    {props.clubName}
                </p>

                <p className="fs-6">
                    Explore
                </p>
            </div>
        </Card>
    )
}
