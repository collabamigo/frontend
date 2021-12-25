import React from 'react';
import Card from "react-bootstrap/Card";
import * as styles from './eventadmin.module.css';

export default function eventCard({ event }) {
    return (
        <Card
            className="m-5"
            style={{ width: "22rem", borderRadius: "20px" }}
            // className={styles.eventCard}
        >
            <Card.Img
                className={styles.eventImage}
                src={event.link}
                variant="top"
            />

            <Card.Body>
                <Card.Title className="d-flex justify-content-between fs-4">
                    {event.name}

                    <p className="fs-6 text-black-50">
                        {event.timestamp}
                    </p>
                </Card.Title>

                <Card.Text style={{fontSize: 15}}>
                    {event.description}
                </Card.Text>
            </Card.Body>

            <div className="d-flex flex-row justify-content-between text-xs px-3">
                <p className="fs-6 text-primary">
                    {event.clubName}
                </p>

                <p className="fs-6 text-primary">
                    Explore
                    <svg
                        className="bi bi-arrow-right-short text-primary"
                        fill="currentColor"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                            fillRule="evenodd"
                        />
                    </svg>
                </p>
            </div>
        </Card>
    )
}
