import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";


export default function FaqCard({ event }) {
    return (
        <Accordion
            className="w-100"
            defaultActiveKey="1"
            key={event['question']}
        >
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    {event["question"]}
                </Accordion.Header>

                <Accordion.Body>
                    {event["answer"]}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

FaqCard.propTypes = {
    event: PropTypes.arrayOf(PropTypes.object).isRequired
}