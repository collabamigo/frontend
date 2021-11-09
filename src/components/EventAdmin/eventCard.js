import React from 'react';
import Card from "react-bootstrap/Card";

export default function eventCard({ event }) {
    return (
        <Card
            className="m-3"
            style={{ width: "20rem" }}
        >
            <Card.Img
                src={event.link}
                variant="top"
            />

            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <h5>
                        {event.name}
                    </h5>

                    <p className="fs-6 text-black-50">
                        {event.timestamp}
                    </p>
                </Card.Title>

                <Card.Text>
                    {event.description}
                </Card.Text>
            </Card.Body>

            <div className="d-flex flex-row justify-content-between text-xs px-3">
                <p className="fs-6">
                    {event.clubName}
                </p>

                <p className="fs-6">
                    Explore
                </p>
            </div>
        </Card>
    )
}
