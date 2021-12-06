import React from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";
import styles from "./ClubCard.module.css";


export default function ClubCard(props) {
    return (
        <div className={styles.cardCenter}>
            <Card  >
                <Card.Img
                    src={props.element.src}
                    variant="top"
                />

                <Card.Body>
                    <Card.Title>
                        {props.element.title}
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

ClubCard.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    element: PropTypes.object,

}

ClubCard.defaultProps = {
    element:{
        src: "https://via.placeholder.com/450x450",
        title: "Event title",
    }
}