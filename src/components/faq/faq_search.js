import React, { useState } from 'react';
import "react-bootstrap";
import PropTypes from "prop-types";
import FaqList from "./faqList";


export default function FaqSearch({ details }) {
    const [searchField, setSearchField] = useState("");
    const filteredEvents = details.filter(
        event => {
            return (
                event
                    .question
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                event
                    .answer
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
            <FaqList filteredFaq={filteredEvents} />
        )
    }

    return (
        <div className="mx-5 d-flex flex-column">
            <h1 className="">
                FAQ
            </h1>

            <div className="w-100 d-flex flex-column my-4 pd-3">
                <div className="w-75">
                    <input
                        className="w-100"
                        onChange={handleChange}
                        placeholder="Search"
                        style={{ borderRadius: "10px"}}
                        type="search"
                    />
                </div>
            </div>

            {searchList()}

        </div>
    )
}

FaqSearch.propTypes = {
    details: PropTypes.arrayOf(PropTypes.object).isRequired
}