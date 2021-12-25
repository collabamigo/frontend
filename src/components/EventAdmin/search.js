import React, { useState } from 'react';
import EventList from './evenList';
import "react-bootstrap";
import PropTypes from "prop-types";
import * as styles from './eventadmin.module.css';

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
            <h1 className="w-50 text-center fw-bold">
                Events
            </h1>

            <div className="w-100 d-flex flex-md-row flex-column my-4">
                <div className="w-75 text-center">

                    <input
                        className="rounded-3 w-50 h-75"
                        id=""
                        name=""
                        onChange={handleChange}
                        placeholder="Search"
                        type="search"
                    />
                </div>

                <div className="w-25 d-flex justify-content-center mt-md-0 mt-3">
                    <button
                        className={styles.createEventButton + " text-light"}
                        type="button"
                    >
                        Create New Event
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