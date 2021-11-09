import React, { useState } from 'react';
import EventList from './evenList';
import "react-bootstrap";
import PropTypes from "prop-types";

export default function Search({ details }) {
    const [searchField, setSearchField] = useState("");

    const filteredEvents = details.filter(
        event => {
            return (
                event
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                event
                    .description
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                event
                    .clubName
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = event => {
        setSearchField(event.target.value);
    };

    function searchList() {
        return (
            <EventList filteredEvents={filteredEvents} />
        )
    }

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
                        onChange={handleChange}
                        placeholder="Search"
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

            {searchList()}

        </div>
    )
}

Search.propTypes = {
    details: PropTypes.arrayOf(PropTypes.object).isRequired
}