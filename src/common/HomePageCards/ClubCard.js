import React from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";
import styles from "./ClubCard.module.css";


export default function ClubCard(props) {
    return (
        <div className={styles.cardCenter}>
            <Card>
                <Card.Img
                    src={props.value.picture}
                    variant="top"
                />

                <Card.Body>
                    <Card.Title className={styles.title + " mb-2"}>
                        {props.value.name}
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

ClubCard.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.object,

}

ClubCard.defaultProps = {
    value:{
        src: "https://via.placeholder.com/450x450",
        title: "Event title",
    }
}