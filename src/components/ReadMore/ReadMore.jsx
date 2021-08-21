import React, { useState } from "react";
import "./ReadMore.css";

function ReadMore({props}) {
    const [readMore, setReadMore]=useState(false);
    const extraContent=
        (<div 
            className="club-list mx-5 my-4" 
            key={props.key}
        >
            <img
                className="club-logo rounded-circle"
                src={props.link}
            />

            <p>
                {props.name}
            </p>
         </div>)
    
    const linkName=readMore?'Read Less << ':'Read More >> '
    
    return (
        <div>
            <a onClick={() => {setReadMore(!readMore)}}>
                {linkName}
            </a>

            {readMore && extraContent}
        </div>
    );
}

export default ReadMore;