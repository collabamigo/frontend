import React from 'react';
import Card from "react-bootstrap/Card";

export default class eventCard {
    constructor(props) {
        this.props = props;
    }

    render() {
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
                    {this.props.name}

                    <p className="fs-6 text-black-50">
                        {this.props.timestamp}
                    </p>
                </Card.Title>

                <Card.Text>
                    {this.props.description}
                </Card.Text>
            </Card.Body>

            <div className="d-flex flex-row justify-content-between text-xs px-3">
                <p className="fs-6">
                    {this.props.clubName}
                </p>

                <p className="fs-6">
                    Explore
                </p>
            </div>
        </Card>
    }
}