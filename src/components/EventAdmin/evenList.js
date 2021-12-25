import React from 'react';
import EventCard from "./eventCard";
import PropTypes from "prop-types";

export default function EventList({ filteredEvents }) {
    const filtered = filteredEvents.map(event => {
        return (<EventCard
            event={event}
            key={event.id}
                />)
    })

    return (
        <div className="d-flex flex-wrap">
            {filtered}
        </div>
    );
}

EventList.defaultProps = {
    filteredEvents: []
}

EventList.propTypes = {
    filteredEvents: PropTypes.arrayOf(PropTypes.object)
}