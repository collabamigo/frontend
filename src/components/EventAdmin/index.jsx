/* eslint-disable react/require-default-props */
import React from "react";
import "react-bootstrap";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const eventList = [
    {
        timestamp: "1634640509",
        name: "Super magical Hackathon",
        clubName: "Byld",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        timestamp: "1634640509",
        name: "Super magical Hackathon",
        clubName: "GoogleDSC",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        timestamp: "1634640509",
        name: "Super magical Hackathon",
        clubName: "Byld",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        timestamp: "1634640509",
        name: "Super magical Hackathon",
        clubName: "GoogleDSC",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
];
eventList.concat(eventList);
const props = { eventList };
export default function EventAdmin() {
    // render() {
        console.log(props);
        return (
            <div className="mx-5 d-flex flex-column">
                <h1 className="">
                    Events
                </h1>

                <div className="w-100 d-flex flex-row my-4">
                    <div className="w-75">
                        <input
                            className="rounded"
                            id=""
                            name=""
                            type="search"
                        />
                    </div>

                    <div className="w-25 d-flex justify-content-center">
                        <button
                            className="p-3 border border-0 rounded"
                            type="button"
                        >
                            Create Event
                        </button>
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-center">
                    <Card
                        className="m-3"
                        style={{ width: "20rem" }}
                    >
                        <Card.Img
                            src="https://via.placeholder.com/200x100"
                            variant="top"
                        />

                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                {props.name}

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
                </div>
            </div>
        );
    // }
}
    

EventAdmin.propTypes = {
    clubName: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    timestamp: PropTypes.string,
};
