import React from 'react';
import PropTypes from "prop-types";
import FaqCard from "./faqCard";

export default function FaqList({ filteredFaq }) {
    console.log("filtered receive", filteredFaq)
    const filtered = filteredFaq.map(event => {
        return (
            <FaqCard
                event={event}
                key={event.id}
            />
        )
    })

    return (
        <div className="d-flex flex-wrap">
            {filtered}
        </div>
    );
}

FaqList.defaultProps = {
    filteredFaq: []
}

FaqList.propTypes = {
    filteredFaq: PropTypes.arrayOf(PropTypes.object)
}