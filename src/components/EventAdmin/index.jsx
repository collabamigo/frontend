import React from "react";
import 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import { searchDivHolder } from './index.module.css';

export default class EventAdmin extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
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
                        style={{ width: '20rem' }}
                    >
                        <Card.Img
                            src="https://via.placeholder.com/200x100"
                            variant="top"
                        />

                        <Card.Body>

                            <Card.Title className="d-flex justify-content-between">
                                Event Name

                                <p className="fs-6 text-black-50">
                                    3 Days Ago
                                </p>
                            </Card.Title>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>

                        <div className="d-flex flex-row justify-content-between text-xs px-3">
                            <p className="fs-6">
                                Club Name
                            </p>

                            <p className="fs-6">
                                Explore
                            </p>
                        </div>
                    </Card>

                    <Card
                        className="m-3"
                        style={{ width: '20rem' }}
                    >
                        <Card.Img
                            src="https://via.placeholder.com/200x100"
                            variant="top"
                        />

                        <Card.Body>

                            <Card.Title className="d-flex justify-content-between">
                                Event Name

                                <p className="fs-6 text-black-50">
                                    3 Days Ago
                                </p>
                            </Card.Title>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>

                        <div className="d-flex flex-row justify-content-between text-xs px-3">
                            <p className="fs-6">
                                Club Name
                            </p>

                            <p className="fs-6">
                                Explore
                            </p>
                        </div>
                    </Card>

                    <Card
                        className="m-3"
                        style={{ width: '20rem' }}
                    >
                        <Card.Img
                            src="https://via.placeholder.com/200x100"
                            variant="top"
                        />

                        <Card.Body>

                            <Card.Title className="d-flex justify-content-between">
                                Event Name

                                <p className="fs-6 text-black-50">
                                    3 Days Ago
                                </p>
                            </Card.Title>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>

                        <div className="d-flex flex-row justify-content-between text-xs px-3">
                            <p className="fs-6">
                                Club Name
                            </p>

                            <p className="fs-6">
                                Explore
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}
