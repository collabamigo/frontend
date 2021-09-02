import React from 'react';
import ClubCard from './ClubCard.js';
// import PropTypes from 'prop-types'

export default function Boxes(boxesToRender) {
    if(boxesToRender === undefined){return null;}
    else if(boxesToRender.length === 0){return null;}
    else{
    return (
        <div className="container">
            <div className="row">
                {boxesToRender.map((boxdata) => (
                    <ClubCard
                        element={boxdata}
                        key={boxdata}
                    />
                    ))}
            </div>
        </div>
        );
    }
}

// Boxes.PropTypes = {
//     boxesToRender:PropTypes.objectOf(PropTypes.string.isRequired)
// }